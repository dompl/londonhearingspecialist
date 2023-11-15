<?php
/**
 * comment
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\ButtonGroup;
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Number;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Textarea;

add_filter( 'ks_acf_layout', function ( $layouts, $data, $helpers, $acf ) {

    $fields       = [];
    $layout_label = 'Images & Text';
    $layout_id    = basename( __DIR__ );

    $fields[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' );;

    $fields[] = ButtonGroup::make( 'Select Layout', 'layout' )
        ->instructions( 'Select layout for component section' )
        ->choices( [
            'image'      => 'Simple image',
            'image_text' => 'Two columns image with text'
        ] )
        ->defaultValue( 'image' )
        ->returnFormat( 'value' )
        ->required();

    $fields[] = Textarea::make( 'Description above', 'above' )
        ->instructions( 'Add description above the image' )
        ->newLines( 'br' )
        ->conditionalLogic( [ConditionalLogic::where( 'layout', '==', 'image' )] )
        ->rows( 4 );

    $fields[] = Group::make( 'Image settings', 'sm' )
        ->instructions( 'Add image and image width for the layout' )
        ->fields( [
            Image::make( 'Image', 'i' )->previewSize( 'mini-thumbnail' )->required(),
            Number::make( 'Image height', 'h' )->min( 100 )->max( 1000 )
        ] )
        ->conditionalLogic( [ConditionalLogic::where( 'layout', '==', 'image' )] )
        ->layout( 'row' );

    $fields[] = Textarea::make( 'Description below', 'below' )
        ->instructions( 'Add description below the image' )
        ->newLines( 'br' )
        ->conditionalLogic( [ConditionalLogic::where( 'layout', '==', 'image' )] )
        ->rows( 4 );

    $g = [
        Image::make( 'Image', 'i' )->previewSize( 'mini-thumbnail' ),
        $acf::AcfFields( 'zoom' ),
        Number::make( 'Image height', 'h' )->min( 100 )->max( 1000 ),
        Textarea::make( 'Text', 't' )->rows( 3 ),
        ButtonGroup::make( "Text position", 'p' )->choices( ['top' => 'Top', 'bot' => 'Bottom'] )
    ];

    $fields[] = Group::make( 'Left column', 'left' )->fields( $g )->layout( 'table' )->conditionalLogic( [ConditionalLogic::where( 'layout', '==', 'image_text' )] );
    $fields[] = Group::make( 'Right column', 'right' )->fields( $g )->layout( 'table' )->conditionalLogic( [ConditionalLogic::where( 'layout', '==', 'image_text' )] );

    $layouts[$layout_id] = ks_layout_make( layout_label: $layout_label, layout_id: $layout_id, fields: $fields, use_container: apply_filters( '_ks_component_image_text_gallery_use_container', true ), data: $data );

    return $layouts;

}, 10, 4 );