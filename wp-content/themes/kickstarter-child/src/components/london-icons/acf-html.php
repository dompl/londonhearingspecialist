<?php
use Kickstarter\MyHelpers;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1702901590_london', 10, 2 );

function wp_1702901590_london( $html, $data ) {

    $icons = get_component( 'icons', $data );

    if ( empty( $icons ) ) {
        return $html;
    }

    $html .= '<div class="london-icons">';

    for ( $i = 0; $i < $icons; $i++ ) {

        $image = get_component( "icons_{$i}_i", $data );
        if ( empty( $image ) ) {
            continue;
        }
        $title       = get_component( "icons_{$i}_t", $data );
        $description = get_component( "icons_{$i}_d", $data );
        $html .= '<div class="item">';
        $html .= MyHelpers::PictureSource( image: $image, size: 80, ratios: [480 => 100, 1024 => 135], custom_container: 'image', min: 80 );
        if (  !  empty( $title ) || !  empty( $description ) ) {
            $html .= '<div class="inner">';
            $html .= $title ? '<div class="title">' . $title . '</div>' : '';
            $html .= $description ? '<div class="description">' . $description . '</div>' : '';
            $html .= '</div>';
        }
        $html .= '</div>';
    }

    $html .= '</div>';

    $html .= '';

    return $html;
}