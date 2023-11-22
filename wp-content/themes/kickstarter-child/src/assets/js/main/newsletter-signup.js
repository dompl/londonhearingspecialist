(function ($) {
	$('#newsletter-signup').submit(function (event) {
		event.preventDefault();
		let loader = $('#nl-loader');

		loader.show();

		let formData = {
			action: 'newsletter_signup', // WordPress action hook
			email: $('#email').val(),
			submission_url: $('#submission_url').val(),
			nonce: $('#nonce').val(),
		};

		$.ajax({
			type: 'POST',
			url: ks[0].ajax_url, // Set this variable in WordPress using wp_localize_script()
			data: formData,
			success: function (response) {
				$('#london-newsletter .inner').addClass('success message').html(response.data.message);
				loader.hide();
			},
			error: function (response) {
				$('#london-newsletter .inner').addClass('error message').html(response.data.message);
				loader.hide();
			},
		});
	});
})(jQuery);
