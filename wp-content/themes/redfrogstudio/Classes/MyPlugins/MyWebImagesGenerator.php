<?php
namespace Kickstarter;
use WebPConvert\WebPConvert;

class MyWebImagesGenerator extends MyHelpers {

    function __construct() {

        add_action( 'wp_ajax_AjaXgenGenerator', [$this, 'AjaXgenGenerator'] );
        add_action( 'wp_ajax_AjaxDeleteXgenMeta', [$this, 'AjaxDeleteXgenMeta'] );
        add_action( 'wp_ajax_AjaxDeleteWebPImages', [$this, 'AjaxDeleteWebPImages'] );
        //   add_action( 'after_setup_theme', [$this, 'TestClass'] );

    }

    public function TestClass() {

        if (  !  self::isDeveloper() || is_admin() ) {
            return;
        }

        $args = array(
            'post_type'      => 'attachment',
            'post_mime_type' => 'image',
            'post_status'    => 'inherit',
            'posts_per_page' => isset( $_GET['posts'] ) ? $_GET['posts'] : 1 // Get all posts
        );

        $the_query = new \WP_Query( $args );

        if ( $the_query->have_posts() ) {

            while ( $the_query->have_posts() ) {

                $the_query->the_post();

                $image_id = get_the_ID();
                $meta     = get_post_meta( $image_id, 'xgen', true );

                if (  !  empty( $meta ) ) {

                    foreach ( $meta as $k => $v ) {
                        echo "Key: $k</br>";
                        foreach ( $v as $a => $b ) {
                            echo "$a : $b  </br>";
                        }
                        echo '++++++++++++++++++++<br>';
                    }
                    echo '<br>-----------------<br>';
                }

            }
        }
        // Restore original Post Data
        wp_reset_postdata();

    }

    /**
     * Sends a HTTP request to the specified URL using cURL.
     *
     * @param string $url The URL to visit.
     */
    public function visitUrl( $url ) {

        // Append the query parameter to the URL
        $separator = ( parse_url( $url, PHP_URL_QUERY ) == NULL ) ? '?' : '&';
        $full_url  = $url . $separator . 'no-xgen-generation';

        $ch = curl_init();
        curl_setopt( $ch, CURLOPT_URL, $full_url );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
        $output = curl_exec( $ch );

        if ( curl_errno( $ch ) ) {
            error_log( 'cURL error for URL ' . $full_url . ': ' . curl_error( $ch ) );
        } else {
            error_log( 'Visited URL: ' . $full_url );
        }
        curl_close( $ch );

    }

    public function AjaxDeleteWebPImages() {

        // Check for the 'start' and 'limit' parameters in the AJAX request
        $start = isset( $_POST['start'] ) ? intval( $_POST['start'] ) : 0;
        $limit = isset( $_POST['limit'] ) ? intval( $_POST['limit'] ) : 5; // changed to 5

        $args = array(
            'post_type'      => 'attachment',
            'post_mime_type' => 'image',
            'post_status'    => 'inherit',
            'posts_per_page' => $limit,
            'offset'         => $start,
            'meta_query'     => array(
                array(
                    'key'     => 'xgen',
                    'compare' => 'EXISTS' // This will only match posts that have the 'xgen' meta key.
                )
            )
        );

        $the_query = new \WP_Query( $args );

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

    public function AjaxDeleteXgenMeta() {

        // Check if the offset is set in the POST request, otherwise initialize to 0
        $offset = isset( $_POST['offset'] ) ? intval( $_POST['offset'] ) : 0;
        $limit  = 5; // Set a limit for batch size

        do {
            $args = array(
                'post_type'      => 'attachment',
                'post_mime_type' => 'image',
                'post_status'    => 'inherit',
                'posts_per_page' => $limit,
                'offset'         => $offset
            );

            $the_query = new \WP_Query( $args );

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

                                //   error_log( $image_path );

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
                                    'xgen_q'         => $q,
                                    'xgen_webp_q'    => $webp_quality,
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

                $query_args = array(
                    'post_type'      => $post_type,
                    'posts_per_page' => $limit,
                    'offset'         => $offset,
                    'post_status'    => 'publish'
                );

                $query = new \WP_Query( $query_args );

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

        wp_send_json_success( array(
            'processed' => true
        ) );

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
        //   error_log( print_r( $meta ) );

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

            $wpq      = $item['xgen_webp_q'];
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
            // error_log( '4402389345: ' . $source );
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
                        // error_log( 'Created output  ' . $output );
                        // error_log( 'Created item  ' . $meta[$key]['xgen_webp_path'] );
                    } else {
                        error_log( 'File conversion failed' );
                    }
                } catch ( ConversionFailedException $e ) {
                    // Log the error message.
                    $message = 'Error converting to webp: ' . $e->getMessage();
                    error_log( $message );
                }
            } else {
                // Log an error if file paths are invalid.
                error_log( 'Invalid file or directory path: ' . $source . ', ' . $output );
            }
        }
    }

    public function AjaXgenGenerator() {

        // Check for the 'start' and 'limit' parameters in the AJAX request
        $start    = isset( $_POST['start'] ) ? intval( $_POST['start'] ) : 0;
        $limit    = isset( $_POST['limit'] ) ? intval( $_POST['limit'] ) : 1;
        $image_id = false;
        $args     = array(
            'post_type'      => 'attachment',
            'post_mime_type' => 'image',
            'post_status'    => 'inherit',
            'posts_per_page' => $limit,
            'offset'         => $start,
            'meta_query'     => array(
                array(
                    'key'     => 'xgen',
                    'compare' => 'EXISTS' // This will only match posts that have the 'xgen' meta key.
                )
            )
        );

        $the_query = new \WP_Query( $args );
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