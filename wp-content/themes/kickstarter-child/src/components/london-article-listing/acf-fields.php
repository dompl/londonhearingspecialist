<?php
use Extended\ACF\Fields\Number;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\TrueFalse;
$fields   = [];
$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Tab::make( 'Settings', wp_unique_id() )->placement( 'left' );
$fields[] = Number::make( 'Posts per page', 'posts_per_page' )->instructions( 'Select total amount of post to be displayed per page' )->min( 4 )->max( 99 )->required();
// use Extended\ACF\Fields\TrueFalse;

$fields[] = TrueFalse::make( 'Hide Pagination', 'display_pagination' )
    ->instructions( 'Select to show or hide pagination' )
    ->defaultValue( false )
    ->stylisedUi() // optional on and off text labels
    ->required();
\Kickstarter\MyAcf::registerComponentFields( 'Article listing ', $fields );