<?php
use Kickstarter\MyHelpers;

add_filter( \Kickstarter\MyAcf::Html(), 'wp_1702893086_london', 10, 2 );

function wp_1702893086_london( $html, $data ) {

    $steps = get_component( 'stepsa', $data );
    $type  = get_component( 'type', $data ) ? get_component( 'type', $data ) : 'icons';

    if ( empty( $steps ) ) {
        return $html;
    }
    $html .= \London\Acf::HeaderAcfHtml( $data );
    $html .= '<div class="london-steps-' . $type . '">';
    for ( $i = 0; $i < $steps; $i++ ) {

        $text        = get_component( 'stepsa_' . $i . '_t', $data );
        $description = get_component( 'stepsa_' . $i . '_d', $data );
        $html .= '<div class="item">';
        if ( $type == 'icons' ) {

            $image = get_component( 'stepsa_' . $i . '_i', $data );

            $html .= MyHelpers::PictureSource( image: (int) $image, size: 60, custom_container: 'image', min: 60 );
            $html .= '<div class="text">';
            $html .= $text ? '<h3>' . $text . '</h3>' : '';
            $html .= $description ? '<p>' . $description . '</p>' : '';
            $html .= '</div>';

        } else {
            $html .= '<div class="top">';
            $html .= '<div class="number">' . ( $i + 1 ) . '</div>';
            $html .= $text ? '<h3>' . $text . '</h3>' : '';
            $html .= '</div>';
            $html .= $description ? '<p>' . $description . '</p>' : '';

        }
        $html .= '</div>';
    }
    $html .= '</div>';

    $html .= '';

    return $html;
}