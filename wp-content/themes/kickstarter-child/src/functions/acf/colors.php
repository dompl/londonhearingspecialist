<?php

/**
 * Returns a list of color names and their descriptions.
 *
 * @return array An associative array of color names and their descriptions.
 */
function london_colors_list() {
    $colors = [
        'blue'          => 'Blue light',
        'blue-dark'     => 'Blue dark',
        'gold'          => 'Gold',
        'gold-dark'     => 'Gold dark',
        'text'          => 'Gray (text)',
        'gray-light'    => 'Gray light',
        'gray-lighter'  => 'Gray lighter',
        'gray-lightest' => 'Gray lightest',
        'green'         => 'Green',
        'white'         => 'White',
        'black'         => 'Black'
    ];
    return $colors;
}

/**
 * Merges the custom color list with existing colors in the '_ks_container_background_colors' filter.
 *
 * @param array $colors Existing colors.
 * @return array Merged array of existing and custom colors.
 */
add_filter( '_ks_container_background_colors', function ( $colors ) {
    return array_merge( $colors, london_colors_list() );
} );

/**
 * Replaces custom color tags in the content with corresponding span tags.
 *
 * @param string $content The content to be filtered.
 * @return string Filtered content with color tags replaced.
 */
add_filter( 'the_content', function ( $content ) {
    $colors = london_colors_list();

    foreach ( $colors as $key => $value ) {
        $content = str_replace( "<$key>", "<span class=\"color-$key\">", $content );
        $content = str_replace( "</$key>", "</span>", $content );
    }

    return $content;
}, 10 );

/**
 * Generates a message listing all available colors and their usage.
 *
 * @param string $message Initial message to append to.
 * @return string The message with appended color list and usage instructions.
 */
function london_colors_message( $message = '' ) {
    $message .= ' Available colours for this theme are:';
    $colors      = london_colors_list();
    $color_names = array_keys( $colors );

    $message .= ' ' . implode( ', ', $color_names );
    $message .= '. Usage: <strong>&lt;blue-dark&gt;Your text&lt;/blue-dark&gt;</strong>';
    return $message;
}