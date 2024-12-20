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
use Extended\ACF\Location;

class Acf {

    public function __construct() {
        add_filter( 'acf/fields/wysiwyg/toolbars', [$this, 'HeaderAcfFieldsWysiwyg'] ); // Customize ACF WYSIWYG toolbars
        add_action( 'acf/init', [$this, 'InitAdminThemeOptionsPage'] ); // Customize ACF WYSIWYG toolbars
        add_filter( '_ks_theme_acf_fields_before', [$this, 'InitComponentHelperFields'], 9999 ); // Customize ACF WYSIWYG toolbars
    }

    public function InitComponentHelperFields( $fields ) {
        $endpoints       = false;
        $addons_fields   = [];
        $addons_fields[] = Tab::make( 'Helpers', wp_unique_id() )->placement( 'left' );

        $shortcodes = apply_filters( '_london_acf_component_helper_shortcodes', [] );
        if (  !  empty( $shortcodes ) ) {
            $endpoints       = true;
            $addons_fields[] = Accordion::make( 'Shortcodes', wp_unique_id() )->instructions( 'List of available shortcodes with short instructions of use.' );
            $addons_fields   = array_merge( $addons_fields, $shortcodes );
        }
        if ( $endpoints ) {
            $addons_fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();
        }

        return array_merge( $fields, apply_filters( '_london_acf_component_helper_addons', $addons_fields ) );
    }

    public function InitAdminThemeOptionsPage() {

        $admin_options_pages = [];

        // Adding options pages for the admin panel
        $admin_options_pages[] = array(
            'page_title' => get_bloginfo( 'name' ) . ' Options Page',
            'menu_title' => 'LHS Options',
            'menu_slug'  => 'london-options',
            'capability' => 'edit_posts',
            'redirect'   => true
        );
        $admin_options_pages[] = array(
            'page_title'  => 'Pricing Tables',
            'menu_title'  => 'Pricing Tables',
            'menu_slug'   => 'london-pricing-tables',
            'capability'  => 'edit_posts',
            'parent_slug' => 'london-options'
        );
        $admin_options_pages[] = array(
            'page_title'  => 'Team Members',
            'menu_title'  => 'Team Members',
            'menu_slug'   => 'london-team-members',
            'capability'  => 'edit_posts',
            'parent_slug' => 'london-options'
        );
        $admin_options_pages[] = array(
            'page_title'  => 'Frequently Asked Questions',
            'menu_title'  => 'FAQ\'s',
            'menu_slug'   => 'london-faqs',
            'capability'  => 'edit_posts',
            'parent_slug' => 'london-options'
        );
        $admin_options_pages[] = array(
            'page_title'  => 'Banners',
            'menu_title'  => 'Page banners',
            'menu_slug'   => 'london-page-banners',
            'capability'  => 'edit_posts',
            'parent_slug' => 'london-options'
        );

        foreach ( $admin_options_pages as $page ) {
            acf_add_options_page( $page );
        }

        // Registering extended field group if not empty
        $theme_options_fields = apply_filters( 'london_admin_theme_options', [] );
        if (  !  empty( $theme_options_fields['tables'] ) ) {
            register_extended_field_group( [
                'title'    => 'Tables',
                'style'    => 'default',
                'fields'   => $theme_options_fields['tables'],
                'location' => [
                    Location::where( 'options_page', 'london-pricing-tables' )
                ]
            ] );
        }
        if (  !  empty( $theme_options_fields['faqs'] ) ) {
            register_extended_field_group( [
                'title'    => 'Frequently Asked Questions',
                'style'    => 'default',
                'fields'   => $theme_options_fields['faqs'],
                'location' => [
                    Location::where( 'options_page', 'london-faqs' )
                ]
            ] );
        }
        if (  !  empty( $theme_options_fields['team_members'] ) ) {
            register_extended_field_group( [
                'title'    => 'Team Members',
                //  'style'    => 'default',
                'fields'   => $theme_options_fields['team_members'],
                'location' => [
                    Location::where( 'options_page', 'london-team-members' )
                ]
            ] );
        }

        if (  !  empty( $theme_options_fields['banners'] ) ) {
            register_extended_field_group( [
                'title'    => 'Page banners',
                //  'style'    => 'default',
                'fields'   => $theme_options_fields['banners'],
                'location' => [
                    Location::where( 'options_page', 'london-page-banners' )
                ]
            ] );
        }
    }

    public static function ButtonAcfFields( $prefix = '', $tab = false ) {
        // Define button and fields arrays
        $button = [];
        $fields = [];

        // Retrieve color options from a theme-specific function
        $colors = ks_theme_custom_colors_array();

        // Add a tab for buttons if required
        if ( $tab ) {
            $button[] = Tab::make( 'Buttons', wp_unique_id( $prefix ) )->placement( 'left' );
        }

        // Define a checkbox for predefined buttons
        $button[] = Checkbox::make( 'Predefined buttons', "{$prefix}predefined" )
            ->instructions( 'Select one of the predefined call to action buttons' )
            ->choices( apply_filters( 'london_predefined_buttons', ['book' => 'Book Appointment'] ) )
            ->layout( 'horizontal' );

        // Define link field
        $fields[] = Link::make( 'Link', "link" )->instructions( 'Add button link' )->required();

        // Add color selection if colors are available
        if (  !  empty( $colors ) ) {
            $fields[] = Select::make( 'Button colour', "color" )
                ->instructions( 'Select button colour' )
                ->choices( $colors )
                ->allowNull()
                ->stylisedUi();
        }

        // Define a repeater for custom buttons
        $button[] = Repeater::make( 'Custom buttons', "{$prefix}buttons" )
            ->instructions( 'Add custom call to action buttons' )
            ->fields( $fields )
            ->collapsed( 'link' )
            ->buttonLabel( 'Add button' )
            ->layout( 'table' );
        $button[] = Select::make( 'Space', "{$prefix}s" )->instructions( 'Add space above the call for action buttons' )->choices( self::ContainerSpaces() )->allowNull()->stylisedUi();
        return $button;
    }

    public static function ContainerSpaces() {
        if ( function_exists( 'ks_default_container_spaces' ) ) {
            return ks_default_container_spaces();
        }
        return [
            'sm'  => 'Small',
            'md'  => 'Medium',
            'lg'  => 'Large',
            'xl'  => 'Extra Large',
            'xxl' => 'X Extra Large'
        ];
    }

    function ks_default_container_spaces() {
        return [
            'sm'  => 'Small',
            'md'  => 'Medium',
            'lg'  => 'Large',
            'xl'  => 'Extra Large',
            'xxl' => 'X Extra Large'
        ];
    }

    public static function ButtonAcfHtml( $data, $prefix = '', $post = false ) {

        if ( is_shop() ) {
            $post_id = wc_get_page_id( 'shop' );
        } else {
            // Ensure $post is an object before accessing $post->ID
            $post_id = ( is_object( $post ) && isset( $post->ID ) ) ? $post->ID : null;
        }

        $html         = '';
        $is_component = empty( $post ) && !  empty( $data ) ? true : false;
        if ( $is_component ) {
            $buttons    = get_component( $prefix . 'buttons', $data );
            $space      = get_component( $prefix . 's', $data );
            $predefined = get_component( $prefix . 'predefined', $data );
        } else {
            $buttons    = get_post_meta( $post_id, $prefix . 'buttons', true );
            $space      = get_post_meta( $post_id, $prefix . 's', true );
            $predefined = get_post_meta( $post_id, $prefix . 'predefined', true );

        }

        if ( $buttons || !  empty( $predefined ) ) {

            $html .= $space ? '<div class="space space-' . $space . '"></div>' : '';

            $html .= '<div class="buttons-wrapper">';

            if (  !  empty( $predefined ) ) {
                if ( in_array( 'book', $predefined ) ) {
                    $html .= do_shortcode( '[book_appointment]' );
                }
            }

            for ( $i = 0; $i < $buttons; $i++ ) {

                $button = [];

                if ( $is_component ) {
                    $button['link'] = get_component( $prefix . "buttons_{$i}_link", $data );
                } else {
                    $button['link'] = get_post_meta( $post_id, $prefix . "buttons_{$i}_link", true );
                }

                if ( empty( $button['link'] ) ) {
                    continue;
                }

                if ( $is_component ) {
                    $button['color'] = get_component( "buttons_{$i}_color", $data );
                } else {
                    $button['color'] = get_post_meta( $post_id, "buttons_{$i}_color", true );
                }

                $button['link']['title'] = isset( $button['link']['title'] ) && !  empty( $button['link']['title'] ) ? $button['link']['title'] : __( 'Discover More', 'london' );

                $color = is_shop() ? 'green' : esc_html( $button['color'] );

                $html .= '<a href="' . esc_url( $button['link']['url'] ) . '" class="button ' . $color . '" title="' . wp_strip_all_tags( $button['link']['title'], true ) . '">' . $button['link']['title'] . '</a>';

            }

            $html .= '</div>';
            return $html;
        }

    }

    public static function HeaderAcfFieldsBatch() {
        $colors = ks_theme_custom_colors_array();
        return Group::make( 'Batch', 'batch' )
            ->instructions( 'Add custom heading batch' )
            ->fields( [
                Text::make( 'Batch text', 'text' )
                    ->instructions( 'Add custom batch text' ),
                Select::make( 'Colour', 'color' )
                    ->instructions( 'Add custom batch colour' )
                    ->choices( $colors )
                    ->allowNull()
                    ->stylisedUi(),
                    Select::make( 'Style', 'style' )
                    ->instructions( 'Add batch style' )
                    ->choices( ['boxed' => 'Boxed', 'boxed_large' => 'Boxed Large', 'text' => 'Text' ] )
                    ->allowNull()
                    ->defaultValue('boxed')
                    ->stylisedUi(),
					Select::make( 'Position', 'position' )
                    ->instructions( 'Add batch position' )
                    ->choices( ['above' => 'Above Title' , 'below' => 'Below Title', 'below_description'=> 'Below Description' ] )
                    ->allowNull()
                    ->defaultValue('above')
                    ->stylisedUi(),
            ] )
            ->layout( 'row' );
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

        // Create a group field for batch text and background color
        $fields[] = self::HeaderAcfFieldsBatch();

        // Create a group field for main heading text and tag selection
        $fields[] = Group::make( 'Heading text', 'text' )
            ->instructions( 'Add heading text' )
            ->fields( [
                Textarea::make( 'Main Text', 'text' )->newLines( 'br' )->instructions( 'Main heading text' )->rows( 2 ),
                Select::make( 'Heading Tag', 'tag' )
                    ->instructions( 'Select tag for your heading' )
                    ->choices( ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'] )
                    ->stylisedUi()
            ] )
            ->layout( 'row' );

        $fields[] = Accordion::make( 'Heading description', wp_unique_id() )->instructions( 'Additional heading description' );
        $fields[] = WysiwygEditor::make( 'Description', 'description' )->instructions( 'Additional heading description' )->mediaUpload( false )->tabs( 'all' )->toolbar( 'heading_toolbar' );

        $fields[] = Accordion::make( 'Heading spacing', wp_unique_id() )->instructions( 'Spacing under the heading' );
        $fields[] = Select::make( 'Select space under the heading container', 'hs' )->instructions( 'Set space under the custom heading' )->choices( self::ContainerSpaces() )->allowNull()->stylisedUi();
        $fields[] = Accordion::make( 'Heading call for actions', wp_unique_id() )->instructions( 'Additional heading call for actions' );
        $fields   = array_merge( $fields, self::ButtonAcfFields() );

        $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();

        return $fields;

    }

	public static function HeaderAcfHtml( $data ) {
		$html = '';
	
		$style = get_component( 'style', $data );
	
		$title          = get_component( 'text', $data, 'text' );
		$tag            = get_component( 'text', $data, 'tag' );
		$batch          = get_component( 'batch', $data, 'text' );
		$space          = get_component( 'hs', $data );
		$batch_color    = get_component( 'batch', $data, 'color' ) ?? 'brand';
		$batch_style    = get_component( 'batch', $data, 'style' );
		$batch_position = get_component( 'batch', $data, 'position' ) ?? 'above';
		$description    = get_component( 'description', $data );
	
		$html .= '<div class="london-heading ' . $style . '">';
	
		// Batch rendering function for reuse
		$batch_html = '';
		if ( ! empty( $batch ) ) {
			if ( $batch_style === 'text' ) {
				$batch_html .= '<div class="batch-wrapper"><span class="batch-' . $batch_style . ' color-' . $batch_color . '">' . $batch . 'asfdasdf</span></div>';
            } else if ( $batch_style === 'boxed_large' ) {
				$batch_html .= '<div class="batch-wrapper"><span class="button batch-' . $batch_style . ' ' . $batch_color . '">' . $batch . '</span></div>';
			} else {
				$batch_html .= '<div class="batch-wrapper"><span class="button batch batch-' . $batch_style . ' ' . $batch_color . '">' . $batch . '</span></div>';
			}
		}
	
		// Position-based rendering
		if ( $batch_position === 'above' || !$batch_position ) {
			$html .= $batch_html;
		}
	
		if ( ! empty( $title ) ) {
			$tag = $tag ?? 'h2';
			$html .= '<div class="title"><' . $tag . '>' . $title . '</' . $tag . '></div>';
		}
	
		if ( $batch_position === 'below' ) {
			$html .= $batch_html;
		}
	
		if ( ! empty( $description ) ) {
			$html .= '<div class="description london-content">' . wpautop( $description ) . '</div>';
		}
	
		if ( $batch_position === 'below_description' ) {
			$html .= $batch_html;
		}
	
		$html .= self::ButtonAcfHtml( $data );
	
		$html .= '</div>';
	
		$html .= $space ? '<div class="space space-' . $space . '"></div>' : '';
	
		return $html;
	}
	

    public function HeaderAcfFieldsWysiwyg( $toolbars ) {
        $toolbars['Heading Toolbar']    = [];
        $toolbars['Heading Toolbar'][1] = ['bold', 'link', 'aligncenter', 'bullist', 'alignleft', 'justifyfull', 'removeformat'];

        $toolbars['Tables Toolbar']    = [];
        $toolbars['Tables Toolbar'][1] = ['bold', 'link', 'removeformat', 'table'];

        $toolbars['Content Toolbar']    = [];
        $toolbars['Content Toolbar'][1] = ['formatselect', 'bold', 'link', 'aligncenter', 'bullist', 'numlist', 'alignleft', 'justifyfull', 'removeformat', 'indent', 'outdent'];
        return $toolbars;
    }

}
new \London\Acf();