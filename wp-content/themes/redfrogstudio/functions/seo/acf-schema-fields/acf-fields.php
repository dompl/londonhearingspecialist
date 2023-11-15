<?php

use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Kickstarter\MySeo;

add_filter( '_ks_seo_post_fields', function ( $fields, $helpers, $mySeo ) {

    if (  !  MySeo::isActiveAdvancedSeo() ) {
        return $fields;
    }

    $fields[]                             = Tab::make( 'Schema', wp_unique_id() )->placement( 'top' );
    $data_types                           = ks_seo_schema_data_types();
    $fields['ks_seo_schema_post_type']    = Select::make( 'Page type', 'ks_seo_schema_post_type' )->instructions( '' )->choices( $data_types['page_type'] )->defaultValue( 0 )->stylisedUi();
    $fields['ks_seo_schema_article_type'] = Select::make( 'Article type', 'ks_seo_schema_article_type' )->instructions( '' )->choices( $data_types['article_type'] )->defaultValue( 0 )->stylisedUi();

    //  $fields[] = Text::make( 'Meta Title', 'ks_seo_page_meta_title' )->instructions( "The meta title is the title of a web page as displayed in search engine results. It's an important element for SEO and should accurately represent the page's content." );
    //  $fields[] = Textarea::make( 'Meta description', 'ks_seo_page_meta_description' )->newLines( 'br' )->instructions( "The meta description is a brief summary of the content on a web page. It appears under the title link in search engine results and helps users decide whether to click through to the page." )->rows( 3 )->required();

    return $fields;
}, 200, 3 );

/**
 * @param $type
 * @return mixed
 */
function ks_seo_schema_data_types( $type = 'page_type' ) {

    $data = [];

    $data['page_type'] = [
        0             => "None",
        //   "WebPage"     => "Web Page (Default)",
        //   "ItemPage"          => "Item Page",
        //   "AboutPage"         => "About Page",
        //   "FAQPage"           => "FAQ Page",
        //   "QAPage"            => "QA Page",
        //   "ProfilePage"       => "Profile Page",
        //   "ContactPage"       => "Contact Page",
        //   "MedicalWebPage"    => "Medical Web Page",
        //   "CollectionPage"    => "Collection Page",
        //   "CheckoutPage"      => "Checkout Page",
        //   "RealEstateListing" => "Real Estate Listing",
        //   "SearchResultsPage" => "Search Results Page",
        "ServicePage" => "Service Page"
        //   "LoginPage"         => "Login Page",
        //   "TermsPage"         => "Terms Page"
    ];

    $data['article_type'] = [
        0 => "None"
        //   "Article"                  => "Article",
        //   "BlogPosting"              => "Blog Post",
        //   "SocialMediaPosting"       => "Social Media Posting",
        //   "NewsArticle"              => "News Article",
        //   "AdvertiserContentArticle" => "Advertiser Content Article",
        //   "SatiricalArticle"         => "Satirical Article",
        //   "ScholarlyArticle"         => "Scholarly Article",
        //   "TechArticle"              => "Tech Article",
        //   "Report"                   => "Report",
        //   "OpinionNewsArticle"       => "Opinion News Article",
        //   "AnalysisNewsArticle"      => "Analysis News Article",
        //   "BackgroundNewsArticle"    => "Background News Article"
    ];

    return $data;

}