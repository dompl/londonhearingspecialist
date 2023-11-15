<?php
/**
 * ACF Fields for the container
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Select;
use Kickstarter\MyHelpers;

// Add container widths to the container settings
add_filter( '_ks_theme_acf_container_fields', function ( $fields, $helpers, $data, $use_container, $row ) {

    $ThemeData = MyHelpers::getThemeData();

    if (  !  isset( $ThemeData['ks_container_background'] ) || !  in_array( 'color', $ThemeData['ks_container_background'] ) || !  $use_container || apply_filters( '_ks_container_background_color_use', true, $data, $helpers, $row ) == false ) {
        return $fields;
    }

    // use Extended\ACF\Fields\Accordion;
    $fields[] = Accordion::make( 'Container background', wp_unique_id() )->instructions( 'Settings for container background' );
    $colors   = ks_theme_custom_colors_array();

    if (  !  empty( $colors ) ) {
        if ( MyHelpers::isAdmin() ) {
            $fields[] = Message::make( 'Add colors', wp_unique_id() )->message( ' To add more colors please use filter <strong>add_filter(\'_ks_container_background_colors\', function( (array) $colors ){});</strong>' );
        }
        asort( $colors );
        $fields[] = Select::make( 'Container background colour', 'container_bcg_color' )->instructions( 'Select the background colour for the component container' )->choices( $colors )->allowNull();
    } else {
        $message_addon = MyHelpers::isAdmin() ? ' To add more colors please use filter <strong>add_filter(\'_ks_container_background_colors\', function( (array) $colors ){});</strong>' : '';
        $fields[]      = Message::make( 'Colors not set', wp_unique_id() )->message( "Currently your theme has no colors set.{$message_addon}" );
    }

    return $fields;

}, 30, 5 );