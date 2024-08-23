jQuery(document).ready(function ($) {
	/**
	 *   FIlter modal
	 */
	$('#all-filter-button').magnificPopup({
		items: {
			src: '#filter-wrapper',
			type: 'inline',
		},
		mainClass: 'mfp-filter-wrapper', // Add your custom class here
		midClick: true, // Allow opening popup on middle mouse click
		disableOn: function () {
			if ($(window).width() > 993) {
				return false;
			}
			return true;
		},
	});

	// Check if custom_ajax_obj is defined; if not, exit the function
	if (typeof custom_ajax_obj === 'undefined') {
		return;
	}

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
			error: function (xhr, status, error) {},
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

		var selectedManufacturers = $('input[name="filter_manufacturer[]"]:checked')
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
				manufacturers: selectedManufacturers,
				security: custom_ajax_obj.nonce,
			},
			beforeStart: function () {
				$('.woocommerce-wrapper .left').addClass('active');
			},
			success: function (response) {
				var data = JSON.parse(response);
				initializePriceSlider(data.min, data.max);
				$('.woocommerce-wrapper .left').removeClass('active');
			},
			error: function (xhr, status, error) {},
		});
	}

	// Update banner text based on selected categories
	function updateBannerText() {
		// Get all category checkboxes
		var $checkboxes = $('input[name="filter_category[]"]');
		var $checkedCheckboxes = $checkboxes.filter(':checked');

		var selectedCategoryNames = $checkedCheckboxes
			.map(function () {
				return $(this).siblings('label').text();
			})
			.get();

		var bannerText = '';

		// Check if all checkboxes are checked or if $_GET['all-products'] is set
		var urlParams = new URLSearchParams(window.location.search);
		var allProductsSet = urlParams.has('all-products');

		if ($checkedCheckboxes.length === $checkboxes.length || allProductsSet) {
			bannerText = 'All Products';
		} else if (selectedCategoryNames.length > 0) {
			if (selectedCategoryNames.length === 1) {
				bannerText = selectedCategoryNames[0];
			} else {
				var lastCategory = selectedCategoryNames.pop();
				bannerText = selectedCategoryNames.join(', ') + ' & ' + lastCategory;
			}
		} else {
			bannerText = 'All Products'; // Default text when no categories are selected
		}

		$('#product-name-title h1').html('<span>' + bannerText + '</span>');
	}

	// Event listener for button submit
	$('#submit-filter').on('click', function (e) {
		e.preventDefault(); // Prevent default form submission if it's inside a form

		fetchPriceRangeAndUpdateSlider(); // Update slider when categories change
		submitFilterForm(); // Update products list
		updateBannerText(); // Update banner text when categories change
	});

	// Initialize slider, products display, and banner text on page load
	fetchPriceRangeAndUpdateSlider();
	submitFilterForm();
	updateBannerText();
});
