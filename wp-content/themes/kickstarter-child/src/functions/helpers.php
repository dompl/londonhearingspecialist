<?php

function london_replace_tags($string) {

    $find = [
        '<blue>',
        '</blue>',
    ];

    $repace = ['<span class="color-blue span-addon">', '</span>'];

    return str_replace($find, $repace, $string);

}