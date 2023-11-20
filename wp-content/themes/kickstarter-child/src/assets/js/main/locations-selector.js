document.addEventListener('DOMContentLoaded', function () {
	var locationSelect = document.getElementById('location-select');
	var hideDropdownTimeout;

	// Function to hide the dropdown with a delay
	function hideDropdown() {
		hideDropdownTimeout = setTimeout(function () {
			locationSelect.classList.remove('show');
		}, 300); // Delay of 100ms
	}

	// Function to clear the hide timeout
	function clearHideTimeout() {
		if (hideDropdownTimeout) {
			clearTimeout(hideDropdownTimeout);
			hideDropdownTimeout = null;
		}
	}

	// Check if the locationSelect element exists
	if (locationSelect) {
		var toggleLink = locationSelect.previousElementSibling;

		if (toggleLink && toggleLink.tagName === 'A') {
			toggleLink.addEventListener('click', function (event) {
				event.preventDefault();
				clearHideTimeout();
				locationSelect.classList.toggle('show');
			});

			// Add mouseout event listener to the dropdown
			locationSelect.addEventListener('mouseout', function () {
				hideDropdown();
			});

			// Add mouseover event listener to cancel the hide on hover
			locationSelect.addEventListener('mouseover', function () {
				clearHideTimeout();
			});
		} else {
			console.error('Toggle link for dropdown not found or not an anchor tag.');
		}

		// Event listener to detect clicks outside the dropdown
		document.addEventListener('click', function (event) {
			if (!locationSelect.contains(event.target) && !toggleLink.contains(event.target)) {
				hideDropdown();
			}
		});
	} else {
		console.error("Element with ID 'location-select' not found.");
	}
});
