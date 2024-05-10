<?php
add_shortcode( 'ucp_customer_reviews', 'ucp_customer_reviews_shortcode' );

function ucp_customer_reviews_shortcode( $atts ) {

    if (  !  isset( $atts['text'] ) ) {
        return;
    }

    return $atts['text'];

}