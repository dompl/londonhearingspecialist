<?php

namespace Kickstarter;

use Kickstarter\MyForms;

require 'MyHelpers/MyHelpersCss.php';
require 'MyHelpers/MyHelpersImages.php';
require 'MyHelpers/MyNavigation.php';
/**
 * Class MyHelpers
 * Collection of helper functions.
 */
class MyHelpers {

    use TraitMyHelpersCustomCss;
    use MyHelpersImages;
    use MyNavigation;
    /**
     * @var mixed
     */
    private static $instance = null;

    /**
     * @var mixed
     */
    private $hasRun = false;
    /**
     * @var mixed
     */
    private static $instantiated = false;

    /**
     * @var array
     */
    private $cssStorage = [];

    /**
     * @var int
     */
    private static $counter = 0;

    /**
     * Constructor to initialize the class properties and actions.
     *
     * This method sets up action hooks and triggers the auto-inclusion
     * and initialization of other classes. It also ensures that the
     * class is only instantiated once during a request.
     */
    public function __construct() {

        if ( self::$instantiated ) {
            return;
        }

        add_action( 'wp_head', ['\Kickstarter\MyHelpers', 'AddCustomCss'] );
        add_action( 'delete_attachment', ['\Kickstarter\MyHelpers', 'DeleteAutoXgenFiles'] );
        add_action( 'wp_ajax_deleteBuildImages', ['\Kickstarter\MyHelpers', 'deleteBuildImages'] );

        // Mark this class as instantiated
        self::$instantiated = true;
    }

    public static function getInstance() {
        if ( self::$instance === null ) {
            self::$instance = new MyHelpers();
        }
        return self::$instance;
    }

    /**
     * Get the current theme version.
     *
     * This static method returns the version of the current WordPress theme.
     * In specific environments, it appends a cache-busting timestamp to the version.
     * This is useful for bypassing browser cache during development or on specific servers.
     *
     * @return string The theme version, possibly appended with a cache-busting query parameter.
     */
    public static function themeVersion() {

        // Cache-busting: Use current timestamp in specified environments for cache invalidation.
        // This is useful for bypassing browser cache during development.
        $cache       = null;
        $allowed_ips = ['127.0.0.1', '::1', '77.68.103.64'];
        if ( isset( $_SERVER['SERVER_ADDR'] ) && in_array( $_SERVER['SERVER_ADDR'], $allowed_ips ) ) {
            $cache = time();
        }

        // Initialize version variable
        $version = '';

        // Get the current theme information
        $theme = wp_get_theme();

        // Check if the theme is a child theme, get the parent theme version if it is
        if ( $theme->parent() ) {
            $version = $theme->parent()->get( 'Version' );
        } else {
            $version = $theme->get( 'Version' );
        }

        // Append cache variable if present
        if ( $cache ) {
            $version .= "&$cache";
        }

        return $version;
    }

    /**
     * Generates a unique string based on micro-time, a random value, and a counter.
     *
     * This method increments an internal counter, obtains the current micro-time, and
     * generates a random value. These three values are then concatenated together and
     * hashed using the MD5 algorithm to produce a unique string, which is returned.
     *
     * @return string The generated unique string.
     */
    public static function getRandomID( $string = false ) {
        // Increment the counter
        self::$counter++;

        // Get the current micro-time
        $microTime = microtime();

        // Get a random value
        $randomValue = mt_rand();

        // Concatenate the micro-time, random value, and counter,
        // then hash the result to get a unique string
        $uniqueString = md5( $microTime . $randomValue . self::$counter );

        if ( is_numeric( $string ) && $string > 1 ) {
            return substr( $uniqueString, 0, $string );
        }

        return $uniqueString;
    }

    /**
     * Extracts the primary domain or subdomain from the host.
     *
     * This method reads the host name from the server environment variable,
     * normalizes it, and then extracts the primary domain or subdomain part
     * from it. If the host name starts with 'www.', this prefix is removed.
     * In case the host name cannot be obtained or processed, the method returns false.
     *
     * @return string|bool The primary domain or subdomain extracted from the host, or false on failure.
     */
    public static function extractedDomainName() {

        // Check if the 'HTTP_HOST' server environment variable is set and not empty
        if (  !  isset( $_SERVER['HTTP_HOST'] ) || empty( $_SERVER['HTTP_HOST'] ) ) {
            return false;
        }

        // Get the host name from server environment variable
        $host = $_SERVER['HTTP_HOST'];

        // Normalize the host name by converting to lowercase and trimming whitespace
        $host = strtolower( trim( $host ) );

        // If the host name is still empty after normalization, return false
        if ( empty( $host ) ) {
            return false;
        }

        // Count the occurrences of dots in the host name
        $count = substr_count( $host, '.' );

        // If there's more than one dot or the host starts with "www.", try to remove the "www." prefix
        if ( $count === 1 || ( $count > 1 && preg_match( '/^www\./', $host ) ) ) {
            $host = preg_replace( '/^www\./', '', $host ); // Remove 'www.' prefix if it exists
        }

        // Split the host name into parts using the dot as a delimiter
        $parts = explode( '.', $host );

        // If the split operation didn't produce an array or the first element is empty, return false
        if (  !  is_array( $parts ) || empty( $parts[0] ) ) {
            return false;
        }

        // Return the first part before the first dot, which should be the primary domain or subdomain
        return $parts[0];
    }

    /**
     * Generates HTML attributes for data-click tracking.
     *
     * This method creates an array of HTML attributes for data-click tracking,
     * including an 'id' attribute and a 'data-click' attribute. The 'data-click'
     * attribute's value is a JSON-encoded array containing the provided data ID
     * and a nonce for validation. The generated attributes are then concatenated
     * into a string and returned.
     *
     * @param string $data_id The data ID to be used for click tracking.
     * @return string A space-separated string of HTML attributes for data-click tracking.
     */
    public static function DataClick( $data_id ) {
        // Initialize an array to hold the HTML attributes
        $html = [];

        // Add the 'id' attribute with the provided data ID
        $html[] = 'id="' . esc_attr( $data_id ) . '"';

        // Create a 'data-click' attribute with a JSON-encoded array containing the data ID and a nonce
        $html[] = 'data-click=\'' . json_encode( [$data_id, wp_create_nonce( 'ks_gcd_nonce' )], JSON_HEX_APOS ) . '\'';

        // Concatenate the attributes into a space-separated string and return it
        return implode( ' ', $html );
    }

    /**
     * @param $post_id
     * @return null
     */

    /**
     * @param string $key
     * @return mixed
     */
    public static function getThemeData( ?string $key = null ) {
        // Get the theme data stored in the transient
        $data = get_transient( 'ks_theme_data' );

        // If the transient doesn't exist, create it
        if ( false === $data ) {
            $data = [];
            // Check if the get_fields function exists (This function is part of Advanced Custom Fields plugin)
            if ( function_exists( 'get_fields' ) ) {
                $options = get_fields( 'option' );
                // Check if the $options is an array and populate the $data array
                if ( is_array( $options ) ) {
                    foreach ( $options as $k => $v ) {
                        $data[$k] = $v;
                    }
                }
            }

            // Apply filters to $data before saving it to the transient
            $additional_data = apply_filters( '_ks_theme_data', [] );
            if ( is_array( $additional_data ) ) {
                $data = array_merge( $data, $additional_data );
            }

            // Set the transient to expire in 12 hours
            set_transient( 'ks_theme_data', $data, 12 * HOUR_IN_SECONDS );
        }

        // Apply filters to $data after retrieving it from the transient
        $additional_data = apply_filters( '_ks_theme_data', [] );
        if ( is_array( $additional_data ) ) {
            $data = array_merge( $data, $additional_data );
        }

        // If a key is specified, return the value for that key if it exists
        if ( null !== $key ) {
            return $data[$key] ?? false;
        }

        // If a key isn't specified or doesn't exist, return all data
        return $data ?? null;
    }

    /**
     * Change the key of an element in an associative array.
     *
     * @param array $array The associative array.
     * @param mixed $oldKey The old key to be replaced.
     * @param mixed $newKey The new key to be set.
     * @return array The updated associative array with the key changed.
     */

    public static function ChangeArrayKeys( $array, $oldKey, $newKey ) {
        // Check if the old key exists in the array
        if (  !  array_key_exists( $oldKey, $array ) ) {
            return $array; // Return the array as is if old key doesn't exist
        }

        // Get all keys of the array
        $keys = array_keys( $array );

        // Find the index of the old key and replace it with the new key
        $keys[array_search( $oldKey, $keys )] = $newKey;

        // Combine the updated keys with the original values to create the new array
        return array_combine( $keys, $array );
    }

    /**
     * TODO: Add description here.
     */
    public static function DeleteTransient( $transient = false ) {

        add_action( 'save_post', function ( $post_id ) {

            if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
                return;
            }

            if ( wp_is_post_revision( $post_id ) ) {
                return;
            }

            delete_transient( $transient );

        } );

    }
    /**
     * Generate an HTML link based on a WordPress post ID and title.
     *
     * This function returns an HTML anchor tag with the post's permalink as the href attribute.
     * If the $blank parameter is true, the link will open in a new tab.
     *
     * @param int|string $id    The ID of the WordPress post. Default is false.
     * @param string     $title The text to display for the link. Default is false.
     * @param bool       $blank Whether to open the link in a new tab. Default is false.
     *
     * @return string|null The HTML anchor tag or null if $id or $title is not provided.
     */

    public static function LinkFromId( $id = false, $title = false, $blank = false, $tracking = false ) {
        if (  !  $id ) {
            return;
        }
        if (  !  $title ) {
            $title = the_title_attribute( "echo=0&post={$id}" );
        }
        if ( $tracking ) {
            $tracking = ' ' . self::DataClick( $tracking );
        }
        // Generate the link with target="_blank" if $blank is true.
        if ( $blank ) {
            return '<a href="' . esc_url( get_the_permalink( $id ) ) . '" target="_blank" rel="noopener noreferrer" title="' . wp_strip_all_tags( $title ) . '"' . $tracking . '>' . $title . '</a>';
        }
        return '<a href="' . esc_url( get_the_permalink( $id ) ) . '" title="' . wp_strip_all_tags( $title ) . '"' . $tracking . '>' . $title . '</a>';
    }

    /**
     * Generates an HTML anchor tag with optional attributes and content.
     *
     * @param array  $link    An associative array containing 'url', 'title', and optionally 'target'.
     * @param string $class   Optional CSS class to add to the anchor tag.
     * @param string $content Optional content to place inside the anchor tag; defaults to the link title.
     * @param string $wrapper Optional CSS class to add to a wrapper div around the anchor tag.
     *
     * @return string The generated HTML anchor tag, optionally wrapped in a div.
     */
    public static function Link( $link, $class = false, $content = false, $wrapper = false, $schema = false ) {
        // Initialize an empty array to hold HTML attributes
        $attributes = [];

        // Add the URL and title attributes
        $attributes[] = 'href="' . esc_url( $link['url'] ) . '"';
        $attributes[] = 'title="' . esc_html( $link['title'] ) . '"';

        // Add the target attribute if it exists
        if ( isset( $link['target'] ) && $link['target'] ) {
            $attributes[] = 'target="' . esc_attr( $link['target'] ) . '"';
        }

        // Add rel attribute for security if target is '_blank'
        if ( isset( $link['target'] ) && $link['target'] === '_blank' ) {
            $attributes[] = 'rel="noopener noreferrer"';
        }

        $attributes[] = $schema ? 'itemprop="url"' : '';

        // Add the class attribute if it exists
        if (  !  empty( $class ) ) {
            if ( is_string( $class ) ) {
                $class = explode( ' ', $class ); // Convert string to array, assuming space-separated classes
            }
            $attributes[] = 'class="' . esc_attr( implode( ' ', $class ) ) . '"';
        }

        // Combine all attributes into a single string
        $attributeString = implode( ' ', $attributes );

        // Use the provided $content or fallback to the link title
        $contentInsideLink = $content ? $content : $link['title'];

        // Generate the final anchor tag
        $anchorTag = sprintf( '<a %s>%s</a>', $attributeString, $contentInsideLink );

        // Wrap the anchor tag in a div if a wrapper class is provided
        if ( $wrapper ) {
            $anchorTag = sprintf( '<div class="%s">%s</div>', esc_attr( $wrapper ), $anchorTag );
        }

        return $anchorTag;
    }

    /**
     * Checks if a given component is selected for the current post.
     *
     * This method retrieves the 'components' meta field from the current post's metadata.
     * It then checks if the provided component exists within this array.
     *
     * @param string $component The component to check for.
     *
     * @return bool True if the component is selected, false otherwise.
     */

    /**
     * TODO: Add description here.
     */
    public static function IsSelectedComponent( $component = false ) {
        // Access the global $post object to get the current post's data
        global $post;

        // If $post is not set (e.g., we're not in a post context), return null
        if (  !  $post ) {
            return false;
        }

        // Retrieve the 'components' meta field from the current post and filter out empty values
        $components = array_filter( (array) get_post_meta( $post->ID, 'components', true ) );

        // If there are no components, return false
        if ( empty( $components ) ) {
            return false;
        }

        // Retrieve theme data
        $data = self::getThemeData();

        // Check if 'select_components' exists in theme data and if the provided component exists in $components
        if ( isset( $data['select_components'] ) && in_array( $component, $components ) ) {
            return true;
        }

        // If the component is not found, return false
        return false;
    }

    /**
     * Includes PHP files from a specified directory excluding the ones provided.
     *
     * @param string $directory The directory path.
     * @param array $excludes Files to exclude.
     */

//     public function includeFilesInDirectory( $directory, $excludes = ['_init.php'] ) {
//         $iterator = new RecursiveIteratorIterator( new RecursiveDirectoryIterator( $directory ) );
//
//         foreach ( $iterator as $file ) {
//             if (  !  $file->isDir() && !  in_array( $file->getFilename(), $excludes ) && $file->getExtension() === 'php' ) {
//                 require_once $file->getPathname();
//             }
//         }
//     }

    /**
     * Formats a number to currency format.
     *
     * @param float $amount Amount to be formatted.
     * @param string $currency Currency symbol.
     * @return string Formatted amount.
     */

    /**
     * TODO: Add description here.
     */
    public static function numberToCurrency( $amount, $currency = '&pound;' ) {
        $amount = floatval( str_replace( ',', '.', $amount ) );
        return $currency . number_format( $amount, 2, '.', ',' );
    }

    /**
     * Converts text lines to specified HTML tags.
     *
     * @param string $text Text to convert.
     * @param string $option Format option.
     * @param bool $removeEmpty Remove empty tags.
     * @return string Formatted text.
     */

    /**
     * TODO: Add description here.
     */
    public static function convertTextTags( $text, $option = 'p', $removeEmpty = false ) {
        $lines = explode( "\n", $text );
        if (  !  is_array( $lines ) || empty( $lines ) ) {
            return $text;
        }

        $output = '';
        foreach ( $lines as $formattedLine ) {
            $formattedLine = trim( $formattedLine );
            if ( $formattedLine || !  $removeEmpty ) {
                $output .= self::wrapTextInTag( $formattedLine, $option );
            }
        }

        return $output;
    }

    /**
     * @param $text
     * @param $tag
     * @return mixed
     */

    /**
     * TODO: Add description here.
     */
    private static function wrapTextInTag( $text, $tag ) {
        switch ( $tag ) {
        case 'br':
            return $text . "<br>";
        case 'brbr':
            return $text . "<br><br>";
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'div':
        case 'p':
            return "<{$tag}>{$text}</{$tag}>";
        default:
            return $text;
        }
    }

    /**
     * Checks if a post has a specified component.
     *
     * @param string|bool $component Component to check.
     * @return bool True if has component, false otherwise.
     */

    /**
     * TODO: Add description here.
     */
    public static function ifHasComponent( $component = false ) {
        $post = get_post();
        if (  !  $post ) {
            return false;
        }

        $components = get_post_meta( $post->ID, 'components', true );
        return  !  empty( $components ) && in_array( $component, $components );
    }

    /**
     * Filters available values by selected ones.
     *
     * @param array $available Available values.
     * @param array $selected Selected values.
     * @return array Filtered values.
     */

    /**
     * TODO: Add description here.
     */
    public static function getSelectedValues( $available = [], $selected = [] ) {
        if ( empty( $available ) || empty( $selected ) ) {
            return [];
        }
        return array_intersect_key( $available, array_flip( $selected ) );
    }

    /**
     * @param $input
     * @return mixed
     */

    /**
     * TODO: Add description here.
     */
    public static function formatTag( $input ) {

        $tags            = [];
        $tags['%title%'] = get_the_title();
        $tags['%year%']  = date( 'Y' );
        $tags            = apply_filters( '_ks_replace_tags', $tags );
        foreach ( $tags as $id => $tag ) {
            $input = str_replace( $id, $tag, $input );
        }

        $parts = explode( '|', $input );

        if ( count( $parts ) == 2 ) {
            $content = $parts[0];
            $tag     = $parts[1];

            $allowed_tags = array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p', 'b', 'strong', 'i', 'quote', 'sub', 'sup' );

            if ( in_array( $tag, $allowed_tags ) ) {
                $formatted_html = "<$tag>$content</$tag>";
                return $formatted_html;
            } else {
                return $input;
            }
        } else {
            return $input;
        }
    }
    /**
     * @param $placeholderPattern
     * @param $replacement
     * @param $string
     */

    /**
     * TODO: Add description here.
     */
    public static function replaceCustomTags( $placeholderPattern, $replacement, $string ) {
        $pattern = '/' . preg_quote( $placeholderPattern[0], '/' ) . '(.*?)' . preg_quote( $placeholderPattern[1], '/' ) . '/';
        return preg_replace( $pattern, $replacement, $string );
    }

    /**
     * @param $phoneNumber
     * @param $countryCode
     * @return mixed
     */

    /**
     * TODO: Add description here.
     */
    public static function dialPhoneNumber( $phoneNumber, $countryCode = '44' ) {
        // Remove any non-numeric characters from the phone number
        $numericPhoneNumber = preg_replace( '/[^0-9]/', '', $phoneNumber );

        // Add the specified country code and format
        $formattedPhoneNumber = '+' . $countryCode . substr( $numericPhoneNumber, strlen( $countryCode ) );

        return $formattedPhoneNumber;
    }
    /**
     * @param $text
     * @return mixed
     */

    /**
     * TODO: Add description here.
     */
    public static function convertPhoneNumberToLink( $text = false, $countryCode = '44', $bot = true, $tracking = false ) {

        if (  !  $text ) {
            return false;
        }
        $pattern = '/(\d[\d ]{7,}\d)/'; // Pattern to match the phone number with at least 9 digits

        // Replace matched phone numbers with the formatted link
        $formattedText = preg_replace_callback( $pattern, function ( $matches ) use ( $countryCode, $bot, $tracking ) {
            $phoneNumber = preg_replace( '/[^0-9]/', '', $matches[1] ); // Remove non-numeric characters
            $d           = $bot ? antispambot( $matches[1] ) : $matches[1];
            if ( strlen( $phoneNumber ) >= 9 ) {
                $n = $bot ? antispambot( $phoneNumber ) : $phoneNumber;
                if ( $tracking == false ) {
                    return '<a href="tel:+' . $countryCode . $n . '">' . $d . '</a>';
                } else {
                    return '<a ' . self::DataClick( $tracking ) . ' href="tel:+' . $countryCode . $n . '">' . $d . '</a>';
                }
            } else {
                return $d; // Return as is if it doesn't meet the requirement
            }
        }, $text );

        return $formattedText;
    }

    /**
     * @param $settings
     */

    /**
     * TODO: Add description here.
     */
    public static function getSlickSettings( $input, $addons = [] ) {
        $lines          = explode( "\n", $input ); // Split by new lines
        $result         = [];
        $result['rows'] = 0;

        foreach ( $lines as $line ) {
            $line = trim( $line ); // Remove any leading/trailing whitespace
            if ( empty( $line ) ) {
                continue;
            }
            // Skip empty lines

            // Remove any trailing commas
            $line = rtrim( $line, ',' );

            // Split by the colon character
            list( $key, $value ) = explode( ':', $line );

            // Trim whitespaces from key and value
            $key   = trim( $key );
            $value = trim( $value );

            // Convert string booleans and numbers to their respective types
            if ( $value === 'true' ) {
                $value = true;
            } elseif ( $value === 'false' ) {
                $value = false;
            } elseif ( is_numeric( $value ) ) {
                $value = (int) $value;
            }

            $result[$key] = $value;
        }
        $result   = array_merge( $result, $addons );
        $settings = json_encode( $result );
        return "'{$settings}'";
    }

    /**
     * @param $area
     * @param $multiplier
     * @return mixed
     */

    /**
     * TODO: Add description here.
     */
    public static function multiplyArrayValues( $area, $multiplier ) {
        // Convert string '100x100' to array [100, 100]
        if ( is_string( $area ) && strpos( $area, 'x' ) !== false ) {
            $area = explode( 'x', $area );
        }
        // Convert single string '100' to array [100]
        elseif ( is_string( $area ) ) {
            $area = [(int) $area];
        }
        // Convert single value array [100] to array [100]
        elseif ( is_array( $area ) && count( $area ) === 1 ) {
            $area = [$area[0]];
        }

        return array_map( function ( $value ) use ( $multiplier ) {
            return round( $value * $multiplier );
        }, $area );
    }

    /**
     * TODO: Add description here.
     */
    public static function isAdmin() {

        if ( get_current_user_id() == 1 ) {
            return true;
        }

        return false;

    }

    /**
     * @param $error
     */

    /**
     * TODO: Add description here.
     */
    public static function emailError( $error = false, $intervals = 24 ) {

        if (  !  $error ) {
            return;
        }

        $error_hash = md5( $error );

        // Fetch previous timestamp if available
        $last_sent_timestamp = get_option( "ks_email_last_sent_{$error_hash}", 0 );

        // Current timestamp
        $current_timestamp = time();

        // Check if the specified interval has passed since the last email with this subject
        if ( $current_timestamp - $last_sent_timestamp < $intervals * 60 * 60 ) {
            return;
        }

        global $post;

        // Fetch website name
        $website = get_bloginfo( 'name' );

        // Generate the subject
        $subject = 'Website error on ' . $website;

        // Create the message
        $message = "Hi Dom ,<br><br>There was an error on the <strong>{$website}</strong>.<br><br>";
        $message .= "Error message: <strong>{$error}</strong><br>";

        if ( $post->ID ) {
            $message .= 'Error page: ' . get_the_permalink( $post->ID ) . '<br>';
        } else {
            $message .= 'Error website URL: <a href="' . get_bloginfo( 'url' ) . '" target="_blank" rel="noopener noreferrer">' . $name . '</a>';
        }

        // Send the email
        $myForms = MyForms::getInstance();
        $myForms::sendWebmasterEmail( $subject, $message );

        // Update the last sent timestamp for this subject
        update_option( "ks_email_last_sent_{$error_hash}", $current_timestamp );
    }

    /**
     * @param $inputArray
     * @param $keyName
     * @return mixed
     */

    /**
     * TODO: Add description here.
     */
    public static function getValuesFromKey( $inputArray, $keyName ) {
        // Check if $inputArray is not an array or $keyName is not a string
        if (  !  is_array( $inputArray ) || !  is_string( $keyName ) || empty( $keyName ) ) {
            return false;
        }

        // Initialize an empty array to store the output
        $outputArray = [];

        // Loop through each item in the input array
        foreach ( $inputArray as $key => $subArray ) {
            // Check if the current item is an array and contains the specified key
            if ( is_array( $subArray ) && isset( $subArray[$keyName] ) ) {
                // Add the value associated with the specified key to the output array
                $outputArray[$key] = $subArray[$keyName];
            }
        }

        // Return false if the output array is empty, otherwise return the output array
        return empty( $outputArray ) ? false : $outputArray;
    }

    /**
     * TODO: Add description here.
     */
    public static function getCurrentPageUrl() {
        global $wp;
        $url = add_query_arg( $wp->query_vars, home_url( $wp->request ) );
        return esc_url( $url );
    }

    /**
     * TODO: Add description here.
     */
    public static function isDeveloper() {

        // Ensure the function exists, as it's a part of WordPress
        if ( function_exists( 'wp_get_current_user' ) ) {
            $current_user = wp_get_current_user();
            // Replace 'info@redfrogstudio.co.uk' with the developer's email address
            if ( $current_user->user_email === 'info@redfrogstudio.co.uk' ) {
                return true;
            }
        }
        return false;

    }

    /**
     * Method to add or remove the uploads directory path from a given path.
     *
     * @param string $path The path to process.
     * @param bool $add If true, adds the uploads directory path; if false, removes it.
     * @return string The processed path.
     */
    public static function uploadsDir( $path, $add = false ) {
        // Get the base path of the WordPress uploads directory.
        $uploads_dir       = wp_upload_dir();
        $uploads_base_path = trailingslashit( $uploads_dir['basedir'] ); // Ensure there's a trailing slash.

        // If $add is true, add the uploads directory path if it's not already present.
        if ( $add ) {
            if ( strpos( $path, $uploads_base_path ) === false ) {
                $path = $uploads_base_path . ltrim( $path, '/' ); // Ensure no leading slash on $path.
            }
        }
        // If $add is false, remove the uploads directory path if it's present.
        else {
            if ( strpos( $path, $uploads_base_path ) === 0 ) {
                $path = ltrim( substr( $path, strlen( $uploads_base_path ) ), '/' ); // Ensure no leading slash on result.
            }
        }

        return $path;
    }

}