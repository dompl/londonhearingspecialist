<?php
namespace Kickstarter;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Tab;
use Kickstarter\MyAcf;
use Kickstarter\MyHelpers;

require_once __DIR__ . '/MyAcf/AcfContainerSchedule.php';

/**
 * Class MyAcf
 * A class to manage ACF components in the Kickstarter theme.
 */
class MyAcf {

    /**
     * @var array Holds the layout configurations.
     */
    public $layouts = [];
    /**
     * @var mixed
     */
    private static $instance = null;
    /**
     * Trait for scheduling ACF containers.
     */
    use AcfContainerSchedule;

    /**
     * Singleton pattern instance.
     *
     * @return MyAcf Returns the singleton instance of the MyAcf class.
     */
    public static function getInstance() {
        if ( self::$instance === null ) {
            self::$instance = new MyAcf();
        }
        return self::$instance;
    }

    /**
     * Appends custom HTML to the component based on its row identifier.
     *
     * This method attaches to a WordPress filter hook specific to the component, identified by its row identifier.
     * It appends the provided HTML to any existing HTML for that component.
     *
     * @param string $html The HTML to append to the component.
     */
    public static function Html() {
        $row = self::getRowIdentifier( false, 2 ); // Increment depth by 1 to account for this new function call
        return '_ks_component_' . $row;
    }

    /**
     * Registers ACF fields as a new component.
     *
     * @param string $name The display name of the component.
     * @param array $fields The ACF fields for the component.
     * @param array $settings Additional settings.
     * @param mixed $row The row identifier.
     * @param int $depth Stack depth for row identifier.
     */
    public static function registerComponentFields(
        string $name = 'Component name',
        array $fields = [],
        array $settings = ['container'],
        $row = false,
        int $depth = 2
    ): void {

        if ( empty( $fields ) ) {
            return; // Early return if there are no fields
        }

        $row = self::getRowIdentifier( $row, $depth );
        add_filter( 'ks_acf_layout', function ( $layouts ) use ( $name, $fields, $settings, $row, $depth ) {
            return self::makeComponentWithSettings( $layouts, $name, $fields, $settings, $row, $depth );
        }, 100 );
    }

    /**
     * Creates a new component with the provided settings and merges it with existing layouts.
     *
     * @param array $layouts Existing layouts to which the new component will be added.
     * @param string $name Display name of the new component.
     * @param array $fields ACF fields for the new component.
     * @param array $settings Additional settings for the new component.
     * @param mixed $row Identifier for the row in which the new component should be placed.
     * @param int $depth Stack depth for row identifier.
     *
     * @return array Returns the updated layouts after adding the new component.
     */
    private static function makeComponentWithSettings(
        array $layouts,
        string $name,
        array $fields,
        array $settings,
        $row,
        int $depth
    ): array {
        return self::MakeComponent(
            label: $name,
            fields: $fields,
            existingLayouts: $layouts,
            settings: $settings,
            row: $row,
            depth: $depth
        );
    }

    /**
     * Register a new component by adding it to the '_ks_theme_add_components_choices' filter.
     *
     * @param string $component The name of the component to register.
     */
    public static function registerComponent( string $component, $row = false ): void {
        // Validate the component parameter
        if ( empty( $component ) ) {
            return;
        }
        $component_row = ( $row == false ) ? self::getRowIdentifier( false, 2 ) : $row;

        // Add the component to the '_ks_theme_add_components_choices' filter
        add_filter( '_ks_theme_add_components_choices', function ( $choices ) use ( $component, $component_row ) {
            // Associate the component with a key
            $newComponent = [$component_row => $component];

            // Merge the new component into the existing choices and return
            $mergedChoices = array_merge( $choices, $newComponent );
            return $mergedChoices;
        }, 5, 1 );
    }

    /**
     * Adds a 'Container Settings' tab to the ACF fields and applies custom filters.
     *
     * This method is used to add a 'Container Settings' tab to the Advanced Custom Fields (ACF)
     * for the given row. It also applies custom WordPress filters to allow further customization
     * of the ACF container fields.
     *
     * @param array $fields Existing ACF fields to which the 'Container Settings' tab will be added.
     * @param mixed $row Identifier for the row in which the fields are placed.
     * @param bool $use_container Flag to indicate whether to use the container. Default is true.
     *
     * @return array Returns the updated ACF fields after adding the 'Container Settings' tab.
     */
    public static function AcfContainerUse( array $fields, $row, bool $use_container = true ): array {
        // Get an instance of the MyHelpers class
        $helpers = MyHelpers::getInstance();

        // Add 'Container Settings' tab to the ACF fields
        $fields[] = Tab::make( 'Container Settings', wp_unique_id() )->placement( 'left' );

        // Apply custom WordPress filters for further customization
        return apply_filters( '_ks_theme_acf_container_fields', $fields, $helpers, MyHelpers::getThemeData(), $use_container, $row );
    }

    /**
     * Retrieves or generates a unique row identifier.
     *
     * This method aims to get a unique identifier for a row. If no identifier is provided,
     * it uses the PHP debug_backtrace function to infer the calling method's directory name,
     * which is then sanitized to serve as the row identifier.
     *
     * @param mixed $row Existing row identifier. If false, a new identifier is generated.
     * @param int $depth Depth to which backtrace should be done to identify the calling method. Default is 2.
     *
     * @return string Returns the row identifier.
     */
    private static function getRowIdentifier( $row, int $depth = 2 ): string {
        // If a row identifier is not provided, generate one.
        if ( $row === false ) {
            // Get the backtrace information to identify the calling method.
            $backtrace = debug_backtrace( DEBUG_BACKTRACE_IGNORE_ARGS | DEBUG_BACKTRACE_PROVIDE_OBJECT, $depth );
            $caller    = $backtrace[1];

            // Check if the 'file' attribute exists in the backtrace.
            if ( isset( $caller['file'] ) ) {
                // Get the directory name of the calling file.
                $directoryPath = dirname( $caller['file'] );

                // Sanitize the directory name to serve as the row identifier.
                $row = strtolower( basename( $directoryPath ) );
                $row = preg_replace( '/[^a-z0-9_]/', '_', $row );
            }
        }

        return $row;
    }

    /**
     * Creates a new ACF layout component and merges it with existing layouts.
     *
     * This method is used to create a new Advanced Custom Fields (ACF) layout component
     * using the provided label, fields, and settings. It then merges this new component
     * with the existing layouts.
     *
     * @param string|bool $label The label of the new component. If false, a default label is used.
     * @param array $fields The ACF fields for the new component.
     * @param array $existingLayouts Existing layouts to which the new component will be added.
     * @param array $settings Additional settings for the new component.
     * @param mixed $row Identifier for the row in which the new component should be placed.
     * @param int $depth Stack depth for row identifier.
     *
     * @return array Returns the updated layouts after adding the new component.
     */
    public static function MakeComponent(
        $label = false,
        array $fields = [],
        array $existingLayouts = [],
        array $settings = ['container'],
        $row = false,
        int $depth = 2
    ): array {
        // Early return if no fields are provided.
        if ( empty( $fields ) ) {
            return $existingLayouts;
        }

        // Apply additional settings filter.
        $settings = apply_filters( '_ks_component_additional_settings', $settings );

        // Default label if none is provided.
        if ( $label === false ) {
            $label = 'Missing Layout Name';
            error_log( 'Missing Layout name' );
        }

        // Fetch theme data.
        $data = MyHelpers::getThemeData();

        // Apply filters to the fields before and after.
        $fields = apply_filters( '_ks_theme_acf_fields_before', $fields );
        $fields = apply_filters( '_ks_theme_acf_fields', $fields );

        // Add container settings if applicable.
        if ( in_array( 'container', $settings ) ) {
            $fields = self::AcfContainerUse( $fields, $row );
        }

        // Apply any scheduled ACF container changes.
        $fields = self::AcfContainerSchedule( $fields );

        // Generate or retrieve the row identifier.
        $row = self::getRowIdentifier( $row, $depth );

        // Create the new layout.
        $newLayout = Layout::make( $label, $row )
            ->layout( apply_filters( '_ks_layout_block_layout', 'block', $row, $data ) )
            ->fields( $fields );

        // Merge the new layout into the existing layouts.
        if ( $row ) {
            $existingLayouts[$row] = $newLayout;
        } else {
            $existingLayouts = array_merge( $existingLayouts, [$newLayout] );
        }

        return $existingLayouts;
    }

}