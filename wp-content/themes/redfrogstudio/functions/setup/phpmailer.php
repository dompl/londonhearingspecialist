<?php
/**
 * PHP Mailer
 * https://wordpress.stackexchange.com/questions/344009/how-to-use-phpmailer-in-a-function-in-wordpress
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use Extended\ACF\Fields\Password;
use PHPMailer\PHPMailer\PHPMailer;

// Configure SMTP settings
add_action( 'phpmailer_init', function ( PHPMailer $phpmailer ) {

    $smtp_settings = ks_smtp_settings();

    // Define the required fields for the SMTP settings
    $required_fields = ['smtp', 'user', 'password', 'encryption', 'email'];

    foreach ( $required_fields as $field ) {
        if ( empty( $smtp_settings[$field] ) ) {
            return; // Skip setting SMTP if any of the required fields is missing
        }
    }

    // Set up the SMTP settings
    $phpmailer->isSMTP();
    $phpmailer->Host       = $smtp_settings['smtp'];
    $phpmailer->SMTPAuth   = true;
    $phpmailer->Port       = 587;
    $phpmailer->Username   = $smtp_settings['user'];
    $phpmailer->Password   = $smtp_settings['password'];
    $phpmailer->SMTPSecure = $smtp_settings['encryption'];
    $phpmailer->From       = apply_filters( '_ks_smtp_from_email', $smtp_settings['email'] );
    $phpmailer->FromName   = apply_filters( '_ks_smtp_from_name', get_bloginfo( 'name' ) );

} );

/**
 * Get SMTP settings from options or fetch them if they are not set.
 *
 * @return array
 */
function ks_smtp_settings() {

    $data = get_option( 'ks_smtp_settings', [] );

    if ( empty( $data ) ) {
        // If the SMTP settings are not set, fetch them from the options
        $fields = ['smtp', 'encryption', 'email', 'user', 'password'];

        foreach ( $fields as $field ) {
            $data[$field] = get_option( "options_ks_smtp_$field" );
        }

        // Only update the option if we have new data
        if (  !  empty( $data ) ) {
            update_option( 'ks_smtp_settings', $data, false );
        }
    }

    return $data;
}
add_action( 'acf/save_post', function () {

    global $current_screen;

    if ( strpos( $current_screen->id, 'admin-options' ) !== false ) {
        // Delete the SMTP settings
        $deleted = delete_option( 'ks_smtp_settings' );

        // If the SMTP settings were successfully deleted, schedule a success message for display
        if ( $deleted ) {
            add_action( 'admin_notices', function () {
                echo '<div class="notice notice-success is-dismissible">';
                echo '<p>' . __( 'SMTP settings have been successfully deleted!', 'text-domain' ) . '</p>';
                echo '</div>';
            } );
        } else {
            add_action( 'admin_notices', function () {
                echo '<div class="notice notice-error is-dismissible">';
                echo '<p>' . __( 'Failed to delete SMTP settings.', 'text-domain' ) . '</p>';
                echo '</div>';
            } );
        }
    }
} );