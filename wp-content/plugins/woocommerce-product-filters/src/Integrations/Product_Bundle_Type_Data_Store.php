<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Integrations;

/**
 * This is a copy of the WC_Product_Bundle_Data_Store_CPT class from the WooCommerce Product Bundles plugin.
 * It is used to override the default data store for the 'product-bundle' type.
 *
 * This is required because the query fired by the plugin to preload bundled product data
 * needs to be flagged as invalid so that it doesn't interfere with the main query.
 */
class Product_Bundle_Type_Data_Store extends \WC_Product_Bundle_Data_Store_CPT {
	/** {@inheritDoc} */
	public function preload_bundled_product_data( $ids ) {
		if ( empty( $ids ) ) {
			return;
		}

		$cache_key = 'wc_bundled_product_db_data_' . md5( json_encode( $ids ) );
		$data      = \WC_PB_Helpers::cache_get( $cache_key );

		if ( null === $data ) {

			$data = new \WP_Query(
				[
					'post_type'   => 'product',
					'nopaging'    => true,
					'post__in'    => $ids,
					'wcf-bundles' => true,
				]
			);

			\WC_PB_Helpers::cache_set( $cache_key, $data );
		}
	}
}
