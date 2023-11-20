<?php
namespace London;
use GoogleRating;

class Helpers {

    public static function GoogleRating() {

        $googleRating = new GoogleRating();
        $reviews      = $googleRating->getReviews();
        $starts       = $googleRating->displayStars();
        $count        = $googleRating->displayRatingCount();

        $html = '<div class="item rating google-star-rating">';
        $html .= '<div class="rating-top">Highly Recommended</div>';
        $html .= '<div class="rating-middle"><span class="count">' . $reviews['averageRating'] . '</span><span class="stars">' . $starts . '</span></div>';
        $html .= '<div class="rating-bottom"><span class="number">' . $count . '</span><span class="word"> reviews</span></div>';
        $html .= '</div>';
        return $html;

    }

}