<p>This guide provides instructions on how to use the GoogleRating class in your WordPress website to display Google reviews.</p>
<h4>Step 1: Initialization</h4>
<p>First, create an instance of the GoogleRating class. The class automatically fetches the API key and place ID from your theme's settings.</p>
<code>$googleRating = new GoogleRating();</code>
<h4>Step 2: Fetching Reviews</h4>
<p>Use the <code>getReviews</code> method to fetch reviews. You can specify the maximum number of reviews to retrieve.</p>
<code>$reviewsData = $googleRating->getReviews(5); // Fetches up to 5 reviews</code>
<h4>Step 3: Displaying Star Ratings</h4>
<p>To display star ratings based on the average rating, use the <code>displayStars</code> method.</p>
<code>$averageRating = $reviewsData['averageRating'];<br>echo $googleRating->displayStars($averageRating);</code>
<h4>Additional Information</h4>
<ul>
    <li>Ensure that your theme's settings include the Google API Key and Place ID.</li>
    <li>The class uses WordPress transients to cache the reviews for efficient API usage.</li>
    <li>Handle exceptions or errors as per your application's requirements.</li>
</ul>