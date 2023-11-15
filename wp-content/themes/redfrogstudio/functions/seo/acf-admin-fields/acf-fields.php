<?php
use Extended\ACF\Fields\Accordion;
use Extended\ACF\Fields\Email;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Select;
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Fields\Url;
use Kickstarter\MyHelpers;

add_filter( 'ks_seo_admin_acf_fields_general_information', function () {

    $helpers = MyHelpers::getInstance();

    if (  !  MyHelpers::isDeveloper() ) {
        return;
    }

    // General Business Information
    $fields[] = Accordion::make( 'General Business Information' );

    $fields[] = Text::make( 'Company Name', 'ks_seo_name' )
        ->instructions( 'The official name of your company or organization.' )
        ->defaultValue( get_bloginfo( 'name' ) )
        ->required();

    $fields[] = Text::make( 'Alternate Name', 'ks_seo_alternateName' )
        ->instructions( 'Any other names your company is known by.' );

    $fields[] = Textarea::make( 'Description', 'ks_seo_description' )
        ->characterLimit( 160 )
        ->defaultValue( get_bloginfo( 'description' ) )
        ->instructions( 'A brief description of your company or website.' )->required();

    $fields[] = Image::make( 'Logo URL', 'ks_seo_logo_url' )
        ->instructions( 'The URL of your company\'s logo.' );

    $fields[] = URL::make( 'Website URL', 'ks_seo_website_url' )
        ->instructions( 'The main URL of your website.' )
        ->defaultValue( home_url() )
        ->required();

    $fields[] = Email::make( 'Email', 'ks_seo_email' )
        ->instructions( 'Business email address.' );

    $fields[] = Text::make( 'Phone Number', 'ks_seo_telephone' )
        ->instructions( 'Business phone number.' );

    $fields[] = Text::make( 'Fax Number', 'ks_seo_faxNumber' )
        ->instructions( 'Business fax number number.' );

    // Address Information
    $fields[] = Accordion::make( 'Address Information' );

    $fields[] = Text::make( 'Street Address', 'ks_seo_streetAddress' )
        ->instructions( 'The street address of your business.' );

    $fields[] = Text::make( 'City', 'ks_seo_addressLocality' )
        ->instructions( 'The city where your business is located.' );

    $fields[] = Text::make( 'State/Region', 'ks_seo_addressRegion' )
        ->instructions( 'The state or region where your business is located.' );

    $fields[] = Text::make( 'Postal Code', 'ks_seo_postalCode' )
        ->instructions( 'The postal code of your business.' );

    $fields[] = Text::make( 'Country', 'ks_seo_addressCountry' )
        ->instructions( 'The country where your business is located.' );

    // Social Media Profiles
    $fields[] = Accordion::make( 'Social Media Profiles' );

    $fields[] = Tab::make( 'Facebook', wp_unique_id() )->placement( 'left' );
    $fields[] = URL::make( 'Facebook Profile', 'ks_seo_f_profile' )
        ->instructions( 'The URL of your Facebook profile.' );
    $fields[] = Image::make( 'Facebook image', 'ks_seo_f_image' )
        ->instructions( "The Facebook recommended image size for sharing images and sharing links with an image is 1,200 x 630 pixels. Whether you're sharing landscape, portrait, or square images, Facebook will resize it to 500 pixels wide and scale the height accordingly" )->returnFormat( 'id' )->previewSize( 'medium' );
    $fields[] = Text::make( 'Facebook title', 'ks_seo_f_title' )
        ->instructions( '' );
    $fields[] = Textarea::make( 'Facebook title', 'ks_seo_f_description' )
        ->instructions( '' );

    $fields[] = Tab::make( 'Twitter', wp_unique_id() )->placement( 'left' );
    $fields[] = URL::make( 'Twitter Profile', 'ks_seo_t_profile' )
        ->instructions( 'The URL of your Twitter profile.' );

    $fields[] = Image::make( 'Twitter image', 'ks_seo_t_image' )
        ->instructions( "URL of image to use in the card. Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported. Only the first frame of an animated GIF will be used. SVG is not supported." )->returnFormat( 'id' )->previewSize( 'medium' );

    $fields[] = Text::make( 'Twitter title', 'ks_seo_t_title' )
        ->instructions( 'Title of content (max 70 characters)' );

    $fields[] = Text::make( 'Twitter title', 'ks_seo_t_description' )
        ->instructions( 'Description of content (maximum 200 characters)' );

    $fields[] = Tab::make( 'LinkedIn', wp_unique_id() )->placement( 'left' );
    $fields[] = URL::make( 'LinkedIn Profile', 'ks_seo_l_profile' )
        ->instructions( 'The URL of your LinkedIn profile.' );
    // Add more social media profiles as needed

    // Additional Information
    $fields[] = Accordion::make( 'Additional Information' );

    // Language Dropdown

    $fields[] = Select::make( 'Language', 'ks_seo_knowsLanguage' )->instructions( 'The primary language of your website.' )->choices( ks_seo_language_choices() )->defaultValue( 'en' )->stylisedUi()->required();

    $fields[] = Text::make( 'Slogan', 'ks_seo_slogan' )->instructions( 'A slogan or motto associated with the item.' );

    $fields[] = Text::make( 'Opening Time', 'ks_seo_openingHours' )
        ->instructions( 'The opening time of your business. <strong>Example: 09:00 AM</strong>' );

    $fields[] = Text::make( 'Closing Time', 'ks_seo_closingHours' )
        ->instructions( 'The closing time of your business. <strong>Example: 05:00 PM</strong>' );

    $fields[] = Text::make( 'Currencies Accepted', 'ks_seo_currenciesAccepted' )
        ->instructions( 'List the currencies you accept. <strong>Example: USD, EUR, GBP</strong>' );

    $fields[] = Text::make( 'Payment Methods Accepted', 'ks_seo_paymentAccepted' )
        ->instructions( 'List accepted payment methods. <strong>Example: Credit Card, PayPal, Cash</strong>' );

    $fields[] = URL::make( 'Publishing Principles', 'ks_seo_publishingPrinciples' )
        ->instructions( 'URL to a page detailing your publishing principles or editorial guidelines. <strong>Example: https://example.com/publishing-principles</strong>' );

    $fields[] = URL::make( 'Ownership and Funding Information', 'ks_seo_ownershipFundingInfo' )
        ->instructions( 'URL to a page detailing ownership and funding information. <strong>Example: https://example.com/ownership-funding</strong>' );

    // End of fields
    $fields[] = Accordion::make( 'Endpoint' )->endpoint();

    return $fields;
} );