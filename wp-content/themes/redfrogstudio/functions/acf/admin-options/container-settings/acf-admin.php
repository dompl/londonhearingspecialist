<?php
/**
 * Components Tab
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Checkbox;
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\TrueFalse;

add_filter( 'ks_admin_theme_options_general_settings', function ( $fields ) {

    $fields[] = Tab::make( 'Container settings', wp_unique_id() )->placement( 'left' );

    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_container_settings</strong>' );

    $fields[] = TrueFalse::make( 'Allow component scheduling', 'ks_container_schedule' )
        ->instructions( 'Select to allow container scheduling.' )
        ->defaultValue( false )
        ->stylisedUi();

    //   functions/acf/container/default/settings.php
    $container_settings_data = ks_container_settings_data();

    $fields[] = Select::make( 'Container spacings', 'ks_container_spacings' )
        ->instructions( 'Select container spacings' )
        ->choices( $container_settings_data['spacings']['sizes'] )
        ->defaultValue( 'default' )
        ->allowNull();

    $fields[] = Checkbox::make( 'Container widths', 'ks_container_widths' )
        ->instructions( 'Select container widths' )
        ->choices( $container_settings_data['widths']['sizes'] )
        ->defaultValue( 'xxl' );

    //   Container background
    $fields[] = Checkbox::make( 'Allow container background settings', 'ks_container_background' )
        ->instructions( 'Select backgrounds allowed for the container settings' )
        ->choices( [
            'color'    => 'Color <div style="font-size:12px; margin-left:24px; font-weight:bold">This will require colors to be added. Please hook to apply_filters(\'_ks_container_background_colors\', [])</div>',
            'image'    => 'Image (Currently not available)',
            'parallax' => 'Image Parallax (Currently not available)'
        ] )
        ->returnFormat( 'value' ) // array, label or value (default)
        ->layout( 'vertical' );

    $fields = array_merge( $fields, apply_filters( 'ks_admin_theme_options_container_settings', [] ) );

    return $fields;

}, 40 );