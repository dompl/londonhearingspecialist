<?php

add_action( 'wp_ajax_nopriv_custom_filter_products', 'custom_filter_products' );
add_action( 'wp_ajax_custom_filter_products', 'custom_filter_products' );

function custom_filter_products() {

    $args = [
        'post_type'      => 'product',
        'posts_per_page' => -1,
        'post_status'    => 'publish',
        'meta_query'     => [
            'relation' => 'AND' // Ensure all meta conditions must be met
        ],
        'tax_query'      => [
            'relation' => 'AND' // Ensure all tax conditions must be met
        ]
    ];

    // Category filter
    if ( isset( $_POST['category'] ) && !  empty( $_POST['category'] ) ) {
        $args['tax_query'][] = [
            'taxonomy' => 'product_cat',
            'field'    => 'id',
            'terms'    => array_map( 'intval', $_POST['category'] ),
            'operator' => 'IN'
        ];
    }

    // Manufacturer filter
    if ( isset( $_POST['manufacturer'] ) && !  empty( $_POST['manufacturer'] ) ) {
        $args['meta_query'][] = [
            'key'     => '_manufacturer',
            'value'   => $_POST['manufacturer'],
            'compare' => 'IN'
        ];
    }

    error_log( print_r( $_POST, true ) );

    // Price range filter
    if ( isset( $_POST['price_range'][0] ) && isset( $_POST['price_range'][1] ) ) {

        $args['meta_query'][] = [
            'key'     => '_price',
            'value'   => [floatval( $_POST['price_range'][0] ), floatval( $_POST['price_range'][1] )],
            'type'    => 'NUMERIC',
            'compare' => 'BETWEEN'
        ];
    }

    $query = new WP_Query( $args );
    ob_start();
    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            wc_get_template_part( 'content', 'product' );
        }
    } else {
        echo '<p>No products found.</p>';
    }
    wp_reset_postdata();

    echo ob_get_clean();
    wp_die();
}
add_action( 'wp_ajax_nopriv_custom_filter_products', 'custom_filter_products' );
add_action( 'wp_ajax_custom_filter_products', 'custom_filter_products' );

add_action( 'wp_ajax_nopriv_get_price_range', 'ajax_get_price_range' );
add_action( 'wp_ajax_get_price_range', 'ajax_get_price_range' );

function ajax_get_price_range() {
    check_ajax_referer( 'fetch_price', 'security' );
    $categories = isset( $_POST['categories'] ) ? $_POST['categories'] : array();
    echo json_encode( get_price_range( $categories ) );
    wp_die();
}