<?php

/**
 * Retrieves an array of clinic location data.
 *
 * This function checks if clinic location data is stored in a transient and returns it if available.
 * If not, it queries the 'clinic_locations' custom post type, collects relevant data, and stores it
 * in a transient for later use.
 *
 * @return array An associative array containing clinic location data.
 */

function clinic_locations_data() {
    // Check if the transient data is available and return it if present
    $locations = get_transient( 'clinic_locations_data' );

    if ( $locations !== false ) {
        return $locations;
    }

    // Define the query parameters for 'clinic_locations' post type
    $query = new WP_Query( array(
        'post_type'      => 'clinic_locations',
        'posts_per_page' => -1, // Fetch all posts
        'post_status' => 'publish'
    ) );

    $locations = array();

    // Loop through the posts and build the locations array
    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();

            $post_id = get_the_ID();

            $locations[$post_id] = array(
                'title'    => get_the_title(),
                'map'      => get_post_meta( $post_id, 'map', true ),
                'image'    => get_post_meta( $post_id, 'image', true ),
                'address'  => get_post_meta( $post_id, 'address', true ),
                'email'    => get_post_meta( $post_id, 'email', true ),
                'phone'    => get_post_meta( $post_id, 'phone', true ),
                'facebook' => get_post_meta( $post_id, 'facebook', true ),
                'twitter'  => get_post_meta( $post_id, 'twitter', true ),
                'addon'    => get_post_meta( $post_id, 'addon', true ),
                'dirs'     => []
            );
            $locations[$post_id]['dirs']['overground']  = get_post_meta( $post_id, 'dirs_overground', true );
            $locations[$post_id]['dirs']['underground'] = get_post_meta( $post_id, 'dirs_underground', true );
            $locations[$post_id]['dirs']['bus']         = get_post_meta( $post_id, 'dirs_bus', true );
            $locations[$post_id]['dirs']['train']       = get_post_meta( $post_id, 'dirs_train', true );
            $locations[$post_id]['dirs']['parking']     = get_post_meta( $post_id, 'dirs_parking', true );

            $locations[$post_id]['hours'] = array();

            $hours = get_post_meta( $post_id, 'hours', true );

            if (  !  empty( $hours ) ) {
                for ( $i = 0; $i < $hours; $i++ ) {
                    $locations[$post_id]['hours'][$i] = [
                        get_post_meta( $post_id, "hours_{$i}_d", true ),
                        get_post_meta( $post_id, "hours_{$i}_t", true )
                    ];
                }

            }
        }

        // Reset the post data to the original query
        wp_reset_postdata();

        // Cache the locations data using a transient
        set_transient( 'clinic_locations_data', $locations, 30 * DAY_IN_SECONDS );
    }

    return $locations;
}

/**
 * Flushes the 'clinic_locations_data' transient when a 'clinic_locations' post is saved.
 *
 * This function is hooked to the 'save_post' action and deletes the transient data
 * so that the updated location data is fetched and stored on the next request.
 *
 * @param int     $post_id The ID of the post being saved.
 * @param WP_Post $post    The post object.
 * @param bool    $update  Whether this is an existing post being updated or not.
 */
function flush_clinic_locations_transient( $post_id, $post, $update ) {
    // Only proceed if this is a 'clinic_locations' post type
    if ( 'clinic_locations' !== $post->post_type ) {
        return;
    }

    // Uncomment the following security checks if needed
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    if (  !  current_user_can( 'edit_post', $post_id ) ) {
        return;
    }

    // Delete the transient to ensure fresh data is loaded next time
    delete_transient( 'clinic_locations_data' );
}

// Hook the function to the save_post action
add_action( 'save_post', 'flush_clinic_locations_transient', 10, 3 );