<?php

function enqueue_jquery_ui() {
    // Enqueue jQuery UI CSS for the slider
    wp_enqueue_style( 'jquery-ui-style', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css' );

    // Enqueue jQuery UI script
    wp_enqueue_script( 'jquery-ui-slider' );

    // Enqueue your custom JS for AJAX filtering and jQuery UI Slider
    wp_enqueue_script( 'custom-ajax-filter', get_template_directory_uri() . '/js/custom-ajax-filter.js', array( 'jquery', 'jquery-ui-slider' ), null, true );

    wp_localize_script( 'custom-ajax-filter', 'custom_ajax_obj', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
}
add_action( 'wp_enqueue_scripts', 'enqueue_jquery_ui' );

function get_unique_manufacturers() {
    global $wpdb;

    // Get all manufacturer meta values
    $manufacturers = $wpdb->get_col( "
		 SELECT DISTINCT meta_value
		 FROM {$wpdb->postmeta}
		 WHERE meta_key = '_manufacturer'
	" );

    return $manufacturers;
}

function get_price_range( $categories = array() ) {
    global $wpdb;

    if ( empty( $categories ) || in_array( 0, $categories ) ) {
        // Check for empty or default '0' ID
        $query = "SELECT MIN(CAST(meta_value AS DECIMAL(10,2))) as min_price, MAX(CAST(meta_value AS DECIMAL(10,2))) as max_price FROM {$wpdb->postmeta} WHERE meta_key = '_price' AND post_id IN (SELECT ID FROM {$wpdb->posts} WHERE post_type = 'product' AND post_status = 'publish')";
    } else {
        $category_ids = implode( ',', array_map( 'intval', $categories ) );
        $query        = "SELECT MIN(CAST(meta_value AS DECIMAL(10,2))) as min_price, MAX(CAST(meta_value AS DECIMAL(10,2))) as max_price FROM {$wpdb->postmeta} WHERE meta_key = '_price' AND post_id IN (SELECT ID FROM {$wpdb->posts} WHERE post_type = 'product' AND post_status = 'publish' AND ID IN (SELECT object_id FROM {$wpdb->term_relationships} WHERE term_taxonomy_id IN ({$category_ids})))";
    }

    $prices = $wpdb->get_row( $query );
    return array( 'min' => $prices->min_price ?: 0, 'max' => $prices->max_price ?: 0 );
}

add_filter( 'london_woocommerce_sidebar', 'london_product_filter_categories', 1, 1 );

function london_product_filter_categories() {

    // Ensure WooCommerce functions are available
    if (  !  function_exists( 'wc_get_product_category_list' ) ) {
        return;
    }

    $categories = get_terms( 'product_cat', array( 'hide_empty' => true ) );

    // Get unique manufacturers
    // Get all unique manufacturers
    $manufacturer_names = get_unique_manufacturers();

    foreach ( $manufacturer_names as $product_id ) {
        $manufacturer = get_post_meta( $product_id, '_manufacturer', true );
        if (  !  empty( $manufacturer ) && !  in_array( $manufacturer, $manufacturer_names ) ) {
            $manufacturer_names[] = $manufacturer;
        }
    }

    echo '<form id="filter-form" method="post">';
    echo '<div class="filter-category">';
    echo '<h4>Categories</h4>';
    if (  !  empty( $categories ) ) {
        foreach ( $categories as $category ) {
            echo '<label>';
            echo '<input type="checkbox" name="filter_category[]" value="' . esc_attr( $category->slug ) . '"> ';
            echo esc_html( $category->name );
            echo '</label><br>';
        }
    }
    echo '</div>';

    //  $price_range = get_price_range();
    //  echo '<div class="filter-price">';
    //  echo '<h4>Price Range</h4>';
    //  echo '<div id="price-slider"></div>';
    //  echo '<span id="price_min_value">' . esc_html( $price_range['min'] ) . '</span> - ';
    //  echo '<span id="price_max_value">' . esc_html( $price_range['max'] ) . '</span>';
    //  echo '<input type="hidden" id="price_min" name="price_min" value="' . esc_attr( $price_range['min'] ) . '">';
    //  echo '<input type="hidden" id="price_max" name="price_max" value="' . esc_attr( $price_range['max'] ) . '">';
    //  echo '</div>';

    echo '<div class="filter-manufacturer">';
    echo '<h4>Manufacturer</h4>';
    if (  !  empty( $manufacturer_names ) ) {
        foreach ( $manufacturer_names as $manufacturer ) {
            echo '<label>';
            echo '<input type="checkbox" name="filter_manufacturer[]" value="' . esc_attr( $manufacturer ) . '"> ';
            echo esc_html( $manufacturer );
            echo '</label><br>';
        }
    }
    echo '</div>';

    echo '</form>';
}