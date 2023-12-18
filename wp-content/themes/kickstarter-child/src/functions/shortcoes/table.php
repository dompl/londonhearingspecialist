<?php
use Extended\ACF\Fields\Text;
add_filter( 'london_admin_theme_options', function ( $fields ) {
    $fields[] = Text::make( 'Sample', '' )->instructions( 'sfdasdf' )->required();
    return $fields;

} );