<?php

use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Fields\Url;
use Extended\ACF\Location;

add_action( 'acf/init', function () {
    register_extended_field_group( [
        'title'    => 'Clinic Locations details',
        'style'    => 'default',
        'fields'   => apply_filters( 'london_clinic_locations_fields', [] ),
        'location' => [
            Location::where( 'post_type', 'clinic_locations' )
        ]
    ] );
} );

add_filter( 'london_clinic_locations_fields', function ( $fields ) {
    $fields[] = Url::make( 'Location Google Map URL', 'map' )->instructions( 'Add link to the location on Google Map' )->required();
    $fields[] = Image::make( 'Location Map Image', 'image' )->instructions( 'Add location map image' )->returnFormat( 'id' )->previewSize( 'medium' )->required();
    $fields[] = Textarea::make( 'Location Address', 'address' )->newLines( 'br' )->instructions( 'Add location full address' )->rows( 3 )->required();
    $fields[] = Text::make( 'Location Phone', 'phone' )->instructions( 'Add location phone number' );
    return $fields;
} );