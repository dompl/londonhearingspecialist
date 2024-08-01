<?php

use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Repeater;
use Kickstarter\MyHelpers;
add_shortcode( 'accreditation', 'accreditation_shortcode' );
function accreditation_shortcode( $atts ) {

    $images = MyHelpers::getThemeData( 'accreditation_images' );
    if (  !  empty( $images ) ) {
        $html = isset( $atts['space-top'] ) ? '<div class="space space-' . $atts['space-top'] . ' space-in"></div>' : '';
        $html .= '<div class="accreditation">';
        foreach ( $images as $image ) {
            $html .= MyHelpers::PictureSource( image: $image['image'], size: 100, custom_container: 'item', min: 100, reversed: true );
        }
        $html .= '</div>';
        $html .= isset( $atts['space-bottom'] ) ? '<div class="space space-' . $atts['space-bottom'] . ' space-in"></div>' : '';
        return $html;
    }
}

add_filter( 'ks_admin_theme_options_addons', function ( $fields ) {
    $fields[] = Accordion::make( 'Shortcodes', wp_unique_id() )->instructions( 'various settings for theme shortcodes' );
    $fields[] = Repeater::make( 'Accreditation shortcode', 'accreditation_images' )->instructions( '<strong>[accreditation]</strong> : displays list of accreditation logos. Logos need to be added here.' )->fields( [
        Image::make( 'Accreditation logo image', 'image' )->instructions( 'Add accreditation logo image' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' )->required()
    ] )->collapsed( 'image' )->buttonLabel( 'Add Image' )->layout( 'table' );
    return $fields;
} );

function display_free_shipping_message() {
    if ( WC()->cart ) {
        $free_shipping_min_amount = false; // Start with no set amount

        // Loop through all shipping zones
        foreach ( WC_Shipping_Zones::get_zones() as $zone_data ) {
            foreach ( $zone_data['shipping_methods'] as $shipping_method ) {
                if ( $shipping_method->id === 'free_shipping' && $shipping_method->enabled ) {
                    $free_shipping_min_amount = $shipping_method->min_amount;
                    if ( $free_shipping_min_amount > 0 ) {
                        break 2; // Exit both loops
                    }
                }
            }
        }

        // Handle cases where no free shipping method or no minimum amount is set
        if ( $free_shipping_min_amount === false ) {
            return;
        }

        // Display the message based on the cart total and minimum amount for free shipping
        $current_cart_total = WC()->cart->subtotal;
        $delivery_time      = '<strong>Standard Delivery </strong>(2-3 days).';
        echo '<div class="custom-free-shipping-notice">';
        echo '<div class="date">' . $delivery_time . '</div>';
        if ( $current_cart_total >= $free_shipping_min_amount ) {
            echo '<div class="note-qualifies">Your order qualifies for free delivery.</div>';
        } else {
            $remaining = $free_shipping_min_amount - $current_cart_total;
            // echo '<div class="free-shipping-over">Free shipping for all orders over <strong>£' . $free_shipping_min_amount . '</strong>.</div><div class="add-more">Add ' . wc_price( $remaining ) . ' more to qualify for <strong>Free Delivery</strong>.</div>';
            echo '<div class="free-shipping-over"><strong>Free 2-day delivery</strong> on orders over £35<br>Add <strong>' . wc_price( $remaining ) . '</strong> more to qualify for <strong>Free Delivery</strong>.</div>';
        }
        echo '</div>';
    }
}

add_action( 'london_single_product_add_to_cart_after', 'display_free_shipping_message' );