jQuery(document).ready(function ($) {
	// Store original content to restore later
	var originalContentLeftMobile = $('#london-single-left-mobile').html();
	var originalProductName = $('.london-single-right .product-name').html();
	var originalProductManufacturer = $('.london-single-right .product-manufacturer').html();
	var originalProductPrice = $('.london-single-right .product-price').html();
	var originalProductMeta = $('.london-single-right .product-meta').html();

	// Function to move content
	function moveContent() {
		if ($(window).width() < 981) {
			// Create combined content
			var combinedContent = originalProductName + originalProductManufacturer + originalProductPrice + originalProductMeta;
			$('#london-single-left-mobile').html(combinedContent); // Move combined content to left mobile div
			$('.london-single-right .product-name, .london-single-right .product-manufacturer, .london-single-right .product-price, .london-single-right .product-meta').hide();
		} else {
			// Restore original content
			$('#london-single-left-mobile').html(originalContentLeftMobile);
			$('.london-single-right .product-name').html(originalProductName).show();
			$('.london-single-right .product-manufacturer').html(originalProductManufacturer).show();
			$('.london-single-right .product-price').html(originalProductPrice).show();
			$('.london-single-right .product-meta').html(originalProductMeta).show();
		}
	}

	moveContent(); // Call on document ready

	$(window).resize(function () {
		moveContent(); // Call on window resize
	});
});

jQuery(document).ready(function ($) {
	function closeOthers(current) {
		$('.london-tab h3.active, .london-tab .title.active')
			.not(current)
			.each(function () {
				$(this).removeClass('active').nextAll().slideUp();
				$(this).find('.icon').text('+'); // Replace with minus icon for closed tabs
			});
		$('.london-delivery-information, .london-product-full').removeClass('has-tab');
	}

	function toggleAccordion() {
		$('.london-tab h3, .london-tab .title').each(function () {
			var icon = $(this).find('.icon'); // Assuming .icon is the element containing the plus/minus text
			$(this)
				.off('click')
				.on('click', function () {
					if ($(window).width() < 991) {
						if (!$(this).hasClass('active')) {
							closeOthers(this);
							$(this).addClass('active').nextAll().slideDown();
							icon.text('-'); // Replace with plus icon for open tabs
							$(this).closest('.london-delivery-information, .london-product-full').addClass('has-tab');
						} else {
							$(this).removeClass('active').nextAll().slideUp();
							icon.text('+'); // Change back to plus when the section is closed
							$(this).closest('.london-delivery-information, .london-product-full').removeClass('has-tab');
						}
					}
				});
		});
	}

	function initAccordionDisplay() {
		$('.london-tab h3, .london-tab .title').each(function () {
			var icon = $(this).find('.icon'); // Assuming .icon is the element containing the plus/minus text
			if ($(window).width() < 991) {
				$(this).nextAll().hide();
				$('.london-delivery-information, .london-product-full').addClass('has-tab');
				$('.type-product').addClass('is-on-mobile');
				icon.text('+'); // Ensure all tabs start with plus when they are closed by default
			} else {
				$(this).nextAll().show();
				$('.london-delivery-information, .london-product-full').removeClass('has-tab');
				$(this).removeClass('active');
				$('.type-product').removeClass('is-on-mobile');
				icon.text('+'); // Reset icon to plus when not in accordion mode
			}
		});
	}

	$(window).resize(function () {
		initAccordionDisplay();
		toggleAccordion();
	});

	initAccordionDisplay();
	toggleAccordion();
});
