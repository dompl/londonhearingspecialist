<?php
/*  ********************************************************
 *   Global Theme Variables
 *  ********************************************************
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/* Determinate if you are using blocks  */
define( 'USE_BLOCKS', false );

/* Set your own user ID to display various items on the website - This should be admin */
 !  defined( 'MY_ADMIN_ID' ) ?: define( 'MY_ADMIN_ID', 1 );
define( 'KS_ADMIN_SETTINGS_PAGE', 'admin-options' );

/** Disable post tags */
define( 'KS_DISABLE_POST_TAG', true );
/** Remove post comments */
define( 'KS_DISABLE_POST_COMMENTS', true );

/** Set up default theme width */
define( 'KS_THEME_WIDTH', 1440 );

/* Theme Version. Do not change here. */
define( 'THEME_VERSION', '1.0.0' );

/* Set jQuery version for the theme. */
define( 'VERSION_JQUERY', '3.5.1' );
/** Remove and add jquery with async */
define( 'JQUERY_REPLACE', true );

/** Remove comments from wordpress */
define( 'REMOVE_COMMENTS', true );

/* Define WordPress translation variable. This domain is being set in gulpconfig.js */
define( 'TEXT_DOMAIN', 'gulpfile' );

/** Set environmental variable */
define( 'WP_ENVIRONMENT_TYPE', 'development' );

/* Cache buster */
if ( wp_get_environment_type() == 'development' || wp_get_environment_type() == 'staging' ) {

    define( 'CACHE_BUSTER', time() );

} else {

    define( 'CACHE_BUSTER', get_transient( 'ks_theme_cache_buster' ) ? get_transient( 'ks_theme_cache_buster' ) : set_transient( 'ks_theme_cache_buster', time(), 7 * DAY_IN_SECONDS ) );

}