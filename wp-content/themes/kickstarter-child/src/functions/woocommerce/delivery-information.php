<?php

add_filter( 'woocommerce_product_data_tabs', 'add_delivery_settings_tab', 10, 1 );
function add_delivery_settings_tab( $tabs ) {
    $tabs['delivery_settings'] = array(
        'label'  => __( 'Delivery', 'woocommerce' ),
        'target' => 'delivery_settings_product_data',
        'class'  => array( 'show_if_simple', 'show_if_variable' )
    );
    return $tabs;
}

add_action( 'woocommerce_product_data_panels', 'add_delivery_settings_fields' );
function add_delivery_settings_fields() {
    global $post;
    ?>
<div id='delivery_settings_product_data' class='panel woocommerce_options_panel'>
    <div class='options_group'>
        <?php
woocommerce_wp_textarea_input( array(
        'id'          => '_delivery_info',
        'label'       => __( 'Delivery Information', 'woocommerce' ),
        'description' => __( 'Enter the first delivery information here.', 'woocommerce' ),
        'desc_tip'    => true
    ) );
    woocommerce_wp_textarea_input( array(
        'id'          => '_returns_info',
        'label'       => __( 'Returns Information', 'woocommerce' ),
        'description' => __( 'Enter the second delivery information here.', 'woocommerce' ),
        'desc_tip'    => true
    ) );
    ?>
    </div>
</div>
<?php
}

add_action( 'woocommerce_process_product_meta', 'save_delivery_settings_fields', 10, 2 );
function save_delivery_settings_fields( $post_id ) {
    $delivery_info_1 = isset( $_POST['_delivery_info'] ) ? wp_kses_post( $_POST['_delivery_info'] ) : '';
    $delivery_info_2 = isset( $_POST['_returns_info'] ) ? wp_kses_post( $_POST['_returns_info'] ) : '';
    update_post_meta( $post_id, '_delivery_info', $delivery_info_1 );
    update_post_meta( $post_id, '_returns_info', $delivery_info_2 );
}

add_action( 'woocommerce_single_product_summary', 'display_delivery_info', 20 );
function display_delivery_info() {
    global $post;

    $default_delivery_information = '<h4>Dispatch</h4><p>At London Hearing Specialist we aim to dispatch all in stock items within 1 to 2 working days.</p><p>Out of stock items are usually dispatched within 3-5 working days.</p>';
    $default_delivery_information .= '<h4>Shipping</h4><p>At London Hearing Specialist we use Royal Mail Tracked 48. Orders over £35 will be eligible for free shipping and orders under £35 will be charged £2.99 for Postage and Packing.</p>';
    $default_returns_information = '<a href="/returns-policy/" class="button small" target="_blank">See Our Returns Policy</a>';
    $delivery_info_1             = str_replace( '%delivery_information%', $default_delivery_information, get_post_meta( $post->ID, '_delivery_info', true ) );
    $delivery_info_2             = str_replace( '%returns_info%', $default_returns_information, get_post_meta( $post->ID, '_returns_info', true ) );

    $additional_delivery_info = '<p class="addon">We are happy to accept returns within 14 days of purchase for a full refund. Items are required to be unopened and in good condition. View our full <a href="' . get_bloginfo( 'url' ) . '/returns-policy/" target="_blank">returns policy here.</a></p>.';
    if (  !  empty( $delivery_info_1 ) || !  empty( $delivery_info_2 ) ) {
        echo '<div class="london-delivery-information">';
    }

    if (  !  empty( $delivery_info_1 ) ) {
        echo '<div class="product-delivery-info london-tab"><div class="title"><h3>Delivery Information</h3></div><div class="description">' . wp_kses_post( $delivery_info_1 ) . '</div></div>';
    }
    if (  !  empty( $delivery_info_2 ) ) {
        //   echo '<div class="product-delivery-info london-tab"><div class="title"><h3>Returns Information</h3></div>' . $additional_delivery_info . '<div class="description">' . wp_kses_post( $delivery_info_2 ) . '</div></div>';
        echo '<div class="product-delivery-info london-tab"><div class="title"><h3>Returns Information</h3></div>' . $additional_delivery_info . '</div>';
    }

    if (  !  empty( $delivery_info_1 ) || !  empty( $delivery_info_2 ) ) {
        echo '</div>';
    }
}

function update_product_custom_fields() {
    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => -1, // Process all products, adjust as necessary
        'post_status' => 'publish'
    );

    $products = get_posts( $args );

    foreach ( $products as $product ) {
        $product_id = $product->ID;

        // Update the '_delivery_info_1' field
        $delivery_info_value = "%delivery_information%"; // Customize this value
        update_post_meta( $product_id, '_delivery_info', $delivery_info_value );

        // Update the '_returns_info' field
        $returns_info_value = "%returns_info%"; // Customize this value
        update_post_meta( $product_id, '_returns_info', $returns_info_value );
    }

    // Output completion message
    echo 'All products have been updated.';
}

// update_product_custom_fields();

/**
 * Hide shipping rates when free shipping is available.
 * Updated to support WooCommerce 2.6 Shipping Zones.
 *
 * @param array $rates Array of rates found for the package.
 * @return array
 */
function my_hide_shipping_when_free_is_available( $rates ) {
    $free = array();
    foreach ( $rates as $rate_id => $rate ) {
        if ( 'free_shipping' === $rate->method_id ) {
            $free[$rate_id] = $rate;
            break;
        }
    }
    return  !  empty( $free ) ? $free : $rates;
}
add_filter( 'woocommerce_package_rates', 'my_hide_shipping_when_free_is_available', 100 );