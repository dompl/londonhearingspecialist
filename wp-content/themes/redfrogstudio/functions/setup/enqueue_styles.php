<?php
/*  ********************************************************
 *   Enqueue necessary scripts
 *  ********************************************************
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
/**
 * @return mixed
 */
use Kickstarter\MyHelpers;
function ks_add_theme_styles() {

    $helpers = MyHelpers::getInstance();

    $styles = array();
    $theme = wp_get_theme();
    $stylesheet = $theme->get_stylesheet();
    /* Main style.css file */
    $styles['main'] = array(
        'handle' => 'css-main',
        'file' => 'style.css',
        'deps' => array(),
        'media' => 'screen'
    );

    /* Main style.css file */
    if ( $stylesheet == 'kickstarter/build' ) {
        $styles['build'] = array(
            'handle' => 'css-build',
            'file' => 'build.css',
            'deps' => array(),
            'media' => 'screen'
        );
    }
    $styles['custom'] = array(
        'handle' => 'css-' . str_replace( '.css', '', MyHelpers::CustomCssFileName() ),
        'file' => MyHelpers::CustomCssFileName(),
        'deps' => array(),
        'media' => 'screen'
    );

    $styles['admin'] = array(
        'handle' => 'css-admin',
        'file' => 'admin.css',
        'deps' => array(),
        'media' => 'screen',
        'admin' => true
    );

    $styles = apply_filters( '_ks_register_additional_stylesheets', $styles );
    return $styles;

}

/**
 * enqueue all css styles
 * @return null
 */

function ks_enqueue_theme_styles( $is_admin = false ) {

    $styles = ks_add_theme_styles();

    if ( empty( $styles ) ) {
        return;
    }

    foreach ( $styles as $key => $style ) {

        $should_enqueue = $is_admin ? isset( $style['admin'] ) :  !  isset( $style['admin'] );

        if ( $should_enqueue ) {

            if ( file_exists( get_template_directory() . '/' . $style['file'] ) ) {

                $cache = in_array( $_SERVER['SERVER_ADDR'], ['127.0.0.1'] ) ? time() : null;
                $version = wp_get_theme()->get( 'Version' ) . ( $cache ? '.' . $cache : '' );
                $file = $style['file'] . '?v=' . wp_get_theme()->get( 'Version' ) . ( $cache ? '&cache=' . $cache : '' );

                wp_enqueue_style( $style['handle'], get_template_directory_uri() . '/' . $file . '#asyncload', $style['deps'], $version, $style['media'] );

                if ( apply_filters( $key . '_add_styles', null ) ) {

                    wp_add_inline_style( $style['handle'], apply_filters( $key . '_add_styles', null ) );

                }

            }

        }
    }
}

add_action( 'wp_enqueue_scripts', function () {
    ks_enqueue_theme_styles( false );
}, 10 );

add_action( 'admin_enqueue_scripts', function () {
    ks_enqueue_theme_styles( true );
}, 10 );