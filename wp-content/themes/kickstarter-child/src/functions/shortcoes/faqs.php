<?php

use AcfPlugins\UniqueId;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\WysiwygEditor;

add_action( 'admin_head', function () {
    if ( isset( $_GET['page'] ) && $_GET['page'] == 'london-faqs' ) {
        echo '<style>.acf-field[data-name="id"] {display:block!important;}</style>';
    }
} );

// Add custom tables to the London admin theme options
add_filter( 'london_admin_theme_options', function ( $fields ) {
    $fields['faqs']   = [];
    $fields['faqs'][] = Repeater::make( 'Frequently asked questions', 'faqs' )
        ->instructions( 'Add Frequently asked questions.Example usage <strong>[faqs id="6581430267f52,658143ec526a2"]</strong>' )
        ->fields( [
            UniqueId::make( 'ID', 'id' ),
            Text::make( 'Question', 'q' )
                ->required(),
            WysiwygEditor::make( 'Answer', 'a' )
                ->mediaUpload( false )
                ->tabs( 'all' )
                ->toolbar( 'tables_toolbar' )
                ->required()
        ] )
        ->collapsed( 'q' )
        ->buttonLabel( 'Add Question' )
        ->layout( 'row' );
    return $fields;
} );

// Retrieve table data based on the faqs ID
function london_faq_data( $selected = false ) {

    $faqs = get_transient( 'london_faqs' );

    if ( false === $faqs ) {
        $faqs     = [];
        $repeater = get_option( 'options_faqs' );
        if ( $repeater ) {

            for ( $i = 0; $i < $repeater; $i++ ) {
                $id       = get_option( "options_faqs_{$i}_id" );
                $question = get_option( "options_faqs_{$i}_q" );
                $answer   = get_option( "options_faqs_{$i}_a" );

                $faqs[$id] = [$question, $answer];
            }

        }
        set_transient( 'london_faqs', $faqs, 30 * DAY_IN_SECONDS );
    }
    if (  !  empty( $faqs[$selected] ) ) {
        return $faqs[$selected];
    }
    return $faqs;
}

// Add a function to delete the transient when ACF options page is saved
add_action( 'acf/save_post', function ( $post_id ) {
    if ( is_admin() && isset( $_GET['page'] ) && $_GET['page'] === 'london-faqs' ) {
        delete_transient( 'london_faqs' );
    }
} );

add_shortcode( 'faq', function ( $atts ) {
    $data = london_faq_data();
    if ( empty( $data ) || empty( $atts['id'] ) || !  function_exists( 'london_faq_data' ) ) {
        return;
    }
    $items = explode( ',', str_replace( ' ', '', $atts['id'] ) );

} );
add_shortcode( 'faqs', function ( $atts ) {
    $data = london_faq_data();
    if ( empty( $data ) || empty( $atts['id'] ) || !  function_exists( 'london_faq_data' ) ) {
        return;
    }
    $items = explode( ',', str_replace( ' ', '', $atts['id'] ) );

    $output = '<ul class="london-faqs">';
    foreach ( $items as $item ) {
        if ( isset( $data[$item] ) ) {
            $question = $data[$item][0];
            $answer   = $data[$item][1];
            $output .= '<li><div class="question"><span>' . $question . '</span><i class="plus-solid"></i></div><div class="answer">' . $answer . '</div></li>';
        }
    }
    $output .= '</ul>';

    return $output;
} );