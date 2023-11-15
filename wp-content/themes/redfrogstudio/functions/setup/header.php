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
        if ( $image_data ) {
            echo '<link rel="icon" type="' . $image_data['sizes']['mini-thumbnail']['mime-type'] . '" href="' . MyHelpers::WPImage( id: $image_id, size: [32, 32], webp: null ) . '">' . "\n";
        }
    }
}