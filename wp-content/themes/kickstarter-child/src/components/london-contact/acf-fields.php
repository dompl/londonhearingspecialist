<?php
$fields   = [];
$fields[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' );
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields   = array_merge( $fields, \London\Acf::ButtonAcfFields( '', true ) );
$fields[] = Tab::make( 'Form', wp_unique_id() )->placement( 'left' );
\Kickstarter\MyAcf::registerComponentFields( 'Contact Us', $fields );