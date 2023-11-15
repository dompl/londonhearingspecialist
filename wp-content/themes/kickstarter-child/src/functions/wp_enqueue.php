<?php

// Enqueue styles and scripts for the front-end
add_action( 'wp_enqueue_scripts', function () {
    // Get the theme folder name and theme object
    $theme_folder = get_stylesheet();
    $theme        = wp_get_theme();

    // Determine cache versioning based on server address
    $cache = in_array( $_SERVER['SERVER_ADDR'], ['127.0.0.1'] ) ? time() : null;

    // Generate version string
    $version = $theme->get( 'Version' ) . ( $cache ? ".$cache" : '' );

    // Determine which styles to enqueue based on the theme folder name
    if ( $theme_folder === 'redfrogstudio-child' ) {
        $styles = ['style', 'custom'];
    } else {
        $styles = ['style', 'build', 'custom'];
    }

    // Enqueue each style
    foreach ( $styles as $style ) {
        // Get the file path
        $file_path = get_stylesheet_directory() . "/$style.css";

        // Check if the file exists
        if ( file_exists( $file_path ) ) {
            $file = get_stylesheet_directory_uri() . "/$style.css?v=$version";
            wp_enqueue_style( "css-$style-child", $file, [], $version );
        }
    }

    // Enqueue child theme script
    wp_enqueue_script( 'ks-bundle-child', get_stylesheet_directory_uri() . '/assets/js/bundle.js', ['jquery'], $version, true );

}, 20 );

// Enqueue admin scripts
add_action( 'admin_enqueue_scripts', function () {
    wp_enqueue_script( 'ks-admin-parent', get_template_directory_uri() . '/assets/js/admin.js', ['jquery'], wp_get_theme()->get( 'Version' ), true );
} );