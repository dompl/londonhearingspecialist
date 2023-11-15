<?php
// https://github.com/PHPMailer/PHPMailer
namespace Kickstarter;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

class MyForms {

    /**
     * @var mixed
     */
    private static $instance = null;

    public static function getInstance() {
        if ( self::$instance === null ) {
            self::$instance = new MyForms();
        }
        return self::$instance;
    }

    /**
     * This method retrieves developer email server information.
     *
     * @return array|null The SMTP server settings or null if RFS_DEVELOPER_MAIL_PASSWORD is not defined.
     */
    public static function devEmailServerInfo() {

        try {
            // Check if RFS_DEVELOPER_MAIL_PASSWORD is defined and truthy
            if ( defined( 'RFS_DEVELOPER_MAIL_PASSWORD' ) && RFS_DEVELOPER_MAIL_PASSWORD ) {
                // Return the SMTP server settings
                return [
                    'SMTP_SERVER'   => "rfsmail.co.uk",
                    'SMTP_PORT'     => 587,
                    'SMTP_USER'     => "updates@rfsmail.co.uk",
                    'SMTP_PASSWORD' => RFS_DEVELOPER_MAIL_PASSWORD
                ];
            } else {
                // Throw an exception if RFS_DEVELOPER_MAIL_PASSWORD is not defined
                throw new Exception( 'Error 30922: "RFS_DEVELOPER_MAIL_PASSWORD" global is not defined in wp-config.php' );
            }
        } catch ( Exception $e ) {
            // Log the exception message
            error_log( $e->getMessage() );
            // Return null or handle the error as needed
            return null;
        }

    }

    /**
     * This method sends an email to the webmaster using PHPMailer.
     *
     * @param string $to The recipient's email address.
     * @param string $subject The email subject.
     * @param string $message The email body.
     * @param array $headers (Optional) Additional headers.
     * @param array $attachments (Optional) Email attachments.
     *
     * @return bool|null Returns true on success, false on mailer exception, or null on other exceptions.
     */
    public static function sendWebmasterEmail( $subject = false, $message = false, $headers = [], $attachments = [], $to = false, $replay_to = false, $is_html = true, $plain = false ) {

        try {
            // Retrieve the SMTP server settings
            $settings = self::devEmailServerInfo();

            if ( $settings ) {

                $mail = new PHPMailer( true );

                try {

                    $email_address = $to ? self::ValidateCommaSeparatedEmails( $to ) : 'info@redfrogstudio.co.uk';
                    // Set mailer to use SMTP
                    $mail->isSMTP();
                    // Set the SMTP server settings
                    $mail->Host       = $settings['SMTP_SERVER'];
                    $mail->SMTPAuth   = true;
                    $mail->Username   = $settings['SMTP_USER'];
                    $mail->Password   = $settings['SMTP_PASSWORD'];
                    $mail->SMTPSecure = 'tls';
                    $mail->Port       = $settings['SMTP_PORT'];

                    // Set the email sender, recipient, subject, and body
                    $mail->setFrom( $settings['SMTP_USER'], 'Webmaster' );
                    $mail->addAddress( $email_address );
                    $mail->isHTML( $is_html );
                    $mail->Subject = $subject ?? 'This message has no subject';
                    $mail->Body    = $message ?? 'This message has no body';

                    if ( $replay_to ) {
                        $mail->addReplyTo( $replay_to );
                    }

                    if ( $plain ) {
                        $mail->AltBody = $plain;
                    }

                    if (  !  empty( $attachments ) ) {
                        if ( is_array( $attachments ) ) {
                            foreach ( $attachments as $attachment ) {
                                $mail->addAttachment( $attachment );
                            }
                        } else {
                            $mail->addAttachment( $attachments );
                        }
                    }

                    // Send the email and return true on success
                    $mail->send();
                    return true;
                } catch ( Exception $e ) {
                    // Return false on PHPMailer exception
                    return false;
                }

            } else {
                // Throw an exception if RFS_DEVELOPER_MAIL_PASSWORD is not defined
                throw new Exception( 'Error 30922: "RFS_DEVELOPER_MAIL_PASSWORD" global is not defined in wp-config.php' );
            }
        } catch ( Exception $e ) {
            // Log the exception message
            error_log( $e->getMessage() );
            // Return null or handle the error as needed
            return null;
        }
    }

    /**
     * Validates and sanitizes a string of comma-separated email addresses,
     * and combines them with additional email addresses provided.
     *
     * @param string $email_addresses - The string of comma-separated email addresses.
     * @param string $additional_emails - A string of additional comma-separated email addresses.
     * @return string - A string of valid, sanitized, comma-separated email addresses, or an empty string if no valid emails are found.
     */
    public static function ValidateCommaSeparatedEmails( $email_addresses, $additional_emails = '' ) {
        // Check if the strings are empty, not strings or evaluate to false
        $email_addresses   = ( is_string( $email_addresses ) && !  empty( $email_addresses ) ) ? $email_addresses : '';
        $additional_emails = ( is_string( $additional_emails ) && !  empty( $additional_emails ) ) ? $additional_emails : '';

        // Combine the input email addresses with the additional email addresses
        $combined_email_addresses = $email_addresses . (  !  empty( $email_addresses ) && !  empty( $additional_emails ) ? ',' : '' ) . $additional_emails;

        // Split the string into an array using comma as a delimiter.
        $emails_array = explode( ',', $combined_email_addresses );

        // Initialize an array to hold valid email addresses.
        $valid_emails = array();

        // Iterate through the array, validating and sanitizing each email address.
        foreach ( $emails_array as $email ) {
            $email = trim( $email ); // Trim whitespace
            if ( filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
                $sanitized_email = filter_var( $email, FILTER_SANITIZE_EMAIL );
                $valid_emails[]  = $sanitized_email;
            }
        }

        // Join the valid email addresses back into a comma-separated string.
        $valid_email_addresses = implode( ',', $valid_emails );

        return $valid_email_addresses;
    }

    /**
     * This function generates HTML for a list of checkboxes using the Formr class.
     *
     * @param array  $fields - The associative array where keys are the checkbox values and values are the labels.
     * @param object $form - The instance of the Formr class used to generate the checkbox HTML.
     * @param string $label - The label for the group of checkboxes. Default is 'Label'.
     * @param string $class - A CSS class to be added to the surrounding div and list elements. Default is 'services'.
     * @return string|void - The generated HTML string for the checkboxes, or void if the Formr class doesn't exist or $class is an empty string.
     */
    public static function FormrCheckboxes( $fields, $form, $label = 'Label', $class = 'services' ) {

        // Check if the Formr class exists and $class is not an empty string, else return early
        if (  !  class_exists( 'Formr\Formr' ) || $class == '' ) {
            return;
        }

        // Begin building the HTML string
        $html = '<div class="item' . ( $class ? " {$class}" : '' ) . '">'; // Create a div element with class 'item' and optionally $class

        // If $label is not empty, add a label element
        $html .= $label ? '<label for="item-' . $class . '">' . $label . '</label>' : '';

        // Create an unordered list element for the checkboxes with class '$class-list checkboxes'
        $html .= '<ul class="' . $class . '-list checkboxes">';

        // Iterate through the $fields array to generate the checkboxes
        foreach ( $fields as $key => $services ) {
            // Use the Formr class to generate the checkbox HTML
            $item = $form->checkbox( $class, $services, $services, "{$class}-{$key}" );

            // Wrap each checkbox in a list item element
            $html .= '<li class="' . $class . '-item">' . $item . '</li>';
        }

        $html .= '</ul>'; // Close the unordered list element
        $html .= '</div>'; // Close the div element

        return $html; // Return the generated HTML string
    }

}