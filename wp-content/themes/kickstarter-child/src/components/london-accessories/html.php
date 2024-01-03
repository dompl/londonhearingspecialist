<?php
use Kickstarter\MyHelpers;

add_filter( \Kickstarter\MyAcf::Html(), 'wp_1704192365_london', 10, 2 );

function wp_1704192365_london( $html, $data ) {

    $fields = get_component( 'fa', $data );
    if (  !  $fields ) {
        return $html;
    }
    $html .= '<div class="london-accessories">';
    for ( $i = 0; $i < $fields; $i++ ) {

        $img         = get_component( "fa_{$i}_img", $data );
        $name        = get_component( "fa_{$i}_name", $data );
        $brand       = get_component( "fa_{$i}_brand", $data );
        $description = get_component( "fa_{$i}_description", $data );
        $description = get_component( "fa_{$i}_description", $data );
        $link        = get_component( "fa_{$i}_link", $data );

        $html .= '<div class="item">';

        $html .= $img ? MyHelpers::PictureSource( image : $img, size: [378, 378], min: [320, 320], custom_container: 'image', zoom: false, zoom_size: 800 ): '';
        $html .= '<div class="content">';
        $html .= $brand ? '<span class="button batch gold">' . $brand . '</span>' : '';
        $html .= $name ? '<div class="name"><h3>' . $name . '</h3></div>' : '';
        $html .= $description ? '<div class="description">' . $description . '</div>' : '';
        $html .=  !  empty( $link ) ? MyHelpers::Link( link : $link, wrapper: 'link', class: 'button blue-light small' ): '';
        $html .= '</div>';

        $html .= '</div>';

    }
    $html .= '</div>';

    return $html;
}