<?php

use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\TrueFalse;
// add_action( 'init', function () {
//
//     $helpers = MyHelpers::getInstance();
//
//     $is_checked    = MyHelpers::getThemeData( 'ks_disable_users' );         // True/False
//     $allowed_users = MyHelpers::getThemeData( 'ks_disable_users_allowed' ); // Comma separated string of email addresses
//
//     if ( $is_checked == 1 ) {
//         // Convert the comma-separated string of email addresses into an array
//         $allowed_emails   = array_map( 'trim', explode( ',', $allowed_users ) );
//         $allowed_emails[] = 'info@redfrogstudio.co.uk'; // Add the specified email to the allowed emails array
//
//         // Get all users
//         $users = get_users();
//
//         foreach ( $users as $user ) {
//             // Skip the allowed users
//
//             var_dump( $allowed_emails );
//             var_dump( $user->user_email );
//             if ( in_array( $user->user_email, $allowed_emails ) ) {
//                 continue;
//             }
//
//             // Log out users
//             // wp_logout(); // Corrected function call
//
//             // Disable users by setting their role to 'none'
//             $user->set_role( 'none' );
//         }
//     }
//
// } );

// add_action( 'admin_notices', function () {
//     $helpers = MyHelpers::getInstance();
//     $is_checked    = MyHelpers::getThemeData( 'ks_disable_users' );         // True/False
//     $allowed_users = MyHelpers::getThemeData( 'ks_disable_users_allowed' ); // Comma separated string of email addresses
//
//     if ( 1 == $is_checked ) {
//         $message = 'All users except the admin info@redfrogstudio.co.uk';
//         $message .= $allowed_users ? ' and the following email addresses are currently unable to login: ' . $allowed_users : '';
//         echo '<div class="notice notice-error">';
//         echo '<p><strong>Restrict Login is active:</strong> ' . $message . '</p>';
//         echo '</div>';
//     }
// } );

add_filter( 'ks_admin_theme_options_developer_settings', function ( $fields ) {

    $fields[] = TrueFalse::make( 'Disable users login', 'ks_disable_users' )->instructions( 'Set to yes to disable all logged in users. Below you can add users that will be allowed to log in. (comma separated email addresses)' )->defaultValue( false )->stylisedUi();
    $fields[] = Text::make( 'Allowed email addresses', 'ks_disable_users_allowed' )->instructions( 'Add allowed addresses (comma separated email addresses). info@redfrogstudio.co.uk is always allowed' )->conditionalLogic( [
        ConditionalLogic::where( 'ks_disable_users', '==', '1' )
    ] );
    return $fields;

}, 20 );