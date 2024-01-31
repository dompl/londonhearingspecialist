<?php
/**
 * Ad additional items to the product feed.
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

function lw_woocommerce_gpf_add_manufacturer( $elements, $product_id, $variation_id = null ) {
    if (  !  null === $variation_id ) {
        $id = $variation_id;
    } else {
        $id = $product_id;
    }
    $product = wc_get_product( $id );
    $brand   = $product->get_meta( '_manufacturer' );
    if (  !  empty( $brand ) ) {
        $elements['brand'] = array( $brand );
    }
    return $elements;
}
add_filter( 'woocommerce_gpf_elements', 'lw_woocommerce_gpf_add_manufacturer', 11, 3 );

/**
 * @param $elements
 * @param $product_id
 * @param $variation_id
 * @return mixed
 */
function lw_woocommerce_gpf_add_categories( $elements, $product_id, $variation_id = null ) {
    if (  !  null === $variation_id ) {
        $id = $variation_id;
    } else {
        $id = $product_id;
    }
    $product    = wc_get_product( $id );
    $categories = $product->get_category_ids();

    if (  !  empty( $categories ) ) {
        $category_names = array();
        foreach ( $categories as $category_id ) {
            $category         = get_term( $category_id, 'product_cat' );
            $category_names[] = $category->name;
        }
        $elements['google_product_category'] = array( implode( ',', $category_names ) );
    }

    return $elements;
}
add_filter( 'woocommerce_gpf_elements', 'lw_woocommerce_gpf_add_categories', 11, 3 );

/**
 * @param $elements
 * @param $product_id
 * @param $variation_id
 * @return mixed
 */
function add_gtin_and_cost_of_goods_to_google_product_feed( $elements, $product_id, $variation_id = null ) {
    if (  !  null === $variation_id ) {
        $id = $variation_id;
    } else {
        $id = $product_id;
    }

    $product       = wc_get_product( $id );
    $gtin          = $product->get_meta( '_gtin' );
    $cost_of_goods = $product->get_meta( '_cost_of_goods' );

    if (  !  empty( $gtin ) ) {
        $elements['gtin'] = array( $gtin );
    }

    if (  !  empty( $cost_of_goods ) ) {
        $elements['cost_of_goods_sold'] = array( $cost_of_goods );
    }

    return $elements;
}
add_filter( 'woocommerce_gpf_elements', 'add_gtin_and_cost_of_goods_to_google_product_feed', 11, 3 );