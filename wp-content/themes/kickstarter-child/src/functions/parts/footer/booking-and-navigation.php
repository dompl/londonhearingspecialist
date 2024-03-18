<?php

add_action( 'wp_footer', function () {

    $html = '<div id="floater">';
    $html .= '<div class="button-item _book">' . do_shortcode( '[book_appointment title="Book" small=true]' ) . '</div>';
    $html .= '<div class="button-item _nav"><div class="button small white"><span>Menu</span><i class="icon-bars-solid" id="london_navigation_trigger"></i></div></div>';
    $html .= '</div>';

    echo $html;
} );