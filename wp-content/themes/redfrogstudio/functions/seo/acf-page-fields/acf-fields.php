<?php

use Extended\ACF\Location;
use Kickstarter\MyHelpers;
use Kickstarter\MySeo;
add_action( 'acf/init', function () {

    $helpers = MyHelpers::getInstance();
    $mySeo   = MySeo::getInstance();
    if (  !  MySeo::isActiveSeo() ) {
        return;
    }
    // Initialize an empty array to hold location data
    $fields    = apply_filters( '_ks_seo_post_fields', [], $helpers, $mySeo );
    $locations = apply_filters( '_ks_seo_post_types', ['page', 'post'], $helpers, $mySeo );

    if ( empty( $fields ) || empty( $locations ) ) {
        return;
    }
    $location_data = [];

    // Loop through each location and add it to the location data array
    foreach ( $locations as $location ) {
        $location_data[] = Location::where( 'post_type', $location );
    }
    register_extended_field_group( [
        'title'    => 'SEO',
        'style'    => 'default',
        'fields'   => $fields,
        'location' => $location_data
    ] );
} );