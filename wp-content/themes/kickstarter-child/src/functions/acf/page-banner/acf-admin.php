<?php
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Number;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Location;

add_action( 'acf/init', function () {

    $colors = ks_theme_custom_colors_array();

    $repeater   = [];
    $repeater[] = Tab::make( 'Images', wp_unique_id() )->placement( 'left' );
    $repeater[] = Image::make( 'Background image', 'bcg_image' )->instructions( 'Add background image. If no image is provided system will show default image.' )->returnFormat( 'id' )->previewSize( 'thumbnail' )->library( 'all' )->mimeTypes( ['jpg', 'jpeg', 'png'] );
    $repeater[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' );

    if (  !  empty( $colors ) ) {
        // Create a group field for batch text and background color
        $repeater[] = \London\Acf::HeaderAcfFieldsBatch( $colors );
    }
    $colors     = ks_theme_custom_colors_array();
    $repeater[] = Select::make( 'Text color', 'banner_color' )->instructions( 'Add banner text color' )->choices( $colors )->allowNull()->stylisedUi();
    $repeater[] = Text::make( 'Title', 'london_banner_title' )->instructions( 'Add page banner title. Use variable <strong>%title%</strong> to display default page/post title.' )->defaultValue( '%title%' )->required();
    $repeater[] = Text::make( 'Addon', 'london_banner_addon' )->instructions( 'Add page banner additional text. Title addon will display in the blue background container.' );
    $repeater[] = Textarea::make( 'Description', 'london_banner_addon_desc' )->newLines( 'br' )->instructions( 'Add banner additional description' )->rows( 3 );
    $repeater   = array_merge( $repeater, \London\Acf::ButtonAcfFields( 'banner_', true ) );
    register_extended_field_group( [
        'title'    => 'Page banner',
        'style'    => 'default',
        'fields'   => $repeater,
        'location' => [
            Location::where( 'post_type', 'post' ),
            Location::where( 'post_type', 'page' ),
            Location::where( 'post_type', 'product' ),
            Location::where( 'post_type', 'clinic_locations' ),
            Location::where( 'post_type', 'clinic_services' )
        ]
    ] );
} );

add_filter( 'london_admin_theme_options', function ( $fields ) {

    $fields['banners']   = [];
    $fields['banners'][] = Repeater::make( 'Banner images', 'london_banners' )->instructions( 'Add default banner images' )->fields(
        [Image::make( 'Banner image', 'img' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' )->required()]
    )->collapsed( 'img' )->buttonLabel( 'Add Banner Image' )->layout( 'table' );
    return $fields;

} );

function london_banner_images() {

    $data = get_transient( 'london_banner_images' );

    if (  !  empty( $data ) ) {
        return $data;
    }

    $data    = [];
    $banners = get_option( 'options_london_banners' );

    if ( empty( $banners ) ) {
        return [];
    }

    for ( $i = 0; $i < $banners; $i++ ) {
        $image = get_option( "options_london_banners_{$i}_img" );
        if (  !  empty( $image ) ) {
            $data[] = $image;
        }
    }
    return $data;

}

add_action( 'acf/save_post', function ( $post_id ) {
    if ( is_admin() && isset( $_GET['page'] ) && $_GET['page'] === 'london-page-banners' ) {
        delete_transient( 'london_banner_images' );
    }
} );

add_filter( 'ks_admin_theme_options_addons', function ( $fields ) {
    $fields[]   = Accordion::make( 'Page banner call for action', wp_unique_id() )->instructions( 'Setting for call for actions under the main banner' );
    $repeater   = [];
    $repeater[] = Text::make( 'Text', 'text' )->required();
    $repeater[] = Image::make( 'Image', 'image' )->instructions( '' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' )->required();
    $fields[]   = Repeater::make( 'Add call for action', 'london_banner_calls' )->instructions( 'Add banner call for actions' )->fields( $repeater )->collapsed( '' )->buttonLabel( 'Add call for action' )->layout( 'table' )->min( 3 )->max( 3 );
    $fields[]   = Number::make( 'Images size', 'london_banner_image_size' )->instructions( 'Add banner image size (in px)' )->min( 50 )->max( 300 )->required();
    return $fields;
} );