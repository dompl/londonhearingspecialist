<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Integrations;

use function Barn2\Plugin\WC_Filters\wcf;

/**
 * Shoptimizer theme-specific styling.
 */
class Theme_Shoptimizer extends Theme_Integration {

	public $template = 'shoptimizer';

	/**
	 * @inheritdoc
	 */
	public function enqueue_fix() {
		$css = '
			.shoptimizer-sorting {
				visibility: hidden;
			}

			.woocommerce-pagination {
				text-align:initial;
			}
		';

		wp_add_inline_style( $this->get_dummy_handle(), $css );
	}

	/**
	 * @inheritdoc
	 */
	public function register() {
		if ( ! $this->should_enqueue() ) {
			return;
		}

		parent::register();

		$display_service = wcf()->get_service( 'display' );

		remove_action( 'woocommerce_before_shop_loop', [ $display_service, 'open_hider' ], 9 );
		remove_action( 'woocommerce_before_shop_loop', [ $display_service, 'close_hider' ], 999 );
		add_action( 'woocommerce_before_shop_loop', 'woocommerce_pagination', 100 );
		add_action( 'woocommerce_after_shop_loop', 'woocommerce_pagination', 100 );
	}
}
