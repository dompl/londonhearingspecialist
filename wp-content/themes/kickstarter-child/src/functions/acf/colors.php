<?php

function london_colors_list() {
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
    $colors                  = [];
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
}

add_filter( '_ks_container_background_colors', function ( $colors ) {

    return array_merge( $colors, london_colors_list() );

} );

add_filter( 'the_content', function ( $content ) {
    // Get the colors list
    $colors = london_colors_list();

    // Loop through each color in the array
    foreach ( $colors as $key => $value ) {
        // Replace the custom tags with span tags
        $content = str_replace( "</$key>", "</span>", $content );
        $content = str_replace( "<$key>", "<span class=\"color-$key\">", $content );
    }

    return $content;
}, 99000 );

function london_colors_message( $message = '' ) {

    $message .= ' Available colours for this theme are:';
    $colors = london_colors_list();
    foreach ( $colors as $k => $v ) {
        $message .= "$k, ";
    }
    ltrim( $message, ',' );
    $message .= '. Usage: <strong><blue-dark></blue-dark></strong>';
    return $message;

}