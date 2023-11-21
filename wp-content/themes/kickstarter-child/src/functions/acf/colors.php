<?php

add_filter( '_ks_container_background_colors', function ( $colors ) {

    /*
    "text": $color-text,
    "gold": $color-gold,
    "gold-dark": $color-gold-dark,
    "green": $color-green,
    "blue-dark": $color-blue-dark,
    "blue": $color-blue,
    "gray-lighter": $color-gray-lighter,
    "gray-lightest": $color-gray-lightest,
    "gray-light": $color-gray-light,
    "gray-brand": $color-brand,
     */
    $colors['blue']          = 'Blue light';
    $colors['blue-dark']     = 'Blue dark';
    $colors['gold']          = 'Gold';
    $colors['gold-dark']     = 'Gold dark';
    $colors['text']          = 'Gray (text)';
    $colors['gray-light']    = 'Gray light';
    $colors['gray-lighter']  = 'Gray lighter';
    $colors['gray-lightest'] = 'Gray lightest';
    $colors['green']         = 'Green';
    $colors['white']         = 'White';
    $colors['black']         = 'Black';

    return $colors;

} );