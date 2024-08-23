<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Integrations;

use Barn2\Plugin\WC_Filters\Display;

use function Barn2\Plugin\WC_Filters\wcf;

/**
 * Flatsome theme integration.
 */
class Theme_Flatsome extends Theme_Integration {

	public $template = 'flatsome';

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
		add_action( 'wp_enqueue_scripts', [ $this, 'assets' ] );
	}

	/**
	 * Load the assets specific to this integration.
	 *
	 * @return void
	 */
	public function assets() {
		$file_name = 'wcf-flatsome';

		$integration_script_path       = 'assets/build/' . $file_name . '.js';
		$integration_script_asset_path = wcf()->get_dir_path() . 'assets/build/' . $file_name . '.asset.php';
		$integration_script_asset      = file_exists( $integration_script_asset_path )
		? require $integration_script_asset_path
		: [
			'dependencies' => [],
			'version'      => filemtime( $integration_script_path ),
		];
		$script_url                    = wcf()->get_dir_url() . $integration_script_path;

		$integration_script_asset['dependencies'][] = Display::IDENTIFIER;

		wp_register_script(
			$file_name,
			$script_url,
			$integration_script_asset['dependencies'],
			$integration_script_asset['version'],
			true
		);

		wp_enqueue_script( $file_name );
	}

	/**
	 * @inheritdoc
	 */
	public function enqueue_fix() {

		$css = '
			.woocommerce-pagination .page-numbers li .page-numbers {
				padding:0.5rem 1rem;
			}
			.wcf-horizontal-sort button {
				margin-bottom: 0;
			}
			#main .col, div#wrapper, main#main {
				position:static;
			}
		';

		wp_add_inline_style( $this->get_dummy_handle(), $css );
	}
}
