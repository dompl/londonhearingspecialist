<?php
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Text;
use Kickstarter\MyHelpers;
// Add custom tables to the London admin theme options
add_filter( 'london_admin_theme_options', function ( $fields ) {
    $fields['team_members']   = [];
    $fields['team_members'][] = Repeater::make( 'Team Members', 'team_members' )
        ->instructions( 'Add team members' )
        ->fields( [
            Image::make( 'Image', 'i' )->returnFormat( 'id' )->previewSize( 'mini-thumbnail' )->required(),
            Text::make( 'Name', 'n' )->required(),
            Text::make( 'Specialization', 's' )->required(),
            Text::make( 'Addon', 'a' )->required()
        ] )
        ->collapsed( 'i' )
        ->buttonLabel( 'Add Team Member' )
        ->layout( 'row' );
    return $fields;
} );

// Retrieve table data based on the faqs ID
function london_team_members_data( $selected = false ) {

    $team_members = get_transient( 'london_team_members' );

    if ( false === $team_members ) {
        $team_members = [];
        $repeater     = get_option( 'options_team_members' );
        if ( $repeater ) {

            for ( $i = 0; $i < $repeater; $i++ ) {
                $image          = get_option( "options_team_members_{$i}_i" );
                $name           = get_option( "options_team_members_{$i}_n" );
                $specialization = get_option( "options_team_members_{$i}_s" );
                $addon          = get_option( "options_team_members_{$i}_a" );

                $team_members[$i] = [$image, $name, $specialization, $addon];
            }

        }
        set_transient( 'london_team_members', $team_members, 30 * DAY_IN_SECONDS );
    }

    return $team_members;
}

// Add a function to delete the transient when ACF options page is saved
add_action( 'acf/save_post', function ( $post_id ) {
    if ( is_admin() && isset( $_GET['page'] ) && $_GET['page'] === 'london-team-members' ) {
        delete_transient( 'london_team_members' );
    }
} );

add_filter( '_london_acf_component_helper_shortcodes', function ( $fields ) {
    $html = "
		<h4>Usage:</h4>
		<p><code>[team_members]</code></p>
		<p>This will display the list of the team members. To edit/add/remove team members please navigate to <a href='/wp-admin/admin.php?page=london-team-members' target='_blank'>this page</a></p>
	";
    $fields[] = Message::make( '<h3><code>[team_members]</code></h3>' )->message( $html );
    return $fields;
} );

add_shortcode( 'team_members', function ( $atts ) {

    // Define default values for the attributes
    $atts = shortcode_atts( array(
        'display' => 'default'
    ), $atts, 'team_members' );

    $members = london_team_members_data();

    if ( empty( $members ) ) {

        return;

    }
    $size = [250, 250];
    $min  = [320, 320];
    $html = '<div class="london-team-members">';
    foreach ( $members as $member ) {
        $html .= '<div class="item">';
        $html .=  !  empty( $member[0] ) ? MyHelpers::PictureSource( image : $member[0], size: $size, min: $min, custom_container: 'image' ): '';
        $html .= '<div class="content">';
        $html .= '<div class="inner">';
        $html .=  !  empty( $member[1] ) ? '<div class="name"><h3>' . $member[1] . '</h3></div>' : '';
        $html .=  !  empty( $member[2] ) ? '<div class="specialization">' . $member[2] . '</div>' : '';
        $html .=  !  empty( $member[3] ) ? '<div class="addon">' . $member[3] . '</div>' : '';
        $html .= '</div>';
        $html .= '</div>';
        $html .= '</div>';
    }
    $html .= '</div>';

    return $html;

} );