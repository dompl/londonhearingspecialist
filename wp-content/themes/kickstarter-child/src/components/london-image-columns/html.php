<?php
use Kickstarter\MyHelpers;

add_filter(\Kickstarter\MyAcf::Html(), 'render_image_columns', 10, 2);

function render_image_columns($html, $data) {
    // Retrieve the number of image columns
    $imageColumnsCount = get_component('image_columns', $data);

    // Ensure $imageColumnsCount is a valid integer
    $imageColumnsCount = (int)$imageColumnsCount;

    // Exit early if no valid number is returned
    if ($imageColumnsCount <= 0) {
        return $html;
    }

    $html .= '<div class="london-image-columns">';
    for ($index = 0; $index < $imageColumnsCount; $index++) {
        // Retrieve components for the current column
        $title = get_component("image_columns_{$index}_title", $data);
        $description = get_component("image_columns_{$index}_description", $data);
        $image = get_component("image_columns_{$index}_image", $data);

        // Convert $image to integer if it exists
        $image = !empty($image) ? (int)$image : null;

        $html .= '<div class="image-column-item">';
        $html .= '<div class="inner">';
       
 
        if (!empty($title)) {
            $html .= '<div class="title"><h3>' . esc_html($title) . '</h3></div>';
        }
        if (!empty($description)) {
            $html .= '<div class="description"><p>' . esc_html($description) . '</p></div>';
        }
        $html .= '</div>'; // Close item div
        if (!empty($image)) {
            $html .='<div class="image-column-image">'  . MyHelpers::PictureSource(image: $image, size: [304,304], custom_container: 'image', min: 304) . '</div>';
        }
 
        $html .= '</div>'; // Close item div
    }
    $html .= '</div>'; // Close main container div

    return $html;
}
