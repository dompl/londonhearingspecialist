<?php
/**
 * comment
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

function ks_theme_custom_colors_array() {
    return apply_filters( '_ks_container_background_colors', [] );
}
