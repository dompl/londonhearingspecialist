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
 * Divi theme-specific styling.
 */
class Theme_Divi extends Theme_Integration implements JsonSerializable, Fallback_Aware_Interface {

	use Fallback_Aware;

	public $template = 'Divi';

	public $types = [
		'recent_products',
		'products',
		'sale_products',
		'best_selling_products',
		'top_rated_products',
		'featured_products',
	];

	/**
	 * @inheritdoc
	 */
	public function register() {
		if ( ! $this->should_enqueue() ) {
			return;
		}
		parent::register();
		$this->load_fallback_hooks();
		add_action( 'wp_enqueue_scripts', [ $this, 'assets' ] );
		add_filter( 'wcf_is_pagination_disabled', '__return_true' );

		if ( function_exists( '\Barn2\Plugin\WC_Product_Table\wpt' ) ) {
			$this->maybe_adjust_product_table();
		}

		add_filter( 'wcf_wc_shortcode_inject_fallback', '__return_false' );
		add_filter( 'wcf_get_option_filter_mode', [ $this, 'change_mode' ], 10, 3 );

		add_action(
			'wp',
			function () {
				$this->attach_flag();
			}
		);
	}

	/**
	 * Change the filter mode to button
	 * because automatic mode is not supported
	 * when fallback mode is enabled.
	 *
	 * @param string $value
	 * @param string $key
	 * @param string $default
	 * @return string
	 */
	public function change_mode( $value, $key, $default ) {
		return 'button';
	}

	/**
	 * Maybe adjust the product table integration
	 * to force the display of the required elements when the theme builder
	 * overrides the shop page and the shop page contains the product table shortcode.
	 *
	 * @return void
	 */
	public function maybe_adjust_product_table() {
		add_filter(
			'wcf_product_table_integration_display_additional_elements',
			function ( $display ) {
				if ( is_shop() ) {
					$theme_builder_layouts = et_theme_builder_get_template_layouts();

					if ( isset( $theme_builder_layouts['et_body_layout'] ) ) {
						$enabled  = isset( $theme_builder_layouts['et_body_layout']['enabled'] ) ? $theme_builder_layouts['et_body_layout']['enabled'] : false;
						$override = isset( $theme_builder_layouts['et_body_layout']['override'] ) ? $theme_builder_layouts['et_body_layout']['override'] : false;
						$id       = isset( $theme_builder_layouts['et_body_layout']['id'] ) ? $theme_builder_layouts['et_body_layout']['id'] : false;

						if ( $enabled && $override && $id ) {
							// Get the post content of the layout by id and it's post type of 'et_body_layout'.
							$layout = get_post( $id );

							if ( $layout ) {
								$layout_content = $layout->post_content;

								// Check if the layout content contains the [product_table ...] shortcode.
								if ( strpos( $layout_content, '[product_table' ) !== false ) {
									return true;
								}
							}
						}
					}
				}

				return $display;
			}
		);

		add_filter(
			'wcf_global_inject_fallback',
			function ( $use ) {

				$theme_builder_layouts = et_theme_builder_get_template_layouts();
				$has_layout            = false;

				if ( isset( $theme_builder_layouts['et_body_layout'] ) ) {
					$enabled  = isset( $theme_builder_layouts['et_body_layout']['enabled'] ) ? $theme_builder_layouts['et_body_layout']['enabled'] : false;
					$override = isset( $theme_builder_layouts['et_body_layout']['override'] ) ? $theme_builder_layouts['et_body_layout']['override'] : false;
					$id       = isset( $theme_builder_layouts['et_body_layout']['id'] ) ? $theme_builder_layouts['et_body_layout']['id'] : false;

					if ( $enabled && $override && $id ) {
						$has_layout = true;
						// Get the post content of the layout by id and it's post type of 'et_body_layout'.
						$layout = get_post( $id );

						if ( $layout ) {
							$layout_content = $layout->post_content;

							// Check if the layout content contains the [product_table ...] shortcode.
							if ( strpos( $layout_content, '[product_table' ) !== false ) {
								$use = false;
							}
						}
					}
				}

				if ( ! $has_layout && ! is_page() ) {
					$wpt_settings = \Barn2\Plugin\WC_Product_Table\Util\Settings::get_setting_misc();

					$is_shop_and_page_has_table             = is_shop() && ! empty( $wpt_settings['shop_override'] );
					$is_product_category_and_page_has_table = is_product_category() && ! empty( $wpt_settings['archive_override'] );
					$is_attribute_and_page_has_table        = false;

					if ( is_tax() ) {
						global $wp_query;
						$taxonomy = $wp_query->queried_object->taxonomy;

						$is_attribute_and_page_has_table = ! empty( $wpt_settings['attribute_override'] ) && taxonomy_is_product_attribute( $taxonomy );
					}

					if ( $is_shop_and_page_has_table || $is_product_category_and_page_has_table || $is_attribute_and_page_has_table ) {
						$use = false;
					}
				} else if ( is_page() && ! $has_layout ) {
					$current_page_content = get_post_field( 'post_content', get_the_ID() );
					$has_shortcode 	  = strpos( $current_page_content, '[product_table' ) !== false;

					if ( $has_shortcode ) {
						$use = false;
					}
				}

				return $use;
			}
		);
	}

	/**
	 * Load the assets specific to this integration.
	 *
	 * @return void
	 */
	public function assets() {

		$file_name = 'wcf-divi';

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
			'wcf-divi',
			'const WCF_DIVI_COMPAT = ' . wp_json_encode(
				[
					'baseUrl' => $this->get_page_base_url(),
				]
			),
			'before'
		);
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
		return 'divi-query';
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
	 * Get the base url for the fallback mode.
	 *
	 * @return string
	 */
	public function get_page_base_url() {
		$is_shop_page     = is_shop();
		$is_shop_taxonomy = is_product_category() || is_product_tag();

		if ( $is_shop_page && ! $is_shop_taxonomy ) {
			return get_permalink( wc_get_page_id( 'shop' ) );
		} elseif ( ! $is_shop_page && ! $is_shop_taxonomy && is_page() ) {
			return get_permalink( get_queried_object_id() );
		}

		return get_term_link( get_queried_object_id() );
	}

	/**
	 * Attach flag to wc shortcodes query.
	 *
	 * @return void
	 */
	public function attach_flag() {
		$current_page_layouts = et_theme_builder_get_template_layouts();

		add_action(
			'et_pb_shop_before_print_shop',
			function () {
				add_filter(
					'woocommerce_product_loop_start',
					function ( $output ) {

						return '<div class="wcf-wc-shortcode-wrapper"><!--wcf-loop-start-->' . $output;
					}
				);

				add_filter(
					'woocommerce_product_loop_end',
					function ( $output ) {

						return $output . '<!--wcf-loop-end--></div>';
					}
				);

				foreach ( $this->types as $type ) {
					add_action( 'woocommerce_shortcode_before_' . $type . '_loop', [ $this, 'add_tags' ] );
				}

				add_filter(
					'shortcode_atts_products',
					function ( $out, $pairs, $atts, $shortcode ) {
						$out['cache'] = false;
						return $out;
					},
					10,
					4
				);
			}
		);
	}

	/**
	 * Wraps the output of the [products] shortcode with
	 * a custom div and generate our fallback elements for prefilling.
	 *
	 * @param array $attributes
	 * @return void
	 */
	public function add_tags( $attributes ) {
		$query = ( new WC_Shortcodes_Wrapper( $attributes, 'products' ) )->get_all_queried_products();

		echo $this->generate_fallback_output( isset( $query->ids ) ? $query->ids : [] );
	}

	/**
	 * Generates the output of our fallback elements.
	 *
	 * @param array $products
	 * @return void
	 */
	public function generate_fallback_output( array $products ) {
		if ( empty( $products ) ) {
			return;
		}

		$service = wcf()->get_service( 'display' );

		ob_start();

		$service->add_active_filters();
		$service->add_mobile_drawer();
		$service->add_sorting_bar();

		echo '<div id="wcf-fallback-products-count" data-count="' . absint( count( $products ) ) . '"></div>';
		echo '<div id="wcf-fallback-post-ids" data-ids="' . esc_attr( implode( ',', $products ) ) . '"></div>';

		$totals = ob_get_clean();

		return $totals;
	}

	/**
	 * @inheritdoc
	 */
	public function enqueue_fix() {
		$css = '
			#main-header {
				z-index:9998;
			}
			.wcf-dropdown-menu {
				margin-top: -20px !important;
			}
		';

		wp_add_inline_style( $this->get_dummy_handle(), $css );
	}
}
