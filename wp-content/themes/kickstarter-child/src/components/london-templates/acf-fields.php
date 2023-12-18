<?php
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
$fields    = [];
$templates = london_template_data();
$fields[]  = Tab::make( 'Template', wp_unique_id() )->placement( 'left' );
$fields[]  = Select::make( 'Select template', 'template' )->instructions( 'Select template for this component' )->choices( $templates )->stylisedUi()->required();
\Kickstarter\MyAcf::registerComponentFields( 'Template', $fields );