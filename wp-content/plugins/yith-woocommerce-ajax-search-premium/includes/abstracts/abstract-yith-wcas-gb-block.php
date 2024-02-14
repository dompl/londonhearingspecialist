<?php
/**
 * Abstract_YITH_WCAS_Gb_Block class.
 *
 * @author  YITH
 * @package YITH/Builders/Gutenberg
 * @version 2.0
 */

/**
 * AbstractBlock class.
 */
abstract class Abstract_YITH_WCAS_Gb_Block {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = '';

	/**
	 * Block namespace.
	 *
	 * @var string
	 */
	protected $namespace = 'yith';

	/**
	 * Tracks if assets have been enqueued.
	 *
	 * @var boolean
	 */
	protected $enqueued_assets = false;

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->initialize();
	}

	/**
	 * Initialize this block type.
	 *
	 * - Hook into WP lifecycle.
	 * - Register the block with WordPress.
	 *
	 * @return void|bool
	 * @noinspection MissingReturnTypeInspection
	 */
	protected function initialize() {
		if ( empty( $this->block_name ) ) {
			_doing_it_wrong( __METHOD__, esc_html__( 'Block name is required.', 'yith-woocommerce-ajax-search' ), '2.0.0' );

			return false;
		}

		$this->register_block_assets();
		$this->register_block();
	}

	/**
	 * Register script and style assets for the block type before it is registered.
	 *
	 * This registers the scripts; it does not enqueue them.
	 *
	 * @return void
	 */
	protected function register_block_assets() {
		$block_editor_script = $this->get_block_editor_script();
		if ( null !== $this->get_block_editor_script() ) {
			wp_register_script(
				$this->get_block_editor_script( 'handle' ),
				$this->get_block_editor_script( 'path' ),
				$this->get_script_dependencies( $block_editor_script['script_name'], 'dependencies' ),
				YITH_WCAS_VERSION,
				true
			);

			if ( $this->get_block_editor_script( 'localize_param_name' ) ) {
				wp_localize_script(
					$this->get_block_editor_script( 'handle' ),
					$this->get_block_editor_script( 'localize_param_name' ),
					$this->get_block_editor_script( 'localize' )
				);
			}
			wp_set_script_translations( $this->get_block_editor_script( 'handle' ), 'yith-woocommerce-ajax-search', plugin_basename( YITH_WCAS_DIR ) . '/languages' );
		}

		$block_script = $this->get_block_script();
		if ( null !== $block_script ) {
			wp_register_script(
				$this->get_block_script( 'handle' ),
				$this->get_block_script( 'path' ),
				$this->get_script_dependencies( $block_script['script_name'], 'dependencies' ),
				$this->get_script_dependencies( $block_script['script_name'], 'version' ),
				true
			);

			if ( $this->get_block_script( 'localize_param_name' ) ) {
				wp_localize_script(
					$this->get_block_script( 'handle' ),
					$this->get_block_script( 'localize_param_name' ),
					$this->get_block_script( 'localize' )
				);
			}
		}

		wp_register_script( 'accounting', WC()->plugin_url() . '/assets/js/accounting/accounting.min.js', array( 'jquery' ), YITH_WCAS_VERSION, false );
	}

	/**
	 * Get the render callback for this block type.
	 *
	 * Dynamic blocks should return a callback, for example, `return [ $this, 'render' ];`
	 *
	 * @return callable|null;
	 * @see $this->register_block()
	 */
	protected function get_block_render_callback() {
		return array( $this, 'render_callback' );
	}

	/**
	 * Get the editor script data for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 *
	 * @return array|string
	 * @see $this->register_block()
	 */
	protected function get_block_editor_script( $key = null ) {
		$script_name = 'editor/editor-scripts';
		$script      = array(
			'script_name'         => $script_name,
			'handle'              => 'ywcas-results-editor-script',
			'path'                => YITH_WCAS_ASSETS_URL . "/js/blocks/build/{$script_name}.js",
			'dependencies'        => $this->get_script_dependencies( $script_name, 'dependencies' ),
			'localize_param_name' => 'ywcas_search_results_block_parameter',
			'localize'            => $this->get_common_localize(),
		);

		return $key ? ( $script[ $key ] ?? false ) : $script;
	}

	/**
	 * Get the script data for this block .
	 *
	 * @param string $key Data to get, or default to everything.
	 *
	 * @return array|string
	 * @see $this->register_block()
	 */
	protected function get_block_script( $key = null ) {
		$script_name = 'search-block/frontend';
		$script      = array(
			'script_name'         => $script_name,
			'handle'              => 'ywcas-search-results-script',
			'path'                => YITH_WCAS_ASSETS_URL . "/js/blocks/build/{$script_name}.js",
			'dependencies'        => $this->get_script_dependencies( $script_name, 'dependencies' ),
			'localize_param_name' => 'ywcas_search_results_block_parameter',
			'localize'            => $this->get_common_localize(),
		);

		return $key ? ( $script[ $key ] ?? false ) : $script;
	}

	/**
	 * Return an array of information about localization.
	 *
	 * @return mixed|null
	 */
	public function get_common_localize() {
		return apply_filters(
			'ywcas_block_common_localize',
			array(
				'ajaxURL'                => WC_AJAX::get_endpoint( '%%endpoint%%' ),
				'wcData'                 => self::get_wc_data(),
				'ywcasBuildBlockURL'     => YITH_WCAS_ASSETS_URL . '/js/blocks/build/search-block/',
				'siteURL'                => get_home_url(),
				'lang'                   => ywcas_get_current_language(),
				'addToCartLabel'         => apply_filters( 'ywcas_add_to_cart_label', __( 'Add to cart', 'yith-woocommerce-ajax-search' ) ),
				'readMoreLabel'          => apply_filters( 'ywcas_read_more_label', _x( 'Read more', 'add to cart label for not purchasable products', 'yith-woocommerce-ajax-search' ) ),
				'selectOptionsLabel'     => apply_filters( 'ywcas_select_options_label', _x( 'Select options', 'add to cart label for variable products', 'yith-woocommerce-ajax-search' ) ),
				'inStockLabel'           => __( 'In stock', 'yith-woocommerce-ajax-search' ),
				'outOfStockLabel'        => __( 'Out of stock', 'yith-woocommerce-ajax-search' ),
				'skuLabel'               => __( 'SKU: ', 'yith-woocommerce-ajax-search' ),
				'showAutoComplete'       => ywcas()->settings->get_is_autocomplete(),
				'minChars'               => ywcas()->settings->get_min_chars(),
				'classicDefaultSettings' => ywcas()->settings->get_classic_default_settings(),
				'defaultQuery'           => YITH_WCAS_Data_Index_Token::get_instance()->get_best_token( ywcas_get_current_language() ),
				'popularSearches'        => class_exists( 'YITH_WCAS_Search_History' ) ? YITH_WCAS_Search_History::get_instance()->get_popular_searches( ywcas_get_current_language() ) : array(),
				'historySearches'        => class_exists( 'YITH_WCAS_Search_History' ) ? YITH_WCAS_Search_History::get_instance()->get_history( ywcas_get_current_language() ) : array(),
				'zeroResults'            => __( '0  results for ', 'yith-woocommerce-ajax-search' ),
				'fuzzyResults'           => __( 'Results for ', 'yith-woocommerce-ajax-search' ),
			)
		);
	}

	/**
	 * Get the dependencies for the frontend scripts
	 *
	 * @param string $script_name Script filename.
	 * @param string $key Internal param.
	 *
	 * @return array
	 */
	protected function get_script_dependencies( $script_name, $key ) {
		$asset_file = include YITH_WCAS_DIR . "assets/js/blocks/build/{$script_name}.asset.php";

		$asset_file['dependencies'][] = 'accounting';

		return $asset_file[ $key ] ?? false;
	}


	/**
	 * Get the editor style handle for this block type.
	 *
	 * @return string|null
	 * @see $this->register_block()
	 */
	protected function get_block_editor_style() {
		wp_register_style( 'ywcas-editor-blocks', YITH_WCAS_ASSETS_URL . '/js/blocks/build/editor/editor-style.css', array(), $this->get_script_dependencies( 'editor/editor-scripts', 'version' ) );

		return 'ywcas-editor-blocks';
	}

	/**
	 * Get the frontend style handle for this block type.
	 *
	 * @return string|null
	 */
	protected function get_block_style() {
		$deps = array();
		if ( defined( 'YITH_PROTEO_VERSION' ) ) {
			wp_register_style( 'ywcas-yith-proteo', YITH_WCAS_ASSETS_URL . '/css/yith-proteo.css', array(), YITH_WCAS_VERSION );
			$deps = array( 'ywcas-yith-proteo' );
		}
		wp_register_style( 'ywcas-blocks', YITH_WCAS_ASSETS_URL . '/css/frontend.css', $deps, YITH_WCAS_VERSION );

		return 'ywcas-blocks';
	}

	/**
	 * Registers the block type with WordPress.
	 *
	 * @return string[] Chunks paths.
	 */
	protected function register_block() {
		$block_settings = array(
			'render_callback' => $this->get_block_render_callback(),
			'editor_script'   => $this->get_block_editor_script( 'handle' ),
			'editor_style'    => $this->get_block_editor_style(),
			'style'           => $this->get_block_style(),
		);

		$inner_blocks = array( 'filled-block', 'empty-block', 'input-block', 'popular-block', 'history-block' );
		if ( in_array( $this->block_name, $inner_blocks, true ) ) {
			$metadata_path = YITH_WCAS_BLOCK_PATH . 'search-block/inner-blocks/' . $this->block_name;
			if ( file_exists( $metadata_path ) ) {
				register_block_type_from_metadata(
					$metadata_path,
					$block_settings
				);
			}
		}

		/*
		 * Insert attributes and supports if we're not registering the block using metadata.
		 * These are left unset until now and only added here because if they were set when registering with metadata,
		 * the attributes and supports from $block_settings would override the values from metadata.
		 */
		$block_settings['attributes']   = $this->get_block_attributes();
		$block_settings['supports']     = $this->get_block_supports();
		$block_settings['uses_context'] = $this->get_block_uses_context();

		register_block_type(
			$this->get_block(),
			$block_settings
		);
	}

	/**
	 * Get the supports array for this block type.
	 *
	 * @return array;
	 * @see $this->register_block()
	 */
	protected function get_block_supports() {
		return array();
	}

	/**
	 * Get block attributes.
	 *
	 * @return array;
	 */
	protected function get_block_attributes() {
		return array();
	}

	/**
	 * Get block usesContext.
	 *
	 * @return array;
	 */
	protected function get_block_uses_context() {
		return array();
	}

	/**
	 * Get the block type.
	 *
	 * @return string
	 */
	protected function get_block() {
		return $this->namespace . '/' . $this->block_name;
	}

	/**
	 * Render the block. Extended by children.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 *
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {
		return $content;
	}

	/**
	 * Register/enqueue scripts used for this block on the frontend, during render.
	 *
	 * @return void
	 */
	protected function enqueue_scripts() {
		if ( null !== $this->get_block_script() ) {
			wp_enqueue_style( 'ywcas-frontend' );
			wp_enqueue_script( $this->get_block_script( 'handle' ) );

		}
	}

	/**
	 * Enqueue frontend assets for this block, just in time for rendering.
	 *
	 * @internal This prevents the block script being enqueued on all pages. It is only enqueued as needed. Note that
	 *           we intentionally do not pass 'script' to register_block_type.
	 */
	protected function enqueue_assets() {

		if ( $this->enqueued_assets ) {
			return;
		}

		$this->enqueue_scripts();
		$this->enqueued_assets = true;
	}

	/**
	 * The default render_callback for all blocks. This will ensure assets are enqueued just in time, then render
	 * the block (if applicable).
	 *
	 * @param array|WP_Block $attributes Block attributes, or an instance of a WP_Block. Defaults to an empty array.
	 * @param string         $content Block content. Default empty string.
	 * @param WP_Block|null  $block Block instance.
	 *
	 * @return string Rendered block type output.
	 */
	public function render_callback( $attributes = array(), $content = '', $block = null ) {
		if ( ! is_admin() && ! WC()->is_rest_api_request() ) {
			$this->enqueue_assets();
		}

		return $this->render( $attributes, $content, $block );
	}

	/** -------------------------------------------------------
	 * Public Static Getters - to get specific settings
	 */

	/**
	 * Get WC data
	 *
	 * @return array
	 */
	public static function get_wc_data() {
		$currency_code = get_woocommerce_currency();

		return array(
			'currency'             => array(
				'code'         => $currency_code,
				'decimals'     => wc_get_price_decimals(),
				'symbol'       => html_entity_decode( get_woocommerce_currency_symbol( $currency_code ) ),
				'decimal_sep'  => esc_attr( wc_get_price_decimal_separator() ),
				'thousand_sep' => esc_attr( wc_get_price_thousand_separator() ),
				'format'       => html_entity_decode( str_replace( array( '%1$s', '%2$s' ), array(
					'%s',
					'%v'
				), get_woocommerce_price_format() ) ), // For accounting JS.
			),
			'placeholderImageSrc'  => wc_placeholder_img_src(),
			'discountRoundingMode' => defined( 'WC_DISCOUNT_ROUNDING_MODE' ) && PHP_ROUND_HALF_UP === WC_DISCOUNT_ROUNDING_MODE ? 'half-up' : 'half-down',
		);
	}
}
