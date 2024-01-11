<?php
add_action( 'ks_after_body', 'london_page_banner_html', 40 );

function london_page_banner_html() {

    $banner_images = london_banner_images();

    global $post;

    if ( empty( $banner_images ) ) {
        return $banner_images;
    }

    shuffle( $banner_images );

    $main_image = \Kickstarter\MyHelpers::WPImage( id: $banner_images[0], size: [1200, 800] );

    $title       = apply_filters( 'london_banner_title', get_the_title(), $post );
    $addon       = apply_filters( 'london_banner_addon', '', $post );
    $description = apply_filters( 'london_banner_addon_desc', '', $post );

    $html = '<div class="london-banner" style="background-image:url(' . $main_image . ')">';
    $html .= '<div class="container">';
    $html .= '<div class="top">';
    $html .= '<div class="title"><h1>' . $title . '</h2></div>';
    $html .= '<div class="bottom">';
    $html .= $addon ? '<div class="addon">' . $addon . '</div>' : '';
    $html .= $description ? '<div class="description">' . $description . '</div>' : '';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '</div>';

    echo $html;

}

add_filter( 'london_banner_addon_desc', function ( $addon, $post ) {
    if (  !  empty( $post->ID ) ) {
        $addon = get_post_meta( $post->ID, 'london_banner_addon_desc', true );
    }
    return $addon;
}, 10, 2 );

add_filter( 'london_banner_addon', function ( $addon, $post ) {
    if (  !  empty( $post->ID ) ) {
        $addon = get_post_meta( $post->ID, 'london_banner_addon', true );
    }
    return $addon;
}, 10, 2 );

add_filter( 'london_banner_title', function ( $title, $post ) {
    $title = get_post_meta( $post->ID, 'london_banner_title', true );
    if ( empty( $title ) ) {
        $title = get_the_title();
    } else {
        $title = str_replace( '%title%', get_the_title(), $title );
    }
    return $title;
}, 10, 2 );