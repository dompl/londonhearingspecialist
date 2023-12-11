<?php
namespace Kickstarter;
use WebPConvert\WebPConvert;

class MyWebImagesGenerator extends MyHelpers {

    function __construct() {

        add_action( 'wp_ajax_AjaXgenGenerator', [$this, 'AjaXgenGenerator'] );
        add_action( 'wp_ajax_AjaxDeleteXgenMeta', [$this, 'AjaxDeleteXgenMeta'] );
        add_action( 'wp_ajax_AjaxDeleteXgenMetaTest', [$this, 'AjaxDeleteXgenMetaTest'] );
        add_action( 'wp_ajax_AjaxDeleteWebPImages', [$this, 'AjaxDeleteWebPImages'] );

    }

    public static function getMissingWebpCount() {

        $query   = self::WebPImagesQuery( true );
        $missing = 0;
        if ( $query->have_posts() ) {
            while ( $query->have_posts() ) {
                $query->the_post();
                $post_id = get_the_ID();
                $images  = get_post_meta( $post_id, 'xgen', true );
                if ( empty( $images ) ) {
                    continue;
                }
                foreach ( $images as $image ) {
                    // Check if 'xgen' is an array and 'xgen_webp_path' is set to false
                    if ( is_array( $image ) && isset( $image['xgen_webp_path'] ) && $image['xgen_webp_path'] == false ) {
                        $missing++;
                    }
                }

            }
        }
        wp_reset_postdata();

        return $missing;

    }

    /**
     * Constructs a WP_Query to fetch image attachments, with an optional meta query.
     *
     * This function can be used to retrieve all image attachments or only those
     * that have a specific meta key ('xgen' by default). Additional query parameters
     * can be merged into the default query parameters if needed.
     *
     * @param bool  $xgen   Whether to include a meta query for the 'xgen' meta key.
     * @param array $addons Additional query arguments to merge with the defaults.
     *
     * @return \WP_Query The WP_Query instance for retrieving image attachments.
     */
    public static function WebPImagesQuery( $xgen = false, $addons = [] ) {
        // Default query arguments for fetching image attachments.
        $args = [
            'post_type'      => 'attachment',
            'post_mime_type' => 'image',
            'post_status'    => 'inherit',
            'posts_per_page' => -1, // Fetch all matching posts.
            'meta_query' => [
                [
                    'key'     => 'xgen',
                    'compare' => 'EXISTS' // Only include posts with the 'xgen' meta key.
                ]
            ]
        ];

        // If $xgen is true, add a meta query to fetch only attachments with 'xgen' meta key.
        if ( $xgen ) {
            $args['meta_query'] = [
                [
                    'key'     => 'xgen',
                    'compare' => 'EXISTS' // Only include posts with the 'xgen' meta key.
                ]
            ];
        }

        // If additional arguments are provided, merge them with the default arguments.
        if (  !  empty( $addons ) ) {
            $args = array_merge( $args, $addons );
        }

        // Return a new WP_Query instance with the constructed query arguments.
        return new \WP_Query( $args );
    }

    /**
     * AJAX handler for testing the retrieval of 'xgen' meta data from image attachments.
     *
     * This function queries for all image attachments and collects their 'xgen' meta data.
     * It is used for testing purposes to verify the presence and structure of 'xgen' meta data.
     * The collected data is then returned as a JSON response.
     */
    public function AjaxDeleteXgenMetaTest() {
        // Query for all image attachments without any additional parameters.
        $the_query = self::WebPImagesQuery( false );

        // Check if there are any posts found by the query.
        if ( $the_query->have_posts() ) {
            $item = []; // Initialize an array to hold the meta data.

            // Loop through all posts returned by the query.
            while ( $the_query->have_posts() ) {
                $the_query->the_post(); // Set up the global post data.
                $image_id = get_the_ID(); // Retrieve the current post's ID.
                $meta     = get_post_meta( $image_id, 'xgen', true ); // Get the 'xgen' meta data.

                // If the meta data is not empty, add it to the $item array.
                if (  !  empty( $meta ) ) {
                    $item[] = $meta;
                }
            }
            // Restore the original post data to avoid conflicts with the global post object.
            wp_reset_postdata();

            // Send a JSON response with the collected 'xgen' meta data.
            wp_send_json_success( [
                'data' => $item
            ] );
        }
    }

    /**
     * Visits a given URL using cURL and appends a query parameter to prevent 'xgen' generation.
     *
     * @param string $url The URL to visit.
     * @return bool Indicates whether the URL was visited successfully.
     * @throws Exception Throws an exception if cURL encounters an error.
     */
    public function visitUrl( $url ) {
        // Validate the URL (this is just a simple filter, more checks might be necessary)
        if (  !  filter_var( $url, FILTER_VALIDATE_URL ) ) {
            throw new Exception( 'Invalid URL provided.' );
        }

        $separator = ( parse_url( $url, PHP_URL_QUERY ) == NULL ) ? '?' : '&';
        $full_url  = $url . $separator . 'no-xgen-generation';

        $ch = curl_init();
        curl_setopt( $ch, CURLOPT_URL, $full_url );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt( $ch, CURLOPT_USERAGENT, 'Custom User-Agent String' );
        curl_setopt( $ch, CURLOPT_TIMEOUT, 10 ); // Set a 10-second timeout for the request

        $output      = curl_exec( $ch );
        $http_status = curl_getinfo( $ch, CURLINFO_HTTP_CODE ); // Get the HTTP status code

        if ( curl_errno( $ch ) ) {
            error_log( 'cURL error for URL ' . $full_url . ': ' . curl_error( $ch ) );
            curl_close( $ch );
            throw new Exception( 'cURL error: ' . curl_error( $ch ) );
        }

        curl_close( $ch );

        if ( $http_status >= 200 && $http_status < 300 ) {
            error_log( 'Visited URL successfully: ' . $full_url );
            return true; // Successful HTTP response
        } else {
            error_log( 'Unexpected HTTP status code: ' . $http_status . ' for URL: ' . $full_url );
            return false; // Non-successful HTTP response
        }
    }

    public function AjaxDeleteWebPImages() {

        // Check for the 'start' and 'limit' parameters in the AJAX request
        $start = isset( $_POST['start'] ) ? intval( $_POST['start'] ) : 0;
        $limit = isset( $_POST['limit'] ) ? intval( $_POST['limit'] ) : 5; // changed to 5

        // Additional arguments for the WP_Query
        $addons = array(
            'offset'         => $start,
            'posts_per_page' => $limit
        );

        // Use the helper method to get the query
        $the_query = self::WebPImagesQuery( true, $addons );

        if ( $the_query->have_posts() ) {

            while ( $the_query->have_posts() ): $the_query->the_post();

                $image_id = get_the_ID();
                $meta     = get_post_meta( $image_id, 'xgen', true );

                if (  !  empty( $meta ) ) {

                    foreach ( $meta as $key => $value ) {
                        $file = self::uploadsDir( $value['xgen_webp_path'], true );

                        if ( file_exists( $file ) && is_file( $file ) ) {

                            if ( unlink( $file ) ) {

                                $meta[$key]['xgen_webp_path'] = false;
                                update_post_meta( $image_id, 'xgen', $meta );

                            };
                        }
                    }

                }

            endwhile;

            wp_reset_postdata();

            // Get the total number of images
            $totalImages = $the_query->found_posts;

            // Return a response to the AJAX request
            wp_send_json_success( array(
                'processed'    => $limit,
                'next_start'   => $start + $limit,
                'total_images' => $totalImages
            ) );
        }

    }

    /**
     * Handles AJAX requests to delete 'xgen' meta data from attachments and process various URL visits.
     *
     * This function operates in batches to manage server load. It performs the following actions:
     * - Deletes 'xgen' meta data from image attachments.
     * - Generates 'xgen' meta entries for PNG images for WebP conversion.
     * - Visits URLs of posts, custom post types, taxonomies, a random 404 page, and the home page.
     * The function returns a JSON success message with details about the processed items.
     */

    public function AjaxDeleteXgenMeta() {

        // Check if the offset is set in the POST request, otherwise initialize to 0
        $offset = isset( $_POST['offset'] ) ? intval( $_POST['offset'] ) : 0;
        $limit  = 5; // Set a limit for batch size
        // Initialize totalImagesProcessed
        $totalImagesProcessed = 0;
        do {
            // Use the helper method to get the query for images
            $addons = array(
                'offset'         => $offset,
                'posts_per_page' => $limit
            );
            $the_query = self::WebPImagesQuery( true, $addons );

            if ( $the_query->have_posts() ) {

                while ( $the_query->have_posts() ) {

                    $the_query->the_post();

                    $image_id = get_the_ID();

                    $delete = delete_post_meta( $image_id, 'xgen' );

                    $image_path = wp_get_original_image_path( $image_id );

                    $file_name = basename( $image_path );

                    if ( strpos( $file_name, '-xgen-' ) === false ) {

                        // Get the directory path of the image file
                        $dir_path = dirname( $image_path );

                        // Replace the extension from .png to .webp
                        $webp_file_name = str_replace( '.png', '.webp', $file_name );

                        // Construct the full path for the .webp file
                        $webp_file_path = $dir_path . '/' . $webp_file_name;

                        // Check if the .webp file exists and is readable
                        if ( file_exists( $webp_file_path ) && is_readable( $webp_file_path ) ) {
                            // The .webp file exists and is readable
                            // Nothing to do here
                        } else {

                            if ( file_exists( $image_path ) && is_readable( $image_path ) ) {

                                $meta = get_post_meta( $image_id, 'xgen', true );
                                $meta = is_array( $meta ) ? $meta : [];

                                $image_size = \getimagesize( $image_path );

                                $width        = $image_size[0];
                                $height       = $image_size[1];
                                $q            = 100;
                                $webp_quality = self::getThemeData( 'webp_img_quality' ) ? self::getThemeData( 'webp_img_quality' ) : self::defaultWebpQuality();
                                $png_jpeg     = false;

                                $unique_id = sha1( $width . $height . $q . $webp_quality . $png_jpeg );

                                $meta[$unique_id] = [
                                    'xgen_w'         => $width,
                                    'xgen_h'         => $height,
                                    'xgen_q'         => (int) $q,
                                    'xgen_webp_q'    => (int) $webp_quality,
                                    'xgen_png_jpeg'  => $png_jpeg,
                                    'xgen_jpeg_path' => self::uploadsDir( $image_path, false ),
                                    'xgen_webp_path' => false
                                ];
                                update_post_meta( $image_id, 'xgen', $meta );

                            }

                        }

                    }

                }

            }
            $totalImagesProcessed += $limit;
            // Restore original Post Data
            wp_reset_postdata();

            $offset += $limit; // Update offset for next batch

        } while ( $the_query->found_posts > $offset ); // Continue as long as there are posts to process

        //   Other post types
        $post_types        = get_post_types( array( 'public' => true ), 'names' );
        $post_type_offsets = array_fill_keys( array_values( $post_types ), 0 ); // Initialize an offset of 0 for each post type

        foreach ( $post_types as $post_type ) {

            $limit = 5; // Set a limit for batch size

            do {
                $offset = $post_type_offsets[$post_type]; // Get the current offset for this post type

                $addons = array(
                    'post_type'      => $post_type,
                    'posts_per_page' => $limit,
                    'offset'         => $offset,
                    'post_status'    => 'publish'
                );
                // Use the helper method for the custom post type query
                $query = self::WebPImagesQuery( false, $addons );

                while ( $query->have_posts() ) {
                    $query->the_post();
                    $url = get_permalink();
                    $this->visitUrl( $url );
                }

                wp_reset_postdata();

                $post_type_offsets[$post_type] += $limit; // Update offset for next batch

            } while ( $query->found_posts > $post_type_offsets[$post_type] ); // Continue as long as there are posts to process
        }

        // Get all public taxonomies
        $taxonomies = get_taxonomies( array( 'public' => true ), 'names' );

        foreach ( $taxonomies as $taxonomy ) {

            $offset = 0; // Initialize offset for each taxonomy
            $limit  = 5; // Set a limit for batch size

            // Query for a count of all terms in this taxonomy
            $term_count = wp_count_terms( $taxonomy );

            do {
                $terms = get_terms( array(
                    'taxonomy' => $taxonomy,
                    'offset'   => $offset,
                    'number'   => $limit
                ) );

                foreach ( $terms as $term ) {
                    $url = get_term_link( $term );
                    if (  !  is_wp_error( $url ) ) {
                        $this->visitUrl( $url );
                    }
                }

                $offset += $limit; // Update offset for next batch

            } while ( $offset < $term_count ); // Continue as long as there are terms to process
        }

        // Visit 404 page
        $page_404 = md5( rand( 100, 99999 ) );
        $url      = home_url( $page_404 );
        $this->visitUrl( $url );
        $this->visitUrl( home_url() );

        // Before the wp_send_json_success call
        $total_images = wp_count_posts( 'attachment' )->inherit; // Total number of image attachments
        // Check if there's more to process for the next batch
        $more_to_process = $totalImagesProcessed < $total_images;

        // Return the JSON response with more actionable data for the frontend
        wp_send_json_success( [
            'processed_images' => $totalImagesProcessed,
            'total_images'     => $total_images,
            'next_offset'      => $more_to_process ? $offset : null,
            'more_to_process'  => $more_to_process,
            'message'          => $more_to_process ? 'More images to process.' : 'All images have been processed.'
        ] );

    }

    /**
     * WebpGenerator - Generates WebP images based on JPEG images from post metadata.
     *
     * This function takes a WordPress post ID, retrieves its metadata to find JPEG images,
     * and attempts to convert them into WebP format. If a JPEG file is not found, the post
     * is deleted. It uses a caching mechanism to avoid unnecessary file system checks,
     * and logs any conversion errors.
     *
     * @param int $post_id - The ID of the WordPress post containing metadata for image conversion.
     * @return void
     */
    private function WebpGenerator( $post_id ) {
        // Cache to store file check results to avoid repetitive file system operations.
        $fileChecks = [];

        // Fetch post metadata by the given post_id.
        $meta = get_post_meta( $post_id, 'xgen', true );

        // Exit the function if metadata is empty, as there's nothing to process.
        if ( empty( $meta ) ) {
            return;
        }

        // Loop through each item in the metadata to process JPEG images.
        foreach ( $meta as $key => $item ) {

            // Validate $item structure to ensure necessary keys exist.
            if (  !  is_array( $item ) || !  isset( $item['xgen_jpeg_path'], $item['xgen_webp_path'] ) ) {
                continue; // Skip to the next iteration if $item or keys are invalid.
            }

            // Construct absolute paths for jpeg_path and webp_path.

            $jpeg_path = self::uploadsDir( $item['xgen_jpeg_path'], true ); // Ensure no leading slash on $item['xgen_jpeg_path'].
            $webp_path = self::uploadsDir( $item['xgen_webp_path'], true ); // Ensure no leading slash on $item['xgen_webp_path'].

            // Get the directory name and filename without extension
            $dir      = pathinfo( $jpeg_path, PATHINFO_DIRNAME );
            $filename = pathinfo( $jpeg_path, PATHINFO_FILENAME );
            // Construct new path with .webp extension
            $dummy_webp_path = $dir . '/' . $filename . '.webp';

            // Check and cache file existence and readability for jpeg_path.
            if (  !  isset( $fileChecks[$jpeg_path] ) ) {
                $fileChecks[$jpeg_path] = file_exists( $jpeg_path ) && is_readable( $jpeg_path );
            }

            if (  !  $fileChecks[$jpeg_path] ) {
                continue;
            }

            if (  !  isset( $fileChecks[$dummy_webp_path] ) ) {
                $fileChecks[$dummy_webp_path] = is_file( $dummy_webp_path ) && file_exists( $dummy_webp_path ) && is_readable( $dummy_webp_path );
            }

            if ( $fileChecks[$dummy_webp_path] ) {
                continue;
            }

            // // Check and cache file existence and readability for webp_path.
            if (  !  isset( $fileChecks[$webp_path] ) ) {
                $fileChecks[$webp_path] = is_file( $webp_path ) && file_exists( $webp_path ) && is_readable( $webp_path );
            }

            $wpq      = (int) $item['xgen_webp_q'];
            $info     = pathinfo( $jpeg_path );
            $suffix   = $wpq < 100 ? "-{$wpq}" : "";
            $filename = explode( '-autoxgen-', $info['filename'] )[0]; // This will get the original filename without the autoxgen and dimensions suffix.
            $output   = $info['dirname'] . '/' . $filename . '-autoxgen-' . "{$item['xgen_w']}x{$item['xgen_h']}" . $suffix . '.webp';

            if (  !  isset( $fileChecks[$output] ) ) {
                $fileChecks[$output] = is_file( $output ) && file_exists( $output ) && is_readable( $output );
            }

            if ( $fileChecks[$output] ) {
                $meta[$key]['xgen_webp_path'] = self::uploadsDir( $output, false );
                update_post_meta( $post_id, 'xgen', $meta );
                continue;
            }

            // Construct paths for source JPEG and destination WebP images.
            $source = $jpeg_path;

            $info   = pathinfo( $source );
            $output = $info['dirname'] . '/' . $info['filename'] . '.webp';

            // Check and cache file existence and readability for webp_path.
            if (  !  isset( $fileChecks[$output] ) ) {
                $fileChecks[$output] = file_exists( $output ) && is_readable( $output );
            }

            // Skip to the next iteration if webp_path is already valid.
            if ( $fileChecks[$output] ) {
                continue;
            }
            // Ensure $source is a valid file and the directory for $output exists before attempting conversion.
            if ( is_file( $source ) && is_dir( dirname( $output ) ) ) {

                try {
                    // Get image quality setting for WebP conversion, with a fallback to default quality.
                    $wpq = self::getThemeData( 'webp_img_quality' ) ? self::getThemeData( 'webp_img_quality' ) : self::defaultWebpQuality();

                    $info     = pathinfo( $output );
                    $suffix   = $wpq < 100 ? "-{$wpq}" : "";
                    $filename = explode( '-autoxgen-', $info['filename'] )[0]; // This will get the original filename without the autoxgen and dimensions suffix.
                    $output   = $info['dirname'] . '/' . $filename . '-autoxgen-' . "{$item['xgen_w']}x{$item['xgen_h']}" . $suffix . '.webp';

                    // Perform the WebP conversion.
                    WebPConvert::convert( $source, $output, ['quality' => (int) $wpq] );

                    // If the WebP file is successfully created and is readable, update metadata.
                    if ( file_exists( $output ) && is_readable( $output ) ) {

                        $uploads_info                 = wp_get_upload_dir();
                        $uploads_dir                  = $uploads_info['basedir'];
                        $meta[$key]['xgen_webp_path'] = str_replace( $uploads_dir, '', $output );
                        $meta[$key]['xgen_webp_q']    = (int) $wpq;

                        update_post_meta( $post_id, 'xgen', $meta );

                        // After a successful update, suggest running garbage collection.
                        gc_collect_cycles();
                    } else {
                        error_log( 'File conversion failed' );
                    }
                } catch ( ConversionFailedException $e ) {
                    // Log the error message.
                    $message = 'Error converting to webp: ' . $e->getMessage();
                    error_log( $message );

                    // Suggest garbage collection after logging the error
                    gc_collect_cycles();
                }
            } else {
                // Log an error if file paths are invalid.
                error_log( 'Invalid file or directory path: ' . $source . ', ' . $output );
            }
        }

        // Suggest running garbage collection after the whole process as well.
        gc_collect_cycles();
    }

    public function AjaXgenGenerator() {

        // Check for the 'start' and 'limit' parameters in the AJAX request
        // Check for the 'start' and 'limit' parameters in the AJAX request
        $start = isset( $_POST['start'] ) ? intval( $_POST['start'] ) : 0;
        $limit = isset( $_POST['limit'] ) ? intval( $_POST['limit'] ) : 1;

        // Use the helper method to get the query for images with 'xgen' meta key
        $addons = array(
            'offset'         => $start,
            'posts_per_page' => $limit,
            'meta_query'     => array(
                array(
                    'key'     => 'xgen',
                    'compare' => 'EXISTS'
                )
            )
        );
        $the_query = self::WebPImagesQuery( true, $addons );

        if ( $the_query->have_posts() ) {

            while ( $the_query->have_posts() ): $the_query->the_post();
                $image_id = get_the_ID();
                $image    = wp_get_attachment_image_src( $image_id )[0];
                $this->WebpGenerator( $image_id );
            endwhile;

            wp_reset_postdata();

            // Get the total number of images
            $totalImages = $the_query->found_posts;

            // Return a response to the AJAX request
            wp_send_json_success( array(
                'processed'    => $limit,
                'next_start'   => $start + $limit,
                'total_images' => $totalImages,
                'image_id'     => $image_id,
                'thumbnail'    => $image
            ) );
        }
    }

}

new MyWebImagesGenerator();