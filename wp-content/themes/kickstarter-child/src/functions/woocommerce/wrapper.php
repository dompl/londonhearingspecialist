<?php

add_action( 'the_content', function ( $content ) {
    if ( is_cart() || is_checkout() || is_account_page() ) {

        $html = '<div class="space space-lg space-out"></div>';
        $html .= '<div class="container">' . $content . '</div>';

        return $html;

    }
    return $content;
}, 10 );