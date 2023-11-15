<?php
/**
 * Components Tab
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Checkbox;
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Tab;

add_filter( 'ks_admin_theme_options_general_settings', function ( $fields ) {

    $choices = apply_filters( '_ks_theme_add_components_choices', [] );

    $fields[] = Tab::make( 'Components', wp_unique_id() )->placement( 'left' );

    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_components_settings</strong>' );

    $fields[] = Checkbox::make( 'Select components', 'select_components' )
        ->instructions( 'Select pre-build components in this theme' )
        ->choices( $choices )
        ->returnFormat( 'value' );

    $fields = array_merge( $fields, apply_filters( 'ks_admin_theme_options_components_settings', [] ) );

    return $fields;

}, 50 );