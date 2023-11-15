<?php

namespace Kickstarter;

use Kickstarter\MyHelpers;

/**
 * Class MyClickUp
 *
 * Provides methods for interacting with ClickUp API to manage tasks.
 */
class MyClickUp extends MyHelpers {

    /**
     * @var mixed
     */
    private static $instance = null;

    public static function getInstance() {
        if ( self::$instance === null ) {
            self::$instance = new MyClickUp();
        }
        return self::$instance;
    }

    /**
     * Make a POST request to the ClickUp API.
     *
     * This private method uses wp_remote_post to send a POST request to ClickUp.
     *
     * @param string $api_url The endpoint URL.
     * @param array  $body    The request payload.
     *
     * @return array|false Returns the API response, or false on failure.
     */
    private static function ClickUpResponse( $api_url, $body ) {

        // Validate input parameters.
        if (  !  isset( $_ENV['CLICKUP_API_TOKEN'] ) ) {
            error_log( 'CLICKUP_API_TOKEN is not set. Check if /etc/shared-env is set.' );
            return false;
        }
        if ( empty( $body ) || !  $api_url ) {
            return false;
        }

        // Perform the API request.
        try {
            // Perform the API request.
            $response = wp_remote_post( $api_url, [
                'headers' => [
                    'Authorization' => $_ENV['CLICKUP_API_TOKEN'],
                    'Content-Type'  => 'application/json'
                ],
                'body'    => json_encode( $body )
            ] );

            // If the response is a WP_Error, throw an exception.
            if ( is_wp_error( $response ) ) {
                throw new Exception( $response->get_error_message() );
            }

            return $response;

        } catch ( Exception $e ) {
            // Log the error message.
            error_log( $e->getMessage() );
            return false;
        }
    }

    /**
     * Create a new task in ClickUp.
     *
     * This method calls the ClickUp API to create a new task.
     *
     * @param array  $task    Task details.
     * @param int|false $list_id The ClickUp list ID.
     *
     * @return string|false Returns the task ID if successful, or false on failure.
     */
    public static function ClickUpCreateTask( $task = [], $list_id = false ) {

        // Validate list_id.
        if (  !  $list_id ) {
            return false;
        }

        // Build the API URL.
        $api_url = "https://api.clickup.com/api/v2/list/{$list_id}/task";

        // Optionally, set default assignees.
        $assignees = apply_filters( '_ks_clickup_default_tasks_assignees', [4648527] );

        if (  !  empty( $assignees ) ) {
            $task['assignees'] = $assignees;
        }

        // Make a POST request to create the task.
        $response = self::ClickUpResponse( $api_url, $task );

        // Handle possible errors.
        if ( is_wp_error( $response ) ) {
            error_log( $response->get_error_message() );
            return false;
        } elseif (  !  $response ) {
            error_log( 'API request in ClickUpCreateTask failed without a WP_Error object.' );
            return false;
        }

        // Decode the response body.
        $body           = wp_remote_retrieve_body( $response );
        $decoded_object = json_decode( $body, true );

        // Check for successful task creation.
        if ( isset( $decoded_object['id'] ) && $decoded_object['id'] ) {
            return $decoded_object['id'];
        }

        return false;
    }

}