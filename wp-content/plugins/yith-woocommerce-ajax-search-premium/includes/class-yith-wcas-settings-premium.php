<?php
/**
 * Settings class
 *
 * @author  YITH
 * @package YITH/Search/Options
 * @version 2.0
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'YITH_WCAS_Settings_Premium' ) && class_exists( 'YITH_WCAS_Settings' ) ) {
	/**
	 * Class definition
	 */
	class YITH_WCAS_Settings_Premium extends YITH_WCAS_Settings {

		/**
		 * Constructor
		 *
		 * @return void
		 */
		protected function __construct() {
			parent::__construct();
			add_filter( 'ywcas_related_content_post_type', array( $this, 'show_related_content_post_type' ) );
		}

		/**
		 * Get if the variations must be showed on search results.
		 *
		 * @return string
		 */
		public function get_include_variations() {
			return $this->get( 'include_variations', 'no' );
		}

		/**
		 * Get the source of popular searches
		 *
		 * @return string
		 */
		public function get_trending_searches_source() {
			return $this->get( 'trending_searches_source', 'popular' );
		}

		/**
		 * Get if out of stock
		 *
		 * @return string
		 */
		public function get_hide_out_of_stock() {
			return $this->get( 'hide_out_of_stock', 'no' );
		}

		/**
		 * Get the source of popular searches
		 *
		 * @return array
		 */
		public function get_trending_searches_keywords() {
			$keys = explode( ',', $this->get( 'trending_searches_keywords', '' ) );

			return array_map( 'trim', $keys );
		}

		/**
		 * Return the fields for the shortcode by the tab
		 *
		 * @param string $key The tab key.
		 * @param string $slug The shortcode slug.
		 *
		 * @return array
		 */
		public function get_shortcode_fields( $key, $slug ) {
			if ( 'extra-options' === $key ) {
				$fields = array(
					'show-history'                   => array(
						'id'    => 'ywcas-show-history-' . $key . '_' . $slug,
						'label' => _x( 'Show last searches', 'Admin option label', 'yith-woocommerce-ajax-search' ),
						'type'  => 'onoff',
						'desc'  => _x( 'Enable to show the last searches made by the user.', 'Admin option description', 'yith-woocommerce-ajax-search' ),
					),
					'max-history-results'            => array(
						'id'    => 'ywcas-max-history-results-' . $key . '_' . $slug,
						'label' => __( 'Max searches to show', 'yith-woocommerce-ajax-search' ),
						'type'  => 'number',
						'min'   => 1,
						'step'  => 1,
						'max'   => 10,
						'desc'  => __( 'Set how many searches to show.', 'yith-woocommerce-ajax-search' ),
						'class' => 'ywcas-shortcode-field',
						'deps'  => array(
							'id'    => 'ywcas-show-history-' . $key . '_' . $slug,
							'value' => 'yes',
							'type'  => 'hide',
						),
					),
					'history-label'                  => array(
						'id'    => 'ywcas-history-label-' . $key . '_' . $slug,
						'label' => __( 'Label', 'yith-woocommerce-ajax-search' ),
						'type'  => 'text',
						'class' => 'ywcas-shortcode-field',
						'desc'  => __( 'Set the label to show before the last searches.', 'yith-woocommerce-ajax-search' ),
						'deps'  => array(
							'id'    => 'ywcas-show-history-' . $key . '_' . $slug,
							'value' => 'yes',
							'type'  => 'hide',
						),
					),
					'show-popular'                   => array(
						'id'    => 'ywcas-show-popular-' . $key . '_' . $slug,
						'label' => _x( 'Show trending searches', 'Admin option label', 'yith-woocommerce-ajax-search' ),
						'type'  => 'onoff',
						'desc'  => _x( 'Enable to show the trending searches.', 'Admin option description', 'yith-woocommerce-ajax-search' ),
					),
					'max-popular-results'            => array(
						'id'    => 'ywcas-max-popular-results-' . $key . '_' . $slug,
						'label' => __( 'Max searches to show', 'yith-woocommerce-ajax-search' ),
						'type'  => 'number',
						'min'   => 1,
						'step'  => 1,
						'max'   => 10,
						'desc'  => __( 'Set how many searches to show.', 'yith-woocommerce-ajax-search' ),
						'class' => 'ywcas-shortcode-field',
						'deps'  => array(
							'id'    => 'ywcas-show-popular-' . $key . '_' . $slug,
							'value' => 'yes',
							'type'  => 'hide',
						),
					),
					'popular-label'                  => array(
						'id'    => 'ywcas-popular-label-' . $key . '_' . $slug,
						'label' => __( 'Label', 'yith-woocommerce-ajax-search' ),
						'type'  => 'text',
						'class' => 'ywcas-shortcode-field',
						'desc'  => __( 'Set the label to show before the trending searches.', 'yith-woocommerce-ajax-search' ),
						'deps'  => array(
							'id'    => 'ywcas-show-popular-' . $key . '_' . $slug,
							'value' => 'yes',
							'type'  => 'hide',
						),
					),
					'show-related-categories'        => array(
						'id'    => 'ywcas-show-related-categories-' . $key. '_' . $slug,
						'label' => _x( 'Show related categories', 'Admin option label', 'yith-woocommerce-ajax-search' ),
						'type'  => 'onoff',
						'desc'  => _x( 'Enable to show the related categories in search results.', 'Admin option description', 'yith-woocommerce-ajax-search' ),
					),
					'max-related-categories-results' => array(
						'id'    => 'ywcas-max-related-categories-results-' . $key. '_' . $slug,
						'label' => __( 'Max categories to show', 'yith-woocommerce-ajax-search' ),
						'type'  => 'number',
						'min'   => 1,
						'step'  => 1,
						'max'   => 10,
						'desc'  => __( 'Set how many related categories to show.', 'yith-woocommerce-ajax-search' ),
						'class' => 'ywcas-shortcode-field',
						'deps'  => array(
							'id'    => 'ywcas-show-related-categories-' . $key. '_' . $slug,
							'value' => 'yes',
							'type'  => 'hide',
						),
					),
					'related-categories-label'       => array(
						'id'    => 'ywcas-related-categories-label-' . $key. '_' . $slug,
						'label' => __( 'Label', 'yith-woocommerce-ajax-search' ),
						'type'  => 'text',
						'class' => 'ywcas-shortcode-field',
						'desc'  => __( 'Set the label to show before the related categories.', 'yith-woocommerce-ajax-search' ),
						'deps'  => array(
							'id'    => 'ywcas-show-related-categories-' . $key. '_' . $slug,
							'value' => 'yes',
							'type'  => 'hide',
						),
					),
				);
			} else {
				$fields = parent::get_shortcode_fields( $key, $slug );
			}

			return $fields;
		}

		/**
		 * Get all shortcode tabs
		 *
		 * @return array
		 */
		public function get_shortcode_tabs() {
			$free_tab                  = parent::get_shortcode_tabs();
			$free_tab['extra-options'] = esc_html_x( 'Extra options', 'Settings tab header', 'yith-woocommerce-ajax-search' );

			return $free_tab;

		}

		/**
		 * Get the options for search input tab
		 *
		 * @param string $key The key.
		 * @param string $slug The slug.
		 *
		 * @return array[]
		 */
		public function get_shortcode_search_input_field( $key, $slug ) {
			$free_options = parent::get_shortcode_search_input_field( $key, $slug );

			$new_options = array(
				'border_size'   => array(
					'id'    => 'ywcas-border_size-' . $key . '_' . $slug,
					'label' => __( 'Border size (px)', 'yith-woocommerce-ajax-search' ),
					'type'  => 'number',
					'min'   => 0,
					'step'  => 1,
					'desc'  => __( 'Set the border size.', 'yith-woocommerce-ajax-search' ),
					'class' => 'ywcas-shortcode-field',
				),
				'border_radius' => array(
					'id'    => 'ywcas-border_radius-' . $key . '_' . $slug,
					'label' => __( 'Border radius (px)', 'yith-woocommerce-ajax-search' ),
					'type'  => 'number',
					'min'   => 0,
					'step'  => 1,
					'desc'  => __( 'Set the border radius. Higher values generate a rounded-style form.', 'yith-woocommerce-ajax-search' ),
					'class' => 'ywcas-shortcode-field',
				),
			);

			return array_slice( $free_options, 0, 1, true ) + $new_options + array_slice( $free_options, count( $new_options ) - 1, null, true );
		}

		/**
		 * Get the options for the submit button field
		 *
		 * @param string $key The key.
		 * @param string $slug The slug.
		 *
		 * @return array
		 */
		public function get_shortcode_submit_button_field( $key, $slug ) {
			$free_options                            = parent::get_shortcode_submit_button_field( $key, $slug );
			$free_options['search-style']['type']    = 'select';
			$free_options['search-style']['class']   = 'wc-enhanced-select';
			$free_options['search-style']['label']   = __( 'Submit search style', 'yith-woocommerce-ajax-search' );
			$free_options['search-style']['options'] = array(
				'icon' => __( 'Icon', 'yith-woocommerce-ajax-search' ),
				'text' => __( 'Text', 'yith-woocommerce-ajax-search' ),
				'both' => __( 'Icon + Text', 'yith-woocommerce-ajax-search' ),
			);
			$free_options['search-style']['desc']    = __( 'Choose the style for the submit search button.', 'yith-woocommerce-ajax-search' );

			$premium_options = array(
				'button-label'  => array(
					'id'                => 'ywcas-button-label-' . $key . '_' . $slug,
					'type'              => 'text',
					'label'             => __( 'Text', 'yith-woocommerce-ajax-search' ),
					'custom_attributes' => array(
						'placeholder' => __( 'Enter a text', 'yith-woocommerce-ajax-search' ),
					),
					'desc'              => __( 'Set a label for the search button.', 'yith-woocommerce-ajax-search' ),
					'deps'              => array(
						'id'    => 'ywcas-search-style-' . $key . '_' . $slug,
						'value' => 'text,both',
						'type'  => 'show',
					),
				),
				'border-radius' => array(
					'id'    => 'ywcas-submit-border_radius-' . $key . '_' . $slug,
					'label' => __( 'Border radius (px)', 'yith-woocommerce-ajax-search' ),
					'type'  => 'number',
					'min'   => 0,
					'step'  => 1,
					'desc'  => __( 'Set the border radius. Higher values generate a rounded-style button.', 'yith-woocommerce-ajax-search' ),
					'class' => 'ywcas-shortcode-field',
					'deps'  => array(
						'id'    => 'ywcas-search-style-' . $key . '_' . $slug,
						'value' => 'text,both',
						'type'  => 'show',
					),
				),
			);

			return array_slice( $free_options, 0, 1, true ) + $premium_options + array_slice( $free_options, count( $premium_options ) - 1, null, true );
		}

		/**
		 * Get the options for the search results tab
		 *
		 * @param string $key The key.
		 * @param string $slug The slug.
		 *
		 * @return array[]
		 */
		public function get_shortcode_search_results_field( $key, $slug ) {
			$free_options = parent::get_shortcode_search_results_field( $key, $slug );

			$info_to_show                              = $free_options['info-to-show']['options'];
			$free_options['info-to-show']['options']   = array_merge(
				$info_to_show,
				array(
					'price'       => __( 'Price', 'yith-woocommerce-ajax-search' ),
					'stock'       => __( 'Stock', 'yith-woocommerce-ajax-search' ),
					'sku'         => __( 'SKU', 'yith-woocommerce-ajax-search' ),
					'excerpt'     => __( 'Summary', 'yith-woocommerce-ajax-search' ),
					'add-to-cart' => __( 'Add to cart', 'yith-woocommerce-ajax-search' ),
					'categories'  => __( 'Categories', 'yith-woocommerce-ajax-search' ),
				)
			);
			$free_options['info-to-show']['class']     = 'ywcas-info-to-show';
			$free_options['results-layout']['type']    = 'select';
			$free_options['results-layout']['options'] = array(
				'grid' => __( 'Grid', 'yith-woocommerce-ajax-search' ),
				'list' => __( 'List', 'yith-woocommerce-ajax-search' ),
			);
			$free_options['results-layout']['class']   = 'wc-enhanced-select';

			$new_options_1 = array(
				'price-label'       => array(
					'id'    => 'ywcas-price-label-' . $key . '_' . $slug,
					'label' => __( 'Price label', 'yith-woocommerce-ajax-search' ),
					'type'  => 'text',
					'desc'  => __( 'Leave empty if you want to show only the price without a label.', 'yith-woocommerce-ajax-search' ),
					'class' => 'ywcas-shortcode-field',
					'data'  => array(
						'ywcas-deps' => wp_json_encode(
							array(
								array(
									'id'    => 'ywcas-info-to-show-' . $key . '_' . $slug,
									'value' => 'price',
								),
							)
						),
					),
				),
				'set-summary-limit' => array(
					'id'    => 'ywcas-set-summary-limit-' . $key . '_' . $slug,
					'label' => __( 'Limit summary length', 'yith-woocommerce-ajax-search' ),
					'type'  => 'onoff',
					'desc'  => __( 'Enable to set a max number of words in the summary.', 'yith-woocommerce-ajax-search' ),
					'data'  => array(
						'ywcas-deps' => wp_json_encode(
							array(
								array(
									'id'    => 'ywcas-info-to-show-' . $key . '_' . $slug,
									'value' => 'excerpt',
								),
							)
						),
					),
				),
				'max-summary'       => array(
					'id'    => 'ywcas-max-summary-' . $key . '_' . $slug,
					'type'  => 'number',
					'label' => __( 'Max words', 'yith-woocommerce-ajax-search' ),
					'min'   => 1,
					'step'  => 1,
					'data'  => array(
						'ywcas-deps' => wp_json_encode(
							array(
								array(
									'id'    => 'ywcas-set-summary-limit-' . $key . '_' . $slug,
									'value' => 'yes',
								),
								array(
									'id'    => 'ywcas-info-to-show-' . $key . '_' . $slug,
									'value' => 'excerpt',
								),
							)
						),
					),
				),
			);
			$offset_1      = array_search( 'image-position', array_keys( $free_options ) );
			$new_options_2 = array(
				'badges-to-show'                => array(
					'id'      => 'ywcas-badges-to-show-' . $key . '_' . $slug,
					'label'   => __( 'Badges to show', 'yith-woocommerce-ajax-search' ),
					'type'    => 'checkbox-array',
					'desc'    => _x( 'Choose the badges that you can show in products.', 'Admin option description', 'yith-woocommerce-ajax-search' ),
					'options' => array(
						'sale'         => __( 'On Sale', 'yith-woocommerce-ajax-search' ),
						'out-of-stock' => __( 'Out of stock', 'yith-woocommerce-ajax-search' ),
						'featured'     => __( 'Featured', 'yith-woocommerce-ajax-search' ),
					),
					'data'    => array(
						'ywcas-deps' => wp_json_encode(
							array(
								array(
									'id'    => 'ywcas-info-to-show-' . $key . '_' . $slug,
									'value' => 'image',
								),
							)
						),
					),
				),
				'show-hide-featured-if-on-sale' => array(
					'id'    => 'ywcas-hide-featured-if-on-sale-' . $key . '_' . $slug,
					'label' => _x( 'Hide "Featured" badge if the product is on sale', 'Admin option label', 'yith-woocommerce-ajax-search' ),
					'type'  => 'onoff',
					'desc'  => _x( 'Hide the "Featured" badge if the "On Sale" badge is visible.', 'Admin option description', 'yith-woocommerce-ajax-search' ),
					'data'  => array(
						'ywcas-deps' => wp_json_encode(
							array(
								array(
									'id'    => 'ywcas-info-to-show-' . $key . '_' . $slug,
									'value' => 'image',
								),
								array(
									'id'    => 'ywcas-badges-to-show-' . $key . '_' . $slug,
									'value' => 'featured',
								),
							)
						),
					),
				),
				'related-to-show'               => array(
					'id'      => 'ywcas-related-to-show-' . $key . '_' . $slug,
					'type'    => 'checkbox-array',
					'label'   => __( 'Show also results related to:', 'yith-woocommerce-ajax-search' ),
					'options' => array(
						'post' => __( 'Posts', 'yith-woocommerce-ajax-search' ),
						'page' => __( 'Pages', 'yith-woocommerce-ajax-search' ),
					),
					'desc'    => __( 'Choose if you want to extend the search to posts and pages.', 'yith-woocommerce-ajax-search' ),
				),
				'related-label'                 => array(
					'id'    => 'ywcas-related-label-' . $key . '_' . $slug,
					'label' => __( 'Related content label', 'yith-woocommerce-ajax-search' ),
					'type'  => 'text',
					'class' => 'ywcas-shortcode-field',
					'desc'  => __( 'Set the label to show before the related content.', 'yith-woocommerce-ajax-search' ),
					'data'  => array(
						'ywcas-deps' => wp_json_encode(
							array(
								array(
									'id'    => 'ywcas-related-to-show-' . $key . '_' . $slug,
									'value' => 'post,page',
								),
							)
						),
					),
				),
				'related-limit'                 => array(
					'id'    => 'ywcas-related-limit-' . $key . '_' . $slug,
					'type'  => 'number',
					'label' => __( 'Max related content to show', 'yith-woocommerce-ajax-search' ),
					'min'   => 1,
					'step'  => 1,
					'max'   => 10,
					'desc'  => __( 'Set how many related results (pages or posts) to show.', 'yith-woocommerce-ajax-search' ),
					'data'  => array(
						'ywcas-deps' => wp_json_encode(
							array(
								array(
									'id'    => 'ywcas-related-to-show-' . $key . '_' . $slug,
									'value' => 'post,page',
								),
							)
						),
					),
				),
			);

			$free_options = array_slice( $free_options, 0, $offset_1 + 1 ) + $new_options_1 + array_slice( $free_options, count( $new_options_1 ) - 1, null, true );
			$offset_2     = array_search( 'view-all-label', array_keys( $free_options ) );

			return array_slice( $free_options, 0, $offset_2 + 1 ) + $new_options_2 + array_slice( $free_options, count( $new_options_2 ) - 1, null, true );

		}

		/**
		 * Add related content to results
		 *
		 * @param array $content Content.
		 *
		 * @return array
		 */
		public function show_related_content_post_type( $content ) {
			return array( 'post', 'page' );
		}

		/**
		 * Return synonymous list
		 *
		 * @return array
		 */
		public function get_synonymous() {
			return apply_filters( 'ywcas_synonymous', $this->get( 'synonymous', false ) );
		}


		/**
		 * Return the field that should be checked before save the shortcode
		 *
		 * @return array[]
		 */
		public function get_shortcode_fields_to_check() {
			return array(
				'search-results' => array(
					'badges-to-show'  => array(),
					'info-to-show'    => array(),
					'related-to-show' => array(),
				),
				'extra-options'   => array(
					'show-history'            => 'no',
					'show-popular'            => 'no',
					'show-related-categories' => 'no',
				)
			);
		}

	}


}
