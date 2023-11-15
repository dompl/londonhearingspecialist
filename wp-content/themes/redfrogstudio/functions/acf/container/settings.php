<?php
/**
 * Settings for the container
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Accordion;

function ks_container_settings_data() {

    $settings['widths']['sizes'] = [
        'sm'      => 'Small container',
        'md'      => 'Medium container',
        'lg'      => 'Large container',
        'xl'      => 'Larger container',
        'xxl'     => 'Extra Large container',
        'full'    => 'Full width container',
        'full-nm' => 'Full width container (no margins)'
    ];
    $settings['widths']['titles'] =
        [
        'title'       => 'Set container width',
        'description' => 'Specify the container width. This will apply for according to the screen size'
    ];

    $settings['spacings']['sizes'] = [
        'default' => 'Default spacing (Top, Bottom with increments)'
    ];
    return $settings;
}

add_filter( '_ks_theme_acf_container_fields', function ( $fields ) {

    $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();
    return $fields;

}, 9999999 );