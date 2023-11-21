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

function clinic_services_data() {
    // Check if the transient data is available and return it if present
    $services = get_transient( 'clinic_services_data' );

    if ( $services !== false ) {
        return $services;
    }

    // Define the query parameters for 'clinic_locations' post type
    $query = new WP_Query( array(
        'post_type'      => 'clinic_services',
        'posts_per_page' => -1, // Fetch all posts
        'post_status' => 'publish'
    ) );

    $services = array();

    // Loop through the posts and build the locations array
    if ( $query->have_posts() ) {

        while ( $query->have_posts() ) {

            $query->the_post();

            $post_id = get_the_ID();

            $services[$post_id] = array(
                'title'       => get_the_title(),
                'icon'        => get_post_meta( $post_id, 'service_icon', true ),
                'image'       => get_post_meta( $post_id, 'service_image', true ),
                'description' => get_post_meta( $post_id, 'service_description', true ),
                'link'        => get_post_meta( $post_id, 'service_link', true )
            );

        }

        // Reset the post data to the original query
        wp_reset_postdata();

        // Cache the locations data using a transient
        set_transient( 'clinic_services_data', $services, 30 * DAY_IN_SECONDS );
    }

    return $services;
}

/**
 * Flushes the 'clinic_services_data' transient when a 'clinic_locations' post is saved.
 *
 * This function is hooked to the 'save_post' action and deletes the transient data
 * so that the updated location data is fetched and stored on the next request.
 *
 * @param int     $post_id The ID of the post being saved.
 * @param WP_Post $post    The post object.
 * @param bool    $update  Whether this is an existing post being updated or not.
 */
function flush_clinic_services_transient( $post_id, $post, $update ) {
    // Only proceed if this is a 'clinic_locations' post type
    if ( 'clinic_services' !== $post->post_type ) {
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
    delete_transient( 'clinic_services_data' );

}

// Hook the function to the save_post action
add_action( 'save_post', 'flush_clinic_services_transient', 10, 3 );