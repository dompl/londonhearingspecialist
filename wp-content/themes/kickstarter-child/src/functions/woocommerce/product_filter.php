<?php

function enqueue_jquery_ui() {
    $object = get_queried_object();
    if (  !  property_exists( $object, 'taxonomy' ) || !  $object->taxonomy == 'product_cat' ) {
        return;
    }
    // Enqueue jQuery UI CSS for the slider
    wp_enqueue_style( 'jquery-ui-style', 'https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css' );

    // Enqueue jQuery UI script
    wp_enqueue_script( 'jquery-ui-slider' );

    // Enqueue your custom JS for AJAX filtering and jQuery UI Slider
    wp_enqueue_script( 'custom-ajax-filter', get_template_directory_uri() . '/js/custom-ajax-filter.js', array( 'jquery', 'jquery-ui-slider' ), null, true );

    wp_localize_script( 'custom-ajax-filter', 'custom_ajax_obj', array(
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'nonce'    => wp_create_nonce( 'fetch_price' )
    ) );
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

function get_price_range( $categories = array(), $manufacturers = array() ) {
    global $wpdb;

    $category_filter     = '';
    $manufacturer_filter = '';

    if (  !  empty( $categories ) ) {
        $category_ids    = implode( ',', array_map( 'intval', $categories ) );
        $category_filter = "AND ID IN (
			  SELECT object_id FROM {$wpdb->term_relationships} WHERE term_taxonomy_id IN ($category_ids)
		 )";
    }

    if (  !  empty( $manufacturers ) ) {
        $manufacturer_values = implode( "','", array_map( 'esc_sql', $manufacturers ) );
        $manufacturer_filter = "AND ID IN (
			  SELECT post_id FROM {$wpdb->postmeta} WHERE meta_key = '_manufacturer' AND meta_value IN ('$manufacturer_values')
		 )";
    }

    $query = "
		 SELECT MIN(CAST(meta_value AS DECIMAL(10,2))) as min_price,
				  MAX(CAST(meta_value AS DECIMAL(10,2))) as max_price
		 FROM {$wpdb->postmeta}
		 WHERE meta_key = '_price'
		 AND post_id IN (
			  SELECT ID FROM {$wpdb->posts}
			  WHERE post_type = 'product'
			  AND post_status = 'publish'
			  $category_filter
			  $manufacturer_filter
		 )
	";

    $prices = $wpdb->get_row( $query );

    return array( 'min' => $prices->min_price ?: 0, 'max' => $prices->max_price ?: 0 );
}

add_filter( 'london_woocommerce_sidebar', 'london_product_filter_categories', 1, 1 );

function london_product_filter_categories() {

    $object = get_queried_object();
    if (  !  property_exists( $object, 'taxonomy' ) || !  $object->taxonomy == 'product_cat' ) {
        return;
    }

    // Ensure WooCommerce functions are available
    if (  !  function_exists( 'wc_get_product_category_list' ) ) {
        return;
    }

    $categories       = get_terms( 'product_cat', array( 'hide_empty' => true ) );
    $current_category = get_queried_object();
    // Get unique manufacturers
    // Get all unique manufacturers
    $manufacturer_names = get_unique_manufacturers();

    foreach ( $manufacturer_names as $product_id ) {
        $manufacturer = get_post_meta( $product_id, '_manufacturer', true );
        if (  !  empty( $manufacturer ) && !  in_array( $manufacturer, $manufacturer_names ) ) {
            $manufacturer_names[] = $manufacturer;
        }
    }

    echo '<div id="filter-wrapper">';
    echo '<form id="filter-form" method="post">';
    echo '<div class="filter-category filter-form-filter first">';
    echo '<div class="product-h4">Product Type</div>';
    if (  !  empty( $categories ) ) {
        echo '<ul>';
        foreach ( $categories as $category ) {
            $checked = ( $current_category && $current_category->term_id === $category->term_id ) ? 'checked' : '';
            echo '<li>';
            echo '<input type="checkbox" id="cate-' . esc_attr( $category->term_id ) . '" name="filter_category[]" value="' . esc_attr( $category->term_id ) . '" ' . $checked . '> '; // Changed to use term_id
            echo '<label for="cate-' . esc_attr( $category->term_id ) . '">' . esc_html( $category->name ) . '</label>';
            echo '</li>';
        }
        echo '</ul>';
    }
    echo '</div>';

    echo '<div class="filter-manufacturer filter-form-filter last">';
    echo '<div class="product-h4">Manufacturer</div>';
    if (  !  empty( $manufacturer_names ) ) {
        echo '<ul>';

        $manufacturer_names = array_filter( $manufacturer_names );
        foreach ( $manufacturer_names as $manufacturer ) {
            echo '<li>';
            echo '<input type="checkbox" name="filter_manufacturer[]" id="mm-' . strtolower( str_replace( ' ', '', $manufacturer ) ) . '" value="' . esc_attr( $manufacturer ) . '"> ';
            echo '<label for="mm-' . strtolower( str_replace( ' ', '', $manufacturer ) ) . '">' . esc_html( $manufacturer ) . '</label>';
            echo '</li>';
        }
        echo '</ul>';
    }
    echo '</div>';

    $price_range = get_price_range();
    echo '<div class="filter-price filter-form-filter">';
    echo '<div class="product-h4">Price Range</div>';
    echo '<div id="price-slider"></div>';
    echo '<span id="price_min_value">' . esc_html( $price_range['min'] ) . '</span> - ';
    echo '<span id="price_max_value">' . esc_html( $price_range['max'] ) . '</span>';
    echo '<input type="hidden" id="price_min" name="price_min" value="' . esc_attr( $price_range['min'] ) . '">';
    echo '<input type="hidden" id="price_max" name="price_max" value="' . esc_attr( $price_range['max'] ) . '">';
    echo '</div>';

    echo '</form>';
    echo '</div>';
}