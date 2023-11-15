<?php
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Url;
use Kickstarter\MySeo;
add_filter( '_ks_seo_post_fields', function ( $fields, $helpers, $mySeo ) {

    if (  !  MySeo::isActiveAdvancedSeo() ) {
        return $fields;
    }

    $fields[]                            = Tab::make( 'Advanced', wp_unique_id() )->placement( 'left' );
    $fields['ks_seo_page_robots_index']  = Select::make( 'Robots index', 'ks_seo_page_robots_index' )->instructions( "The \"Robots Index\" directive tells search engines whether they should index the page or not. If set to \"noindex,\" the page won't appear in search engine results." )->choices( ['yes' => 'Ask robots to SHOW THIS PAGE in search results', 'no' => 'Ask robots to HIDE THIS PAGE in search results'] )->defaultValue( 'yes' )->required();
    $fields['ks_seo_page_robots_follow'] = Select::make( 'Robots follow', 'ks_seo_page_robots_follow' )->instructions( "The \"Robots Follow\" directive instructs search engines whether to follow the links on the page. A \"nofollow\" directive means the search engine won't follow the links for ranking purposes." )->choices( ['yes' => 'Ask robots to FOLLOW links on this page', 'no' => 'Ask robots to NOT FOLLOW links on this page'] )->defaultValue( 'yes' )->required();
    $fields['ks_seo_page_canonical']     = Url::make( 'Canonical URL', 'ks_seo_page_canonical' )->instructions( "The canonical URL is a way to tell search engines that a specific URL represents the master copy of a page. This helps to prevent duplicate content issues in search engine rankings." );
    return $fields;

}, 100, 3 );