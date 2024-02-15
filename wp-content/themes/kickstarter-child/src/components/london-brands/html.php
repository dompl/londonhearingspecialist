<?php
use Kickstarter\MyHelpers;
use London\Acf;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1707906303_london', 10, 2 );

function wp_1707906303_london( $html, $data ) {

    $brands = get_component( 'brands', $data );

    if ( empty( $brands ) ) {
        return $html;
    }
    $helpers = new MyHelpers();
    $html .= Acf::HeaderAcfHtml( $data );
    $html .= '<div class="london-brands">';

    for ( $i = 0; $i < $brands; $i++ ) {
        $link  = get_component( "brands_{$i}_link", $data );
        $logo  = get_component( "brands_{$i}_logo", $data );
        $image = $helpers->PictureSource( image: $logo, min: [400], size: [400], ratios: [], custom_container: 'image', lazy: true, alt: false, zoom: false, zoom_size: 1200 );
        $html .= '<div class="item">';
        $html .=  !  empty( $link ) ? $helpers->Link( link : $link, content: $image ): $image;
        $html .= '</div>';
    }
    $html .= '</div>';

    $html .= '';

    return $html;
}