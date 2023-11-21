<?php
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Location;

add_filter( '_ks_acf_layout_locations', function ( $locations ) {
    $locations[] = 'clinic_services';
    return $locations;
} );

add_action( 'acf/init', function () {
    register_extended_field_group( [
        'title'    => 'Clinic service details',
        'style'    => 'default',
        'fields'   => apply_filters( 'london_clinic_services_fields', [] ),
        'location' => [
            Location::where( 'post_type', 'clinic_services' )
        ]
    ] );
} );

add_filter( 'london_clinic_services_fields', function ( $fields ) {

    $fields[] = Tab::make( 'Images', wp_unique_id() )->placement( 'left' );
    $fields[] = Image::make( 'Service icon', 'service_icon' )->instructions( 'Add service icon' )->returnFormat( 'id' )->previewSize( 'medium' )->required();
    $fields[] = Image::make( 'Service image', 'service_image' )->instructions( 'Add service image' )->returnFormat( 'id' )->previewSize( 'medium' )->required();
    $fields[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' );
    $fields[] = Text::make( 'Service title', 'service_title' )->instructions( 'Add service title. Leave variable <strong>%title%</strong> to inherit service post title' )->required()->defaultValue( '%title%' );
    $fields[] = Textarea::make( 'Description', 'service_description' )->newLines( 'br' )->instructions( 'Add short service description' )->rows( 2 )->required();
    $fields[] = Link::make( 'Service link', 'service_link' )->instructions( 'Add custom service link. Leave blank to link the service page' )->returnFormat( 'array' );

    return $fields;
} );