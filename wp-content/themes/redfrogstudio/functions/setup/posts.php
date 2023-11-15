<?php
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Conditionally remove Posts functionality from WordPress based on a custom filter.
 */
// Check if we should use Posts functionality or not
$use_posts = apply_filters( '_ks_use_posts', false );

/**
 * Remove Posts functionality from WordPress.
 *
 * 1. Remove the Posts menu item from the admin menu.
 * 2. Disable access to the edit.php (Posts listing) page in the admin.
 * 3. Redirect any direct access attempts to edit.php (Posts listing) to the dashboard.
 */

if (  !  $use_posts ) {
    function remove_posts_menu() {
        // Remove Posts from admin menu
        remove_menu_page( 'edit.php' );
    }
    add_action( 'admin_menu', 'remove_posts_menu' );

/**
 * Disable access to the 'Posts' screen and redirect to the dashboard.
 */
    function disable_posts_page() {
        global $pagenow;

        if ( $pagenow === 'edit.php' && (  !  isset( $_GET['post_type'] ) || $_GET['post_type'] == 'post' ) ) {
            wp_redirect( admin_url() );
            exit;
        }
    }

/**
 * Unregister the post type, to disable it completely.
 */
    function remove_posts_capabilities() {
        // Unregister the post post type
        unregister_post_type( 'post' );
    }
    add_action( 'init', 'remove_posts_capabilities' );

}