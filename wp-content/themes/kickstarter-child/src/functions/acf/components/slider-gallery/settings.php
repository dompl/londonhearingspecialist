<?php
/**
 * Slider gallery is available on the Parent theme. There only settings are available;
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

use Extended\ACF\Fields\Number;

// Admin Additional settings
add_filter( '_component_slider_additional_settings', function ( $fields ) {
    $fields[] = Number::make( 'Image height', 'height' )->instructions( 'Set image heights. The images will remain aspect ration but will have the height set here' )->min( 100 )->max( 500 )->required()->defaultValue( 250 );
    $fields[] = Number::make( 'Slides to show', 'slides' )->instructions( 'How many slides should the website show in the full screens' )->min( 2 )->max( 6 )->required()->defaultValue( 4 );
    return $fields;
}, 10, 1 );

// Add Top Margin
add_filter( '_component_slider_gallery_before', function ( $html, $data ) {
    $html .= lakeisle_container_spacings( 'top', $data );
    return $html;
}, 10, 2 );

// Add bottom Margin
add_filter( '_component_slider_gallery_after', function ( $html, $data ) {
    $html .= lakeisle_container_spacings( 'bottom', $data );
    return $html;
}, 10, 2 );

// Slider Settings
add_filter( '_component_slider_gallery_slick_settings', function ( $settings, $data ) {
    $slidesToShow = get_component( 'slides', $data );
    $settings     = array(
        'dots'           => false,
        'infinite'       => true,
        'variableWidth'  => true,
        'centerMode'     => false,
        'arrows'         => false,
        'speed'          => 1000,
        'rows'           => 2,
        'slidesToShow'   => 1,
        'slidesToScroll' => 1,
        'responsive'     => array(
            array(
                'breakpoint' => 1024,
                'settings'   => array(
                    'slidesToShow' => 2
                )
            ),
            array(
                'breakpoint' => 600,
                'settings'   => array(
                    'slidesToShow' => 2
                )
            ),
            array(
                'breakpoint' => 480,
                'settings'   => array(
                    'slidesToShow' => 1
                )
            )
        )
    );

    return $settings;
}, 10, 2 );

// Slider Image Sizes
add_filter( '_component_slider_gallery_image_sizes', function ( $sizes, $data ) {
    $height = intval( get_component( 'height', $data ) );
    $height = [500, 400];
    $sizes  = [
        0   => ['sizes' => $height],
        480 => ['sizes' => $height]
    ];

    return $sizes;
}, 10, 2 );

// Add Zoom opening tag
add_filter( '_component_slider_gallery_after_open_image', function ( $html, $data, $image ) {
    $html .= '<a href="' . wpimage( $image, 1800 ) . '" data-lightbox="gallery-' . $data['post_id'] . '">';
    return $html;
}, 10, 3 );

// Add Zoom closing tag
add_filter( '_component_slider_gallery_before_close_image', function ( $html, $data, $image ) {
    $html .= '</a>';
    return $html;
}, 10, 3 );