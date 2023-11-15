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
use Kickstarter\MyWebImagesGenerator;

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

    $message = '<div id="ks-generate-xgen-message"></div>';
    $message .= '<div class="ks-generate-xgen-button-wrapper">' . apply_filters( '_wp_1698905582', false ) . '</div>';
    $message .= '<div id="ks-generate-xgen-bar"></div>';
    return $message;
}
add_filter( '_wp_1698905582', 'wp_1698905641', 10, 1 );
add_filter( '_wp_1698905582', 'wp_1698905961', 10, 1 );
add_filter( '_wp_1698905582', 'wp_1698906551', 10, 1 );

function wp_1698905641( $html ) {

    $addon = false;

    $count = MyWebImagesGenerator::getMissingWebpCount();

    if ( $count > 0 ) {
        $addon .= '<p>There is ' . $count . ' images to generate WebP images</p>';
        $addon .= '<p>Clicking the button below will initiate the generation of WebP images for the website. The duration of this process is contingent upon the total number of images and may take a considerable amount of time. It is imperative to remain on this page and not to navigate away until the regeneration is fully completed.</p>';
        $addon .= '<div class="button-wrapper"><button id="ks-generate-xgen" class="button button-primary button-small xgen-button">Generate WebP Images</a></div>';
        $addon .= '<div class="important">Upon completing this action, the buttons will become disabled. You will need to refresh the page to re-enable them. Please also remember to set <strong>WebP images</strong> to Yes if you want to display the WebP images on the website</div>';
        $addon .= '<div class="xgen-bar" id="ks-generate-xgen-bar"></div>';
    } else {
        $addon .= '<p>Currently there is no images with missing WebP</p>';
    }

    $html .= '<div class="wrapper">';
    $html .= '<div class="info"><h3>Generate WebP Images</h3> ' . $addon . ' </div>';
    $html .= '</div>';
    return $html;
}

function wp_1698905961( $html ) {
    $html .= '<div class="wrapper">';
    $html .= '<div class="info">
	 				<h3>Regenerate xGen Meta</h3>
	 				<p>Our WPimage method processes images, creating custom metadata that encompasses information on dimensions and associated files. This functionality allows you to completely erase and then rebuild this metadata from the ground up. It\'s crucial to undertake this with a clear and justifiable purpose. Although the procedure is designed to be secure, it necessitates the re-creation of WebPImages.</p>
					<p>Initiating this function should be reserved for scenarios where a comprehensive metadata overhaul is required for websites constructed using the Redfrogstudio parent theme, particularly those established before the integration of WebP image functionality. Proceed with understanding the implications and ensure it aligns with your website\'s operational requirements.</p>
	 			 </div>';
    $html .= '<div class="button-wrapper"><button id="ks-delete-xgen" class="button button-primary button-small xgen-button">Regenerate xGen Meta</button><button id="ks-show-xgen" class="button button-primary button-small xgen-button">Show xGen meta in console</button></div>';
    $html .= '<div class="important">After initiating this action, the buttons will become inactive. To restore functionality, please refresh the page. While this process does not delete existing WebP images, it is advisable to execute the "Generate WebP Images" action once again for optimal results.</div>';
    $html .= '<div class="xgen-bar" id="ks-delete-xgen-bar"></div>';
    $html .= '</div>';
    return $html;
}

function wp_1698906551( $html ) {
    $html .= '<div class="wrapper">';
    $html .= '<div class="info">
					<h3>Delete WebP images</h3>
					<p>By selecting the button below, you will initiate the removal of all WebP images from the website. This action is rarely necessary; however, should you encounter issues with corrupted images or decide to alter the quality settings of your WebP images, this function can facilitate such changes. Please ensure to regenerate the WebP images after executing this operation.</p>
				 </div>';
    $html .= '<div class="button-wrapper"><button id="ks-delete-webp" class="button button-primary button-small xgen-button">Delete WebP images</button></div>';
    $html .= '<div class="important">Upon executing this action, the interface buttons will deactivate. To regain control, you must refresh the page. It\'s important to understand that without a subsequent regeneration of images, even if the system is set to display WebP images, they will not appear on the website. This is because the actual WebP files must exist on the server to be accessible.</div>';
    $html .= '<div class="xgen-bar" id="ks-delete-webp-bar"></div>';
    $html .= '</div>';
    return $html;
}