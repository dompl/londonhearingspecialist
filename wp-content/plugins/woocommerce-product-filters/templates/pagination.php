<?php
/**
 * This file simply outputs a div that is used by the react app to display
 * the real pagination.
 *
 * @package   Barn2\woocommerce-product-filters
 * @author    Barn2 Plugins <support@barn2.com>
 * @license   GPL-3.0
 * @copyright Barn2 Media Ltd
 */

use Barn2\Plugin\WC_Filters\Utils\Settings;

if ( Settings::get_option( 'infinite_scrolling', false ) ) {
	return;
}

?>

<div class="wcf-pagination"></div>
