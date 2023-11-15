<?php

// Hook into the 'wp_head' action to output the canonical URL in the head section of the HTML
add_action( 'wp_head', function () {

    // Declare global $wp object to access WordPress query information
    global $wp;

    // Get the current URL of the page
    $current_url = home_url( add_query_arg( array(), $wp->request ) );

    // Check if the current page is a single post or page
    if ( is_single() || is_page() ) {
        // If so, get the permalink of the post or page
        $canonical_url = get_permalink();
    }
    // Check if the current page is a category archive
    elseif ( is_category() ) {
        // If so, get the link for the category
        $canonical_url = get_category_link( get_query_var( 'cat' ) );
    }
    // Check if the current page is a tag archive
    elseif ( is_tag() ) {
        // If so, get the link for the tag
        $canonical_url = get_tag_link( get_query_var( 'tag_id' ) );
    }
    // Check if the current page is a custom taxonomy archive
    elseif ( is_tax() ) {
        // If so, get the queried term object and its link
        $term          = get_queried_object();
        $canonical_url = get_term_link( $term, $term->taxonomy );
    }
    // Check if the current page is an author archive
    elseif ( is_author() ) {
        // If so, get the link for the author archive
        $canonical_url = get_author_posts_url( get_query_var( 'author' ), get_query_var( 'author_name' ) );
    }
    // Check if the current page is a search results page
    elseif ( is_search() ) {
        // If so, get the link for the search results
        $canonical_url = get_search_link( get_search_query() );
    }
    // Check if the current page is a date archive
    elseif ( is_date() ) {
        // Determine if it's a daily, monthly, or yearly archive and get the respective link
        if ( is_day() ) {
            $canonical_url = get_day_link( get_query_var( 'year' ), get_query_var( 'monthnum' ), get_query_var( 'day' ) );
        } elseif ( is_month() ) {
            $canonical_url = get_month_link( get_query_var( 'year' ), get_query_var( 'monthnum' ) );
        } elseif ( is_year() ) {
            $canonical_url = get_year_link( get_query_var( 'year' ) );
        }
    }
    // Check if the current page is a 404 error page
    elseif ( is_404() ) {
        // If so, use the current URL as the canonical URL (or you can specify a custom 404 page URL)
        $canonical_url = $current_url;
    }
    // For all other cases
    else {
        // Use the current URL as the canonical URL
        $canonical_url = $current_url;
    }

    // Output the canonical URL in a link tag, and escape the URL for security
    echo '<link rel="canonical" href="' . esc_url( $canonical_url ) . '" />' . "\n";

}, 10 );