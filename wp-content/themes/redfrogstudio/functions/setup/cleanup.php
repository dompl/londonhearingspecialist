<?php
/*  ********************************************************
 *   Remove Wordpress generated junk
 *  ********************************************************
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
/* Remove emojis */
add_filter( 'emoji_svg_url', '__return_false' ); // Remove emojis
/* Remove Wordpress junk */
add_action( 'init', 'ks_wp_cleanup' );
/* Remove oEmbed */
add_action( 'init', 'ks_deregister_oembed', PHP_INT_MAX - 1 );
/* Remove Gutenberg Block Library CSS from loading on the frontend */
add_action( 'wp_enqueue_scripts', 'ks_remove_wp_block_library_css', 100 );
/* Remove Post Tags */
add_action( 'init', 'ks_remove_post_tag' );
/* Remove Thumbnail dimensions */
add_filter( 'post_thumbnail_html', 'remove_thumbnail_dimensions', 10 );
/* Set content width */
add_action( 'after_setup_theme', 'content_width' );

function ks_deregister_oembed() {
    // Remove the REST API endpoint.
    remove_action( 'rest_api_init', 'wp_oembed_register_route' );

    // Turn off oEmbed auto discovery.
    // Don't filter oEmbed results.
    remove_filter( 'oembed_dataparse', 'wp_filter_oembed_result', 10 );

    // Remove oEmbed discovery links.
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );

    // Remove oEmbed-specific JavaScript from the front-end and back-end.
    remove_action( 'wp_head', 'wp_oembed_add_host_js' );
}

/* Clean up wordpress junk */
function ks_wp_cleanup() {

    /* Remove Wordpress Generated header meta */

    remove_action( 'wp_head', 'rsd_link' ); // remove really simple discovery link
    remove_action( 'wp_head', 'wp_generator' ); // remove wordpress version meta tag
    remove_action( 'wp_head', 'feed_links', 2 ); // remove rss feed links (make sure you add them in yourself if you're using feedblitz or an rss service)
    remove_action( 'wp_head', 'feed_links_extra', 3 ); // removes all extra rss feed links
    remove_action( 'wp_head', 'index_rel_link' ); // remove link to index page
    remove_action( 'wp_head', 'wlwmanifest_link' ); // remove wlwmanifest.xml (needed to support windows live writer)
    remove_action( 'wp_head', 'start_post_rel_link', 10 ); // remove random post link
    remove_action( 'wp_head', 'parent_post_rel_link', 10 ); // remove parent post link
    remove_action( 'wp_head', 'adjacent_posts_rel_link', 10 ); // remove the next and previous post links
    remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10 ); // remove the next and previous post links
    remove_action( 'wp_head', 'wp_shortlink_wp_head', 10 ); // remove wp shortlink

    /*  REMOVE EMOJIS: */
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 ); // Emoji Scripts and Styles
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' ); // Emoji Scripts and Styles
    remove_action( 'wp_print_styles', 'print_emoji_styles' ); // Emoji Scripts and Styles
    remove_action( 'admin_print_styles', 'print_emoji_styles' ); // Emoji Scripts and Styles

    /* REMOVE REST API */
    remove_action( 'wp_head', 'rest_output_link_wp_head', 10 ); // Remove the REST API lines from the HTML Header (api.w.org)
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links', 10 ); // Remove the REST API lines from the HTML Header (api.w.org)
    remove_action( 'rest_api_init', 'wp_oembed_register_route' ); // Remove the REST API endpoint.
    add_filter( 'xmlrpc_enabled', '__return_false' );

}

/**
 * Remove Query Strings: Many proxies and CDNs do not cache resources with a query string (like version numbers) even when the query string doesn’t change. Removing them can improve speed and cacheability.
 */

function remove_query_strings() {
    if (  !  is_admin() ) {
        add_filter( 'script_loader_src', 'remove_query_strings_split', 15 );
        add_filter( 'style_loader_src', 'remove_query_strings_split', 15 );
    }
}

/**
 * @param $src
 * @return mixed
 */
function remove_query_strings_split( $src ) {
    $output = preg_split( "/(&ver|\?ver)/", $src );
    return $output[0];
}

add_action( 'init', 'remove_query_strings' );
/**
 * Remove Thumbnail dimensions
 * @param $html
 * @return mixed
 */
function remove_thumbnail_dimensions( $html ) {
    $html = preg_replace( '/(width|height)=\"\d*\"\s/', '', $html );
    return $html;
}

/**
 * Set content width
 * @param $ks_content_width
 * @return mixed
 */
function content_width( $ks_content_width = ks_CONTENT_WIDTH ) {

    global $content_width;

    if (  !  isset( $content_width ) ) {
        $content_width = $ks_content_width;
    }

    return $content_width;
}
/**
 * Remove Gutenberg Block Library CSS from loading on the frontend
 * @return mixed
 */
//
function ks_remove_wp_block_library_css() {
    if (  !  USE_BLOCKS ) {
        wp_dequeue_style( 'wp-block-library' );
        wp_dequeue_style( 'wp-block-library-theme' );
        wp_dequeue_style( 'wc-block-style' ); // Remove WooCommerce block CSS
    }
}

/* Remove post tags */
function ks_remove_post_tag() {
    if ( defined( KS_DISABLE_POST_TAG ) && KS_DISABLE_POST_TAG === true ) {
        add_action( 'init', 'disable_tags_in_wordpress' );
    }
}

add_action( 'init', function () {
    // Disable support for comments and trackbacks in post types
    $post_types = get_post_types();
    foreach ( $post_types as $post_type ) {
        if ( post_type_supports( $post_type, 'comments' ) ) {
            remove_post_type_support( $post_type, 'comments' );
            remove_post_type_support( $post_type, 'trackbacks' );
        }
    }

    // Close comments on the front-end
    add_filter( 'comments_open', '__return_false', 20, 2 );
    add_filter( 'pings_open', '__return_false', 20, 2 );

    // Hide existing comments
    add_filter( 'comments_array', '__return_empty_array', 10, 2 );

    // Remove comments page in menu
    add_action( 'admin_menu', function () {
        remove_menu_page( 'edit-comments.php' );
    } );

    // Redirect any user trying to access comments page
    add_action( 'admin_init', function () {
        global $pagenow;

        if ( $pagenow === 'edit-comments.php' ) {
            wp_redirect( admin_url() );exit;
        }
    } );

    // Remove comments metabox from dashboard
    add_action( 'admin_init', function () {
        remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'normal' );
    } );

    // Disable support for comments and trackbacks in post types
    add_action( 'admin_init', function () {
        $post_types = get_post_types();
        foreach ( $post_types as $post_type ) {
            if ( post_type_supports( $post_type, 'comments' ) ) {
                remove_post_type_support( $post_type, 'comments' );
                remove_post_type_support( $post_type, 'trackbacks' );
            }
        }
    } );
    add_action( 'admin_head', function () {
        echo '<style>#adminmenu li[aria-hidden="true"] {display: none !important;}</style>';
    } );
} );