<?php
/**
 * Abstract_YITH_WCAS_Gb_InnerBlock class.
 *
 * @author  YITH
 * @package YITH/Builders/Gutenberg
 * @version 2.0
 */

/**
 * Abstract_YITH_WCAS_Gb_InnerBlock class.
 */
abstract class Abstract_YITH_WCAS_Gb_InnerBlock extends Abstract_YITH_WCAS_Gb_Block {
	/**
	 * Is this inner block lazy loaded? this helps us know if we should load its frontend script ot not.
	 *
	 * @var boolean
	 */
	protected $is_lazy_loaded = true;

	/**
	 * Registers the block type with WordPress using the metadata file.
	 *
	 * The registration using metadata is now recommended. And it's required for "Inner Blocks" to
	 * fix the issue of missing translations in the inspector (in the Editor mode)
	 */
	protected function register_block() {
		$block_settings = array(
			'render_callback' => $this->get_block_render_callback(),
			'editor_style'    => $this->get_block_editor_style(),
			'style'           => $this->get_block_style(),
		);

		if ( isset( $this->api_version ) && '2' === $this->api_version ) {
			$block_settings['api_version'] = 2;
		}

		$metadata_path = $this->get_block_metadata_path( $this->block_name, 'inner-blocks/' );

		// Prefer to register with metadata if the path is set in the block's class.
		register_block_type_from_metadata(
			$metadata_path,
			$block_settings
		);
	}

	/**
	 * Get the path to a block's metadata
	 *
	 * @param string $block_name The block to get metadata for.
	 * @param string $path Optional. The path to the metadata file inside the 'build' folder.
	 *
	 * @return string|boolean False if metadata file is not found for the block.
	 */
	public function get_block_metadata_path( $block_name, $path = '' ) {
		$path_to_metadata_from_plugin_root = YITH_WCAS_BUILD_BLOCK_PATH . 'search-block/' . $path . $block_name . '/block.json';

		if ( ! file_exists( $path_to_metadata_from_plugin_root ) ) {

			return false;
		}

		return $path_to_metadata_from_plugin_root;
	}

	/**
	 * For lazy loaded inner blocks, we don't want to enqueue the script but rather leave it for webpack to do that.
	 *
	 * @param string $key Data to get, or default to everything.
	 *
	 * @return array|string|null
	 * @see $this->register_block_type()
	 */
	protected function get_block_script( $key = null ) {

		if ( $this->is_lazy_loaded ) {
			return null;
		}

		return parent::get_block_script( $key );
	}

	/**
	 * Get the frontend style handle for this block type.
	 *
	 * @return null
	 */
	protected function get_block_style() {
		return null;
	}
}
