<?php
/**
 * Telephone Shortcode
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_shortcode( 'telephone', function ( $atts ) {

    // Get the theme data
    $data = Kickstarter\MyHelpers::getThemeData();

    // Check if the 'ks_tel_number' key is set and not empty in the theme data
    if ( isset( $data['ks_tel_number'] ) && !  empty( $data['ks_tel_number'] ) ) {

        // Cast $atts to an array to prevent potential issues
        $atts = array_filter( (array) $atts );

        // Check if $atts is empty and if the 'visible' key is set and not empty
        if ( empty( $atts ) ) {
            if ( isset( $data['ks_tel_number']['visible'] ) && $data['ks_tel_number']['visible'] !== '' ) {
                return $data['ks_tel_number']['visible'];
            }
        } else {
            if ( isset( $atts['dial'] ) && isset( $data['ks_tel_number']['dial'] ) && $data['ks_tel_number']['dial'] !== '' ) {
                return $data['ks_tel_number']['dial'];
            }
        }

    }

    // Return an empty string if none of the above conditions are met
    return '';
} );