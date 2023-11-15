<?php

namespace Kickstarter;
use Kickstarter\MyHelpers;

class TransientDataDeleter {
    /**
     * @var mixed
     */
    private static $instance = null;

    public function __construct() {
        self::DeleteTransientData();
    }

    public static function getInstance() {
        if ( self::$instance === null ) {
            self::$instance = new TransientDataDeleter();
        }
        return self::$instance;
    }

    /**
     * @return null
     */
    public static function DeleteTransientData() {
        if (  !  is_admin() ) {
            return;
        }

        $pages_transients = apply_filters( '_ks_delete_page_transient_data', [] );

        if (  !  empty( $pages_transients ) ) {
            add_action( 'save_post', function ( $post_id ) use ( $pages_transients ) {
                self::deletePageTransients( $post_id, $pages_transients );
            } );
        }
        $post_types = apply_filters( '_ks_acf_layout_locations', [] );

        $transients = [
            ['admin-options' => 'ks_404_page'],
            ['admin-options' => 'ks_website_footer'],
            ['admin-options' => 'ks_theme_data']
        ];

        $transients = apply_filters( '_ks_acf_transients_delete', $transients );

        add_action( 'acf/save_post', function ( $post_id ) use ( $transients ) {
            self::deleteTransients( $post_id, $transients );
        } );
    }

    /**
     * @param $post_id
     * @param $pages_transients
     * @return null
     */
    private static function deletePageTransients( $post_id, $pages_transients ) {
        if ( slef::shouldSkipPost( $post_id ) ) {
            return;
        }

        foreach ( $pages_transients as $transient ) {
            delete_transient( $transient );
        }
    }

    /**
     * @param $post_id
     * @param $transients
     * @return null
     */
    private static function deleteTransients( $post_id, $transients ) {
        if ( self::shouldSkipPost( $post_id ) ) {
            return;
        }

        global $current_screen;

        if ( is_array( $transients ) || is_object( $transients ) ) {
            foreach ( $transients as $screen => $transient_to_delete ) {
                if ( is_array( $transient_to_delete ) ) {
                    foreach ( $transient_to_delete as $array_screen => $in_array_transient_to_delete ) {
                        if ( strpos( $current_screen->id, $array_screen ) !== false ) {
                            delete_transient( $in_array_transient_to_delete );
                        }
                    }
                } else {
                    if ( strpos( $current_screen->id, $screen ) !== false ) {
                        delete_transient( $transient_to_delete );
                    }
                }
            }
            MyHelpers::getThemeData();
        } else {
            error_log( '$transient is not an array or object, it is a: ' . gettype( $transients ) );
        }

    }

    /**
     * @param $post_id
     */
    private static function shouldSkipPost( $post_id ) {
        return ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) || wp_is_post_revision( $post_id );
    }

}