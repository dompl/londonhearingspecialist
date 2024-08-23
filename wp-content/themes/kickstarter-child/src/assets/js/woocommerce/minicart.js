jQuery(document).ready(function ($) {
	// Navigation search toggle
	$('#search-trigger').on('click', function () {
		$('.on-mobile').slideToggle();
	});
	$(document.body).on('added_to_cart', function (event, fragments, cart_hash, $button) {
		updateShopButton();
	});

	function updateShopButton() {
		$.ajax({
			url: ks[0].ajax_url, // Make sure ks[0].ajax_url is correctly set
			type: 'POST',
			data: {
				action: 'update_shop_button',
			},
			success: function (response) {
				$('#go-to-shop, #go-to-shop-2').html(response); // Corrected from InnerHtml to html
			},
		});
	}
});
