<?php
/**
 * Registers a custom post type for clinic locations.
 *
 * This function sets up labels and arguments for the 'clinic_locations' post type
 * and registers it using `register_post_type()`.
 */
function create_location_post_type() {

    $labels = array(
        'name'               => _x( 'Locations', 'post type general name' ),
        'singular_name'      => _x( 'Location', 'post type singular name' ),
        'menu_name'          => _x( 'Locations', 'admin menu' ),
        'name_admin_bar'     => _x( 'Location', 'add new on admin bar' ),
        'add_new'            => _x( 'Add New Location', 'location' ),
        'add_new_item'       => __( 'Add New Location' ),
        'new_item'           => __( 'New Location' ),
        'edit_item'          => __( 'Edit Location' ),
        'view_item'          => __( 'View Location' ),
        'all_items'          => __( 'All Locations' ),
        'search_items'       => __( 'Search Locations' ),
        'parent_item_colon'  => __( 'Parent Locations:' ),
        'not_found'          => __( 'No locations found.' ),
        'not_found_in_trash' => __( 'No locations found in Trash.' )
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'location' ),
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title' )
    );

    register_post_type( 'clinic_locations', $args );
}

add_action( 'init', 'create_location_post_type' );