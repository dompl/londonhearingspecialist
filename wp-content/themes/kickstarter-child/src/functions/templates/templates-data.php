<?php

function london_template_data() {
    // Try to get the data from the transient first
    $template_data = get_transient( 'london_template_data' );

    // If the transient doesn't exist or is expired, regenerate the data
    if ( false === $template_data ) {

        $template_data = array();

        // Query for 'template' post type
        $args = array(
            'post_type'      => 'template',
            'posts_per_page' => -1, // Retrieve all posts
            'post_status' => 'publish'
        );
        $query = new WP_Query( $args );

        // Loop through the posts and store the ID and title
        if ( $query->have_posts() ) {
            while ( $query->have_posts() ) {
                $query->the_post();
                $id                 = get_the_ID();
                $template_data[$id] = get_the_title();
            }
            wp_reset_postdata();
        }

        // Save the data in a transient for 12 hours
        set_transient( 'london_template_data', $template_data, 1 * YEAR_IN_SECONDS );
    }

    return $template_data;
}

// Hook into post save to clear the transient when a 'template' post type is updated
function clear_london_template_data_transient( $post_id, $post, $update ) {

    // Only proceed if this is a 'template' post type
    if ( 'template' !== $post->post_type ) {
        return;
    }

    // Uncomment the following security checks if needed
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    if (  !  current_user_can( 'edit_post', $post_id ) ) {
        return;
    }

    delete_transient( 'london_template_data' );

}

add_action( 'save_post', 'clear_london_template_data_transient', 10, 3 );