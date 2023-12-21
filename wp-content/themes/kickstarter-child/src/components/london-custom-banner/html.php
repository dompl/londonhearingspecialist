<?php
use London\Acf;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1702889536_london', 10, 2 );

function wp_1702889536_london( $html, $data ) {

    $type = get_component( 'select', $data );

    $html .= '<div class="london-custom-banner ' . $type . '">';
    $html .= apply_filters( '_london_custom_banners', '', $type, $data );
    $html .= '</div>';
    return $html;
}
add_filter( '_london_custom_banners', 'london_custom_banners_select_offer', 10, 3 );

function london_custom_banners_select_offer( $html, $type, $data ) {

    $text     = get_component( 'offer_text', $data );
    $subtitle = get_component( 'offer_subtitle', $data );

    if ( empty( $text ) && empty( $subtitle ) ) {
        return $html;
    }
    $html .= '<div class="banner-sm-content">';
    $html .= $text ? '<div class="text">' . $text . '</div>' : '';
    $html .= $subtitle ? '<div class="subtitle">' . $subtitle . '</div>' : '';
    $html .= '</div>';
    $html .= Acf::ButtonAcfHtml( $data );

    return $html;

}