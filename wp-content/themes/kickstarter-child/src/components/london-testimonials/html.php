<?php
add_filter( \Kickstarter\MyAcf::Html(), 'wp_1700655036_london', 10, 2 );

function wp_1700655036_london( $html, $data ) {

    $googleRating = new GoogleRating();
    $reviews      = $googleRating->getReviews();

    if ( empty( $reviews['reviews'] ) ) {
        return $html;
    }
    $starts = $googleRating->displayStars();
    $count  = $googleRating->displayRatingCount();

    $display        = get_component( 'display', $data );
    $color          = 'color-' . get_component( 'color', $data );
    $slick_settings = [
        'slidesToShow'   => 1,
        'slidesToScroll' => 1,
        'adaptiveHeight' => true,
        'fade'           => true,
        'autoplay'       => true,
        'arrows'         => false,
        'autoplaySpeed'  => 5000

    ];
    $html .= '<div class="ltc">';

    $html .= '<div class="left">';
    $html .= '<div class="london-testimonials ' . $display . '" data-slick=' . json_encode( $slick_settings ) . '>';

    shuffle( $reviews['reviews'] );
    $i = 0;
    foreach ( $reviews['reviews'] as $review ) {
        if ( $review['rating'] < 4 ) {
            continue;
        }
        $author_name               = $review['author_name'];
        $author_url                = $review['author_url'];
        $profile_photo_url         = $review['profile_photo_url'];
        $relative_time_description = $review['relative_time_description'];
        $text                      = $review['text'];
        if ( $display == 'default' ) {
            // quote-right-solid
            $html .= '<div class="item' . ( $i == 0 ? ' first' : '' ) . '">';
            $html .= '<div class="top ' . $color . '">' . $text . '</div>';
            $html .= '<div class="bottom">';
            $html .= '<div class="author-image"><img src="' . $profile_photo_url . '" alt="Opinion about London Hearing Specialist from ' . $author_name . '" loading="lazy" width="45px" /></div>';
            $html .= '<div class="author-name ' . $color . '">' . ucfirst( $author_name ) . '</div>';
            $html .= '</div>';
            $html .= '</div>';
        }
        $i++;
    }
    $html .= '</div>';
    $html .= '</div>';
    $html .= '<div class="right">';
    $html .= '<div class="title ' . $color . '">London Hearing Specialist</div>';
    $html .= '<div class="middle"><span class="count ' . $color . '">' . $reviews['averageRating'] . '</span><span class="stars">' . $starts . '</span></div>';
    $html .= '<div class="count"><span class="a ' . $color . '">' . $count . '</span> <span class="b ' . $color . '">(Highly Recommended)</span></div>';
    $html .= '</div>';
    $html .= '</div>';
    $html .= '</div>';

    return $html;
}