jQuery(document).ready(function ($) {
	$(document.body).on('added_to_cart', function (event, fragments, cart_hash, $button) {
		updateShopButton();
	});

	function updateShopButton() {
		$.ajax({
			url: ks[0].ajax_url, // Set this variable in WordPress using wp_localize_script()
			type: 'POST',
			data: {
				action: 'update_shop_button',
			},
			success: function (response) {
				$('#go-to-shop').html(response);
			},
		});
	}
});
