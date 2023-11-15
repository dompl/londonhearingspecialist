<?php
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Hook into 'admin_init' to ensure the plugin is always active on the backend
add_action( 'admin_init', 'my_enforce_plugin_activation' );

// Hook into 'plugin_action_links' to remove the deactivate link for the plugin
add_filter( 'plugin_action_links', 'my_remove_deactivate_link', 10, 4 );

/**
 * Ensure the Advanced Custom Fields Pro plugin is activated when in the admin area
 */
function my_enforce_plugin_activation() {
    // Check if we are in the admin area
    if ( is_admin() ) {
        // Define the plugin's path
        $plugin_path = 'advanced-custom-fields-pro/acf.php';

        // Get the list of active plugins
        $active_plugins = get_option( 'active_plugins' );

        // Check if the plugin is not in the list of active plugins
        if (  !  in_array( $plugin_path, $active_plugins ) ) {
            // Activate the plugin
            activate_plugin( $plugin_path );
        }
    }
}

/**
 * Remove the 'deactivate' action link for the Advanced Custom Fields Pro plugin
 *
 * @param array $actions An array of plugin action links.
 * @param string $plugin_file Path to the plugin file relative to the plugins directory.
 * @param array $plugin_data An array of plugin data.
 * @param string $context The plugin context.
 *
 * @return array Modified array of plugin action links.
 */
function my_remove_deactivate_link( $actions, $plugin_file, $plugin_data, $context ) {
    // Check if we are in the admin area and the plugin matches
    if ( is_admin() && $plugin_file === 'advanced-custom-fields-pro/acf.php' ) {
        // Remove the 'deactivate' action link
        unset( $actions['deactivate'] );
    }
    return $actions;
}

// Your existing code to deactivate ACF on the frontend
// Hook into 'option_active_plugins' to conditionally deactivate the plugin on the frontend

add_filter( 'option_active_plugins', function ( $plugins ) {
    // Initialize an array for ACF plugin types
    $acf_types = array();

    // Check if we are not in the admin area
    if (  !  is_admin() ) {
        // Add ACF and ACF Pro to the array
        array_push( $acf_types,
            'advanced-custom-fields/acf.php', // ACF Free Version
            'advanced-custom-fields-pro/acf.php' // ACF Pro Version
        );
    }

    // Loop through the array and deactivate the plugin on the frontend
    foreach ( $acf_types as $plugin ) {
        // Search for the plugin in the list of active plugins
        $key = array_search( $plugin, $plugins );

        // If found, remove it from the array
        if ( false !== $key ) {
            unset( $plugins[$key] );
        }
    }

    // Return the modified list of active plugins
    return $plugins;
} );