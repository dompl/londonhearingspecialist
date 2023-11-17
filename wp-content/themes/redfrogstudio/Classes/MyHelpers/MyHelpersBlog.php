<?php
namespace Kickstarter;

trait TraitMyHelpersBlog {

    /**
     * Remove Posts functionality from WordPress.
     *
     * This trait provides methods to conditionally remove Posts functionality
     * based on the theme's configuration. It handles the removal of the Posts
     * menu item, disables access to the Posts admin page, and unregisters the
     * 'post' post type.
     */

    /**
     * Initialize the functionality to conditionally remove posts.
     * Call this method from the constructor or init hook of your class.
     */
    public static function initPostSettings() {
        // Check if we should use Posts functionality or not
        $use_posts = self::getThemeData( 'ks_show_blog' );

        if (  !  $use_posts ) {
            add_action( 'admin_menu', [__CLASS__, 'removePostsMenu'] );
            add_action( 'init', [__CLASS__, 'removePostsCapabilities'] );
            add_action( 'admin_init', [__CLASS__, 'disablePostsPage'] );
        }
    }

    /**
     * Remove the Posts menu item from the admin menu.
     */
    public static function removePostsMenu() {
        // Remove Posts from admin menu
        remove_menu_page( 'edit.php' );
    }

    /**
     * Disable access to the 'Posts' screen and redirect to the dashboard.
     */
    public static function disablePostsPage() {
        global $pagenow;

        if ( $pagenow === 'edit.php' && (  !  isset( $_GET['post_type'] ) || $_GET['post_type'] == 'post' ) ) {
            wp_redirect( admin_url() );
            exit;
        }
    }

    /**
     * Unregister the post type, to disable it completely.
     */
    public static function removePostsCapabilities() {
        // Unregister the post post type
        unregister_post_type( 'post' );
    }

}