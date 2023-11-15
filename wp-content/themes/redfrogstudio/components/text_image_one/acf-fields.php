<?php
/**
 * comment
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

use Extended\ACF\Fields\ButtonGroup;
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Kickstarter\AcfHelpers;
use Kickstarter\MyAcf;
add_filter( 'ks_acf_layout', function ( $layouts, $data, $helpers, $acf ) {

    $items   = [];
    $items[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' );
    $items[] = Text::make( 'Title Prefix', 'prefix' )->instructions( 'Add title prefix (will appear below the main title)' );
    $items[] = Text::make( 'Component title', 'title' )->instructions( 'If you would like to wrap your title into a tag, add it after | (pipe) at the end of the title, i.e. My title|h2' );
    $items[] = Text::make( 'Title suffix', 'subtitle' )->instructions( 'Add title suffix (will appear below the main title)' );

    $items[] = Tab::make( 'Column One', wp_unique_id() )->placement( 'top' ); // top or left

    $items[] = ButtonGroup::make( "Image position", 'position' )->instructions( "Set image position" )->choices( ['left' => 'Image th the left', 'right' => 'Image to the right'] )->returnFormat( 'value' )->required();

    $styles = apply_filters( '_ks_component_fields_text_image_one_styles', ['default' => 'Default'], $data, $helpers, $acf );

    if (  !  empty( $styles ) ) {

        $items[70] = Select::make( 'Component style', 'style' )
            ->instructions( 'Select component style.' )
            ->choices( $styles )
            ->defaultValue( 'default' )
            ->returnFormat( 'value' )->required();

    }

    $items[] = Group::make( 'Image', 'image' )
        ->instructions( 'Add column image' )
        ->fields( [
            Image::make( 'Image', 'image' )->instructions( 'Add column image' )->required()->previewSize( 'thumbnail' )->returnFormat( 'id' ),
            Text::make( 'Image height', 'height' )->required()->instructions( 'Add image height' )->append( 'px' ),
            $acf::AcfFields( 'zoom' )
        ] )
        ->layout( 'row' );

    $items[] = Tab::make( 'Column Two', wp_unique_id() )->placement( 'top' ); // top or left
    $items[] = Textarea::make( 'Content', 'content' )->instructions( 'Add column content' )->newLines( 'br' )->rows( 8 )->required();

    $fields = apply_filters( '_ks_component_text_image_one_acf_fields', $items, );

    if ( apply_filters( '_ks_component_fields_text_image_one_button_use', true, $data, $helpers, $acf ) ) {
        $fields = AcfHelpers::AcfButtonFields( fields: $fields, unset:apply_filters( '_ks_component_fields_text_image_one_button_unset', [], $data, $helpers, $acf ) );
    }
    return MyAcf::MakeComponent( 'Text & Image', $fields, $layouts, $settings = ['container'] );

}, 10, 4 );