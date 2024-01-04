<?php

add_filter( \Kickstarter\MyAcf::Html(), 'wp_1704354284_london', 10, 2 );

function wp_1704354284_london( $html, $data ) {

    $content = get_component( 'simple', $data );

    $html .= \London\Acf::HeaderAcfHtml( $data );

    if ( empty( $content ) ) {
        return $html;
    }

    $html .= '<div class="london-simple london-text">' . $content . '</div>';

    return $html;
}