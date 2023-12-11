<?php
/**
 * Footer settings Tab
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Tab;

add_filter( 'ks_admin_theme_options_general_settings', function ( $fields ) {
    // Define the footer settings tab
    $fields[] = Tab::make( 'Footer settings', wp_unique_id() )->placement( 'left' );
    $fields[] = Accordion::make( 'Hook', wp_unique_id() )->instructions( 'How to hook to the fields' );
    $fields[] = Message::make( 'Filter hook', wp_unique_id( 'How to hook to the footer settings.' ) )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_footer_settings</strong>' );
    $fields   = array_merge( $fields, apply_filters( 'ks_admin_theme_options_footer_settings', [] ) );
    $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();
    return $fields;

}, 30 );