<?php
/**
 * Social Media Shortcode
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
#
add_shortcode( 'social_media', function ( $atts ) {

    $data = Kickstarter\MyHelpers::getThemeData();

    if (  !  isset( $data['ks_social_media'] ) || empty( array_filter( (array) $data['ks_social_media'] ) ) ) {
        return;
    }

    $socials = array_filter( $data['ks_social_media'] );

    // Allow other developers to modify the $socials array
    $socials = apply_filters( 'ks_social_media_shortcode_order', $socials );

    if (  !  empty( $socials ) ) {

        $html = '<ul class="social-media' . ( isset( $atts['class'] ) ? ' ' . $atts['class'] : '' ) . '">';

        foreach ( $socials as $icon => $url ) {
            $title = sprintf( __( 'Follow us on %s ', TEXT_DOMAIN ), ucfirst( $icon ) );
            $html .= '<li class="social-' . $icon . '"><a href="' . esc_url( $url ) . '" title="' . apply_filters( '_ks_shortcode_social_title', $title, $icon ) . '"><i class="icon-' . $icon . '"></i></a></li>';

        }

        $html .= '</ul>';

        return $html;
    }

} );