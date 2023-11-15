<?php
/**
 * Components Tab
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Email;
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Number;
use Extended\ACF\Fields\Password;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Fields\TrueFalse;
use Extended\ACF\Fields\Url;

add_filter( 'ks_admin_theme_options_general_settings', function ( $fields ) {

    $fields[] = Tab::make( 'General Settings', wp_unique_id() )->placement( 'left' ); // Placement can be top or left

    $fields[] = Accordion::make( 'Main images & Icons', wp_unique_id() )->instructions( 'Various images and icons places across the website.' );

    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_logo_image_settings</strong>' );

    $fields[] = Image::make( 'Favicon image', 'ks_favicon' )->instructions( 'Add website favicon. Please note, the favicon should be in ration 1:1, for example 100px x 100px' )
        ->returnFormat( 'id' )
        ->previewSize( 'mini-thumbnail' ); // Thumbnail, medium or large

    // Define the field for website logo
    $fields[] = Image::make( 'Logo image', 'ks_logo_image' )
        ->instructions( 'Add main logo for the website' )
        ->library( 'all' )
        ->returnFormat( 'array' )
        ->previewSize( 'thumbnail' ); // Thumbnail, medium or large

    $fields = array_merge( $fields, apply_filters( 'ks_admin_theme_options_logo_image_settings', [] ) );

    $fields[] = Accordion::make( 'Navigation settings', wp_unique_id() )->instructions( 'General navigation settings' );

    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_navigation_settings</strong>' );

    $fields[] = Group::make( 'Navigation settings', 'ks_nav' )
        ->instructions( 'Setting for the main navigation' )
        ->fields( [
            Number::make( 'Breakpoint', 'bp' )->instructions( 'Navigation breakpoint for the navigation' )->required()->defaultValue( 680 )->min( 320 )->max( 1600 )->step( 1 ),
            Select::make( 'Position' )
                ->instructions( 'Navigation position', 'pos' )
                ->choices( [
                    'left'   => 'Left',
                    'center' => 'Center',
                    'right'  => 'Right'
                ] )
                ->defaultValue( 'left' )
                ->returnFormat( 'value' ) // array, label or value (default)
                ->required(),
            Number::make( 'Show duration', 's' )->instructions( 'Navigation show duration' )->required()->defaultValue( 100 )->min( 0 )->max( 500 )->step( 10 ),
            Number::make( 'Hide duration', 'h' )->instructions( 'Navigation hide duration' )->required()->defaultValue( 100 )->min( 0 )->max( 500 )->step( 10 ),
            Number::make( 'Hide delay duration', 'hd' )->instructions( 'Navigation hide delay' )->required()->defaultValue( 100 )->min( 0 )->max( 500 )->step( 10 ),
            Text::make( 'Toggle button', 't' )->instructions( 'Use font awesome' )->required()->defaultValue( 'bars-light' )
        ] )
        ->layout( 'row' );

    $fields = array_merge( $fields, apply_filters( 'ks_admin_theme_options_navigation_settings', [] ) );

    $fields[] = Accordion::make( 'Business info', wp_unique_id() )->instructions( 'General business information' );

    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_business_info_settings</strong>' );

    $fields[] = Email::make( "Global website email address", 'ks_email_address' )->instructions( "Add website general email address. It can be then used across the website as a shortcode <strong>[email url=true]</strong>" );

    // Define the field for website's telephone number
    $fields[] = Group::make( 'Global telephone numer', 'ks_tel_number' )->instructions( "Add website general website telephone number. It can be then used across the website as a shortcode <strong>[telephone dial=true]</strong>" )
        ->fields( [
            Text::make( 'Visible number', 'visible' ),
            Text::make( 'Dial number', 'dial' )
        ] )
        ->layout( 'table' );

    // Define the field for postal address
    $fields[] = Textarea::make( 'Postal Address', 'ks_postal_address' )
        ->instructions( "Add postal address <strong>[address]</strong>" )
        ->newLines( 'br' )
        ->rows( 3 );

    $fields[] = Group::make( 'Social Media URl\'s', 'ks_social_media' )
        ->instructions( 'Add URL\'s for the social media platforms' )
        ->fields( [
            Url::make( 'Facebook' ),
            Url::make( 'Twitter' ),
            Url::make( 'Youtube' ),
            Url::make( 'LinkedIn' ),
            Url::make( 'Instagram' )
        ] )
        ->layout( 'row' );

    $fields = array_merge( $fields, apply_filters( 'ks_admin_theme_options_business_info_settings', [] ) );

    $fields[] = Accordion::make( '404 Page settings', wp_unique_id() )->instructions( 'Settings for Error 404 page.' );

    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_404_settings</strong>' );

    $fields[] = Group::make( '404 image', 'image_404' )
        ->instructions( 'Add image for the 404 Error page' )
        ->fields( [
            Image::make( 'Image', 'image' )
                ->mimeTypes( ['jpg', 'jpeg', 'png'] )
                ->returnFormat( 'id' )
                ->previewSize( 'mini-thumbnail' ),
            Text::make( 'Image sizes', 'size' )
        ] )
        ->layout( 'row' );
    $fields[] = Group::make( '404 image', 'text_404' )
        ->instructions( 'Add text for your 404 page' )
        ->fields( [
            Text::make( 'Text under the image', 'text' ),
            Textarea::make( 'Description under the image', 'description' )->rows( 3 ),
            Link::make( 'Link under the image', 'link' )->returnFormat( 'array' )
        ] )
        ->layout( 'row' );

    $fields = array_merge( $fields, apply_filters( 'ks_admin_theme_options_404_settings', [] ) );

    $fields[] = Accordion::make( 'Developer settings', wp_unique_id() )->instructions( 'Developer settings (advanced theme settings)' );

    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_developer_settings</strong>' );

    $fields[] = TrueFalse::make( 'Disable transient', 'ks_disable_transients' )
        ->instructions( 'Set to Yes to disable all website transient' )
        ->defaultValue( false )
        ->stylisedUi();

    $fields = array_merge( $fields, apply_filters( 'ks_admin_theme_options_developer_settings', [] ) );

    $fields[]            = Accordion::make( 'Marker IO & ClicUp Email address', wp_unique_id() )->instructions( 'Settings for the marker IO' );
    $fields['marker_io'] = Text::make( 'Marker IO ID', 'ks_marker_io' )->instructions( 'Add maker IO ID' );

    $fields[]            = Accordion::make( 'SMTP Settings', wp_unique_id() )->instructions( 'Setting for SMTP. Required valid email address setup to work.' );
    $fields[]            = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_smtp_settings</strong>' );
    $fields['smtp_smtp'] = Text::make( 'SMTP Address', 'ks_smtp_smtp' )->instructions( 'Your SMTP server address' );
    if ( defined( 'RFS_MAIL_SERVER' ) && RFS_MAIL_SERVER ) {
        $fields['smtp_smtp']->defaultValue( RFS_MAIL_SERVER )->readonly();
    }

    $fields['ks_smtp_encryption'] = Select::make( 'Encryption', 'ks_smtp_encryption' )->instructions( "Encryption method ('tls' or 'ssl')" )->choices( ['tls' => 'TLS', 'ssl' => 'SSL'] );
    if ( defined( 'RFS_MAIL_ENCRYPTION' ) && in_array( RFS_MAIL_ENCRYPTION, ['tls', 'ssl'] ) ) {
        $fields['ks_smtp_encryption']->defaultValue( RFS_MAIL_ENCRYPTION )->readonly();
    }

    $fields['ks_smtp_email'] = Email::make( 'Email', 'ks_smtp_email' )->instructions( 'The email address from which the emails will be sent' );
    if ( defined( 'RFS_MAIL_FROM' ) && is_email( RFS_MAIL_FROM ) ) {
        $fields['ks_smtp_email']->defaultValue( RFS_MAIL_FROM )->readonly();
    }

    $fields['ks_smtp_user'] = Text::make( 'Username', 'ks_smtp_user' )->instructions( 'SMTP username' );
    if ( defined( 'RFS_MAIL_USER' ) && RFS_MAIL_USER ) {
        $fields['ks_smtp_user']->defaultValue( RFS_MAIL_USER )->readonly();
    }

    $fields['ks_smtp_password'] = Password::make( 'Password', 'ks_smtp_password' )->instructions( 'Add Password for the SMTP server' );
    if ( defined( 'RFS_MAIL_PASSWORD' ) && RFS_MAIL_PASSWORD ) {
        $fields['ks_smtp_password']->readonly();
    }

    $fields = array_merge( $fields, apply_filters( 'ks_admin_theme_options_smtp_settings', [] ) );

    $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();

    return $fields;

}, 10 );