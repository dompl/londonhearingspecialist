<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Integrations;

use Barn2\Plugin\WC_Filters\Dependencies\Lib\Registerable;

/**
 * Plugin_Product_Bundles
 * Provides integration with WooCommerce Product Bundles.
 *
 * This is required because the query fired by the plugin to preload bundled product data
 * needs to be flagged as invalid so that it doesn't interfere with the main query.
 */
class Plugin_Product_Bundles implements Registerable {
	/**
	 * Register the integration.
	 *
	 * @return void
	 */
	public function register() {
		if ( ! function_exists( '\WC_PB' ) ) {
			return;
		}

		$this->init();
	}

	/**
	 * Initialize the integration.
	 *
	 * @return void
	 */
	public function init() {
		add_filter( 'woocommerce_data_stores', [ $this, 'override_bundle_type_data_store' ], 11 );
		add_filter( 'wcf_is_main_query', [ $this, 'flag_query_as_invalid' ], 10, 2 );
	}

	/**
	 * Override the bundle type data store.
	 *
	 * @param array $stores
	 * @return array
	 */
	public function override_bundle_type_data_store( $stores ) {
		$stores['product-bundle'] = 'Barn2\Plugin\WC_Filters\Integrations\Product_Bundle_Type_Data_Store';

		return $stores;
	}

	/**
	 * Flag the query as invalid.
	 *
	 * @param boolean $is_main_query
	 * @param \WP_Query $query
	 * @return boolean
	 */
	public function flag_query_as_invalid( $is_main_query, $query ) {
		if ( $query->get( 'wcf-bundles' ) ) {
			$is_main_query = false;
		}

		return $is_main_query;
	}
}
