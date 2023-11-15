<?php
/**
 * Container background colors
 */
use Kickstarter\MyHelpers;

function ks_handle_container_background_color( $html, $helpers, $data, $tag ) {

    if ( apply_filters( '_ks_container_background_color_use', true, $data, $helpers, $data['row'] ) == false ) {
        return $html;
    }

    $ThemeData = MyHelpers::getThemeData();

    if (  !  isset( $ThemeData['ks_container_background'] ) ) {
        return $html;
    }

    if (  !  in_array( 'color', $ThemeData['ks_container_background'] ) ) {
        return $html;
    }

    $colors = ks_theme_custom_colors_array();

    if ( empty( $colors ) ) {
        return $html;
    }

    $selectedColor = get_component( 'container_bcg_color', $data );

    if (  !  $selectedColor ) {
        return $html;
    }

    $html .= $tag === 'before' ? '<div class="bcg-' . $selectedColor . '">' : '</div>';
    return $html;
}

add_filter( '_ks_component_container_before', function ( $html, $helpers, $data ) {
    return ks_handle_container_background_color( $html, $helpers, $data, 'before' );
}, 20, 3 );

add_filter( '_ks_component_container_after', function ( $html, $helpers, $data ) {
    return ks_handle_container_background_color( $html, $helpers, $data, 'after' );
}, 20, 3 );