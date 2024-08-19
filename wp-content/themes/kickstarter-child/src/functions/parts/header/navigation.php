<?php
use Kickstarter\MyHelpers;
use London\Helpers;
function london_header_navigation_callback( $echo = true, $theme_location = 'header' ) {

    $helpers = MyHelpers::getInstance();
    $navData = MyHelpers::getThemeData( 'ks_nav' );

    $navigation_settings = [
        'position'         => $navData['position'] ?? 'left',
        'submenuIndicator' => false,
        'toggle'           => isset( $navData['t'] ) ? '<i class="icon-' . $navData['t'] . '"></i>' : false,
        'settings'         => [
            'mobileBreakpoint'  => $navData['bp'] ?? 400,
            'showDuration'      => $navData['s'] ?? 100,
            'hideDuration'      => $navData['h'] ?? 100,
            'hideDelayDuration' => $navData['hd'] ?? 100
        ]
    ];

    $args = [
        'theme_location'  => $theme_location,
        'menu_id'         => 'menu-header',
        'menu_class'      => 'nav-menu align-to-' . $navigation_settings['position'],
        'container_class' => 'nav-menus-wrapper',
        'echo'            => false,
        'nav_id'          => 'navigation',
        'walker'          => new Custom_Walker_Nav_Menu()
    ];

    $navigation = sprintf( '<nav id="navigation" data-nav=%s class="navigation navigation-landscape"><div class="nav-header">%s</div>%s</nav>',
        json_encode( $navigation_settings['settings'] ),
        $navigation_settings['toggle'] !== false ? '<div class="nav-toggle">' . $navigation_settings['toggle'] . '</div>' : '',
        wp_nav_menu( $args )
    );
    if ( $echo == true ) {
        echo $navigation;
    } else {
        return $navigation;
    }
}

function ks_child_register_nav_menus() {
    // Register additional menu locations
    register_nav_menus( array(
        'shop_navigation'     => __( 'Shop Navigation', 'london' ),
        'services_navigation' => __( 'Services Navigation', 'london' )
    ) );
}
add_action( 'init', 'ks_child_register_nav_menus' );

// Remove the default navigation
add_action( 'after_setup_theme', function () {
    remove_action( 'ks_after_body', 'ks_header_navigation_init' );
    add_action( 'ks_after_body', 'london_navigation_container', 30 );
} );
// Add the new navigation
function london_navigation_container() {
    $navigation = null;
    if ( Helpers::isNewLondon() ) {
        if (  !  Helpers::isWooCommercePage() ) {
            $navigation = '<div id="nav-wrapper"><div class="container">' . london_header_navigation_callback( echo :false, theme_location: 'shop_navigation' ) . '</div></div>';
        } else {
            $navigation = '<div id="nav-wrapper"><div class="container">' . london_header_navigation_callback( echo :false, theme_location: 'services_navigation' ) . '</div></div>';
        }
    } else {
        $navigation = '<div id="nav-wrapper"><div class="container">' . london_header_navigation_callback( echo :false ) . '</div></div>';
        $navigation .= '<div id="gogole-wrap-mobile"><div class="container">' . \London\Helpers::GoogleRating() . '</div></div>';
    }
    echo $navigation;
}