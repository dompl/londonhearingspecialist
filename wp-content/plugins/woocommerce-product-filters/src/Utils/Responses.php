<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Utils;

use Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Database\Eloquent\Collection;

/**
 * Helper class with common methods used during
 * json responses for ajax requests.
 */
class Responses {

	/**
	 * Generate the not found message template.
	 *
	 * @return string
	 */
	public static function generate_no_products_template() {

		ob_start();

		wc_get_template( 'loop/no-products-found.php' );

		$js_field_html = ob_get_clean();

		return wp_kses_post( str_replace( "\n", '', $js_field_html ) );
	}

	/**
	 * Cleanup the term counters on taxonomy pages.
	 * On taxonomy pages we only display terms that are related to the parent queried term.
	 *
	 * @param Collection $query
	 * @param int $queried_term_id
	 * @param string $queried_taxonomy_slug
	 * @param string $queried_term_slug
	 * @return Collection
	 */
	public static function cleanup_term_counters_on_taxonomy_page( Collection $query, $queried_term_id, $queried_taxonomy_slug, $queried_term_slug ) {
		if ( ! is_taxonomy_hierarchical( $queried_taxonomy_slug ) ) {
			return $query;
		}

		$ancestors = get_ancestors( $queried_term_id, $queried_taxonomy_slug );
		$children  = get_term_children( $queried_term_id, $queried_taxonomy_slug );

		// Remove from the collection those terms that aren't ancestors or children of the queried term but also keep the current term.
		$query = $query->filter(
			function ( $term ) use ( $ancestors, $children, $queried_taxonomy_slug, $queried_term_slug ) {
				// If the term is the current term, keep it.
				if ( $term->facet_value === $queried_term_slug ) {
					return true;
				}

				$term_slug = $term->facet_value;
				$term      = get_term_by( 'slug', $term_slug, $queried_taxonomy_slug );
				$term_id   = $term instanceof \WP_Term ? $term->term_id : false;

				return in_array( $term_id, $ancestors, true ) || in_array( $term_id, $children, true );
			}
		);

		// Clear falsey values.
		$query = $query->filter();

		// Reset the keys.
		$query = $query->values();

		return $query;
	}

	/**
	 * Get the additional shared json props for the prefiller and fallback request.
	 *
	 * @return array
	 */
	public static function get_additional_shared_json_props(): array {
		$queried_object        = get_queried_object();
		$queried_taxonomy_slug = $queried_object instanceof \WP_Term ? $queried_object->taxonomy : false;
		$queried_term_slug     = $queried_object instanceof \WP_Term ? $queried_object->slug : false;
		$queried_term_id       = $queried_object instanceof \WP_Term ? $queried_object->term_id : false;

		$props = [
			'is_tax'                => Filters::is_taxonomy_page(),
			'queried_term_id'       => $queried_term_id,
			'queried_taxonomy_slug' => $queried_taxonomy_slug,
			'queried_term_slug'     => $queried_term_slug,
		];

		return $props;
	}
}
