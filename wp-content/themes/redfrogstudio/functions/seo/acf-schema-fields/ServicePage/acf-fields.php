<?php
use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Kickstarter\MySeo;

add_filter( '_ks_seo_post_fields', function ( $fields, $helpers, $mySeo ) {

    if (  !  MySeo::isActiveAdvancedSeo() ) {
        return $fields;
    }
    // Define conditional logic for ServicePage
    $servicePageConditionalLogic = [ConditionalLogic::where( 'ks_seo_schema_post_type', '==', 'ServicePage' )];

    $fields[] = Tab::make( 'Schema for Service', wp_unique_id() )
        ->conditionalLogic( $servicePageConditionalLogic )
        ->placement( 'top' );
    // Services fields here:
    $fields['ks_seo_ServicePage_name'] = Text::make( 'Service Name', 'ks_seo_ServicePage_name' )
        ->conditionalLogic( $servicePageConditionalLogic )
        ->instructions( 'Name of the service.' );

    $fields['ks_seo_ServicePage_description'] = Textarea::make( 'Service Description', 'ks_seo_ServicePage_description' )
        ->conditionalLogic( $servicePageConditionalLogic )
        ->instructions( 'Description of the service.' );

    $fields['ks_seo_ServicePage_type'] = Text::make( 'Service Type', 'ks_seo_ServicePage_type' )
        ->conditionalLogic( $servicePageConditionalLogic )
        ->instructions( 'Type of service offered.' );

    $fields['ks_seo_ServicePage_provider_name'] = Text::make( 'Provider Name', 'ks_seo_ServicePage_provider_name' )
        ->conditionalLogic( $servicePageConditionalLogic )
        ->instructions( 'Name of the service provider.' );

    $fields['ks_seo_ServicePage_area_served'] = Text::make( 'Area Served', 'ks_seo_ServicePage_area_served' )
        ->conditionalLogic( $servicePageConditionalLogic )
        ->instructions( 'Geographic area where the service is provided.' );

    // Add more fields as needed
    return $fields;
}, 200, 3 );