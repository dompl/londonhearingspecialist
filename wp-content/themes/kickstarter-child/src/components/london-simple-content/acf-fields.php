<?php
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\WysiwygEditor;
$fields   = [];
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' );
$fields[] = WysiwygEditor::make( 'Content Area', 'simple' )->mediaUpload( false )->tabs( 'all' )->toolbar( 'default_toolbar' )->required();
\Kickstarter\MyAcf::registerComponentFields( 'Simple Content ', $fields );