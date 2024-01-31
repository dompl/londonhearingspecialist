<?php

add_filter( 'woocommerce_show_page_title', function ( $show_title ) {
    if ( is_product_category() ) {
        return false; // Do not show title on product category pages
    }
    return $show_title; // Show title on all other pages
} );