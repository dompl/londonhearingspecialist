<?php

use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;

$fields   = [];
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Tab::make( 'Steps', wp_unique_id() )->placement( 'left' );
$fields[] = Repeater::make( 'Add process steps', 'stepsa' )->instructions( 'Add title and descriptio for each process step' )->fields(
    [
        Image::make( 'Image', 'i' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' )->required()->mimeTypes( ['jpg', 'jpeg', 'png'] ),
        Text::make( 'Title', 't' )->required(),
        Textarea::make( 'Description', 'd' )->required()->rows( 2 )
    ]
)->collapsed( 'title' )->buttonLabel( 'Add Process Step' )->layout( 'table' );
$fields = array_merge( $fields, \London\Acf::ButtonAcfFields( 's', true ) );
\Kickstarter\MyAcf::registerComponentFields( 'Process Steps ', $fields );