<?php
/**
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

namespace Barn2\Plugin\WC_Filters;

use Barn2\Plugin\WC_Filters\Dependencies\Illuminate\Database\Eloquent\Collection;
use Barn2\Plugin\WC_Filters\Dependencies\Sematico\FluentQuery\Model\Post;
use Barn2\Plugin\WC_Filters\Model\Group;
use Barn2\Plugin\WC_Filters\Model\Filter;
use Barn2\Plugin\WC_Filters\Model\Preloadable_Interface;
use Barn2\Plugin\WC_Filters\Model\Storable_Interface;
use Barn2\Plugin\WC_Filters\Utils\Filters;
use Barn2\Plugin\WC_Filters\Utils\Products;
use Barn2\Plugin\WC_Filters\Utils\Settings;
use Barn2\Plugin\WC_Filters\Dependencies\Lib\Registerable;
use JsonSerializable;

use function Barn2\Plugin\WC_Filters\wcf;

/**
 * Handles the display of several elements of the plugin.
 */
class Display implements Registerable, JsonSerializable {

	// ID of the main js file.
	const IDENTIFIER = 'wcf-frontend';

	public $enqueued = false;

	/**
	 * The number of times the loop tag has been inserted.
	 *
	 * @var integer
	 */
	public $tag_inserted = 0;

	/**
	 * Hook into WP.
	 *
	 * @return void
	 */
	public function register() {
		add_action( 'wp_enqueue_scripts', [ $this, 'assets' ] );
		add_action( 'wp_enqueue_scripts', [ $this, 'load_translation' ], 100 );
		add_shortcode( 'wpf-filters', [ $this, 'shortcode' ] );
		add_shortcode( 'product_filters', [ $this, 'shortcode' ] );
		add_action( 'loop_start', [ $this, 'add_template_tag' ] );
		add_action( 'loop_no_results', [ $this, 'add_template_tag' ] );
		add_action( 'loop_end', [ $this, 'add_closing_template_tag' ] );

		add_action( 'woocommerce_before_shop_loop', [ $this, 'add_sorting_bar' ], 9 );
		add_action( 'woocommerce_before_shop_loop', [ $this, 'open_hider' ], 9 );
		add_action( 'woocommerce_before_shop_loop', [ $this, 'close_hider' ], 999 );

		add_action( 'woocommerce_before_shop_loop', [ $this, 'add_mobile_drawer' ], 8 );
		add_action( 'woocommerce_before_shop_loop', [ $this, 'add_shop_filters' ], 8 );
		add_action( 'woocommerce_before_shop_loop', [ $this, 'add_active_filters' ], 8 );

		add_action( 'woocommerce_after_shop_loop', [ $this, 'add_infinite_loading' ], 8 );
		add_filter( 'wc_get_template', [ $this, 'filter_templates' ], 10, 5 );

		add_action( 'wp_footer', [ $this, 'add_loading_holder' ] );
	}

	/**
	 * Increase the number of times the loop tag has been inserted.
	 *
	 * @return self
	 */
	public function increase_tag_inserted() {
		++$this->tag_inserted;

		return $this;
	}

	/**
	 * Get the number of times the loop tag has been inserted.
	 *
	 * @return integer
	 */
	public function get_tag_inserted() {
		return $this->tag_inserted;
	}

	/**
	 * Add the loading state holder into the footer.
	 *
	 * @return void
	 */
	public function add_loading_holder() {
		echo '<div id="wcf-loading-state"></div>';
	}

	/**
	 * Load the assets required for the frontend.
	 *
	 * @return void
	 */
	public function assets() {
		// Prevent loading on cart and checkout pages.
		if ( is_cart() || is_checkout() || is_product() || is_account_page() ) {
			return;
		}

		$file_name = self::IDENTIFIER;

		$admin_script_path       = 'assets/build/' . $file_name . '.js';
		$admin_script_asset_path = wcf()->get_dir_path() . 'assets/build/' . $file_name . '.asset.php';
		$admin_script_asset      = file_exists( $admin_script_asset_path )
		? require $admin_script_asset_path
		: [
			'dependencies' => [],
			'version'      => filemtime( $admin_script_path ),
		];
		$script_url              = wcf()->get_dir_url() . $admin_script_path;

		wp_register_script(
			$file_name,
			$script_url,
			$admin_script_asset['dependencies'],
			$admin_script_asset['version'],
			true
		);

		wp_add_inline_script( $file_name, 'const WCF_Frontend = ' . wp_json_encode( $this ), 'before' );

		wp_register_style( $file_name, wcf()->get_dir_url() . 'assets/build/' . $file_name . '.css', [], $admin_script_asset['version'] );

		wp_enqueue_script( self::IDENTIFIER );
		wp_enqueue_style( self::IDENTIFIER );
	}

	/**
	 * Load translations for assets
	 *
	 * @return void
	 */
	public function load_translation() {
		$file_name = self::IDENTIFIER;

		wp_set_script_translations(
			$file_name,
			'woocommerce-product-filters',
			wcf()->get_dir_path() . 'languages/'
		);
	}

	/**
	 * Use the JsonSerializable interface to add inline json on the frontend.
	 * This data is used globally by all filters throughout the site.
	 *
	 * @return array
	 */
	#[\ReturnTypeWillChange]
	public function jsonSerialize() {

		$counters = Settings::get_option( 'display_count', false );

		/** @var Indexer $indexer */
		$indexer = wcf()->get_service( 'indexer' );

		return [
			'assets_path'            => wcf()->get_dir_url() . 'assets/build/',
			'filter_mode'            => Settings::get_option( 'filter_mode', 'instant' ),
			'button_text'            => Settings::get_option( 'button_text', __( 'Apply Filters', 'woocommerce-product-filters' ) ),
			'toggle_filters'         => Settings::get_option( 'toggle_filters', false ) === '1' ? 'yes' : false,
			'toggle_default_status'  => Settings::get_option( 'toggle_default_status', 'open' ),
			'display_products_count' => false,
			'filter_num_products'    => $counters === '1' || $counters === true ? 'yes' : false,
			'products_count'         => $this->get_initial_products_count(),
			'hide_default_mobile'    => Settings::get_option( 'mobile_visibility', false ) === 'closed' ? 'yes' : false,
			'hide_default_desktop'   => Settings::get_option( 'desktop_visibility', false ) === 'closed' ? 'yes' : false,
			'show_filters_btn_text'  => Settings::get_option( 'show_filters_button_text', __( 'Show filters', 'woocommerce-product-filters' ) ),
			'clear_btn_text'         => Settings::get_option( 'clear_button_text', __( 'Clear filters', 'woocommerce-product-filters' ) ),
			'slideout_desktop'       => Settings::get_option( 'desktop_visibility', false ) === 'closed' ? 'yes' : false,
			'slideout_mobile'        => Settings::get_option( 'mobile_visibility', false ) === 'closed' ? 'yes' : false,
			'currency'               => Products::get_currency_data(),
			'highest_price'          => get_option( 'wcf_highest_price', false ),
			'slideout_heading'       => Settings::get_option( 'slideout_heading', __( 'Filter', 'woocommerce-product-filters' ) ),
			'supervisor'             => current_user_can( 'manage_options' ) || current_user_can( 'manage_woocommerce' ),
			'needs_reindex'          => Diff::is_reindex_needed() && ( current_user_can( 'manage_options' ) || current_user_can( 'manage_woocommerce' ) ),
			'is_reindexing'          => ( $indexer->is_batch_index_running() || $indexer->is_silently_running() ) && ( current_user_can( 'manage_options' ) || current_user_can( 'manage_woocommerce' ) ),
			'posts_per_page'         => $this->get_products_per_page(),
			'orderby_options'        => Products::get_catalog_sorting_options(),
			'horizontal_per_row'     => Settings::get_option( 'horizontal_per_row', 4 ),
			'use_fallback'           => Filters::is_using_fallback_mode(),
			'is_mobile'              => wp_is_mobile(),
			'admin_url'              => admin_url( 'admin.php' ),
			'is_taxonomy_page'       => Filters::is_taxonomy_page(),
			'current_query_params'   => Filters::get_current_page_query_params(),
			'current_taxonomy'       => Filters::is_taxonomy_page() ? [
				'taxonomy' => ( get_queried_object() )->taxonomy,
				'term_id'  => ( get_queried_object() )->term_id,
			] : false,
			'rest_api_url'           => get_rest_url( null, Api::API_NAMESPACE ),
			/**
			 * Filter: adjust the amount of images displayed inside the "image" filter
			 * when used within an horizontal filter group.
			 *
			 * @param int $amount
			 * @return int
			 */
			'mobile_images_limit'    => apply_filters( 'wcf_horizontal_minimum_images', 5 ),
			/**
			 * Filter: allows third parties to disable the custom pagination template if needed.
			 *
			 * @param bool $disabled
			 * @return bool
			 */
			'pagination_disabled'    => apply_filters( 'wcf_is_pagination_disabled', false ),
			/**
			 * Filter: allows third parties to disable the searchable dropdowns on mobile.
			 *
			 * @param bool $disabled
			 * @return bool
			 */
			'searchable_mobile'      => apply_filters( 'wcf_dropdowns_searchable_mobile', true ),

			'lang'                   => self::get_language_vars(),

			'design'                 => self::get_design_settings(),
			'infinite_scroll'        => Settings::get_option( 'infinite_scrolling', false ),
		];
	}

	/**
	 * Registers the renderer shortcode.
	 *
	 * @param array $atts
	 * @return string
	 */
	public function shortcode( $atts ) {

		$attributes = shortcode_atts(
			[
				'id'      => null,
				'layout'  => 'horizontal',
				'widget'  => 'no',
				'opening' => '',
				'closing' => '',
			],
			$atts
		);

		/** @var Group $group */
		$group = Group::find( absint( $attributes['id'] ) );

		if ( ! $group instanceof Group ) {
			return;
		}

		$filters = $group->get_filters( false, true );

		if ( empty( $filters ) ) {
			return;
		}

		wp_add_inline_script( self::IDENTIFIER, 'var WCF_Group_' . $attributes['id'] . ' = ' . wp_json_encode( $this->prepare_json_for_shortcode( $filters ) ), 'before' );

		ob_start();

		?>
		<div class="wcf-group-wrapper"
			data-group-id="<?php echo esc_attr( $group->getID() ); ?>"
			data-layout="<?php echo esc_attr( $attributes['layout'] ); ?>"
			data-widget="<?php echo esc_attr( $attributes['widget'] ); ?>"
		></div>
		<?php

		return ob_get_clean();
	}

	/**
	 * Wrap the content into a custom div so that we can hide it via css.
	 *
	 * @return void
	 */
	public function open_hider() {
		echo '<div class="wcf-hider">';
	}

	/**
	 * Close the wrapper opened above.
	 *
	 * @return void
	 */
	public function close_hider() {
		echo '</div>';
	}

	/**
	 * Add our custom sorting and results bar.
	 *
	 * @return void
	 */
	public function add_sorting_bar( $disable_counter = false ) {
		$total    = wc_get_loop_prop( 'total' );
		$per_page = wc_get_loop_prop( 'per_page' );
		$current  = wc_get_loop_prop( 'current_page' );
		$counter  = $disable_counter ? 'yes' : 'no';
		echo '<div id="wcf-sorting-bar" data-counter-disabled="' . esc_attr( $counter ) . '" data-total="' . absint( $total ) . '" data-per-page="' . esc_attr( $per_page ) . '" data-current="' . absint( $current ) . '"></div>';
	}

	/**
	 * Get the unfiltered initial products count.
	 *
	 * @return string
	 */
	public function get_initial_products_count() {
		if ( ! empty( wc_get_loop_prop( 'total' ) ) ) {
			return wc_get_loop_prop( 'total' );
		}

		return Post::ofType( 'product' )->published()->count();
	}

	/**
	 * Add inline comment to wrap the loop.
	 *
	 * @param \WP_Query $query
	 * @return void
	 */
	public function add_template_tag( $query ) {
		if ( ! $query ) {
			return;
		}

		if ( $query instanceof \WP_Query && ! $this->is_product_post_type( $query ) && ! $this->is_product_taxonomy_page() ) {
			return;
		}

		/**
		 * Filter: allows third parties to bypass the loop tag.
		 *
		 * @param bool $bypass whether to bypass the loop tag.
		 * @param \WP_Query $query the current query.
		 * @param self $display the current display instance.
		 * @return bool whether to bypass the loop tag.
		 */
		$bypass = apply_filters( 'wcf_bypass_loop_tag', false, $query, $this );

		if ( $bypass ) {
			return;
		}

		if ( did_action( 'wp_head' ) ) {
			$this->increase_tag_inserted();
			echo "<!--wcf-loop-start-->\n";
		}
	}

	/**
	 * Add inline comment to wrap the end of the loop.
	 *
	 * @param \WP_Query $query
	 * @return void
	 */
	public function add_closing_template_tag( $query ) {
		if ( ! $query ) {
			return;
		}

		if ( $query instanceof \WP_Query && ! $this->is_product_post_type( $query ) && ! $this->is_product_taxonomy_page() ) {
			return;
		}

		$bypass = apply_filters( 'wcf_bypass_loop_tag', false, $query, $this );

		if ( $bypass ) {
			return;
		}

		if ( did_action( 'wp_head' ) ) {
			echo "<!--wcf-loop-end-->\n";
		}
	}

	/**
	 * Determine if the query is querying for products.
	 *
	 * @param \WP_Query $query
	 * @return boolean
	 */
	public function is_product_post_type( $query ) {

		$post_type = $query->get( 'post_type' );

		if ( is_array( $post_type ) && in_array( 'product', $post_type, true ) ) {
			return true;
		} elseif ( $post_type === 'product' ) {
			return true;
		}

		return false;
	}

	/**
	 * Determine if we're on a product taxonomy page.
	 *
	 * @return boolean
	 */
	public function is_product_taxonomy_page() {

		$queried_object        = get_queried_object();
		$registered_taxonomies = Products::get_registered_taxonomies( false, true );

		return is_tax() && isset( $queried_object->taxonomy ) && array_key_exists( $queried_object->taxonomy, $registered_taxonomies );
	}

	/**
	 * Prepare the filters collection to be used via javascript from the shortcode.
	 *
	 * @param Collection $filters
	 * @return array
	 */
	private function prepare_json_for_shortcode( Collection $filters ) {
		$list   = $filters->map->only( [ 'id', 'name', 'slug', 'filter_by', 'options' ] )->toArray();
		$data   = [];
		$counts = [];

		$is_taxonomy_page       = Filters::is_taxonomy_page();
		$current_query_post_ids = $is_taxonomy_page ? Filters::get_current_query_object_ids() : [];

		/** @var Filter $filter */
		foreach ( $filters as $filter ) {
			if ( $filter instanceof Storable_Interface ) {
				$data[ $filter->slug ] = $filter->get_json_store_data( $current_query_post_ids );
			}
			if ( $filter instanceof Preloadable_Interface ) {
				$counts[ $filter->slug ] = $filter->get_all_choices_counts( $current_query_post_ids );
			}
		}

		// Remove from the store, filters with no choices.
		foreach ( $counts as $slug => $countable ) {
			if ( empty( $countable ) || ( $countable instanceof Collection && $countable->isEmpty() ) ) {
				unset( $counts[ $slug ] );
			}
		}

		return [
			'filters' => $list,
			'data'    => $data,
			'counts'  => $counts,
		];
	}

	/**
	 * Add entry DIV, where the mobile drawer will be attached to.
	 *
	 * @return void
	 */
	public function add_mobile_drawer() {
		echo '<div id="wcf-mobile-drawer"></div>';
		echo '<div id="wcf-mobile-portal"></div>';
	}

	/**
	 * When a filter group is selected, automatically display it within the shop page.
	 *
	 * @return void
	 */
	public function add_shop_filters() {

		$group = Settings::get_option( 'group_display_shop_archive', false );

		if ( empty( $group ) || ! is_numeric( $group ) ) {
			return;
		}

		echo do_shortcode( '[product_filters id="' . absint( $group ) . '" layout="horizontal"]' );
	}

	/**
	 * Add entry DIV where the active filters list is displayed.
	 *
	 * @return void
	 */
	public function add_active_filters() {
		echo '<div id="wcf-actives-container"></div>';
	}

	/**
	 * Add entry DIV where the pagination is displayed.
	 * This is used for the infinite loading.
	 *
	 * We're using a DIV instead of the default WooCommerce pagination
	 * because we need to be able to add the infinite loading
	 * after the pagination.
	 *
	 * The infinite loading is added via javascript and the intersection observer
	 * needs to be able to find the DIV but only once.
	 *
	 * @return void
	 */
	public function add_infinite_loading() {
		if ( ! Settings::get_option( 'infinite_scrolling', false ) ) {
			return;
		}

		echo '<div class="wcf-pagination"></div>';
	}

	/**
	 * Filter specific default WC templates only when our
	 * frontend scripts are enqueued.
	 *
	 * @param string $template path to the template.
	 * @param string $template_name Template name.
	 * @param array  $args          Arguments. (default: array).
	 * @param string $template_path Template path. (default: '').
	 * @param string $default_path  Default path. (default: '').
	 * @return string
	 */
	public function filter_templates( $template, $template_name, $args, $template_path, $default_path ) {
		if ( $template_name === 'filter-result-count.php' ) {
			return wcf()->get_dir_path() . 'templates/filter-result-count.php';
		}

		$enqueued = wp_script_is( self::IDENTIFIER, 'enqueued' );

		/**
		 * Filter: allows third parties to disable the custom pagination template if needed.
		 *
		 * @param bool $disabled
		 * @return bool
		 */
		$pagination_disabled = apply_filters( 'wcf_is_pagination_disabled', false );

		if ( $enqueued && ! $pagination_disabled ) {
			if ( $template_name === 'loop/pagination.php' ) {
				return wcf()->get_dir_path() . 'templates/pagination.php';
			}
		}

		return $template;
	}

	/**
	 * Get the number of posts per page.
	 * Alternatively fall back to the default number provided by WC.
	 *
	 * @return string|int
	 */
	public function get_products_per_page() {

		global $wp_query;

		if ( $wp_query ) {
			return $wp_query->get( 'posts_per_page' );
		}

		return apply_filters( 'loop_shop_per_page', wc_get_default_products_per_row() * wc_get_default_product_rows_per_page() );
	}

	/**
	 * Get the design configuration of the plugin.
	 *
	 * @return array
	 */
	public static function get_design_settings() {
		$settings = [
			'primary_color'   => Settings::get_option( 'color_primary', '#089ec7' ),
			'secondary_color' => Settings::get_option( 'color_secondary', '#E1DFDF' ),
			'star_color'      => Settings::get_option( 'color_star', '#ffc300' ),
			'f_star_active'   => 'invert(76%) sepia(12%) saturate(3514%) hue-rotate(1deg) brightness(103%) contrast(100%)',
			'f_star_disabled' => 'invert(97%) sepia(3%) saturate(164%) hue-rotate(164deg) brightness(117%) contrast(87%)',
		];

		$title_design = Settings::get_option( 'design_filter_title', [] );
		$title_color  = isset( $title_design['color'] ) ? $title_design['color'] : '#424242';
		$title_size   = isset( $title_design['size'] ) ? $title_design['size'] : '18px';

		// if size doesn't end with px, add it.
		if ( ! preg_match( '/px$/', $title_size ) ) {
			$title_size .= 'px';
		}

		$settings['title_color'] = $title_color;
		$settings['title_size']  = $title_size;

		/**
		 * Hook: wcf_design_settings allows third parties to add their own design settings or modify the existing ones.
		 *
		 * @param array $settings
		 * @return array
		 */
		return apply_filters( 'wcf_design_settings', $settings );
	}

	/**
	 * Returns a list of language variables that are used in the frontend.
	 * This is used for the translation of the frontend.
	 *
	 * Unfortunately, we need this because WP doesn't yet know how to translate
	 * lazy loaded components - or at least the documentation lacks any information about it.
	 *
	 * @return array
	 */
	public static function get_language_vars() {
		$lang_vars = [
			'sort'              => __( 'Sort', 'woocommerce-product-filters' ),
			'from'              => __( 'From ', 'woocommerce-product-filters' ),
			'to'                => __( 'To ', 'woocommerce-product-filters' ),
			'single_result'     => __( '1 result', 'woocommerce-product-filters' ),
			'multi_results'     => __( '%d results', 'woocommerce-product-filters' ),
			'n_results'         => __( '%d result', 'woocommerce-product-filters' ),
			'more_filters'      => __( 'More filters', 'woocommerce-product-filters' ),
			'supervisor_dupes'  => __( 'This message is visible to Administrators and Store Managers Only. The following filters are using the same data source: %1$s. Filters must be unique and must not share the same source. <a href="%2$s" target="_blank">[Read more]</a>', 'woocommerce-product-filters' ),
			'supervisor_unique' => __( 'This message is visible to Administrators and Store Managers Only. Please note, you cannot use the same filter group multiple times on a page. Please make sure groups are unique. <a href="%s" target="_blank">[Read more]</a>', 'woocommerce-product-filters' ),
			'reindex_required'  => __( 'Regenerating the index in the background. Product filtering and sorting may not be accurate until this finishes. It will take a few minutes and this notice will disappear when complete.', 'woocommerce-product-filters' ),
			'supervisor_title'  => __( 'This message is visible to Administrators and Store Managers Only.', 'woocommerce-product-filters' ),
			'no_options'        => __( 'No options available', 'woocommerce-product-filters' ),
			'no_terms'          => __( 'No terms found for the specified taxonomy.', 'woocommerce-product-filters' ),
			'no_results'        => __( 'No results', 'woocommerce-product-filters' ),
			'select_option'     => __( 'Select an option', 'woocommerce-product-filters' ),
			'search_products'   => __( 'Search products...', 'woocommerce-product-filters' ),
			'no_prices'         => __( 'No prices have been found for your products. Please save your filter groups to regenerate the index.', 'woocommerce-product-filters' ),
			'no_values_cf'      => __( 'No values found for this custom field.', 'woocommerce-product-filters' ),
			'show_more'         => __( 'Show more', 'woocommerce-product-filters' ),
			'show_less'         => __( 'Show less', 'woocommerce-product-filters' ),
			'on_sale'           => __( 'On sale', 'woocommerce-product-filters' ),
			'in_stock'          => __( 'In stock', 'woocommerce-product-filters' ),
		];

		return $lang_vars;
	}
}
