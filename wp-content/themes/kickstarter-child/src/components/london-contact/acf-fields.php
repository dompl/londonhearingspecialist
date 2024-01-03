<?php
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
$fields   = [];
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields   = array_merge( $fields, \London\Acf::ButtonAcfFields( 'form', false ) );
$fields[] = Tab::make( 'Form', wp_unique_id() )->placement( 'left' );
$fields[] = Text::make( 'Form title', 'form_title' )->instructions( 'Add form title' );
$fields[] = Textarea::make( 'Form description', 'form_description' )->newLines( 'br' )->instructions( 'Add form description' )->rows( 3 );
\Kickstarter\MyAcf::registerComponentFields( 'Contact Us', $fields );