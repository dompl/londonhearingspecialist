<?php

/**
 * Handles AJAX request for component creation.
 *
 * This script contains a function to handle AJAX request coming from
 * WordPress to create a component. It uses the ClickUp API to create a task
 * and sends emails if required.
 *
 * @package Kickstarter
 */

use Kickstarter\MyClickUp;
use Kickstarter\MyForms;
use Kickstarter\MyHelpers;

// Hook for handling AJAX request.
add_action( 'wp_ajax_ks_component_request', 'ks_component_request' );

/**
 * AJAX Callback for creating a new component.
 *
 * This function is hooked to WordPress's AJAX API. It receives POST data,
 * sanitizes it, and attempts to create a new task in ClickUp. If the task
 * creation fails, it sends an email.
 *
 * @uses check_ajax_referer()
 * @uses wp_send_json_error()
 * @uses wp_send_json_success()
 *
 * @return void
 */
function ks_component_request() {
    // Check if the nonce is set and valid to prevent CSRF attacks.
    if (  !  check_ajax_referer( 'component_request_nonce', false ) ) {
        $return = array( 'message' => __( 'Security error. Try again!', TEXT_DOMAIN ) );
        wp_send_json_error( $return );
        exit;
    }

    if (  !  isset( $_POST['data']['nonce'] ) || !  wp_verify_nonce( $_POST['data']['nonce'], 'component_request_nonce' ) ) {
        $return = array( 'message' => __( 'Security error. Try again! No nonce', TEXT_DOMAIN ) );
        wp_send_json_error( $return );
        exit;
    }

    // Capture and sanitize POST data.
    $data      = $_POST["data"];
    $myForms   = MyForms::getInstance();
    $MyClickUp = MyClickUp::getInstance();
    $custom_id = MyHelpers::extractedDomainName() . "-" . MyHelpers::getRandomID( 5 );
    // Sanitize the data for further use.
    $sanitized_data = array(
        'title'       => sanitize_text_field( $data['component-request_title'] ),
        'description' => sanitize_text_field( $data['component-request-description'] ),
        'name'        => sanitize_text_field( $data['component_request_name'] ),
        'email'       => is_email( $data['component_request_email'] ) ? $data['component_request_email'] : '',
        'url'         => esc_url_raw( $data['admin_url'] ),
        'admin_email' => is_email( $data['component_request_email'] ) ? $data['component_request_email'] : '',
        'admin_name'  => sanitize_text_field( $data['component_request_name'] ),
        'post_id'     => absint( $data['post_id'] )
    );

    // Prepare the body for ClickUp API.
    $body = [
        'name'          => $sanitized_data['title'] ?? 'Unnamed Task',
        'custom_id'     => $custom_id,
        'description'   => $sanitized_data['description'] ?? 'No description provided',
        'status'        => 'Open',
        "tags"          => array(
            "component-request"
        ),
        'date_created'  => time(),
        'custom_fields' => [
            [
                'id'               => '341332b8-2ff9-4e3b-a182-90bea0ea6c96', // Request URL
                'value' => $sanitized_data['url'],
                "hide_from_guests" => true
            ],
            [
                'id'               => '7cc681bc-2fd2-49fe-9ecf-878087e02c62', // Requested By
                'value' => $sanitized_data['name'],
                "hide_from_guests" => true
            ],
            [
                "id"               => "bed39d77-f64d-4166-910f-9d9435fdde14", // Requested by (email)
                'value' => $sanitized_data['email'],
                "hide_from_guests" => true
            ],
            [
                "id"               => "456f9324-0a45-4efc-865f-2a11fd23d703", // Reference #
                'value' => $custom_id,
                "hide_from_guests" => true
            ]
        ]
    ];

    // Attempt to create a task in ClickUp.
    $CreateClickUpTask = $MyClickUp::ClickUpCreateTask( task: $body, list_id: 901200602501 );

    // Initialize send_mail flag and a default task_id.
    $send_mail                 = true;
    $sanitized_data['task_id'] = $custom_id;

    // Check whether the ClickUp task creation was successful.
    if (  !  $CreateClickUpTask ) {
        // Task was not created, so an email needs to be sent.

        // Generate the subject of the email.
        $subject = 'New Component request from ' . get_bloginfo( 'name' );

        // Start output buffering to capture the output of the action hook.
        ob_start();
        do_action( 'component_request_clickup_message', $sanitized_data, true );

        // Retrieve the output and end buffering.
        $message = ob_get_clean();

        // Send the email.
        $send_mail = $myForms::sendWebmasterEmail(
            subject: $subject,
            message: $message,
            is_html: true,
            plain: $message
        );
    }

    // Check if either the ClickUp task was created or the email was sent.
    if ( $CreateClickUpTask || $send_mail ) {
        // Generate a confirmation message.
        ob_start();
        do_action( 'component_confirmation_clickup_message', $sanitized_data );
        $result = ob_get_clean();
    } else {
        // Neither the ClickUp task was created nor the email was sent.
        $return = array( 'message' => __( 'Task not created', TEXT_DOMAIN ) );
        wp_send_json_error( $return );
        exit;
    }

    wp_send_json_success( $result );
    exit;

}