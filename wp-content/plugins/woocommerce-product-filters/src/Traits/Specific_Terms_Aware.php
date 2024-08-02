<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Traits;

/**
 * Provides methods for getting the specific terms for a taxonomy filter.
 */
trait Specific_Terms_Aware {
	/**
	 * Get the specific terms for the taxonomy filter.
	 *
	 * @return array
	 */
	public function get_specific_terms() {
		$has_specific_terms = $this->get_option( 'specific_terms_selection' ) ?: 'all';

		if ( $has_specific_terms !== 'specific' ) {
			return [];
		}

		$selection = $this->get_option( 'specific_terms' ) ?: [];
		$term_ids  = [];

		// Collect the "id" property from each array inside the $selection array.
		foreach ( $selection as $term ) {
			if ( isset( $term['id'] ) ) {
				$term_ids[] = absint( $term['id'] );
			}
		}

		return $term_ids;
	}
}
