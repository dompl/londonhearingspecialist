<?php
namespace Kickstarter;
use Kickstarter\MyHelpers;

class MySeo extends MyHelpers {

    /**
     * @var mixed
     */
    private static $instance = null;

    public static function getInstance() {
        if ( self::$instance === null ) {
            self::$instance = new MySeo();
        }
        return self::$instance;
    }

    /**
     * @return null
     */
    public static function isActiveAdvancedSeo() {

        if ( self::getThemeData( 'ks_seo_advanced_is_active' ) && self::isActiveSeo() ) {
            return true;
        }
        return;

    }

    /**
     * @return null
     */
    public static function isActiveSeo() {

        if ( self::getThemeData( 'ks_seo_is_active' ) ) {
            return true;
        }
        return;

    }

}