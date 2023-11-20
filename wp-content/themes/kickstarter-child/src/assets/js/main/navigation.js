/* Main Navigation */
import 'redfrog-navigation/navigation.js';
(function ($) {
	$(function () {
		var navigation = $('#navigation');
		// Retrieve the data attribute
		var customSettings = navigation.data('nav');
		// Default settings
		var defaultSettings = {
			// mobileBreakpoint: 1400,
			showDuration: 10000,
			// hideDuration: 100,
			// offCanvasSide: ks[0].nav.off,
			// hideDelayDuration: 100,
			// showDelayDuration: 0,
			// submenuTrigger: "hover",
			// effect: "fade",
			// submenuIndicator: true,
			// submenuIndicatorTrigger: false,
			// hideSubWhenGoOut: true,
			// visibleSubmenusOnMobile: false,
			// overlay: true,
			// overlayColor: "rgba(0, 0, 0, 0.7)",
			// hidden: false,
			// hiddenOnMobile: false,
			// offCanvasCloseButton: true,
			// animationOnShow: "",
			// animationOnHide: "",
			// hideScrollBar: true,
			// onInit: function () {},
			// onLandscape: function () {},
			// onPortrait: function () {},
			// onShowOffCanvas: function () {},
			// onHideOffCanvas: function () {},
		};

		// Merge default settings with custom settings, overwriting defaults
		var finalSettings = $.extend({}, defaultSettings, customSettings);
		navigation.navigation(finalSettings);
		// var navigation = $('#navigation').navigation();
		$('.main-nav-init').click(function () {
			$('.nav-toggle').click();
		});
	});
})(jQuery);
