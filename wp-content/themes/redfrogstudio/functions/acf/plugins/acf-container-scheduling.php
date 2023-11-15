<?php
/**
 * Container scheduling function
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

function ks_component_scheduling( $data, $theme_data ) {

    $show_admin = get_component( 'component_to_admin', $data );

    if ( $show_admin && current_user_can( 'edit_posts' ) ) {
        return true;
    }

    $dataFormat = 'Y-m-d H:i:s';

    $start_time = get_component( 'component_from', $data );
    $end_time   = get_component( 'component_to', $data );
    // If both start and end times are not set, return false
    if (  !  $start_time && !  $end_time ) {
        return true;
    }
    // Get current date and time
    $current_time = date( $dataFormat );

    // Convert all times to DateTime objects for comparison
    $start_time   = ( $start_time ) ? DateTime::createFromFormat( $dataFormat, $start_time ) : null;
    $end_time     = ( $end_time ) ? DateTime::createFromFormat( $dataFormat, $end_time ) : null;
    $current_time = DateTime::createFromFormat( $dataFormat, $current_time );

    // If start time is not set but end time is in the future
    if (  !  $start_time && $end_time && $end_time > $current_time ) {

        return true;
    }

    // If end time is not set but start time is in the past
    if ( $start_time && !  $end_time && $start_time < $current_time ) {

        return true;
    }

    // If both times are set and the current time is within the interval
    if ( $start_time && $end_time && $start_time <= $current_time && $current_time <= $end_time ) {

        return true;
    }

    return false;
}

add_action( 'admin_enqueue_scripts', function () {
    wp_register_script( 'moment', 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js', ['jquery'], null, true );
    wp_enqueue_script( 'moment' );
}, 10 );