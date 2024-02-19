<?php

use Extended\ACF\Fields\Email;
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Fields\Url;
use Extended\ACF\Fields\WysiwygEditor;
use Extended\ACF\Location;

add_filter( '_ks_acf_layout_locations', function ( $locations ) {
    $locations[] = 'clinic_locations';
    return $locations;
} );

add_filter( 'acf/fields/wysiwyg/toolbars', function ( $toolbars ) {

    $toolbars['Clinic Location Addon']    = [];
    $toolbars['Clinic Location Addon'][1] = ['bold', 'link', 'bullist', 'removeformat'];
    return $toolbars;
} );

add_action( 'acf/init', function () {
    register_extended_field_group( [
        'title'    => 'Clinic details',
        'style'    => 'default',
        'fields'   => apply_filters( 'london_clinic_locations_fields', [] ),
        'location' => [
            Location::where( 'post_type', 'clinic_locations' )
        ]
    ] );
} );

add_filter( 'london_clinic_locations_fields', function ( $fields ) {
    $fields[] = Tab::make( 'Location details', wp_unique_id() )->placement( 'left' );
    $fields[] = Url::make( 'Location Google Map URL', 'map' )->instructions( 'Add link to the location on Google Map' )->required();
    $fields[] = Text::make( 'Location Google Map iFrame', 'iframe' )->instructions( 'Add iFrame code for the location' )->required();
    $fields[] = Image::make( 'Location Map Image', 'image' )->instructions( 'Add location map image' )->returnFormat( 'id' )->previewSize( 'medium' )->required();
    $fields[] = Tab::make( 'Information', wp_unique_id() )->placement( 'left' );

    $fields[] = Textarea::make( 'Location Address', 'address' )->newLines( 'br' )->instructions( 'Add location full postal address' )->rows( 3 )->required();
    $fields[] = Select::make( 'Location area', 'area' )->instructions( 'Select location area' )->choices( ['london' => 'London', 'hertfordshire' => 'Hertfordshire'] )->defaultValue( '' )->stylisedUi()->required();
    $fields[] = Text::make( 'Location Phone', 'phone' )->instructions( 'Add location phone number' );
    $fields[] = Email::make( 'Location Email', 'email' )->instructions( 'Add location email address' );
    $fields[] = Url::make( 'Location Facebook page', 'facebook' )->instructions( 'Add location Facebook page' );
    $fields[] = Url::make( 'Location Twitter URL', 'twitter' )->instructions( 'Add location Twitter handle' );
    $fields[] = Tab::make( 'Opening Hours', wp_unique_id() )->placement( 'left' );
    $fields[] = Repeater::make( 'Opening hours', 'hours' )->instructions( 'Add opening hours for the location' )->fields( [
        Text::make( 'Day', 'd' )->instructions( 'Week day' )->required(),
        Text::make( 'Times', 't' )->instructions( 'Opening times' )->required()
    ] )->collapsed( '' )->buttonLabel( 'Add Data' )->layout( 'table' );
    $fields[] = Tab::make( 'Directions', wp_unique_id() )->placement( 'left' );
    $fields[] = Group::make( 'Clinic directions', 'dirs' )->instructions( 'Add clinic directions' )->fields( [
        Textarea::make( 'Overground', 'overground' )->instructions( 'Add overground directions' )->rows( 2 ),
        Textarea::make( 'Underground', 'underground' )->instructions( 'Add underground directions' )->rows( 2 ),
        Textarea::make( 'Bus', 'bus' )->instructions( 'Add bus directions' )->rows( 2 )->newLines( 'br' ),
        Textarea::make( 'Train', 'train' )->instructions( 'Add train directions' )->rows( 2 )->newLines( 'br' ),
        Textarea::make( 'Parking', 'parking' )->instructions( 'Add train directions' )->rows( 2 )->newLines( 'br' )
    ] )->layout( 'row' );
    $fields[] = Tab::make( 'Additional description', wp_unique_id() )->placement( 'left' );
    $fields[] = WysiwygEditor::make( 'Additional description', 'addon' )->instructions( 'Add additional description for the location' )->mediaUpload( false )->tabs( 'all' )->toolbar( 'clinic_location_addon' );
    return $fields;
} );