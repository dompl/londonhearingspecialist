<?php

get_header();
do_action( 'london_woocommerce_before_main_content' );
echo '<div class="container">';

echo '<div class="left">';
echo 'asfdasdfasdfsa';
woocommerce_content();
echo '</div>';
echo '<div class="right">';
do_action( 'london_woocommerce_sidebar' );
echo '</div>';
do_action( 'london_woocommerce_after_main_content' );
echo '</div></div>';
get_footer();