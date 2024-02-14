<?php
/**
 * YITH_WCAS_Gutenberg_Blocks_Controller is class to initialize Gutenberg blocks
 *
 * @author  YITH
 * @package YITH/Builders/Gutenberg
 * @version 2.0
 */

defined( 'ABSPATH' ) || exit;


if ( ! class_exists( 'YITH_WCAS_Gutenberg_Blocks_Controller' ) ) {
	/**
	 * Class YITH_WCAS_Gutenberg
	 */
	class YITH_WCAS_Gutenberg_Blocks_Controller {

		use YITH_WCAS_Trait_Singleton;

		/**
		 * Constructor.
		 */
		private function __construct() {
			$this->init();

		}

		/**
		 * Initialize class features.
		 */
		protected function init() {
			add_action( 'init', array( $this, 'register_blocks' ) );
			add_filter( 'render_block', array( $this, 'add_data_attributes' ), 10, 2 );
			add_filter( 'block_categories_all', array( $this, 'block_category' ), 100, 2 );
			add_filter( 'pre_load_script_translations', array( $this, 'script_translations' ), 10, 4 );
		}

		/**
		 * Register blocks, hooking up assets and render functions as needed.
		 */
		public function register_blocks() {
			$blocks = $this->get_blocks();

			foreach ( $blocks as $block ) {
				$block_class = 'YITH_WCAS_Gb_' . $block;
				if ( class_exists( $block_class ) ) {
					new $block_class();
				}
			}

		}

		/**
		 * Return the list of blocks that should be registered
		 *
		 * @return array
		 */
		public function get_blocks() {
			return array(
				'Input_Block',
				'Search_Block',
				'Filled_Block',
				'Empty_Block',
				'Popular_Block',
				'History_Block',
				'Product_Results_Block',
				'Related_Categories_Block',
				'Related_Posts_Block',
			);
		}

		/**
		 * Add block category
		 *
		 * @param array $categories Array block categories array.
		 * @param WP_Post $post Current post.
		 *
		 * @return array block categories
		 */
		public function block_category( $categories, $post ) {

			$found_key = array_search( 'yith-blocks', array_column( $categories, 'slug' ), true );

			if ( ! $found_key ) {
				$categories[] = array(
					'slug'  => 'yith-blocks',
					'title' => _x( 'YITH', 'Author of the plugin/theme', 'yith-plugin-fw' ),
				);
			}

			return $categories;
		}

		/**
		 * Add data-attributes to blocks when rendered if the block is under the woocommerce/ namespace.
		 *
		 * @param string $content Block content.
		 * @param array $block Parsed block data.
		 *
		 * @return string
		 */
		public function add_data_attributes( $content, $block ) {
			$block_name      = $block['blockName'];
			$block_namespace = strtok( $block_name ?? '', '/' );
			/**
			 * Filters the list of allowed block namespaces.
			 *
			 * This hook defines which block namespaces should have block name and attribute `data-` attributes appended on render.
			 *
			 * @param array $allowed_namespaces List of namespaces.
			 *
			 * @since 5.9.0
			 *
			 */
			$allowed_namespaces = array_merge( array( 'yith' ), (array) apply_filters( '__experimental_yith_ajax_search_blocks_add_data_attributes_to_namespace', array() ) );

			/**
			 * Filters the list of allowed Block Names
			 *
			 * This hook defines which block names should have block name and attribute data- attributes appended on render.
			 *
			 * @param array $allowed_namespaces List of namespaces.
			 *
			 * @since 5.9.0
			 *
			 */
			$allowed_blocks = (array) apply_filters( '__experimental_yith_ajax_search_blocks_blocks_add_data_attributes_to_block', array() );

			if ( ! in_array( $block_namespace, $allowed_namespaces, true ) && ! in_array( $block_name, $allowed_blocks, true ) ) {
				return $content;
			}

			$attributes              = (array) apply_filters( 'ywcas_block_data_attributes', $block['attrs'], $block );
			$exclude_attributes      = array( 'className', 'align' );
			$escaped_data_attributes = array(
				'data-block-name="' . esc_attr( $block['blockName'] ) . '"',
			);

			foreach ( $attributes as $key => $value ) {
				if ( in_array( $key, $exclude_attributes, true ) ) {
					continue;
				}
				if ( is_bool( $value ) ) {
					$value = $value ? 'true' : 'false';
				}
				if ( ! is_scalar( $value ) ) {
					$value = wp_json_encode( $value );
				}
				$escaped_data_attributes[] = 'data-' . esc_attr( strtolower( preg_replace( '/(?<!\ )[A-Z]/', '-$0', $key ) ) ) . '="' . esc_attr( $value ) . '"';
			}

			return preg_replace( '/^<div /', '<div ' . implode( ' ', $escaped_data_attributes ) . ' ', trim( $content ) );
		}

		/**
		 * Create the json translation through the PHP file.
		 * So, it's possible using normal translations (with PO files) also for JS translations
		 *
		 * @param string|null $json_translations Translations.
		 * @param string $file The file.
		 * @param string $handle The handle.
		 * @param string $domain The text-domain.
		 *
		 * @return string|null
		 */
		public function script_translations( $json_translations, $file, $handle, $domain ) {
			if ( 'yith-woocommerce-ajax-search' === $domain ) {
				if ( 'ywcas-results-editor-script' === $handle ) {
					$path = trailingslashit( YITH_WCAS_DIR . 'languages/' ) . 'js-i18n.php';
					if ( file_exists( $path ) ) {
						$translations = include $path;

						$json_translations = wp_json_encode(
							array(
								'domain'      => 'yith-woocommerce-ajax-search',
								'locale_data' => array(
									'messages' =>
										array(
											'' => array(
												'domain'       => 'yith-woocommerce-ajax-search',
												'lang'         => get_locale(),
												'plural-forms' => 'nplurals=2; plural=(n != 1);',
											),
										)
										+
										$translations,
								),
							)
						);

					}
				}
			}

			return $json_translations;
		}
	}
}
