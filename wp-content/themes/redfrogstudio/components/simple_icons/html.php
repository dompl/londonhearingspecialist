<?php
/**
 * HTML For the Slider gallery
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Gallery;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Link;
use Kickstarter\MyHelpers;
add_filter( '_ks_component_simple_icons', 'ks_component_simple_icons', 10, 5 );

function ks_component_simple_icons( $html, $data, $helpers, $theme_data, $acf ) {
    $icons = apply_filters( '_ks_component_simple_icons_prefix_html', get_component( 'icons', $data ), $data, $helpers, $theme_data, $acf );

    if ( empty( (array) $icons ) ) {
        return $html;
    }

    $title   = apply_filters( '_ks_component_simple_icons_title_html', get_component( 'title', $data ), $data, $helpers, $theme_data, $acf );
    $prefix  = apply_filters( '_ks_component_simple_icons_prefix_html', get_component( 'prefix', $data ), $data, $helpers, $theme_data, $acf );
    $suffix  = apply_filters( '_ks_component_simple_icons_suffix_html', get_component( 'suffix', $data ), $data, $helpers, $theme_data, $acf );
    $size    = apply_filters( '_ks_component_simple_icons_size', 200, $data, $helpers, $theme_data, $acf );
    $min     = apply_filters( '_ks_component_simple_icons_min', 320, $data, $helpers, $theme_data, $acf );
    $gallery = apply_filters( '_ks_component_simple_icons_gallery', false, $data, $helpers, $theme_data, $acf );
    $use_css = apply_filters( '_ks_component_simple_icons_use_css', false );

    $ratios = apply_filters( '_ks_component_simple_icons_ratios', [], $data, $helpers, $theme_data, $acf );

    $classes   = [];
    $classes[] = $title ? 'has-title' : 'no-title';
    $classes[] = $prefix ? 'has-prefix' : 'no-prefix';
    $classes[] = $suffix ? 'has-suffix' : 'no-suffix';

    $html .= '<div class="simple-icons ' . implode( ' ', $classes ) . '">';

    $html .= $title || $prefix ? '<div class="header">' : '';
    $html .= $title ? '<div class="title">' . nl2br( $title ) . '</div>' : '';
    $html .= $prefix ? '<div class="prefix">' . nl2br( $prefix ) . '</div>' : '';
    $html .= $title || $prefix ? '</div>' : '';

    $html .= '<div class="icons">';
    $ic = ''; // Reset the $ic variable for each icon iteration
    $b  = 0;
    for ( $i = 0; $i < $icons; $i++ ) {
        $title = get_component( 'icons_' . $i . '_title', $data );
        if ( $title ) {
            $b++;
        }
    }
    for ( $i = 0; $i < $icons; $i++ ) {
        $icon                = [];
        $icon['image']       = get_component( 'icons_' . $i . '_image', $data );
        $icon['description'] = get_component( 'icons_' . $i . '_description', $data );
        $icon['title']       = get_component( 'icons_' . $i . '_title', $data );
        $icon['link']        = (array) get_component( 'icons_' . $i . '_link', $data );

        $icon_title       = apply_filters( '_ks_component_simple_icons_icons_title', $icon['title'], $data, $helpers, $theme_data, $acf );
        $icon_description = apply_filters( '_ks_component_simple_icons_icons_description', $icon['description'], $data, $helpers, $theme_data, $acf );
        $icon_link        = apply_filters( '_ks_component_simple_icons_icons_link', $icon['link'], $data, $helpers, $theme_data, $acf );
        $icon_link        = array_filter( (array) $icon_link );

        $ic .= '<div class="item">';
        $picture = MyHelpers::PictureSource( image: $icon['image'], size: $size, ratios: $ratios, custom_container: 'image', lazy: true, alt: false, zoom: false, zoom_size: 1200, data: $data, min: $min, gallery: $gallery, use_css: $use_css );
        $ic .=  !  empty( $icon_link ) ? MyHelpers::Link( link : $icon_link, content: $picture ): $picture;
        $ic .= $icon_title || $icon_description ? '<div class="wrapper">' : '';
        if ( $b > 0 ) {
            $t = $icon_title ? (  !  empty( $icon_link ) ? MyHelpers::Link( link : $icon_link, content : $icon_title ): $icon_title ): '&nbsp;';
            $ic .= '<div class="icon-title">' . $t . '</div>';
        }
        $ic .= $icon_description ? '<div class="icon-description">' . $icon_description . '</div>' : '';
        $ic .= $icon_title || $icon_description ? '</div>' : '';
        $ic .= '</div>';
    }

    $html .= apply_filters( '_ks_component_simple_icons_icon_html', $ic, $size, $ratios, $icon_title, $icon_description, $icon_link );

    $html .= '</div>';

    return $html;
}