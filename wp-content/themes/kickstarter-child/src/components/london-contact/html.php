<?php
use London\Acf;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1704285128_london', 10, 2 );

function wp_1704285128_london( $html, $data ) {

    $form_title       = get_component( 'form_title', $data );
    $form_description = get_component( 'form_description', $data );

    $html .= '<div class="london-contact">';

    $html .= '<div class="left">';
    $html .= Acf::HeaderAcfHtml( $data );
    $html .= Acf::ButtonAcfHtml( $data, 'form' );
    $html .= '</div>';
    $html .= '<div class="right">';
    $html .= '<div class="top">';
    $html .= $form_title ? '<div class="title"><h2>' . $form_title . '</h2></div>' : '';
    $html .= $form_description ? '<div class="description">' . $form_description . '</div>' : '';
    $html .= '</div>';
    $html .= do_shortcode( '[gravityform id="1" title="false" ajax=true]' );
    $html .= '</div>';

    $html .= '</div>';

    return $html;
}