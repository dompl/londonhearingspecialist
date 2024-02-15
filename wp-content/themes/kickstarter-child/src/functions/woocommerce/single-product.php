<?php
/**
 * Single product
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_action( 'after_setup_theme', function () {

    remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_sale_flash', 10 );
    remove_action( 'woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20 );
    add_action( 'london_single_product_top_left', 'woocommerce_show_product_images' );

    remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );
    add_action( 'london_single_product_name', 'woocommerce_template_single_title', 5 );
    remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
    remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_price', 10 );
    add_action( 'london_single_product_top_price', 'woocommerce_template_single_price', 10 );
    remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_excerpt', 20 );
    add_action( 'london_single_product_top_excerpt', 'woocommerce_template_single_excerpt', 20 );
    remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_add_to_cart', 30 );
    add_action( 'london_single_product_add_to_cart', 'woocommerce_template_single_add_to_cart', 10 );
    remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
    add_action( 'london_single_product_top_meta', 'woocommerce_template_single_meta', 10 );
    remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_sharing', 50 );
    // remove_action( 'woocommerce_single_product_summary', array( 'WC_Structured_Data', 'generate_product_data' ), 60 );

    remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_product_data_tabs', 10 );
    // remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_upsell_display', 15 );
    remove_action( 'woocommerce_after_single_product_summary', 'woocommerce_output_related_products', 20 );

    add_action( 'woocommerce_single_product_summary', function () {
        global $product, $post;

        // Manufacturer
        $product_id   = $product->get_id();
        $manufacturer = get_post_meta( $product_id, '_manufacturer', true );

        echo '<div class="london-single-product-wrapper">';

        echo '<div class="product-top">';
        echo '<div class="london-single-left">';
        do_action( 'london_single_product_top_left' );
        echo '</div>';

        echo '<div class="london-single-right">';
        if ( $product->is_on_sale() ) {
            echo apply_filters( 'woocommerce_sale_flash', '<span class="onsale-single">' . __( 'Sale!', 'woocommerce' ) . '</span>', $post, $product );
        }
        echo '<div class="product-name">';
        do_action( 'london_single_product_name' );
        echo '</div>';

        // Manufacturer
        if (  !  empty( $manufacturer ) ) {
            echo '<div class="product-manufacturer">';
            echo esc_html( $manufacturer );
            echo '</div>';
        }

        echo '<div class="product-price">'; do_action( 'london_single_product_top_price' );echo '</div>';
        // Check if product has meta and display it
        if ( $product->get_meta_data() ) {
            echo '<div class="product-meta">'; do_action( 'london_single_product_top_meta' );echo '</div>';
        }
        echo '<div class="product-excerpt">'; do_action( 'london_single_product_top_excerpt' );echo '</div>';
        echo '<div class="product-add-to-cart">'; do_action( 'london_single_product_add_to_cart' );echo '</div>';
        echo '</div>';
        echo '</div>';
        if ( $product->get_description() != "" ) {
            echo '<div class="london-product-full london-text">';
            echo '<h3>Full product description</h3>';
            echo '<div class="description">' . $product->get_description() . '</div>';
            echo '</div>';
        }

        echo '</div>';

    }, 10, 1 );

} );

add_filter( 'woocommerce_product_upsells_products_heading', function ( $text ) {
    if ( $text === 'You may also like&hellip;' ) {
        $text = 'You also may be interested';
    }
    return $text;
} );