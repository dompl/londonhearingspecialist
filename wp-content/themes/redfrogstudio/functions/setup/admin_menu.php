<?php
/**
 * Remove some pages from the admin menu
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_action( 'admin_menu', 'remove_menu_pages' );

function remove_menu_pages() {
    // Get the current user
    $current_user = wp_get_current_user();

    // Check if the user is an admin and their email is not info@redfrogstudio.co.uk
    if ( in_array( 'administrator', $current_user->roles ) && $current_user->user_email != 'info@redfrogstudio.co.uk' ) {
        // Remove menu items
        remove_submenu_page( 'themes.php', 'themes.php' ); // Themes

        // Remove Customize and Theme Editor
        remove_action( 'admin_menu', '_add_themes_utility_last', 101 );
        global $submenu;
        unset( $submenu['themes.php'][6] ); // Customize
        unset( $submenu['themes.php'][20] ); // Theme Editor
    }
}

add_action( 'load-themes.php', 'prevent_direct_access' );
add_action( 'load-customize.php', 'prevent_direct_access' );
add_action( 'load-theme-editor.php', 'prevent_direct_access' );

function prevent_direct_access() {
    // Get the current user
    $current_user = wp_get_current_user();

    // Check if the user is an admin and their email is not info@redfrogstudio.co.uk
    if ( in_array( 'administrator', $current_user->roles ) && $current_user->user_email != 'info@redfrogstudio.co.uk' ) {
        // Redirect them to the dashboard
        wp_redirect( admin_url() );
        exit;
    }
}