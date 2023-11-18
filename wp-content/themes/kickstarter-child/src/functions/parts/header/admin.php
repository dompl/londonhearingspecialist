<?php

use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Url;

add_filter( 'ks_admin_theme_options_header_settings', function ( $fields ) {
    // Images Accordion Section
    $fields[] = Accordion::make( 'Images', wp_unique_id() )->instructions( 'Main header images' );
    $fields[] = Image::make( 'Favicon image', 'ks_favicon' )
        ->instructions( 'Add website favicon. Please note, the favicon should be in ration 1:1, for example 100px x 100px' )
        ->returnFormat( 'id' )
        ->previewSize( 'mini-thumbnail' ); // Thumbnail, medium or large

    $fields[] = Image::make( 'Desktop Logo', 'ks_logo_m' )
        ->instructions( 'Add desktop logo' )
        ->returnFormat( 'url' )
        ->previewSize( 'medium' )
        ->required();
    $fields[] = Image::make( 'Mobile Logo', 'ks_logo_d' )
        ->instructions( 'Add mobile logo' ) // Corrected the instruction text
        ->returnFormat( 'url' )
        ->previewSize( 'medium' )
        ->required();

    // Links Accordion Section
    $fields[] = Accordion::make( 'Links', wp_unique_id() )->instructions( 'Main header links' );;
    $fields[] = Url::make( 'Shop URL', 'ks_shop_url' ) // Corrected the field key
        ->instructions( 'Add Main shop page URL' )
        ->required();
    $fields[] = Url::make( 'Book URL', 'ks_book_url' )
        ->instructions( 'Add main booking page URL.' )
        ->required();
    $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();

    return $fields;
} );

add_filter( 'ks_admin_theme_options_header_settings', function ( $fields ) {
    unset( $fields['ks_logo_image'] );
    unset( $fields['ks_favicon'] );
    return $fields;
} );