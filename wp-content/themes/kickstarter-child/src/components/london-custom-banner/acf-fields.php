<?php
use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Textarea;
$fields   = [];
$fields[] = Tab::make( 'Banner Settings', wp_unique_id() )->placement( 'left' );
$fields[] = Select::make( 'Select banner type', 'select' )->instructions( 'Select banner type to display on this component' )->choices( [
    'offer' => 'One line (offer) banner'
] )->stylisedUi()->required();
$fields[] = Textarea::make( 'Offer banner text', 'offer_text' )->instructions( london_colors_message( 'Add offer banner text' ) )->rows( 2 )->required()->conditionalLogic( [ConditionalLogic::where( 'select', '==', 'offer' )] );
$fields   = array_merge( $fields, \London\Acf::ButtonAcfFields( '', true ) );

\Kickstarter\MyAcf::registerComponentFields( 'Custom banners', $fields );