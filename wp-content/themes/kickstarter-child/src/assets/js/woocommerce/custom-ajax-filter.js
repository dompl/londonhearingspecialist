jQuery(document).ready(function ($) {
	// Function to submit the filter form and update products
	function submitFilterForm() {
		var formData = {
			action: 'custom_filter_products',
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
			price_range: [$('#price_min').val(), $('#price_max').val()],
		};

		$.ajax({
			url: custom_ajax_obj.ajax_url,
			type: 'POST',
			data: formData,
			success: function (response) {
				$('.products').html(response);
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
					$('#price_min').val(ui.values[0]);
					$('#price_max').val(ui.values[1]);
				},
				stop: function (event, ui) {
					$('#price_min').val(ui.values[0]);
					$('#price_max').val(ui.values[1]);
					submitFilterForm(); // Trigger product update when slider changes
				},
			});
		} else {
			priceSlider.slider('option', {
				min: parseFloat(min),
				max: parseFloat(max),
			});
			priceSlider.slider('values', [parseFloat(min), parseFloat(max)]);
		}
		$('#price_min_value').text(min);
		$('#price_max_value').text(max);
	}

	// Fetch and update the price range based on selected categories
	function fetchPriceRangeAndUpdateSlider() {
		var selectedCategories = $('input[name="filter_category[]"]:checked')
			.map(function () {
				return $(this).val();
			})
			.get();

		$.ajax({
			url: custom_ajax_obj.ajax_url,
			type: 'POST',
			data: {
				action: 'get_price_range',
				categories: selectedCategories,
				security: custom_ajax_obj.nonce, // Ensure this is being sent
			},
			beforeStart: function () {
				$('.woocommerce-wrapper .left').addClass('active');
			},
			success: function (response) {
				var data = JSON.parse(response);
				initializePriceSlider(data.min, data.max);
				$('.woocommerce-wrapper .left').removeClass('active');
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
