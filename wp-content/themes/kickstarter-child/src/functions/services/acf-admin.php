<?php
use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Fields\TrueFalse;
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

    $fields[] = Tab::make( 'Settings', wp_unique_id() )->placement( 'left' );

    $fields[] = TrueFalse::make( 'Hide in listing', 'include' )->instructions( 'Check this box if you want to hide this service from the listing (Services listing Component' )->defaultValue( false )->stylisedUi(); // optional on and off text labels
    $fields[] = Tab::make( 'Images', wp_unique_id() )->placement( 'left' )->conditionalLogic( [ConditionalLogic::where( 'include', '!=', '1' )] );
    $fields[] = Image::make( 'Service icon', 'service_icon' )->instructions( 'Add service icon. Allowed mime type : SVG' )->returnFormat( 'url' )->previewSize( 'medium' )->required()->mimeTypes( ['svg'] )->conditionalLogic( [ConditionalLogic::where( 'include', '!=', '1' )] );
    $fields[] = Image::make( 'Service image', 'service_image' )->instructions( 'Add service image' )->returnFormat( 'id' )->previewSize( 'medium' )->required()->conditionalLogic( [ConditionalLogic::where( 'include', '!=', '1' )] );
    $fields[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' )->conditionalLogic( [ConditionalLogic::where( 'include', '!=', '1' )] );
    $fields[] = Text::make( 'Service title', 'service_title' )->instructions( 'Add service title. Leave variable <strong>%title%</strong> to inherit service post title' )->required()->defaultValue( '%title%' )->conditionalLogic( [ConditionalLogic::where( 'include', '!=', '1' )] );
    $fields[] = Textarea::make( 'Description', 'service_description' )->newLines( 'br' )->instructions( 'Add short service description' )->rows( 2 )->required()->conditionalLogic( [ConditionalLogic::where( 'include', '!=', '1' )] );
    $fields[] = Link::make( 'Service link', 'service_link' )->instructions( 'Add custom service link. Leave blank to link the service page' )->returnFormat( 'array' )->conditionalLogic( [ConditionalLogic::where( 'include', '!=', '1' )] );

    return $fields;

} );