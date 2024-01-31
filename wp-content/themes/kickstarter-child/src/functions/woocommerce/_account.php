<?php

add_filter( 'woocommerce_account_menu_items', 'remove_my_account_tabs' );

function remove_my_account_tabs( $items ) {
    unset( $items['downloads'] ); // Remove Downloads

    return $items;
}