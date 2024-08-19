<?php
use London\Helpers;
/**
 * General woocommerce functions
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
add_action( 'after_setup_theme', 'setup_woocommerce_support' );

function setup_woocommerce_support() {
    add_theme_support( 'woocommerce' );
}
/**
 * Set WooCommerce image dimensions upon theme activation
 */
// Remove each style one by one
add_filter( 'woocommerce_enqueue_styles', function ( $enqueue_styles ) {
    // unset( $enqueue_styles['woocommerce-general'] ); // Remove the gloss
    unset( $enqueue_styles['woocommerce-layout'] ); // Remove the layout
    // unset( $enqueue_styles['woocommerce-smallscreen'] ); // Remove the smallscreen optimisation
    return $enqueue_styles;
} );

// Remove page title on the shop
add_filter( 'woocommerce_show_page_title', 'london_remove_shop_page_title' );
/**
 * @param $bool
 * @return mixed
 */
function london_remove_shop_page_title( $bool ) {
    if ( is_shop() ) {
        return false;
    }
    return $bool;
}

function woocommerce_london_products_per_page() {
    // Add the products per page dropdown
    $products_per_page_options = array( 6, 9, 18, 26 );
    $current_option            = isset( $_GET['products_per_page'] ) ? (int) $_GET['products_per_page'] : 12;

    echo '<div class="products-per-page-dropdown">';
    echo '<label>' . __( 'Show', 'london-child' ) . ':</label> ';
    echo '<select name="products_per_page" onchange="window.location.href=this.value">';

    foreach ( $products_per_page_options as $option ) {
        $selected     = $current_option === $option ? ' selected' : '';
        $query_string = esc_url( add_query_arg( 'products_per_page', $option ) );
        echo '<option value="' . $query_string . '"' . $selected . '>' . $option . '</option>';
    }

    echo '</select>';
    echo '</div>';
}

// Wrap sorting information into a div

// Remove default result count and ordering actions
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );

/**
 * @param $query
 */
function pre_get_posts_products_per_page_filter( $query ) {
    if (  !  is_admin() && $query->is_main_query() && !  $query->get( 'custom_query' ) && is_post_type_archive( 'product' ) || is_product_taxonomy() ) {
        if ( isset( $_GET['products_per_page'] ) && (int) $_GET['products_per_page'] > 0 ) {
            $query->set( 'posts_per_page', (int) $_GET['products_per_page'] );
        } else {
            $query->set( 'posts_per_page', 6 );
        }
    }
}

// Modify the products per page based on user selection
add_action( 'pre_get_posts', 'pre_get_posts_products_per_page_filter' );

// Add custom wrapper function for result count and ordering
add_action( 'woocommerce_before_shop_loop', 'custom_result_count_ordering_wrapper_start', 20 );
function custom_result_count_ordering_wrapper_start() {

    echo '<div class="london-woo-ordering ' . ( Helpers::isNewLondon() ? 'new' : '' ) . '">';
    echo '<div class="left">';
    echo '</div>';

    echo '<div class="right">';
    //  echo '<a href="#sidebar-product-categories" class="see-categories button blue-dark small">Products Categories</a>';
    // First, check if WooCommerce is active
    if ( class_exists( 'WooCommerce' ) ) {
        if (  !  Helpers::isNewLondon() ) {
            // Fetch product categories
            $args = array(
                'taxonomy'   => 'product_cat',
                'orderby'    => 'name',
                'order'      => 'ASC',
                'hide_empty' => true
            );
            $product_categories = get_terms( $args );

            // Begin the select dropdown
            echo '<select name="product_categories" id="london-select-cats" onchange="window.location.href=this.value;">';
            echo '<option value="">Product Categories</option>';

            // Loop through product categories and create an option for each
            foreach ( $product_categories as $category ) {
                // Create an option element with the category name and link to the category
                echo '<option value="' . get_term_link( $category ) . '">' . $category->name . '</option>';
            }

            // Close the select element
            echo '</select>';
        }
        if ( Helpers::isNewLondon() ) {
            woocommerce_london_filter_popup();
        }
        woocommerce_catalog_ordering();
        if (  !  Helpers::isNewLondon() ) {
            woocommerce_london_products_per_page();
        }
    }
    echo '</div>';
    echo '</div>';
}

function woocommerce_london_filter_popup() {

    echo '<div class="show-all-filter">';
    echo '<a href="#all-filters" id="all-filter-button"><i class="icon-sliders-light"></i><span>Show All Filters</span></a>';
    echo '</div>';

}

// Add manucaturer

// Display "Manufacturer" field in product General tab
add_action( 'woocommerce_product_options_general_product_data', function () {
    echo '<div class="options_group">';
    woocommerce_wp_text_input( array(
        'id'          => '_manufacturer',
        'label'       => __( 'Manufacturer', 'london-child' ),
        'placeholder' => '',
        'description' => __( 'Enter the product manufacturer.', 'london-child' ),
        'desc_tip'    => true
    ) );
    echo '</div>';
} );

// Save "Manufacturer" field value
add_action( 'woocommerce_process_product_meta', function ( $post_id ) {
    $manufacturer = isset( $_POST['_manufacturer'] ) ? sanitize_text_field( $_POST['_manufacturer'] ) : '';
    update_post_meta( $post_id, '_manufacturer', $manufacturer );
} );

// // Display manufacturer under product title in loop
add_action( 'woocommerce_shop_loop_item_title', function () {
    global $product;
    $product_id   = $product->get_id();
    $manufacturer = get_post_meta( $product_id, '_manufacturer', true );

    if (  !  empty( $manufacturer ) ) {
        echo '<div class="woocommerce-loop-manufacturer">' . esc_html( $manufacturer ) . '</div>';
    }
} );

// Sort by Manufacturer ordering args
add_filter( 'woocommerce_get_catalog_ordering_args', 'sort_by_manufacturer_ordering_args' );
/**
 * @param $args
 * @return mixed
 */
function sort_by_manufacturer_ordering_args( $args ) {
    if ( isset( $_GET['orderby'] ) && 'manufacturer' === $_GET['orderby'] ) {
        $args['orderby']  = 'meta_value';
        $args['order']    = 'ASC';
        $args['meta_key'] = '_manufacturer';

        add_filter( 'posts_orderby', 'sort_by_manufacturer_posts_orderby', 10, 2 );
    } else {
        remove_filter( 'posts_orderby', 'sort_by_manufacturer_posts_orderby', 10, 2 );
    }

    return $args;
}

/**
 * @param $orderby
 * @param $query
 */
function sort_by_manufacturer_posts_orderby( $orderby, $query ) {
    global $wpdb;

    if ( $query->get( 'meta_key' ) === '_manufacturer' ) {
        $orderby = "COALESCE({$wpdb->postmeta}.meta_value, '') = '' ASC, " . $orderby;
    }

    return $orderby;
}

// Add "Sort by Manufacturer" option to the sorting options
add_filter( 'woocommerce_catalog_orderby', function ( $options ) {
    $options['manufacturer'] = __( 'Sort by Manufacturer', 'london-child' );
    return $options;
} );