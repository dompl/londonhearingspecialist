<?php

// Hook to WordPress's 'after_setup_theme' action to execute the function 'create_ks_404_visits_table'
// This function will create a custom table named 'ks_404_visits' in the WordPress database
add_action( 'after_setup_theme', 'create_ks_404_visits_table' );

// Define the function 'create_ks_404_visits_table'
function create_ks_404_visits_table() {
    global $wpdb; // Declare $wpdb as global to access WordPress's database functionality

    // Concatenate the WordPress table prefix with 'ks_404_visits' to form the full table name
    $table_name      = $wpdb->prefix . 'ks_404_visits';
    $charset_collate = "DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci";

    // Check if the table already exists
    if ( $wpdb->get_var( "SHOW TABLES LIKE '$table_name'" ) != $table_name ) {
        // SQL query to create the custom table
        $sql = "CREATE TABLE $table_name (
			id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
			url VARCHAR(255) NOT NULL,
			visits INT(11) NOT NULL DEFAULT 1,
			UNIQUE (url)
		 ) $charset_collate;";

        // Include WordPress's database upgrade library
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';

        // Execute the SQL query to create the table
        dbDelta( $sql );
    } else {
        // If the table exists, you can perform ALTER TABLE operations here
        // Make sure to handle existing primary keys and other constraints
    }
}

// Hook to WordPress's 'template_redirect' action to execute the function 'capture_404_visits'
// This function will capture 404 visits and store them in the custom table
add_action( 'template_redirect', 'capture_404_visits' );

// Define the function 'capture_404_visits'
function capture_404_visits() {
    global $wpdb; // Declare $wpdb as global to access WordPress's database functionality

    // Check if the current page is a 404 page
    if ( is_404() ) {
        // Capture the requested URL
        $url = $_SERVER['REQUEST_URI'];

        // Form the full table name
        $table_name = $wpdb->prefix . 'ks_404_visits';

        $query = $wpdb->prepare( 'SHOW TABLES LIKE %s', $wpdb->esc_like( $table_name ) );

        if (  !  ( $wpdb->get_var( $query ) == $table_name ) ) {
            create_ks_404_visits_table();
        }

        // Check if the URL already exists in the custom table
        $existing_row = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $table_name WHERE url = %s", $url ) );

        // If the URL already exists in the table
        if ( $existing_row ) {
            // Update the 'visits' count for the existing URL
            $wpdb->update(
                $table_name,
                array( 'visits' => $existing_row->visits + 1 ), // Increment the visit count
                array( 'id' => $existing_row->id ), // Where clause
                array( '%d' ), // Data format for 'visits'
                array( '%d' ) // Where format
            );
        } else {
            // If the URL doesn't exist in the table, insert a new row
            $wpdb->insert(
                $table_name,
                array(
                    'url' => $url, // The 404 URL
                    'visits' => 1 // Initial visit count
                ),
                array( '%s', '%d' ) // Data format for 'url' and 'visits'
            );
        }
    }
}