(function ($) {
	var faqs = $('.london-faqs');
	faqs.on('click', '.question', function () {
		var currentFaq = $(this).closest('li');
		var answer = currentFaq.find('.answer');
		var icon = $(this).find('i');

		// Check if the current FAQ is already expanded
		var isExpanded = answer.is(':visible');

		// Collapse all FAQs
		faqs.find('.answer').slideUp();
		faqs.find('.minus-solid').removeClass('minus-solid').addClass('plus-solid');

		// Toggle the current FAQ if it was not already expanded
		if (!isExpanded) {
			answer.slideDown();
			icon.removeClass('plus-solid').addClass('minus-solid');
		}
	});
});
