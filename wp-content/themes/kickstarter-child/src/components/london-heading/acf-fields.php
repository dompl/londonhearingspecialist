<?php
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
function london_acf_fields_heading() {
    $fields   = [];
    $fields[] = Tab::make( 'Custom heading', wp_unique_id() )->placement( 'left' );
    $colors   = ks_theme_custom_colors_array();
    $fields[] = Group::make( 'Batch', 'batch' )->instructions( 'Add custom heading batch' )->fields( [
        Text::make( 'Batch text', 'text' )->instructions( 'Add custom batch text' )->required(),
        Select::make( 'Background colour', 'color' )->instructions( 'Add custom batch colour' )->required()->choices( $colors )->allowNull()->stylisedUi()
    ] )->layout( 'row' )->required();
    $fields[] = Group::make( 'Heading text', 'text' )->instructions( 'Add heading text' )->fields( [
        Text::make( 'Main Text', 'text' )->instructions( 'Main heading text' )->required(),
        Select::make( 'Heading Tag', 'color' )->instructions( 'Select tag for your heading' )->required()->choices( ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'] )->stylisedUi()
    ] )->layout( 'row' )->required();
    return $fields;
}

# https://github.com/vinkla/extended-acf?tab=readme-ov-file#conditional-logic

\Kickstarter\MyAcf::registerComponentFields( 'Custom Heading ', london_acf_fields_heading() );