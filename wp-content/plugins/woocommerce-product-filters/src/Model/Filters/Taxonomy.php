<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Model\Filters;

use Barn2\Plugin\WC_Filters\Model\Countable_Interface;
use Barn2\Plugin\WC_Filters\Model\Filter;
use Barn2\Plugin\WC_Filters\Model\Filterable_Interface;
use Barn2\Plugin\WC_Filters\Model\Index;
use Barn2\Plugin\WC_Filters\Model\Indexable_Interface;
use Barn2\Plugin\WC_Filters\Model\Preloadable_Interface;
use Barn2\Plugin\WC_Filters\Model\Storable_Interface;
use Barn2\Plugin\WC_Filters\Traits\Prefilling_Aware;
use Barn2\Plugin\WC_Filters\Traits\Search_Query_Array_Aware;
use Barn2\Plugin\WC_Filters\Traits\Specific_Terms_Aware;
use Barn2\Plugin\WC_Filters\Traits\Taxonomy_Counts_Provider;
use Barn2\Plugin\WC_Filters\Utils\Filters;
use Barn2\Plugin\WC_Filters\Utils\Terms;

use function Barn2\Plugin\WC_Filters\wcf;

/**
 * Responsible for generating taxonomy related data
 * inside the indexer.
 */
class Taxonomy extends Filter implements Indexable_Interface, Storable_Interface, Filterable_Interface, Countable_Interface, Preloadable_Interface {

	use Prefilling_Aware;
	use Search_Query_Array_Aware;
	use Taxonomy_Counts_Provider;
	use Specific_Terms_Aware;

	/**
	 * List of inputs that should support
	 * hierarchy indentation.
	 *
	 * @var array
	 */
	protected $with_hierarchy = [
		'dropdown',
		'checkboxes',
		'radio',
	];

	/**
	 * Adds backwards compatibility for the old filter_by option.
	 * This option was used to determine if the filter should
	 * be based on a taxonomy.
	 *
	 * If the attribute is set to taxonomy, then the taxonomy
	 * option will be used instead.
	 *
	 * @param string $value The value of the option.
	 * @return string
	 */
	public function getFilterByAttribute( $value ) {
		if ( $value === 'taxonomy' ) {
			return 'tax_' . $this->get_option( 'taxonomy' );
		}

		return $value;
	}

	/**
	 * Determines if the filter is a dropdown and
	 * if hierarchical mode is enabled.
	 *
	 * @return boolean
	 */
	public function is_hierarchical() {
		return $this->get_option( 'filter_type' ) === 'dropdown' && $this->get_option( 'dropdown_hierarchical' ) === 'true';
	}

	/**
	 * Get the proper taxonomy slug based on the type
	 * of source selected.
	 *
	 * @return string|false
	 */
	public function get_taxonomy_slug() {

		$slug = null;
		$type = $this->filter_by;

		if ( $type === 'categories' ) {
			$slug = 'product_cat';
		} elseif ( $type === 'tags' ) {
			$slug = 'product_tag';
		} else {
			$slug = $this->get_option( 'taxonomy' );
		}

		return $slug;
	}

	/**
	 * @inheritdoc
	 */
	public function generate_index_data( array $defaults, string $post_id ) {
		$taxonomy = $this->get_taxonomy_slug();

		if ( $this->get_option( 'filter_type' ) === 'range' ) {
			return Filters::generate_ranged_taxonomy_index_data( $defaults, $post_id, $taxonomy );
		}

		return Filters::generate_taxonomy_index_data( $defaults, $post_id, $taxonomy );
	}

	/**
	 * @inheritdoc
	 */
	public function get_json_store_data() {
		$terms_list = [];

		if ( $this->get_option( 'filter_type' ) === 'images' ) {

			$args = [
				'taxonomy'   => $this->get_taxonomy_slug(),
				'hide_empty' => false,
				'orderby'    => 'menu_order',
				'exclude'    => Filters::get_default_excluded_terms( $this->get_taxonomy_slug() ),
				'include'    => $this->get_specific_terms(),
			];

			if ( Filters::is_taxonomy_page() && get_queried_object()->taxonomy === $this->get_taxonomy_slug() ) {
				$args['child_of'] = get_queried_object_id();
			} elseif ( ! Filters::is_taxonomy_page() && empty( $this->get_specific_terms() ) ) {
				$args['parent'] = 0;
			}

			/**
			 * Filter: allows modification of the arguments used to retrieve terms
			 * for the images taxonomy filter.
			 */
			$args = apply_filters( 'wcf_taxonomy_json_terms_args', $args, $this );

			$terms = get_terms(
				$args
			);

			if ( ! empty( $terms ) ) {
				foreach ( $terms as $term ) {
					if ( $term instanceof \WP_Term ) {
						$terms_list[] = [
							'term_id' => absint( $term->term_id ),
							'name'    => $term->name,
							'image'   => Terms::get_term_image( $term->term_id ),
							'slug'    => $term->slug,
						];
					}
				}
			}
		} elseif ( $this->get_option( 'filter_type' ) === 'range' ) {

			$indexed = Index::where( 'filter_id', $this->getID() )->get();
			$indexed = Filters::order_numerical_collection( $indexed );

			if ( $indexed->isEmpty() ) {
				return [];
			}

			$min = (int) filter_var( $indexed->first()->facet_value, FILTER_SANITIZE_NUMBER_INT );
			$max = (int) filter_var( $indexed->last()->facet_value, FILTER_SANITIZE_NUMBER_INT );

			if ( $min < 0 ) {
				$min = 0;
			}

			if ( $max <= $min ) {
				$max = $min + 1;
			}

			$terms_list = [
				'min'     => $min,
				'max'     => $max,
				'unit'    => $this->get_option( 'range_unit' ),
				'options' => $indexed,
				'slug'    => $this->get_taxonomy_slug(),
			];

		} elseif ( $this->supports_hierarchy() ) {

			$parent = 0;

			if ( Filters::is_taxonomy_page() && $this->get_option( 'filter_type' ) === 'dropdown' && get_queried_object()->taxonomy === $this->get_taxonomy_slug() ) {
				$parent = get_queried_object_id();
			}

			$terms_list = Terms::get_taxonomy_hierarchy( $this->get_taxonomy_slug(), $parent, $this->get_specific_terms() );

			// Now only keep the top level terms where their depth is 0.
			if ( ! Filters::is_taxonomy_page() ) {
				$terms_list = array_filter(
					$terms_list,
					function ( $term ) {
						return $term['depth'] === 0;
					}
				);
			}

			// Reset the keys.
			$terms_list = array_values( $terms_list );

			if ( Filters::is_taxonomy_page() && $this->get_option( 'filter_type' ) === 'checkboxes' && get_queried_object()->taxonomy === $this->get_taxonomy_slug() ) {
				$current_children = Terms::find_term_by_id( $terms_list, get_queried_object_id() );

				if ( is_array( $current_children ) && isset( $current_children['children'] ) ) {
					$terms_list = $current_children['children'];
				}
			}
		} else {

			$terms = get_terms(
				[
					'taxonomy'   => $this->get_taxonomy_slug(),
					'hide_empty' => false,
					'orderby'    => 'menu_order',
					'object_ids' => Filters::is_taxonomy_page() ? Filters::get_current_query_object_ids() : [],
					'exclude'    => Filters::get_default_excluded_terms( $this->get_taxonomy_slug() ),
					'include'    => $this->get_specific_terms(),
				]
			);

			$terms_list = $terms;

		}

		// Run the "safe_value" function on each term slug property.
		if ( ! empty( $terms_list ) ) {
			$indexer = wcf()->get_service( 'indexer' );

			foreach ( $terms_list as $key => $term ) {
				if ( is_object( $term ) && isset( $term->slug ) ) {
					$terms_list[ $key ]->slug = $indexer->safe_value( $term->slug );
				} elseif ( is_array( $term ) && isset( $term['slug'] ) ) {
					$terms_list[ $key ]['slug'] = $indexer->safe_value( $term['slug'] );
				}
			}
		}

		/**
		 * Filter: allows developers to modify the list of found terms
		 * generated by the Taxonomy filter type.
		 *
		 * @param array $terms
		 * @param Taxonomy $filter
		 * @return array
		 */
		return apply_filters( 'wcf_taxonomy_filter_terms_list', $terms_list, $this );
	}

	/**
	 * Determine if the filter supports hierarchy given it's type.
	 *
	 * @return boolean
	 */
	public function supports_hierarchy() {
		return in_array( $this->get_option( 'filter_type' ), $this->with_hierarchy, true );
	}
}
