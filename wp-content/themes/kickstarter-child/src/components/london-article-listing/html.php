<?php
use Kickstarter\MyHelpers;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1708335400_london', 10, 2 );
add_filter( 'london_single_post_article', 'london_single_post_article_html', 10, 3 );
function wp_1708335400_london( $html, $data ) {

    $posts_per_page = get_component( 'posts_per_page', $data ) ? get_component( 'posts_per_page', $data ) : 6;

    // Your main loop content here

    $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
    $args  = array(
        'post_type' => 'post', // Change to your custom post type if needed
        'posts_per_page' => (int) $posts_per_page,
        'paged'     => $paged
    );

    $custom_query = new WP_Query( $args );

    if ( $custom_query->have_posts() ):
        $html .= '<div class="london-articles-listings">';
        while ( $custom_query->have_posts() ): $custom_query->the_post();

            $html .= apply_filters( 'london_single_post_article', false, get_the_ID(), $data );

        endwhile;
        $html .= '</div>';
        // Pagination
        $total_pages = $custom_query->max_num_pages;

        if ( $total_pages > 1 && get_component( 'display_pagination', $data ) != 1 ):
            $current_page = max( 1, get_query_var( 'paged' ) );
            $html .= '<div class="london-pagination">';
            $html .= paginate_links( array(
                'base'      => get_pagenum_link( 1 ) . '%_%',
                'format'    => 'page/%#%',
                'current'   => $current_page,
                'total'     => $total_pages,
                'prev_text' => __( '«' ),
                'next_text' => __( '»' )
            ) );
            $html .= '</div>';
        endif;

    else:
        // No posts found
    endif;

    // Reset post data to ensure the main loop isn't affected
    wp_reset_postdata();

    return $html;
}

function london_single_post_article_html( $html, $post_id = false, $data = [] ) {

    $html .= '<div class="london-single">';

    $image     = get_post_thumbnail_id( $post_id );
    $permalink = get_permalink( $post_id );
    $title     = get_the_title( $post_id );
    $excerpt   = get_the_excerpt( $post_id );
    $excerpt   = explode( '.', strip_tags( $excerpt ) )[0] . '.';
    $html .= '<div class="custom-post-wrapper">';
    if ( has_post_thumbnail( $post_id ) ) {
        $html .= '<a href="' . esc_url( $permalink ) . '" class="custom-post-link-image">';
        $html .= '<img src="' . MyHelpers::WPImage( id: $image, size: [400, 300] ) . '"/ >';
        $html .= '</a>';
    }
    $html .= '<a href="' . esc_url( $permalink ) . '" class="custom-post-link-title">';
    $html .= '<h3>' . esc_html( $title ) . '</h3>';
    $html .= '</a>';
    $html .= '<p class="custom-post-excerpt">' . esc_html( $excerpt ) . '</p>';
    $html .= '<div class="button-wrapper"><a href="' . esc_url( $permalink ) . '" class="button small">Read More</a></div>';
    $html .= '</div>';

    $html .= '</div>';

    return $html;
};