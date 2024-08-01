<?php
use Kickstarter\MyHelpers;
use London\Helpers;
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

    $html = is_string( $html ) ? $html : '';

    if (  !  function_exists( 'clinic_locations_data' ) ) {
        return $html;
    }

    $locations = clinic_locations_data();

    if (  !  empty( $locations ) && is_array( $locations ) ) {
        $locationsByArea = [];
        foreach ( $locations as $post_id => $value ) {
            $area = isset( $value['area'] ) ? esc_html( $value['area'] ) : 'Other';
            if (  !  isset( $locationsByArea[$area] ) ) {
                $locationsByArea[$area] = [];
            }
            $locationsByArea[$area][$post_id] = $value; // Maintain association with post_id
        }

        if ( isset( $locationsByArea['london'] ) ) {
            $london = $locationsByArea['london'];
            unset( $locationsByArea['london'] );
            ksort( $locationsByArea );
            $locationsByArea = ['london' => $london] + $locationsByArea;
        } else {
            ksort( $locationsByArea );
        }
        $html .= '<div class="item nav-trigger"><i class="icon-bars-solid" id="mobile-header-nav"></i></div>';
        $html .= '<div class="item locations">';
        if ( \London\Helpers::isWooCommercePage() ) {
            $html .= '<a href="#" title="Select London Hearing Specialists Locations" id="location-selector-a"><span>Select Location</span><i class="icon-caret-down-solid"></i></a>';
        }
        $html .= '<div id="location-select">';
        foreach ( $locationsByArea as $area => $locs ) {
            $html .= '<ul><li><span>' . ucfirst( $area ) . '</span>';
            $html .= '<ul>';
            uasort( $locs, function ( $item1, $item2 ) {
                if ( $item1['menu_order'] === $item2['menu_order'] ) {
                    return $item1['title'] <=> $item2['title'];
                }
                return $item1['menu_order'] <=> $item2['menu_order'];
            } );
            foreach ( $locs as $post_id => $value ) {
                $title = esc_html( $value['title'] );
                $html .= '<li><a href="' . get_the_permalink( $post_id ) . '" title="Visit London Hearing Specialists at ' . $title . '">' . $title . '</a></li>';
            }
            $html .= '</ul></li></ul>';
        }

        $html .= '</div>';
        $html .= '</div>';
    }
    if ( Helpers::isNewLondon() && !  Helpers::isWooCommercePage() ) {
        $html .= '<div class="item login">';
        $myaccount_page_url = esc_url( get_permalink( get_option( 'woocommerce_myaccount_page_id' ) ) );

        if ( is_user_logged_in() ) {
            $html .= '<a href="' . $myaccount_page_url . '"><i class="icon-user-regular"></i><span>My Account</span></a>';
        } else {
            $html .= '<a href="' . $myaccount_page_url . '"><i class="icon-user-regular"></i><span>Login/Register</span></a>';
        }

        $html .= london_minicart_html();

    }

    $html .= '</div>';

    return $html;
}

add_filter( 'ks_google_reviews_transient_expiration', function ( $time ) {
    $time = 1 * DAY_IN_SECONDS;
    return $time;
} );