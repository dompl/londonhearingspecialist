<?php
/**
 * Include Admin Settings fields for the slick slider
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
// Add Admin Slider Gallery checkbox
add_filter( '_ks_theme_add_components_choices', function ( $choices ) {
    $component = [basename( __DIR__ ) => 'Text & Image (Mowbray Interiors)'];
    $choices   = array_merge( $choices, $component );
    return $choices;
}, 10, 1 );