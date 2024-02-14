<?php
use Kickstarter\MyHelpers;
// Add action to hook into the 'ks_after_body' event
add_action( 'ks_after_body', 'ks_top_wrapper', 10 );
// Add filters for modifying the content in the top left and right sections
add_filter( '_london_top_left', 'london_top_left_callback' );
add_filter( '_london_top_right', 'london_top_right_callback' );

/**
 * Echoes HTML for the header wrapper
 *
 * This function constructs the HTML for the top section of the site,
 * dividing it into left and right sections and applying filters to allow
 * customization of these sections.
 */
function ks_top_wrapper() {
    // Using output buffering for cleaner syntax and improved performance
    ob_start();
    ?>
<div id="top-wrapper">
    <div class="container">
        <div class="left">
            <?php echo apply_filters( '_london_top_left', '' ); ?>
        </div>
        <div class="right">
            <?php echo apply_filters( '_london_top_right', '' ); ?>
        </div>
    </div>
</div>
<?php
echo ob_get_clean();
}

/**
 * Appends additional HTML to the top right section
 *
 * @param string $html Existing HTML content.
 * @return string Modified HTML content with additional elements.
 */
function london_top_left_callback( $html ) {
    // It's a good practice to validate and sanitize input. In this case, it's minimal but important.
    $html = is_string( $html ) ? $html : '';

    // Appending custom HTML to the existing content
    $phone = MyHelpers::getThemeData( 'ks_tel_number' );
    if (  !  empty( $phone ) && isset( $phone['visible'] ) && isset( $phone['dial'] ) ) {
        $html .= '<div class="item email"><a href="tel:' . do_shortcode( '[telephone dial=true]', true ) . '" title="Call London Hearing Specialists to book your appointment today"><i class="icon-phone-regular"></i><span>' . do_shortcode( '[telephone dial=false]', true ) . '</span></a></div>';
    } else {
        error_log( 'Phone number is missing on theme settings' );
    }
    // Using antispambot() for email is a good practice to avoid spam crawlers
    $email = MyHelpers::getThemeData( 'ks_email_address' );
    if ( $email ) {
        $email = antispambot( $email );
        $html .= '<div class="item phone"><a href="mailto:' . $email . '" title="Email London Hearing Specialists to book your appointment today"><i class="icon-envelope-regular"></i><span>' . $email . '</span></a></div>';
    } else {
        error_log( 'Email address is missing on theme settings' );
    }

    //  $html .= \London\Helpers::GoogleRating();

    return $html;
}

/**
 * Appends a dropdown of locations to the top left section
 *
 * @param string $html Existing HTML content.
 * @return string Modified HTML content with location dropdown.
 */
function london_top_right_callback( $html ) {
    // Validate input
    $html = is_string( $html ) ? $html : '';

    if (  !  function_exists( 'clinic_locations_data' ) ) {
        return $html;
    }

    $locations = clinic_locations_data();

    // Check if locations are available
    if (  !  empty( $locations ) && is_array( $locations ) ) {

        $html .= '<div class="item locations">';
        $html .= '<a href="#" title="Select London Hearing Specialists Locations" id="location-selector-a"><span>Select Location</span><i class="icon-caret-down-solid"></i></a>';
        $html .= '<ul id="location-select">';

        // Ensure output is properly escaped
        foreach ( $locations as $key => $value ) {
            $title = esc_html( $value['title'] );
            $html .= '<a href="' . get_the_permalink( $key ) . '" title="Visit London Hearing Specialists at ' . $title . '">' . $title . '</a>';
        }

        $html .= '</ul>';
        $html .= '</div>';
    }

    $html .= '<div class="item login">';

    // URL to the WooCommerce "My Account" page
    $myaccount_page_url = esc_url( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) );

    // Check if user is logged in
    if ( is_user_logged_in() ) {
        // User is logged in - show link to account page
        $html .= '<a href="' . $myaccount_page_url . '"><i class="icon-user-regular"></i><span>My Account</span></a>';
    } else {
        // User is not logged in - show link to login section of the "My Account" page
        $html .= '<a href="' . $myaccount_page_url . '"><i class="icon-user-regular"></i><span>Login</span></a>';
    }

    $html .= '</div>';

    return $html;
}