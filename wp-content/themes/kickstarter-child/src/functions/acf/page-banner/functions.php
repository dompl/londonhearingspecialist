<?php

// Function to replace %% with the minimum free shipping amount
function replace_free_shipping_placeholder() {
    // Get all shipping zones
    $shipping_zones = WC_Shipping_Zones::get_zones();

    foreach ( $shipping_zones as $zone ) {
        foreach ( $zone['shipping_methods'] as $method ) {
            // Check for free shipping method and if it's enabled
            if ( $method->id === 'free_shipping' && $method->enabled === 'yes' ) {
                // Get minimum amount
                $min_amount = $method->min_amount;
                if (  !  empty( $min_amount ) ) {
                    // Output the message with the replaced placeholder
                    return "{$min_amount}";
                }
            }
        }
    }
    // Default message if no free shipping is set up or no minimum amount is found
    return 'Not Available';
}