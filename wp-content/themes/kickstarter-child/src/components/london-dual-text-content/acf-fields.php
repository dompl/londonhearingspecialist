<?php
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\WysiwygEditor;
$fields   = [];
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Tab::make( 'Left column', wp_unique_id() )->placement( 'left' );
$fields[] = WysiwygEditor::make( 'Left Column', 'l' )->instructions( 'Add left column content' )->mediaUpload( false )->tabs( 'all' )->toolbar( 'default_toolbar' )->required();
$fields[] = Tab::make( 'Right column', wp_unique_id() )->placement( 'left' );
$fields[] = WysiwygEditor::make( 'Right Column', 'r' )->instructions( 'Add right column content' )->mediaUpload( false )->tabs( 'all' )->toolbar( 'default_toolbar' )->required();
$fields[] = WysiwygEditor::make( 'Content after', 'after' )->instructions( 'Content after the columns' )->mediaUpload( false )->tabs( 'all' )->toolbar( 'default_toolbar' );
$fields   = array_merge( $fields, \London\Acf::ButtonAcfFields( 'gf', true ) );
\Kickstarter\MyAcf::registerComponentFields( 'Dual Column Text ', $fields );