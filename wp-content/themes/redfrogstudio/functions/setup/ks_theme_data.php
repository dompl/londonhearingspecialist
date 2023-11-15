<?php
/**
 * Get theme data stored in the 'ks_theme_data' transient. If the transient does not exist,
 * it gets created using data from Advanced Custom Fields 'option'.
 *
 * @param string|null $key The specific option to retrieve from the transient. If not provided, all data is returned.
 * @return mixed The specific option value if $key is provided and exists, else all data, or null on failure.
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Kickstarter\MyHelpers;

function ks_theme_data( ?string $key = null ) {
    $helpers = MyHelpers::getInstance();
    return MyHelpers::getThemeData( $key );
}