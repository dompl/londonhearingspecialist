<?php
// Exit if accessed directly

/**
 * Add async load to the scripts.
 * @param string $url the URL of the script
 * @return string modified URL of the script
 */

add_filter( 'clean_url', function ( $url ) {
    if ( strpos( $url, '#asyncload' ) === false ) {
        return $url;
    } else if ( is_admin() ) {
        return str_replace( '#asyncload', '', $url );
    } else {
        return str_replace( '#asyncload', '', $url ) . "' async='async";
    }
}, 12, 1 );

add_action( 'wp_enqueue_scripts', function () {

    $post_id = 0;
    $post_title = '';
    $post_url = '';

    // Handle different types of pages
    if ( is_singular() ) {
        $post_id = get_the_ID();
        $post_title = get_the_title( $post_id );
        $post_url = get_permalink( $post_id );
    } elseif ( is_archive() ) {
        $post_title = "Archive Page";
        $post_url = get_post_type_archive_link( get_post_type() );
    } elseif ( is_search() ) {
        $post_title = "Search Page";
        $post_url = get_search_link();
    } elseif ( is_404() ) {
        $post_title = "404 Error Page";
        $post_url = $_SERVER['REQUEST_URI'];
    } elseif ( is_tax() || is_category() || is_tag() ) {
        $term = get_queried_object();
        $post_title = $term->name;
        $post_url = get_term_link( $term );
    }
    // Prepare script localization
    $local_localizes = [
        'ks' => [
            'ajax_url' => admin_url( 'admin-ajax.php', isset( $_SERVER['HTTPS'] ) ? 'https://' : 'http://' ),
            'theme_url' => get_stylesheet_directory_uri(),
            'theme_dir' => get_stylesheet_directory(),
            'require' => apply_filters( '_ks_localize_require', [] ),
            'post_id' => $post_id,
            'post_title' => $post_title,
            'post_url' => $post_url,
            'nonce' => is_user_logged_in() ? wp_create_nonce( 'ks_admin_nonce' ) : wp_create_nonce( 'ks_user_nonce' ),
            'recaptcha' => false,
        ]
    ];

    // Define the scripts to be loaded
    $scripts = [
        'bundle' => [
            'deps' => ['jquery'],
            'in_footer' => true,
            'async' => true,
            'condition' => true,
            'localize' => apply_filters( '_ks_scripts_localize_filter_main', $local_localizes )
        ]
    ];

    // Allow modification of the scripts list
    $scripts_list = apply_filters( '_ks_js_scripts', $scripts );

    // If no scripts are registered, exit
    if ( empty( $scripts_list ) ) {
        return;
    }

    // Load each of the scripts
    foreach ( $scripts_list as $key => $scripts ) {

        $async = $scripts['async'] === true ? '#asyncload' : '';
        $handle = $key === 'jquery' ? $key : 'ks-' . $key;

        if ( $scripts['condition'] ) {

            wp_enqueue_script( $handle, get_template_directory_uri() . '/assets/js/' . $key . '.js' . $async, $scripts['deps'], THEME_VERSION . 'cache=' . CACHE_BUSTER, $scripts['in_footer'] );

            // If localization is enabled, add it
            if ( $scripts['localize'] !== false && is_array( $scripts['localize'] ) ) {
                foreach ( $scripts['localize'] as $variable => $value ) {
                    wp_localize_script( $handle, $variable, [$value] );
                }
            }
        }
    }

} );

// Disable jQuery Migrate for non-admin pages
add_action( 'wp_default_scripts', function ( $scripts ) {
    if (  !  is_admin() && isset( $scripts->registered['jquery'] ) ) {
        $script = $scripts->registered['jquery'];
        if ( $script->deps ) {
            $script->deps = array_diff( $script->deps, ['jquery-migrate'] );
        }
    }
} );

// Register admin scripts
add_action( 'admin_enqueue_scripts', function () {

    global $pagenow;

    $version = \Kickstarter\MyHelpers::themeVersion();

    $parent_theme_admin_js_path = get_template_directory() . '/assets/js/admin.js';
    $child_theme_admin_js_path = get_stylesheet_directory() . '/assets/js/admin.js';

    if ( file_exists( $parent_theme_admin_js_path ) ) {
        wp_enqueue_script( 'ks-admin', get_template_directory_uri() . '/assets/js/admin.js', [], $version, true );
    }

    if ( file_exists( $child_theme_admin_js_path ) ) {
        wp_enqueue_script( 'ks-admin-child', get_stylesheet_directory_uri() . '/assets/js/admin.js', [], $version, true );
    }

    $localizes['KsAdmin'] =
        [
        'nonce' => wp_create_nonce( 'ks_admin_nonce' ),
        'ajax_url' => admin_url( 'admin-ajax.php', isset( $_SERVER['HTTPS'] ) ? 'https://' : 'http://' ),
        'theme_uri' => get_template_directory(),
        'stylesheet_uri' => get_stylesheet_directory()
    ];

    if ( 'post.php' === $pagenow && isset( $_GET['post'] ) ) {
        $localizes['KsAdmin']['post_type'] = get_post_type( $_GET['post'] );
        $localizes['KsAdmin']['post_id'] = (int) $_GET['post'];
    }

    $nonces = apply_filters( 'ks_admin_localize', $localizes );

    foreach ( $nonces as $variable => $value ) {
        wp_localize_script( 'ks-admin', $variable, $value );
    }
}, 10 );