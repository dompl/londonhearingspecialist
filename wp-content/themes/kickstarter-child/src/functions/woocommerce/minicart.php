<?php
function london_minicart_html_default() {
    $shop_url = wc_get_page_permalink( 'shop' );
    return $shop_url ? '<div id="go-to-shop"><a href="' . esc_url( $shop_url ) . '" title="Visit London Hearing Specialists Shop" class="button blue-dark">Shop</a></div>' : '';
}
function london_minicart_html() {
    $cart_url = wc_get_cart_url();
    $count    = WC()->cart->get_cart_contents_count();
    $total    = WC()->cart->get_cart_subtotal();
    $html     = '<div id="go-to-shop"><a href="' . esc_url( $cart_url ) . '" title="Visit London Hearing Specialists Shop">';
    $html .= '<div class="shipping-cart"><div class="wrapper"><i class="icon-cart-shopping-regular"></i><span class="count">' . $count . '</span></div><span class="total">' . $total . '</span></div>';
    $html .= '</a></div>';
    return $html;
}

add_action( 'wp_ajax_update_shop_button', 'update_shop_button' );
add_action( 'wp_ajax_nopriv_update_shop_button', 'update_shop_button' );

function update_shop_button() {
    if ( WC()->cart->get_cart_contents_count() > 0 ) {
        echo london_minicart_html();
    } else {
        echo '<a href="//localhost:3000/shop/" title="Visit London Hearing Specialists Shop" class="button blue-dark">Shop</a>';
    }
    wp_die(); // this is required to terminate immediately and return a proper response
}