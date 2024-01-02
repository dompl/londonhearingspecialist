<?php
use Kickstarter\MyHelpers;
use London\Acf;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1700569337_london', 10, 2 );

function wp_1700569337_london( $html, $data ) {

    $image    = get_component( 'image', $data, 'image' );
    $height   = get_component( 'image', $data, 'height' );
    $width    = get_component( 'image', $data, 'width' ) ? get_component( 'image', $data, 'width' ) : 500;
    $backdrop = get_component( 'image', $data, 'bcg' );
    $content  = get_component( 'content', $data );
    $position = get_component( 'position', $data );
    $type     = get_component( 'image', $data, 'type' ) ? get_component( 'image', $data, 'type' ) : 'bcg';

    $right = '';
    $left  = '<div class="pos-left">';
    $left .= Acf::HeaderAcfHtml( $data );
    $left .= $content ? '<div class="london-content">' . wpautop( $content ) . '</div>' : '';
    $left .= Acf::ButtonAcfHtml( $data, 's' );
    $left .= empty( $backdrop ) ? '' : '<div class="backdrop b-pos-' . $position . ' bcg-' . $backdrop . ' int-' . $type . '"></div>';
    $left .= '</div>';

    if ( $image ) {

        $id = 'london-dual-' . $data['post_id'] . $data['index'];

        if ( $type == 'bcg' ) {

            $css = "#{$id} {
			background-image: url(" . MyHelpers::WPImage( id: $image, size: [300, $height], retina: false ) . ");
			@media
				only screen and (-webkit-min-device-pixel-ratio: 2),
				only screen and (   min--moz-device-pixel-ratio: 2),
				only screen and (     -o-min-device-pixel-ratio: 2/1),
				only screen and (        min-device-pixel-ratio: 2),
				only screen and (                min-resolution: 192dpi),
				only screen and (                min-resolution: 2dppx) {
					background-image: url(" . MyHelpers::WPImage( id: $image, size: [520, $height], retina: true ) . ")!important;
				}

			}";

            MyHelpers::AddCustomCss( $css );

            $right = '<div id="' . $id . '" class="pos-right" style="background-image:url(' . MyHelpers::WPImage( id: $image, size: [520, $height], retina: false ) . ')"></div>';

        } else {

            $img   = MyHelpers::PictureSource( image: $image, size: $width, min: 480, custom_container: 'image' );
            $right = '<div class="pos-right ' . $type . '">' . $img . '</div>';

        }

    }

    $html .= '<div class="london-dual-content position-' . $position . '">' . $left . $right . '</div>';

    return $html;
}