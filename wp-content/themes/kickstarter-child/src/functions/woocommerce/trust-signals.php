<?php
add_action( 'london_single_product_add_to_cart', 'add_custom_text_under_short_description', 21 );
function add_custom_text_under_short_description() {
    echo '<div class="test">TRUST SIGNALS LOGOS REQUIRED</div>';
}