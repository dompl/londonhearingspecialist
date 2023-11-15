<?php
namespace Kickstarter;
use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\ButtonGroup;
use Extended\ACF\Fields\Link;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\TrueFalse;

class AcfHelpers {

    /**
     * @var mixed
     */
    private static $instance = null;

    public static function getInstance() {
        if ( self::$instance === null ) {
            self::$instance = new AcfHelpers();
        }
        return self::$instance;
    }

    /**
     * @param $fields
     */
    public static function AcfFields( $fields = false ) {
        switch ( $fields ) {
        case 'zoom':
            return TrueFalse::make( 'Zoom', 'zoom' )->instructions( 'Set to <strong>Yes</strong> to zoom the image on click.' )->stylisedUi();
            break;
        default:
            return;
            break;
        }

    }

    /**
     * @param $use_tab
     */
    public static function AcfButtonFields( $fields = [], $tab = true, $unset = [], $settings = false, $data = [] ) {

        $buttom_fields = [];
        $button        = [];
        $unset         = apply_filters( '_ks_acf_button_fields_unset', $unset, $data );

        $buttom_fields['link'] = Link::make( 'Button link', 'l' )->instructions( 'Add button link' )->required()->returnFormat( 'array' );

        if (  !  in_array( 'all', $unset ) ) {
            if (  !  in_array( 'style', $unset ) ) {

                $buttom_fields['style'] = Select::make( 'Style', 'st' )
                    ->instructions( 'Select button style.' )
                    ->choices( apply_filters( '_ks_acf_button_fields_style', ['default' => 'Default'] ) )
                    ->defaultValue( 'default' )
                    ->returnFormat( 'value' );
            }

            if (  !  in_array( 'size', $unset ) ) {

                $buttom_fields['size'] = Select::make( 'Size', 's' )
                    ->instructions( 'Select button size.' )
                    ->choices( apply_filters( '_ks_acf_button_fields_size', ['default' => 'Default'] ) )
                    ->defaultValue( 'default' )
                    ->returnFormat( 'value' );

            }
            if (  !  in_array( 'color', $unset ) ) {
                $buttom_fields['color'] = Select::make( 'Colour', 'c' )
                    ->instructions( 'Select button colour.' )
                    ->choices( apply_filters( '_ks_acf_button_fields_colour', ['default' => 'Default'] ) )
                    ->defaultValue( 'default' )
                    ->returnFormat( 'value' );
            }

        }

        if ( $tab ) {
            $button['button_tab'] = Tab::make( 'Buttons', wp_unique_id() )->placement( 'left' ); // top or left
        }

        $button['button'] = Repeater::make( 'Custom call for action buttons', 'buttons' )
            ->fields( apply_filters( '_ks_acf_button_fields', $buttom_fields ) )
            ->buttonLabel( 'Add Button' )
            ->pagination( 10 )
            ->collapsed( 'link' )
            ->layout( 'table' ); // block, row or table

        if (  !  isset( $unset['alignment'] ) ) {
            $button['alignment'] = ButtonGroup::make( 'Alignment', 'but_align' )
                ->instructions( 'Select button alignment.' )
                ->choices( apply_filters( '_ks_acf_button_fields_alignment', ['left' => 'Left', 'center' => 'Center', 'right' => 'Right'] ) )
                ->defaultValue( 'default' )
                ->returnFormat( 'value' )
                ->conditionalLogic( [ConditionalLogic::where( 'buttons', '!=', '' )] );
        }

        if ( $settings ) {
            return $buttom_fields;
        }

        return array_merge( $fields, $button );

    }

    /**
     * @param array $data
     * @return mixed
     */
    public static function AcfButtonHtml( $data = [] ) {
        // Initialize HTML string
        $html = '';

        // Check if get_component function exists and if data is not empty
        if (  !  function_exists( 'get_component' ) || empty( $data ) ) {
            return '';
        }

        // Get the number of buttons and the button data
        $buttons = get_component( 'buttons', $data );
        if ( empty( $buttons ) ) {
            return '';
        }

        // Get the alignment from the fields if it exists
        $alignment = isset( $fields['alignment'] ) ? get_component( 'but_align', $data ) : '';

        // Add HTML before the wrapper
        $html .= apply_filters( '_ks_acf_button_html_before_wrapper', '', $data );

        // Open the wrapper div with the appropriate classes
        $html .= '<div class="button-wrap' . ( $alignment ? " align-{$alignment}" : '' ) . '">';
        $html .= apply_filters( '_ks_acf_button_html_after_open_wrapper', '', $data );

        // Get button fields as an array
        $fields = (array) self::AcfButtonFields( ['settings' => true] );

        // Loop through each button
        for ( $i = 0; $i < $buttons; $i++ ) {
            $set  = "buttons_$i";
            $link = get_component( $set, $data, 'l' );

            if (  !  isset( $link['url'] ) ) {
                continue;
            }

            $color = isset( $fields['color'] ) ? get_component( $set, $data, 'c' ) : '';
            $size  = isset( $fields['size'] ) ? get_component( $set, $data, 's' ) : '';
            $style = isset( $fields['style'] ) ? get_component( $set, $data, 'st' ) : '';

            $class   = [];
            $class[] = 'button';
            $class[] = $color ? "color-{$color}" : '';
            $class[] = $size ? "size-{$size}" : '';
            $class[] = $style ? "style-{$style}" : '';
            $class   = array_filter( $class );

            $link_title = isset( $link['title'] ) && $link['title'] ? esc_html( $link['title'] ) : 'Learn more';
            $target     = '';

            if ( isset( $link['target'] ) ) {
                if ( $link['target'] == '_blank' ) {
                    $target = ' target="_blank" rel="noopener noreferrer"';
                } elseif ( $link['target'] != '' ) {
                    $target = ' target="' . $link['target'] . '"';
                }
            }

            $html .= apply_filters( '_ks_acf_button_html_before_link', '', $data );
            $html .= sprintf(
                '<a href="%s"%s title="%s"%s>%s</a>',
                esc_url( $link['url'] ),
                 !  empty( $class ) ? ' class="' . implode( ' ', $class ) . '"' : '',
                $link_title,
                $target,
                $link_title
            );

            $html .= apply_filters( '_ks_acf_button_html_after_link', '', $data );
        }

        $html .= apply_filters( '_ks_acf_button_html_before_close_wrapper', '', $data );
        $html .= '</div>'; // Close the wrapper div
        $html .= apply_filters( '_ks_acf_button_html_after_wrapper', '', $data );

        return $html;
    }

    /**
     * Strips shortcodes from <p> tags, removes extra spaces, and handles <br> tags adjacent to shortcodes.
     *
     * @param string|null $content The content in which to search for patterns to replace.
     * @return string Returns the content after performing the regular expression replacements.
     */
    public static function stripShortcodeFromTag( $content ): string {
        // Check if content is null or empty and return early if it is.
        if ( null === $content || empty( $content ) ) {
            return '';
        }

        // Regular expression patterns for matching shortcodes, extra spaces, and <br> tags.
        $pattern = ["#<p>\s*\[(.+?)\]\s*</p>#s", "#<p>\s*(.+?)\s*</p>#s", "#\]<br\s*/?>\s*\[#", "#\]<br\s* /?>\s*#"];

        $replacement = ["[$1]", "<p>$1</p>", "][", "]"];

        // Perform replacements and return the modified content.
        return preg_replace( $pattern, $replacement, $content );
    }

}