<?php
add_filter( 'gform_pre_render', 'populate_contact_form_locations' );
add_filter( 'gform_pre_validation', 'populate_contact_form_locations' );
add_filter( 'gform_pre_submission_filter', 'populate_contact_form_locations' );
add_filter( 'gform_admin_pre_render', 'populate_contact_form_locations' );
add_filter( 'gform_required_legend', '__return_empty_string' );
function populate_contact_form_locations( $form ) {

    // Check if we're on the correct form (ID 1)
    if ( $form['id'] != 1 ) {
        return $form;
    }
    $locations = clinic_locations_data();
    $location  = [];
    foreach ( $locations as $post_id => $value ) {
        $location[$post_id] = $value['title'];
    }
    // Your array of options
    $fields = $location;

    // Loop through the form fields
    foreach ( $form['fields'] as &$field ) {

        // If this is not the contact form locations field, skip
        if ( $field->id != 9 ) {
            continue;
        }

        // Set allowsPrepopulate to true
        $field->allowsPrepopulate = true;

        // Clear the field choices if any
        $field->choices = array();

        // Loop through your options and add them to the field
        foreach ( $fields as $value => $label ) {
            $field->choices[] = array( 'text' => $label, 'value' => $value );
        }
    }

    return $form;
}

add_filter( 'gform_submit_button', 'set_custom_submit_button_text', 10, 2 );
function set_custom_submit_button_text( $button, $form ) {

    // Check if we're on the correct form (ID 1)
    if ( $form['id'] != 1 ) {
        return $button;
    }

    // Set your custom button text
    $custom_text = 'Submit Enquiry';

    // Replace the button text
    $button = preg_replace( "/<input([^>]*)value='([^>]*)'([^>]*)>/", "<input$1value='{$custom_text}'$3>", $button );

    return $button;
}