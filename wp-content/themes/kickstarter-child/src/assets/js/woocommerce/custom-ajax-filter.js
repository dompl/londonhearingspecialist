jQuery(document).ready(function ($) {
	// Function to submit the filter form and update products
	function submitFilterForm() {
		var formData = {
			action: 'custom_filter_products', // This should match the action in your PHP function
			category: $('input[name="filter_category[]"]:checked')
				.map(function () {
					return this.value;
				})
				.get(),
			manufacturer: $('input[name="filter_manufacturer[]"]:checked')
				.map(function () {
					return this.value;
				})
				.get(),
		};

		$.ajax({
			url: custom_ajax_obj.ajax_url,
			type: 'POST',
			data: formData,
			success: function (response) {
				$('.products').html(response); // Make sure you have a container with class 'products' to update the HTML
			},
			error: function () {
				alert('Failed to update products!');
			},
		});
	}

	// Event listener for changes on category and manufacturer checkboxes
	$('input[name="filter_category[]"], input[name="filter_manufacturer[]"]').on('change', function () {
		submitFilterForm();
	});

	// Initialize the products display on page load (optional)
	submitFilterForm();
});
