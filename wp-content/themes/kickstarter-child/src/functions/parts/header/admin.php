<?php

use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Url;

add_filter( 'ks_admin_theme_options_header_settings', function ( $fields ) {
    // Images Accordion Section
    $fields[] = Accordion::make( 'Images', wp_unique_id() )->instructions( 'Main header images' );
    $fields[] = Image::make( 'Desktop Logo', 'logo_m' )
        ->instructions( 'Add desktop logo' )
        ->returnFormat( 'url' )
        ->previewSize( 'medium' )
        ->required();
    $fields[] = Image::make( 'Mobile Logo', 'logo_d' )
        ->instructions( 'Add mobile logo' ) // Corrected the instruction text
        ->returnFormat( 'url' )
        ->previewSize( 'medium' )
        ->required();

    // Links Accordion Section
    $fields[] = Accordion::make( 'Links', wp_unique_id() )->instructions( 'Main header links' );;
    $fields[] = Url::make( 'Shop URL', 'shop_url' ) // Corrected the field key
        ->instructions( 'Add Main shop page URL' )
        ->required();
    $fields[] = Url::make( 'Book URL', 'book_url' )
        ->instructions( 'Add main booking page URL.' )
        ->required();
    $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();

    return $fields;
} );