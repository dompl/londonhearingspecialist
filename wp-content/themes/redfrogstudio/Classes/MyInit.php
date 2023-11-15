<?php
namespace Kickstarter;
use Dotenv\Dotenv;
use Kickstarter\MyHelpers;

require_once __DIR__ . '/MyAcf/AcfContainerFlex.php';

class MyInit extends MyHelpers {

    use AcfContainerFlex;
    use MyHelpersImages;

    /**
     * @var mixed
     */
    private static $instance = null;

    /**
     * Flag indicating whether environment variables have been loaded.
     * @var bool
     */
    private static $envLoaded = false;

    /**
     * Flag indicating whether the class has been instantiated.
     * @var bool
     */
    private static $instantiated = false;

    /**
     * Constructor to initialize the class properties and actions.
     * Sets up various WordPress hooks and filters.
     */
    // can you check if i need t %instantiated in the __construct below
    public function __construct() {

        // Load environmental variables.
        self::loadEnvironmentalVariables();

        // Check if the class has already been instantiated.
        if ( self::$instantiated ) {
            return;
        }
        //   Initiate ACF Fields
        self::registerAcfContainerFlex();

        // Various WordPress hooks and filters.

        add_filter( 'admin_footer_text', ['\Kickstarter\MyInit', 'ThemeFooter'] );
        add_filter( 'after_setup_theme', ['\Kickstarter\MyInit', 'ThemeTranslationFolder'] );
        add_action( 'init', ['\Kickstarter\MyInit', 'MarkerIosetBugCookie'] );
        add_action( 'wp_head', ['\Kickstarter\MyInit', 'MarkerIooutputHtml'] );
        add_action( 'after_switch_theme', ['\Kickstarter\MyInit', 'createClickTrackerTable'] );
        add_action( 'wp_enqueue_scripts', ['\Kickstarter\MyInit', 'enqueueChildScriptsAndStyles'], 9999 );

        self::$instantiated = true;
    }

    public static function getInstance() {
        if ( self::$instance === null ) {
            self::$instance = new MyInit();
            MyAcf::getInstance(); // If you implement Singleton in MyAcf as well
            autoIncludeAndTrigger::getInstance(); // If you implement Singleton in autoIncludeAndTrigger as well
            TransientDataDeleter::getInstance(); // If you implement Singleton in TransientDataDeleter as well
        }
        return self::$instance;
    }

    /**
     * enqueueChildScriptsAndStyles - Enqueues child theme styles and scripts.
     *
     * This method dynamically enqueues styles and scripts for the child theme. It provides
     * cache-busting functionality for local development and allows for filtering the list of
     * styles and scripts to enqueue via WordPress filters.
     */
    public static function enqueueChildScriptsAndStyles() {

        $version = self::themeVersion();

        // List of styles to be enqueued.
        // Developers can filter this list using the '_ks_enqueue_child_styles' filter.
        $styles = apply_filters( '_ks_enqueue_child_styles', ['style.css', 'build.css', self::CustomCssFileName()] );

        // Loop through each stylesheet and enqueue it if it exists.
        foreach ( $styles as $style ) {
            $file_path = get_stylesheet_directory() . "/$style";

            if ( $style == self::CustomCssFileName() ) {
                $prefix = self::CustomCssFileNamePrefix() . str_replace( '.', '', $version );
                $data   = base64_encode( $prefix );
                $data   = str_replace( ['+', '/', '='], ['-', '_', ''], $data );
                $version .= '&' . $data;
            }

            $file_uri = get_stylesheet_directory_uri() . "/$style?v=$version";

            // Check if the stylesheet file exists.
            if ( file_exists( $file_path ) ) {
                $style = str_replace( ['.css', 'custom-'], '', $style );

                // Enqueue the stylesheet with dynamic versioning.
                wp_enqueue_style( "css-$style-child", esc_url_raw( $file_uri ), array(), $version );
            }
        }

        // Define the list of script files to be enqueued.
        // Developers can filter this list using the '_ks_enqueue_child_scripts' filter.
        $scripts = apply_filters( '_ks_enqueue_child_scripts', ['bundle.js'] );

        foreach ( $scripts as $script ) {
            $script_path = get_stylesheet_directory() . '/assets/js/' . $script;

            // Check if the JavaScript bundle file exists.
            if ( file_exists( $script_path ) ) {
                // Enqueue the JavaScript bundle with dynamic versioning.
                wp_enqueue_script( 'ks-bundle-child', get_stylesheet_directory_uri() . '/assets/js/' . $script, array( 'jquery' ), $version, true );
            }
        }
    }

    /**
     * Check if the ClickUp API environment file is accessible.
     *
     * @return bool True if the file exists and is readable, false otherwise.
     */
    public static function isGlobalVariables() {

        $path = '/etc/shared-env'; // /Users/dom
        $file = "{$path}/.env";
        if ( file_exists( $file ) && is_readable( $file ) ) {
            return $path;
        } else {
            if (  !  file_exists( $file ) ) {
                error_log( "File .env does not exist in the specified path: $path" );
            } else {
                error_log( "File .env is not readable in the specified path: $path" );
            }
            return false;
        }
    }

    /**
     * Load the environment variables required for ClickUp API.
     *
     * @return bool True if environment variables are loaded successfully, false otherwise.
     */
    private static function loadEnvironmentalVariables() {

        if ( self::$envLoaded ) {
            return true;
        }

        if ( self::isGlobalVariables() ) {
            $dotenv = Dotenv::createImmutable( self::isGlobalVariables() ); // Create a new Dotenv object with the directory
            $dotenv->load();
            self::$envLoaded = true;
            return true;
        } else {
            error_log( "Environmental variables not set" );
            return false;
        }
        self::$envLoaded = true;
    }

    public static function createClickTrackerTable() {
        // Change private to public
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();
        $table_name      = $wpdb->prefix . 'ks_click_tracker';

        $sql = "CREATE TABLE $table_name (
			 id mediumint(9) NOT NULL AUTO_INCREMENT,
			 time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
			 ip_address varchar(55) DEFAULT '' NULL,
			 click_id varchar(255) DEFAULT '' NOT NULL,
			 post_title varchar(255) DEFAULT '' NULL,
			 post_url varchar(255) DEFAULT '' NULL,
			 link_text varchar(255) DEFAULT '' NULL,
			 target_url varchar(255) DEFAULT '' NULL,
			 post_id mediumint(9) DEFAULT 0 NULL,
			 PRIMARY KEY  (id)
		) $charset_collate;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta( $sql );
    }

    public static function MarkerIosetBugCookie() {

        if ( self::getThemeData( 'ks_marker_io' ) && isset( $_GET['bug'] ) && !  isset( $_COOKIE['bug'] ) ) {
            setcookie( 'bug', 1, time() + ( 86400 * 30 ), '/' ); // Expires in 30 days
        }
    }

    public static function MarkerIooutputHtml() {

        if ( self::getThemeData( 'ks_marker_io' ) && isset( $_COOKIE['bug'] ) || isset( $_GET['bug'] ) ) {
            $html = '<script>window.markerConfig = {project: \'' . self::getThemeData( 'ks_marker_io' ) . '\',source: \'snippet\'};</script>';
            $html .= '<script>!function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);</script>';
            echo $html;
        }
    }

    public static function ThemeTranslationFolder() {
        load_theme_textdomain( 'kickstarter', get_template_directory() . '/languages' );
    }

    public static function ThemeFooter() {
        $theme_footer_test = 'Red Frog Studio theme version: <strong>' . wp_get_theme()->get( 'Version' ) . '</strong> Contact website developer <a href="mailto:info@redfrogstudio.co.uk" target="_blank" rel="noopener noreferrer">here</a>.';
        return apply_filters( '_ks_theme_footer_text', $theme_footer_test, wp_get_theme()->get( 'Version' ) );
    }

}