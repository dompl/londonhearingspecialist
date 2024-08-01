<?php
use London\Helpers;
add_action( 'ks_after_body', 'ks_header_wrapper', 20 );
add_filter( 'ks_header_wrapper_left', 'ks_header_wrapper_left_callback', 10, 2 );
add_filter( 'ks_header_wrapper_middle', 'ks_header_wrapper_middle_callback', 10, 2 );
add_filter( 'ks_header_wrapper_right', 'ks_header_wrapper_right_callback', 10, 2 );

function ks_header_wrapper() {

    $themeData = \Kickstarter\MyHelpers::getThemeData();

    $html = '';

    $html = '<div id="header-wrapper" ' . ( Helpers::isNewLondon() && !  Helpers::isWooCommercePage() ? 'class="new-wrapper"' : '' ) . '>';
    $html .= '<div class="container' . ( Helpers::isNewLondon() && !  Helpers::isWooCommercePage() ? ' new-woo-container' : '' ) . '">';
    $html .= '<div class="left">' . apply_filters( 'ks_header_wrapper_left', false, $themeData ) . '</div>';

    if ( Helpers::isNewLondon() && !  Helpers::isWooCommercePage() ) {
        $html .= '<div class="header-search ' . ( Helpers::isWooCommercePage() ? 'is-woo' : '' ) . '">';
        $html .= do_shortcode( '[yith_woocommerce_ajax_search preset="default"]' );
        $html .= '</div>';
    } else {
        $html .= '<div class="middle">' . apply_filters( 'ks_header_wrapper_middle', false, $themeData ) . '</div>';
        $html .= '<div class="right">' . apply_filters( 'ks_header_wrapper_right', false, $themeData ) . '</div>';
    }
    //  $html .= '<div class="left">' . apply_filters( 'ks_header_wrapper_middle', false, $themeData ) . '</div>';
    //  $html .= '<div class="middle">' . apply_filters( 'ks_header_wrapper_left', false, $themeData ) . '</div>';
    //  $html .= '<div class="right">' . apply_filters( 'ks_header_wrapper_right', false, $themeData ) . '</div>';
    $html .= '</div>';
    $html .= '</div>';

    echo $html;

}

function ks_header_wrapper_left_callback( $html, $themeData ) {

    $html .= '<div class="item logos">';
    $html .= '<a href="' . get_bloginfo( 'url' ) . '" title="' . get_bloginfo( 'name' ) . '">';
    $html .= '<img src="' . $themeData['ks_logo_d'] . '" alt="' . get_bloginfo( 'name' ) . '" class="logo-mobile top-logo">';
    $html .= '<img src="' . $themeData['ks_logo_m'] . '" alt="' . get_bloginfo( 'name' ) . '" class="logo-desktop top-logo">';
    $html .= '</a>';
    $html .= '<div class="main-nav-init"><span>Menu</span><i class="icon-bars-solid"></i></div>';
    $html .= '</div>';

    return $html;
}

function ks_header_wrapper_middle_callback( $html, $themeData ) {
    $html .= \London\Helpers::GoogleRating();
    return $html;
}

function ks_header_wrapper_right_callback( $html, $themeData ) {
    $shop_url = wc_get_page_permalink( 'shop' );
    $html .= '<div class="item">';
    if (  !  Helpers::isNewLondon() ) {
        $html .= WC()->cart->get_cart_contents_count() > 0 ? london_minicart_html() : london_minicart_html_default();
    }
    $html .= \London\Helpers::isWooCommercePage() ? do_shortcode( '[book_appointment]' ) : '';
    $html .= '<span class="main-nav-init"><span>Menu</span><i class="icon-bars-solid"></i></span>';
    $html .= '</div>';
    return $html;
}

add_action( 'wp_head', function () {
    if ( is_page( 603 ) && !  current_user_can( 'administrator' ) ) {
        echo '<script type="text/javascript">window._mfq = window._mfq || [];(function() {
	  				var mf = document.createElement("script");
	  				mf.type = "text/javascript"; mf.defer = true;
	  				mf.src = "//cdn.mouseflow.com/projects/c5455f2b-2ee4-46ee-9f8e-0d687e2981fd.js";
	  				document.getElementsByTagName("head")[0].appendChild(mf);
					})();
 					</script>';
    }

} );