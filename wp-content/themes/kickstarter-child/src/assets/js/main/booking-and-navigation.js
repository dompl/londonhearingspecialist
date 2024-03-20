(function ($) {
	var floater = $('#floater');
	var navWrapper = $('#nav-wrapper');
	var floaterVisible = false;

	$('._nav').on('click', function () {
		$('#navigation').data('navigation').toggleOffcanvas();
	});

	// Initially hide the floater
	floater.hide();

	// Function to check the visibility of the main navigation
	function checkNavVisibility() {
		var scrollTop = $(window).scrollTop();
		var navOffset = navWrapper.offset().top + navWrapper.outerHeight();
		// Use matchMedia for checking width
		var isMobile = window.matchMedia('(max-width: 991px)').matches;

		if (scrollTop > navOffset && isMobile) {
			if (!floaterVisible) {
				floater.fadeIn(300);
				floaterVisible = true;
			}
		} else {
			if (floaterVisible) {
				floater.fadeOut(300);
				floaterVisible = false;
			}
		}
	}

	// Check on scroll, resize and initially
	$(window).on('scroll resize', checkNavVisibility);
	checkNavVisibility();
})(jQuery);
