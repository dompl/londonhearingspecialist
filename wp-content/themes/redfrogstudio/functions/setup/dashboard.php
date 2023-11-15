<?php
/**
 * comment
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_action( 'wp_dashboard_setup', function () {
    remove_meta_box( 'dashboard_site_health', 'dashboard', 'normal' ); // Site Health
    remove_meta_box( 'dashboard_quick_press', 'dashboard', 'side' ); // Quick Draft
    remove_meta_box( 'dashboard_right_now', 'dashboard', 'normal' ); // At a Glance
    remove_meta_box( 'dashboard_activity', 'dashboard', 'normal' ); // Activity
    remove_meta_box( 'dashboard_events', 'dashboard', 'side' ); // Events
} );