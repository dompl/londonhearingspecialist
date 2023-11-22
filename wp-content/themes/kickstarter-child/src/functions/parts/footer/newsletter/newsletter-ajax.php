<?php

add_action( 'wp_ajax_newsletter_signup', 'handle_newsletter_signup' );
add_action( 'wp_ajax_nopriv_newsletter_signup', 'handle_newsletter_signup' );

/**
 * Handles the AJAX request for the newsletter signup.
 * This function checks the nonce for security, sanitizes input,
 * creates a table if not exists, inserts data into the table,
 * and optionally sends a confirmation email.
 */
function handle_newsletter_signup() {
    global $wpdb; // WordPress database global variable

    // Check the nonce for security
    if (  !  check_ajax_referer( 'london_newsletter_signup', 'nonce' ) ) {
        $return = array( 'message' => __( 'Security error. Try again!', TEXT_DOMAIN ) );
        wp_send_json_error( $return );
        exit;
    }

    $email           = sanitize_email( $_POST['email'] );
    $submission_date = current_time( 'mysql' ); // Get current time in MySQL format
    $submission_url  = sanitize_text_field( $_POST['submission_url'] );

    // Define table name
    $table_name = $wpdb->prefix . 'london_newsletter';

    // Check if the email already exists in the database
    $email_exists = $wpdb->get_var( $wpdb->prepare( "SELECT COUNT(*) FROM $table_name WHERE email = %s", $email ) );

    if ( $email_exists > 0 ) {
        // Email already exists, return an error message
        $result = array( 'message' => __( 'Thank you for re-subscribing to our newsletter.', TEXT_DOMAIN ) );
        wp_send_json_error( $result );
        exit;
    }

    // Check if table exists, if not create it
    if ( $wpdb->get_var( "SHOW TABLES LIKE '$table_name'" ) != $table_name ) {

        // SQL to create your table
        $sql = "CREATE TABLE $table_name (
                id mediumint(9) NOT NULL AUTO_INCREMENT,
                email varchar(255) NOT NULL,
                submission_date datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
                submission_url varchar(255) NOT NULL,
                PRIMARY KEY  (id)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";

        // Include the WordPress upgrade library
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';

        // Run dbDelta to create the table
        dbDelta( $sql );
    }

    // Insert data into the london_newsletter table
    $data = array(
        'email'           => $email,
        'submission_date' => $submission_date,
        'submission_url'  => $submission_url
    );
    $format = array( '%s', '%s', '%s' );
    $wpdb->insert( $table_name, $data, $format );

    // Send a confirmation email
    $email_sent = wp_mail( 'info@redfrogstudio.co.uk', 'Newsletter Signup Dom', 'Hello' );
    if ( $email_sent ) {
        $result = array(
            'message' => __( 'Thank you for signing up to our newsletter!', TEXT_DOMAIN )
        );
    } else {
        $result = array(
            'message' => __( 'There was an error signing up to our newsletter. Please try again later.', TEXT_DOMAIN )
        );
    }

    // TO Do : Mailchimp Newsletter Signup

    // Mailchimp API 3.0 Example
    /*
    $apiKey      = 'YOUR_API_KEY';
    $listId      = 'YOUR_LIST_ID';
    $memberEmail = $_POST['email']; // Assuming 'email' is the name of your form's input field

    $data = [
    'email_address' => $memberEmail,
    'status'        => 'subscribed' // or 'pending' if you want double opt-in
    ];

    $jsonData = json_encode( $data );

    $ch = curl_init( "https://<dc>.api.mailchimp.com/3.0/lists/$listId/members/" );
    curl_setopt( $ch, CURLOPT_USERPWD, 'user:' . $apiKey );
    curl_setopt( $ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json'] );
    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
    curl_setopt( $ch, CURLOPT_TIMEOUT, 10 );
    curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'POST' );
    curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
    curl_setopt( $ch, CURLOPT_POSTFIELDS, $jsonData );

    $result   = curl_exec( $ch );
    $httpCode = curl_getinfo( $ch, CURLINFO_HTTP_CODE );
    curl_close( $ch );
     */

    wp_send_json_success( $result );
    exit;
}