<?php
/**
 * Components Tab
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\TrueFalse;

add_filter( 'ks_admin_theme_options_general_settings', function ( $fields ) {
    // Define the footer settings tab
    $fields[] = Tab::make( 'Theme Addons', wp_unique_id() )->placement( 'left' );
    $fields[] = Accordion::make( 'Hook', wp_unique_id() );
    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_addons</strong>' );
    $fields[] = Accordion::make( 'Blog settings', wp_unique_id() )->instructions( 'Additional settings for website blog' );
    $fields[] = TrueFalse::make( 'Enable blog functionality', 'ks_show_blog' )
        ->instructions( 'Select whether to enable or disable blog functionality' )
        ->defaultValue( false )
        ->stylisedUi();

    //   Google Stars Rating
    $message  = file_get_contents( __DIR__ . '/google-rating-usage-guide-exclude.php' );
    $fields[] = Accordion::make( 'Google Stars Rating', wp_unique_id() )->instructions( 'Display Google Star rating using Google API' );
    $fields[] = Message::make( 'GoogleRating Class Usage Guide' )->message( $message );
    $fields[] = Text::make( 'Google API', 'ks_google_api_key' )->instructions( 'Obtain Google API Key: You need a Google API key to access Google Places API, which provides reviews. If you don\'t have one, you can get it from the <a href="https://console.cloud.google.com/" target="_blank">Google Cloud Platform Console</a>.' );
    $fields[] = Text::make( 'Gogole Place ID', 'ks_google_place_id' )->instructions( 'Get Place ID: You\'ll need the Place ID of your business to fetch the reviews. You can find this ID using the <a href="https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder" target="_blank">Place ID Finder</a>.' );
    $fields   = array_merge( $fields, apply_filters( 'ks_admin_theme_options_addons', [] ) );
    $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();
    return $fields;

}, 110 );