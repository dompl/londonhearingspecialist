<?php
add_action( 'wp_head', 'london_redirects' );

function london_redirects() {

    global $post;

    $redirects = [
        636 => 638
    ];
    if (  !  isset( $post->ID ) ) {
        return;
    }
    foreach ( $redirects as $from => $to ) {
        if ( $post->ID == $from ) {
            wp_safe_redirect( get_permalink( $to ), 301 );
            exit;
        }
    }
}