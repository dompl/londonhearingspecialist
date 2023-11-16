<?php

add_action( 'ks_after_body', 'ks_header_wrapper' );
add_filter( 'ks_header_wrapper_left', 'ks_header_wrapper_left_callback' );
add_filter( 'ks_header_wrapper_middle', 'ks_header_wrapper_middle_callback' );
add_filter( 'ks_header_wrapper_right', 'ks_header_wrapper_right_callback' );

function ks_header_wrapper() {

    $html = '<div id="header-wrapper">';
    $html .= '<div class="container">';
    $html .= '<div class="left">' . apply_filters( 'ks_header_wrapper_left', false ) . '</div>';
    $html .= '<div class="middle">' . apply_filters( 'ks_header_wrapper_middle', false ) . '</div>';
    $html .= '<div class="right">' . apply_filters( 'ks_header_wrapper_right', false ) . '</div>';
    $html .= '</div>';
    $html .= '</div>';

    echo $html;

}

function ks_header_wrapper_left_callback( $html ) {

    $html .= '<div class="item">';
    $html .= '';
    $html .= '</div>';

    return $html;
}function ks_header_wrapper_middle_callback( $html ) {
    return $html;
}function ks_header_wrapper_right_callback( $html ) {
    return $html;
}