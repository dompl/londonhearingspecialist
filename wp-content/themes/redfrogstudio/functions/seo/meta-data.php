<?php
use Kickstarter\MyHelpers;
use Kickstarter\MySeo;
add_action( 'save_post', 'ks_30234_save_seo_fields_to_post_meta', 10, 2 );

/**
 * @param $post_id
 * @param $post
 * @return null
 */
function ks_30234_save_seo_fields_to_post_meta( $post_id, $post ) {

    // If this is just a WordPress autosave, don't do anything
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    // Don't run on WP's post save, only ACF's save.
    if ( $post->post_type === 'acf-field' || $post->post_type === 'acf-field-group' ) {
        return;
    }

    // Make sure the current user can edit this post
    if (  !  current_user_can( 'edit_post', $post_id ) ) {
        return;
    }

    // Get all the ACF fields for this post
    $helpers = MyHelpers::getInstance(); // replace MyHelpers with your actual helper class
    $mySeo   = MySeo::getInstance();
    $fields  = apply_filters( '_ks_seo_post_fields', [], $helpers, $mySeo );

    $acf_fields = [];

    if (  !  empty( $fields ) ) {

        foreach ( $fields as $key => $field ) {

            // Assuming that the field object has a 'name' property
            if ( isset( $key ) && strpos( $key, 'ks_seo_' ) === 0 ) {

                // Check if the field name starts with 'ks_seo_'
                $acf_fields[$key] = get_post_meta( $post_id, $key, true );
            }
        }
        // Save all relevant ACF fields in a single custom field as a serialized array
        update_post_meta( $post_id, '_ks_seo_post_metadata_', $acf_fields );
    }
}
