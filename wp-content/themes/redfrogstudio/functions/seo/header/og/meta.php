<?php
/**
 * This action hook adds various SEO-related meta tags to the <head> section of the website.
 * It uses the MyHelpers class and custom fields to populate these meta tags.
 */
use Kickstarter\MyHelpers;
use Kickstarter\MySeo;

add_action( 'wp_head', function () {

    // Initialize a new instance of MyHelpers class
    $helpers = MyHelpers::getInstance();
    $mySeo   = MySeo::getInstance();

    if (  !  MySeo::isActiveAdvancedSeo() ) {
        return;
    }

    // Fetch SEO and Schema data from custom fields
    $seo_data = get_seo_acf_fields();

    // Initialize the HTML string to hold meta tags
    $html = '';

    // Default Title - Use company name if set, otherwise fall back to blog name
    $default_title = isset( $seo_data['company_name'] ) ? $seo_data['company_name'] : get_bloginfo( 'name' );

    // Allow the title to be modified via a filter
    $title = apply_filters( 'ks_seo_og_title', $default_title );

    // If title exists, start building Open Graph meta tags
    if ( $title ) {

        // Basic Open Graph Tags
        $html .= "<meta property=\"og:title\" content=\"" . esc_attr( $title ) . "\">\n";
        $html .= "<meta property=\"og:url\" content=\"" . MyHelpers::getCurrentPageUrl() . "\"/>\n";
        $html .= "<meta property=\"og:site_name\" content=\"" . get_bloginfo( 'name' ) . "\"/>\n";
        $html .= "<meta property=\"og:type\" content=\"website\"/>\n";
        $html .= "<meta property=\"og:locale\" content=\"" . get_locale() . "\" />\n";

        // Description
        $default_description = isset( $seo_data['description'] ) ? $seo_data['description'] : get_bloginfo( 'description' );
        $description         = apply_filters( 'ks_seo_og_description', $default_description );
        if ( $description ) {
            $html .= "<meta property=\"og:description\" content=\"" . esc_attr( $description ) . "\">\n";
        }

        // Website URL
        $default_website_url = isset( $seo_data['website_url'] ) ? $seo_data['website_url'] : home_url();
        $url                 = apply_filters( 'ks_seo_og_url', $default_website_url );
        if ( $url ) {
            $html .= "<meta property=\"og:url\" content=\"" . esc_url( $url ) . "\">\n";
        }

        // Logo and Image Dimensions
        $f_image = isset( $seo_data['f_image'] ) ? $seo_data['f_image'] : null;
        $logo    = apply_filters( 'ks_seo_og_logo_url', $f_image );
        if ( $logo ) {
            $html .= "<meta property=\"og:image\" content=\"" . esc_url( MyHelpers::WPImage( $logo, [1200, 630] ) ) . "\">\n";
            $html .= "<meta property=\"og:image:width\" content=\"1200\" />\n";
            $html .= "<meta property=\"og:image:height\" content=\"630\" />\n";
        }

        // Article timestamps for singular pages
        if ( is_singular() ) {
            $article_creation_time = get_the_date( 'c' );
            $article_modified_time = get_the_modified_date( 'c' );
            $html .= "<meta property=\"article:published_time\" content=\"" . esc_attr( $article_creation_time ) . "\" />\n";
            $html .= "<meta property=\"article:modified_time\" content=\"" . esc_attr( $article_modified_time ) . "\" />\n";
        }
    }

    // Output the HTML meta tags
    echo $html;

} );