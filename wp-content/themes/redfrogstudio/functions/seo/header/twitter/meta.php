<?php
/**
 * This action hook adds various Twitter-related meta tags to the <head> section of the website.
 * It uses custom fields to populate these meta tags.
 */
use Kickstarter\MyHelpers;
add_action( 'wp_head', function () {

    // Fetch SEO and Schema data from custom fields
    $seo_data = get_seo_acf_fields();

    // Initialize an HTML string to hold the meta tags
    $html = '';

    // Twitter Meta Tags
    // ---------------------------------------

    // Title: Use company name if it exists, otherwise fall back to the blog name
    $default_company_name = isset( $seo_data['company_name'] ) ? $seo_data['company_name'] : get_bloginfo( 'name' );

    // Allow modification of the title via a filter
    $company_name = apply_filters( 'ks_seo_twitter_title', $default_company_name );
    if ( $company_name ) {
        $html .= "<meta name=\"twitter:title\" content=\"" . esc_attr( $company_name ) . "\">\n";
    }

    // Description: Use custom description if it exists, otherwise use the blog description
    $default_description = isset( $seo_data['description'] ) ? $seo_data['description'] : get_bloginfo( 'description' );

    // Allow modification of the description via a filter
    $description = apply_filters( 'ks_seo_twitter_description', $default_description );
    if ( $description ) {
        $html .= "<meta name=\"twitter:description\" content=\"" . esc_attr( $description ) . "\">\n";
    }

    // Image: Use custom Twitter image if it exists
    $t_image = isset( $seo_data['t_image'] ) ? $seo_data['t_image'] : null;
    $logo    = apply_filters( 'ks_seo_twitter_logo_url', $t_image );
    if ( $logo ) {
        $html .= "<meta property=\"twitter:image\" content=\"" . esc_url( MyHelpers::WPImage( $logo, [1200, 630] ) ) . "\">\n";
    }

    // Output the HTML meta tags
    echo $html;

}, 10 );