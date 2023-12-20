<?php
use AcfPlugins\UniqueId;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\WysiwygEditor;
// Add custom tables to the London admin theme options
add_filter( 'london_admin_theme_options', function ( $fields ) {
    $fields['tables']   = [];
    $fields['tables'][] = Repeater::make( 'Custom Tables', 'table' )
        ->instructions( 'Add custom tables. Please remember, the ID has to be unique for any of the tables. Example usage <strong>[table id="ear-wax-removal-pricing"]</strong>' )
        ->fields( [
            UniqueId::make( 'Table ID', 'table_id' ),
            WysiwygEditor::make( 'Table HTML', 'table_html' )
                ->instructions( 'Add table HTML. You can use an online generator, like <a href="https://divtable.com/generator/" target="_blank">this one</a>, to generate table HTML' )
                ->mediaUpload( false )
                ->tabs( 'all' )
                ->toolbar( 'tables_toolbar' )
                ->required()
        ] )
        ->collapsed( 'table_id' )
        ->buttonLabel( 'Add Table' )
        ->layout( 'block' );
    return $fields;
} );

// Create a shortcode for displaying custom tables
add_shortcode( 'table', function ( $atts ) {

    if ( empty( $atts['id'] ) || !  function_exists( 'london_table_data' ) ) {
        return;
    }
    $data = london_table_data( $atts['id'] );
    if ( $data ) {
        $html = '<div class="london-table' . (  !  empty( $atts['style'] ) ? ' ' . $atts['style'] : '' ) . '">';
        $html .= $data;
        $html .= '</div>';
    }
    return $html;
} );

// Retrieve table data based on the table ID
function london_table_data( $table_id ) {

    $tables = get_transient( 'london_tables' );

    if ( false === $tables ) {
        $tables   = [];
        $repeater = get_option( 'options_table' );
        if ( $repeater ) {

            for ( $i = 0; $i < $repeater; $i++ ) {
                $table_id          = get_option( "options_table_{$i}_table_id" );
                $table_html        = get_option( "options_table_{$i}_table_html" );
                $tables[$table_id] = $table_html;
            }

        }
        set_transient( 'london_tables', $tables, 30 * DAY_IN_SECONDS );
    }
    return isset( $tables[$table_id] ) ? $tables[$table_id] : '';
}

// Add a function to delete the transient when ACF options page is saved
add_action( 'acf/save_post', function ( $post_id ) {
    if ( is_admin() && isset( $_GET['page'] ) && $_GET['page'] === 'london-pricing-tables' ) {
        delete_transient( 'london_tables' );
    }
} );