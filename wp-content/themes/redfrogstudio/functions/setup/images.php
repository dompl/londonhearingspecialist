<?php
/**
 * Various image functions
 */

/**
 * Create image sizes
 * https://developer.wordpress.org/reference/functions/add_image_size/
 * wp_get_attachment_image_src( int $attachment_id, string|int[] $size = 'thumbnail', bool $icon = false )
 * @param $sizes
 * @return mixed
 */
function kickstarter_custom_image_sizes() {

    $image_sizes = [
        [0 => 'mini-thumbnail', 1 => 80, 2 => 80, 3 => true, 4 => __( 'Mini thumbnail', TEXT_DOMAIN )],
        [0 => 'post', 1 => 100, 2 => 200, 3 => false, 4 => __( 'Post', TEXT_DOMAIN )]
    ];
    return apply_filters( 'ks_image_sizes_filter', $image_sizes );

}

if ( function_exists( 'add_theme_support' ) ) {
    add_theme_support( 'post-thumbnails' );
}
// This will remove the default image sizes and the medium_large size.
add_filter( 'intermediate_image_sizes_advanced', function ( $sizes ) {
    unset( $sizes['small'] ); // 150px
    unset( $sizes['medium'] ); // 300px
    unset( $sizes['large'] ); // 1024px
    unset( $sizes['medium_large'] ); // 768px
    return $sizes;
} );

/** Remove Woocommerce image sizes*/
add_action( 'after_setup_theme', function () {

    if ( function_exists( 'kickstarter_custom_image_sizes' ) ) {
        $sizes = kickstarter_custom_image_sizes();
        if (  !  empty( $sizes ) ) {
            foreach ( $sizes as $size ) {
                add_image_size( (string) "{$size[0]}", (int) $size[1], (int) $size[2], (bool) $size[3] );
            }
        }
    }
    /* Update  Thumbnail image size */
    remove_image_size( '1536x1536' );
    remove_image_size( '2048x2048' );
    /* Woocommerce */
    if ( class_exists( 'woocommerce' ) ) {
        remove_image_size( 'woocommerce_thumbnail' );
        remove_image_size( 'woocommerce_single' );
        remove_image_size( 'woocommerce_single' );
        remove_image_size( 'woocommerce_gallery_thumbnail' );
        remove_image_size( 'shop_catalog' );
        remove_image_size( 'shop_single' );
        remove_image_size( 'shop_thumbnail' );
    }

} );

/**
 * Disable scale image size generated by WP 5.3
 * @param $sizes
 * @return mixed
 */
add_filter( 'big_image_size_threshold', '__return_false' );

/**
 * Allow uploading json files to the admin
 */

add_filter( 'upload_mimes', function ( $mimes ) {
    $mimes['json'] = 'application/json';
    $mimes['svg']  = 'image/svg+xml';
    return $mimes;
} );

/**
 * Insert an attachment from a URL address.
 */
function ks_get_image_from_url( $url, $parent_post_id = null ) {

    if (  !  class_exists( 'WP_Http' ) ) {
        require_once ABSPATH . WPINC . '/class-http.php';
    }

    $http     = new WP_Http();
    $response = $http->request( $url );
    if ( 200 !== $response['response']['code'] ) {
        return false;
    }

    $upload = wp_upload_bits( basename( $url ), null, $response['body'] );

    if (  !  empty( $upload['error'] ) ) {
        return false;
    }

    $file_path        = $upload['file'];
    $file_name        = basename( $file_path );
    $file_type        = wp_check_filetype( $file_name, null );
    $attachment_title = sanitize_file_name( pathinfo( $file_name, PATHINFO_FILENAME ) );
    $wp_upload_dir    = wp_upload_dir();
    $post_info        = [
        'guid'           => $wp_upload_dir['url'] . '/' . $file_name,
        'post_mime_type' => $file_type['type'],
        'post_title'     => $attachment_title,
        'post_content'   => '',
        'post_status'    => 'inherit'
    ];
    // Create the attachment.
    $attach_id = wp_insert_attachment( $post_info, $file_path, $parent_post_id );

    // Include image.php.
    require_once ABSPATH . 'wp-admin/includes/image.php';

    // Generate the attachment metadata.
    $attach_data = wp_generate_attachment_metadata( $attach_id, $file_path );

    // Assign metadata to attachment.
    wp_update_attachment_metadata( $attach_id, $attach_data );

    return $attach_id;

}

/**
 * Get all attachment data
 */
function ks_image_data( $id = '', $key = false ) {

    if (  !  $id ) {
        return;
    }

    $attachment = get_post( $id );

    if (  !  $attachment ) {
        return;
    }

    $array                = wp_get_attachment_image_src( $id, 'full' );
    $image['src']         = $array[0];
    $image['url']         = $array[0];
    $image['width']       = $array[1];
    $image['height']      = $array[2];
    $image['alt']         = get_post_meta( $id, '_wp_attachment_image_alt', true );
    $image['caption']     = $attachment->post_excerpt;
    $image['description'] = $attachment->post_content;
    $image['href']        = esc_url( get_permalink( $id ) );
    $image['mime']        = get_post_mime_type( $id );

    wp_reset_postdata();

    if ( $key != false && isset( $image[$key] ) ) {
        return $image[$key];
    }
    return $image;
}

//** *Enable upload for webp image files.*/
add_filter( 'mime_types', function ( $existing_mimes ) {
    $existing_mimes['webp'] = 'image/webp';
    return $existing_mimes;
} );

//** * Enable preview / thumbnail for webp image files.*/
add_filter( 'file_is_displayable_image', function ( $result, $path ) {
    if ( $result === false ) {
        $displayable_image_types = array( IMAGETYPE_WEBP );
        $info                    = @getimagesize( $path );

        if ( empty( $info ) ) {
            $result = false;
        } elseif (  !  in_array( $info[2], $displayable_image_types ) ) {
            $result = false;
        } else {
            $result = true;
        }
    }

    return $result;
}, 10, 2 );