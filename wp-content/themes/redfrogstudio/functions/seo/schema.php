<?php

/*
 * Additional Schema Fields for Organization
 *
 * - founder: Information about the founder of the organization.
 * - foundingDate: The date the organization was founded.
 * - numberOfEmployees: The number of employees in the organization.
 * - member: Information about members of the organization.
 * - slogan: A slogan or motto associated with the item.
 * - award: Awards won by this organization.
 * - taxID: The Tax / Fiscal ID of the organization or person.
 * - vatID: The Value-added Tax ID of the organization.
 * - areaServed: The geographic area where a service or item is provided.
 * - parentOrganization: The larger organization that this organization is a subOrganization of, if any.
 * - subOrganization: Sub-organizations if the organization is a parent.
 * - hasOfferCatalog: An offer catalog of products or services offered by the organization.
 * - brand: The brand(s) associated with the organization, or owned by an organization, including sub-brands.
 * - contactPoint: A contact point for a person or organization.
 * - isicV4: The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 * - legalName: The official name of the organization, if it's different from the common or public name used (name field).
 * - location: Physical location(s) of the organization.
 * - foundingLocation: The place where the Organization was founded.
 * - duns: The Dun & Bradstreet D-U-N-S number for identifying an organization or business person.
 * - naics: The North American Industry Classification System (NAICS) code for a particular organization or business person.
 * - leiCode: An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
 * - globalLocationNumber: The Global Location Number (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place.
 *
 * Note: You don't have to use all of these; you can pick and choose based on what makes sense for your organization and what information you actually have.
 */

use Kickstarter\MyHelpers;
use Kickstarter\MySeo;
/**
 * @return null
 */
add_action( 'wp_head', function () {

    if (  !  MySeo::isActiveAdvancedSeo() ) {
        return;
    }
    // Initialize the schema array
    $helpers    = MyHelpers::getInstance();
    $acf_fields = (array) get_seo_acf_fields();

    if ( empty( $acf_fields ) || !  isset( $acf_fields['website_url'] ) ) {
        return;
    }

    $schema = [
        "@context" => "https://schema.org",
        "@type"    => "Organization"
    ];

    $fields['url'] = str_replace( '.test', '.co.uk', $acf_fields['website_url'] );

    $schema_keys = [
        'name',
        'alternateName',
        'description',
        'email',
        'telephone',
        'faxNumber',
        'currenciesAccepted',
        'paymentAccepted',
        'publishingPrinciples',
        'ownershipFundingInfo',
        'slogan'

    ];

    foreach ( $schema_keys as $key ) {
        if (  !  empty( $acf_fields[$key] ) ) {
            $fields[$key] = $acf_fields[$key];
        }
    }

    if (  !  empty( $acf_fields['knowsLanguage'] ) && function_exists( 'ks_seo_language_choices' ) ) {
        $fields['knowsLanguage'] = ks_seo_language_choices( $acf_fields['knowsLanguage'] );
    }

    if (  !  empty( $acf_fields['openingHours'] ) ) {
        $fields['openingHours'] = $acf_fields['openingHours'];
        if (  !  empty( $acf_fields['closingHours'] ) ) {
            $fields['openingHours'] .= ' - ';
            $fields['openingHours'] .= $acf_fields['closingHours'];
        }
    }

    $address_keys = [
        'streetAddress',
        'addressLocality',
        'addressRegion',
        'postalCode',
        'addressCountry'
    ];
    $address_values = [];
    foreach ( $address_keys as $key ) {
        if (  !  empty( $acf_fields[$key] ) ) {
            $address_values[$key] = $acf_fields[$key];
        }
    }
    if (  !  empty( array_filter( $address_values ) ) ) {
        $fields['address'] = $address_values;
    }

    if (  !  empty( $acf_fields['logo_url'] ) ) {
        $logo_id = $acf_fields['logo_url'];
        if ( $logo_id ) {
            $logo_url   = MyHelpers::WPImage( $logo_id, 300 );
            $image_info = getimagesize( MyHelpers::UrlToPath( $logo_url ) );

            $imageObject = [
                "@type"  => "ImageObject",
                "url"    => str_replace( '.test', '.co.uk', $logo_url ),
                "width"  => $image_info[0],
                "height" => $image_info[1]
            ];

            $fields['logo']  = $imageObject;
            $fields['image'] = $imageObject;
        }

        // Add logo and image fields
        $logo_id = $acf_fields['logo_url'];
        if ( $logo_id ) {
            $logo_url   = MyHelpers::WPImage( $logo_id, 300 );
            $image_info = getimagesize( MyHelpers::UrlToPath( $logo_url ) );

            $imageObject = [
                "@type"  => "ImageObject",
                "url"    => str_replace( '.test', '.co.uk', $logo_url ),
                "width"  => $image_info[0],
                "height" => $image_info[1]
            ];

            $fields['logo']  = $imageObject;
            $fields['image'] = $imageObject;
        }
    }

    // Merge the populated fields into the main schema
    $schema = array_merge( apply_filters( '_ks_seo_json_schema', [] ), array_filter( $fields ) );
    if (  !  empty( $schema ) ) {
        echo '<script type="application/ld+json">' . json_encode( $schema ) . '</script>' . "\n";
    }
}, 20 );

// Hook the function to an appropriate action, like 'wp_head'