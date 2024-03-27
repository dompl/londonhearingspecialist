<?php

add_filter( 'ks_body_class', function ( $classes ) {
    global $post;

    // Adds a class for specific post types.
    if ( is_singular() ) {
        $post_type = get_post_type();
        if (  !  empty( $post_type ) ) {
            $classes[] = 'type-' . $post_type;
        }
    }

    // WooCommerce specific pages.
    if ( class_exists( 'WooCommerce' ) ) {
        // Check if WooCommerce is active.
        if ( is_shop() ) {
            $classes[] = 'woocommerce-shop';
        }
        if ( is_product_category() ) {
            $classes[] = 'woocommerce-category';
        }
        if ( is_cart() ) {
            $classes[] = 'woocommerce-cart';
        }
        if ( is_checkout() ) {
            $classes[] = 'woocommerce-checkout';
        }
        // Add more WooCommerce conditions as needed.
    }

    return $classes;
} );