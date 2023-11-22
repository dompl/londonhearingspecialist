<?php

use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Repeater;
use Kickstarter\MyHelpers;
add_shortcode( 'accreditation', 'accreditation_shortcode' );
function accreditation_shortcode( $atts ) {

    $images = MyHelpers::getThemeData( 'accreditation_images' );
    if (  !  empty( $images ) ) {
        $html = isset( $atts['space-top'] ) ? '<div class="space space-' . $atts['space-top'] . ' space-in"></div>' : '';
        $html .= '<div class="accreditation">';
        foreach ( $images as $image ) {
            $html .= MyHelpers::PictureSource( image: $image['image'], size: 100, custom_container: 'item', min: 100, reversed: true );
        }
        $html .= '</div>';
        $html .= isset( $atts['space-bottom'] ) ? '<div class="space space-' . $atts['space-bottom'] . ' space-in"></div>' : '';
        return $html;
    }
}

add_filter( 'ks_admin_theme_options_addons', function ( $fields ) {
    $fields[] = Accordion::make( 'Shortcodes', wp_unique_id() )->instructions( 'various settings for theme shortcodes' );
    $fields[] = Repeater::make( 'Accreditation shortcode', 'accreditation_images' )->instructions( '<strong>[accreditation]</strong> : displays list of accreditation logos. Logos need to be added here.' )->fields( [
        Image::make( 'Accreditation logo image', 'image' )->instructions( 'Add accreditation logo image' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' )->required()
    ] )->collapsed( 'image' )->buttonLabel( 'Add Image' )->layout( 'table' );
    return $fields;
} );