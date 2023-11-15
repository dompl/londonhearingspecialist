<?php
/**
 * ACF Fields for the container
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Select;
use Kickstarter\MyHelpers;
// Add container widths to the container settings
add_filter( '_ks_theme_acf_container_fields', function ( $fields, $helpers, $data, $use_container, $row ) {

    if (  !  $use_container || apply_filters( '_ks_container_width_use', true, $data, $helpers, $row ) == false ) {
        return $fields;
    }

    $settings = ks_container_settings_data();
    $widths   = $settings['widths']['sizes'];
    $titles   = $settings['widths']['titles'];
    $spacing  = MyHelpers::getThemeData( 'ks_container_widths' );

    $selected = MyHelpers::getSelectedValues( $widths, $spacing );

    if (  !  empty( $selected ) ) {
        // use Extended\ACF\Fields\Accordion;
        $fields[] = Accordion::make( 'Container width', wp_unique_id() )->instructions( 'Settings for the container widths' );

        $fields['container_settings_width'] = Select::make( $titles['title'], 'container_width' )
            ->instructions( $titles['description'] )
            ->choices( $selected )
            ->defaultValue( apply_filters( '_container_width_default_width', 'xxl', $selected ) )
            ->required();
    }

    return $fields;

}, 10, 5 );