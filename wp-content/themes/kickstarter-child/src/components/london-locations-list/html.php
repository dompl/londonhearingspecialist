<?php
use Kickstarter\MyHelpers;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1700565756_london', 10, 2 );

function wp_1700565756_london( $html, $data ) {

    $locations = clinic_locations_data();
    $select    = get_component( 'select_locations', $data );

    $selected_locations = $locations;

    if (  !  in_array( 'all', $select ) && !  empty( $select ) ) {
        $selected_locations = MyHelpers::getSelectedValues( $locations, $select );
    }

    $html .= '<div class="london-locations-list">';

    $html .= \London\Acf::HeaderAcfHtml( $data );

    if (  !  empty( $selected_locations ) ) {

        $html .= '<div class="items">';

        foreach ( $selected_locations as $post_id => $location ) {

            $link = [
                'title' => $location['title'],
                'url'   => esc_url( get_the_permalink( $post_id ) )
            ];

            $html .= '<div class="item">';
            $link['title'] = 'Visit London Hearing Specialist at ' . $location['title'] . ' clinic';
            $html .= $location['image'] ? MyHelpers::PictureSource( image : $location['image'], size: [290, 210], custom_container: 'image', min: [290, 210], alt: $link['title'] ): '';
            $html .= '<div class="content">';
            $html .= MyHelpers::Link( link: $link, content: '<i class="icon-location-dot-light"></i><span class="text">' . $location['title'] . '</span>', wrapper: 'title', schema: true );
            $html .= $location['address'] ? '<address>' . nl2br( $location['address'] ) . '</address>' : '';

            $html .= '<div class="buttons-wrapper center">';
            if ( isset( $location['phone'] ) && $location['phone'] !== '' ) {
                $html .= '<div class="button-item">';
                $html .= '<a href="tel:' . esc_attr( $location['phone'] ) . '" class="button small green" itemprop="telephone" title="Call London Hearing Specialist in ' . $location['title'] . '">' . __( 'Call Clinic' ) . '</a>';
                $html .= '</div>';
            }
            // $html .= do_shortcode( '[book_appointment title="Book Today" small=true]' );
            $html .= $location['map'] ? '<a href="' . esc_url( $location['map'] ) . '" target="_blank" class="button outlined small white" itemprop="url" title="Find London Hearing Specialist in ' . $location['title'] . ' on Google Map">Find on Map</a>' : '';

            $html .= '</div>';
            $html .= '</div>';
            $html .= '</div>';

        }

        $html .= '</div>';
    }

    $html .= '</div>';

    return $html;
}