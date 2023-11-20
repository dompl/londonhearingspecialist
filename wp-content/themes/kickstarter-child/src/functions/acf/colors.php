<?php

add_filter( '_ks_container_background_colors', function ( $colors ) {

    $colors['blue-light'] = 'Blue Light';
    $colors['blue-dark']  = 'Blue dark';

    return $colors;

} );