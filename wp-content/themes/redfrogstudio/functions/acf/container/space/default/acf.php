<?php
/**
 * ACF Fields for the container spaces
 */

// Exit if accessed directly
if (  !  defined( 'ABSPATH' ) ) {
    exit;
}

// Import required classes
use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Select;
use Kickstarter\MyHelpers;

function ks_default_container_spaces() {
    return [
        'sm'  => 'Small',
        'md'  => 'Medium',
        'lg'  => 'Large',
        'xl'  => 'Extra Large',
        'xxl' => 'X Extra Large'
    ];
}

// Add container space ACF fields
add_filter( '_ks_theme_acf_container_fields', function ( $fields, $helpers, $data, $use_container, $row ) {

    // Get theme data
    $ThemeData = MyHelpers::getThemeData();

    // Check if container spacings are set and should be used
    if (  !  isset( $ThemeData['ks_container_spacings'] ) || $ThemeData['ks_container_spacings'] != 'default' || !  $use_container || apply_filters( '_ks_container_spaces_use', true, $data, $helpers, $row ) == false ) {
        return $fields;
    }

    // Available choices for space sizes
    $c = ks_default_container_spaces();

    $choices = apply_filters( '_ks_container_spacings_choices', $c, $helpers, $data, $use_container );

    $conditional_logic = [
        ConditionalLogic::where( 'f', '==', '' ),
        ConditionalLogic::where( 'f', '!=', '' )->and( 'p', '==', 'out' )
    ];

    // ACF fields for space settings
    $spaces[] = Select::make( 'Top space', 't' )
        ->instructions( 'Select top space for the container' )
        ->choices( $choices )
        ->returnFormat( 'value' )
        ->allowNull()
        ->conditionalLogic( $conditional_logic );

    $spaces[] = Select::make( 'Bottom space', 'b' )
        ->instructions( 'Select bottom space for the container' )
        ->choices( $choices )
        ->returnFormat( 'value' )
        ->allowNull()
        ->conditionalLogic( $conditional_logic );

    $spaces[] = Select::make( 'Space position', 'p' )
        ->instructions( 'Select container space position' )
        ->choices( [
            'out'  => 'Outside container',
            'in'   => 'Inside container',
            'both' => 'Inside & outside container'
        ] )
        ->returnFormat( 'value' )
        ->conditionalLogic( $conditional_logic );

    // Custom choices for fixed heights
    $fixed = apply_filters( '_ks_container_settings_fixed_heights', ['full' => 'Full screen', 'half' => 'Half screen'] );

    $spaces[] = Select::make( 'Fixed height', 'f' )
        ->instructions( 'Set container fixed height (other spaces will be ignored)' )
        ->choices( $fixed )
        ->returnFormat( 'value' )
        ->AllowNull();

    // Add the accordion and group fields for container spaces
    $fields[] = Accordion::make( 'Container spaces', wp_unique_id() )->instructions( 'Settings for the container spaces' );
    $fields[] = Group::make( '', 'space' )
        ->fields( $spaces )
        ->layout( 'table' );

    return $fields;

}, 10, 5 );