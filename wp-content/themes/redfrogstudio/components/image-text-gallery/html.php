<?php
/**
 * HTML For the Slider gallery
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
add_filter( '_ks_component_image-text-gallery', 'ks_component_image_text_gallery', 10, 3 );

/**
 * @param $html
 * @param $data
 * @param $helpers
 * @param $theme_data
 * @return mixed
 */
use Kickstarter\MyHelpers;
function ks_component_image_text_gallery( $html, $data, $helpers ) {

    $layout          = get_component( 'layout', $data );
    $container_width = get_component( 'container_width', $data );

    //  For sime image
    if ( $layout == 'image' ) {

        $image  = get_component( 'sm', $data, 'i' );
        $height = (int) get_component( 'sm', $data, 'h' ) ?? 800;
        $width  = apply_filters( '_ks_component_image_text_image_size_full', 1200, $height, $image, $data );
        $size   = $height ? [$width, $height] : $width;
        $above  = get_component( 'above', $data );
        $below  = get_component( 'below', $data );

        $wrapper_class   = [];
        $wrapper_class[] = $above ? ' has-above' : '';
        $wrapper_class[] = $below ? ' has-below' : '';

        $html .= '<div class="wrapper wrapper-single' . ( rtrim( implode( ' ', array_filter( $wrapper_class ) ) ) ) . '">';
        $html .= $above ? '<div class="above">' . nl2br( $above ) . '</div>' : '';
        $html .= MyHelpers::PictureSource( image: $image, size: $size, ratios: MyHelpers::ScreenSizes() );
        $html .= $below ? '<div class="below">' . nl2br( $below ) . '</div>' : '';
        $html .= '</div>';

    } else {

        $html .= '<div class="wrapper wrapper-dual">';

        foreach ( ['left', 'right'] as $v ) {

            $image = get_component( $v, $data, 'i' );

            $html .= '<div class="item">';

            $size        = get_component( $v, $data, 'h' ) ?? 400;
            $description = get_component( $v, $data, 't' );
            $position    = get_component( $v, $data, 'p' );
            $zoom        = get_component( $v, $data, 'zoom' );
            $screen      = MyHelpers::ScreenSizes( $container_width );

            if ( $screen ) {
                $s    = intval( $screen / 2 );
                $size = [$s, $size];
            }

            $html .= $description && $position == 'top' ? '<div class="text text-top">' . nl2br( $description ) . '</div>' : '';
            $html .= $image ? MyHelpers::PictureSource( image : $image, size: $size, zoom: $zoom ): '';
            $html .= $description && $position == 'bot' ? '<div class="text text-bottom">' . nl2br( $description ) . '</div>' : '';

            $html .= '</div>';

        }
        $html .= '</div>';

    }

    return $html;

}