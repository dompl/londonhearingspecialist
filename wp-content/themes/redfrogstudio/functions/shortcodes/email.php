<?php
/**
 * Email shortcode
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

add_shortcode( 'email', function ( $atts ) {

    $data = Kickstarter\MyHelpers::getThemeData();

    if ( isset( $data['ks_email_address'] ) ) {

        // Sanitize and validate the email address
        $email = sanitize_email( $data['ks_email_address'] );

        if (  !  is_email( $email ) ) {
            // Invalid email address
            return '';
        }

        if ( isset( $atts['url'] ) ) {
            // Create a secure mailto link
            $email_link = sprintf( '<a href="%s">%s</a>', esc_url( 'mailto:' . antispambot( $email ) ), esc_html( $email ) );
            return $email_link;
        }

        return esc_html( $email );
    }

} );