<?php

add_action( 'ks_footer', 'london_footer_html' );

function london_footer_html( $html ) {

    $html .= '<footer id="london-footer">';
    $html .= '<div class="container">';
    $html .= '</div>';
    $html .= '</footer>';

    return $html;

}