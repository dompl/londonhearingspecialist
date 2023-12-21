<?php
use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
$fields   = [];
$fields[] = Tab::make( 'Banner Settings', wp_unique_id() )->placement( 'left' );
$fields[] = Select::make( 'Select banner type', 'select' )->instructions( 'Select banner type to display on this component' )->choices( [
    'offer' => 'One line (offer) banner'
] )->stylisedUi()->required();
$fields[] = Text::make( 'Offer banner title', 'offer_text' )->instructions( london_colors_message( 'Add offer banner title' ) )->conditionalLogic( [ConditionalLogic::where( 'select', '==', 'offer' )] );
$fields[] = Textarea::make( 'Offer banner subtitle', 'offer_subtitle' )->instructions( london_colors_message( 'Add offer banner subtitle' ) )->conditionalLogic( [ConditionalLogic::where( 'select', '==', 'offer' )] )->rows( 2 );
$fields   = array_merge( $fields, \London\Acf::ButtonAcfFields( '', true ) );

\Kickstarter\MyAcf::registerComponentFields( 'Custom Banner', $fields );