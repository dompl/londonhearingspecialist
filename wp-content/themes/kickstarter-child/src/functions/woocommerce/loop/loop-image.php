<?php
use Kickstarter\MyHelpers;
add_action( 'after_setup_theme', function () {
    remove_action( 'woocommerce_before_shop_loop_item_title', 'woocommerce_template_loop_product_thumbnail', 10 );
    add_action( 'woocommerce_before_shop_loop_item_title', 'london_template_loop_product_thumbnail', 10 );
} );

function london_template_loop_product_thumbnail( $product ) {

    global $product;

    // Ensure we have the global product object
    if (  !  is_a( $product, 'WC_Product' ) ) {
        return;
    }

    // Get the image ID
    $image_id = $product->get_image_id();

    // Now you can use the image ID to do whatever you need
    // For example, get the full image URL:
    $image_url = wp_get_attachment_url( $image_id );

    // Display the image
    if (  !  empty( $image_url ) ) {
        echo MyHelpers::PictureSource( image: $image_id, size: [200, 200], min: [200, 200], custom_container: 'image', zoom: false, zoom_size: 800 );
    }

}