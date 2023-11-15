<?php
/**
 * Address Shortcode
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_shortcode( 'address', function ( $atts ) {

    $data = Kickstarter\MyHelpers::getThemeData();

    if (  !  isset( $data['ks_postal_address'] ) ) {
        return;
    }

    return $data['ks_postal_address'];

} );