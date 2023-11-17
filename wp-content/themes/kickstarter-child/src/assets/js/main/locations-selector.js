//
document.addEventListener('DOMContentLoaded', function () {
	// Grab the element with the ID 'location-select'
	var locationSelect = document.getElementById('location-select');

	// Check if the element exists to prevent errors
	if (locationSelect) {
		// Attempt to find the toggle link element which is expected to be directly before the 'location-select' element
		var toggleLink = locationSelect.previousElementSibling;

		// Check if the toggleLink element is found
		if (toggleLink && toggleLink.tagName === 'A') {
			// Add click event listener to the toggle link
			toggleLink.addEventListener('click', function (event) {
				event.preventDefault(); // Prevent the default action (navigation) on click
				locationSelect.classList.toggle('show'); // Toggle the 'show' class to display or hide the dropdown
			});
		} else {
			// Log an error or handle cases where the toggle link is not found or not an anchor tag
			console.error('Toggle link for dropdown not found or not an anchor tag.');
		}
	} else {
		// Log an error or handle the case where 'location-select' element does not exist
		console.error("Element with ID 'location-select' not found.");
	}
});
