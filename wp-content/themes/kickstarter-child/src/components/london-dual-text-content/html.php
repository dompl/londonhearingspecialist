<?php
use Kickstarter\MyHelpers;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1703270352_london', 10, 2 );

function wp_1703270352_london( $html, $data ) {

    $left        = get_component( 'l', $data );
    $left_image  = get_component( 'li', $data );
    $right       = get_component( 'r', $data );
    $right_image = get_component( 'ri', $data );
    $after       = get_component( 'after', $data );

    if ( empty( $left ) && empty( $right ) && empty( $after ) ) {
        return $html;
    }
    $html .= \London\Acf::HeaderAcfHtml( $data );
    $html .= '<div class="london-dual-text">';
    $html .= '<div class="wrapper">';

    if (  !  empty( $left ) || !  empty( $left_image ) ) {
        $html .= '<div class="left inner-wrapper">';
        $html .= $left ? '<div class="london-content">' . $left . '</div>' : '';
        $html .= $left_image ? MyHelpers::PictureSource( image : $left_image, size: 576, custom_container: 'image image-left', min: 576 ): '';
        $html .= '</div>';
    }

    if (  !  empty( $left ) || !  empty( $left_image ) ) {
        $html .= '<div class="right inner-wrapper">';
        $html .= $right ? '<div class="london-content">' . $right . '</div>' : '';
        $html .= $right_image ? MyHelpers::PictureSource( image : $right_image, size: 576, custom_container: 'image image-right', min: 576 ): '';
        $html .= '</div>';
    }

    $html .= '</div>';
    $html .= $after ? '<div class="after">' . $after . '</div>' : '';
    $html .= '</div>';
    $html .= \London\Acf::ButtonAcfHtml( $data, 'gf' );

    return $html;
}