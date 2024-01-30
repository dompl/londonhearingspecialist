<?php
add_action( 'ks_after_body', 'ks_header_wrapper', 20 );
add_filter( 'ks_header_wrapper_left', 'ks_header_wrapper_left_callback', 10, 2 );
add_filter( 'ks_header_wrapper_middle', 'ks_header_wrapper_middle_callback', 10, 2 );
add_filter( 'ks_header_wrapper_right', 'ks_header_wrapper_right_callback', 10, 2 );

function ks_header_wrapper() {

    $themeData = \Kickstarter\MyHelpers::getThemeData();

    $html = '<div id="header-wrapper">';
    $html .= '<div class="container">';
    $html .= '<div class="left">' . apply_filters( 'ks_header_wrapper_left', false, $themeData ) . '</div>';
    $html .= '<div class="middle">' . apply_filters( 'ks_header_wrapper_middle', false, $themeData ) . '</div>';
    $html .= '<div class="right">' . apply_filters( 'ks_header_wrapper_right', false, $themeData ) . '</div>';
    $html .= '</div>';
    $html .= '</div>';

    echo $html;

}

function ks_header_wrapper_left_callback( $html, $themeData ) {

    $html .= '<div class="item logos">';
    $html .= '<a href="' . get_bloginfo( 'url' ) . '" title="' . get_bloginfo( 'name' ) . '">';
    $html .= '<img src="' . $themeData['ks_logo_d'] . '" alt="' . get_bloginfo( 'name' ) . '" class="logo-mobile top-logo">';
    $html .= '<img src="' . $themeData['ks_logo_m'] . '" alt="' . get_bloginfo( 'name' ) . '" class="logo-desktop top-logo">';
    $html .= '</a>';
    $html .= '<div class="main-nav-init"><span>Menu</span><i class="icon-bars-solid"></i></div>';
    $html .= '</div>';

    return $html;
}

function ks_header_wrapper_middle_callback( $html, $themeData ) {
    $html .= \London\Helpers::GoogleRating();
    return $html;
}

function ks_header_wrapper_right_callback( $html, $themeData ) {
    $shop_url = wc_get_page_permalink( 'shop' );
    $html .= '<div class="item">';
    $html .= $themeData['ks_shop_url'] ? '<div id="go-to-shop"><a href="' . esc_url( $shop_url ) . '" title="Visit London Hearing Specialists Shop" class="button blue-dark">Shop</a></div>' : '';
    $html .= do_shortcode( '[book_appointment]' );
    $html .= '<span class="main-nav-init"><span>Menu</span><i class="icon-bars-solid"></i></span>';
    $html .= '</div>';
    return $html;
}