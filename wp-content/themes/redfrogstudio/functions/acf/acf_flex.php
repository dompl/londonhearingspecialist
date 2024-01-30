<?php
/**
 * comment
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\DateTimePicker;
use Extended\ACF\Fields\FlexibleContent;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\TrueFalse;
use Extended\ACF\Location;
use Kickstarter\AcfHelpers;
use Kickstarter\MyHelpers;

/**
 * @param $field
 * @param array $data
 */
function get_component( $field = false, $data = [], $child = false ) {

    if ( $field == false ) {
        return;
    }

    $post_id   = $data['post_id'];
    $index     = $data['index'];
    $component = $data['component'];
    $row       = $data['row'];
    $child     = $child ? '_' . $child : '';

    $meta = "{$component}_{$index}_{$field}{$child}";

    return get_post_meta( $post_id, $meta, true );

}

/** Init default flex repeater */

add_action( 'acf/init', function (): void {

    $helpers = MyHelpers::getInstance();;
    $acf     = AcfHelpers::getInstance();
    $data    = MyHelpers::getThemeData();

    $layouts = apply_filters( 'ks_acf_layout', [], $data, $helpers, $acf );

    // Check if the layout is available for selection. If not unset it from the array.

    if (  !  empty( $layouts ) ) {
        foreach ( $layouts as $key => $obj ) {
            if (  !  is_int( $key ) && !  in_array( $key, (array) MyHelpers::getThemeData( 'select_components' ) ) ) {
                unset( $layouts[$key] );
            }
        }
    }

    $new_location = apply_filters( '_ks_acf_layout_locations', ['page', 'post'] );

    if (  !  empty( $new_location ) ) {
        foreach ( $new_location as $location ) {
            $locations[] = Location::where( 'post_type', $location );
        }
    }

    $fields = [];

    $fields = array_merge( $fields, apply_filters( '_ks_fields_before_components', [] ) );

    $component_message = 'Add page components. Components are custom developed by the website developer. For more components please <a href="mailto:info@redfrogstudio.co.uk" target="_blank" rel="noopener noreferrer">contact us.</a>';

    // Order the fields alphabetically.
    usort( $layouts, function ( $a, $b ) {
        $reflectorA = new ReflectionClass( $a );
        $propertyA  = $reflectorA->getProperty( 'settings' );
        $propertyA->setAccessible( true );
        $aSettings  = $propertyA->getValue( $a );
        $reflectorB = new ReflectionClass( $b );
        $propertyB  = $reflectorB->getProperty( 'settings' );
        $propertyB->setAccessible( true );
        $bSettings = $propertyB->getValue( $b );
        return strcmp( $aSettings['label'], $bSettings['label'] );
    } );

    $fields[] = FlexibleContent::make( 'Page components', 'components' )
        ->instructions( apply_filters( '_ks_components_message', $component_message ) )
        ->buttonLabel( 'Add a page component' )
        ->layouts( $layouts );

    $fields = array_merge( $fields, apply_filters( '_ks_fields_after_components', [] ) );
    if (  !  empty( $layouts ) && !  empty( $locations ) ) {
        register_extended_field_group( [
            'title'    => 'Components',
            'fields'   => $fields,
            'location' => $locations
        ] );
    }
} );

add_action( 'admin_init', function () {

    $remove = apply_filters( '_ks_remove_post_editor', ['page', 'post'] );

    if (  !  empty( $remove ) ) {

        foreach ( $remove as $post_type ) {

            remove_post_type_support( $post_type, 'editor' );

        }

    }

} );

// Define your layout creation function and apply the '_ks_theme_acf_fields' filter
/**
 * @param $layout_label
 * @param $layout_id
 * @param array $fields
 * @param $layout
 * @return null
 */
function ks_layout_make( $layout_label = "Layout", $layout_id = null, $fields = [], $layout = 'block', $use_container = true, $row = null, $data = [] ) {

    $helpers   = MyHelpers::getInstance();
    $ThemeData = MyHelpers::getThemeData();
    if ( empty( $fields ) || $layout_id == null ) {
        return [];
    }
    $row = $layout_id;
    // Here, we apply the second filter, which allows you to add fields specifically after 'container_settings'

    $fields = apply_filters( '_ks_theme_acf_fields_before', $fields );

    // Main hook for the fields
    $fields = apply_filters( '_ks_theme_acf_fields', $fields );

    // Container fields hook
    if ( $use_container ) {
        $fields[] = Tab::make( 'Container Settings', wp_unique_id() )->placement( 'left' );
        $fields   = apply_filters( '_ks_theme_acf_container_fields', $fields, $helpers, $data, $use_container, $row );
    }

    //  Container scheduling
    if ( isset( $ThemeData['ks_container_schedule'] ) && $ThemeData['ks_container_schedule'] == true && function_exists( 'ks_component_scheduling' ) ) {

        $fields[] = Tab::make( 'Component schedule', wp_unique_id() )->placement( 'left' );

        $fields[] = DateTimePicker::make( 'Show from', 'component_from' )->instructions( 'Show this component from selected date and time' )->displayFormat( 'd-m-Y H:i:s' )->returnFormat( 'Y-m-d H:i:s' );

        $fields[] = DateTimePicker::make( 'Show till', 'component_to' )->instructions( 'Show this component to selected date and time' )->displayFormat( 'd-m-Y H:i:s' )->returnFormat( 'Y-m-d H:i:s' );

        $fields[] = TrueFalse::make( 'Show for admins', 'component_to_admin' )->instructions( 'Set Yes if you would like to show this container to the website administrators (when logged in)' )->defaultValue( false )->stylisedUi();
    }

    return Layout::make( $layout_label, $layout_id )
        ->layout( $layout )
        ->fields( $fields );

}