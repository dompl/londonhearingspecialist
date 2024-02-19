<?php get_header();?>
<?php do_action( '_lake_before_main' )?>
<main role="main" aria-label="Content">
    <?php if ( have_posts() ): ?>
    <section>
        <?php while ( have_posts() ): the_post();?>
        <article>
            <div class="space space-lg space-out"></div>
            <div class="container">
                <div class="london-content"><?php the_content();?></div>
            </div>
            <div class="space space-lg space-out"></div>
        </article>
        <?php endwhile;?>
    </section>
    <?php get_sidebar()?>
    <?php endif;?>
</main>
<?php get_footer();?>