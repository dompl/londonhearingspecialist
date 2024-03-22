<?php
namespace London;
use GoogleRating;

class Helpers {

    /**
     * Checks if the current page is a WooCommerce-related page.
     *
     * @return bool True if it's a WooCommerce-related page, false otherwise.
     */
    public static function isWooCommercePage() {
        if (  !  function_exists( 'is_woocommerce' ) ) {
            return true;
        }
        if (
            ( is_woocommerce() ||
                is_product_category() ||
                is_product_tag() ||
                is_product() ||
                is_cart() ||
                is_checkout() ||
                is_account_page() ||
                is_shop() ) ) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * Formats a UK phone number from its international or standard format to a specified UK format.
     *
     * Examples of formatting:
     * +442073833838 becomes 020 738 33 838
     * 020 7794 4477 becomes 020 779 444 77
     * +442037731230 becomes 020 377 312 30
     *
     * @param string $number The phone number in international (+4420...) or standard (020...) format.
     * @return string The formatted phone number in the specified UK format.
     */
    public static function formatUKNumber( $number ) {
        // Remove any non-digit characters, such as spaces and the + sign
        $number = preg_replace( '/\D/', '', $number );

        // Remove the leading 44, if present, which is the international dial code for the UK
        $number = preg_replace( '/^44/', '', $number );

        // Format the number based on the length of remaining digits
        // For 10 digits after removing '44', it will format as 020 XXX XXX XX
        if ( strlen( $number ) == 10 ) {
            return sprintf( '020 %s %s %s', substr( $number, 1, 3 ), substr( $number, 4, 3 ), substr( $number, 7, 3 ) );
        }
        // For 11 digits starting with '0', format as 0XX XXX XXX XX
        elseif ( strlen( $number ) == 11 && strpos( $number, '0' ) === 0 ) {
            return sprintf( '%s %s %s %s', substr( $number, 0, 3 ), substr( $number, 3, 3 ), substr( $number, 6, 3 ), substr( $number, 9, 2 ) );
        }

        // Return the original number if it doesn't match the expected patterns
        return $number;
    }

    public static function GoogleRating() {

        $googleRating = new GoogleRating();
        $reviews      = $googleRating->getReviews();
        $starts       = $googleRating->displayStars();
        $count        = $googleRating->displayRatingCount();

        $html = '<div class="item rating google-star-rating">';
        $html .= '<a href="https://www.google.com/search?client=firefox-b-d&sa=X&sca_esv=5662882a9f5a9607&tbm=lcl&q=London+Hearing+Specialist+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MDA0tDA3NTCysDA0MbMwMLYw38DI-IpR0Sc_LyU_T8EjNbEoMy9dIbggNTkzMSezuEQhKLUsM7W8eBErYTUAQJ42Y2IAAAA&rldimm=8011875028814680387&hl=en-PL&ved=2ahUKEwjXxJ-or7eEAxVDgP0HHSgkAQEQ9fQKegQIFhAF&biw=2071&bih=1251&dpr=2#lkt=LocalPoiReviews" target="_blank">';
        //   $html .= '<div class="rating-top">Highly Recommended</div>';
        $html .= '<div class="logo"><img src="' . get_stylesheet_directory_uri() . '/assets/images/theme/google-review-logo.png"/></div>';
        $html .= '<div class="rating-middle"><span class="count">' . $reviews['averageRating'] . '</span><span class="stars">' . $starts . '</span></div>';
        $html .= '<div class="rating-bottom"><span class="number">' . $count . '</span><span class="word"> reviews</span></div>';
        $html .= '</a>';
        $html .= '</div>';
        return $html;

    }

    public static function IconButton( $link, $icon, $color ) {
        if (  !  $icon || empty( $link['url'] ) ) {
            return;
        }
        $title = $link['title'] ?? 'Discover More';

        return '<a href="' . esc_url( $link['url'] ) . '" title="' . $link['title'] . '" class="button ' . $color . ' clx icon-button"><span class="link-title">' . $link['title'] . '</span><i class="icon-' . $icon . '"></i></a>';
    }

    public static function convertToGoogleMapsIframe( $url ) {

        // Extract the latitude and longitude from the URL
        preg_match( '/@([0-9.-]+),([0-9.-]+)/', $url, $matches );

        if ( count( $matches ) < 3 ) {
            return 'Invalid URL';
        }

        $latitude  = $matches[1];
        $longitude = $matches[2];

        // Construct the iframe source URL
        $iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.656163918564!2d$longitude!3d$latitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a8791c63ca7%3A0x56ea8e2ead358440!2sMiltons%20Eyecare!5e0!3m2!1sen!2scz!4v1702040382441!5m2!1sen!2scz";

        // Construct the iframe HTML code
        $iframeHtml = "<iframe src=\"$iframeSrc\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>";

        return $iframeHtml;

    }

}