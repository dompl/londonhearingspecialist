<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters\Integrations;

use Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Support\Collection;
use Barn2\Plugin\WC_Filters\Display;
use Barn2\Plugin\WC_Filters\Request_Fallback;
use JsonSerializable;

use function Barn2\Plugin\WC_Filters\wcf;

/**
 * Avada theme-specific styling.
 */
class Theme_Avada extends Theme_Integration implements JsonSerializable, Fallback_Aware_Interface {

	use Fallback_Aware;

	public $template = 'Avada';

	/**
	 * @var bool
	 */
	public $toggled = false;

	/**
	 * @inheritdoc
	 */
	public function register() {
		if ( ! $this->should_enqueue() ) {
			return;
		}
		parent::register();

		$this->catch_page_with_post_cards();

		add_filter( 'fusion_builder_frontend_data', [ $this, 'setup_postcard_params' ], 10, 2 );
		add_filter( 'wcf_bypass_loop_tag', [ $this, 'bypass_loop_tag' ], 10, 3 );
		add_filter( 'fusion_element_woo_product_grid_content', [ $this, 'inject_required_elements' ], 10, 2 );
		add_filter( 'woocommerce_filters_update_query_vars', [ $this, 'should_update_query_vars' ], 10, 3 );
		add_action( 'wp_enqueue_scripts', [ $this, 'assets' ] );

		// $this->maybe_setup_product_table();
	}

	/**
	 * Load the assets specific to this integration.
	 *
	 * @return void
	 */
	public function assets() {

		$file_name = 'wcf-avada';

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

		wp_add_inline_script(
			'wcf-avada',
			'const WCF_AVADA_COMPAT = ' . wp_json_encode(
				[
					'baseUrl' => $this->get_page_base_url(),
				]
			),
			'before'
		);
	}

	/**
	 * Check if the current page has the post cards module
	 * and fire the fallback hooks.
	 *
	 * @return void
	 */
	public function catch_page_with_post_cards() {
		add_action(
			'wp',
			function () {
				if ( ! is_page() ) {
					return;
				}

				$has_post_cards = $this->page_content_has_post_cards_shortcode();

				if ( ! $has_post_cards ) {
					return;
				}

				$this->setup_overrides_for_page();
			}
		);

		add_action(
			'wp',
			function () {
				if ( ! is_page() && ! $this->queried_object_has_override() ) {
					return;
				}

				if ( is_page() && ! $this->page_content_has_post_cards_shortcode() ) {
					return;
				}

				$this->setup_overrides_for_page();
			}
		);
	}

	/**
	 * Setup hooks override for the post cards.
	 *
	 * @return void
	 */
	private function setup_overrides_for_page() {
		$this->load_fallback_hooks();
		add_filter( 'fusion_element_post_cards_content', [ $this, 'inject_required_elements' ], 10, 2 );
		add_filter( 'fusion_pre_shortcode_atts', [ $this, 'adjust_shortcode_params' ], 10, 4 );
		add_filter( 'fusion_post_cards_shortcode_query_args', [ $this, 'query_args' ] );
	}

	/**
	 * Determine if the queried object has a template override
	 * that contains the post cards module.
	 *
	 * @return bool
	 */
	private function queried_object_has_override() {
		if ( ! function_exists( 'Fusion_Template_Builder' ) ) {
			return false;
		}

		$override = Fusion_Template_Builder()->get_override();

		if ( ! $override instanceof \WP_Post ) {
			return;
		}

		$override_content = get_post_field( 'post_content', $override->ID );

		return strpos( $override_content, '[fusion_post_cards' ) !== false;
	}

	/**
	 * Check if the currently queried page has the post cards module shortcode.
	 *
	 * @return bool
	 */
	public function page_content_has_post_cards_shortcode() {
		$content = get_post_field( 'post_content', get_queried_object_id() );

		return strpos( $content, '[fusion_post_cards' ) !== false;
	}

	/**
	 * Get the string that is then attached as an argument
	 * to the WP_Query $args array as a flag.
	 *
	 * The flag is used to shortcircuit our filtered results
	 * injection.
	 *
	 * Without the flag we'd end up causing an infinite loop.
	 *
	 * @return string
	 */
	public function get_query_argument_id() {
		return 'uncode-query';
	}

	/**
	 * Enable fallback mode for the theme.
	 *
	 * @param bool $enabled
	 * @return bool
	 */
	public function apply_fallback_mode( $enabled ) {
		return true;
	}

	/**
	 * Get the base url for the fallback mode.
	 *
	 * @return string
	 */
	public function get_page_base_url() {

		$is_shop_page     = is_shop();
		$is_shop_taxonomy = is_product_category() || is_product_tag();

		if ( $is_shop_page && ! $is_shop_taxonomy ) {
			return get_permalink( wc_get_page_id( 'shop' ) );
		}

		$queried_object = get_queried_object();

		if ( $is_shop_taxonomy || $queried_object instanceof \WP_Term ) {
			return get_term_link( $queried_object->term_id );
		}

		if ( $queried_object instanceof \WP_Post ) {
			return get_permalink( $queried_object->ID );
		}

		return get_term_link( get_queried_object_id() );
	}

	/**
	 * Insert the filtered results into the query.
	 *
	 * This is used via pre_get_posts.
	 *
	 * @param \WP_Query $query
	 * @return void
	 */
	public function filter_query( $query ) {
		if ( ( is_admin() && ! wp_doing_ajax() ) || ! $this->is_main_query( $query ) || $query->get( $this->get_query_argument_id() ) === true ) {
			return;
		}

		$search_string = $this->get_requested_filters();
		$orderby       = $this->get_requested_orderby();

		$fallback_request = new Request_Fallback();

		if ( ! empty( $search_string ) ) {
			$collection = $fallback_request->parse_request( $search_string );

			if ( $collection instanceof Collection && $collection->isNotEmpty() ) {
				$fallback_request->set_parameters( $collection );

				$fallback_request = $fallback_request->load_filters();

				// Load values from filter and inject appropriate results.
				$fallback_request->update_query_vars( $query );
			}
		}

		if ( ! empty( $orderby ) ) {
			$fallback_request->set_orderby( $orderby );

			// Sort results if needed.
			$fallback_request->maybe_order_results( $query );
		}
	}

	/**
	 * Determine if it's a query we should be filtering or not.
	 *
	 * @param \WP_Query $query
	 * @return boolean
	 */
	private function is_main_query( $query ) {
		$is_main_query = ( $query->is_main_query() || $query->is_archive );
		$is_main_query = ( $query->is_singular || $query->is_feed ) ? false : $is_main_query;
		$is_main_query = ( $query->get( 'suppress_filters', false ) ) ? false : $is_main_query;
		return $is_main_query;
	}

	/**
	 * Modify the logic that determines if the query vars should be updated.
	 *
	 * This is because Avada fires multiple queries on the archive page which
	 * break the detection of the WC loop.
	 *
	 * @param bool $should_update Whether or not the query vars should be updated.
	 * @param \WP_Query $query The WP_Query instance (passed by reference).
	 * @param Display $instance The Display instance.
	 * @return bool
	 */
	public function should_update_query_vars( $should_update, $query, $instance ) {
		/** @var Display $display_service */
		$display_service          = wcf()->get_service( 'display' );
		$is_product_taxonomy_page = $display_service->is_product_taxonomy_page();
		$is_wc_query              = isset( $query->query_vars['wc_query'] );
		$is_filtering             = isset( $query->query_vars['woocommerce-filters'] );
		$matches_all_requirements = empty( $query->get( 'post_type' ) ) && $is_wc_query && $is_filtering;

		if ( $is_product_taxonomy_page && ! $matches_all_requirements ) {
			return false;
		}

		return $should_update;
	}

	/**
	 * Avada fires custom queries on the archive page which break detection of the WC loop.
	 * We use the filter to add further checks required to validate that we're firing
	 * the loop tags in the appropriate loop.
	 *
	 * @param bool $bypass
	 * @param \WP_Query $query
	 * @param Display $instance
	 * @return bool
	 */
	public function bypass_loop_tag( $bypass, $query, Display $instance ) {
		if ( ! $query instanceof \WP_Query ) {
			return $bypass;
		}

		if ( $this->shop_page_has_product_table_via_builder() ) {
			// Force the display of the additional elements.
			if ( is_shop() ) {
				add_filter( 'wcf_product_table_integration_display_additional_elements', '__return_true' );
			}
			return true;
		}

		$post_types_to_bypass = [
			'awb_off_canvas',
			'fusion_tb_layout',
		];

		if ( $instance->is_product_taxonomy_page() && $instance->is_product_post_type( $query ) && $instance->get_tag_inserted() >= 1 ) {
			return true;
		}

		if ( $instance->is_product_taxonomy_page() && ! $instance->is_product_post_type( $query ) ) {
			$post_types = $query->get( 'post_type' );

			// If the $post_types variable is an array and it contains one of the post types we want to bypass.
			if ( is_array( $post_types ) && array_intersect( $post_types, $post_types_to_bypass ) ) {
				return true;
			}

			// If the $post_types variable is a string and it contains one of the post types we want to bypass.
			if ( ! is_array( $post_types ) && in_array( $post_types, $post_types_to_bypass, true ) ) {
				return true;
			}
		}

		return $bypass;
	}

	/**
	 * Inject missing html elements inside the theme builder provided by Avada.
	 *
	 * @param string $html
	 * @param array $args
	 * @return string
	 */
	public function inject_required_elements( $html, $args ) {

		$display_service = wcf()->get_service( 'display' );

		ob_start();
		if ( ! is_shop() ) {
			$display_service->add_mobile_drawer();
			$display_service->add_active_filters();
			$display_service->add_sorting_bar( true );
		}
		$mobile = ob_get_clean();

		return $mobile . $html;
	}

	/**
	 * Replace the pagination html with a div that is used by the react app to display.
	 *
	 * @return string
	 */
	public function replace_pagination( $pagination_html, $max_pages, $range, $current_query, $blog_global_pagination ) {
		ob_start();
		require_once wcf()->get_dir_path() . '/templates/pagination.php';
		return ob_get_clean();
	}

	/**
	 * @inheritdoc
	 */
	public function enqueue_fix() {
		$css = '
			.wcf-rating-wrapper li {
				display: inline-block !important;
			}
			.woocommerce-pagination .page-numbers, .woocommerce-pagination .page-numbers:hover {
				border: none !important;
			}
			.woocommerce-pagination .page-numbers li .page-numbers {
				border: 1px solid #eee;
				line-height: var(--pagination_width_height);
			}
		';

		wp_add_inline_style( $this->get_dummy_handle(), $css );
	}

	/**
	 * Insert a custom option into the postcard element.
	 *
	 * @param array $map
	 * @param string $class_name
	 * @return array
	 */
	public function setup_postcard_params( $map, $class_name ) {
		if ( 'FusionSC_PostCards' === $class_name ) {
			$map['params'][] = [
				'type'        => 'radio_button_set',
				'heading'     => esc_html__( 'Enable filtering', 'woocommerce-product-filters' ),
				'description' => esc_html__( 'Enable filtering for this element via the WooCommerce Product Filters plugin.', 'woocommerce-product-filters' ),
				'param_name'  => 'wcf_filtering',
				'value'       => [
					'yes' => esc_html__( 'Yes', 'woocommerce-product-filters' ),
					'no'  => esc_html__( 'No', 'woocommerce-product-filters' ),
				],
				'default'     => 'no',
			];
		}

		return $map;
	}

	/**
	 * Adjust the shortcode params to enable filtering.
	 *
	 * @param array $args
	 * @param array $defaults
	 * @param array $args_unfiltered
	 * @param string $element
	 * @return array
	 */
	public function adjust_shortcode_params( $args, $defaults, $args_unfiltered, $element ) {
		if ( 'fusion_post_cards' === $element ) {
			$filtering_enabled = isset( $args['wcf_filtering'] ) && 'yes' === $args['wcf_filtering'];

			if ( $filtering_enabled ) {
				$args['wcf_filtering'] = 'yes';
				$this->toggled         = true;
			} else {
				$args['wcf_filtering'] = 'no';
				$this->toggled         = false;
			}
		}

		return $args;
	}

	/**
	 * Add a query arg to the postcard element to enable filtering.
	 *
	 * @param array $args
	 * @return array
	 */
	public function query_args( $args ) {
		if ( $this->toggled && $args['post_type'] === 'product' ) {
			$args['woocommerce-filters'] = true;
		}

		return $args;
	}

	/**
	 * Check if the shop page has a product table via the Fusion Builder.
	 *
	 * @return bool
	 */
	public function shop_page_has_product_table_via_builder() {
		if ( ! function_exists( '\Barn2\Plugin\WC_Product_Table\wpt' ) ) {
			return false;
		}

		if ( is_shop() ) {
			$shop_page_id   = wc_get_page_id( 'shop' );
			$builder_active = $this->is_fusion_builder_active( $shop_page_id );

			if ( ! $builder_active ) {
				return $bypass;
			}

			$builder_content = get_post_field( 'post_content', $shop_page_id );

			// Check if the page has the product table shortcode.
			if ( strpos( $builder_content, '[product_table' ) !== false ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Check if the Fusion Builder is active for the current post.
	 *
	 * @param int $post_id The post ID.
	 * @return bool Whether or not the Fusion Builder is active.
	 */
	public function is_fusion_builder_active( $post_id ) {
		return 'active' === get_post_meta( $post_id, 'fusion_builder_status', true ) ? true : false;
	}
}
