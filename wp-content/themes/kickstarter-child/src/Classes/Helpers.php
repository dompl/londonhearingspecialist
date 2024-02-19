<?php
namespace London;
use GoogleRating;

class Helpers {

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