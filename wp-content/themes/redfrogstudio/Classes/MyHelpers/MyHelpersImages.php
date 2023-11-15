<?php
namespace Kickstarter;
use WebPConvert\WebPConvert;
use \Gumlet\ImageResize;
trait MyHelpersImages {

    /**
     * Generate responsive picture element with optional zoom functionality.
     *
     * @param mixed   $image            Image ID or URL.
     * @param array   $size             The default image sizes.
     * @param array   $ratios           An array of screen sizes and corresponding image sizes.
     * @param string  $custom_container Custom container class for the image.
     * @param bool    $lazy             Whether to use lazy loading.
     * @param mixed   $alt              Alt text for the image. If not provided, it will be fetched or default to site name.
     * @param bool    $zoom             Whether to enable zoom feature.
     * @param int     $zoom_size        Size for the zoomed image.
     * @param array   $data             Additional data attributes.
     * @param int     $min              Minimum size for the image.
     * @param bool    $gallery          Whether the image is part of a gallery.
     * @param bool    $use_css          Whether to use CSS for styling.
     * @param bool    $reversed         The image sizes will be swapped width x height to height x width
     * @param string  $function         Image manipulation function (e.g., 'crop').
     * @param int     $q                Image quality.
     * @param bool    $schema           Whether to include schema.org markup.
     *
     * @return string The generated HTML for the picture element.
     */

    public static function PictureSource( $image = false, $size = [], $ratios = [], $custom_container = 'image', $lazy = true, $alt = false, $zoom = false, $zoom_size = 1200, $data = [], $min = 320, $gallery = false, $use_css = false, $reversed = false, $function = 'crop', $q = 100, $schema = false ) {

        $html = '';

        // Fallback for alt text
        $alt = $alt ?? self::getImageData( 'alt' );
        $alt = $alt ?? get_bloginfo( 'name' );

        // Get image caption if available
        $imageCaption = self::getImageData( $image, 'caption' );

        // Determine if zoom is applicable
        $is_zoom = $zoom == true || $zoom == 'gallery' || $gallery == true ? true : false;

        // Handle zoom feature
        if ( $is_zoom ) {
            // Prepare output array for zoom attributes
            $zoomOutput = [
                'data-zoom',
                'href="' . self::WPImage( $image, $zoom_size ) . '"',
                $imageCaption ? 'data-group="gallery" data-modaal-desc="' . esc_html( $imageCaption ) . '"' : null,
                $gallery ? 'data-group="gallery-' . $gallery . '"' : null
            ];
            $html .= '<a ' . implode( ' ', $zoomOutput ) . '>';
        }

        // Initialize <picture> element
        $html .= '<picture class="pic-' . $image . '-' . wp_unique_id() . '">';

        // Generate <source> elements for each screen size
        if (  !  empty( $ratios ) ) {
            krsort( $ratios );
            foreach ( $ratios as $screen => $imageSize ) {
                $imgRatiosX1 = self::WPImage( id: $image, size: $imageSize, retina: false, reversed: $reversed, function :$function );
                $imgRatiosX2 = self::WPImage( id: $image, size: $imageSize, retina: true, reversed: $reversed, function :$function );
                $html .= '<source media="(min-width:' . $screen . 'px)" srcset="' . $imgRatiosX1 . ' 1x, ' . $imgRatiosX2 . ' 2x">';
            }
        }

        // Main fallback image
        if ( $size ) {
            $img_x1 = self::WPImage( id: $image, size: $size, retina: false, reversed: $reversed, function :$function );
            $img_x2 = self::WPImage( id: $image, size: $size, retina: true, reversed: $reversed, function :$function );
            $html .= '<source srcset="' . $img_x1 . ' 1x, ' . $img_x2 . ' 2x">';
        }

        // Prepare <img> attributes
        $image_atts = [];

        $minImage = self::WPImage( id: $image, size: $min, reversed: $reversed, function :$function );

        if ( filter_var( $minImage, FILTER_VALIDATE_URL ) === false ) {
            error_log( "The provided string is not a valid URL. Error 75236" );
            return;
        }
        $image_atts[] = 'src="' . $minImage . '"';
        $image_atts[] = self::getImageSizeFromUrl( $minImage )[3];
        $image_atts[] = 'alt="' . esc_html( $alt ) . '"';
        $image_atts[] = $lazy ? 'loading="lazy"' : '';

        // Finalize <img> element
        $html .= '<img ' . implode( ' ', $image_atts ) . ' />';

        // Close <picture> element
        $html .= '</picture>';

        // Close zoom wrapper if applicable
        $html .= $is_zoom ? '</a>' : null;

        // Add custom container if specified
        $html = $custom_container ? '<div class="' . esc_attr( $custom_container ) . '">' . $html . '</div>' : $html;

        return $html;
    }

    /**
     * Resizes image height based on aspect ratio.
     *
     * @param array|string $image Original image dimensions.
     * @param int $newWidth New width.
     * @return array|null New dimensions.
     */
    public static function calculateAspectRatio( $image, $newDimension, $reversed = false ) {

        $image_path = get_attached_file( $image );

        if (  !  $image_path ) {
            return;
        }

        $originalSize = getimagesize( $image_path );

        if (  !  $originalSize || $originalSize[0] == 0 || $originalSize[1] == 0 ) {
            return; // Return early if dimensions are not available or invalid
        }

        $originalWidth  = $originalSize[0];
        $originalHeight = $originalSize[1];

        if ( $reversed ) {
            $originalWidth  = $originalSize[1];
            $originalHeight = $originalSize[0];
        }

        $returnedDimension = [$originalSize[0], $originalSize[1]]; // Initialize with default values

        if ( is_string( $newDimension ) ) {
            if ( strpos( $newDimension, 'x' ) !== false ) {
                $returnedDimension = explode( 'x', $newDimension );
            } else {
                $newDimension      = (int) $newDimension;
                $returnedDimension = [$newDimension, (int) (  ( $newDimension / $originalWidth ) * $originalHeight )];
            }
        } elseif ( is_int( $newDimension ) ) {
            $returnedDimension = [$newDimension, (int) (  ( $newDimension / $originalWidth ) * $originalHeight )];
        } elseif ( is_array( $newDimension ) ) {
            if ( count( $newDimension ) == 1 ) {
                $returnedDimension = [(int) $newDimension[0], (int) round(  ( $newDimension[0] / $originalWidth ) * $originalHeight )];
            } else {
                $returnedDimension = [(int) $newDimension[0], (int) $newDimension[1]];
            }
        }

        if ( $reversed ) {
            list( $returnedDimension[0], $returnedDimension[1] ) = [$returnedDimension[1], $returnedDimension[0]];
        }

        return $returnedDimension;
    }

    /**
     * Retrieves the dimensions of an image given its URL.
     *
     * This method uses PHP's getimagesize() function to fetch the dimensions of an image.
     * It can return either the width, the height, or both as an associative array.
     *
     * @param string $image_url The URL of the image to get dimensions for.
     * @param string $return    Optional parameter specifying what to return ('width', 'height', or both).
     *
     * @return mixed An associative array containing 'width' and 'height', or a single dimension, or false on failure.
     */

    public static function ImageDimensions( $image_url, $return = false ) {
        // Use PHP's getimagesize() function to fetch image dimensions
        $image_url  = self::UrlToPath( $image_url );
        $image_data = getimagesize( $image_url );

        // Check if getimagesize() was successful
        if ( $image_data ) {
            // If $return is specified, return either the width or the height
            if ( isset( $return ) ) {
                if ( $return == 'width' ) {
                    return $image_data[0];
                }
                if ( $return == 'height' ) {
                    return $image_data[1]; // Corrected from $image_data[0] to $image_data[1]
                }
            }

            // If $return is not specified or invalid, return both dimensions as an associative array
            return [
                'width'  => $image_data[0],
                'height' => $image_data[1]
            ];
        }

        // If getimagesize() fails, return false
        return false;
    }

    /**
     * Retrieves various data attributes of an image attachment.
     *
     * This method fetches different attributes like alt text, caption, description, permalink, src, and title
     * of an image attachment in WordPress, given its attachment ID.
     *
     * @param int    $attachmentId The ID of the image attachment.
     * @param string $data Optional parameter specifying which attribute to return.
     *
     * @return mixed An associative array containing all attributes, or a single attribute, or null on failure.
     */

    /**
     * TODO: Add description here.
     */
    public static function getImageData( $attachmentId, $data = false ) {
        // Use WordPress's get_post() function to fetch the attachment post object
        $attachment = get_post( $attachmentId );

        // Check if the attachment exists
        if (  !  $attachment ) {
            return null;
        }

        // Prepare an associative array containing various data attributes of the image
        $info = [
            'alt'         => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
            'caption'     => $attachment->post_excerpt,
            'description' => $attachment->post_content,
            'href'        => get_permalink( $attachment->ID ),
            'src'         => $attachment->guid,
            'title'       => $attachment->post_title
        ];

        // If $data is specified and exists in $info, return that specific attribute
        if ( $data && isset( $info[$data] ) ) {
            return $info[$data];
        }

        // Otherwise, return the entire $info array
        return $info;
    }

    /**
     * @param $image_url
     */

    /**
     * TODO: Add description here.
     */
    public static function uploadImageFromUrl( $image_url ) {

        require_once ABSPATH . 'wp-admin/includes/file.php';
        require_once ABSPATH . 'wp-admin/includes/media.php';
        require_once ABSPATH . 'wp-admin/includes/image.php';

        global $wpdb;

        // Check if the image already exists in the media library
        $query       = "SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key = '_source_url' AND meta_value = %s";
        $existing_id = $wpdb->get_var( $wpdb->prepare( $query, $image_url ) );

        if ( $existing_id ) {
            return $existing_id;
        }

        // Download the image
        $tmp = download_url( $image_url );

        // Check for download errors
        if ( is_wp_error( $tmp ) ) {
            @unlink( $tmp );
            return $tmp;
        }

        // Prepare for upload
        $file_array             = [];
        $file_array['name']     = basename( $image_url );
        $file_array['tmp_name'] = $tmp;

        // Upload the image
        $attachment_id = media_handle_sideload( $file_array, 0 );

        // Check for upload errors
        if ( is_wp_error( $attachment_id ) ) {
            @unlink( $file_array['tmp_name'] );
            return $attachment_id;
        }

        // Store the source URL as meta data
        add_post_meta( $attachment_id, '_source_url', $image_url );

        return $attachment_id;

    }

    /**
     * Retrieve screen sizes based on available container widths and selected size.
     *
     * @param string|false $size The selected screen size.
     * @return mixed|array|false An array of available screen sizes or the specific container width for the selected size.
     */
    public static function ScreenSizes( $size = false ) {
        // Get the available container widths from theme data
        $available = self::getThemeData( 'ks_container_widths' );

        // Return early if no available container widths
        if (  !  $available ) {
            return false;
        }

        // Define default screen mapping with breakpoints
        $screenMapping = [
            'sm'  => 576,
            'md'  => 768,
            'lg'  => 992,
            'xl'  => 1200,
            'xxl' => 1400
        ];

        // Apply filters to modify the screen mapping
        $screenMapping = apply_filters( '_ks_screen_sizes', $screenMapping );

        // Get the selected screen sizes based on available and selected values
        $selected = self::getSelectedValues( $screenMapping, $available );

        // Check if the selected size exists and return its corresponding container width
        if (  !  empty( $selected ) && isset( $screenMapping[$size] ) ) {
            if ( $size ) {
                if ( isset( $selected[$size] ) ) {
                    return $selected[$size];
                } else {
                    error_log( 'Screen size not available in $screenMapping' );
                }
            }
            return $screenMapping;
        }

        return false; // Return false if no valid sizes found
    }

    /**
     * TODO: Add description here.
     */
    public static function getImageSizeFromUrl( $file_url ) {
        return getimagesize( self::UrlToPath( $file_url ) );
    }

    /**
     * Deletes all auto-generated files related to a specific WordPress attachment.
     *
     * This function searches through the WordPress uploads directory for files that are
     * automatically generated (indicated by '-autoxgen-' in the filename) and related to
     * a specific WordPress post/attachment. These files are then deleted.
     *
     * @param int $post_id The ID of the WordPress post/attachment.
     * @throws InvalidArgumentException If the provided post ID is not a valid integer.
     * @throws RuntimeException If unable to retrieve WordPress upload directory or if the file deletion fails.
     */
    public static function DeleteAutoXgenFiles( $post_id ) {
        // Validate that the input is an integer
        if (  !  is_int( $post_id ) || $post_id <= 0 ) {
            throw new \InvalidArgumentException( 'Invalid post ID provided.' );
        }

        // Get the file path of the attachment
        $file_path = get_attached_file( $post_id );

        // Validate that the file path is not false
        if ( $file_path === false ) {
            throw new \RuntimeException( "Failed to retrieve file path for post ID: {$post_id}" );
        }

        // Extract filename information
        $file_info = pathinfo( $file_path );
        $file      = $file_info['filename'];

        // Retrieve WordPress upload directory information
        $uploads_dir = wp_upload_dir();

        // Check if wp_upload_dir() returned an error
        if ( isset( $uploads_dir['error'] ) && $uploads_dir['error'] !== false ) {
            throw new \RuntimeException( 'Failed to retrieve WordPress upload directory: ' . $uploads_dir['error'] );
        }

        $uploads_basedir = $uploads_dir['basedir'];

        // Initialize Recursive Directory Iterator
        $iterator = new \RecursiveIteratorIterator( new \RecursiveDirectoryIterator( $uploads_basedir ) );

        // Loop through all files in the uploads directory
        foreach ( $iterator as $filename => $fileObject ) {
            // Check if the file name starts with the same string and contains '-autoxgen-'
            if ( strpos( $fileObject->getFilename(), $file ) === 0 && strpos( $fileObject->getFilename(), '-autoxgen-' ) !== false ) {
                // Log the filename being deleted

                // Delete the file
                if (  !  unlink( $filename ) ) {
                    throw new \RuntimeException( "Failed to delete file: {$filename}" );
                }
            }
        }
    }

    /**
     * @return mixed
     */

    /**
     * Converts a file URL to its corresponding server path.
     *
     * This function takes a file URL and converts it into the file's path on the server.
     * It assumes that the file is located within the WordPress uploads directory.
     *
     * @param string $file_url The URL of the file.
     * @return string|null The server path of the file, or null if an error occurs.
     *
     * @throws InvalidArgumentException If the provided URL is not a string, empty, or not a valid URL.
     * @throws RuntimeException If unable to retrieve WordPress upload directory.
     */
    public static function UrlToPath( $file_url ) {
        // Validate that the input is a non-empty string
        if (  !  is_string( $file_url ) || empty( $file_url ) ) {
            throw new \InvalidArgumentException( 'Invalid URL provided.' );
        }

        // Validate that the input is a valid URL
        if ( filter_var( $file_url, FILTER_VALIDATE_URL ) === false ) {
            throw new \InvalidArgumentException( 'The provided string is not a valid URL.' );
        }

        // Retrieve WordPress upload directory information
        $upload_dir = wp_upload_dir();

        // Check if wp_upload_dir() returned an error
        if ( isset( $upload_dir['error'] ) && $upload_dir['error'] !== false ) {
            throw new \RuntimeException( 'Failed to retrieve WordPress upload directory: ' . $upload_dir['error'] );
        }

        // Extract base URL and path from WordPress upload directory
        $base_url  = $upload_dir['baseurl'];
        $base_path = $upload_dir['basedir'];

        // Validate that the URL starts with the base URL of the WordPress uploads directory
        if ( strpos( $file_url, $base_url ) !== 0 ) {
            throw new \InvalidArgumentException( 'The provided URL is not within the WordPress uploads directory.' );
        }

        // Remove any preceding slashes and replace the base URL with the base path
        $relative_url = ltrim( str_replace( $base_url, '', $file_url ), '/' );

        // Construct the full file path
        $file_path = $base_path . '/' . $relative_url;

        return $file_path;
    }

    public static function SecretWebP() {
        return 'set-xgen-webp';
    }

    public static function defaultWebpQuality() {
        return 90;
    }

    public static function isDeveloperWebp() {

        $isDeveloper = self::isDeveloper();
        $secret      = self::SecretWebP();
        if ( $isDeveloper && isset( $_GET[$secret] ) && !  empty( $_GET[$secret] ) && is_string( $_GET[$secret] ) && ctype_digit( $_GET[$secret] ) ) {
            $q = (int) $_GET[$secret];
            return max( 10, min( 100, $q ) );
        }
        return;
    }
    /**
     * Generates a URL for a WordPress image in various formats and sizes based on specified parameters.
     *
     * This method handles the logic for resizing images, converting them to WebP format if required,
     * and ensuring the correct image URL is returned. It also supports retina display resolutions
     * and can reverse aspect ratios. The quality of the WebP images can be set automatically or manually.
     * Developer mode allows for additional image quality control via a secret parameter.
     *
     * @param int    $id             The ID of the image in WordPress.
     * @param string $size           The target size for the image. Can be a predefined size name or custom dimensions.
     * @param int    $q              The quality of the image, from 0 to 100.
     * @param bool   $webp           Flag to determine if WebP conversion should occur.
     * @param bool   $retina         Flag to double the image dimensions for retina displays.
     * @param bool   $reversed       Flag to reverse the aspect ratio of the image.
     * @param string $function       Specifies the resizing function to use ('crop', 'width', 'height', or 'long').
     * @param mixed  $webp_quality   The quality for the WebP image, or 'auto' to automatically set it.
     * @return string|false          The URL of the processed image or an error log message.
     */
    public static function WPImage( $id, $size = '100', $q = 100, $webp = true, $retina = false, $reversed = false, $function = 'crop', $webp_quality = 'auto' ) {

        $webp_quality = $webp_quality == 'auto' ? ( self::getThemeData( 'webp_img_quality' ) ? self::getThemeData( 'webp_img_quality' ) : self::defaultWebpQuality() ) : $webp_quality;
        $webp_quality = (int) $webp_quality;

        /**
         * Evaluate and set the image quality based on a secret GET parameter.
         *
         * This function checks if the app is in developer mode and if a secret GET parameter exists.
         * If so, it validates the GET parameter and adjusts the image quality accordingly.
         */
        $secret      = self::SecretWebP();
        $isDeveloper = self::isDeveloper();
        $check       = false;

        // Validate the secret GET parameter.
        if ( self::isDeveloperWebp() ) {

            // Cast the quality value to an integer.
            $new_quality = self::isDeveloperWebp();

            // Set the quality.
            $webp_quality = $new_quality;

            $check = true;
        }

        // Get the path of the original image
        $image_path = get_attached_file( $id );

        if (  !  file_exists( $image_path ) || is_readable(  !  $image_path ) ) {
            return 'Original image file does not exist.';
        }

        $is_build     = $isDeveloper && self::getThemeData( 'use_build_images_mode' ) ? true : false;
        $suffix_build = '-is-x-build';
        // Check if the original image file exists

        //  Added quality controller for external change
        $q = apply_filters( '_ks_wpimage_quality_setting', $q, $id, $size, $retina, $reversed, $function );

        $q = self::isDeveloperWebp() ?? $q;

        $size = self::calculateAspectRatio( $id, $size, $reversed );

        if ( null === $size ) {
            return error_log( 'Could not calculate aspect ratio in MyHelpers::calculateAspectRatio in wpimage().' );
        }

        $width  = $size[0] * ( $retina ? 2 : 1 );
        $height = $size[1] * ( $retina ? 2 : 1 );

        // Get the image's information
        $info = pathinfo( $image_path );
        // Define a suffix based on quality
        $suffix      = "{$width}x{$height}" . ( $q < 100 ? "-{$q}" : "" );
        $suffix_webp = "{$width}x{$height}" . ( $webp_quality < 100 ? "-{$webp_quality}" : "" );

        $suffix .= $is_build ? $suffix_build : '';
        // Define destination paths and URLs for possible conversions
        $destination_path = $info['dirname'] . '/' . $info['filename'] . '-autoxgen-' . $suffix . '.' . $info['extension'];

        $destination_webp_path = $info['dirname'] . '/' . $info['filename'] . '-autoxgen-' . $suffix_webp . '.webp';

        $url = wp_get_attachment_url( $id );

        $new_url = str_replace( basename( $url ), basename( $destination_path ), $url );

        // Determine the image type for the save operation
        $image_type = ( $q < 100 || $is_build ) && $info['extension'] === 'png' ? IMAGETYPE_JPEG : null;
        // Adjust the destination path if converting PNG to JPEG
        if ( $image_type === IMAGETYPE_JPEG && ( $q < 100 || $is_build ) ) {
            $destination_path = str_replace( '.png', ( $is_build ? $suffix_build : '' ) . '.jpg', $destination_path );
            $new_url          = str_replace( '.png', ( $is_build ? $suffix_build : '' ) . '.jpg', $new_url );
        }

        $q            = $is_build ? 10 : $q;
        $ThemeData    = self::getThemeData();
        $new_webp_url = str_replace( basename( $url ), basename( $destination_webp_path ), $url );
        $webp         = $ThemeData['use_webp_images'] ?? $webp;
        $webp         = $check ? true : $webp;

        if ( isset( $_GET['no-xgen-generation'] ) ) {
            self::updateXgenMeta( $id, $width, $height, $q, $destination_path, $destination_webp_path, $webp, $webp_quality );
        }

        if ( file_exists( $destination_webp_path ) && is_readable( $destination_webp_path ) && $webp && !  isset( $_GET['no-xgen-generation'] ) ) {
            return $is_build ? $new_url : $new_webp_url;
        }

        // Check if the resized file already exists (for non-webp)
        if ( file_exists( $destination_path ) && is_readable( $destination_path ) && !  $webp ) {
            return $new_url;
        }

        // Perform the image processing steps if the images don't exist already
        try {

            if (  !  file_exists( $destination_path ) || !  is_readable( $destination_path ) ) {

                $image = new ImageResize( $image_path );

                if ( $function == 'height' ) {
                    $image->resizeToHeight( $height, $allow_enlarge = true );
                } elseif ( $function == 'width' ) {
                    $image->resizeToWidth( $width, $allow_enlarge = true );
                } elseif ( $function == 'long' ) {
                    $image->resizeToLongSide( $width, $allow_enlarge = true );
                } else {
                    $image->crop( $width, $height, $allow_enlarge = true );
                }
                $image->save( $destination_path, $image_type, $q );

                // Update image data with sizes
                self::updateXgenMeta( $id, $width, $height, $q, $destination_path, $destination_webp_path, $webp, $webp_quality );

            }
            $use_on_front = false;

            if ( $use_on_front ) {
                // Perform the webp conversion if use_webp is true
                if ( $webp && !  self::isWebP( $destination_path ) && !  $is_build && !  isset( $_GET['no-xgen-generation'] ) ) {
                    // Convert to webp
                    $source  = $destination_path;
                    $output  = $destination_webp_path;
                    $options = [
                        'quality' => $webp_quality
                    ];
                    try {
                        if (  !  file_exists( $destination_path ) || !  is_readable( $destination_path ) ) {
                            WebPConvert::convert( $source, $output, $options );
                            // Update image data with sizes
                            self::updateXgenMeta( $id, $width, $height, $q, $destination_path, $destination_webp_path, $webp, $webp_quality );
                        }
                        return $new_webp_url;

                    } catch ( ConversionFailedException $e ) {
                        error_log( 'Error converting to webp: ' . $e->getMessage() );
                        return $new_url;
                    }
                }

            }

            return $new_url;

        } catch ( Exception $e ) {

            return error_log( $e->getMessage() );

        }

        return false;

    }

    /**
     * Updates the 'xgen' metadata for a specific post.
     *
     * This method updates the post's metadata with detailed information about the image, its quality, dimensions,
     * conversion settings, and the paths to the JPEG and WebP versions.
     *
     * @param int|string $id The ID of the post.
     * @param int|string $width The width of the image.
     * @param int|string $height The height of the image.
     * @param int|string $q The quality of the JPEG image.
     * @param string $destination_path The path to the JPEG image.
     * @param string $destination_webp_path The path to the WebP image.
     * @param bool $IsWebP A flag to indicate if the image is in WebP format.
     * @param int $webp_quality The quality of the WebP image.
     * @throws \InvalidArgumentException if an argument is of an invalid type.
     */
    public static function updateXgenMeta( $id, $width, $height, $q, $destination_path, $destination_webp_path, $IsWebP, $webp_quality ) {

        // Input validation
        if (  !  is_int( $id ) && (  !  is_string( $id ) || !  ctype_digit( $id ) ) ) {
            throw new \InvalidArgumentException( 'Invalid type for argument $id. Expected integer.' );
        }
        // Other validations omitted for brevity

        // Determine if PNG should be converted to JPEG based on quality
        $png_jpeg = $q < 100 ? true : false;

        // Retrieve existing 'xgen' metadata
        $meta = get_post_meta( $id, 'xgen', true );
        $meta = is_array( $meta ) ? $meta : [];

        // Validate if image files exist and are readable
        $jpeg_status = ( file_exists( $destination_path ) && is_readable( $destination_path ) ) ? $destination_path : false;
        $webp_status = ( file_exists( $destination_webp_path ) && is_readable( $destination_webp_path ) ) ? $destination_webp_path : false;

        // Create a unique ID for this set of meta info
        //   $unique_id = md5( $width . $height . $q . $webp_quality . $png_jpeg );
        $unique_id = sha1( $width . $height . $q . $webp_quality . $png_jpeg );
        //   error_log( self::uploadsDir( $jpeg_status, false ) );
        // Construct the new metadata
        $meta[$unique_id] = [
            'xgen_w'         => $width,
            'xgen_h'         => $height,
            'xgen_q'         => (int) $q,
            'xgen_webp_q'    => (int) $webp_quality,
            'xgen_png_jpeg'  => $png_jpeg,
            'xgen_jpeg_path' => self::uploadsDir( $jpeg_status, false ),
            'xgen_webp_path' => self::uploadsDir( $webp_status, false )
        ];

        // Update the 'xgen' metadata in the database
        update_post_meta( $id, 'xgen', $meta );

    }

    public static function isWebp( $filePath ) {
        $fileInfo = pathinfo( $filePath );
        return ( array_key_exists( 'extension', $fileInfo ) && strtolower( $fileInfo['extension'] ) === 'webp' );
    }

    /**
     * Deletes build images from the WordPress uploads directory.
     *
     * This function deletes all files in the WordPress uploads directory that have
     * filenames containing '-is-x-build'. It also updates relevant options and transients.
     * The operation is restricted to users with 'manage_options' capability and those
     * marked as developers by MyHelpers::isDeveloper().
     *
     * @throws InvalidArgumentException If the user is unauthorized.
     * @throws RuntimeException If the uploads directory is not found or a file cannot be deleted.
     */
    public static function deleteBuildImages() {
        // Check user authorization
        if (  !  current_user_can( 'manage_options' ) || !  MyHelpers::isDeveloper() ) {
            wp_send_json_error( 'Unauthorized user' );
            return;
        }

        // Get the uploads directory path
        $uploads_dir  = wp_upload_dir();
        $uploads_path = $uploads_dir['basedir'];

        // Check if the uploads directory exists
        if (  !  is_dir( $uploads_path ) ) {
            wp_send_json_error( 'Uploads directory not found' );
            return;
        }

        // Initialize a response array to keep track of deleted files
        $response = [];

        // Create a Recursive Directory Iterator to loop through the uploads directory
        $dir_iterator = new \RecursiveDirectoryIterator( $uploads_path, \FilesystemIterator::SKIP_DOTS );
        $iterator     = new \RecursiveIteratorIterator( $dir_iterator, \RecursiveIteratorIterator::SELF_FIRST );

        // Loop through files and directories to find and delete build images
        foreach ( $iterator as $file ) {
            // Check if it's a file (skip directories)
            if ( $file->isFile() ) {
                // Check if the filename contains '-is-x-build'
                if ( strpos( $file->getFilename(), '-is-x-build' ) !== false ) {
                    $filePath = $file->getPathname();
                    // Record the file path in the response array
                    $response[] = $filePath;
                    // Delete the file
                    if (  !  unlink( $filePath ) ) {
                        throw new \RuntimeException( "Failed to delete file: {$filePath}" );
                    }
                }
            }
        }

        // Update relevant options and transients
        update_option( 'options_use_build_images_mode', 0, false );
        $TransientData = get_transient( 'ks_theme_data' );
        if ( $TransientData !== false ) {
            $TransientData['use_build_images_mode'] = 0;
            set_transient( 'ks_theme_data', $TransientData );
        }

        // Send a JSON response with the list of deleted files
        wp_send_json_success( $response );
    }

}