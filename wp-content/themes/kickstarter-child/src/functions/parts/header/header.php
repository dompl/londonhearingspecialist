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

    $html .= '<div class="item">';
    $html .= '<a href="' . get_bloginfo( 'url' ) . '" title="' . get_bloginfo( 'name' ) . '">';
    $html .= '<img src="' . $themeData['logo_d'] . '" alt="' . get_bloginfo( 'name' ) . '" class="logo-desktop">';
    $html .= '<img src="' . $themeData['logo_m'] . '" alt="' . get_bloginfo( 'name' ) . '" class="logo-mobile">';
    $html .= '</a>';
    $html .= '</div>';

    return $html;
}

function ks_header_wrapper_middle_callback( $html, $themeData ) {
    $html .= \London\Helpers::GoogleRating();
    return $html;
}

function ks_header_wrapper_right_callback( $html, $themeData ) {

    $html .= '<div class="item">';
    $html .= $themeData['shop_url'] ? '<a href="' . esc_url( $themeData['shop_url'] ) . '" title="Visit London Hearing Specialists Shop" class="button blue-dark">Shop</a>' : '';
    $html .= $themeData['book_url'] ? '<a href="' . esc_url( $themeData['book_url'] ) . '" title="Book Appointment with London Hearing Specialists" class="button green"><span>Book Appointment</span><i class="icon-plus"></i></a>' : '';
    $html .= '<span class="button blue"><i class="icon-bars-solid" id="main-nav-init"></i></a>';
    $html .= '</div>';
    return $html;
}