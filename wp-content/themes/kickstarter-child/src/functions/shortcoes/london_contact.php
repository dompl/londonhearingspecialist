<?php
use Kickstarter\MyHelpers;
add_shortcode( 'london_contact', function () {
    $email = MyHelpers::getThemeData( 'ks_email_address' );
    $info  = '';
    if (  !  empty( $email ) ) {
        $info = '<div class="short-email"><a href="mailto:' . antispambot( $email ) . '"><i class="icon-envelope-regular"></i><span>' . antispambot( $email ) . '</span></a></div>';
    }
    $phone = MyHelpers::getThemeData( 'ks_tel_number' );
    if (  !  empty( $phone ) ) {
        $info .= '<div class="short-phone"><a href="tel:' . $phone['visible'] . '"><i class="icon-phone-regular"></i><span>' . $phone['dial'] . '</span></a></div>';
    }

    if (  !  empty( $info ) ) {
        return '<div class="short-info">' . $info . '</div>';
    }

} );