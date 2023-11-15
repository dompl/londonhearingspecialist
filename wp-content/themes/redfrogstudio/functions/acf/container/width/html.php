<?php
/**
 * Add container widths to the content container
 */
use Kickstarter\MyHelpers;

add_filter( '_ks_component_container', function ( $content, $helpers, $data ) {

    $ThemeData = MyHelpers::getThemeData();
    $content   = preg_replace( '#^<\/p>|<p>$#', '', do_shortcode( $content ) );

    $is_container      = false;
    $container_classes = [];
    //  Check if container has widths
    if ( isset( $ThemeData['ks_container_widths'] ) && !  empty( $ThemeData['ks_container_widths'] ) ) {

        $is_container = true;
        $width        = get_component( 'container_width', $data );
        // $container_classes[] = 'container';
        $container_classes[] = $width && in_array( $width, $ThemeData['ks_container_widths'] ) && ( apply_filters( '_ks_container_width_use', true, $data, $helpers, $data['row'] ) == true ) ? 'container container-' . $width : null;

    }

    //  Check if container has spaces & we are looking for the fixed height only.
    if ( isset( $ThemeData['ks_container_spacings'] ) && $ThemeData['ks_container_spacings'] == 'default' ) {
        $is_container        = true;
        $fixed               = get_component( 'space_f', $data );
        $container_classes[] = $fixed ? 'fixed-' . $fixed : '';
    }
    $container_classes[] = 'row_' . $data['row'];

    if ( $is_container && !  empty( $container_classes ) ) {

        $container_classes =  !  empty( array_filter( $container_classes ) ) ? ' class="' . preg_replace( '/\s+/', ' ', implode( ' ', $container_classes ) ) . '"' : null;

        $disable_container_classes = apply_filters( '_ks_disable_container_classes', false, $data );

        if ( $disable_container_classes ) {
            $container_classes = null;
        }

        // Prepare the container classes
        $containerStart = $container_classes ? '<div ' . $container_classes . '>' : '';
        $containerEnd   = $container_classes ? '</div>' : '';

        // Prepare the unique index ID
        $indexId = "{$data['post_id']}-{$data['index']}";

        // Prepare the various filter results
        $beforeContainer = apply_filters( '_ks_component_container_before', false, $helpers, $data );
        $insideBefore    = apply_filters( '_ks_component_container_inside_before', false, $helpers, $data );
        $insideContent   = apply_filters( '_ks_component_container_inside', $content, $helpers, $data );
        $insideAfter     = apply_filters( '_ks_component_container_inside_after', false, $helpers, $data );
        $afterContainer  = apply_filters( '_ks_component_container_after', false, $helpers, $data );

        // Construct the final HTML string using sprintf
        return sprintf(
            '%s<div id="index-%s">%s%s%s%s%s</div>%s',
            $beforeContainer,
            $indexId,
            $containerStart,
            $insideBefore,
            $insideContent,
            $insideAfter,
            $containerEnd,
            $afterContainer
        );
    }

    return $content;

}, 100, 4 );