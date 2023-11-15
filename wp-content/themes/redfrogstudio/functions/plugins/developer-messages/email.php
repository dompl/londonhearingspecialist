<?php

use Extended\ACF\Fields\Password;
use Kickstarter\MyForms;
use Kickstarter\MyHelpers;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

if ( defined( 'WP_CLI' ) && WP_CLI ) {

    /**
     * @param $args
     * @param $assoc_args
     * @return null
     */
    function SendDeveloperUpdatesEmail( $args, $assoc_args ) {

        $helpers   = MyHelpers::getInstance();
        $myForms   = MyForms::getInstance();
        $ThemeData = MyHelpers::getThemeData();

        if (  !  isset( $ThemeData['ks_dev_message_emails'] ) || !  $ThemeData['ks_dev_message_emails'] ) {

            WP_CLI::warning( "Development update email not sent. No email addresses." );

        }

        $emails            = trim( $ThemeData['ks_dev_message_emails'] );
        $website_name      = wp_strip_all_tags( get_bloginfo( 'name' ) );
        $template          = $assoc_args['template'] ?? null;
        $custom_message    = $assoc_args['message'] ?? null;
        $cli_provided_url  = $assoc_args['url'] ?? null; // New line for the URL flag
        $message_file_path = str_replace( "/build/", "/src/", get_stylesheet_directory() . '/message.txt' );

        if (  !  isset( $ThemeData["ks_dev_message_{$template}_url"] ) || !  $ThemeData["ks_dev_message_{$template}_url"] ) {
            WP_CLI::warning( "There is no website address set for the {$staging} email" );
        } else {
            $website_url = $ThemeData["ks_dev_message_{$template}_url"];
        }

        // Override the website_url if the --url flag is provided
        if ( $cli_provided_url ) {
            $website_url = $cli_provided_url;
        }

        $message = file_exists( $message_file_path ) ? file_get_contents( $message_file_path ) : "";

        if (  !  $message && isset( $ThemeData['ks_dev_message_message'] ) && $ThemeData['ks_dev_message_emails'] ) {
            $message = $ThemeData['ks_dev_message_message'];
        }

        if (  !  $message ) {
            $message .= $custom_message ? "\n" . $custom_message : null;
        }

        if ( $message == '' || !  $message ) {
            WP_CLI::warning( "Development update email not sent. No custom messages." );
            return;
        }

        $EmailData     = MyForms::devEmailServerInfo();
        $SMTP_SERVER   = $EmailData['SMTP_SERVER'];
        $SMTP_PORT     = $EmailData['SMTP_PORT'];
        $SMTP_USER     = $EmailData['SMTP_USER'];
        $SMTP_PASSWORD = $EmailData['SMTP_PASSWORD'];

        $temp_path        = get_template_directory() . "/functions/plugins/developer-messages/templates/{$template}.php";
        $template_content = file_get_contents( $temp_path );

        $emailArray = explode( ",", trim( $emails ) );

        foreach ( $emailArray as $email_info ) {
            $email = "";
            $name  = "";
            if ( strpos( $email_info, ":" ) !== false ) {
                list( $email, $name ) = explode( ":", $email_info );
            } else {
                $email = $email_info;
                // Extract the part before '@'
                $name = strstr( $email, '@', true );
                // Replace any special characters with space
                $name = preg_replace( '/[^a-zA-Z0-9\s]/', ' ', $name );
                // Capitalize each word
                $name = ucwords( $name );

                $newEmailArray[] = "{$email}:{$name}";
            }

            $formatted_message = "";
            if ( $message ) {
                $message_lines   = explode( "\n", $message );
                $message_as_list = "<ul style=\"margin:8px 0 0 10px;padding:0\">";
                foreach ( $message_lines as $line ) {
                    if ( trim( $line ) != '' ) {
                        if ( strpos( $line, "|" ) !== false ) {
                            list( $label, $url ) = explode( "|", $line );
                            $message_as_list .= "<li style=\"margin-bottom:3px;\"><a href=\"{$url}\" target=\"_blank\" rel=\"noopener noreferrer\">{$label}</a></li>";
                        } else {
                            $message_as_list .= "<li style=\"margin-bottom:3px;line-height:18px\">{$line}</li>";
                        }
                    }
                }
                $message_as_list .= "</ul>";
                $formatted_message = "<p style=\"line-height:20px; padding-bottom:0px;margin-top:20px; margin-bottom:0;\"><strong>Change log:</strong></p>{$message_as_list}";
            }

            $encoded_name   = base64_encode( $name );
            $final_template = str_replace( ["WEBSITE", "URL", "ENCODED", "NAME", "MESSAGE"], [$website_name, $website_url, $encoded_name, $name, $formatted_message], $template_content );

            $mail = new PHPMailer( true );

            try {
                $mail->SMTPDebug = 0;
                $mail->isSMTP();
                $mail->Host       = $SMTP_SERVER;
                $mail->SMTPAuth   = true;
                $mail->Username   = $SMTP_USER;
                $mail->Password   = $SMTP_PASSWORD;
                $mail->SMTPSecure = 'tls';
                $mail->Port       = $SMTP_PORT;

                $mail->setFrom( $SMTP_USER, 'Webmaster' );
                $mail->addAddress( $email, $name );
                $mail->isHTML( true );
                $mail->Subject = "{$website_name} website development update.";
                $mail->Body    = $final_template;

                $mail->send();
                file_put_contents( $message_file_path, '' );
                update_option( 'options_ks_dev_message_message', null, false );
                $TransientData = get_transient( 'ks_theme_data' );
                if ( $TransientData !== false ) {
                    $TransientData['ks_dev_message_message'] = get_option( 'options_ks_dev_message_message', null );
                    set_transient( 'ks_theme_data', $TransientData );
                }
                WP_CLI::success( "Email sent successfully to {$name} [{$email}]" );
            } catch ( Exception $e ) {
                WP_CLI::warning( "Email could not be sent. Mailer Error: {$mail->ErrorInfo}" );
            }
        }
    }

    WP_CLI::add_command( 'send_developer_updates_emails', 'SendDeveloperUpdatesEmail' );
}

add_action( 'acf/save_post', function () {

    global $current_screen;

    if ( strpos( $current_screen->id, 'admin-options' ) !== false ) {

        $emails        = get_option( 'options_ks_dev_message_emails' );
        $emailArray    = explode( ",", trim( $emails ) );
        $newEmailArray = [];

        foreach ( $emailArray as $email_info ) {
            $email = "";
            $name  = "";
            if ( strpos( $email_info, ":" ) !== false ) {
                list( $email, $name ) = explode( ":", $email_info );
            } else {
                $email = $email_info;
                // Extract the part before '@'
                $name = strstr( $email, '@', true );
                // Replace any special characters with space
                $name = preg_replace( '/[^a-zA-Z0-9\s]/', ' ', $name );
                // Capitalize each word
                $name = ucwords( $name );
            }

            $newEmailArray[] = "{$email}:{$name}";
        }

        $newEmailString = implode( ",", $newEmailArray );
        update_option( 'options_ks_dev_message_emails', $newEmailString, false );
        $TransientData = get_transient( 'ks_theme_data' );
        if ( $TransientData !== false ) {
            $TransientData['ks_dev_message_emails'] = $newEmailString;
            set_transient( 'ks_theme_data', $TransientData );
        }
    }
} );

add_action( 'ks_after_body', function () {

    if ( isset( $_GET['unsubscribe'] ) ) {

        $TransientData = get_transient( 'ks_theme_data' ); // Assuming you've set this somewhere
        $emails        = isset( $TransientData['ks_dev_message_emails'] ) ? $TransientData['ks_dev_message_emails'] : null; // e.g., 'andy@redfrogstudio.co.uk:Andy,johf.bialowski@redfrogstudio.co.uk:Johf Bialowski'
        if (  !  $emails ) {
            return;
        }

        $helpers   = MyHelpers::getInstance();
        $ThemeData = MyHelpers::getThemeData();

        $unsubscribeName = base64_decode( strtr( $_GET['unsubscribe'], '-_', '+/' ), true );
        // Check if the name from 'unsubscribe' is in the $emails
        $emailArray = explode( ",", $emails );
        $NotFound   = false;
        foreach ( $emailArray as $email_info ) {
            list( $email, $name ) = explode( ":", $email_info );
            if ( $name === $unsubscribeName ) {
                $NotFound = true;
                break;
            }
        }

        $html = '<div class="dev-unsubscribe">';
        $html .= '<div class="title">Thank you <strong>' . $unsubscribeName . '</strong>, you have been successfully unsubscribed from the development updates.</div>
						<div class="close"><a href="' . get_bloginfo( 'url' ) . '" >Return to ' . get_bloginfo( 'name' ) . ' website</a></div>';
        $html .= '</div>';

        // If not in the emails, display message 'You have unsubscribed'
        if (  !  $NotFound ) {
            echo $html;
            exit;
        }
    }
}, 10 );

if ( defined( 'WP_CLI' ) && WP_CLI ) {

    WP_CLI::add_command( 'send_email', function ( $args, $assoc_args ) {

        // Get the template from the command line arguments
        $template = isset( $assoc_args['e'] ) ? $assoc_args['e'] : 'staging';

        if ( $template == 'p' ) {
            $template = 'production';
        } elseif ( $template == 's' ) {
            $template = 'staging';
        }

        // Get the custom message from the command line arguments
        $message = isset( $assoc_args['m'] ) ? $assoc_args['m'] : '';

        // Construct the command
        $command = "send_developer_updates_emails --template={$template}";

        if (  !  empty( $message ) ) {
            $command .= " --message=\"{$message}\"";
        }

        // Run the command
        WP_CLI::runcommand( $command );

        // Log success message
    } );
}