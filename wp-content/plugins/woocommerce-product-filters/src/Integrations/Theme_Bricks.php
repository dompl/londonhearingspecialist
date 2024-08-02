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
use Barn2\Plugin\WC_Filters\Query_Cache;
use Barn2\Plugin\WC_Filters\Request;
use Barn2\Plugin\WC_Filters\Model\Filters\Search;


use function Barn2\Plugin\WC_Filters\wcf;

/**
 * Provides integration with the Bricks theme.
 */
class Theme_Bricks extends Theme_Integration {

	/**
	 * Holds the prefix used for identifying the query.
	 */
	const INTEGRATION_PREFIX = '_bricks';

	/**
	 * Holds the query and filters cache handler.
	 *
	 * @var Query_Cache
	 */
	protected $cache;

	/**
	 * Name of the element found.
	 *
	 * @var string
	 */
	public $found_element = '';

	/**
	 * Holds the template name.
	 *
	 * @var string
	 */
	public $template = 'bricks';

	/**
	 * For some reason this page builder runs queries twice.
	 *
	 * @var integer
	 */
	private $products_query_counter = 0;

	/**
	 * @inheritdoc
	 */
	public function register() {
		parent::register();

		if ( ! $this->should_enqueue() ) {
			return;
		}

		add_action( 'wp_enqueue_scripts', [ $this, 'assets' ], 100 );
		add_filter( 'bricks/elements/woocommerce-products/controls', [ $this, 'add_controls' ] );
		add_filter( 'bricks/posts/query_vars', [ $this, 'maybe_detect_query' ], 10, 3 );
		add_filter( 'bricks/posts/query_vars', [ $this, 'set_products_query_vars' ], 10, 3 );
		add_shortcode( 'wpf-bricks-elements', [ $this, 'shortcode' ] );
	}

	/**
	 * Enqueue the integration script.
	 *
	 * @return void
	 */
	public function assets() {
		$file_name = 'wcf-bricks';

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
	 * Add a control to the Bricks WooCommerce Products element to allow
	 * the user to enable/disable the plugin.
	 *
	 * @param array $controls The existing controls.
	 * @return array The modified controls.
	 */
	public function add_controls( $controls ) {
		$controls['usingBarn2'] = [
			'tab'   => 'content',
			'label' => esc_html__( 'Enable filtering', 'woocommerce-product-filters' ),
			'type'  => 'checkbox',
			'group' => 'query',
		];

		return $controls;
	}

	/**
	 * Detect the query and store the element id.
	 *
	 * @param array $query_vars
	 * @param array $settings
	 * @param string $element_id
	 * @return array
	 */
	public function maybe_detect_query( $query_vars, $settings, $element_id ) {
		if ( isset( $settings['usingBarn2'] ) ) {
			$element = $this->get_element( get_the_ID(), $element_id );
			++$this->products_query_counter;
			if ( $this->products_query_counter === 2 ) {
				$this->found_element = $element;
			}
		}

		return $query_vars;
	}

	/**
	 * Set the query vars for the products query.
	 *
	 * @param array $query_vars
	 * @param array $settings
	 * @param string $element_id
	 * @return array
	 */
	public function set_products_query_vars( $query_vars, $settings, $element_id ) {
		if ( ! isset( $query_vars['post_type'] ) ) {
			return $query_vars;
		}

		if ( is_array( $query_vars['post_type'] ) && ! in_array( 'product', $query_vars['post_type'] ) ) {
			return $query_vars;
		}

		if ( ! is_array( $query_vars['post_type'] ) && $query_vars['post_type'] !== 'product' ) {
			return $query_vars;
		}

		if ( ! isset( $settings['usingBarn2'] ) || $settings['usingBarn2'] !== true ) {
			return $query_vars;
		}

		if ( ! empty( $this->found_element ) ) {
			/** @var Request $request_service */
			$request_service = wcf()->get_service( 'request' );

			/** @var Prefiller $prefiller_service */
			$prefiller_service = wcf()->get_service( 'prefiller' );

			$is_prefiller_running = $prefiller_service->parameters instanceof Collection && $prefiller_service->parameters->isNotEmpty();

			$query_vars['woocommerce-filters']        = true;
			$query_vars['woocommerce-filters-bricks'] = true;

			$filters  = $request_service->get_processed_filters();
			$post_ids = $request_service->get_post_ids();
			$paged    = $request_service->get_paged();
			$orderby  = $request_service->get_orderby();

			if ( $is_prefiller_running ) {
				$filters  = $prefiller_service->filters;
				$post_ids = $prefiller_service->post_ids;
				$paged    = $prefiller_service->paged;
				$orderby  = $prefiller_service->orderby;
			}

			if ( $filters->isNotEmpty() ) {
				$query_vars['post__in'] = $post_ids;
				$request_service->reset = false;
			}

			if ( $paged ) {
				$query_vars['paged']    = $paged;
				$request_service->reset = false;
			}

			$this->maybe_order_results( $orderby, $query_vars );
			$this->maybe_insert_search_query( $filters, $query_vars );
		}

		return $query_vars;
	}

	/**
	 * Order the results based on the selected orderby value.
	 *
	 * @param string $orderby
	 * @param array $query_vars
	 * @return void
	 */
	public function maybe_order_results( $orderby, array &$query_vars ) {
		if ( empty( $orderby ) ) {
			return;
		}

		/** @var Request $request_service */
		$request_service        = wcf()->get_service( 'request' );
		$request_service->reset = false;

		switch ( $orderby ) {
			case 'price':
				add_filter( 'posts_clauses', [ \WC()->query, 'order_by_price_asc_post_clauses' ] );
				break;
			case 'price-desc':
				add_filter( 'posts_clauses', [ \WC()->query, 'order_by_price_desc_post_clauses' ] );
				break;
			case 'date':
				$query_vars['orderby'] = 'date ID';
				$query_vars['order']   = 'desc';
				break;
			case 'rating':
				add_filter( 'posts_clauses', [ \WC()->query, 'order_by_rating_post_clauses' ] );
				break;
			case 'popularity':
				add_filter( 'posts_clauses', [ \WC()->query, 'order_by_popularity_post_clauses' ] );
				break;
			case 'menu_order':
				$query_vars['orderby'] = 'menu_order title';
				break;
		}
	}

	/**
	 * Insert the search query into the query vars.
	 *
	 * @param Collection $filters
	 * @param array $query_vars
	 * @return void
	 */
	public function maybe_insert_search_query( $filters, &$query_vars ) {
		if ( $filters->contains(
			function ( $item, $key ) {
				return $item instanceof Search && ! empty( $item->get_search_query() );
			}
		) ) {
			/** @var Request $request_service */
			$request_service        = wcf()->get_service( 'request' );
			$request_service->reset = false;

			$query_vars['s'] = $filters->first(
				function ( $item, $key ) {
					return $item instanceof Search && ! empty( $item->get_search_query() );
				}
			)->get_search_query();
		}
	}

	/**
	 * Get the element data from the database.
	 *
	 * @param integer $post_id
	 * @param string $element_id
	 * @return array
	 */
	public function get_element( $post_id, $element_id ) {
		$element = \Bricks\Helpers::get_element_data( $post_id, $element_id );
		return $element['element'];
	}

	/**
	 * Registers a new shortcode responsible of displaying the
	 * custom elements for the Bricks theme.
	 *
	 * @return string
	 */
	public function shortcode() {

		$display_service = wcf()->get_service( 'display' );

		ob_start();
		$display_service->add_active_filters();
		$display_service->add_mobile_drawer();
		$display_service->add_sorting_bar();
		$output = ob_get_clean();

		return $output;
	}

	/**
	 * @inheritdoc
	 */
	public function enqueue_fix() {
		$css = '
			.drawer-content-wrapper {
				width: 27% !important;
			}

			@media (max-width: 1024px) {
				.drawer-content-wrapper {
					width: 47% !important;
				}
			}

			@media (max-width: 768px) {
				.drawer-content-wrapper {
					width: 100% !important;
				}
			}

			.wcf-horizontal-sort input[role="combobox"] {
				width: 0 !important;
				border: none !important;
				padding: 0 !important;
			}
		';

		wp_add_inline_style( $this->get_dummy_handle(), $css );
	}
}
