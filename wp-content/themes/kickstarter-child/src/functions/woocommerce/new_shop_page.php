<?php
use Kickstarter\MyHelpers;
// Remove default WooCommerce product loop

// Add custom function to display categories
add_action( 'london_new_shop', 'custom_display_product_categories_title', 10 );
add_action( 'london_new_shop', 'custom_display_product_categories', 20 );

function custom_display_product_categories_title() {
    echo '<div class="container new-shop-container-title">';
    echo '<h2>Hearing and Ear Care Experts</h2>';
    echo '<hp>London Hearing Specialist offers a wide range of hearing aids and accessories to fit every budget. With the latest technology and essential accessories like chargers, microphones, batteries and filters, we have everything you need for optimal hearing and ear care.
</p>';
    echo '</div>';
}

function custom_display_product_categories() {

    // Display product categories
    $args = array(
        'taxonomy'   => 'product_cat',
        'orderby'    => 'name',
        'order'      => 'ASC',
        'hide_empty' => true
    );

    $product_categories = get_terms( $args );
    echo '<div class="container new-shop-container">';

    if (  !  empty( $product_categories ) && !  is_wp_error( $product_categories ) ) {
        echo '<ul class="product-categories">';
        foreach ( $product_categories as $category ) {
            $thumbnail_id = get_term_meta( $category->term_id, 'thumbnail_id', true ) ? get_term_meta( $category->term_id, 'thumbnail_id', true ) : 3058;
            echo '<li class="product-category">';
            echo '<a href="' . esc_url( get_term_link( $category ) ) . '" title="' . esc_html( $category->name ) . '">';
            echo '<img src="' . MyHelpers::WPImage( id: $thumbnail_id, size: [600, 600], retina: false ) . '" title="' . $category->name . '" width="300" loading="lazy">';
            echo '</a>';
            echo '<a href="' . esc_url( get_term_link( $category ) ) . '" title="' . esc_html( $category->name ) . '" class="button green clx">';
            echo esc_html( $category->name );
            echo '</a>';
            echo '</li>';
        }
        echo '</ul>';
    } else {
        echo '<p>' . __( 'No product categories found.', 'woocommerce' ) . '</p>';
    }
    echo '</div>';
}