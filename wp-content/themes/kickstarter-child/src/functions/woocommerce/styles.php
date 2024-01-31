<?php

/**
 * Set WooCommerce image dimensions upon theme activation
 */
// // Remove each style one by one
function london_dequeue_styles( $enqueue_styles ) {
    unset( $enqueue_styles['woocommerce-general'] ); // Remove the gloss
    unset( $enqueue_styles['woocommerce-layout'] ); // Remove the layout
    unset( $enqueue_styles['woocommerce-smallscreen'] ); // Remove the smallscreen optimisation
    return $enqueue_styles;
}
add_filter( 'woocommerce_enqueue_styles', 'london_dequeue_styles' );

// WooCommerce Styles
add_filter( '_ks_enqueue_child_styles', function ( $styles ) {
    $styles[] = 'woocommerce.css';
    return $styles;
}, 10, 1 );

function london_remove_core_block_styles() {
    wp_dequeue_style( 'wp-block-columns' );
    wp_dequeue_style( 'wp-block-column' );
}
add_action( 'wp_enqueue_scripts', 'london_remove_core_block_styles' );