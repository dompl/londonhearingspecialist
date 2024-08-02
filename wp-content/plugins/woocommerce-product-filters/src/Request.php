<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters;

use Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Support\Collection;
use Barn2\Plugin\WC_Filters\Model\Filter;
use Barn2\Plugin\WC_Filters\Model\Filters\Attribute;
use Barn2\Plugin\WC_Filters\Model\Filters\Taxonomy;
use Barn2\Plugin\WC_Filters\Traits\Counters_Aware;
use Barn2\Plugin\WC_Filters\Traits\Params_Provider;
use Barn2\Plugin\WC_Filters\Traits\Query_Aware;
use Barn2\Plugin\WC_Filters\Utils\Filters;
use Barn2\Plugin\WC_Filters\Utils\Products;
use Barn2\Plugin\WC_Filters\Utils\Responses;
use Barn2\Plugin\WC_Filters\Dependencies\Lib\Registerable;
use Barn2\Plugin\WC_Filters\Utils\Settings;

/**
 * Responsible of handling query filtering requests.
 */
class Request implements Registerable {

	use Counters_Aware;
	use Params_Provider;
	use Query_Aware;

	/**
	 * Collection of the submitted values through the search form.
	 *
	 * @var Collection
	 */
	protected $request;

	/**
	 * Collection of the filter models loaded.
	 * This list contains ONLY the filters for which
	 * the user as selected values.
	 *
	 * @var Collection
	 */
	protected $filters;

	/**
	 * Holds the paged argument for the query.
	 *
	 * @var bool|int
	 */
	protected $paged = false;

	/**
	 * Whether or not the request is a reset request.
	 *
	 * @var boolean
	 */
	public $reset = false;

	/**
	 * List of post ids found.
	 *
	 * @var array
	 */
	protected $post_ids = [];

	/**
	 * Holds the sorting method of the query.
	 *
	 * @var boolean|string
	 */
	protected $orderby = false;

	/**
	 * Determine if the filtering request produced no results.
	 *
	 * @var boolean
	 */
	protected $is_404 = false;

	/**
	 * Collection of requested parameters.
	 *
	 * @var Collection
	 */
	protected $parameters;

	/**
	 * The query object.
	 *
	 * @var \WP_Query
	 */
	public $cached_query;

	/**
	 * Hook into WP.
	 *
	 * @return void
	 */
	public function register() {
		$this->intercept();
	}

	/**
	 * Get the list of post ids found.
	 *
	 * @return array
	 */
	public function get_post_ids() {
		return $this->post_ids;
	}

	/**
	 * Get the list of filters loaded.
	 *
	 * @return Collection
	 */
	public function get_processed_filters() {
		if ( ! $this->filters instanceof Collection ) {
			return new Collection();
		}

		return $this->filters;
	}

	/**
	 * Intercept the search request, load the hooks and buffer the output.
	 *
	 * @return void
	 */
	public function intercept() {
		$action = isset( $_POST['action'] ) ? sanitize_key( $_POST['action'] ) : false; //phpcs:ignore

		if ( $action !== 'wcf_fetch_data' ) {
			return;
		}

		// Grab the request into a collection so that it's easier to work with.
		$this->parameters = new Collection( $_POST );

		$this->paged       = $this->get_paged();
		$this->reset       = $this->is_reset();
		$this->orderby     = $this->get_orderby();
		$requested_filters = $this->get_filters(); //phpcs:ignore

		if ( ! empty( $requested_filters ) ) {
			$instance = $this;
			add_action(
				'init',
				function () use ( $instance, $requested_filters ) {
					$instance->process_filters( $requested_filters );
				},
				20
			);
		}

		/**
		 * Hook: wcf_before_request_intercepted - Fires before the request is intercepted.
		 *
		 * @param Request $this instance of the Request class.
		 */
		do_action( 'wcf_before_request_intercepted', $this );

		// Remove the image loading optimization buffer to avoid conflicts with the ajax request.
		// This is only needed for Elementor. Unfortunately, we need to put this here for now.
		if ( class_exists( '\Elementor\Modules\ImageLoadingOptimization\Module' ) ) {
			remove_action( 'get_footer', [ \Elementor\Modules\ImageLoadingOptimization\Module::instance(), 'set_buffer' ] );
		}

		add_filter( 'show_admin_bar', '__return_false' );
		add_action( 'pre_get_posts', [ $this, 'update_query_vars' ], 999 );
		add_action( 'shutdown', [ $this, 'inject_template' ], 0 );

		ob_start();
	}

	/**
	 * Get the paged parameter of the request.
	 *
	 * @return int|bool
	 */
	public function get_paged() {
		if ( ! $this->parameters instanceof Collection ) {
			return false;
		}

		// Supported keys to check are:
		$keys = [ '_paged', 'paged' ];

		return $this->parameters->first(
			function ( $value, $key ) use ( $keys ) {
				return in_array( $key, $keys, true );
			}
		);
	}

	/**
	 * Determine if this was a reset request.
	 *
	 * @return boolean
	 */
	private function is_reset() {
		if ( ! $this->parameters instanceof Collection ) {
			return false;
		}
		return $this->parameters->get( 'reset' ) === 'true';
	}

	/**
	 * Determine if an orderby parameter was provided.
	 *
	 * @return string|bool
	 */
	public function get_orderby() {
		if ( ! $this->parameters instanceof Collection ) {
			return false;
		}
		return $this->parameters->has( 'sorting' ) ? $this->parameters->get( 'sorting' ) : false;
	}

	/**
	 * Get the list of filters requested.
	 *
	 * @param array $filters_list optional explicit filters list.
	 * @return Collection
	 */
	public function get_filters( array $filters_list = [] ) {
		$filters = [];

		if ( ! empty( $filters_list ) ) {
			$filters = $filters_list;
		} else {
			$filters = isset( $_POST['filters'] ) && ! empty( $_POST['filters'] ) ? wc_clean( json_decode( $_POST['filters'], true ) ) : []; //phpcs:ignore
		}

		return ( new Collection( $filters ) )->except( 'action' );
	}

	/**
	 * Load the filters and attach values to them.
	 *
	 * @param Collection $requested_filters
	 * @return void
	 */
	private function process_filters( Collection $requested_filters ) {

		$requested_filters = $this->prepare_requested_filters_collection( $requested_filters );

		if ( $requested_filters->isEmpty() ) {
			return;
		}

		$this->request = $requested_filters;
		$filters       = Filter::whereIn( 'slug', $requested_filters->keys() )->get();

		if ( empty( $filters ) ) {
			return;
		}

		$this->filters = $this->attach_search_query_to_filters( $filters );
	}

	/**
	 * Attach the value of the filter from the frontend request,
	 * to the `Filter` instance `search_query` attribute.
	 *
	 * This is then later used via the `get_search_query` method of the Filter.
	 *
	 * @param Collection $collection
	 * @return Collection
	 */
	private function attach_search_query_to_filters( Collection $collection ) {

		$filters_with_multiple_options = [
			Taxonomy::class,
			Attribute::class,
		];

		$multiselectable = [
			'checkboxes',
			'labels',
			'images',
		];

		$collection->each(
			function ( $instance ) use ( $filters_with_multiple_options, $multiselectable ) {
				$filter_class = get_class( $instance );

				if ( in_array( $filter_class, $filters_with_multiple_options, true ) && in_array( $instance->get_option( 'filter_type' ), $multiselectable, true ) ) {
					$value = $this->request->get( $instance->slug );

					if ( ! is_array( $value ) ) {
						$value = explode( ',', $value );
					}

					$instance->setAttribute( 'search_query', $value );
				} else {
					$instance->setAttribute( 'search_query', $this->request->get( $instance->slug ) );
				}
			}
		);

		return $collection;
	}

	/**
	 * Inject the list of found post ids into the query.
	 *
	 * @param \WP_Query $query
	 * @return void
	 */
	public function update_query_vars( $query ) {
		if ( ( is_admin() && ! wp_doing_ajax() ) || ! $this->is_main_query( $query ) ) {
			return;
		}

		if ( $query->get( 'woocommerce-filters-bypass' ) === true ) {
			return;
		}

		if ( ! empty( $query->get( 'post_type' ) ) && ! Filters::query_has_product_post_type( $query ) ) {
			return;
		}

		$query->set( 'woocommerce-filters', true );

		/**
		 * Filter whether or not to update the query vars.
		 *
		 * @param boolean $should_update_query_vars whether or not to update the query vars.
		 * @param \WP_Query $query instance of the WP_Query class.
		 * @param Request $request instance of the Request class.
		 * @return boolean whether or not to update the query vars.
		 */
		$should_update_query_vars = apply_filters( 'woocommerce_filters_update_query_vars', true, $query, $this );

		if ( $should_update_query_vars === false ) {
			return;
		}

		// Only set the post-ids if the collection isn't empty.
		if ( $this->filters instanceof Collection && $this->filters->isNotEmpty() ) {
			// Reset the pagination if we've got results.
			$this->paged = false;

			$post_ids = $this->get_filtered_post_ids( $query );

			if ( empty( $post_ids ) || ! is_array( $post_ids ) ) {
				$this->is_404 = true;
			}

			if ( ! empty( $post_ids ) || ! is_array( $post_ids ) ) {
				$query->set( 'post__in', $post_ids );
			}

			$this->maybe_insert_search_query( $query );
		}

		$this->maybe_order_results( $query );

		if ( $this->paged ) {
			$query->set( 'paged', $this->paged );
		}

		$this->cached_query = $query;
	}

	/**
	 * Get the appropriate count for the found posts property.
	 *
	 * @param \WP_Query $wp_query
	 * @return int
	 */
	public function get_found_posts( $wp_query ) {
		$found = 0;

		if ( $this->is_404 === true ) {
			return $found;
		}

		if ( ! empty( $this->cached_query ) ) {
			$found = $this->cached_query->found_posts;

			/**
			 * Filter the found posts count
			 * for the cached query.
			 *
			 * @param int $found the found posts count.
			 * @param \WP_Query $wp_query the query object.
			 * @return int the found posts count.
			 */
			return apply_filters( 'wcf_cached_query_found_posts', $found, $this->cached_query );
		}

		if ( absint( $wp_query->found_posts ) === count( $this->post_ids ) ) {
			$found = $wp_query->found_posts;
		} elseif ( $wp_query->found_posts && ! empty( $this->post_ids ) && $wp_query->found_posts !== count( $this->post_ids ) ) {
			$found = count( $this->post_ids );
		} else {
			$found = $wp_query->found_posts;
		}

		return $found;
	}

	/**
	 * Send the output back via json.
	 *
	 * @return void
	 */
	public function inject_template() {
		$wp_query = $this->cached_query;

		$html = ob_get_clean();

		preg_match( '/<body(.*?)>(.*?)<\/body>/s', $html, $matches );

		if ( ! empty( $matches ) ) {
			$html = trim( $matches[2] );
		}

		$should_render = true;
		$values        = $this->request instanceof Collection ? $this->request->toArray() : [];
		$paged         = empty( $wp_query->get( 'paged' ) ) ? 1 : $wp_query->get( 'paged' );
		$found_posts   = $this->get_found_posts( $wp_query );

		// Check if infinite scroll is enabled.
		$infinite_scroll = Settings::get_option( 'infinite_scrolling', false );

		if ( $infinite_scroll && $found_posts === 0 ) {
			$should_render = false;
		}

		wp_send_json(
			[
				'output'          => Products::get_string_between( $html, '<!--wcf-loop-start-->', '<!--wcf-loop-end-->' ),
				'found_posts'     => $found_posts,
				'paged'           => $paged,
				'posts_per_page'  => $wp_query->get( 'posts_per_page' ),
				'offset'          => $wp_query->get( 'offset' ),
				'counts'          => $this->get_counts( $this->filters, $values ),
				'result_count'    => $this->generate_result_count( $wp_query, $this->post_ids, $this->filters ),
				'url_params'      => $this->prepare_url_params(),
				'is_404'          => $this->is_404,
				'no_products_tpl' => $this->is_404 ? Responses::generate_no_products_template() : false,
				'orderby'         => $this->orderby,
				'reset'           => $this->reset,
				'ids'             => $this->post_ids,
				'has_next_page'   => $wp_query->max_num_pages > 1 && $paged < $wp_query->max_num_pages,
				'should_render'   => $should_render,
			]
		);
	}
}
