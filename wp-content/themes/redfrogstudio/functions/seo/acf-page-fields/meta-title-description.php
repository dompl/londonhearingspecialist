<?php

use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Kickstarter\MySeo;

add_filter( '_ks_seo_post_fields', function ( $fields, $helpers, $mySeo ) {

    if (  !  MySeo::isActiveSeo() ) {
        return;
    }

    $fields[] = Tab::make( 'Meta Title & Description', wp_unique_id() )->placement( 'top' );

    $fields['ks_seo_page_meta_title']       = Text::make( 'Meta Title', 'ks_seo_page_meta_title' )->instructions( "The meta title is the title of a web page as displayed in search engine results. It's an important element for SEO and should accurately represent the page's content." )->defaultValue( '%title% %separator% %website_name%' );
    $fields['ks_seo_page_meta_description'] = Textarea::make( 'Meta description', 'ks_seo_page_meta_description' )->newLines( 'br' )->instructions( "The meta description is a brief summary of the content on a web page. It appears under the title link in search engine results and helps users decide whether to click through to the page." )->rows( 3 )->required()->defaultValue( '%website_description%' );

    return $fields;
}, 10, 3 );