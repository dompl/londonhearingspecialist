<?php
// Using namespace for Kickstarter Helpers
use Kickstarter\MyHelpers;

// Adding actions and filters for the footer HTML elements
add_action( 'wp_footer', 'london_footer_newsletter_signup' );
add_action( 'wp_footer', 'london_footer_html' );
add_filter( 'london_footer_about', 'london_footer_about_html', 10, 2 );
add_filter( 'london_footer_navigation_top', 'london_footer_navigation_top_html', 10, 3 );
add_filter( 'london_footer_navigation_bottom', 'london_footer_navigation_bottom_html', 10, 3 );

/**
 * Generates the HTML for the London footer.
 *
 * @param string $html Existing HTML content to append to.
 * @return void Outputs the final HTML content.
 */
function london_footer_html( $html ) {
    // Retrieving navigation and theme data
    $navs      = london_footer_navs();
    $themeData = MyHelpers::getThemeData();

    // Building the footer HTML structure
    $html .= '<footer id="london-footer">';
    $html .= '<div class="container">';
    $html .= '<div class="container-top">';
    $html .= '<div class="item about">' . apply_filters( 'london_footer_about', '', $themeData ) . '</div>';
    $html .= '<div class="item footer-navigation">';
    //  $html .= '<div class="top">' . apply_filters( 'london_footer_navigation_top', '', $navs, $themeData ) . '</div>';
    $html .= '<div class="bottom">' . apply_filters( 'london_footer_navigation_top', '', $navs, $themeData ) . apply_filters( 'london_footer_navigation_bottom', '', $navs, $themeData ) . '</div>';
    $html .= '</div>'; // End of footer navigation
    $html .= '</div>'; // End of container top
    $html .= '<div class="container-bottom">';
    $html .= '<span>&copy; Copyright ' . date( 'Y' ) . ' - ' . get_bloginfo( 'name' ) . '</span>';
    $html .= '<span><a href="' . get_privacy_policy_url() . '" title="Privacy Policy">Privacy Policy</a></span>';
    $html .= '</div>'; // End of container bottom
    $html .= '</div>'; // End of container
    $html .= '</footer>';

    // Outputting the final HTML
    echo $html;
}

function london_footer_navigation_helpers( $key, $name ) {

    $navigationItems = MyHelpers::getThemeData( "_$key" );

    if ( empty( $navigationItems['links'] ) ) {
        return;
    }
    $name = $navigationItems['title'] ?? $name;

    $html = '<div class="wrap">';
    $html .= '<h3>' . $name . '</h3>';
    $html .= '<div class="nav-container">';
    $html .= '<ul>';
    foreach ( $navigationItems['links'] as $link ) {
        $post_id = url_to_postid( htmlspecialchars( $link ) );
        $title   = the_title_attribute( 'echo=0&post=' . $post_id );
        $html .= '<li><a href="' . get_permalink( $post_id ) . '">' . $title . '</a></li>';
    }
    $html .= '</ul>';
    $html .= '</div>';
    $html .= '</div>';
    return $html;

}

function london_footer_navigation_top_html( $html, $navs, $themeData ) {
    foreach ( $navs as $name => $items ) {
        if ( strpos( $name, 'services' ) !== false ) {
            $html .= london_footer_navigation_helpers( $name, $items );
        }
    }
    return $html;
}

function london_footer_navigation_bottom_html( $html, $navs, $themeData ) {

    foreach ( $navs as $name => $items ) {
        if ( strpos( $name, 'services' ) !== false ) {
        } else {
            $html .= london_footer_navigation_helpers( $name, $items );
        }
    }
    return $html;

    return $html;
}

function london_footer_about_html( $html, $themeData ) {

    if (  !  empty( $themeData['footer_logo'] ) ) {
        $html .= '<div class="logo">';
        $html .= '<img src="' . $themeData['footer_logo'] . '" alt="' . get_bloginfo( 'name' ) . ' logo">';
        $html .= '</div>';
    }

    if (  !  empty( $themeData['footer_about'] ) ) {
        $html .= '<div class="about">';
        $html .= wpautop( $themeData['footer_about'] );
        $html .= '</div>';
    }

    $html .= '<div class="cards">';
    $html .= '<div class="card visa">
		<svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="120" height="80" rx="4" fill="white"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M86.6666 44.9375L90.3238 35.0625L92.3809 44.9375H86.6666ZM100.952 52.8375L95.8086 27.1625H88.7383C86.3525 27.1625 85.7723 29.0759 85.7723 29.0759L76.1904 52.8375H82.8868L84.2269 49.0244H92.3947L93.148 52.8375H100.952Z" fill="#182E66"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M77.1866 33.5711L78.0952 28.244C78.0952 28.244 75.2896 27.1625 72.3648 27.1625C69.2031 27.1625 61.6955 28.5638 61.6955 35.3738C61.6955 41.7825 70.5071 41.8621 70.5071 45.2266C70.5071 48.5912 62.6034 47.9901 59.9955 45.8676L59.0476 51.4362C59.0476 51.4362 61.8919 52.8375 66.2397 52.8375C70.5869 52.8375 77.1467 50.5544 77.1467 44.3455C77.1467 37.8964 68.2552 37.296 68.2552 34.4921C68.2552 31.6882 74.4602 32.0484 77.1866 33.5711Z" fill="#182E66"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M54.6517 52.8375H47.6191L52.0144 27.1625H59.0477L54.6517 52.8375Z" fill="#182E66"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M42.3113 27.1625L35.9217 44.8213L35.1663 41.0185L35.167 41.0199L32.9114 29.4749C32.9114 29.4749 32.6394 27.1625 29.7324 27.1625H19.1709L19.0476 27.5966C19.0476 27.5966 22.2782 28.2669 26.057 30.5326L31.8793 52.8375H38.8617L49.5238 27.1625H42.3113Z" fill="#182E66"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M34.2857 40.9875L32.1534 29.4695C32.1534 29.4695 31.8963 27.1625 29.1482 27.1625H19.1641L19.0476 27.5955C19.0476 27.5955 23.8467 28.6432 28.4504 32.5652C32.8505 36.3145 34.2857 40.9875 34.2857 40.9875Z" fill="#182E66"/>
		</svg>
	 </div>';
    $html .= '<div class="card mastercard">';
    $html .= '<svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">';
    $html .= '<rect width="120" height="80" rx="4" fill="white"/>';
    $html .= '<path fill-rule="evenodd" clip-rule="evenodd" d="M97.5288 54.6562V53.7384H97.289L97.0137 54.3698L96.7378 53.7384H96.498V54.6562H96.6675V53.9637L96.9257 54.5609H97.1011L97.36 53.9624V54.6562H97.5288ZM96.0111 54.6562V53.8947H96.318V53.7397H95.5361V53.8947H95.843V54.6562H96.0111Z" fill="#F79E1B"/>';
    $html .= '<path fill-rule="evenodd" clip-rule="evenodd" d="M49.6521 58.595H70.3479V21.4044H49.6521V58.595Z" fill="#FF5F00"/>';
    $html .= '<path fill-rule="evenodd" clip-rule="evenodd" d="M98.2675 40.0003C98.2675 53.063 87.6791 63.652 74.6171 63.652C69.0996 63.652 64.0229 61.7624 60 58.5956C65.5011 54.2646 69.0339 47.5448 69.0339 40.0003C69.0339 32.4552 65.5011 25.7354 60 21.4044C64.0229 18.2376 69.0996 16.348 74.6171 16.348C87.6791 16.348 98.2675 26.937 98.2675 40.0003Z" fill="#F79E1B"/>';
    $html .= '<path fill-rule="evenodd" clip-rule="evenodd" d="M50.966 40.0003C50.966 32.4552 54.4988 25.7354 59.9999 21.4044C55.977 18.2376 50.9003 16.348 45.3828 16.348C32.3208 16.348 21.7324 26.937 21.7324 40.0003C21.7324 53.063 32.3208 63.652 45.3828 63.652C50.9003 63.652 55.977 61.7624 59.9999 58.5956C54.4988 54.2646 50.966 47.5448 50.966 40.0003Z" fill="#EB001B"/>';
    $html .= '</svg>';
    $html .= ' </div>';
    $html .= '<div class="card stripe">';
    $html .= '<?xml version="1.0" encoding="UTF-8"?><svg preserveAspectRatio="xMidYMid" version="1.1" viewBox="0 0 512 214" xmlns="http://www.w3.org/2000/svg">';
    $html .= '
    <path d="m512 110.08c0-36.409-17.636-65.138-51.342-65.138-33.849 0-54.329 28.729-54.329 64.853 0 42.809 24.178 64.427 58.88 64.427 16.924 0 29.724-3.84 39.396-9.2444v-28.444c-9.6711 4.8356-20.764 7.8222-34.844 7.8222-13.796 0-26.027-4.8356-27.591-21.618h69.547c0-1.8489 0.28444-9.2444 0.28444-12.658zm-70.258-13.511c0-16.071 9.8133-22.756 18.773-22.756 8.6756 0 17.92 6.6844 17.92 22.756h-36.693zm-90.311-51.627c-13.938 0-22.898 6.5422-27.876 11.093l-1.8489-8.8178h-31.289v165.83l35.556-7.5378 0.14222-40.249c5.12 3.6978 12.658 8.96 25.173 8.96 25.458 0 48.64-20.48 48.64-65.564-0.14222-41.244-23.609-63.716-48.498-63.716zm-8.5333 97.991c-8.3911 0-13.369-2.9867-16.782-6.6844l-0.14222-52.764c3.6978-4.1244 8.8178-6.9689 16.924-6.9689 12.942 0 21.902 14.507 21.902 33.138 0 19.058-8.8178 33.28-21.902 33.28zm-101.4-106.38 35.698-7.68v-28.871l-35.698 7.5378v29.013zm0 10.809h35.698v124.44h-35.698v-124.44zm-38.258 10.524-2.2756-10.524h-30.72v124.44h35.556v-84.338c8.3911-10.951 22.613-8.96 27.022-7.3956v-32.711c-4.5511-1.7067-21.191-4.8356-29.582 10.524zm-71.111-41.387-34.702 7.3956-0.14222 113.92c0 21.049 15.787 36.551 36.836 36.551 11.662 0 20.196-2.1333 24.889-4.6933v-28.871c-4.5511 1.8489-27.022 8.3911-27.022-12.658v-50.489h27.022v-30.293h-27.022l0.14222-30.862zm-96.142 66.987c0-5.5467 4.5511-7.68 12.089-7.68 10.809 0 24.462 3.2711 35.271 9.1022v-33.422c-11.804-4.6933-23.467-6.5422-35.271-6.5422-28.871 0-48.071 15.076-48.071 40.249 0 39.253 54.044 32.996 54.044 49.92 0 6.5422-5.6889 8.6756-13.653 8.6756-11.804 0-26.88-4.8356-38.827-11.378v33.849c13.227 5.6889 26.596 8.1067 38.827 8.1067 29.582 0 49.92-14.649 49.92-40.107-0.14222-42.382-54.329-34.844-54.329-50.773z" fill="#635BFF" />';
    $html .= '
</svg></div>';
    $html .= '</div>';

    return $html;
}

// function london_footer_about_html( $html ) {
//
// $themeData = MyHelpers::getThemeData();
// return $html;
// }