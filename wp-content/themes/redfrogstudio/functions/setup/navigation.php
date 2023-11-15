<?php
/**
 * Custom Navigation and Menu Functions for WordPress Theme
 *
 * This file contains functions and classes for handling custom navigation and menus
 * in the WordPress theme.
 */
use Kickstarter\MyHelpers;

/**
 * Header Navigation Callback Function.
 * Generates the header navigation menu.
 *
 * @param bool $echo Whether to echo the menu or return it.
 * @return void|string
 */
function ks_header_navigation_callback( $echo = true ) {

    $helpers = MyHelpers::getInstance();
    $navData = MyHelpers::getThemeData( 'ks_nav' );

    $navigation_settings = [
        'position' => $navData['position'] ?? 'left',
        'submenuIndicator' => false,
        'toggle' => isset( $navData['t'] ) ? '<i class="icon-' . $navData['t'] . '"></i>' : false,
        'settings' => [
            'mobileBreakpoint' => $navData['bp'] ?? 400,
            'showDuration' => $navData['s'] ?? 100,
            'hideDuration' => $navData['h'] ?? 100,
            'hideDelayDuration' => $navData['hd'] ?? 100
        ]
    ];

    $args = [
        'theme_location' => 'header',
        'menu_id' => 'menu-header',
        'menu_class' => 'nav-menu align-to-' . $navigation_settings['position'],
        'container_class' => 'nav-menus-wrapper',
        'echo' => false,
        'nav_id' => 'navigation',
        'walker' => new Custom_Walker_Nav_Menu()
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

add_action( 'ks_after_body', 'ks_header_navigation_init', 10, 1 );

function ks_header_navigation_init() {
    ks_header_navigation_callback( true ); // Call the function with $echo set to true
}
/**
 * Registers a navigation menu location for a theme.
 * @return mixed
 */
add_action( 'init', function () {

    $menus = apply_filters( '_ks_theme_navigation', ['header' => 'Header menu'] );

    if (  !  empty( $menus ) && is_array( $menus ) ) {

        foreach ( $menus as $id => $menu ) {

            if ( is_string( $menu ) ) {

                register_nav_menu( $id, esc_html__( $menu, TEXT_DOMAIN ) );

            }

        }

    }
}, 999 );
/**
 * Custom Walker Class for Navigation Menu
 *
 * This class extends the Walker_Nav_Menu class to provide custom rendering of
 * WordPress navigation menus.
 */
class Custom_Walker_Nav_Menu extends Walker_Nav_Menu {

    /**
     * Starts the list before the elements are added.
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param int    $depth  Depth of menu item.
     * @param array  $args   An array of arguments.
     */
    function start_lvl( &$output, $depth = 0, $args = null ) {
        $indent = str_repeat( "\t", $depth );
        $output .= "\n$indent<ul class=\"nav-dropdown\">\n";
    }

    /**
     * Traverse elements to create list from elements.
     *
     * @param object $element           Data object.
     * @param array  $children_elements List of elements to continue traversing.
     * @param int    $max_depth         Max depth to traverse.
     * @param int    $depth             Depth of current element.
     * @param array  $args              An array of arguments.
     * @param string $output            Passed by reference. Used to append additional content.
     */
    public function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {
        // Check if this item has children and set a custom property to indicate it.
        $element->has_children =  !  empty( $children_elements[$element->ID] );

        parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
    }

    /**
     * Starts the element output.
     *
     * @param string $output Passed by reference. Used to append additional content.
     * @param object $item   Menu item data object.
     * @param int    $depth  Depth of menu item.
     * @param array  $args   An array of arguments.
     * @param int    $id     Current item ID.
     */
    function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {

        $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

        $item_classes = empty( $item->classes ) ? array() : (array) $item->classes;
        $filtered_classes = array_filter( $item_classes, function ( $value ) {
            return ( str_replace( ['menu-', 'page_', 'page-'], '', $value ) != $value ) ? false : true;
        } );

        $classes = $filtered_classes;

        // Add 'active' class if item is current item
        if ( $item->current ) {
            $classes[] = 'active';
        }

        // Add 'active-parent' class if item is a parent of the current item
        if ( $item->current_item_parent ) {
            $classes[] = 'active-parent';
        }

        $class_names = join( ' ', apply_filters( '_ks_nav_menu_css_class', array_filter( $classes ), $item, $args ) );
        $class_names = $class_names ? ' class="' . esc_attr( $class_names ) . '"' : '';

        $output .= $indent . '<li' . $class_names . '>';

        $atts = array();
        $atts['title'] =  !  empty( $item->attr_title ) ? $item->attr_title : '';
        $atts['target'] =  !  empty( $item->target ) ? $item->target : '';
        $atts['rel'] =  !  empty( $item->xfn ) ? $item->xfn : '';
        $atts['href'] =  !  empty( $item->url ) ? $item->url : '';

        $atts = apply_filters( 'nav_menu_link_attributes', $atts, $item, $args );

        $attributes = '';
        foreach ( $atts as $attr => $value ) {
            if (  !  empty( $value ) ) {
                $value = ( 'href' === $attr ) ? esc_url( $value ) : esc_attr( $value );
                $attributes .= ' ' . $attr . '="' . $value . '"';
            }
        }

        $title = apply_filters( 'the_title', $item->title, $item->ID );

        // Initialize item_output
        $item_output = '';

// Check if 'before' argument is set and append to item_output
        if ( is_object( $args ) && isset( $args->before ) ) {
            $before_filter = apply_filters( '_ks_custom_walker_nav_menu_before', $args->before, $classes, $item, $depth, $args, $id );
            $item_output .= $before_filter;
        }

// Append the opening anchor tag
        $anchor_attributes = apply_filters( '_ks_custom_walker_nav_a_attributes', $attributes, $classes, $item, $depth, $args, $id );
        $item_output .= "<a{$anchor_attributes}>";

// Check if 'link_before' argument is set and append to item_output
        if ( is_object( $args ) && isset( $args->link_before ) ) {
            $link_before_filter = apply_filters( '_ks_custom_walker_nav_menu_link_before', $args->link_before, $classes, $item, $depth, $args, $id );
            $item_output .= $link_before_filter;
        }

// Append the title
        $title_filter = apply_filters( '_ks_custom_walker_nav_menu_title', $title, $classes, $item, $depth, $args, $id );
        $item_output .= $title_filter;

// Check if 'link_after' argument is set and append to item_output
        if ( is_object( $args ) && isset( $args->link_after ) ) {
            $link_after_filter = apply_filters( '_ks_custom_walker_nav_menu_link_after', $args->link_after, $classes, $item, $depth, $args, $id );
            $item_output .= $link_after_filter;
        }

// Append the closing anchor tag
        $item_output .= '</a>';

// Check if 'after' argument is set and append to item_output
        if ( is_object( $args ) && isset( $args->after ) ) {
            $after_filter = apply_filters( '_ks_custom_walker_nav_menu_after', $args->after, $classes, $item, $depth, $args, $id );
            $item_output .= $after_filter;
        }

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );

    }

}
/**
 * Adds dropdown indicators to navigation menu items that have children.
 */
add_filter( '_ks_custom_walker_nav_menu_link_after', function ( $link_after, $classes, $item, $depth, $args, $id ) {
    if ( $item->has_children === true ) {
        $link_after .= '<span class="submenu-indicator"><span class="submenu-indicator-chevron"></span></span>';
    };
    return $link_after;
}, 10, 6 );

/**
 * Lists child pages for the current page or its parent.
 *
 * @param bool $echo Whether to echo the list or return it.
 * @param bool $show_on_children Whether to show the list on child pages.
 * @return void|string
 */
function ks_list_child_pages( $echo = true, $show_on_children = false ) {

    global $post;
    $current_page_id = $post->ID;

    // Get the ID of the parent page if $show_on_children is true, otherwise use the current page ID
    $post_id = $show_on_children ? wp_get_post_parent_id( $current_page_id ) : $current_page_id;

    // If $show_on_children is true but the current page has no parent, use the current page ID
    if ( $show_on_children && !  $post_id ) {
        $post_id = $current_page_id;
    }

    // Check if the page has children
    $children = get_pages( array( 'child_of' => $post_id ) );

    if ( count( $children ) != 0 ) {

        // SEO friendly navigation with Schema.org markup
        $output = '<ul itemscope itemtype="https://schema.org/SiteNavigationElement">';

        $output .= wp_list_pages( array(
            'title_li' => '',
            'child_of' => $post_id,
            'echo' => 0,
            'link_before' => '<span itemprop="name">',
            'link_after' => '</span>',
            'walker' => new Walker_Page_Schema_Child_Navigation()
        ) );

        $output .= '</ul>';

        if ( $echo == true ) {
            echo $output;
        } else {
            return $output;
        }

    } else {
        $filter = apply_filters( '_ks_list_child_pages', null );
        if ( $echo == true ) {
            echo $filter;
        } else {
            return $filter;
        }
    }
}

class Walker_Page_Schema_Child_Navigation extends Walker_Page {
    /**
     * @param $output
     * @param $page
     * @param $depth
     * @param array $args
     * @param $current_page
     */
    function start_el( &$output, $page, $depth = 0, $args = array(), $current_page = 0 ) {
        if ( $depth ) {
            $indent = str_repeat( "\t", $depth );
        } else {
            $indent = '';
        }

        extract( $args, EXTR_SKIP );
        $css_class = [];
        //   $css_class = array( 'page_item', 'page-item-' . $page->ID );

        if (  !  empty( $current_page ) ) {
            $ancestors = get_ancestors( $current_page, 'page' ); // Updated this line
            if ( in_array( $page->ID, (array) $ancestors ) ) {
                $css_class[] = 'current-ancestor';
            }

            if ( $page->ID == $current_page ) {
                $css_class[] = 'current';
            } elseif ( in_array( $page->post_parent, $ancestors ) ) {
                // Updated this line
                //  $css_class[] = 'current-parent';
            }

        } elseif ( $page->ID == get_option( 'page_for_posts' ) ) {
            // $css_class[] = 'current-parent';
        }

        $css_class = implode( ' ', apply_filters( 'page_css_class', $css_class, $page, $depth, $args, $current_page ) );

        $output .= $indent . '<li class="' . $css_class . '" itemprop="url"><a href="' . get_page_link( $page->ID ) . '" title="' . wp_strip_all_tags( $page->post_title ) . '" itemprop="url"><span itemprop="name">' . $page->post_title . '</span></a>';

    }
}

/**
 * Forcefully assign a menu to a specific menu location.
 *
 * This function checks whether a given menu is already assigned to a specified location.
 * If not, it sets the menu to that location.
 */
function force_assign_menu_to_location() {
    // Specify the location where you want to assign the menu
    $location = apply_filters( '_ks_theme_main_menu_location', 'header' );

    // Fetch existing menu locations
    $menu_locations = get_theme_mod( 'nav_menu_locations' );

    // Check if the menu is already set for the location
    // If so, exit the function to avoid unnecessary work
    if ( isset( $menu_locations[$location] ) ) {
        return;
    }

    // Specify the name of the menu you want to assign
    $menu_name = apply_filters( '_ks_theme_main_menu_name', 'Main Menu' );

    // Fetch the menu object using its name
    $menu_object = get_term_by( 'name', $menu_name, 'nav_menu' );

    // If the menu doesn't exist, exit the function
    if (  !  $menu_object ) {
        return;
    }

    // Get the ID of the menu object
    $menu_id = $menu_object->term_id;

    // Assign the menu ID to the specified location
    $menu_locations[$location] = $menu_id;

    // Update the theme mod with the new menu locations
    set_theme_mod( 'nav_menu_locations', $menu_locations );
}

// Attach the function to the 'init' action hook, so it runs after WordPress has initialized
add_action( 'init', 'force_assign_menu_to_location' );