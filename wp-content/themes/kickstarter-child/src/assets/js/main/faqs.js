(function ($) {
	var faqs = $('.london-faqs');

	faqs.on('click', '.question', function () {
		console.log('.question clicked');
		var currentFaq = $(this).closest('li');
		var answer = currentFaq.find('.answer');
		var icon = $(this).find('i');

		// Check if the current FAQ is already expanded
		var isExpanded = answer.is(':visible');

		// Collapse all FAQs
		faqs.find('.answer').slideUp();
		faqs.find('i').removeClass('icon-minus-solid').addClass('icon-plus-solid');
		faqs.find('.question').removeClass('active'); // Remove active class from all questions

		// Toggle the current FAQ if it was not already expanded
		if (!isExpanded) {
			answer.slideDown();
			icon.removeClass('icon-plus-solid').addClass('icon-minus-solid');
			$(this).addClass('active'); // Add active class to the clicked question
		}
	});
})(jQuery);
