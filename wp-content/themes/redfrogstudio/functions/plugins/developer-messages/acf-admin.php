<?php
/**
 * Admin settings for the ACF
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Fields\Url;
add_filter( 'ks_admin_theme_options_smtp_settings', function ( $fields ) {
    $fields[] = Accordion::make( 'Development email information', wp_unique_id() )->instructions( 'Information for the development process.' );
    $fields[] = Text::make( 'Email addresses', 'ks_dev_message_emails' )->instructions( 'Add comma separated email addresses with colon separated name, like so <strong>info@redfrogstudio.co.uk:Dom</strong>' );
    $fields[] = Url::make( 'Staging Url', 'ks_dev_message_staging_url' )->instructions( 'Add staging website URL' )->required();
    $fields[] = Url::make( 'Production Url', 'ks_dev_message_production_url' )->instructions( 'Add production URL' )->required();
    $fields[] = Textarea::make( 'Custom developer message', 'ks_dev_message_message' )->instructions( 'Add development messages. Each message per one line' )->newLines( 'br' )->rows( 4 );
    return $fields;

} );