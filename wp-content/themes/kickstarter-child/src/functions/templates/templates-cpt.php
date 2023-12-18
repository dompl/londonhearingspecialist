<?php
function register_templates_post_type() {
    $args = array(
        'labels'            => array(
            'name'          => 'Templates',
            'singular_name' => 'Template'
        ),
        'public'            => false, // It's not visible to the public (not queryable or searchable)
        'publicly_queryable' => false, // It's not publicly queryable
        'show_ui'         => true, // It will show in the admin interface
        'show_in_menu' => true,
        'show_in_nav_menus' => false, // It won't be available for selection in navigation menus
        'show_in_admin_bar'  => true, // It won't appear in the admin bar
        'capability_type' => 'post',
        'hierarchical'      => false,
        'supports'          => array( 'title', 'editor', 'author' ),
        'has_archive'       => false, // It won't have a post type archive
        'rewrite'            => false, // URLs will not be rewritten for this post type
        'query_var'       => false // This post type cannot be queried
    );

    register_post_type( 'template', $args );
}

add_action( 'init', 'register_templates_post_type' );

add_filter( '_ks_acf_layout_locations', function ( $locations ) {
    $locations[] = 'template';
    return $locations;
} );
add_filter( '_ks_remove_post_editor', function ( $remove ) {
    $remove[] = 'template';
    return $remove;
} );