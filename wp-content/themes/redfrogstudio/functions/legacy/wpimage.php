<?php

use Kickstarter\MyHelpers;

/**
 * Fallback function to check if an image file is in WebP format.
 *
 * @param string $filePath The file path of the image.
 * @return bool True if the image is in WebP format, otherwise false.
 */
function isWebP( $filePath ) {
    return MyHelpers::isWebP( $filePath );
}

/**
 * Fallback function to update 'xgen' metadata for an image.
 *
 * @param int $id The post ID.
 * @param int $width The width of the image.
 * @param int $height The height of the image.
 * @param int $q The quality of the image.
 * @param bool $webp Whether the image is in WebP format.
 * @param string $destination_path The path where the non-WebP image is stored.
 * @param string $destination_webp_path The path where the WebP image is stored.
 */
function ks_update_xgen_meta( $id, $width, $height, $q, $webp, $destination_path, $destination_webp_path ) {
    MyHelpers::updateXgenMeta( $id, $width, $height, $q, $webp, $destination_path, $destination_webp_path );
}

/**
 * Fallback function for generating WordPress image tags with various options.
 *
 * @param int $id The post ID of the image.
 * @param string $size The size of the image (default '100').
 * @param int $q The quality of the image (default 100).
 * @param bool $webp Whether to use WebP format (default true).
 * @param bool $retina Whether the image is for Retina displays (default false).
 * @param bool $reversed Whether to reverse some option (purpose unspecified, default false).
 * @param string $function The image manipulation function to use (default 'crop').
 */
function wpimage( $id, $size = '100', $q = 100, $webp = true, $retina = false, $reversed = false, $function = 'crop' ) {
    return MyHelpers::WPImage( $id, $size, $q, $webp, $retina, $reversed, $function );
}

/**
 * Fallback function to delete build images.
 */
function ks_delete_build_images() {
    MyHelpers::deleteBuildImages();
}
// Hook the ks_delete_build_images function to the 'wp_ajax_ks_delete_build_images' action
add_action( 'wp_ajax_deleteBuildImages', 'ks_delete_build_images' );