<?php
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
$fields   = [];
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Tab::make( 'Icons', wp_unique_id() )->placement( 'left' );
$fields[] = Repeater::make( 'Add Icons', 'icons' )->instructions( 'Add custom icons with title and description' )->fields( [
    Image::make( 'Image', 'i' )->instructions( 'Add Icon image' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' )->required()->mimeTypes( ['jpg', 'jpeg', 'png'] ),
    Text::make( 'Icon title', 't' ),
    Textarea::make( 'Icon description', 'd' )->rows( 2 )
] )->collapsed( '' )->buttonLabel( 'Add icons' )->layout( 'table' );
$fields = array_merge( $fields, \London\Acf::ButtonAcfFields( 'a', true ) );
\Kickstarter\MyAcf::registerComponentFields( 'Icons', $fields );