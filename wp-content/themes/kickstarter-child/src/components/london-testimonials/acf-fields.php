<?php
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
$fields   = [];
$fields[] = Tab::make( 'Settings', wp_unique_id() )->placement( 'left' );
$fields[] = Select::make( 'Display type', 'display' )->instructions( 'Select display tyle for your testimonials' )->choices( ['default' => 'Scroller'] )->defaultValue( 'default' )->stylisedUi()->required();
$fields[] = Select::make( 'Text color', 'color' )->instructions( 'Select colour for the testimonial text' )->choices( ks_theme_custom_colors_array() )->defaultValue( 'text' )->stylisedUi()->required();
\Kickstarter\MyAcf::registerComponentFields( 'Testimonials ', $fields );