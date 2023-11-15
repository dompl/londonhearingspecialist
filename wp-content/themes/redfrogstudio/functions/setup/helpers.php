<?php
/**
 * Helper Functions for the theme
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
if (  !  function_exists( 'use_transients' ) ) {

    function use_transients() {

        $data = Kickstarter\MyHelpers::getThemeData( 'ks_disable_transients' );

        if ( $data == false ) {
            return true;
        }

        return false;

    }
}