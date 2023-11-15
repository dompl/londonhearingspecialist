<?php
/**
 * Render a text and image component with customizable filters.
 *
 * @param string $html The HTML content.
 * @param mixed $data The data for rendering.
 * @param object $helpers Helper functions.
 * @param object $theme_data Theme-related data.
 * @param object $acf Advanced Custom Fields data.
 * @return string The modified HTML content.
 *
 * Filters available:
 * - _ks_component_text_image_one_prefix: Modify the prefix text.
 * - _ks_component_text_image_one_title: Modify the title text.
 * - _ks_component_text_image_one_subtitle: Modify the subtitle text.
 * - _ks_component_text_image_one_content: Modify the content text.
 */

use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Text;
use Kickstarter\AcfHelpers;
use Kickstarter\MyHelpers;
add_filter( '_ks_component_text_image_one', 'ks_component_text_image_one', 10, 5 );

function ks_component_text_image_one( $html, $data, $helpers, $theme_data, $acf ) {
    // Get image and content components
    $image   = get_component( 'image', $data, 'image' );
    $content = get_component( 'content', $data );

    // Check if image or content is missing
    if (  !  $image || !  $content ) {
        return;
    }

    // Get image height, zoom, and other properties
    $size            = get_component( 'image', $data, 'height' );
    $zoom            = get_component( 'image', $data, 'zoom' );
    $button          = AcfHelpers::AcfButtonHtml( $data );
    $container_width = get_component( 'container_width', $data );
    $screen          = MyHelpers::ScreenSizes( $container_width );

    // Adjust height based on screen size
    $size = preg_replace( "/[^0-9x]/", "", $size );
    if ( str_contains( $size, 'x' ) ) {
        $dimensions = explode( 'x', $size );
        $size       = [$dimensions[0], $dimensions[1]];
    } else {
        if ( $screen ) {
            $s    = intval( $screen / 2 );
            $size = [$s, $size];
        }
    }

    // Apply filters to various components
    $prefix   = apply_filters( '_ks_component_text_image_one_prefix', get_component( 'prefix', $data ), $data, $helpers, $theme_data, $acf );
    $title    = apply_filters( '_ks_component_text_image_one_title', get_component( 'title', $data ), $data, $helpers, $theme_data, $acf );
    $subtitle = apply_filters( '_ks_component_text_image_one_subtitle', get_component( 'subtitle', $data ), $data, $helpers, $theme_data, $acf );
    $content  = apply_filters( '_ks_component_text_image_one_content', $content, $data, $helpers, $theme_data, $acf );
    $style    = apply_filters( '_ks_component_text_image_one_style', get_component( 'style', $data ), $data, $helpers, $theme_data, $acf );

    $html .= '<div class="image-text ' . get_component( 'position', $data ) . ( $style ? ' style-' . $style : '' ) . '">';
    $html .= '<div class="content">';
    $html .= $prefix || $title || $subtitle ? '<div class="title-container">' : '';
    $html .= $prefix ? '<div class="prefix">' . $prefix . '</div>' : '';
    $html .= $title ? '<div class="title">' . MyHelpers::formatTag( $title ) . '</div>' : '';
    $html .= $subtitle ? '<div class="subtitle">' . $subtitle . '</div>' : '';
    $html .= $prefix || $title || $subtitle ? '</div>' : '';
    $html .= '<div class="main-content the-content">' . nl2br( $content ) . '</div>';
    if ( apply_filters( '_ks_component_fields_text_image_one_button_use', true, $data, $helpers, $acf ) ) {
        $html .= AcfHelpers::AcfButtonHtml( $data );
    }
    $html .= '</div>';

    $alt = MyHelpers::getImageData( $image, 'alt' ) != '' ? MyHelpers::getImageData( $image, 'alt' ) : ( $title ? wp_strip_all_tags( MyHelpers::formatTag( $title ) ) : the_title_attribute( 'echo=0&post=' . $data['post_id'] ) );

    // Include image with specified properties
    $image_size_min = apply_filters( '_ks_component_text_image_one_image_min', $size, $data, $helpers, $theme_data, $acf );
    $ImageSource    = MyHelpers::PictureSource( image: $image, min: $image_size_min, zoom: get_component( 'image', $data, 'zoom' ), alt: $alt );
    $html .= apply_filters( '_ks_component_text_image_one_image_source', $ImageSource, $data, $helpers, $theme_data, $acf );
    $html .= '</div>';

    return $html;
}