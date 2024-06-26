<?php
use Kickstarter\MyHelpers;
use London\Acf;
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1704299402_london', 10, 2 );

function booking_page_id() {
    $page = 638;
}

function wp_1704299402_london( $html, $data ) {

    $html .= '<div class="london-booking">';
    $html .= Acf::HeaderAcfHtml( $data );
    $html .= '<div class="bookin-form">';
    $html .= '<iframe style="border: none;" src="https://myhearingportal.com/?clinic=P2FwaUtleT1GSVpHQnpJc3AzcWdDT3ZjQ0o0V245M2laYmFkRlp0NyZjbGluaWNOYW1lPVVLX2xvbmQmbG9jYWxlPWVuX0dCJnBvc3RNZXNzYWdlTWVzc2FnZT17InBhdGllbnRJZCI6UEFUSUVOVF9JRCwibG9jYXRpb24iOiJMT0NBVElPTiIsImFwcG9pbnRtZW50U3RhcnRUaW1lIjoiQVBQT0lOVE1FTlRfU1RBUlRfVElNRSIsImFwcG9pbnRtZW50VHlwZSI6IkFQUE9JTlRNRU5UX1RZUEUifSZwb3N0TWVzc2FnZVRhcmdldE9yaWdpbj1odHRwczovL2xvbmRvbmhlYXJpbmdzcGVjaWFsaXN0LmNvLnVrJmZ1bGxXaWR0aD0x" width="100%" height="900" frameborder="0" scrolling="auto"></iframe>';
    $html .= '</div>';
    $html .= '</div>';

    return $html;
}

add_action( 'wp_head', function () {

    if ( MyHelpers::ifHasComponent( 'london_booking' ) ) {
        $return = '<script>';
        $url    = get_bloginfo( 'url' );
        $return .= "
			 window.addEventListener(
			 'message',
			 (event) => {
				  if (event.origin !== 'https://myhearingportal.com') return;
				  var confirmationPage = '" . $url . "/thank-you-2/?confirmation-successful';
				  if (event.data.location == 'Camden') {
						confirmationPage = '" . $url . "/camden-thank-you/?confirmation-successful';
				  } else if (event.data.location == 'Finchley') {
						confirmationPage = '" . $url . "/finchley-thank-you/?confirmation-successful';
				  } else if (event.data.location == 'Hampstead') {
						confirmationPage = '" . $url . "/hampstead-thank-you/?confirmation-successful';
				  } else if (event.data.location == 'Marylebone') {
						confirmationPage = '" . $url . "/marylebone-thank-you/?confirmation-successful';
				  } else if (event.data.location == 'Potters Bar') {
						confirmationPage = '" . $url . "/potters-bar-thank-you/?confirmation-successful';
				  } else if (event.data.location == 'Ware') {
						confirmationPage = '" . $url . "/ware-thank-you/?confirmation-successful';
				  } else if (event.data.location == 'Old Street') {
						confirmationPage = '" . $url . "/old-street-thank-you/?confirmation-successful';
					} else if (event.data.location == 'Victoria') {
					confirmationPage = '" . $url . "/victoria-thank-you/?confirmation-successful';
			 	 }
				  window.location.href = confirmationPage;
				  return;
			 },
			 false
		);
		";

        $return .= '</script>';
        echo $return;
    }

} );

add_action( 'template_redirect', function () {
    // Assuming you have a way to get the relevant post ID here.
    // If this code is within The Loop, you can use get_the_ID().

    if ( isset( $_GET['confirmation-successful'] ) ) {
        return;
    }

    $post_id = get_the_ID();
    // Redirect the page to the booking page when it's on thank you and no admin is logged in.
    if ( MyHelpers::ifHasComponent( 'london_thanks', $post_id ) && !  current_user_can( 'edit_posts' ) ) {
        $bookingPage = 638;
        $location    = get_the_permalink( $bookingPage );
        wp_safe_redirect( $location, 301 );
        exit;
    }
} );