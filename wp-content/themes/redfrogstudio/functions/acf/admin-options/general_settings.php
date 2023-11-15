<?php
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

use Extended\ACF\Location;
use Kickstarter\MyHelpers;

add_action( 'admin_menu', function () {

    $helpers = MyHelpers::getInstance();

    if ( MyHelpers::isAdmin() ) {

        if ( function_exists( 'acf_add_options_page' ) ) {

            $admin_options_page = array(
                'page_title' => 'Administrator Options Page',
                'menu_title' => 'Admin options',
                'menu_slug' => 'admin-options',
                'capability' => 'administrator',
                'redirect' => false
            );

            $admin_tabs = apply_filters( '_ks_admin_only_tabs', $admin_options_page );

            acf_add_options_page( $admin_tabs );
        }
    }
} );

// Create theme options
add_action( 'acf/init', function () {

    $options_fields = apply_filters( 'ks_admin_theme_options', [] );

    if (  !  empty( $options_fields ) ) {
        register_extended_field_group( [
            'title' => 'General Theme Options',
            'style' => 'default',
            'fields' => $options_fields,
            'location' => [
                Location::where( 'options_page', 'admin-options' )
            ]
        ] );
    }
}, 10 );

add_filter( 'ks_admin_theme_options', function ( $fields ) {
    return apply_filters( 'ks_admin_theme_options_general_settings', $fields );
} );