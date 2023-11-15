<?php
/**
 * This file contains code for setting up a WordPress cron job
 * that clears transient options used for email sending intervals.
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Clears all WordPress options with the prefix 'ks_email_last_sent_'
 * This helps in cleaning up the options table from stale records.
 */
function ks_clear_ks_email_last_sent_options() {
    global $wpdb;

    // Prefix for the options we want to clear
    $option_name_prefix = 'ks_email_last_sent_';

    // Execute SQL query to find all option names that start with our prefix
    $options = $wpdb->get_col(
        $wpdb->prepare(
            "SELECT option_name FROM $wpdb->options WHERE option_name LIKE %s",
            $option_name_prefix . '%'
        )
    );

    // Iterate through each option and delete it
    foreach ( $options as $option_name ) {
        delete_option( $option_name );
    }
}

// Check if the event is already scheduled. If not, schedule it.
if (  !  wp_next_scheduled( 'ks_clear_ks_email_last_sent_options_hook' ) ) {
    // Schedule to run this function once a month
    wp_schedule_event( time(), 'monthly', 'ks_clear_ks_email_last_sent_options_hook' );
}

// Attach our function to our custom hook
add_action( 'ks_clear_ks_email_last_sent_options_hook', 'ks_clear_ks_email_last_sent_options' );

/**
 * Adds a custom cron schedule for running the job once a month.
 */
add_filter( 'cron_schedules', function ( $schedules ) {
    // Adding monthly to the existing schedules.
    $schedules['monthly'] = array(
        'interval' => 30 * 24 * 60 * 60, // 30 days in seconds
        'display' => __( 'Once a month' )
    );
    return $schedules;
} );