<?php

add_shortcode( 'book_appointment', 'london_book_appointment_shortcode' );

function london_book_appointment_shortcode( $atts ) {

    $title = isset( $atts['title'] ) ? $atts['title'] : '<span class="aur">Book</span> <span class="nne aur">Appointment</span>';
    $color = isset( $atts['color'] ) ? $atts['color'] : 'green';
    $small = isset( $atts['small'] ) ? ' small' : false;

    $themeData = \Kickstarter\MyHelpers::getThemeData();

    if ( $themeData['ks_book_url'] ) {
        return '<a href="' . esc_url( $themeData['ks_book_url'] ) . '" title="Book Appointment with London Hearing Specialists" class="button ' . $color . ' clx book-appointment has-icon' . $small . '">' . $title . '</a>';
    }
}