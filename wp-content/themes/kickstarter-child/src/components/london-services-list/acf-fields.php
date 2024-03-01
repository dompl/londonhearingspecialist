<?php
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
$fields = [];

$services = clinic_services_data();
$s        = [];
$s['all'] = 'All Services';
foreach ( $services as $post_id => $service ) {
    $s[$post_id] = $service['title'];
}

$fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
$fields[] = Tab::make( 'Services', wp_unique_id() )->placement( 'left' );
$fields[] = Select::make( 'Select services', 'services_select' )->instructions( 'Select services to display in this component' )->choices( $s )->defaultValue( 'all' )->allowMultiple()->stylisedUi()->required();
$fields   = array_merge( $fields, \London\Acf::ButtonAcfFields( 's', true ) );
\Kickstarter\MyAcf::registerComponentFields( 'Services list', $fields );