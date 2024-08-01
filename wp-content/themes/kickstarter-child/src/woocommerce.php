<?php
use London\Helpers;
get_header();
do_action( 'london_woocommerce_before_main_content' );

if ( Helpers::isNewLondon() ) {
    if ( is_shop() && !  isset( $_GET['manufacturer_filter'] ) ) {
        do_action( 'london_new_shop' );
    } else {
        echo '<div class="container woocommerce woocommerce-wrapper">';
        echo '<div class="left">';
        woocommerce_content();
        echo '</div>';
        echo '<div class="right">';
        do_action( 'london_woocommerce_sidebar' );
        echo '</div>';
        do_action( 'london_woocommerce_after_main_content' );
        echo '</div></div>';
    }
} else {
    echo '<div class="container woocommerce woocommerce-wrapper">';
    echo '<div class="left">';
    woocommerce_content();
    echo '</div>';
    echo '<div class="right">';
    do_action( 'london_woocommerce_sidebar' );
    echo '</div>';
    do_action( 'london_woocommerce_after_main_content' );
    echo '</div></div>';
}
get_footer();