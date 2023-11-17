<?php
/**
 * GoogleRating Class
 *
 * This class handles the fetching and displaying of Google Reviews for a specified place.
 * It uses the Google Places API to retrieve reviews and caches them using the WordPress
 * Transient API to reduce API calls.
 */
use Kickstarter\MyHelpers;

class GoogleRating {

    private $apiKey;
    private $placeId;
    private $transientName;
    private $transientExpiration;

    /**
     * Constructor for the GoogleRating class.
     *
     * @param string $apiKey Google API Key.
     * @param string $placeId Google Place ID.
     * @param int $transientExpiration Cache expiration time in seconds.
     */

    public function __construct() {
        $this->apiKey              = MyHelpers::getThemeData( 'ks_google_api_key' );
        $this->placeId             = MyHelpers::getThemeData( 'ks_google_place_id' );
        $this->transientName       = 'google_reviews';
        $this->transientExpiration = apply_filters( 'ks_google_reviews_transient_expiration', 1 * WEEK_IN_SECONDS );

        // Check if API key or Place ID is missing and handle it appropriately
        if (  !  $this->apiKey || !  $this->placeId ) {
            // You can throw an exception or handle the error in a different way
            throw new Exception( 'Google API Key and Place ID are required.' );
        }
    }

    /**
     * Display rating count.
     *
     * @param float $rating Rating value.
     * @return string HTML for the star ratings.
     */
    public function displayRatingCount( $count = false ) {
        return $count == false ? $this->getReviews()['ratingCount'] : $count;
    }

    /**
     * Display SVG stars based on rating.
     *
     * @param float $rating Rating value.
     * @return string HTML for the star ratings.
     */
    public function displayStars( $rating = false ) {

        $starFull  = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>';
        $starHalf  = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M341.5 13.5C337.5 5.2 329.1 0 319.9 0s-17.6 5.2-21.6 13.5L229.7 154.8 76.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L174.2 328.4 148 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L465.6 328.4 576.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L410.1 154.8 341.5 13.5zM320 384.7V79.1l52.5 108.1c3.5 7.1 10.2 12.1 18.1 13.3l118.3 17.5L423 303c-5.5 5.5-8.1 13.3-6.8 21l20.2 119.6L331.2 387.5c-3.5-1.9-7.4-2.8-11.2-2.8z"/></svg>';
        $starEmpty = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"/></svg>';

        $rating = $rating == false ? $this->getReviews()['averageRating'] : $rating;

        // Split the rating into whole and decimal parts
        $fullStars   = floor( $rating );
        $decimalPart = $rating - $fullStars;
        // Determine the number of full, half, and empty stars
        $halfStar = 0;
        if ( $decimalPart >= 0.5 && $decimalPart < 0.6 ) {
            $halfStar = 1;
        } elseif ( $decimalPart >= 0.6 ) {
            $fullStars += 1;
        }
        $emptyStars = 5 - $fullStars - $halfStar;

        // Generate the HTML for the stars
        $html = str_repeat( $starFull, $fullStars );
        $html .= str_repeat( $starHalf, $halfStar );
        $html .= str_repeat( $starEmpty, $emptyStars );

        return $html;

        return $html;
    }

    /**
     * Fetch reviews from Google Places API and cache them.
     *
     * @param int $maxReviews Maximum number of reviews to fetch.
     * @return array Array containing reviews and overall rating.
     */
    public function getReviews( $maxReviews = 5 ) {
        // Ensure API key and Place ID are available
        if (  !  $this->apiKey || !  $this->placeId ) {
            return ['reviews' => [], 'averageRating' => 0, 'ratingCount' => 0];
        }
        // Check if transient data is available
        $cachedData = get_transient( $this->transientName );
        if ( $cachedData !== false ) {
            return $cachedData;
        }

        $url = "https://maps.googleapis.com/maps/api/place/details/json?placeid={$this->placeId}&key={$this->apiKey}";

        $ch = curl_init();
        curl_setopt( $ch, CURLOPT_URL, $url );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
        $response = curl_exec( $ch );
        curl_close( $ch );

        $data = json_decode( $response, true );

        if ( isset( $data['result']['reviews'] ) ) {

            $reviews       = array_slice( $data['result']['reviews'], 0, $maxReviews );
            $averageRating = $data['result']['rating'];
            $ratingCount   = $data['result']['user_ratings_total'];

            // Save data in transient
            $cachedData = ['reviews' => $reviews, 'averageRating' => $averageRating, 'ratingCount' => $ratingCount];

            set_transient( $this->transientName, $cachedData, $this->transientExpiration );

            return $cachedData;
        } else {
            return ['reviews' => [], 'averageRating' => 0, 'ratingCount' => 0];
        }
    }
}