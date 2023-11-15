<?php
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly to prevent direct access to the file.
}

class KS_TinyMCE_Customizations {

    /**
     * @var array Default TinyMCE editor toolbar items.
     */
    private $default_styles_items = [
        'bold', 'link', 'bullist', 'numlist', 'aligncenter', 'alignleft', 'justifyfull',
        'removeformat', 'styleselect', 'tiny_mc_shortcodes_dropdown'
    ];

    /**
     * KS_TinyMCE_Customizations constructor.
     *
     * Hooks into various WordPress actions and filters related to TinyMCE.
     */
    public function __construct() {
        // WordPress hooks
        add_action( 'admin_init', [$this, 'enqueue_custom_editor_style'] ); // Enqueue custom editor style
        add_action( 'init', [$this, 'check_and_unset_style_select'] ); // Check and remove 'styleselect' button if not needed
        add_filter( 'mce_external_plugins', [$this, 'load_tiny_mc_shortcodes_plugin'] ); // Load TinyMCE custom plugins
        add_filter( 'mce_buttons', [$this, 'register_tiny_mc_shortcodes_dropdown'] ); // Register custom dropdown in TinyMCE
        add_filter( 'mce_buttons', [$this, 'add_styles_select_button'] ); // Add 'styleselect' button conditionally
        add_filter( 'tiny_mce_before_init', [$this, 'apply_custom_style_formats'] ); // Apply custom style formats
        add_filter( 'tiny_mce_before_init', [$this, 'apply_custom_css_to_tinymce'] ); // Apply custom CSS to TinyMCE
        add_filter( 'acf/fields/wysiwyg/toolbars', [$this, 'customize_toolbars'] ); // Customize ACF WYSIWYG toolbars
    }

    /**
     * Enqueues custom editor styles if the stylesheet exists.
     */
    public function enqueue_custom_editor_style() {
        $css_file_path = get_stylesheet_directory() . '/tinymce.css';
        if ( file_exists( $css_file_path ) ) {
            add_editor_style( get_stylesheet_directory_uri() . '/tinymce.css' );
        }
    }

    /**
     * Apply custom CSS to TinyMCE editor.
     *
     * @param array $mce_init The existing TinyMCE config array.
     * @return array Modified TinyMCE config array.
     */
    public function apply_custom_css_to_tinymce( $mce_init ) {
        // Custom CSS file path
        $content_css = get_stylesheet_directory_uri() . '/tinymce.css';

        // Check if the custom CSS file exists
        if ( file_exists( get_stylesheet_directory() . '/tinymce.css' ) ) {
            // Update TinyMCE config
            if ( isset( $mce_init['content_css'] ) ) {
                $content_css_new = $mce_init['content_css'] . ',' . $content_css;
            } else {
                $content_css_new = $content_css;
            }
            $mce_init['content_css'] = $content_css_new;
        }
        return $mce_init;
    }

    /**
     * Removes 'styleselect' from default toolbar items if there are no custom styles.
     */
    public function check_and_unset_style_select() {
        $style_formats = apply_filters( '_ks_tinymce_style_formats', [] );
        if ( empty( $style_formats ) ) {
            $key = array_search( 'styleselect', $this->default_styles_items );
            if ( false !== $key ) {
                unset( $this->default_styles_items[$key] );
            }
        }
    }

    /**
     * Load custom TinyMCE plugins if their files exist.
     *
     * @param array $plugin_array The existing TinyMCE plugins array.
     * @return array Modified TinyMCE plugins array.
     */
    public function load_tiny_mc_shortcodes_plugin( $plugin_array ) {
        $parent_tiny_mc_path = get_template_directory() . '/assets/js/tinymce.js';
        $child_tiny_mc_path = get_stylesheet_directory() . '/assets/js/tinymce.js';

        // Check if parent theme tinymce.js exists
        if ( file_exists( $parent_tiny_mc_path ) ) {
            $plugin_array['tiny_mc_shortcodes'] = get_template_directory_uri() . '/assets/js/tinymce.js';
        }

        // Check if child theme tinymce.js exists
        if ( file_exists( $child_tiny_mc_path ) ) {
            $plugin_array['child_tiny_mc_shortcodes'] = get_stylesheet_directory_uri() . '/assets/js/tinymce.js';
        }

        return $plugin_array;
    }

    /**
     * Registers the custom TinyMCE dropdown.
     *
     * @param array $buttons The existing TinyMCE buttons array.
     * @return array Modified TinyMCE buttons array.
     */
    public function register_tiny_mc_shortcodes_dropdown( $buttons ) {
        array_push( $buttons, 'tiny_mc_shortcodes_dropdown' );
        return $buttons;
    }

    /**
     * Adds 'styleselect' button to TinyMCE if custom styles are available.
     *
     * @param array $buttons The existing TinyMCE buttons array.
     * @return array Modified TinyMCE buttons array.
     */
    public function add_styles_select_button( $buttons ) {
        $style_formats = apply_filters( '_ks_tinymce_style_formats', [] );
        if (  !  empty( $style_formats ) ) {
            array_push( $buttons, 'styleselect' );
        }
        return $buttons;
    }

    /**
     * Apply custom style formats to TinyMCE.
     *
     * @param array $settings The existing TinyMCE settings array.
     * @return array Modified TinyMCE settings array.
     */
    public function apply_custom_style_formats( $settings ) {
        $style_formats = apply_filters( '_ks_tinymce_style_formats', [] );
        if (  !  empty( $style_formats ) ) {
            $settings['style_formats'] = json_encode( $style_formats );
        }
        return $settings;
    }

    /**
     * Customize the toolbars for the ACF WYSIWYG field.
     *
     * @param array $toolbars The existing ACF WYSIWYG toolbars array.
     * @return array Modified ACF WYSIWYG toolbars array.
     */
    public function customize_toolbars( $toolbars ) {
        $toolbars['Default Toolbar'] = [];
        $toolbars['Default Toolbar'][1] = apply_filters( '_ks_tinymce_default_toolbar_items', $this->default_styles_items );
        return $toolbars;
    }
}

// Initialize the customizations
new KS_TinyMCE_Customizations();