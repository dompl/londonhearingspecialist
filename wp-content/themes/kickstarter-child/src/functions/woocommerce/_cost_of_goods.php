<?php
/**
 * Cost of goods
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_action( 'woocommerce_product_options_general_product_data', 'add_cost_of_goods_field' );
function add_cost_of_goods_field() {
    woocommerce_wp_text_input( array(
        'id'                => '_cost_of_goods',
        'label'             => __( 'Cost of Goods', 'woocommerce' ),
        'desc_tip'          => 'true',
        'description'       => __( 'Enter the cost of goods here.', 'woocommerce' ),
        'type'              => 'number',
        'custom_attributes' => array(
            'step' => 'any',
            'min'  => '0'
        )
    ) );
}

add_action( 'woocommerce_admin_process_product_object', 'save_cost_of_goods_field', 10, 1 );
/**
 * @param $product
 */
function save_cost_of_goods_field( $product ) {
    $product->update_meta_data( '_cost_of_goods', isset( $_POST['_cost_of_goods'] ) ? $_POST['_cost_of_goods'] : '' );
}