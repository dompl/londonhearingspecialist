<?php

add_action( 'wp_ajax_nopriv_custom_filter_products', 'custom_filter_products' );
add_action( 'wp_ajax_custom_filter_products', 'custom_filter_products' );

function custom_filter_products() {
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => -1,
        'post_status'    => 'publish'
    );

    if ( isset( $_POST['category'] ) && !  empty( $_POST['category'] ) ) {
        $args['tax_query'][] = array(
            'taxonomy' => 'product_cat',
            'field'    => 'ID',
            'terms'    => array_map( 'sanitize_text_field', $_POST['category'] ),
            'operator' => 'IN'
        );
    }

    if ( isset( $_POST['manufacturer'] ) && !  empty( $_POST['manufacturer'] ) ) {
        $args['meta_query'][] = array(
            'key'     => '_manufacturer',
            'value'   => array_map( 'sanitize_text_field', $_POST['manufacturer'] ),
            'compare' => 'IN'
        );
    }

    if ( isset( $_POST['price_min'] ) && isset( $_POST['price_max'] ) ) {
        $args['meta_query'][] = array(
            'key'     => '_price',
            'value'   => array( sanitize_text_field( $_POST['price_min'] ), sanitize_text_field( $_POST['price_max'] ) ),
            'compare' => 'BETWEEN',
            'type'    => 'NUMERIC'
        );
    }

    $query = new WP_Query( $args );

    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            wc_get_template_part( 'content', 'product' );
        }
    } else {
        echo '<p>' . __( 'No products found', 'london-child' ) . '</p>';
    }

    wp_die();
}

add_action( 'wp_ajax_nopriv_get_price_range', 'ajax_get_price_range' );
add_action( 'wp_ajax_get_price_range', 'ajax_get_price_range' );

function ajax_get_price_range() {
    check_ajax_referer( 'fetch_price', 'security' );
    $categories = isset( $_POST['categories'] ) ? $_POST['categories'] : array();
    echo json_encode( get_price_range( $categories ) );
    wp_die();
}