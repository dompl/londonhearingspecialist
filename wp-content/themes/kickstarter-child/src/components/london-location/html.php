<?php
use Kickstarter\MyAcf;
use London\Helpers;
add_filter( MyAcf::Html(), 'wp_1702034028_london', 10, 2 );

function wp_1702034028_london( $html, $data ) {

    $select      = get_component( 'select', $data );
    $clinic_data = clinic_locations_data();
    if ( empty( $select ) || empty( $clinic_data ) ) {
        return $html;

    }

    $html .= '<div class="london-locations">';
    foreach ( $select as $post_id ) {
        $location = $clinic_data[$post_id];

        if (  !  empty( $location ) ) {

            $html .= '<div class="london-location">';

            $html .= '<div class="location-top">'; // Start top

            if ( $location['address'] ) {

                $html .= '<div class="item address">';
                $html .= '<h3>Address</h3>';
                $html .= '<div class="wrapper"><address>' . nl2br( $location['address'] ) . '</address></div>';
                $html .= '</div>';
            }

            $html .= '<div class="item get-in-touch">';
            $html .= '<h3>Get in touch</h3>';
            $html .= '<div class="wrapper">';
            $html .= $location['phone'] ? '<div class="inner phone"><i class="icon-phone-regular"></i>' . str_replace( ['+44 ', '+44'], ['', ''], $location['phone'] ) . '</div>' : '';
            $html .= $location['email'] ? '<div class="inner email">' . sprintf( '<i class="icon-envelope-regular"></i><a href="%s">%s</a>', esc_url( 'mailto:' . antispambot( $location['email'] ) ), esc_html( $location['email'] ) ) . '</div>' : '';
            $html .= $location['facebook'] ? '<div class="inner facebook"><i class="icon-facebook"></i><a href="' . esc_url( $location['facebook'] ) . '" title="Visit ' . get_bloginfo( 'name' ) . ' (' . $location['title'] . ' location) on Facebook">londonhearingspecialist</a></div>' : '';
            $html .= $location['twitter'] ? '<div class="inner x-twitter"><i class="icon-x-twitter"></i><a href="' . esc_url( $location['twitter'] ) . '" title="Follow ' . get_bloginfo( 'name' ) . ' (' . $location['title'] . ' location) on Twitter">londonhearingspecialist</a></div>' : '';
            $html .= '</div>';
            $html .= '</div>';

            if (  !  empty( $location['hours'] ) ) {
                $html .= '<div class="item hours">';
                $html .= '<h3>Opening hours</h3>';
                $html .= '<div class="wrapper">';
                foreach ( $location['hours'] as $hours ) {
                    $day  = isset( $hours[0] ) ? $hours[0] : false;
                    $time = isset( $hours[1] ) ? $hours[1] : false;
                    $html .= '<div class="hours-item">';
                    $html .= $day ? '<span class="day">' . $day . '</span>' : '';
                    $html .= $time ? '<span class="time">' . $time . '</span>' : '';
                    $html .= '</div>';
                }
                $html .= '</div>';
                $html .= '</div>';
            }

            $html .= '</div>'; // End top

            $directions = array_filter( (array) $location['dirs'] );

            $descriptions = $location['addon'];

            $html .= '<div class="location-bottom">';
            $html .= '<div class="map">';
            if ( isset( $location['iframe'] ) && !  empty( $location['iframe'] ) ) {
                $html .= $location['iframe'];
            } elseif ( $location['map'] ) {
                $html .= Helpers::convertToGoogleMapsIframe( $location['map'] );
            }
            $html .= '</div>';

            if (  !  empty( $directions ) ) {
                $html .= '<div class="directions">';
                foreach ( $directions as $key => $value ) {
                    $html .= '<div class="directions-item">';
                    $html .= '<i class="icon-' . $key . '"></i>';
                    $html .= '<div class="directions-item-content">' . nl2br( $value ) . '</div>';
                    $html .= '</div>';
                }
                $html .= '<div class="book">' . do_shortcode( '[book_appointment]' ) . '</div>';
                $html .= '</div>';
            }
            $html .= '</div>'; // End bottoms
            $html .= '</div>';
        }
    }
    $html .= '</div>';

    $html .= '';

    return $html;
}