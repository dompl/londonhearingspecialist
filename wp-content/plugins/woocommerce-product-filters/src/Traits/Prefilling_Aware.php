<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Traits;

use Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Database\Eloquent\Collection;
use Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Support\Collection as SupportCollection;
use Barn2\Plugin\WC_Filters\Model\Filters\Attribute;
use Barn2\Plugin\WC_Filters\Model\Filters\Color;
use Barn2\Plugin\WC_Filters\Model\Filters\Sale;
use Barn2\Plugin\WC_Filters\Model\Filters\Sorter;
use Barn2\Plugin\WC_Filters\Model\Filters\Stock;
use Barn2\Plugin\WC_Filters\Model\Filters\Taxonomy;
use Barn2\Plugin\WC_Filters\Model\Index;
use Barn2\Plugin\WC_Filters\Utils\Filters;
use Barn2\Plugin\WC_Filters\Utils\Responses;

use function Barn2\Plugin\WC_Filters\wcf;

/**
 * Adjusts the counting criteria of filters choices.
 *
 * For "checkboxes" types of filters, the user is allowed to select
 * one or more choices. When only one filter is used,
 * results are merged instead of being restricted to the
 * related selected choices.
 */
trait Prefilling_Aware {

	/**
	 * @var bool
	 */
	public function include_variations() {
		return isset( $this->with_variations ) ? $this->with_variations : false;
	}

	/**
	 * @inheritdoc
	 */
	public function get_choices_counts( array $post_ids, $filters = false, $prefilling = false ) {
		$db            = wcf()->get_service( 'db' );
		$count         = [];
		$other_filters = [];
		$post_ids      = apply_filters( 'wcf_get_choices_counts_post_ids', $post_ids, $this, $filters, $prefilling );

		if ( $filters instanceof SupportCollection ) {
			foreach ( $filters as $filter ) {

				if ( $filter instanceof Sorter || $filter instanceof Stock || $filter instanceof Sale ) {
					continue;
				}

				$other_filters[ $filter->slug ] = $filter->get_search_query();
			}
		}

		if ( $this instanceof Taxonomy || $this instanceof Attribute ) {
			$query = Index::select( 'facet_value', $db::raw( 'COUNT(DISTINCT post_id) AS counter' ) )
				->where( 'filter_id', $this->getID() )
				->groupBy( 'facet_value' )
				->orderBy( 'counter', 'DESC' )
				->orderBy( 'facet_value', 'ASC' );
		} else {
			$query = Index::select( 'term_id', $db::raw( 'COUNT(DISTINCT post_id) AS counter' ) )
				->where( 'filter_id', $this->getID() )
				->groupBy( 'term_id' )
				->orderBy( 'counter', 'DESC' )
				->orderBy( 'term_id', 'ASC' );
		}

		$other_filters   = Filters::array_remove_empty( $other_filters );
		$use_or_logic    = Filters::is_or_logic_enabled();
		$should_restrict = $this->should_restrict( $prefilling, $other_filters ) || Filters::is_taxonomy_page() || $this->taxonomy_filter_should_restrict( $prefilling, $other_filters );

		/**
		 * Filter: allows modification of logic used to restrict or merge results.
		 *
		 * @param bool $should_restrict Whether or not to restrict results.
		 * @param Filter $filter The filter instance.
		 * @param bool $prefilling Whether or not prefilling is enabled.
		 * @param array $other_filters Other filters used in the query.
		 * @return bool
		 */
		$should_restrict = apply_filters( 'wcf_should_restrict_choices_counts', $should_restrict, $this, $prefilling, $other_filters );

		if ( $should_restrict && ! $use_or_logic ) {
			$query->whereIn( 'post_id', $post_ids );
		}

		$query = $query->get();

		// If we need to include variations, we need to alter the counts.
		if ( $this->include_variations() && $should_restrict ) {
			$query2 = Index::select( 'facet_value', $db::raw( 'COUNT(DISTINCT post_id) AS counter' ) )
				->where( 'filter_id', $this->getID() )
				->whereIn( 'variation_id', $post_ids )
				->whereNotIn( 'post_id', $post_ids )
				->groupBy( 'facet_value' )
				->orderBy( 'counter', 'DESC' )
				->orderBy( 'facet_value', 'ASC' );

			$indexed_variations = $query2->get()->toArray();

			$query->transform(
				function ( $item, $key ) use ( $indexed_variations ) {
					$to_sum = false;

					foreach ( $indexed_variations as $indexed ) {
						if ( $indexed['facet_value'] === $item->facet_value ) {
							$to_sum = $indexed['counter'];
						}
					}

					if ( $to_sum ) {
						return $item->setAttribute( 'counter', absint( $to_sum ) + absint( $item->counter ) );
					}

					return $item;
				}
			);
		}

		// If we're on a taxonomy page we need to delete the object where the facet_value is the same as the queried term slug.
		if ( Filters::is_taxonomy_page() && $this instanceof Taxonomy ) {
			$queried_term_id       = get_queried_object_id();
			$queried_taxonomy_slug = get_queried_object()->taxonomy;
			$queried_term_slug     = get_queried_object()->slug;

			if ( get_queried_object()->taxonomy === $this->get_taxonomy_slug() ) {
				$query = Responses::cleanup_term_counters_on_taxonomy_page( $query, $queried_term_id, $queried_taxonomy_slug, $queried_term_slug );
			}
		}

		// If the filter has specific terms, we need to delete the terms that are not in the list.
		if ( $this instanceof Color && ! empty( $this->get_specific_terms() ) && $query instanceof Collection ) {
			$allowed_terms_ids = $this->get_specific_terms();

			// Filter the collection to only keep the terms that are in the list.
			$query = $query->filter(
				function ( $item, $key ) use ( $allowed_terms_ids ) {
					return in_array( $item->term_id, $allowed_terms_ids );
				}
			);

			// Reset keys.
			$query = $query->values();

			// If Empty return an empty array.
			if ( $query->isEmpty() ) {
				return [];
			}
		}

		if ( $query instanceof Collection ) {
			return $query;
		}

		return $count;
	}

	/**
	 * Checks if results should be restricted or merged.
	 *
	 * @param bool $prefilling
	 * @param array $other_filters
	 * @return boolean
	 */
	private function should_restrict( $prefilling, $other_filters = [] ) {

		$includes_this_filter      = isset( $other_filters[ $this->slug ] );
		$includes_only_this_filter = $includes_this_filter && count( $other_filters ) === 1;
		$includes_more_filters     = count( $other_filters ) > 1;

		if ( $prefilling && $includes_more_filters ) {
			return true;
		} elseif ( $prefilling && ! $includes_this_filter ) {
			return true;
		} elseif ( ! $includes_only_this_filter ) {
			return true;
		}

		return false;
	}

	/**
	 * Determine if filtering should be restricted to match all filters
	 * when one or more filter is enabled and is a checkbox.
	 *
	 * @param [type] $prefilling
	 * @param array $other_filters
	 * @return bool
	 */
	private function taxonomy_filter_should_restrict( $prefilling, $other_filters = [] ) {
		if (
			$this instanceof Taxonomy && $this->get_option( 'filter_type' ) !== 'checkboxes' ||
			$this instanceof Attribute && $this->get_option( 'filter_type' ) !== 'checkboxes'
		) {
			return true;
		} elseif ( $this->get_option( 'filter_type' ) === 'checkboxes' && $this->should_restrict( $prefilling, $other_filters ) ) {
			return true;
		}
		return false;
	}
}
