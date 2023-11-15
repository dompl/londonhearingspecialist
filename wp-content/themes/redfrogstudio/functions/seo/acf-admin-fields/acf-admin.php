<?php
use Extended\ACF\Location;
use Kickstarter\MyHelpers;
use Kickstarter\MySeo;
$helpers = MyHelpers::getInstance();
$mySeo   = MySeo::getInstance();
if ( function_exists( 'acf_add_options_page' ) ) {

    if (  !  MySeo::isActiveAdvancedSeo() ) {
        return;
    }

    $admin_seo_page = array(
        'page_title' => 'Search Engine Optimisation Settings',
        'menu_title' => 'SEO',
        'menu_slug'  => 'admin-seo-options',
        'capability' => 'administrator',
        'icon_url'   => 'dashicons-bell',
        'redirect'   => false
    );

    acf_add_options_page( $admin_seo_page );

}

add_action( 'acf/init', function () use ( $helpers, $mySeo ) {

    if (  !  MySeo::isActiveAdvancedSeo() ) {
        return;
    }

    $options_fields_general_information = apply_filters( 'ks_seo_admin_acf_fields_general_information', [] );

    if (  !  empty( $options_fields_general_information ) ) {
        register_extended_field_group( [
            'title'    => 'General Business Information',
            'style'    => 'default',
            'fields'   => $options_fields_general_information,
            'location' => [
                Location::where( 'options_page', 'admin-seo-options' )
            ]
        ] );
    }
} );