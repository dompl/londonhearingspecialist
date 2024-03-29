<?php //phpcs:ignore WordPress.Files.FileName.InvalidClassFileName
/**
 * This file belongs to the YIT Plugin Framework.
 *
 * This source file is subject to the GNU GENERAL PUBLIC LICENSE (GPL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package YITH WooCommerce Ajax Search Premium
 */

if ( ! defined( 'ABSPATH' ) || ! defined( 'YITH_WCAS_VERSION' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Implements the YITH_WCAS_Elementor class.
 *
 * @class   YITH_WCAS_Elementor
 * @package YITH
 * @since   1.3.6
 * @author  YITH <plugins@yithemes.com>
 */
if ( ! class_exists( 'YITH_WCAS_Elementor' ) ) {

	/**
	 * Class YITH_WCAS_Elementor
	 */
	class YITH_WCAS_Elementor {
		use YITH_WCAS_Trait_Singleton;

		/**
		 * YITH_WCAS_Elementor constructor.
		 */
		public function __construct() {
			if ( did_action( 'elementor/loaded' ) ) {
				add_action( 'elementor/widgets/widgets_registered', array( $this, 'elementor_init_widgets' ) );
			}
		}

		/**
		 * Init widget
		 *
		 * @throws Exception To return Error.
		 */
		public function elementor_init_widgets() {
			// Register widget.
			\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \YITH_WCAS_Search_Form_Elementor() );
		}
	}

}

/**
 * Unique access to instance of YITH_WCAS_Elementor class
 *
 * @return YITH_WCAS_Elementor
 */
function YITH_WCAS_Elementor() { //phpcs:ignore
	return YITH_WCAS_Elementor::get_instance();
}

YITH_WCAS_Elementor();
