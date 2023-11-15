<?php
if ( defined( 'WP_CLI' ) && WP_CLI ) {

    /**
     * Force update the "redfrogstudio" theme and flush the cache.
     *
     * ## EXAMPLES
     *
     *     wp rfs-update
     *
     */
    function redfrogstudio_force_update( $args, $assoc_args ) {
        // Flush the cache
        delete_transient( 'ks_theme_update_data' );
        wp_cache_flush();
        // Get the theme update data
        $theme = 'redfrogstudio';
        $current = get_site_transient( 'update_themes' );

        if ( isset( $current->response[$theme] ) ) {

            $theme_data = $current->response[$theme];

            // Update the theme
            require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
            $upgrader = new Theme_Upgrader();
            $result = $upgrader->upgrade( $theme );

            if ( is_wp_error( $result ) ) {
                WP_CLI::error( "Failed to update the theme: " . $result->get_error_message() );
            } else {
                // Get the list of all theme folders
                $all_themes = glob( get_theme_root() . '/redfrogstudio*' );
                // Find the newly created folder
                $new_folder = '';
                foreach ( $all_themes as $theme_folder ) {
                    if ( strpos( $theme_folder, 'redfrogstudio' ) !== false && $theme_folder !== get_theme_root() . '/redfrogstudio' ) {
                        $new_folder = $theme_folder;
                        break;
                    }
                }

                // Rename the folder back to 'redfrogstudio'
                if ( $new_folder ) {
                    $original_folder = get_theme_root() . '/redfrogstudio';
                    if ( rename( $new_folder, $original_folder ) ) {
                        WP_CLI::success( "Successfully updated and renamed the redfrogstudio theme." );
                    } else {
                        WP_CLI::warning( "Successfully updated the theme, but failed to rename the folder." );
                    }
                } else {
                    WP_CLI::warning( "Successfully updated the theme, but could not find the new folder to rename." );
                }
            }
        } else {
            WP_CLI::warning( "The redfrogstudio theme is up to date." );
        }
    }

    WP_CLI::add_command( 'rfs-update', 'redfrogstudio_force_update' );
}