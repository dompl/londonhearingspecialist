<?php
use Extended\ACF\Fields\Message;
function tinnitus_shortcode( $atts, $content = null ) {
    // Shortcode attributes with defaults
    $atts = shortcode_atts( array(
        'bcg'   => 'white',
        'color' => 'text'
    ), $atts, 'frame' );

    // Ensure that content is not null and remove automatic paragraph tags added by WordPress
    $content = null === $content ? '' : shortcode_unautop( $content );

    // Building the output HTML
    $output = '<div class="frame-shortcode color-' . esc_attr( $atts['color'] ) . ' bcg-' . esc_attr( $atts['bcg'] ) . '">';
    $output .= do_shortcode( $content ); // Include the content and process any nested shortcodes
    $output .= '</div>';

    return $output;
}
add_shortcode( 'frame', 'tinnitus_shortcode' );

add_filter( '_london_acf_component_helper_shortcodes', function ( $fields ) {
    $html = "
    	<h4>Usage:</h4>
    		<p>
        <code>[frame bcg=\"{background_color}\" color=\"{text_color}\"]{content}[/frame]</code><br><br>
		  " . london_colors_message() . "
		  </p>
		  <p>
		  <h4>Parameters:</h4>
		  <ul>
		  <li><strong>bcg</strong>: (Optional) Set the background color. Default is \"white\".</li>
		  <li><strong>color</strong>: (Optional) Set the text color. Default is \"text\".</li>
		  </ul>
        Content: Include any content between the opening and closing tags.
    </p>
    <h4>Example:</h4>
    <p>
	 <code>[frame bcg=\"blue\" color=\"gold\"]Hello, World![/frame]</code><br>
	 </p>
    <p>
        This will display \"Hello, World!\" with a blue background and gold text.
		  </p>
 ";
    $fields[] = Message::make( '<h3><code>[frame][/frame]</code></h3>' )->message( $html );

    return $fields;
} );