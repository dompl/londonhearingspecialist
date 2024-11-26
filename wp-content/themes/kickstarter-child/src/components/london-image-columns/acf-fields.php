<?php

use Extended\ACF\ConditionalLogic;
use Extended\ACF\Fields\Image;
use Extended\ACF\Fields\Repeater;
use Extended\ACF\Fields\Text;
use Extended\ACF\Fields\Textarea;
use Extended\ACF\Fields\Tab;

$fields = [];
$fields = array_merge($fields, \London\Acf::HeaderAcfFields());
$fields[] =    Tab::make('Items', wp_unique_id() )->placement('left');
$fields[] = Repeater::make('Image Columns', 'image_columns')
    ->instructions('Add columns with an image, title, and description.')
    ->fields([
    
        Image::make('Image', 'image')
            ->returnFormat('id')
            ->previewSize('medium')
            ->required()
            ->mimeTypes(['jpg', 'jpeg', 'png']),
        Text::make('Title', 'title')
            ->required()
            ->instructions('Enter the title of the column.'),
        Textarea::make('Description', 'description')
            ->rows(3)
            ->instructions('Enter a short description for the column.')
    ])
    ->collapsed('title')
    ->buttonLabel('Add Column')
    ->layout('block');

$fields = array_merge($fields, \London\Acf::ButtonAcfFields('image_columns', true));
\Kickstarter\MyAcf::registerComponentFields('Image Columns', $fields);