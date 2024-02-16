<?php
/**
 * All header settings
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Kickstarter\MyHelpers;
add_action( 'wp_head', 'ks_add_favicon' );
add_action( 'admin_head', 'ks_add_favicon' );
function ks_add_favicon() {
    $data = MyHelpers::getThemeData();
    if ( isset( $data['ks_favicon'] ) ) {
        $image_id   = $data['ks_favicon'];
        $image_data = wp_get_attachment_metadata( $image_id );
        $image_path = wp_get_attachment_url( $image_id ); // Get the URL of the original image

        // Use the mime type of the original image
        $mime_type = isset( $image_data['mime-type'] ) ? $image_data['mime-type'] : 'image/png'; // Default to image/png if not found

        // Since 'sizes' is empty, use the original image for the favicon
        if ( $image_path ) {
            echo '<link rel="icon" type="' . $mime_type . '" href="' . $image_path . '">' . "\n";
        }
    }
}

add_action( 'wp_head', 'ks_add_favicon' );