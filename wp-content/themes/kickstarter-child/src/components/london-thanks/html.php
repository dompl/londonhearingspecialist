<?php
use Kickstarter\MyHelpers;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1704452844_london', 10, 2 );

function wp_1704452844_london( $html, $data ) {

    $default_message = '<p>Your enquiry has been successfully sent. We will review this shortly to get back to you to organise an appointment or reply to your query.</p>';
    $default_message .= '<p>Should you have an emergency appointment requirement do give us a call to speak to one of our professionals.</p>';

    $title   = get_component( 'title', $data ) ? get_component( 'title', $data ) : 'Thank you';
    $message = get_component( 'message', $data ) ? get_component( 'message', $data ) : $default_message;
    $img     = 884;

    $html .= '<div class="london-thanks">';
    $html .= $img ? MyHelpers::PictureSource( image : $img, size: 360, min: 320, custom_container: 'image' ): '';
    $html .= '<div class="content">';
    $html .= $title ? '<h2>' . $title . '</h2>' : '';
    $html .= $message ? '<div class="message london-text">' . wpautop( $message ) . '</h2>' : '';
    $html .= '</div>';
    $html .= '</div>';

    $html .= '';

    return $html;
}