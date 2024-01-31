jQuery(document).ready(function ($) {
	$('body').on('click', '.quantity .minus', function () {
		var $input = $(this).parent().find('input.qty');
		var value = parseInt($input.val()) - 1;
		value = value < 1 ? 1 : value;
		$input.val(value);
		$input.trigger('change');
	});

	$('body').on('click', '.quantity .plus', function () {
		var $input = $(this).parent().find('input.qty');
		var value = parseInt($input.val()) + 1;
		var max = parseInt($input.attr('max'));
		if (max && value > max) {
			value = max;
		}
		$input.val(value);
		$input.trigger('change');
	});
	// https://dimsemenov.com/plugins/magnific-popup/documentation.html#including-files
	$('.woocommerce-product-gallery__image a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
});
