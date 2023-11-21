<?php
use Extended\ACF\Fields\Checkbox;
use Extended\ACF\Fields\Tab;
$fields    = [];
$l         = [];
$l['all']  = 'All Locations';
$locations = clinic_locations_data();
if (  !  empty( $locations ) ) {
    foreach ( $locations as $post_id => $location ) {
        $l[$post_id] = $location['title'];
    }
    $fields   = array_merge( $fields, \London\Acf::HeaderAcfFields() );
    $fields[] = Tab::make( 'Locations', wp_unique_id() )->placement( 'left' );
    $fields[] = Checkbox::make( 'Locations list', 'select_locations' )->instructions( 'Select locations for this component' )->choices( $l )->defaultValue( 'all' )->required();
    $fields   = array_merge( $fields, \London\Acf::ButtonAcfFields( 's', true ) );
    \Kickstarter\MyAcf::registerComponentFields( 'Location List ', $fields );
}