<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters;

use Barn2\Plugin\WC_Filters\Dependencies\Lib\Registerable;
use Barn2\Plugin\WC_Filters\Dependencies\Lib\Util;

/**
 * Responsible for outputting the CSS variables.
 */
class CSS_Variables implements Registerable {

	/**
	 * The variables to output.
	 *
	 * @var array
	 */
	public $variables = [];

	/**
	 * The prefix to use for each variable.
	 *
	 * @var string
	 */
	public $prefix = '--wpf-';

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->variables = $this->get_variables();
	}

	/**
	 * Get the prefix.
	 *
	 * @return string
	 */
	public function get_prefix() {
		return $this->prefix;
	}

	/**
	 * @inheritDoc
	 */
	public function register() {
		add_action( 'wp_head', [ $this, 'output' ] );
	}

	/**
	 * Get the variables.
	 *
	 * @return array
	 */
	public function get_variables() {
		$design_settings = Display::get_design_settings();
		$variables       = [];

		// Parse each element of the design settings and add to the variables array and if the "_" character is found in the key, then replace it with a "-" character.
		foreach ( $design_settings as $key => $value ) {
			$variables[ str_replace( '_', '-', $key ) ] = $value;
		}

		return $variables;
	}

	/**
	 * Output the variables.
	 *
	 * @return void
	 */
	public function output() {
		$variables = $this->variables;

		// Skip any variables where the key starts with "f_".
		foreach ( $variables as $key => $value ) {
			if ( strpos( $key, 'f_' ) === 0 ) {
				unset( $variables[ $key ] );
			}
		}

		// Add the prefix to each variable name.
		foreach ( $variables as $key => $value ) {
			$variables[ $this->prefix . $key ] = $value;
			unset( $variables[ $key ] );
		}

		$variables = Util::clean( $variables );

		// Output the variables as CSS variables.
		foreach ( $variables as $key => $value ) {
			echo sprintf( '<style>:root { %s: %s; }</style>', $key, $value ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

}
