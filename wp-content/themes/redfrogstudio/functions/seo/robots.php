<?php
/**
 * Robots Meta Tag Directives:
 *
 * Indexing and Following:
 * - 'index': Tells search engines that the page can be indexed and appear in search results. Opposite is 'noindex'.
 * - 'follow': Tells search engines that the links on the page can be followed to index other pages. Opposite is 'nofollow'.
 *
 * Additional Directives:
 * - 'max-image-preview:large': Sets the maximum size that an image from the page can be previewed in search results. Options are 'none', 'standard', and 'large'.
 * - 'max-snippet:-1': Controls the maximum number of characters that a snippet (meta description) can have in search results. '-1' means no limit.
 * - 'max-video-preview:-1': Controls the maximum length (in seconds) of video previews in search results. '-1' means there is no limit.
 *
 * Other Common Directives:
 * - 'noarchive': Tells search engines not to store a cached copy of the page.
 * - 'nosnippet': Prevents a text snippet or video preview from being shown in search results.
 * - 'unavailable_after:[date]': Tells search engines that the page should not be crawled after a certain date.
 */
add_action( 'init', function () {
    // Removing the default WordPress robots meta tag function
    // Setting priority to a high number to ensure it's removed after being added
    remove_filter( 'wp_robots', 'wp_robots' );
    remove_filter( 'wp_robots', 'wp_robots_max_image_preview_large' );
}, 10 );

// Custom robots meta tag function
add_action( 'wp_head', function () {
    // Start with your custom attributes
    $robots_content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    // Check if the "Discourage search engines from indexing this site" option is enabled
    if ( get_option( 'blog_public' ) == '0' ) {
        // If so, set robots to "noindex, nofollow"
        $robots_content = 'noindex, nofollow';
    }

    // Check if the domain or subdomain is "onfrog.co.uk"
    $host = $_SERVER['HTTP_HOST'];
    if ( strpos( $host, 'onfrog.co.uk' ) !== false ) {
        // Override robots to "noindex, nofollow"
        $robots_content = 'noindex, nofollow';
    }

    // Echo out the robots meta tag
    echo '<meta name="robots" content="' . $robots_content . '" />' . "\n";
}, 1 );