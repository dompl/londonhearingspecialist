<?php
/**
 * Click Tracker
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
function ks_gcd_cb() {

    $ip_address = sanitize_text_field( $_SERVER['REMOTE_ADDR'] );

    if ( $ip_address == '127.0.0.1' ) {
        wp_send_json_success( [] );
        exit;
    }

    if (  !  check_ajax_referer( 'ks_gcd_nonce', 'nonce', false ) ) {
        $return = array( 'message' => __( 'Security error. Try again!', TEXT_DOMAIN ) );
        wp_send_json_error( $return );
        exit;
    }
    global $wpdb;

    // Sanitize and validate incoming data
    $ip_address = sanitize_text_field( $_SERVER['REMOTE_ADDR'] );
    $click_id   = sanitize_text_field( $_REQUEST['click_id'] );
    $link_text  = sanitize_text_field( $_REQUEST['link_text'] );
    $target_url = sanitize_text_field( $_REQUEST['target_url'] );
    $post_id    = intval( $_REQUEST['post_id'] ); // Convert to integer
    $post_title = sanitize_text_field( $_REQUEST['post_title'] );
    $post_url   = esc_url_raw( $_REQUEST['post_url'] ); // Sanitize URL

    // Insert into ks_click_tracker table
    global $wpdb;
    $table_name = $wpdb->prefix . 'ks_click_tracker';
    $wpdb->insert(
        $table_name,
        array(
            'time'       => current_time( 'mysql' ),
            'ip_address' => $ip_address,
            'click_id'   => $click_id,
            'post_title' => $post_title,
            'post_id'    => $post_id,
            'post_url'   => $post_url,
            'link_text'  => $link_text,
            'target_url' => $target_url
        ),
        array(
            '%s',
            '%s',
            '%s',
            '%s',
            '%d',
            '%s',
            '%s',
            '%s'
        )
    );

    $result = [];

    wp_send_json_success( $result );
    exit;
};
add_action( 'wp_ajax_ks_gcd', 'ks_gcd_cb' );
add_action( 'wp_ajax_nopriv_ks_gcd', 'ks_gcd_cb' );