<?php
namespace London;
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Checkbox;
use Extended\ACF\Fields\Group;
use Extended\ACF\Fields\Layout;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Fields\WysiwygEditor;

class Acf {

    public function __construct() {
        add_filter( 'acf/fields/wysiwyg/toolbars', [$this, 'HeaderAcfFieldsWysiwyg'] ); // Customize ACF WYSIWYG toolbars
    }

    public static function ButtonAcfFields( $prefix = '', $tab = false ) {

        $button = [];
        $fields = [];
        $colors = ks_theme_custom_colors_array();
        if ( $tab == true ) {
            $button[] = Tab::make( 'Buttons', wp_unique_id( $prefix ) )->placement( 'left' );
        }
        $button[] = Checkbox::make( 'Predefined buttons', "{$prefix}predefined" )->instructions( 'Select one of the predefined call for action buttons' )->choices( apply_filters( 'london_predefined_buttons', ['book' => 'Book Appointment'] ) )->layout( 'horizontal' );

        $fields[] = Link::make( 'Link', "link" )->instructions( 'Add button link' )->required();
        if (  !  empty( $colors ) ) {
            $fields[] = Select::make( 'Button colour', "color" )->instructions( 'Select button colour' )->choices( $colors )->allowNull()->stylisedUi();
        }
        $button[] = Repeater::make( 'Custom buttons', "{$prefix}buttons" )->instructions( 'Add custom call for action buttons' )->fields( $fields )->collapsed( 'link' )->buttonLabel( 'Add button' )->layout( 'table' );

        return $button;

    }

    public static function ButtonAcfHtml( $data, $prefix = '' ) {

        $html       = '';
        $buttons    = get_component( $prefix . 'buttons', $data );
        $predefined = get_component( $prefix . 'predefined', $data );

        if ( $buttons ) {

            $html .= '<div class="buttons-wrapper">';

            if (  !  empty( $predefined ) ) {
                if ( in_array( 'book', $predefined ) ) {
                    $html .= do_shortcode( '[book_appointment]' );
                }
            }

            for ( $i = 0; $i < $buttons; $i++ ) {

                $button         = [];
                $button['link'] = get_component( $prefix . "buttons_{$i}_link", $data );

                if ( empty( $button['link'] ) ) {
                    continue;
                }

                $button['color']         = get_component( "buttons_{$i}_color", $data );
                $button['link']['title'] = isset( $button['link']['title'] ) && !  empty( $button['link']['title'] ) ? $button['link']['title'] : __( 'Discover More', 'london' );
                $html .= '<a href="' . esc_url( $button['link']['url'] ) . '" class="button ' . esc_html( $button['color'] ) . '" title="' . wp_strip_all_tags( $button['link']['title'], true ) . '">' . $button['link']['title'] . '</a>';

            }

            $html .= '</div>';
            return $html;
        }

    }

    /**
     * Creates ACF fields for the header.
     *
     * This method constructs an array of Advanced Custom Fields (ACF) for the header section of a theme.
     * It includes a tab for custom heading, a group for batch text and background color, and another group for
     * main heading text and its HTML tag. These fields are essential for customizing the header's appearance and structure.
     *
     * @return array The array of ACF fields.
     */
    public static function HeaderAcfFields() {

        $fields = [];
        // Create a new tab for the custom heading, with a unique ID for each instance
        $fields[] = Tab::make( 'Custom heading', wp_unique_id() )->placement( 'left' );

        $fields[] = Accordion::make( 'Heading title', wp_unique_id() )->instructions( 'Heading title and batch and layout' );

        $fields[] = Select::make( 'Style', 'style' )->instructions( 'Select heading style' )->choices( ['center' => 'Centered', 'left' => 'Left aligned'] )->defaultValue( 'left' )->stylisedUi()->required();

        // Retrieve custom color options for the theme
        $colors = ks_theme_custom_colors_array();
        if (  !  empty( $colors ) ) {
            // Create a group field for batch text and background color
            $fields[] = Group::make( 'Batch', 'batch' )
                ->instructions( 'Add custom heading batch' )
                ->fields( [
                    Text::make( 'Batch text', 'text' )
                        ->instructions( 'Add custom batch text' )
                        ->required(),
                    Select::make( 'Background colour', 'color' )
                        ->instructions( 'Add custom batch colour' )
                        ->required()
                        ->choices( $colors )
                        ->allowNull()
                        ->stylisedUi()
                ] )
                ->layout( 'row' );
        }

        // Create a group field for main heading text and tag selection
        $fields[] = Group::make( 'Heading text', 'text' )
            ->instructions( 'Add heading text' )
            ->fields( [
                Textarea::make( 'Main Text', 'text' )->newLines( 'br' )->instructions( 'Main heading text' )->rows( 2 )->required(),
                Select::make( 'Heading Tag', 'tag' )
                    ->instructions( 'Select tag for your heading' )
                    ->required()
                    ->choices( ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'] )
                    ->stylisedUi()
            ] )
            ->layout( 'row' );

        $fields[] = Accordion::make( 'Heading description', wp_unique_id() )->instructions( 'Additional heading description' );
        $fields[] = WysiwygEditor::make( 'Description', 'description' )->instructions( 'Additional heading description' )->mediaUpload( false )->tabs( 'all' )->toolbar( 'heading_toolbar' );

        $fields[] = Accordion::make( 'Heading call for actions', wp_unique_id() )->instructions( 'Additional heading call for actions' );
        $fields   = array_merge( $fields, self::ButtonAcfFields() );

        $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();

        return $fields;

    }

    public static function HeaderAcfHtml( $data ) {

        $html = '';

        $style = get_component( 'style', $data );

        $title       = get_component( 'text', $data, 'text' );
        $tag         = get_component( 'text', $data, 'tag' );
        $batch       = get_component( 'batch', $data, 'text' );
        $batch_color = get_component( 'color', $data, 'batch' );
        $description = get_component( 'description', $data );

        $html .= '<div class="london-heading ' . $style . '">';

        if (  !  empty( $batch ) ) {
            $batch_color = $batch_color ?? 'brand';
            $html .= '<div class="batch"><span class="button small ' . $batch_color . '">' . $batch . '</span></div>';
        }

        if (  !  empty( $title ) ) {
            $tag = $tag ?? 'h2';
            $html .= '<div class="title"><' . $tag . '>' . $title . '</' . $tag . '></div>';
        }

        if (  !  empty( $description ) ) {
            $html .= '<div class="description london-content">' . wpautop( $description ) . '</div>';
        }

        $html .= self::ButtonAcfHtml( $data );

        $html .= '</div>';

        return $html;

    }

    public function HeaderAcfFieldsWysiwyg( $toolbars ) {
        $toolbars['Heading Toolbar']    = [];
        $toolbars['Heading Toolbar'][1] = ['bold', 'link', 'aligncenter', 'bullist', 'alignleft', 'justifyfull', 'removeformat'];
        return $toolbars;
    }

}
new \London\Acf();