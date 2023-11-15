<?php
/**
 * comment
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Kickstarter\AcfHelpers;

add_filter( 'ks_acf_layout', function ( $layouts, $data, $helpers, $acf ) {

    $fields       = [];
    $layout_label = 'Dual Column Content';
    $layout_id    = basename( __DIR__ );

    $fields[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' );

    $fields[] = Text::make( 'Component title', 'title' )->instructions( 'If you would like to wrap your title into a tag, add it after | (pipe) at the end of the title, i.e. My title|h2 ' );
    $fields[] = Textarea::make( 'Description under title', 'des_t' )->newLines( 'br' )->rows( 2 );

    $fields[] = Group::make( '', 'cols' )
        ->fields( [
            Textarea::make( 'Column left content', 'l' )->instructions( 'Add text to your left column' )->newLines( 'br' ),
            Textarea::make( 'Column left content', 'r' )->instructions( 'Add text to your right column' )->newLines( 'br' )
        ] )
        ->layout( 'table' );

    $fields[] = Textarea::make( 'Description under content columns', 'des_b' )->newLines( 'br' )->rows( 2 );

    if ( apply_filters( '_ks_component_fields_two_columns_button_use', true ) ) {
        $fields = AcfHelpers::AcfButtonFields( $fields );
    }

    $layouts[$layout_id] = ks_layout_make( layout_label: $layout_label, layout_id: $layout_id, fields: $fields, use_container: apply_filters( '_ks_component_fields_two_columns_container_use', true ), data: $data );

    return $layouts;

}, 10, 4 );