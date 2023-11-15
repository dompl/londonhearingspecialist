<?php
/**
 * INformation then user clicked on the development view of the website
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Kickstarter\MyForms;
use Kickstarter\MyHelpers;

add_action( 'init', function () {

    // Early return if none of the query parameters are set
    if (  !  isset( $_GET['deview'] ) && !  isset( $_GET['unsubscribe'] ) ) {
        return;
    }
    $myForms = MyForms::getInstance();
    $url     = home_url();
    $website = get_bloginfo( 'name' );

    if ( isset( $_GET['deview'] ) ) {
        $name = base64_decode( strtr( $_GET['deview'], '-_', '+/' ), true );
        if ( $name === false ) {
            return;
        }

        $subject = "{$name} just viewed the {$website}";
        $message = "Hello, <br/> {$name} just viewed your website {$website}.<br/>URL: {$url}";
        $myForms::sendWebmasterEmail( $subject, $message );
    }

    // Handle 'unsubscribe' query parameter
    if ( isset( $_GET['unsubscribe'] ) ) {

        $name = base64_decode( strtr( $_GET['unsubscribe'], '-_', '+/' ), true ); // 'true' enables strict mode

        if ( $name === false ) {
            return; // Invalid base64 input, return early
        }

        $subject = "Unsubscribe request from {$name} [{$website}]";
        $message = "Hello, <br/> {$name} has requested to unsubscribe from website development updates on {$website}. <br/> URL: {$url}";

        $helpers   = MyHelpers::getInstance();
        $ThemeData = MyHelpers::getThemeData();

        if ( isset( $ThemeData['ks_dev_message_emails'] ) || $ThemeData['ks_dev_message_emails'] ) {

            $emailString = $ThemeData['ks_dev_message_emails'];
            $emailArray  = explode( ",", $emailString );
            $emailFound  = false;

            foreach ( $emailArray as $key => $pair ) {
                list( $email, $names ) = explode( ":", $pair );
                if ( $names === $name ) {
                    unset( $emailArray[$key] );
                    $emailFound = true;
                    break; // Remove this if you want to remove all occurrences
                }
            }

            if ( $emailFound ) {
                $newEmailString = implode( ",", $emailArray );
                update_option( 'options_ks_dev_message_emails', $newEmailString, false );
                $message .= "\n Email removed from the database";
                $myForms::sendWebmasterEmail( $subject, $message );
                $TransientData = get_transient( 'ks_theme_data' );
                if ( $TransientData !== false ) {
                    $TransientData['ks_dev_message_emails'] = get_option( 'options_ks_dev_message_emails', null );
                    set_transient( 'ks_theme_data', $TransientData );
                }
            }
        }
    }
}, 10 );