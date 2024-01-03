<?php

// Importing necessary classes
use Extended\ACF\Fields\Email;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Kickstarter\MyForms;
use Kickstarter\MyHelpers;

/**
 * Function to create a london contact form
 *
 * @param array $data - Optional data to be included in the form
 * @return mixed - Returns the HTML for the contact form or null if the Formr class doesn't exist or data is empty
 */
function london_contact_form( $data = [] ) {

    // Check if Formr class exists and data is not empty
    if (  !  class_exists( 'Formr\Formr' ) || empty( (array) $data ) ) {
        return;
    }

    // Create a new instance of FormHelpers
    $MyForms = MyForms::getInstance();

    // Create a new instance of Formr with a null container and 'hush' as the error output
    $form = new Formr\Formr( null, 'hush' );

    // Setting form properties
    $form->sanitize_html = true; // Enable HTML sanitization
    $form->required      = 'first_name,last_name,email'; // Set required fields
    $form->action        = '#'; // Set form action URL
    $form->id            = 'london-contact'; // Set form id
    $referrer_url        = isset( $_SERVER['HTTP_REFERER'] ) ? $_SERVER['HTTP_REFERER'] : 'No referrer.'; // Get referrer URL or set to 'No referrer.'

    // Define the options for checkboxes
    $checkboxes = [
        'Ear Wax Removal',
        'Dizziness Treatment',
        'Surface Preparation',
        'Hearing Test (child)',
        'Ear Wax Removal (child)',
        'Custom Ear Plugs'
    ];

    $cleanedCheckboxes = [];

    foreach ( $checkboxes as $checkbox ) {
        // Clean up the checkbox value
        $cleanedValue = strtolower( preg_replace( '/[^a-z0-9-]/', '', str_replace( ' ', '-', $checkbox ) ) );

        // Create the key-value pair in the new array
        $cleanedCheckboxes[$cleanedValue] = $checkbox;
    }

    $checkboxes = $cleanedCheckboxes;

    // Creating form fields with default values and additional attributes
    $first_name = $form->text( 'first_name', 'First Name', '', 'contact-first-name', 'placeholder="First Name *"' );
    $last_name  = $form->text( 'last_name', 'Last Name', '', 'contact-last-name', 'placeholder="Last Name *"' );
    $email      = $form->email( 'email', 'Email Address', '', 'contact-email', 'placeholder="Email Address *"' );
    $phone      = $form->text( 'telephone', 'Telephone number', '', 'contact-telephone', 'placeholder="Telephone Number"' );
    //  $organisation = $form->text( 'organisation', 'Organisation', '', 'contact-organisation', 'placeholder="Organisation"' );
    $checkboxes = $MyForms::FormrCheckboxes( fields: $checkboxes, label: "Services", form: $form, class: 'service' );
    $enquiry    = $form->textarea( 'enquiry', 'Enquiry', '', '', 'placeholder="Enquiry"' );
    $referrer   = $form->hidden( 'Referrer URL', esc_html( $referrer_url ) );
    $secret     = $form->hidden( 'secret', wp_create_nonce( 'london_contact' ) );
    $captcha    = $form->hidden( 'recaptchaResponse', '' );
    $data       = $form->hidden( 'data', implode( ',', $data ) );
    $submit     = $form->submit_button( 'Submit Form' );

    // Constructing HTML for the form
    $html = '<div class="london-contact-form gcf">';
    $html .= $form->open( 'POST' );

    $html .= '<div class="form-items">';
    $html .= '<div class="group form-item">';
    $html .= '<div class="form-item child">' . $first_name . '</div>';
    $html .= '<div class="form-item child">' . $last_name . '</div>';
    $html .= '</div>';

    $html .= '<div class="group form-item">';
    $html .= '<div class="form-item child">' . $email . '</div>';
    $html .= '<div class="form-item child">' . $phone . '</div>';
    $html .= '</div>';

    $html .= '<div class="form-item">' . $organisation . '</div>';

    $html .= '<div class="form-item">' . $checkboxes . '</div>';

    $html .= '<div class="form-item">' . $enquiry . '</div>';

    $html .= '</div>';

    $html .= '<div class="form-item hidden group">' . $referrer . $secret . $captcha . $data . '</div>';

    $html .= '<div class="footer">';
    $html .= '<div class="submit-form">' . $submit . '</div>';
    $html .= '</div>';
    $html .= $form->close();
    $html .= '</div>';
    // Return the constructed HTML
    return $html;
}
/**
 * Action hook to enqueue reCAPTCHA script in the head if london_contact component is selected
 */
add_action( 'wp_head', function () {
    $helpers = MyHelpers::getInstance();
    if ( MyHelpers::IsSelectedComponent( 'london_contact' ) ) {
        $site_key = '6LfE43koAAAAADGAv_vDbLQ3i44qCk0cg2FA-jDq';
        echo '<script src="https://www.google.com/recaptcha/api.js?render=' . $site_key . '"></script>';
        echo "<script>grecaptcha.ready(function() {";
        echo "grecaptcha.execute('{$site_key}', {action: 'submit'}).then(function(token) {";
        echo "document.getElementById('recaptchaResponse').value = token;});";
        echo "});";
        echo "</script>";
    }
}, 10, 999 );