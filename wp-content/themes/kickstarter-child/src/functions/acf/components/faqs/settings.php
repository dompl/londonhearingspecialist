<?php
/**
 * FQA Filter
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_filter( '_ks_component_faqs_html_before', function ( $html, $data ) {
    return $html;
}, 5, 2 );

add_filter( '_ks_component_faqs_html_after', function ( $html, $data ) {
    return $html;
}, 90, 2 );

add_filter( '_ks_component_faqs_html_use_js', '__return_true' );

add_filter( '_ks_component_faqs_html_columns', function ( $count ) {
    return $count;
} );