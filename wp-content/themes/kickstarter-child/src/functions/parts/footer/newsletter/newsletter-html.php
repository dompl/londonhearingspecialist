<?php

function london_footer_newsletter_signup() {
    $post_id = get_the_ID();
    if (  !  empty( $post_id ) ) {
        if ( get_post_meta( $post_id, 'hide_newsletter', true ) == 1 ) {
            return;
        }
    }
    $background = false;
    if (  !  empty( get_the_ID() ) ) {
        $footer_bcg = get_post_meta( get_the_ID(), 'footer_bcg', true );
        if (  !  empty( $footer_bcg ) ) {
            $background = ' class="before-bcg-' . $footer_bcg . '"';
        }
    }
    ?>
<div id="london-newsletter" <?php echo $background; ?>>
    <div class="container">
        <div class="inner">
            <div id="london-form-content">
                <div class="title">Join our newsletter mailing list</div>
                <div class="description">Get exclusive offers & discounts with London Hearing Specialist</div>
            </div>
            <div id="london-form">
                <form id="newsletter-signup" method="post">
                    <div class="wrapper">
                        <div class="left">
                            <input type="email" id="email" name="email" placeholder="Email address *" required>
                            <input type="hidden" name="submission_url" id="submission_url" value="<?php echo htmlspecialchars( $_SERVER['REQUEST_URI'] ) ?>">
                            <input type="hidden" name="nonce" id="nonce" value="<?php echo wp_create_nonce( 'london_newsletter_signup' ) ?>">
                        </div>
                        <div class="right">
                            <button type="submit" class="button white icon-button"><span>Subscribe</span><!-- 1 -->
                                <div id="nl-loader" style="display:none">
                                    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
                                        <path opacity="0.2" fill="#3889cd" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" />
                                        <path fill="#3889cd" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z">
                                            <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite" />
                                        </path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php
}