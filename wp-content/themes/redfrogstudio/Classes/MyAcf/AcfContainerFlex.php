<?php
namespace Kickstarter;
require_once __DIR__ . '/AcfHelpers.php';
/**
 * Trait AcfContainerFlex
 *
 * This trait provides a suite of helper methods to manage ACF (Advanced Custom Fields) flex content.
 */
trait AcfContainerFlex {

    /**
     * Register action to modify WordPress 'the_content'
     *
     * This method registers an action that modifies the content of WordPress posts
     * by appending additional ACF (Advanced Custom Fields) content.
     *
     * @return void
     */
    public static function registerAcfContainerFlex() {

        add_action( 'the_content', function ( $post_content ) {

            $post    = get_post();
            $post_id = $post->ID;

            // Retrieve ACF component fields from the post meta
            $component_fields = get_post_meta( $post_id, 'components', true );

            // Early return if no ACF component fields are found
            if ( empty( $component_fields ) ) {
                return $post_content;
            }

            $helpers    = MyHelpers::getInstance();
            $MyAcf      = AcfHelpers::getInstance();
            $theme_data = MyHelpers::getThemeData();

            // Apply initial filters to modify the post content
            $post_content = self::applyInitialFilters( $post_content, $helpers, $theme_data );

            $data = [];

            foreach ( $component_fields as $index => $row ) {
                $data = [
                    'post_id'   => $post_id,
                    'index'     => $index,
                    'component' => 'components',
                    'row'       => $row
                ];

                // Check if the component should be displayed based on scheduling rules
                $schedule = ks_component_scheduling( $data, $theme_data );

                if ( $helpers::IsSelectedComponent( $row ) && $schedule ) {
                    $post_content = self::appendComponentContent( $post_content, $row, $data, $helpers, $theme_data, $MyAcf );
                }
            }

            // Apply final filters to modify the post content
            return self::applyFinalFilters( $post_content, $helpers, $theme_data, $MyAcf );
        }, 10 );
    }

    /**
     * Apply initial filters to the post content
     *
     * This method is responsible for applying initial filters
     * that may modify the beginning of the post content.
     *
     * @param string $content The original post content.
     * @param object $helpers An instance of the MyHelpers class.
     * @param array  $theme_data Theme data array.
     * @return string Modified post content.
     */
    private static function applyInitialFilters( $content, $helpers, $theme_data ) {
        return apply_filters( '_ks_component_before', $content, $helpers, $theme_data );
    }

    /**
     * Append ACF component content to the post content
     *
     * This method appends ACF component content to the WordPress post content.
     *
     * @param string $post_content The original post content.
     * @param string $row The ACF component row.
     * @param array  $data ACF component data.
     * @param object $helpers An instance of the MyHelpers class.
     * @param array  $theme_data Theme data array.
     * @param object $MyAcf An instance of the AcfHelpers class.
     * @return string Modified post content.
     */
    private static function appendComponentContent( $post_content, $row, $data, $helpers, $theme_data, $MyAcf ) {
        $filterName = self::generateFilterName( $row );
        $content    = $MyAcf::stripShortcodeFromTag( apply_filters( $filterName, null, $data, $helpers, $theme_data, $MyAcf ) );

        $post_content .= apply_filters( '_ks_component_before_in_loop', null, $data, $helpers, $theme_data, $MyAcf );
        $post_content .= apply_filters( '_ks_component_container', $content, $helpers, $data, $MyAcf );
        $post_content .= apply_filters( '_ks_component_after_in_loop', null, $data, $helpers, $theme_data, $MyAcf );

        return $post_content;
    }

    /**
     * Apply final filters to the post content
     *
     * This method is responsible for applying final filters
     * that may modify the end of the post content.
     *
     * @param string $post_content The original post content.
     * @param object $helpers An instance of the MyHelpers class.
     * @param array  $theme_data Theme data array.
     * @param object $MyAcf An instance of the AcfHelpers class.
     * @return string Modified post content.
     */
    private static function applyFinalFilters( $post_content, $helpers, $theme_data, $MyAcf ) {
        $post_content .= apply_filters( '_ks_component_after', null, $helpers, $theme_data, $MyAcf );
        return apply_filters( '_ks_component_all_html', $post_content, $helpers, $theme_data, $MyAcf );
    }

    public static function stripShortcodeFromTag() {
        $pattern     = array( '#<p>\s*\[(.+?)\]\s*</p>#s', '#<p>\s*(.+?)\s*</p>#s', '#\]<br\s*/?>\s*\[#', '#\]<br\s* /?>\s*#' );
        $replacement = array( '[$1]', '<p>$1</p>', '][', ']' );
        return preg_replace( $pattern, $replacement, $content );
    }

    /**
     * Generate a filter name based on the ACF component row
     *
     * @param string $row The ACF component row.
     * @return string The generated filter name.
     */
    private static function generateFilterName( $row ) {
        return '_ks_component_' . $row;
    }
}