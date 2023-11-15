<?php
/**
 * HTML For the Slider gallery
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Kickstarter\AcfHelpers;
use Kickstarter\MyHelpers;
add_filter( '_ks_component_two_columns', 'ks_component_two_columns', 10, 5 );

/**
 * @param $html
 * @param $data
 * @param $helpers
 * @param $theme_data
 * @return mixed
 */

function ks_component_two_columns( $html, $data, $helpers, $theme_data, $acf ) {

    $title              = get_component( 'title', $data );
    $description_top    = get_component( 'des_t', $data );
    $description_bottom = get_component( 'des_b', $data );
    $col_left           = get_component( 'cols', $data, 'l' );
    $col_right          = get_component( 'cols', $data, 'r' );

    $html .= ks_component_two_columns_html( $title, $description_top, $description_bottom, $col_left, $col_right, $data );

    return $html;

}

/**
 * @param $title
 * @param null $description_top
 * @param null $description_bottom
 * @param null $col_left
 * @param null $col_right
 * @return mixed
 */
function ks_component_two_columns_html( $title = null, $description_top = null, $description_bottom = null, $col_left = null, $col_right = null, $data = [] ) {

    $helpers    = MyHelpers::getInstance();
    $acf        = AcfHelpers::getInstance();
    $theme_data = null;

    $classes   = [];
    $classes[] = $title ? 'is-title' : 'no-title';
    $classes[] = $description_top ? 'is-top' : 'no-top';
    $classes[] = $description_bottom ? 'is-bottom' : 'no-bottom';
    $classes[] = $col_left ? 'is-left' : 'no-left';
    $classes[] = $col_right ? 'is-right' : 'no-right';

    $classes = array_filter( $classes );

    $html = '<div class="wrapper_two_columns' . (  !  empty( $classes ) ? ' ' . implode( ' ', $classes ) : '' ) . '">';

    $html .= $title ? '<div class="title general-title">' . MyHelpers::formatTag( apply_filters( '_ks_component_two_columns_title', $title, $data, $helpers, $theme_data, $acf ) ) . '</div>' : '';

    $html .= $description_top ? '<div class="des-top the-content">' . nl2br( apply_filters( '_ks_component_two_columns_top_description', $description_top, $data, $helpers, $theme_data, $acf ) ) . '</div>' : '';
    if ( $col_left || $col_right ) {
        $html .= '<div class="flex columns' . ( $col_right ? ' has-right' : ' no-right' ) . ( $col_left ? ' has-left' : ' no-left' ) . '">';
        $html .= $col_left ? '<div class="left the-content">' . nl2br( apply_filters( '_ks_component_two_columns_col_left', $col_left, $data, $helpers, $theme_data, $acf ) ) . '</div>' : '';
        $html .= $col_left ? '<div class="right the-content">' . nl2br( apply_filters( '_ks_component_two_columns_col_left', $col_right, $data, $helpers, $theme_data, $acf ) ) . '</div>' : '';
        $html .= '</div>';
    }
    $html .= $description_bottom ? '<div class="des-bottom the-content">' . nl2br( apply_filters( '_ks_component_two_columns_bottom_description', $description_bottom, $data, $helpers, $theme_data, $acf ) ) . '</div>' : '';
    $html .= AcfHelpers::AcfButtonHtml( $data );
    $html .= '</div>';

    return $html;

}