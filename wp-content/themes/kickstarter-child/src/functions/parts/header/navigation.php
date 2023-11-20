<?php
// Remove the default navigation
add_action( 'after_setup_theme', function () {
    remove_action( 'ks_after_body', 'ks_header_navigation_init' );
    add_action( 'ks_after_body', 'london_navigation_container', 30 );
} );
// Add the new navigation
function london_navigation_container() {
    $navigation = '<div id="nav-wrapper"><div class="container">' . ks_header_navigation_callback( echo :false ) . '</div></div>';
    $navigation .= '<div id="gogole-wrap-mobile"><div class="container">' . \London\Helpers::GoogleRating() . '</div></div>';
    echo $navigation;
}