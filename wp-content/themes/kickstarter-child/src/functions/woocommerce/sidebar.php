<?php
/**
 * Product listing sidebar
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Add product categories and manufacturers lists to the sidebar
add_action( 'london_woocommerce_sidebar', 'display_categories_and_manufacturers_lists' );

function get_manufacturers_by_category( $category_id ) {

    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => -1,
        'fields'         => 'ids',
        'tax_query'      => array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'term_id',
                'terms'    => $category_id
            )
        )
    );
    $product_ids   = get_posts( $args );
    $manufacturers = array();
    foreach ( $product_ids as $product_id ) {
        $manufacturer = get_post_meta( $product_id, '_manufacturer', true );
        if (  !  empty( $manufacturer ) && !  in_array( $manufacturer, $manufacturers, true ) ) {
            $manufacturers[] = $manufacturer;
        }
    }
    return $manufacturers;
}

function display_categories_and_manufacturers_lists() {

    remove_action( 'pre_get_posts', 'pre_get_posts_products_per_page_filter' );

    $sidebar_items = get_option( 'options_london_woo_sidebar_items', [] );
    // Get product categories
    $product_categories = get_terms( array(
        'taxonomy'   => 'product_cat',
        'hide_empty' => true
    ) );

    // Get manufacturers

    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => -1,
        'fields'         => 'ids'
    );
    if ( is_product_category() ) {
        global $wp_query;
        $cat_obj           = $wp_query->get_queried_object();
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'product_cat',
                'field'    => 'term_id',
                'terms'    => $cat_obj->term_id
            )
        );
    }

    $query         = new WP_Query( $args );
    $manufacturers = array();
    if ( $query->have_posts() ):
        while ( $query->have_posts() ):
            $query->the_post();
            $product_id   = get_the_ID();
            $manufacturer = get_post_meta( $product_id, '_manufacturer', true );
            if (  !  empty( $manufacturer ) && !  in_array( $manufacturer, $manufacturers, true ) ) {
                $manufacturers[] = $manufacturer;
            }

        endwhile;

    endif;
    wp_reset_postdata();

    echo '<div class="london-woo-side-items">';

    if ( count( $product_categories ) > 1 ) {
        echo '<div class="sidebar-product-categories london-woo-side-item">';
        echo '<h3>' . __( 'Product Categories', 'london-child' ) . '</h3>';
        echo '<ul>';
        foreach ( $product_categories as $category ) {
            $active_class = ( is_tax( 'product_cat', $category ) || is_product_category( $category->term_id ) ) ? ' class="active"' : '';
            echo '<li' . $active_class . '><a href="' . esc_url( get_term_link( $category ) ) . '" >' . esc_html( $category->name ) . '</a></li>';
        }
        echo '</ul>';
        echo '</div>';
    }

    // Manufacturers List
    if (  !  empty( $manufacturers ) ) {
        echo '<div class="sidebar-manufacturers london-woo-side-item">';
        echo '<h3>' . __( 'Manufacturers', 'london-child' ) . '</h3>';
        echo '<ul>';
        $shop_page_url = get_permalink( wc_get_page_id( 'shop' ) );
        foreach ( $manufacturers as $manufacturer ) {
            $manufacturer_url = add_query_arg( 'manufacturer_filter', urlencode( $manufacturer ), $shop_page_url );
            echo '<li><a href="' . esc_url( $manufacturer_url ) . '">' . esc_html( $manufacturer ) . '</a></li>';
        }

        echo '</ul>';
        echo '</div>';
    }
    do_action( 'london_woo_sidebar_items', $sidebar_items );
    echo '</div>';

    add_action( 'pre_get_posts', 'pre_get_posts_products_per_page_filter' );
}

// Filter products by manufacturer
add_action( 'woocommerce_product_query', 'filter_products_by_manufacturer' );
/**
 * @param $query
 */
function filter_products_by_manufacturer( $query ) {
    if ( isset( $_GET['manufacturer_filter'] ) && !  empty( $_GET['manufacturer_filter'] ) ) {
        $meta_query = array(
            array(
                'key'     => '_manufacturer',
                'value'   => sanitize_text_field( $_GET['manufacturer_filter'] ),
                'compare' => '='
            )
        );

        $query->set( 'meta_query', $meta_query );
    }
}

// Add BOOK YOUR APPOINTMENTS

add_action( 'london_woo_sidebar_items', function ( $sidebar_items ) {

    $items = ['book_appointment', 'money_back'];

    foreach ( $items as $item ) {
        if ( in_array( $item, $sidebar_items ) ) {
        }
        $title       = get_option( 'options_london_side_' . $item . '_title' );
        $description = get_option( 'options_london_side_' . $item . '_description' );
        $link        = get_option( 'options_london_side_' . $item . '_link' );

        echo '<div class="london-woo-side-item ' . $item . '">';
        echo '<div class="inner">';
        echo $title ? '<div class="title">' . $title . '</div>' : '';
        echo $description ? '<div class="description">' . $description . '</div>' : '';
        echo  !  empty( $link ) ? '<div class="link"><a href="' . esc_url( $link['url'] ) . '" target="' . ( isset( $link['target'] ) ? $link['target'] : '' ) . '" class="btnStyle">' . ( $link['title'] ? $link['title'] : __( 'Discover More' ) ) . '</a></div>' : '';
        echo '</div>';
        echo '</div>';
    }

} );