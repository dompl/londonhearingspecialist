<?php
namespace Kickstarter;

class LondonSettings {

    function __construct() {
        apply_filters( '_ks_use_posts', '__return_true' );
    }
}

new LondonSettings();