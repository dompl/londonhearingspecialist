<?php
namespace Kickstarter;
use Walker_Page_Schema_Child_Navigation;
trait MyNavigation {

    /**
     * Get child pages for a given WordPress page and outputs or returns an HTML list.
     *
     * @param int|bool  $current_page_id   The ID of the current page. Default is false.
     * @param bool      $show_on_children  If true, shows siblings when on a child page.
     * @param bool      $echo              Whether to echo the HTML list of child pages or return it.
     *
     * @return string|null Returns the HTML list of child pages if $echo is false. Otherwise, returns null.
     */
    public static function getChildPagesOf( $current_page_id = false, bool $show_on_children = false, bool $echo = true ) {

        // Type validation for $current_page_id
        if ( $current_page_id == false ) {
            error_log( 'Invalid type for $current_page_id. Expected integer or false.', E_USER_WARNING );
            return null;
        }

        // If $current_page_id is not provided, use the global $post object to get the current page ID.
        if ( $current_page_id === false ) {
            global $post;
            $current_page_id = $post->ID;
        }
        $current_page_id = (int) $current_page_id;

        // Determine which page ID to use based on $show_on_children.
        $post_id = $show_on_children ? wp_get_post_parent_id( $current_page_id ) : $current_page_id;

        // If $show_on_children is true but the current page has no parent, use the current page ID.
        if ( $show_on_children && !  $post_id ) {
            $post_id = $current_page_id;
        }

        // Query to check if the page has child pages.
        $children = get_pages( array( 'child_of' => $post_id ) );

        if ( $children === false ) {
            error_log( 'Failed to retrieve child pages.', E_USER_WARNING );
            return null;
        }

        // If the page has children, create the navigation.
        if ( count( $children ) != 0 ) {

            // Begin the list and add Schema.org markup for SEO.
            $output = '<ul itemscope itemtype="https://schema.org/SiteNavigationElement">';

            // Generate the list of child pages.
            $output .= wp_list_pages( array(
                'title_li' => '',
                'child_of' => $post_id,
                'echo' => 0,
                'link_before' => '<span itemprop="name">',
                'link_after' => '</span>',
                'walker' => new Walker_Page_Schema_Child_Navigation()
            ) );

            $output .= '</ul>';

            // Output or return the list depending on the $echo parameter.
            if ( $echo === true ) {
                echo $output;
            } else {
                return $output;
            }
        } else {
            // If the page has no children, apply a filter to allow for customization.
            $filter = apply_filters( '_ks_list_child_pages', null );

            if ( $filter === false ) {
                error_log( 'Filter application failed.', E_USER_WARNING );
                return null;
            }

            // Output or return the filter result based on the $echo parameter.
            if ( $echo === true ) {
                echo $filter;
            } else {
                return $filter;
            }
        }
    }

}