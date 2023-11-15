<?php get_header();?>
<?php do_action( '_lake_before_main' )?>
<main role="main" aria-label="Content">
    <?php if ( have_posts() ): ?>
    <section>
        <?php while ( have_posts() ): the_post();?>
        <article>
            <?php the_content();?>
        </article>
        <?php endwhile;?>
    </section>
    <?php get_sidebar()?>
    <?php endif;?>
</main>
<?php get_footer();?>