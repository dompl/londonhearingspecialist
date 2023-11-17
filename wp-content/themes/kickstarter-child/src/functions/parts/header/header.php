<?php
add_action( 'ks_after_body', 'ks_header_wrapper' );
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
    $googleRating = new GoogleRating();
    $reviews      = $googleRating->getReviews();
    $starts       = $googleRating->displayStars();
    $count        = $googleRating->displayRatingCount();

    $html .= '<div class="item rating">';
    $html .= '<div class="rating-top">Highly Recommended</div>';
    $html .= '<div class="rating-middle"><span class="count">' . $reviews['averageRating'] . '</span><span class="stars">' . $starts . '</span></div>';
    $html .= '<div class="rating-bottom"><span class="number">' . $count . '</span><span class="word">reviews</span></div>';
    $html .= '</div>';

    //  $html .= ;
    return $html;
}function ks_header_wrapper_right_callback( $html, $themeData ) {
    return $html;
}