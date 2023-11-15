<?php

// Add Schema

add_filter( '_ks_seo_json_schema', function ( $schema ) {

    if ( is_singular() ) {

        $post_id = get_the_ID();

        $schema_meta = get_post_meta( $post_id, '_ks_seo_post_metadata_', true );

        if ( isset( $schema_meta['ks_seo_schema_post_type'] ) && $schema_meta['ks_seo_schema_post_type'] == 'ServicePage' ) {

            $filtered_schema_meta = array_filter(
                $schema_meta,
                function ( $key ) {
                    return strpos( $key, 'ServicePage' ) !== false;
                },
                ARRAY_FILTER_USE_KEY
            );

            // Create the service schema
            $service_schema = [
                '@type'       => 'Service',
                'name'        => $filtered_schema_meta['ks_seo_ServicePage_name'] ?? null,
                'description' => $filtered_schema_meta['ks_seo_ServicePage_description'] ?? null
            ];

            // Additional fields
            if ( $filtered_schema_meta['ks_seo_ServicePage_type'] ) {
                $service_schema['serviceType'] = $filtered_schema_meta['ks_seo_ServicePage_type'];
            }
            if ( $filtered_schema_meta['ks_seo_ServicePage_provider_name'] ) {
                $service_schema['provider'] = [
                    '@type' => 'Organization',
                    'name'  => $filtered_schema_meta['ks_seo_ServicePage_provider_name']
                ];
            }
            if ( $filtered_schema_meta['ks_seo_ServicePage_area_served'] ) {
                $service_schema['areaServed'] = $filtered_schema_meta['ks_seo_ServicePage_area_served'];
            }

            // Remove null values
            $service_schema = array_filter( $service_schema, function ( $value ) {
                return $value !== null;
            } );

            // Initialize makesOffer as an array if it's not already one
            if (  !  isset( $schema['makesOffer'] ) || !  is_array( $schema['makesOffer'] ) ) {
                $schema['makesOffer'] = [];
            }

            $offer_schema = [
                '@type'       => 'Offer',
                'itemOffered' => $service_schema
            ];

            // Initialize makesOffer as an array if it's not already one
            if (  !  isset( $schema['makesOffer'] ) || !  is_array( $schema['makesOffer'] ) ) {
                $schema['makesOffer'] = [];
            }

            // Append the new offer schema to the makesOffer array
            $schema['makesOffer'][] = $offer_schema;

        }
    }

    return $schema;

}, 20 );