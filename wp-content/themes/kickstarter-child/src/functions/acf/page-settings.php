<?php
use Extended\ACF\Fields\Select;
use Extended\ACF\Location;
add_action( 'acf/init', function () {
    $settings = apply_filters( 'london_page_settings', [] );
    if (  !  empty( $settings ) ) {
        register_extended_field_group( [
            'title'    => 'Page settings',
            'style'    => 'default',
            'position' => 'side',
            'fields'   => $settings,
            'location' => [
                Location::where( 'post_type', 'page' ),
                Location::where( 'post_type', 'post' ),
                Location::where( 'post_type', 'clinic_services' )
            ]
        ] );
    }
} );

add_filter( 'london_page_settings', function ( $fields ) {

    $fields[] = Select::make( 'Newsletter background', 'footer_bcg' )->choices( london_colors_list() )->allowNull()->stylisedUi();

    return $fields;

} );