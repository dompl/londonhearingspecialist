<?php
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
$MainFields   = [];
$fields[]     = Image::make( 'Image', 'img' )->instructions( 'Add accessory image' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' )->required();
$fields[]     = Text::make( 'Accessory name', 'name' )->instructions( 'Add accessory name' )->required();
$fields[]     = Text::make( 'Accessory brand', 'brand' )->instructions( 'Add accessory brand' );
$fields[]     = Textarea::make( 'Accessory description', 'description' )->instructions( 'Add accessory name' )->required()->rows( 2 );
$fields[]     = Link::make( 'Accessory link', 'link' )->instructions( 'Add accessory link' )->returnFormat( 'array' );
$MainFields[] = Tab::make( 'Accessories', wp_unique_id() )->placement( 'left' );
$MainFields[] = Repeater::make( 'Add accessories', 'f' )->instructions( 'Add accessories to the list' )->fields( $fields )->collapsed( '' )->buttonLabel( 'Add Accessory' )->layout( 'table' );
\Kickstarter\MyAcf::registerComponentFields( 'Accessories ', $MainFields );