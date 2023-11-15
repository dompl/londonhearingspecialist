<?php get_header();
echo '<main role="main" aria-label="Content" ' . apply_filters( '_ks_article_main_attributes', null ) . '>';
if ( have_posts() ):
    echo '<section ' . apply_filters( '_ks_article_section_attributes', null ) . '>';
    while ( have_posts() ): the_post();
        echo '<article ' . apply_filters( '_ks_article_article_attributes', null ) . '>';
        the_content();
        echo '<article>';
    endwhile;
    echo '<section>';
    get_sidebar();
endif;
echo '<main>';
get_footer();