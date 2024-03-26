<?php
use London\Acf;
add_action( 'ks_after_body', 'london_page_banner_html', 40 );

function london_page_banner_html() {

    global $post;

    $main_image = get_post_meta( $post->ID, 'bcg_image', true );
    $img        = [];

    if (  !  empty( $main_image ) && !  empty( $post->ID ) ) {

        $img[] = $main_image;
        $img   = \Kickstarter\MyHelpers::WPImage( id: $main_image, size: [2000, 600] );

    } else {

        $banner_images = london_banner_images();

        if (  !  empty( $banner_images ) ) {

            shuffle( $banner_images );
            $img = \Kickstarter\MyHelpers::WPImage( id: $banner_images[0], size: [2000, 600] );
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
    $color       = get_post_meta( $post->ID, 'banner_color', true ) ? get_post_meta( $post->ID, 'banner_color', true ) : 'text';
    $batch_color = get_post_meta( $post->ID, 'batch_color', true );

    $html = '<div class="london-banner ' . ( $description ? 'has-description' : 'no-description' ) . '" style="background-image:url(' . $img . ')">';
    $html .= '<div class="container">';
    $html .= '<div class="wrapper">';

    if (  !  empty( $batch ) ) {
        $html .= '<div class="batch-wrapper"><span class="button batch ' . ( $batch_color ?? 'brand' ) . '">' . $batch . '</span></div>';
    }

    $html .= '<div class="title"><h1 class="color-' . $color . '">' . $title . '</h1></div>';

    //  if ( function_exists( 'yoast_breadcrumb' ) && !  is_front_page() ) {
    //      ob_start(); // Start output buffering
    //      yoast_breadcrumb( '<div id="london-breadcrumbs" class="color-' . $color . ' a-' . $color . '">', '</div>' );
    //      $html .= ob_get_clean(); // Get the buffered output and clear the buffer
    //  }

    $html .= $addon ? '<div class="addon">' . $addon . '</div>' : '';
    $html .= $description ? '<div class="description" class="color-' . $color . '">' . $description . '</div>' : '';
    $html .= Acf::ButtonAcfHtml( false, 'banner_', $post );

    $html .= '</div>';
    $html .= '</div>';
    $html .= '</div>';

    $html .= apply_filters( 'london_banner_after', '', $post );

    echo $html;

}

function london_banner_after( $html, $post ) {
    $hide_delivery_notes = get_post_meta( 'hide_delivery_notes', true );
    if ( $hide_delivery_notes ) {
        return $html;
    }

    $items = array(
        ['image' => '1904', 'title' => '10% discount incentive offered for new users - can you offer a discount']
    );

    $html .= '<div class="london-banner-delivery">';
    $html .= '<div class="container">';
    $html .= '</div>';
    $html .= '</div>';

    return;
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

    // Check if we are on the shop page.
    if ( is_shop() ) {
        // Add specific text for the shop page.
        return 'London Hearing Specialists Shop';
    }

    // Retrieve the title from post meta.
    $title = get_post_meta( $post->ID, 'london_banner_title', true );

    // Default title if meta is empty.
    if ( empty( $title ) ) {
        $title = get_the_title();
    } else {
        $title = str_replace( '%title%', get_the_title(), $title );
    }

    // Check if we are on a product category page.
    if ( is_product_category() ) {
        $category = get_queried_object(); // Get the current category object.
        if ( $category && property_exists( $category, 'name' ) ) {
            // Append the category name to the title.
            $title = 'Category: ' . $category->name;
        }
    }

    return $title;
}, 10, 2 );