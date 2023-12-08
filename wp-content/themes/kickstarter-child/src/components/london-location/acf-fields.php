<?php
$locations = clinic_locations_data();
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
if (  !  empty( $locations ) ) {

    $location = [];
    foreach ( $locations as $post_id => $value ) {
        $location[$post_id] = $value['title'];
    }
    if (  !  empty( $location ) ) {
        $fields   = [];
        $fields[] = Tab::make( 'Content', wp_unique_id() )->placement( 'left' );
        $fields[] = Select::make( 'Select clinic location', 'select' )->instructions( 'Select location do display in this component' )->choices( $location )->stylisedUi()->required()->allowMultiple();
        \Kickstarter\MyAcf::registerComponentFields( 'Single Clinic Location', $fields );
    }

}