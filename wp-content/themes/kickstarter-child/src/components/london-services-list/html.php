<?php
use Kickstarter\MyHelpers;
use London\Helpers;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1700562050_london', 10, 2 );

function wp_1700562050_london( $html, $data ) {

    $services          = clinic_services_data();
    $select            = get_component( 'services_select', $data );
    $selected_services = $services;

    if (  !  in_array( 'all', $select ) && !  empty( $select ) ) {
        $selected_services = MyHelpers::getSelectedValues( $services, $select );
    }

    $html .= '<div class="london-services-list">';

    $html .= \London\Acf::HeaderAcfHtml( $data );

    if (  !  empty( $selected_services ) ) {

        foreach ( $selected_services as $post_id => $service ) {

            $image_size = [380, 300];
            $css        = '.london-service-' . $post_id . ' {';
            $css .= 'background-image: url(' . MyHelpers::WPImage( id: (int) $service['image'], size: $image_size, q: 80, webp_quality: 80, retina: false ) . ');';
            $css .= '@media';
            $css .= 'only screen and (-webkit-min-device-pixel-ratio: 2),';
            $css .= 'only screen and (   min--moz-device-pixel-ratio: 2),';
            $css .= 'only screen and (     -o-min-device-pixel-ratio: 2/1),';
            $css .= 'only screen and (        min-device-pixel-ratio: 2),';
            $css .= 'only screen and (                min-resolution: 192dpi),';
            $css .= 'only screen and (                min-resolution: 2dppx) { ';
            $css .= 'background-image: url(' . MyHelpers::WPImage( id: (int) $service['image'], size: $image_size, q: 80, webp_quality: 80, retina: true ) . ');';
            $css .= '}';
            $css .= '}';

            MyHelpers::AddCustomCss( $css );
        }

        $html .= '<div class="items">';

        foreach ( $selected_services as $post_id => $service ) {

            $link = [
                'url'    => get_the_permalink( $post_id ),
                'title'  => $service['title'],
                'target' => ''
            ];

            $link =  !  empty( $service['link'] ) ? $service['link'] : $link;

            $html .= '<div class="item london-service-' . $post_id . '">';

            $html .= $service['icon'] ? MyHelpers::Link(
                link : $link,
                content: '<img src="' . wp_get_attachment_url( $service['icon'] ) . '" alt="' . $service['title'] . '">',
                wrapper: 'icon',
                schema: true ): '';

            $html .= '<div class="content">';
            $html .=  !  empty( $service['title'] ) ? '<div class="title">' . MyHelpers::Link( link : $link, content: '<h2>' . $service['title'] . '</h2>', schema: true ) . '</div>':'';
            $html .=  !  empty( $service['description'] ) ? '<div class="description">' . wpautop( $service['description'] ) . '</div>' : '';
            if ( empty( $service['link'] ) ) {
                $link['title'] = 'Discover More';
            }
            $html .= Helpers::IconButton( link: $link, icon: 'plus-solid', color: 'transparent' );
            $html .= '</div>';

            $html .= '</div>';

        }

        $html .= '</div>';

    }

    $html .= \London\Acf::ButtonAcfHtml( $data, 's' );

    $html .= '</div>';

    return $html;
}