<?php
use Extended\ACF\Fields\Tab;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\WysiwygEditor;
$fields          = [];
$default_message = '<p>Your enquiry has been successfully sent. We will review this shortly to get back to you to organise an appointment or reply to your query.</p>';
$default_message .= '<p>Should you have an emergency appointment requirement do give us a call to speak to one of our professionals.</p>';
$fields[] = Tab::make( 'Content', wp_unique_id( 'thank_you_content' ) )->placement( 'left' );
$fields[] = Text::make( 'Title', 'title' )->instructions( 'Add thank you message title' )->defaultValue( 'Thank you!' );
$fields[] = WysiwygEditor::make( 'Message', 'message' )->instructions( 'Add thank you message text' )->defaultValue( $default_message )->mediaUpload( false )->tabs( 'all' )->toolbar( 'default_toolbar' )->required();
\Kickstarter\MyAcf::registerComponentFields( 'Thank you', $fields );