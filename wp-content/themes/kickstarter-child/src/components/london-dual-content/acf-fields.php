<?php
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Number;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\WysiwygEditor;
// ->conditionalLogic([ConditionalLogic::where('type', '!=', 'document')->and('type', '!=', 'link')]);
$fields   = [];
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Tab::make( 'Main Content', wp_unique_id() )->placement( 'left' );
$fields[] = WysiwygEditor::make( 'Main content', 'content' )->instructions( 'Add main content' )->mediaUpload( false )->tabs( 'all' )->toolbar( 'default_toolbar' );
$fields[] = Tab::make( 'Image', wp_unique_id() )->placement( 'left' );
$fields[] = Select::make( 'Image position', 'position' )->instructions( 'Set position for the image' )->choices( ['left' => 'Image on the left', 'right' => 'Image on the right'] )->defaultValue( 'right' )->stylisedUi()->required();
$fields[] = Group::make( 'Image', 'image' )->instructions( 'Set dual content column image' )->fields( [
    Image::make( 'Image', 'image' )->instructions( 'Set the content image' )->returnFormat( 'id' )->previewSize( 'medium' )->required(),
    Number::make( 'Image height', 'height' )->instructions( 'Set image height' )->min( 100 )->max( 1000 )->required()->defaultValue( 500 ),
    Select::make( 'Image type', 'type' )->instructions( 'Select image type' )->choices( ['bcg' => 'Background', 'static' => 'Full image'] )->defaultValue( 'bcg' )->allowNull()->stylisedUi(),
    Select::make( 'Backdrop', 'bcg' )->instructions( 'Add custom backdrop colour for the image as a background' )->choices( london_colors_list() )->allowNull()->stylisedUi()
] )->layout( 'row' );
$fields = array_merge( $fields, \London\Acf::ButtonAcfFields( 's', true ) );
\Kickstarter\MyAcf::registerComponentFields( 'Dual Column', $fields );