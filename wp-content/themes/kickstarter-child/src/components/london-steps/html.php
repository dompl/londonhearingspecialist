<?php
use Kickstarter\MyHelpers;

add_filter( \Kickstarter\MyAcf::Html(), 'wp_1702893086_london', 10, 2 );

function wp_1702893086_london( $html, $data ) {

    $steps = get_component( 'stepsa', $data );

    if ( empty( $steps ) ) {
        return $html;
    }
    $html .= \London\Acf::HeaderAcfHtml( $data );
    $html .= '<div class="london-steps">';
    for ( $i = 0; $i < $steps; $i++ ) {

        $image       = get_component( 'stepsa_' . $i . '_i', $data );
        $text        = get_component( 'stepsa_' . $i . '_t', $data );
        $description = get_component( 'stepsa_' . $i . '_d', $data );

        $html .= '<div class="item">';
        $html .= MyHelpers::PictureSource( image: (int) $image, size: 60, custom_container: 'image', min: 60 );
        $html .= '<div class="text">';
        $html .= $text ? '<h3>' . $text . '</h3>' : '';
        $html .= $description ? '<p>' . $description . '</p>' : '';
        $html .= '</div>';
        $html .= '</div>';

    }
    $html .= '</div>';

    $html .= '';

    return $html;
}