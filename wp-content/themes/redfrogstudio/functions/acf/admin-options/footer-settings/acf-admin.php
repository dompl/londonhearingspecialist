<?php
/**
 * Footer settings Tab
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Tab;

add_filter( 'ks_admin_theme_options_general_settings', function ( $fields ) {
    // Define the footer settings tab
    $fields[] = Tab::make( 'Footer settings', wp_unique_id() )->placement( 'left' );
    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_footer_settings</strong>' );
    return array_merge( $fields, apply_filters( 'ks_admin_theme_options_footer_settings', [] ) );

}, 30 );