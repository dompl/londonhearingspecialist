<?php
// Importing necessary classes from the Extended ACF Fields namespace
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\PageLink;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;

// Adding filters for admin theme options in the footer settings
add_filter( 'ks_admin_theme_options_footer_settings', 'ks_admin_theme_options_footer_settings_acf_general' );
add_filter( 'ks_admin_theme_options_footer_settings', 'ks_admin_theme_options_footer_settings_acf_navigation' );

function london_footer_navs() {
    return apply_filters( 'london_footer_navs', ['services' => 'Services', 'aids' => 'Hearing Aids', 'about' => 'About US'] );
}

/**
 * Adds navigation related fields to the footer settings in the admin theme options.
 *
 * @param array $fields The existing array of fields.
 * @return array The modified array of fields with added navigation fields.
 */
function ks_admin_theme_options_footer_settings_acf_navigation( $fields ) {
    // Adding an accordion field for navigation settings
    $fields[] = Accordion::make( 'Navigation', wp_unique_id() )->instructions( 'Add main footer navigation' );

    // Defining navigation items
    $navs = london_footer_navs();

    // Loop through each navigation item to create a group of fields
    foreach ( $navs as $k => $v ) {
        $fields[] = Group::make( "$v navigation", "_$k" )
            ->instructions( 'Define navigation for ' . strtolower( $v ) )
            ->fields( [
                Text::make( "$v navigation title", "title" )
                    ->instructions( 'Add ' . strtolower( $v ) . ' navigation title' )
                    ->defaultValue( $v ),
                PageLink::make( "$v navigation items", "links" )
                    ->instructions( 'Add ' . strtolower( $v ) . ' navigation items' )
                    ->postTypes( ['page', 'london_locations', 'clinic_services'] )
                    ->allowNull()
                    ->allowMultiple()
            ] )
            ->layout( 'row' );
    }
    $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->instructions( 'Endpoint' )->endpoint();

    return $fields;
}

/**
 * Adds general information related fields to the footer settings in the admin theme options.
 *
 * @param array $fields The existing array of fields.
 * @return array The modified array of fields with added general information fields.
 */
function ks_admin_theme_options_footer_settings_acf_general( $fields ) {
    // Adding an accordion field for general information
    $fields[] = Accordion::make( 'General Information', wp_unique_id() )->instructions( 'General Footer information' );

    // Adding a field for the main logo
    $fields[] = Image::make( 'Main footer logo', 'footer_logo' )
        ->instructions( 'Add main footer logo. SVG required' )
        ->returnFormat( 'url' )
        ->previewSize( 'medium' )
        ->required();

    // Default message for the 'About' section
    $message = 'Your auditory wellness is our priority at London Hearing Specialist. Spanning seven clinics, our dedicated team provides personalized hearing solutions, ensuring a comforting journey towards better auditory health.';

    // Adding a textarea field for the 'About' section
    $fields[] = Textarea::make( 'About', 'footer_about' )
        ->newLines( 'br' )
        ->instructions( 'Add short about description' )
        ->defaultValue( $message )
        ->rows( 3 )
        ->required();
    return $fields;
}