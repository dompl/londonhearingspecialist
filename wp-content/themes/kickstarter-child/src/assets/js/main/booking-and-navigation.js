// (function ($) {
//
// 	var floater = $('#floater');
// 	var navWrapper = $('#nav-wrapper');
// 	var floaterVisible = false;
//
// 	$('._nav').on('click', function () {
// 		$('#navigation').data('navigation').toggleOffcanvas();
// 	});
//
// 	// Initially hide the floater
// 	floater.hide();
//
// 	// Function to check the visibility of the main navigation
// 	function checkNavVisibility() {
// 		var scrollTop = $(window).scrollTop();
// 		var navOffset = navWrapper.offset().top + navWrapper.outerHeight();
// 		// Use matchMedia for checking width
// 		var isMobile = window.matchMedia('(max-width: 991px)').matches;
//
// 		if (scrollTop > navOffset && isMobile) {
// 			if (!floaterVisible) {
// 				floater.fadeIn(300);
// 				floaterVisible = true;
// 			}
// 		} else {
// 			if (floaterVisible) {
// 				floater.fadeOut(300);
// 				floaterVisible = false;
// 			}
// 		}
// 	}
//
// 	// Check on scroll, resize and initially
// 	$(window).on('scroll resize', checkNavVisibility);
// 	checkNavVisibility();
// })(jQuery);

jQuery(document).ready(function ($) {
	var header = $('#top-wrapper');
	var header_height = header.height(); // Correct method to get height
	var headerOffset = 1; // Assuming you start your header becoming sticky immediately

	$(window).scroll(function () {
		var scrollPos = $(window).scrollTop();
		if ($(window).width() < 992) {
			var logoHtml = $('.new-woo-container .left .logos').html();
			console.log(logoHtml);
			// logoHtml.addCss('display', 'none');
			$('#top-wrapper .right .locations').after(logoHtml);
		}

		if (scrollPos >= headerOffset && $(window).width() < 992) {
			if ($('#temp-item').length === 0) {
				// Only append if temp-item does not exist
				header.before('<div id="temp-item" style="height: ' + header_height + 'px;"></div>');
			}
			header.addClass('sticky');
		} else {
			$('#temp-item').remove();
			header.removeClass('sticky');
		}
	});
});
