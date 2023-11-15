<?php
namespace Kickstarter;
use ScssPhp\ScssPhp\Compiler;
use ScssPhp\ScssPhp\compileString;
use ScssPhp\ScssPhp\OutputStyle;

trait TraitMyHelpersCustomCss {

    /**
     * @var string
     */
    private static $customCssStyles = '';

    /**
     * @return mixed
     */
    public static function CustomCssFileNamePrefix() {

        switch ( true ) {
        case is_singular():
            $prefix = 'post-';
            $prefix .= get_the_ID();
            break;
        case is_archive():
        case is_date():
            $prefix = 'archive';
            break;
        case is_search():
            $prefix = 'search';
            break;
        case is_404():
            $prefix = '404';
            break;
        case is_tax():
        case is_category():
        case is_tag():
            $term   = get_queried_object();
            $prefix = 'cat-' . $term->term_id; // Note: it should be term_id, not id
            break;
        case is_home():
            $prefix = 'home';
            break;
        case is_front_page():
            $prefix = 'front';
            break;
        case is_author():
            $prefix = 'author-' . get_queried_object_id();
            break;
        case is_attachment():
            $prefix = 'attachment-' . get_the_ID();
            break;
        default:
            // Default case if none of the above match
            $prefix = 'default';
            break;
        }
        return $prefix;
    }

    public static function CustomCssFileName() {
        $file = "custom.css";
        return apply_filters( '_ks_CustomCssFileName', $file );
    }

    /**
     * AddCustomCss - Adds custom CSS to a global stylesheet.
     * This method accepts SCSS as input, compiles it to compressed CSS, and adds it to a global storage array.
     * It then writes the concatenated CSS from the storage array to a physical file.
     * The method uses a unique ID to ensure that it doesn't process the same CSS multiple times within the same request.
     *
     * @param string|false $custom_css The custom SCSS code to be compiled and added. Defaults to 'false'.
     * @return void
     */

    public static function AddCustomCss( $custom_css = false ) {

        self::$customCssStyles .= $custom_css;

        $file = get_stylesheet_directory() . "/" . self::CustomCssFileName();
        // If no CSS is provided and the file exists, delete it.
        if (  !  self::$customCssStyles ) {
            if ( file_exists( $file ) ) {
                unlink( $file );
            }
            return;
        }

        // Initialize the SCSS compiler and set its output style to compressed.
        $scss = new Compiler();
        $scss->setOutputStyle( OutputStyle::COMPRESSED );
        // Compile the incoming SCSS code into CSS.
        $compiled_css = $scss->compileString( self::$customCssStyles )->getCss();

        // Create the file if it doesn't exist.
        if (  !  file_exists( $file ) ) {
            touch( $file );
        }

        // OLD METHOD
        file_put_contents( $file, $compiled_css, LOCK_EX );

        // Read existing styles from the file
        $existing_styles = file_get_contents( $file );

        // Check if the new styles already exist in the file, append if not
        if ( strpos( $existing_styles, $compiled_css ) === false ) {
            file_put_contents( $file, $existing_styles . $compiled_css, LOCK_EX );
        }

    }

    /**
     * Compiles SCSS code to CSS.
     *
     * This method takes SCSS code as input, compiles it to CSS using the SCSSPHP library,
     * and returns the resulting CSS code. If the $inline parameter is set to true,
     * the CSS code will be wrapped in a <style> element.
     *
     * @param string $scss   The SCSS code to compile.
     * @param bool   $inline Whether to wrap the output CSS in a <style> element.
     * @return string|null   The compiled CSS code, or null if no SCSS code was provided.
     */
    public static function Scss2Css( $scss, $inline = false ) {

        if ( $scss ) {

            // Create a new SCSS compiler instance
            $styles = new Compiler();

            // Set the output style to compressed
            $styles->setOutputStyle( OutputStyle::COMPRESSED );

            // Initialize the output string, optionally with an opening <style> tag
            $output = $inline ? '<style>' : '';

            // Compile the SCSS code to CSS and append it to the output string
            $output .= $styles->compileString( $scss )->getCss();

            // Optionally append a closing </style> tag to the output string
            $output .= $inline ? '</style>' : '';

            return $output;
        }

        return null; // Return null if no SCSS code was provided
    }

}