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
        'hierarchical'       => true,
        'menu_position'      => null,
        'supports'           => array( 'title', 'page-attributes' ), // Add 'page-attributes' to supports array
        'menu_icon' => 'dashicons-location-alt', // Optional: Set a dashicon for the post type
        'order' => 'ASC', // Optional: Set default order
        'orderby' => 'menu_order' // Optional: Set default orderby to 'menu_order' or another field
    );

    register_post_type( 'clinic_locations', $args );
}

add_action( 'init', 'create_location_post_type' );

add_filter( 'manage_edit-clinic_locations_sortable_columns', 'clinic_locations_sortable_columns' );
function clinic_locations_sortable_columns( $columns ) {
    $columns['menu_order'] = 'menu_order';
    return $columns;
}

add_action( 'pre_get_posts', 'clinic_locations_orderby' );
function clinic_locations_orderby( $query ) {
    if (  !  is_admin() ) {
        return;
    }

    $orderby = $query->get( 'orderby' );
    if ( 'menu_order' == $orderby ) {
        $query->set( 'orderby', 'menu_order' );
        $query->set( 'order', 'ASC' );
    }
}