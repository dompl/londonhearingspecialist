<?php
/**
 * Change the component message
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_filter( '_ks_components_message', function ( $message ) {
    if (  !  isset( $_GET['post'] ) || !  is_admin() ) {
        return $message;
    }
    $message = 'Insert website elements. These elements are crafted by the website developer. <a href="#component-request" id="component-request-trigger" class="admin-button small success">Request new component</a>';
    return $message;
} );