#!/usr/bin/env php
<?php
/**
 * A WP-CLI command to remove all revisions including those from custom post types.
 */

if ( defined( 'WP_CLI' ) && WP_CLI ) {

    WP_CLI::add_command( 'revision-clean', function () {

        // Get all public post types including custom ones
        $post_types = get_post_types( array( 'public' => true ) );

        // Remove 'revision' from the list
        unset( $post_types['revision'] );

        foreach ( $post_types as $post_type ) {
            // Count the number of revisions for the post type
            $revisions_count = count( get_posts( array( 'post_type' => 'revision', 'post_status' => 'inherit', 'post_parent' => null, 'fields' => 'ids', 'posts_per_page' => -1 ) ) );

            if ( $revisions_count > 0 ) {
                // If there are revisions, delete them
                $deleted = wp_delete_post_revision( null );
                WP_CLI::success( "Deleted {$deleted} revisions for post type '{$post_type}'." );
            } else {
                WP_CLI::line( "No revisions found for post type '{$post_type}'." );
            }
        }
    } );
}