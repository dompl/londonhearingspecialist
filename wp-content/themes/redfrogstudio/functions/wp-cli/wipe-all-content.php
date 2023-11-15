<?php

/**
 * WP_CLI_Wipe_Content - A WP-CLI command for wiping content from WordPress text areas.
 *
 * This class defines a WP-CLI command that allows you to wipe out content from the default text editor for all pages and post types,
 * as well as specific posts by ID.
 */
if ( defined( 'WP_CLI' ) && WP_CLI ) {
    class WP_CLI_Wipe_Content {

        /**
         * Wipes out all content from the default text editor for all pages and post types.
         *
         * This method iterates through all post types and sets the 'post_content' field to an empty string.
         *
         * ## EXAMPLES
         *
         *     wp wipe-content all
         *
         * @param array $args - Positional arguments passed to the command.
         * @param array $assoc_args - Associative arguments (flags) passed to the command.
         * @return void
         */
        public function all( $args, $assoc_args ) {
            // Fetch all post types.
            $post_types = get_post_types( [], 'names' );

            // Loop through all post types and empty the content.
            foreach ( $post_types as $post_type ) {
                $query = new WP_Query( [
                    'post_type'      => $post_type,
                    'posts_per_page' => -1
                ] );

                // Iterate through posts and update their content to be empty.
                while ( $query->have_posts() ) {
                    $query->the_post();
                    $post_id = get_the_ID();
                    wp_update_post( [
                        'ID'           => $post_id,
                        'post_content' => ''
                    ] );
                    WP_CLI::log( "Wiped content for post ID $post_id of type $post_type" );
                }
            }
            wp_reset_postdata();
            WP_CLI::success( 'All content wiped.' );
        }

        /**
         * Wipes out content for a specific post by its ID.
         *
         * This method takes a post ID and sets its 'post_content' field to an empty string.
         *
         * ## EXAMPLES
         *
         *     wp wipe-content by-id --id=42
         *
         * @param array $args - Positional arguments passed to the command.
         * @param array $assoc_args - Associative arguments (flags) passed to the command.
         * @return void
         */
        public function by_id( $args, $assoc_args ) {
            $post_id = $assoc_args['id'];

            if (  !  get_post( $post_id ) ) {
                WP_CLI::error( "Post with ID $post_id does not exist." );
                return;
            }

            wp_update_post( [
                'ID'           => $post_id,
                'post_content' => ''
            ] );

            WP_CLI::success( "Wiped content for post ID $post_id." );
        }
    }

    // Register the WP-CLI command.
    WP_CLI::add_command( 'wipe-content', 'WP_CLI_Wipe_Content' );
}