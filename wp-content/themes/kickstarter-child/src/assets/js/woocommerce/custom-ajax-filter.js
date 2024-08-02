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
				$('.products').html(response); // Ensure there's a container with class 'products' in your HTML
			},
			error: function (xhr, status, error) {
				console.error('Failed to update products!', error);
			},
		});
	}

	// Initialize or update the price slider
	function initializePriceSlider(min, max) {
		var priceSlider = $('#price-slider');
		if (!priceSlider.hasClass('ui-slider')) {
			priceSlider.slider({
				range: true,
				min: parseFloat(min),
				max: parseFloat(max),
				values: [parseFloat(min), parseFloat(max)],
				slide: function (event, ui) {
					$('#price_min_value').text(ui.values[0]);
					$('#price_max_value').text(ui.values[1]);
				},
				stop: function (event, ui) {
					$('#price_min').val(ui.values[0]);
					$('#price_max').val(ui.values[1]);
					submitFilterForm(); // Update products when slider changes
				},
			});
		} else {
			priceSlider.slider('option', 'min', parseFloat(min));
			priceSlider.slider('option', 'max', parseFloat(max));
			priceSlider.slider('values', [parseFloat(min), parseFloat(max)]);
		}
		$('#price_min_value').text(min);
		$('#price_max_value').text(max);
	}

	// Fetch and update the price range based on selected categories
	function fetchPriceRangeAndUpdateSlider() {
		var selectedCategories = $('input[name="filter_category[]"]:checked')
			.map(function () {
				return $(this).val(); // This will now get category IDs
			})
			.get();

		$.ajax({
			url: custom_ajax_obj.ajax_url,
			type: 'POST',
			data: {
				action: 'get_price_range',
				categories: selectedCategories,
				security: custom_ajax_obj.nonce,
			},
			success: function (response) {
				var data = JSON.parse(response);
				if (data.min && data.max) {
					initializePriceSlider(data.min, data.max);
				}
			},
			error: function (xhr, status, error) {
				console.error('Error fetching price range:', error);
			},
		});
	}

	// Event listener for changes on category and manufacturer checkboxes
	$('input[name="filter_category[]"], input[name="filter_manufacturer[]"]').on('change', function () {
		fetchPriceRangeAndUpdateSlider(); // Update slider when categories change
		submitFilterForm(); // Update products list
	});

	// Initialize slider and products display on page load
	fetchPriceRangeAndUpdateSlider();
	submitFilterForm();
});
