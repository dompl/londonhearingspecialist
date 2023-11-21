<?php

add_filter( \Kickstarter\MyAcf::Html(), 'wp_1700554603_london', 10, 2 );

function wp_1700554603_london( $html, $data ) {

    $html .= \London\Acf::HeaderAcfHtml( $data );

    return $html;
}