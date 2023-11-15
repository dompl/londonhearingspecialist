<?php
/**
 * Spaces functions
 */

// Exit if accessed directly
if (  !  defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Generates a space container HTML element.
 *
 * @param array  $data      Data for generating the space element.
 * @param string $position  Position of the space ('t' for top, 'b' for bottom).
 * @param string $placement Placement of the space ('out' for outside, 'in' for inside).
 *
 * @return string|null HTML for the space element or null if placement doesn't match.
 */
function _fn_container_spaces( $data = [], $position = 't', $placement = 'out', $helpers = null ) {

    if ( apply_filters( '_ks_container_spaces_use', true, $data, $helpers, $data['row'] ) == false ) {
        return null;
    }

    $space          = get_component( 'space', $data, $position );
    $data_placement = get_component( 'space', $data, 'p' );

    if ( $placement != $data_placement && $data_placement != 'both' ) {
        return null;
    }

    if ( $space ) {
        return '<div class="space space-' . $space . ' space-' . $placement . '"></div>';
    }
}

// Add space before container element
add_filter( '_ks_component_container_before', function ( $html, $helpers, $data ) {
    $html .= _fn_container_spaces( $data, 't', 'out', $helpers );
    return $html;
}, 10, 3 );

// Add space after container element
add_filter( '_ks_component_container_after', function ( $html, $helpers, $data ) {
    $html .= _fn_container_spaces( $data, 'b', 'out', $helpers );
    return $html;
}, 100, 3 );

// Add space inside container element before content
add_filter( '_ks_component_container_inside_before', function ( $html, $helpers, $data ) {
    if ( get_component( 'space_f', $data ) ) {
        return $html;
    }
    $html .= _fn_container_spaces( $data, 't', 'in', $helpers );
    return $html;
}, 10, 3 );

// Add space inside container element after content
add_filter( '_ks_component_container_inside_after', function ( $html, $helpers, $data ) {
    if ( get_component( 'space_f', $data ) ) {
        return $html;
    }
    $html .= _fn_container_spaces( $data, 'b', 'in', $helpers );
    return $html;
}, 10, 3 );