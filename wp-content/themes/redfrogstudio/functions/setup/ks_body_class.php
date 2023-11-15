<?php
/*  ********************************************************
 *   Body class
 *  ********************************************************
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * @param $class
 */
function ks_body_class_helper( $class = '' ) {
    $classes = array();
    $classes = array_map( 'esc_attr', $classes );
    $classes = apply_filters( 'ks_body_class', $classes, $class );
    return array_unique( $classes );
}

add_filter( 'ks_body_class', 'ks_body_class_add_admin' );
/**
 * @param $classes
 * @return mixed
 */
function ks_body_class_add_admin( $classes ) {
    if ( current_user_can( 'edit_posts' ) ) {
        $classes[] = 'ks-is-admin';
    }
    return $classes;
}

/**
 * @param $class
 */
function ks_body_class( $class = '' ) {
    if (  !  empty( ks_body_class_helper() ) ) {
        // Separates class names with a single space, collates class names for body element.
        echo ' class="' . esc_attr( implode( ' ', ks_body_class_helper( $class ) ) ) . '"';
    }
}