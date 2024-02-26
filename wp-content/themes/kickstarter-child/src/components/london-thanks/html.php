<?php
use Kickstarter\MyHelpers;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1704452844_london', 10, 2 );

function wp_1704452844_london( $html, $data ) {

    $title   = get_component( 'title', $data );
    $message = get_component( 'message', $data );
    $img     = 884;

    $html .= '<div class="london-thanks">';
    $html .= $img ? MyHelpers::PictureSource( image : $img, size: 360, min: 320, custom_container: 'image' ): '';
    $html .= '<div class="content">';
    $html .= $title ? '<h2>' . $title . '</h2>' : '';
    $html .= $message ? '<div class="message london-text">' . wpautop( $message ) . '</h2>' : '';
    $html .= '</div>';
    $html .= '</div>';

    $html .= '';

    return $html;
}