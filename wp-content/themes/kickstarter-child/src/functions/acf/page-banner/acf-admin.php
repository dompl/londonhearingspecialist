<?php
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Location;
add_action( 'acf/init', function () {
    register_extended_field_group( [
        'title'    => 'Page banner',
        'style'    => 'default',
        'fields'   => [
            Tab::make( 'Content', wp_unique_id() )->placement( 'left' ),
            Image::make( 'Background image', 'bcg_image' )->instructions( 'Add background image. If no image is provided system will show default image.' )->returnFormat( 'id' )->previewSize( 'thumbnail' )->library( 'all' )->mimeTypes( ['jpg', 'jpeg', 'png'] ),
            Text::make( 'Title', 'london_banner_title' )->instructions( 'Add page banner title. Use variable <strong>%title%</strong> to display default page/post title.' )->defaultValue( '%title%' )->required(),
            Text::make( 'Addon', 'london_banner_addon' )->instructions( 'Add page banner additional text. Title addon will display in the blue background container.' ),
            Textarea::make( 'Description', 'london_banner_addon_desc' )->newLines( 'br' )->instructions( 'Add banner additional description' )->rows( 3 )
        ],
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