<?php
add_action( 'wp_head', 'london_redirects' );

function london_redirects() {

    global $post;

    $redirects = [
        636 => 638,
        695 => 679
    ];
    if (  !  isset( $post->ID ) ) {
        return;
    }
    foreach ( $redirects as $from => $to ) {
        if ( $post->ID == $from ) {
            wp_safe_redirect( get_permalink( $to ), 301 );
            exit;
        }
    }
}
function custom_redirect_full_url() {
    if (  !  is_admin() ) {
        // Get the full request URI
        $request_uri = $_SERVER['REQUEST_URI'];

        // Define your full URL redirects here
        $url_redirects = array(
            "/ear-wax-removal-delete/"                          => "/ear-wax-removal-delete/",
            "/hearing-consultations/hertfordshire/"             => "/services/hearing-consultations/hertfordshire/",
            "/hearing-consultations/london/"                    => "/services/hearing-consultations/london/",
            "/hearing-test/"                                    => "/services/hearing-test/",
            "/hearing-test/hertfordshire/"                      => "/services/hearing-test/hertfordshire/",
            "/hearing-test/london/"                             => "/services/hearing-test/london/",
            "/hearing-test-for-children-online-hearing-test-2/" => "/services/hearing-test-for-children-online-hearing-test-2/",
            "/hearing-test-for-children-online-hearing-test/"   => "/services/hearing-test-for-children-online-hearing-test/",
            "/childrens-ear-wax-removal/hertfordshire/"         => "/services/childrens-ear-wax-removal/hertfordshire/",
            "/childrens-ear-wax-removal/london/"                => "/services/childrens-ear-wax-removal/london/",
            "/kids-ear-wax-removal-service-tv/"                 => "/services/kids-ear-wax-removal-service-tv/",
            "/kids-ear-wax-removal-service/"                    => "/services/kids-ear-wax-removal-service/",
            "/childrens-hearing-test/hertfordshire/"            => "/services/childrens-hearing-test/hertfordshire/",
            "/childrens-hearing-test/london/"                   => "/services/childrens-hearing-test/london/",
            "/online-hearing-test-london/"                      => "/services/online-hearing-test-london/",
            "/tinnitus-treatment/"                              => "/services/tinnitus-treatment/",
            "/video-otoscopy/"                                  => "/services/video-otoscopy/",
            "/category/hearing-consultations/"                  => "/hearing-consultations/",
            "/category/hearing-aids/"                           => "/hearing-aids-2/",
            "/category/hearing-protection/"                     => "/hearing-protection/",
            "/ear-wax-removal/"                                 => "/ear-wax-removal-3/",
            "/category/ear-wax-removal/hertfordshire/"          => "/ear-wax-removal-hertfordshire/",
            "/category/ear-wax-removal/london/"                 => "/ear-wax-removal-london-2/",
            "/category/dizziness/"                              => "/dizziness-2/",
            "/category/covid/"                                  => "/covid/",
            "/category/ear-microsuction-london/"                => "/ear-microsuction-london/",
            "/category/kids-ear-wax-removal/"                   => "/kids-ear-wax-removal/",
            "/category/ear-wax-removal-london/"                 => "/ear-wax-removal-london-3/",
            "/category/ear-syringing-london/"                   => "/ear-syringing-london/",
            "/category/ear-cleaning-london/"                    => "/ear-cleaning-london/",
            "/category/dizziness-treatment-london/"             => "/dizziness-treatment-london/",
            "/category/vertigo-treatment-london/"               => "/vertigo-treatment-london/",
            "/category/bppv-treatment-london/"                  => "/bppv-treatment-london/",
            "/category/vertigo-cure-london/"                    => "/vertigo-cure-london/",
            "/category/paroxysmal-benign-positional-vertigo/"   => "/paroxysmal-benign-positional-vertigo/",
            "/category/professional-ear-plugs/"                 => "/professional-ear-plugs/",
            "/category/moulded-ear-plugs/"                      => "/moulded-ear-plugs/",
            "/category/hearing-test-london-and-hertfordhire/"   => "/hearing-test-london-and-hertfordhire/",
            "/category/hearing-test-for-children/"              => "/hearing-test-for-children/"
        );

        // Check if the request URI matches any defined redirects
        foreach ( $url_redirects as $old_url => $new_url ) {

            if ( strpos( $request_uri, $old_url ) === 0 ) {
                // Perform the redirect
                wp_safe_redirect( home_url( $new_url ) );
                exit;
            }
        }
    }
}
add_action( 'template_redirect', 'custom_redirect_full_url' );

function custom_redirect_full_url_() {
    if (  !  is_admin() ) {
        $request_uri = rtrim( $_SERVER['REQUEST_URI'], '/' ) . '/'; // Ensure trailing slash for consistency

        $url_redirects = array(
            "/hearing-consultations/hertfordshire/"             => "/services/hearing-consultations/hertfordshire/",
            "/hearing-consultations/london/"                    => "/services/hearing-consultations/london/",
            "/hearing-test/hertfordshire/"                      => "/services/hearing-test/hertfordshire/",
            "/hearing-test/london/"                             => "/services/hearing-test/london/",
            "/hearing-test-for-children-online-hearing-test-2/" => "/services/hearing-test-for-children-online-hearing-test-2/",
            "/hearing-test-for-children-online-hearing-test/"   => "/services/hearing-test-for-children-online-hearing-test/",
            "/childrens-ear-wax-removal/hertfordshire/"         => "/services/childrens-ear-wax-removal/hertfordshire/",
            "/childrens-ear-wax-removal/london/"                => "/services/childrens-ear-wax-removal/london/",
            "/kids-ear-wax-removal-service-tv/"                 => "/services/kids-ear-wax-removal-service-tv/",
            "/kids-ear-wax-removal-service/"                    => "/services/kids-ear-wax-removal-service/",
            "/childrens-hearing-test/hertfordshire/"            => "/services/childrens-hearing-test/hertfordshire/",
            "/childrens-hearing-test/london/"                   => "/services/childrens-hearing-test/london/",
            "/online-hearing-test-london/"                      => "/services/online-hearing-test-london/",
            "/tinnitus-treatment/"                              => "/services/tinnitus-treatment/",
            "/video-otoscopy/"                                  => "/services/video-otoscopy/",
            "/category/hearing-consultations/"                  => "/hearing-consultations/",
            "/category/hearing-aids/"                           => "/hearing-aids-2/",
            "/category/hearing-protection/"                     => "/hearing-protection/",
            "/category/ear-wax-removal/hertfordshire/"          => "/ear-wax-removal-hertfordshire/",
            "/category/ear-wax-removal/london/"                 => "/ear-wax-removal-london-2/",
            "/category/dizziness/"                              => "/dizziness-2/",
            "/category/covid/"                                  => "/covid/",
            "/category/ear-microsuction-london/"                => "/ear-microsuction-london/",
            "/category/kids-ear-wax-removal/"                   => "/kids-ear-wax-removal/",
            "/category/ear-wax-removal-london/"                 => "/ear-wax-removal-london-3/",
            "/category/ear-syringing-london/"                   => "/ear-syringing-london/",
            "/category/ear-cleaning-london/"                    => "/ear-cleaning-london/",
            "/category/dizziness-treatment-london/"             => "/dizziness-treatment-london/",
            "/category/vertigo-treatment-london/"               => "/vertigo-treatment-london/",
            "/category/bppv-treatment-london/"                  => "/bppv-treatment-london/",
            "/category/vertigo-cure-london/"                    => "/vertigo-cure-london/",
            "/category/paroxysmal-benign-positional-vertigo/"   => "/paroxysmal-benign-positional-vertigo/",
            "/category/professional-ear-plugs/"                 => "/professional-ear-plugs/",
            "/category/moulded-ear-plugs/"                      => "/moulded-ear-plugs/",
            "/category/hearing-test-london-and-hertfordhire/"   => "/hearing-test-london-and-hertfordhire/",
            "/category/hearing-test-for-children/"              => "/hearing-test-for-children/"
        );

        foreach ( $url_redirects as $old_url => $new_url ) {
            $old_url      = rtrim( $old_url, '/' ) . '/'; // Normalize with trailing slash
            $new_url_full = rtrim( home_url( $new_url ), '/' ) . '/'; // Full URL with trailing slash

            // Debugging: error_log("Checking: $old_url against $request_uri");

            if ( strpos( $request_uri, $old_url ) !== false && $request_uri !== $new_url_full ) {
                wp_safe_redirect( $new_url_full );
                exit;
            }
        }
    }
}
add_action( 'template_redirect', 'custom_redirect_full_url_' );