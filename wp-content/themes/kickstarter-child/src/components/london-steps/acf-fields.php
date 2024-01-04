<?php

use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;

$fields   = [];
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Tab::make( 'Steps', wp_unique_id() )->placement( 'left' );
$fields[] = Select::make( 'Steps Type', 'type' )->instructions( 'Select steps type' )->choices( ['numeric' => 'Numeric', 'icons' => 'Steps with icons'] )->defaultValue( 'icons' )->stylisedUi()->required();
$fields[] = Repeater::make( 'Add process steps', 'stepsa' )->instructions( 'Add title and description for each process step' )->fields(
    [
        Image::make( 'Image', 'i' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' )->required()->mimeTypes( ['jpg', 'jpeg', 'png'] )->conditionalLogic( [ConditionalLogic::where( 'type', '==', 'icons' )] ),
        Text::make( 'Title', 't' )->required(),
        Textarea::make( 'Description', 'd' )->rows( 2 )
    ]
)->collapsed( 'title' )->buttonLabel( 'Add Process Step' )->layout( 'table' );
$fields = array_merge( $fields, \London\Acf::ButtonAcfFields( 's', true ) );
\Kickstarter\MyAcf::registerComponentFields( 'Process Steps ', $fields );