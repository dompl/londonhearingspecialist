<?php
/**
 * File Description: This file contains functions to manage SEO-related ACF fields.
 * It includes a function to fetch and cache ACF fields in a transient and another to delete the transient when the ACF options page is updated.
 */

/**
 * Fetches and caches SEO-related ACF fields in a transient.
 *
 * @return array The array of ACF fields data.
 */
function get_seo_acf_fields() {
    // Define the name of the transient where the ACF fields will be cached.
    $transient_name = 'seo_acf_fields';

    // Attempt to retrieve the cached ACF fields from the transient.
    $cached_fields = get_transient( $transient_name );

    // If the transient exists, unserialize the data and return it.
    if ( $cached_fields !== false ) {
        return maybe_unserialize( $cached_fields );
    }

    // If the transient doesn't exist, fetch the ACF fields using the apply_filters function.
    $fields_objects = apply_filters( 'ks_seo_admin_acf_fields_general_information', [] );

    if ( empty( $fields_objects ) ) {
        return;
    }

    // Initialize an empty array to hold the ACF fields data.
    $fields_data = [];

    // Loop through each ACF field object to extract its data.
    foreach ( $fields_objects as $field_object ) {
        // Use PHP's Reflection API to access the protected 'settings' property.
        $reflection = new ReflectionClass( $field_object );
        $property   = $reflection->getProperty( 'settings' );
        $property->setAccessible( true );
        $settings = $property->getValue( $field_object );

        // Check if the 'name' key exists and starts with 'seo_'.
        if ( isset( $settings['name'] ) && strpos( $settings['name'], 'ks_seo_' ) === 0 ) {
            // Remove the 'seo_' prefix and fetch the corresponding option value.
            $name               = str_replace( 'ks_seo_', '', $settings['name'] );
            $fields_data[$name] = get_option( 'options_' . $settings['name'], false );
        }
    }

    // Serialize the ACF fields data for caching.
    $serialized_fields = maybe_serialize( $fields_data );

    // Cache the serialized ACF fields data in a transient that expires in 30 days.
    set_transient( $transient_name, $serialized_fields, 30 * DAY_IN_SECONDS );

    return $fields_data;
}

/**
 * Deletes the transient containing the cached ACF fields when the ACF options page is updated.
 */
add_action( 'acf/save_post', function () {
    // Get the current screen object.
    global $current_screen;

    // Check if we're on the 'admin-seo-options' page.
    if ( strpos( $current_screen->id, 'admin-seo-options' ) !== false ) {
        // Delete the transient containing the cached ACF fields.
        delete_transient( 'seo_acf_fields' );
    }
} );