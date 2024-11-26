<?php
use Extended\ACF\Fields\Message;
function render_dynamic_step_list_with_numbers($atts) {
    // Extract shortcode attribute
    $atts = shortcode_atts([
        'steps' => ''
    ], $atts);

    // Check if steps are provided
    if (empty($atts['steps'])) {
        return '<p>No steps provided.</p>';
    }

    // Parse the steps
    $steps_array = explode('|', $atts['steps']);
    if (empty($steps_array)) {
        return '<p>Invalid steps format.</p>';
    }

    // Generate HTML output with numbering
    ob_start();
    echo '<div class="step-list">';
    $step_number = 1; // Initialize step counter
    foreach ($steps_array as $step) {
        $step_parts = explode('::', $step);
        if (count($step_parts) === 2) {
            echo '<div class="step-item">';
            echo '<h3><span class="numer">' . esc_html($step_number) . ')</span> ' . esc_html(trim($step_parts[0])) . '</h3>';
            echo '<p>' . esc_html(trim($step_parts[1])) . '</p>';
            echo '</div>';
            $step_number++; // Increment step counter
        }
    }
    echo '</div>';
    return ob_get_clean();
}
add_shortcode('dynamic_step_list', 'render_dynamic_step_list_with_numbers');


add_filter('_london_acf_component_helper_shortcodes', function ($fields) {
    $html = "
        <h4>Usage:</h4>
        <p>
            <code>[dynamic_step_list steps=\"{Step Title 1}::{Step Description 1}|{Step Title 2}::{Step Description 2}\"]</code><br><br>
            Provide a list of steps with titles and descriptions separated by <strong>\"::\"</strong> for each step and <strong>\"|\"</strong> to separate multiple steps.
        </p>
        <h4>Parameters:</h4>
        <ul>
            <li><strong>steps</strong>: (Required) A list of steps formatted as <code>Step Title::Step Description</code>. Each step is separated by a pipe <code>|</code>.</li>
        </ul>
        <h4>Example:</h4>
        <p>
            <code>[dynamic_step_list steps=\"Make an Appointment::Make an appointment to see one of our expert audiologists.|Pre Examination of the Ears::We will examine your ears using specialist equipment and advise if there is any wax in the ears.\"]</code>
        </p>
        <p>
            This will display a styled list of steps, with each step showing the title and description provided in the shortcode.
        </p>
    ";
    $fields[] = Message::make('<h3><code>[dynamic_step_list]</code></h3>')->message($html);

    return $fields;
});
