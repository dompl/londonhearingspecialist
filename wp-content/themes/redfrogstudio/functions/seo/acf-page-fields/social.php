<?php
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Kickstarter\MySeo;
add_filter( '_ks_seo_post_fields', function ( $fields, $helpers, $mySeo ) {

    if (  !  MySeo::isActiveAdvancedSeo() ) {
        return $fields;
    }

    $fields[]                       = Tab::make( 'Social', wp_unique_id() )->placement( 'left' );
    $fields[]                       = Accordion::make( 'Facebook' );
    $fields['ks_seo_f_image']       = Image::make( 'Facebook image', 'ks_seo_f_image' )->instructions( "The Facebook recommended image size for sharing images and sharing links with an image is 1,200 x 630 pixels. Whether you're sharing landscape, portrait, or square images, Facebook will resize it to 500 pixels wide and scale the height accordingly" )->returnFormat( 'id' )->previewSize( 'medium' );
    $fields['ks_seo_f_title']       = Text::make( 'Facebook title', 'ks_seo_f_title' )->instructions( '' );
    $fields['ks_seo_f_description'] = Textarea::make( 'Facebook title', 'ks_seo_f_description' )->instructions( '' );
    $fields[]                       = Accordion::make( 'Twitter' );
    $fields['ks_seo_t_image']       = Image::make( 'Twitter image', 'ks_seo_t_image' )->instructions( "URL of image to use in the card. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported." )->returnFormat( 'id' )->previewSize( 'medium' );
    $fields['ks_seo_t_title']       = Text::make( 'Twitter title', 'ks_seo_t_title' )->instructions( 'Title of content (max 70 characters)' );
    $fields['ks_seo_t_description'] = Text::make( 'Twitter title', 'ks_seo_t_description' )->instructions( 'Description of content (maximum 200 characters)' );
    $fields[]                       = Accordion::make( 'Endpoint' )->endpoint();
    //  $fields[] = Select::make( 'Robots follow', 'ks_seo_page_robots_follow' )->instructions( "The \"Robots Follow\" directive instructs search engines whether to follow the links on the page. A \"nofollow\" directive means the search engine won't follow the links for ranking purposes." )->choices( ['yes' => 'Ask robots to FOLLOW links on this page', 'no' => 'Ask robots to NOT FOLLOW links on this page'] )->defaultValue( 'yes' )->required();
    //  $fields[] = Url::make( 'Canonical URL', 'ks_seo_page_canonical' )->instructions( "The canonical URL is a way to tell search engines that a specific URL represents the master copy of a page. This helps to prevent duplicate content issues in search engine rankings." );
    return $fields;

}, 50, 3 );