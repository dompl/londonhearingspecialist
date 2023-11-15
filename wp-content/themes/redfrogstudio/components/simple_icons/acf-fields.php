<?php
/**
 * comment
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Fields\WysiwygEditor;
use Kickstarter\AcfHelpers;

add_filter( 'ks_acf_layout', function ( $layouts, $data, $helpers, $acf ) {

    $fields       = [];
    $layout_label = apply_filters( '_ks_component_simple_icons_component_name', 'Simple icons' );
    $layout_id    = basename( __DIR__ );

    $fields[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' );

    if ( apply_filters( '_ks_component_simple_icons_use_title', true ) ) {
        $fields[] = Textarea::make( 'Content title', 'title' )->instructions( 'Add title above the icons' )->newLines( 'br' )->rows( 2 );
    }
    if ( apply_filters( '_ks_component_simple_icons_use_description', true ) ) {
        $fields[] = Textarea::make( 'Description above the icons', 'prefix' )->newLines( 'br' )->rows( 2 );
    }
    $fields[] = WysiwygEditor::make( 'Sample', 'sample' )->instructions( '' )->mediaUpload( false )->tabs( 'all' )->toolbar( 'default_toolbar' )->required();

    $fields[] = Repeater::make( 'Icons', 'icons' )
        ->instructions( 'Add icons' )
        ->fields( [
            Image::make( 'Image', 'image' )->returnFormat( 'id' )->previewSize( 'thumbnail' )->required(),
            Text::make( 'Title', 'title' ),
            Textarea::make( 'Description', 'description' )->newLines( 'br' )->rows( 2 ),
            Link::make( 'Icon link', 'link' )
        ] )
        ->min( 1 )
        ->collapsed( 'title' )
        ->buttonLabel( 'Add Icon' )
        ->layout( 'table' ) // block, row or table
        ->required();

    $fields[] = Textarea::make( 'Description under the icons', 'suffix' )->newLines( 'br' )->rows( 2 );

    if ( apply_filters( '_ks_component_simple_icons_use_button', true ) ) {
        $fields = AcfHelpers::AcfButtonFields( $fields );
    }

    $layouts[$layout_id] = ks_layout_make( layout_label: $layout_label, layout_id: $layout_id, fields: $fields, use_container: apply_filters( '_ks_component_simple_icons_container_use', true ), data: $data );

    return $layouts;

}, 10, 4 );