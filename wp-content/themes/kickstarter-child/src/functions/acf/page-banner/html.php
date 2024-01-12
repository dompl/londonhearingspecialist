<?php
use London\Acf;
add_action( 'ks_after_body', 'london_page_banner_html', 40 );

function london_page_banner_html() {

    global $post;

    $main_image = get_post_meta( $post->ID, 'bcg_image', true );
    $img        = [];

    if (  !  empty( $main_image ) && !  empty( $post->ID ) ) {

        $img[] = $main_image;
        $img   = \Kickstarter\MyHelpers::WPImage( id: $main_image, size: [1200, 800] );

    } else {

        $banner_images = london_banner_images();

        if (  !  empty( $banner_images ) ) {

            shuffle( $banner_images );
            $img = \Kickstarter\MyHelpers::WPImage( id: $banner_images[0], size: [1200, 800] );
        }
    }

    if ( empty( $img ) ) {
        return false;
    }

    $title       = apply_filters( 'london_banner_title', get_the_title(), $post );
    $addon       = apply_filters( 'london_banner_addon', '', $post );
    $description = apply_filters( 'london_banner_addon_desc', '', $post );
    $button      = false;
    $batch       = get_post_meta( $post->ID, 'batch_text', true );
    $batch_color = get_post_meta( $post->ID, 'batch_color', true );

    $html = '<div class="london-banner" style="background-image:url(' . $img . ')">';
    $html .= '<div class="container">';
    $html .= '<div class="top">';
    if (  !  empty( $batch ) ) {
        $batch_color = $batch_color ?? 'brand';
        $html .= '<div class="batch-wrapper"><span class="button batch ' . $batch_color . '">' . $batch . '</span></div>';
    }
    $html .= '<div class="title"><h1>' . $title . '</h2></div>';
    $html .= '<div class="bottom">';
    $html .= $addon ? '<div class="addon">' . $addon . '</div>' : '';
    $html .= $description ? '<div class="description">' . $description . '</div>' : '';
    $html .= Acf::ButtonAcfHtml( false, 'banner_', $post );
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