<?php
/**
 * Components Tab
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\TrueFalse;

add_filter( 'ks_admin_theme_options_general_settings', function ( $fields ) {

    $fields[] = Tab::make( 'SEO', wp_unique_id() )->placement( 'left' ); // Placement can be top or left

    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_seo_settings</strong>' );

    $fields[] = TrueFalse::make( 'Activate Basic SEO Plugin', 'ks_seo_is_active' )
        ->instructions( 'Set to Yes if you want to active <strong>basic</strong> SEO functionalities.' )
        ->defaultValue( false )
        ->stylisedUi();

    $fields[] = TrueFalse::make( 'Activate Advanced SEO Plugin', 'ks_seo_advanced_is_active' )
        ->instructions( 'Set to Yes if you want to active <strong>advanced</strong> SEO functionalities.' )
        ->defaultValue( false )
        ->stylisedUi()
        ->conditionalLogic( [
            ConditionalLogic::where( 'ks_seo_is_active', '==', '1' ) // available operators are ==, !=, >, <, ==pattern, ==contains, ==empty, !=empty
        ] );

    $fields[] = Accordion::make( 'Endpoint' )->endpoint();

    return $fields;

}, 60 );