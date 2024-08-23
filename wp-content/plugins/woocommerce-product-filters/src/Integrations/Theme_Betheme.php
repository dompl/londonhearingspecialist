<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Integrations;

use Barn2\Plugin\WC_Filters\Utils\Settings;

use function Barn2\Plugin\WC_Filters\wcf;

/**
 * BeTheme integration.
 */
class Theme_Betheme extends Theme_Integration {

	public $template = 'betheme';

	/**
	 * Register the service.
	 *
	 * @return void
	 */
	public function register() {
		parent::register();

		if ( ! $this->should_enqueue() ) {
			return;
		}

		if ( ! Settings::get_option( 'infinite_scrolling', false ) ) {
			return;
		}

		$display_service = wcf()->get_service( 'display' );

		remove_action( 'woocommerce_after_shop_loop', [ $display_service, 'add_infinite_loading' ], 8 );
		add_action( 'woocommerce_after_main_content', [ $display_service, 'add_infinite_loading' ], 20 );
	}

	/**
	 * @inheritdoc
	 */
	public function enqueue_fix() {
		// Do nothing.
	}
}
