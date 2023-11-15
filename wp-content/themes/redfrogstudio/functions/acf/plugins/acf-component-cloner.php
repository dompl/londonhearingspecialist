<?php
/**
 * Plugin Name: Content Component Cloner
 * Description: This plugin provides a function to clone Advanced Custom Fields (ACF) flex layout from one page to another in WordPress.
 * Author: Your Name
 * Version: 1.0.0
 */

// Exit if accessed directly to prevent unwanted behavior
if (  !  defined( 'ABSPATH' ) ) {
    exit;
}

// Import the Select field from Extended\ACF\Fields namespace
use Extended\ACF\Fields\Select;

// Hook our component fields filter with '_ks_components_fields' filter
add_filter( '_ks_fields_after_components', function ( $fields ) {
    // Grab the post id from the URL, if it exists
    $post_id = $_GET['post'] ?? null;

    // Get the current post's components
    $current_components = get_post_meta( $post_id, 'components', true );

    // If the current post has components, no need to proceed further. Return the existing fields.
    if (  !  empty( $current_components ) ) {
        return $fields;
    }

    // Prepare an empty array to store posts
    $posts = [];

    // Query all the posts
    $query = new WP_Query( [
        'posts_per_page' => -1,
        'post_type'      => apply_filters( '_ks_components_cloner_post_types', ['page'] )
    ] );

    if ( $query->have_posts() ):
        while ( $query->have_posts() ):
            $query->the_post();

            $id                 = get_the_ID();
            $current_components = get_post_meta( $id, 'components', true );

            // If the post is not the current post and it has components, add it to the posts array
            if ( $id != $post_id && !  empty( $current_components ) ) {
                $title      = the_title_attribute( 'echo=0' );
                $posts[$id] = $title ? $title : "Post {$id}";
            }

        endwhile;
    endif;

    wp_reset_postdata();

    // If we have posts with components, add the import field to ACF fields
    if (  !  empty( $posts ) ) {
        $fields[50] = Select::make( 'Import components', 'cloner' )
            ->instructions( 'You can clone the components from another page. Please note, any content created on this page will be deleted.' )
            ->choices( $posts )
            ->returnFormat( 'value' )
            ->allowNull();
    }

    // Return the modified fields
    return $fields;
} );

// Register our save post action with ACF's save_post action hook
add_action( 'acf/save_post', function ( $post_id ) {
    // Get the field object for 'cloner'
    $object = get_field_object( 'cloner', $post_id );

    // Check if $object is valid and is an array containing the 'key'
    if (  !  is_array( $object ) || !  isset( $object['key'] ) ) {
        return;
    }

    // Get the selected import page from the post data
    $import_page = isset( $_POST['acf'][$object['key']] ) ? $_POST['acf'][$object['key']] : null;

    if ( null === $import_page ) {
        return;
    }

    // Get the layouts value from the selected import page
    $layouts_from_page = get_field_object( 'components', $import_page, false, true );

    // If we have layouts from the import page, update this page's components
    if (  !  empty( $layouts_from_page['value'] ) ) {
        // Update the components field with the value from the imported page
        update_field( 'components', $layouts_from_page['value'], $post_id );

        // Delete the 'cloner' post meta as it is no longer needed
        delete_post_meta( $post_id, 'cloner' );
    }
} );
