<?php
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Tab;
$fields   = [];
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Tab::make( 'Information', wp_unique_id() )->placement( 'left' );
$fields[] = Message::make( 'Information' )->message( 'This field will display booking form.' );
\Kickstarter\MyAcf::registerComponentFields( 'Booking Form ', $fields );