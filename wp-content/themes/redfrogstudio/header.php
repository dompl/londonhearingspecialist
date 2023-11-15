<!DOCTYPE html>
<html <?php language_attributes();?> class="no-js">
    <head>
        <title><?php wp_title( '' );?></title>
        <?php do_action( 'ks_after_wp_title' )?>
        <meta charset="<?php bloginfo( 'charset' );?>" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="//www.google-analytics.com" rel="dns-prefetch">
        <?php do_action( 'ks_before_wp_head' )?>
        <?php wp_head();?>
        <?php do_action( 'ks_after_wp_head' )?>
    </head>
    <body <?php function_exists( 'ks_body_class' ) ? ks_body_class() : ''?>>
        <?php do_action( 'ks_after_body' )?>