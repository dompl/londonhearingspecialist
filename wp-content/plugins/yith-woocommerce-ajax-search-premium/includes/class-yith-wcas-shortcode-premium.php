<?php
/**
 * Shortcode Premium class
 *
 * @author  YITH
 * @package YITH/Search
 * @version 2.0
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'YITH_WCAS_Shortcode_Premium' ) && class_exists( 'YITH_WCAS_Shortcode' ) ) {
	/**
	 * Class definition
	 */
	class YITH_WCAS_Shortcode_Premium extends YITH_WCAS_Shortcode {

		/**
		 * Constructor
		 */
		public function __construct() {
			parent::__construct();
		}


		/**
		 * Return the block code based on options.
		 *
		 * @param array $options Options to check.
		 *
		 * @return string
		 */
		protected function get_block_code( $options ) {

			$block_options = array(
				'size'      => $options['general']['style'],
				'className' => $options['general']['custom_class'],
			);

			$block = '<!-- wp:yith/search-block ' . wp_json_encode( $block_options ) . '  -->';
			$block .= '<div class="wp-block-yith-search-block alignwide">';

			// Input.
			$block .= $this->get_input_block_code_by_options( $options );

			// Filled block.
			$block .= $this->get_filled_block_code_by_options( $options );

			// Empty block.
			$block .= $this->get_empty_block_code_by_options( $options );

			$block .= '</div><!-- /wp:yith/search-block -->';

			return $block;
		}


		/**
		 * Return the string to show the filled block
		 *
		 * @param array $options Options.
		 *
		 * @return string
		 */
		protected function get_filled_block_code_by_options( $options ) {
			$block = '<!-- wp:yith/filled-block -->';
			$block .= '<div class="wp-block-yith-filled-block">';

			$block .= $this->get_related_categories_block_code_by_options( $options );

			$block .= '<!-- wp:separator {"align":"wide","style":{"color":{"background":"#9797972e"},"spacing":{"margin":{"top":"10px","bottom":"10px"}}},"className":"is-style-wide ywcas-separator"} -->
                    <hr class="wp-block-separator alignwide has-text-color has-alpha-channel-opacity has-background is-style-wide ywcas-separator" style="margin-top:10px;margin-bottom:10px;background-color:#9797972e;color:#9797972e"/>
                    <!-- /wp:separator -->';

			$block .= $this->get_product_results_block_code_by_options( $options );
			$block .= $this->get_related_posts_block_code_by_options( $options );

			$block .= '</div><!-- /wp:yith/filled-block -->';

			return $block;
		}

		/**
		 * Return the string to show the empty block
		 *
		 * @param array $options Options.
		 *
		 * @return string
		 */
		protected function get_empty_block_code_by_options( $options ) {
			$block = '<!-- wp:yith/empty-block -->';
			$block .= '<div class="wp-block-yith-empty-block">';

			$block .= $this->get_history_block_code_by_options( $options );

			$block .= $this->get_popular_block_code_by_options( $options );

			$block .= '</div><!-- /wp:yith/empty-block -->';

			return $block;
		}

		/**
		 * Return the code to create related categories block
		 *
		 * @param array $options Options.
		 *
		 * @return string
		 */
		protected function get_related_categories_block_code_by_options( $options ) {
			$extra = $this->get_extra_options($options) ;

			if ( ! isset( $extra['show-related-categories'] ) || 'yes' !== $extra['show-related-categories'] ) {
				return '';
			}

			$block_options = array(
				'relatedCategoryHeading' => $extra['related-categories-label'],
				'maxCategoryRelated'     => $extra['max-related-categories-results'],
			);

			$block = '<!-- wp:yith/related-categories-block ' . wp_json_encode( $block_options ) . ' -->';
			$block .= '<div class="wp-block-yith-related-categories-block"></div>';
			$block .= '<!-- /wp:yith/related-categories-block -->';

			return $block;
		}


		/**
		 * Return the code to create related posts block
		 *
		 * @param array $options Options.
		 *
		 * @return string
		 */
		protected function get_related_posts_block_code_by_options( $options ) {
			$options = $options['search-results'];

			if ( ! isset( $options['related-to-show'] ) ) {
				return '';
			}

			$block_options = array(
				'relatedPostsHeading' => $options['related-label'],
				'maxPostsRelated'     => $options['related-limit'],
				'enabledPost'         => in_array( 'post', $options['related-to-show'], true ),
				'enabledPage'         => in_array( 'page', $options['related-to-show'], true ),
			);

			$block = '<!-- wp:yith/related-posts-block ' . wp_json_encode( $block_options ) . ' -->
                <div class="wp-block-yith-related-posts-block"></div>
                <!-- /wp:yith/related-posts-block -->';

			return $block;
		}

		/**
		 * Return the code to create history block
		 *
		 * @param array $options Options.
		 *
		 * @return string
		 */
		protected function get_history_block_code_by_options( $options ) {
			$extra = $this->get_extra_options($options) ;

			if ( ! isset( $extra['show-history'] ) ) {
				return '';
			}

			$block_options = array(
				'maxHistoryResults' => $extra['max-history-results'],
				'historyHeading'    => $extra['history-label'],
			);

			$block = '<!-- wp:yith/history-block ' . wp_json_encode( $block_options ) . ' -->';
			$block .= '<div class="wp-block-yith-history-block"></div>';
			$block .= '<!-- /wp:yith/history-block -->';

			return $block;
		}

		/**
		 * Return the code to create popular block
		 *
		 * @param array $options Options.
		 *
		 * @return string
		 */
		protected function get_popular_block_code_by_options( $options ) {
			$extra = $this->get_extra_options($options) ;
			if ( ! isset( $extra['show-popular'] ) ) {
				return '';
			}

			$block_options = array(
				'popularHeading'    => $extra['popular-label'],
				'maxPopularResults' => $extra['max-popular-results'],
			);

			$block = '<!-- wp:yith/popular-block ' . wp_json_encode( $block_options ) . ' -->';
			$block .= '<div class="wp-block-yith-popular-block"></div>';
			$block .= '<!-- /wp:yith/popular-block -->';

			return $block;
		}

		/**
		 * Return from shortcode option, the extra tab options
		 *
		 * @param array $options The options.
		 *
		 * @return array
		 */
		protected function get_extra_options( $options ){
			if( empty( $options['extra-options'])){
				$default =ywcas()->settings->get_default_shortcode_options();
				$extra = $default['extra-options'];
			}else{
				$extra = $options['extra-options'];
			}
			return  $extra;
		}
	}

}
