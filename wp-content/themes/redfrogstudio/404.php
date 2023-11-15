<?php
/**
 * Available Filters:
 *
 * 1. _page_404_before_content:
 *    Apply custom content before the main 404 content starts.
 *    Arguments: $default_html, $data, $helpers
 *
 * 2. _page_404_before_image:
 *    Apply custom content before the 404 image.
 *    Arguments: $default_html, $data, $helpers
 *
 * 3. _page_404_after_image:
 *    Apply custom content after the 404 image.
 *    Arguments: $default_html, $data, $helpers
 *
 * 4. _page_404_before_text:
 *    Apply custom content before the 404 text.
 *    Arguments: $default_html, $data, $helpers
 *
 * 5. _page_404_after_text:
 *    Apply custom content after the 404 text.
 *    Arguments: $default_html, $data, $helpers
 *
 * 6. _page_404_before_description:
 *    Apply custom content before the 404 description.
 *    Arguments: $default_html, $data, $helpers
 *
 * 7. _page_404_after_description:
 *    Apply custom content after the 404 description.
 *    Arguments: $default_html, $data, $helpers
 *
 * 8. _page_404_before_link:
 *    Apply custom content before the 404 link.
 *    Arguments: $default_html, $data, $helpers
 *
 * 9. _page_404_after_link:
 *    Apply custom content after the 404 link.
 *    Arguments: $default_html, $data, $helpers
 *
 * 10. _page_404_before_link_class:
 *     Modify the CSS class applied to the 404 link.
 *     Arguments: $default_class
 *
 * 11. _page_404_text:
 *     Modify the 404 text content.
 *     Arguments: $default_text, $data, $helpers
 *
 * 12. _page_404_description:
 *     Modify the 404 description content.
 *     Arguments: $default_description, $data, $helpers
 *
 * @package YourPackage
 */
use Kickstarter\MyHelpers;
$helpers = MyHelpers::getInstance();
get_header();
$html = get_transient( 'ks_404_page' );

if ( $html === false ) {
    $data = MyHelpers::getThemeData();
    $html = '<main role="main" aria-label="Content" id="page-404">';
    $html .= '<section>';
    $html .= '<article>';
    $html .= apply_filters( '_page_404_before', null, $data, $helpers );
    $html .= apply_filters( '_page_404_before_content', '<div class="container">', $data, $helpers );

    if ( isset( $data['image_404'] ) && $data['image_404'] ) {
        $image = $data['image_404']['image'];
        $size  = $data['image_404']['size'];

        if ( $image && $size ) {

            $main_image = MyHelpers::WPImage( id: $image, size: $size );
            $dimensions = MyHelpers::ImageDimensions( $main_image );

            $html .= apply_filters( '_page_404_before_image', false, $data, $helpers );
            $html .= '<div class="image-404">';

            $image_html = '<picture>';
            $image_html .= '<source media="(min-width:992px)" srcset="' . MyHelpers::WPImage( id: $image, size: $size ) . ' 1x, ' . MyHelpers::WPImage( id: $image, size: $size, retina: true ) . ' 2x">';
            $image_html .= '<source media="(min-width:320px)" srcset="' . MyHelpers::WPImage( id: $image, size: MyHelpers::calculateAspectRatio( $size, 300 ) ) . ' 1x, ' . MyHelpers::WPImage( id: $image, size: MyHelpers::calculateAspectRatio( $size, 300 ), retina: true ) . ' 2x">';
            $image_html .= '<img src="' . MyHelpers::WPImage( id: $image, size: MyHelpers::calculateAspectRatio( $size, 320 ), q: 10 ) . '"  width="' . ( isset( $dimensions['width'] ) ? $dimensions['width'] : $dimensions ) . '" alt="' . ( MyHelpers::getImageData( $image, 'alt' ) ? MyHelpers::getImageData( $image, 'alt' ) : get_bloginfo( 'name' ) ) . '" loading="lazy">';
            $image_html .= '</picture>';

            $html .= apply_filters( '_page_404_image', $image_html, $data, $helpers );

            $html .= '</div>';
            $html .= apply_filters( '_page_404_after_image', false, $data, $helpers );

        }

    }

    if ( isset( $data['text_404'] ) && !  empty( $data['text_404'] ) ) {
        $html .= apply_filters( '_page_404_before_content', false, $data, $helpers );
        $html .= '<div class="page-404-content">';
        if ( isset( $data['text_404']['text'] ) && !  empty( $data['text_404']['text'] ) ) {
            $html .= apply_filters( '_page_404_before_text', false, $data, $helpers );
            $html .= '<div class="page-404-text">' . apply_filters( '_page_404_text', $data['text_404']['text'], $data, $helpers ) . '</div>';
            $html .= apply_filters( '_page_404_after_text', false, $data, $helpers );
        }
        if ( isset( $data['text_404']['description'] ) && !  empty( $data['text_404']['description'] ) ) {
            $html .= apply_filters( '_page_404_before_description', false, $data, $helpers );
            $html .= '<div class="page-404-description">' . apply_filters( '_page_404_description', $data['text_404']['description'], $data, $helpers ) . '</div>';
            $html .= apply_filters( '_page_404_after_description', false, $data, $helpers );
        }
        if ( isset( $data['text_404']['link'] ) && !  empty( $data['text_404']['link'] ) ) {
            $html .= apply_filters( '_page_404_before_link', false, $data, $helpers );
            $link = MyHelpers::Link( $data['text_404']['link'], apply_filters( '_page_404_before_link_class', 'button' ) );
            $html .= '<div class="page-404-link">' . apply_filters( '_page_404_before_link', $link, $data, $helpers ) . '</div>';
            $html .= apply_filters( '_page_404_after_link', false, $data, $helpers );
        }

        $html .= apply_filters( '_page_404_after_content_in_container', false, $data, $helpers );
        $html .= '</div>';
        $html .= apply_filters( '_page_404_after_content', false, $data, $helpers );
    }
    $html .= apply_filters( '_page_404_after_content_bottom', '</div>', $data, $helpers );
    $html .= apply_filters( '_page_404_after', null, $data, $helpers );
    $html .= '</article>';
    $html .= '</section>';
    $html .= '</main>';
    /** Set transient if not on the development environment */
    if ( use_transients() && apply_filters( '_page_404_use_transient', true ) ) {
        set_transient( 'ks_404_page', $html, 30 * DAY_IN_SECONDS );
    }
}
echo $html;
get_footer();?>