<?php
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Repeater;
$fields = [];

$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Repeater::make( 'Add Brands', 'brands' )->instructions( 'Add brands logos and links to the pages' )->fields( [
    Image::make( 'Logo', 'logo' )->instructions( 'Add brand logo' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' ),
    Link::make( 'Link', 'link' )->instructions( 'Link to the brand page' )->returnFormat( 'array' )->required()
] )->collapsed( 'logo' )->buttonLabel( 'Add Row' )->layout( 'table' );
\Kickstarter\MyAcf::registerComponentFields( 'Brands ', $fields );