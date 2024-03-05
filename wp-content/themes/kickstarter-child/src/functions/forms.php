<?php

add_filter( 'gform_validation', 'exclude_links_and_mark_as_spam' );

function exclude_links_and_mark_as_spam( $validation_result ) {
    $form           = $validation_result['form'];
    $target_form_id = 1; // Adjust to your target form ID
    $field_id       = 10; // Adjust to your target field ID

    // Define your excluded criteria, including the regex for Cyrillic characters
    $excluded_criteria = array(
        'http',
        'https',
        'seo',
        'ranking',
        'Optimization',
        'Optimisation', // UK English spelling included
        'PPC',
        'www',
        'Ads',
        'Link Building',
        'Cialis',
        'Levitra',
        '/[\x{0410}-\x{044F}]+/u' // Regex pattern for Cyrillic characters
    );

    // Proceed only if the current form is the target form
    if ( $form['id'] == $target_form_id ) {
        foreach ( $form['fields'] as &$field ) {
            // Check if the current field is the specific textarea field to be checked
            if ( $field->type == 'textarea' && $field->id == $field_id ) {
                $textarea_value = rgpost( 'input_' . $field_id );
                foreach ( $excluded_criteria as $criterion ) {
                    // For regex, use preg_match; for substrings, use stripos
                    if (  ( is_string( $criterion ) && stripos( $textarea_value, $criterion ) !== false ) ||
                        ( preg_match( $criterion, $textarea_value ) ) ) {
                        // Mark the field as failed validation and prevent form submission
                        $field->failed_validation      = true;
                        $field->validation_message     = 'Error';
                        $validation_result['is_valid'] = false;

                        log_spam_attempt(); // Log the attempt or take further actions

                        break 2; // Exit both loops
                    }
                }
            }
        }
    }

    $validation_result['form'] = $form;
    return $validation_result;
}

function log_spam_attempt() {
    global $wpdb; // Access the WordPress database object
    $table_name = $wpdb->prefix . 'gf_spam_log'; // Define the table name where you will store spam logs

    // Ensure the table exists, create it if it doesn't
    if ( $wpdb->get_var( "SHOW TABLES LIKE '$table_name'" ) != $table_name ) {
        // Table SQL
        $charset_collate = $wpdb->get_charset_collate();
        $sql             = "CREATE TABLE $table_name (
			  id mediumint(9) NOT NULL AUTO_INCREMENT,
			  time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
			  user_ip varchar(100) DEFAULT '' NOT NULL,
			  PRIMARY KEY  (id)
		 ) $charset_collate;";
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta( $sql );
    }

    // Log the current attempt
    $user_ip = GFFormsModel::get_ip();
    $wpdb->insert(
        $table_name,
        array(
            'time'    => current_time( 'mysql' ),
            'user_ip' => $user_ip
        )
    );

    // Optionally, implement additional logic here if you have a way to directly influence Gravity Forms spam handling
}