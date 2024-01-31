<?php
// Display "Manufacturer" field in product General tab
// add_action( 'woocommerce_product_options_general_product_data', function () {
//     echo '<div class="options_group">';
//     woocommerce_wp_text_input( array(
//         'id'          => '_manufacturer',
//         'label'       => __( 'Manufacturer', 'london-child' ),
//         'placeholder' => '',
//         'description' => __( 'Enter the product manufacturer.', 'london-child' ),
//         'desc_tip'    => true
//     ) );
//     echo '</div>';
// } );
//
// // Save "Manufacturer" field value
// add_action( 'woocommerce_process_product_meta', function ( $post_id ) {
//     $manufacturer = isset( $_POST['_manufacturer'] ) ? sanitize_text_field( $_POST['_manufacturer'] ) : '';
//     update_post_meta( $post_id, '_manufacturer', $manufacturer );
// } );
//
// // // Display manufacturer under product title in loop
// add_action( 'woocommerce_shop_loop_item_title', function () {
//     global $product;
//     $product_id   = $product->get_id();
//     $manufacturer = get_post_meta( $product_id, '_manufacturer', true );
//
//     if (  !  empty( $manufacturer ) ) {
//         echo '<div class="woocommerce-loop-manufacturer">' . esc_html( $manufacturer ) . '</div>';
//     }
// } );
//
// // Sort by Manufacturer ordering args
// add_filter( 'woocommerce_get_catalog_ordering_args', 'sort_by_manufacturer_ordering_args' );
//
// /**
//  * @param $args
//  * @return mixed
//  */
// function sort_by_manufacturer_ordering_args( $args ) {
//     if ( isset( $_GET['orderby'] ) && 'manufacturer' === $_GET['orderby'] ) {
//         $args['orderby']  = 'meta_value';
//         $args['order']    = 'ASC';
//         $args['meta_key'] = '_manufacturer';
//
//         add_filter( 'posts_orderby', 'sort_by_manufacturer_posts_orderby', 10, 2 );
//     } else {
//         remove_filter( 'posts_orderby', 'sort_by_manufacturer_posts_orderby', 10, 2 );
//     }
//
//     return $args;
// }
//
// /**
//  * @param $orderby
//  * @param $query
//  */
// function sort_by_manufacturer_posts_orderby( $orderby, $query ) {
//     global $wpdb;
//
//     if ( $query->get( 'meta_key' ) === '_manufacturer' ) {
//         $orderby = "COALESCE({$wpdb->postmeta}.meta_value, '') = '' ASC, " . $orderby;
//     }
//
//     return $orderby;
// }
//
// // Add "Sort by Manufacturer" option to the sorting options
// add_filter( 'woocommerce_catalog_orderby', function ( $options ) {
//     $options['manufacturer'] = __( 'Sort by Manufacturer', 'london-child' );
//     return $options;
// } );