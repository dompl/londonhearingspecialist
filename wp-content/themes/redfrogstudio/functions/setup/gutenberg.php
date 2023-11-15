<?php
/*  ********************************************************
 *   Disable Gutenberg in the back end
 *  ********************************************************
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_filter( 'use_block_editor_for_post', '__return_false' );

// Disable Gutenberg for widgets.
add_filter( 'use_widgets_block_editor', '__return_false' );

add_action( 'wp_enqueue_scripts', function () {

    // Remove CSS on the front end.
    wp_dequeue_style( 'wp-block-library' );

    // Remove Gutenberg theme.
    wp_dequeue_style( 'wp-block-library-theme' );

    // Remove inline global CSS on the front end.
    wp_dequeue_style( 'global-styles' );

    wp_dequeue_style( 'classic-theme-styles' );

    /** Remove woocommerce blocks */
    wp_dequeue_style( 'wc-block-style' );

    /** Remove theme styles */
    wp_dequeue_style( 'global-styles' );

}, 20 );