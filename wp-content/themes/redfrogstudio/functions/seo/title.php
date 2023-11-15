<?php
/**
 * This filter modifies the WordPress page title based on various conditions.
 * It handles titles for single pages, archives, 404 pages, and more.
 */
use Kickstarter\MySeo;
add_filter( 'wp_title', function ( $page_title ) {

    if (  !  MySeo::isActiveSeo() ) {
        return $page_title;;
    }

    // Default Page Title - Blog's Name
    $page_title = get_bloginfo( 'name' );
    $separator  = apply_filters( 'ks_seo_title_separator', '|' );

    // Singular Pages (Posts & Pages)
    // ---------------------------------------
    if ( is_singular() ) {
        $post_id   = get_the_ID();
        $post_meta = get_post_meta( $post_id, '_ks_seo_post_metadata_', true );

        $post_meta = str_replace( ['%title%', '%separator%', '%website_name%'], [esc_attr( get_the_title( $post_id ) ), $separator, esc_attr( get_bloginfo( 'name' ) )], $post_meta );

        // Use custom meta title if it exists
        if ( isset( $post_meta['ks_seo_page_meta_title'] ) && !  empty( $post_meta['ks_seo_page_meta_title'] ) ) {
            $page_title = wp_strip_all_tags( $post_meta['ks_seo_page_meta_title'], true );
        }
    }

    // Archive Pages
    // ---------------------------------------
    // Category Archive
    elseif ( is_category() ) {
        $page_title = single_cat_title( '', false );
    }
    // Tag Archive
    elseif ( is_tag() ) {
        $page_title = single_tag_title( '', false );
    }
    // Custom Taxonomy Archive
    elseif ( is_tax() ) {
        $page_title = single_term_title( '', false );
    }

    // Special Pages
    // ---------------------------------------
    // Author Archive
    elseif ( is_author() ) {
        $page_title = get_the_author();
    }
    // Date Archive
    elseif ( is_date() ) {
        $page_title = get_the_date();
    }
    // Custom Post Type Archive
    elseif ( is_post_type_archive() ) {
        $page_title = post_type_archive_title( '', false );
    }
    // 404 Page
    elseif ( is_404() ) {
        $page_title = 'Page Not Found';
    }
    // Search Results Page
    elseif ( is_search() ) {
        $page_title = 'Search Results for: ' . get_search_query();
    }

    // Return the modified page title
    return $page_title;

}, 10 );