<?php
/**
 * Images settings
 */
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Message;
use Extended\ACF\Fields\Number;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\TrueFalse;
use Kickstarter\MyHelpers;

add_filter( 'ks_admin_theme_options_general_settings', function ( $fields ) {

    $message = 'Set to Yes if you would like to use WebP images across the website. You can generate Webp images on the fly. In order to do so, navigate to a page with images and add to url <strong>' . get_bloginfo( 'url' ) . '?' . MyHelpers::SecretWebP() . '=10</strong> where 100 is the image quality.';

    $fields[] = Tab::make( 'Images settings', wp_unique_id() );
    $fields[] = Accordion::make( 'Webhook', wp_unique_id() );
    $fields[] = Message::make( 'Filter hook', wp_unique_id() )->message( ' In order to hook to this area use filter <strong>ks_admin_theme_options_images_settings</strong>' );
    $fields[] = Accordion::make( 'WebP', wp_unique_id() );
    $fields[] = TrueFalse::make( 'WebP images', 'use_webp_images' )->instructions( $message )->defaultValue( false )->stylisedUi();
    $fields[] = Number::make( 'WebP images quality', 'webp_img_quality' )->instructions( 'Set global quality for the Webp images' )->defaultValue( MyHelpers::defaultWebpQuality() )->min( 10 )->max( 100 )->step( 1 )->required();

    $fields[] = Message::make( 'WebP images generator', wp_unique_id() )->message( apply_filters( '_ks_xgen_acf_message', '' ) );
    $fields[] = Accordion::make( 'Build Mode', wp_unique_id() );
    $fields[] = TrueFalse::make( 'Build mode', 'use_build_images_mode' )->instructions( 'Build will change all the images for the quality of 10%.  This will speed up the process of adjusting the sizes for the website build. This mode is available for website developers only. After completing the build you can delete the images generated for the build mode.<div style="margin:20px 0"><a href="#" id="ks-delete-build-images" class="button button-primary button-small">Delete Build Images</a></div><div id="ks-delete-build-images-message"></div>' )->defaultValue( false )->stylisedUi();
    $fields[] = Accordion::make( 'Endpoint', wp_unique_id() )->endpoint();
    $fields   = array_merge( $fields, apply_filters( 'ks_admin_theme_options_images_settings', [] ) );

    return $fields;

}, 30 );

add_filter( '_ks_xgen_acf_message', 'ks_xgen_acf_message_callback', 10, 1 );

function ks_xgen_acf_message_callback( $message ) {

    $button = '<a href="#" id="ks-generate-xgen" class="button button-primary button-small">Generate WebP Images</a>';
    $button .= '<a href="#" id="ks-delete-xgen" class="button button-primary button-small">Regenerate xGen Meta</a>';
    $button .= '<a href="#" id="ks-delete-webp" class="button button-primary button-small">Delete WebP images</a>';

    $message = '<div id="ks-generate-xgen-message"></div>';
    $message .= '<div class="ks-generate-xgen-button-wrapper"><div class="xgen-button">' . $button . '</div><div id="xgen-live-image"></div></div>';
    $message .= '<div id="ks-generate-xgen-bar"></div>';
    return $message;
}