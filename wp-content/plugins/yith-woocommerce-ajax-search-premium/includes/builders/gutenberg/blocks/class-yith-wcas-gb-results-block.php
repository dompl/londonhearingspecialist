<?php
/**
 * YITH_WCAS_Gb_Results_Block is class to initialize Results Block
 *
 * @author  YITH
 * @package YITH/Builders/Gutenberg
 * @version 2.0
 */

defined( 'ABSPATH' ) || exit;


if ( ! class_exists( 'YITH_WCAS_Gb_Results_Block' ) ) {
	/**
	 * Class YITH_WCAS_Gb_Results_Block
	 */
	class YITH_WCAS_Gb_Results_Block extends Abstract_YITH_WCAS_Gb_Block {
		/**
		 * Block name.
		 *
		 * @var string
		 */
		protected $block_name = 'results-block';

		/**
		 * Render the block.
		 *
		 * @param array    $attributes Block attributes.
		 * @param string   $content    Block content.
		 * @param WP_Block $block      Block instance.
		 * @return string Rendered block type output.
		 */
		protected function render( $attributes, $content, $block ) {
			return '<div data-block-name="yith/results-block"></div>';
		}


	}
}
