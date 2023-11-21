<?php
use Kickstarter\MyHelpers;
use London\Acf;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1700569337_london', 10, 2 );

function wp_1700569337_london( $html, $data ) {

    $image    = get_component( 'image', $data, 'image' );
    $height   = get_component( 'image', $data, 'height' );
    $content  = get_component( 'content', $data );
    $position = get_component( 'position', $data );

    $right = '';
    $left  = Acf::HeaderAcfHtml( $data );
    $left .= $content ? '<div class="london-content">' . wpautop( $content ) . '</div>' : '';
    $left .= Acf::ButtonAcfHtml( $data, 's' );

    if ( $image ) {

        $id = 'london-dual-' . $data['post_id'] . $data['index'];

        $css = "#{$id} {
			background-image: url(" . MyHelpers::WPImage( id: $image, size: [300, $height], retina: false ) . ");
			@media
				only screen and (-webkit-min-device-pixel-ratio: 2),
				only screen and (   min--moz-device-pixel-ratio: 2),
				only screen and (     -o-min-device-pixel-ratio: 2/1),
				only screen and (        min-device-pixel-ratio: 2),
				only screen and (                min-resolution: 192dpi),
				only screen and (                min-resolution: 2dppx) {
					background-image: url(" . MyHelpers::WPImage( id: $image, size: [300, $height], retina: true ) . ");
				}

			}";

        MyHelpers::AddCustomCss( $css );

        $right = '<div id="' . $id . '"></div>';

    }

    $html .= '<div class="london-dual-content position-' . $position . '">' . $left . $right . '</div>';

    return $html;
}