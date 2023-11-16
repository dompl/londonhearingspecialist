<?php

namespace Kickstarter;

class LondonUpdate {

    public function __construct() {
        //   $this->fetchRemoteCategories();
        //   $this->fetchRemotePosts();
        $this->fetchRemotePages();
    }

    private function remoteURL() {
        return 'https://londonhearingspecialist.co.uk';
    }

    private function fetchRemoteCategories() {

        $url      = $this->remoteURL() . '/wp-json/wp/v2/categories';
        $response = wp_remote_get( $url );

        if ( is_wp_error( $response ) ) {
            return;
        }

        $categories = json_decode( wp_remote_retrieve_body( $response ) );

        foreach ( $categories as $category ) {
            $existing_category = get_term_by( 'slug', $category->slug, 'category' );
            if (  !  $existing_category ) {
                // Category doesn't exist, create a new one.
                wp_insert_term( $category->name, 'category', array(
                    'description' => $category->description,
                    'slug'        => $category->slug
                ) );
            } else {
                // Update existing category.
                wp_update_term( $existing_category->term_id, 'category', array(
                    'description' => $category->description
                ) );
            }
        }

    }

    private function fetchRemotePages() {

        $url      = $this->remoteURL() . '/wp-json/wp/v2/pages?per_page=100';
        $response = wp_remote_get( $url );

        if ( is_wp_error( $response ) ) {
            return;
        }

        $pages = json_decode( wp_remote_retrieve_body( $response ) );

        $id_mapping = []; // To map remote IDs to local IDs

        foreach ( $pages as $page ) {

            $args = array(
                'post_title'   => $page->title->rendered,
                'post_content' => $page->content->rendered,
                'post_status'  => 'publish',
                'post_type'    => 'page',
                'post_name'    => $page->slug,
                // Initially, set post_parent to 0 (no parent)
                'post_parent'  => 0
            );

            $existing_page = get_page_by_path( $page->slug, OBJECT, 'page' );

            if (  !  $existing_page ) {
                // Create a new page and store the new page ID
                $new_page_id           = wp_insert_post( $args );
                $id_mapping[$page->id] = $new_page_id;
            } else {
                // Update the existing page
                $args['ID'] = $existing_page->ID;
                wp_update_post( $args );
                $id_mapping[$page->id] = $existing_page->ID;
            }
        }

        // Update the post_parent for each page
        foreach ( $pages as $page ) {
            if ( $page->parent && isset( $id_mapping[$page->parent] ) ) {
                wp_update_post( array(
                    'ID'          => $id_mapping[$page->id],
                    'post_parent' => $id_mapping[$page->parent]
                ) );
            }
        }
    }

    private function fetchRemotePosts() {
        $url      = $this->remoteURL() . '/wp-json/wp/v2/posts?per_page=1';
        $response = wp_remote_get( $url );

        if ( is_wp_error( $response ) ) {
            return;
        }

        $posts = json_decode( wp_remote_retrieve_body( $response ) );

        foreach ( $posts as $post ) {
            $existing_post = get_page_by_path( $post->slug, OBJECT, 'post' );
            if (  !  $existing_post ) {
                // Post doesn't exist, create a new one.
                wp_insert_post( array(
                    'post_title'   => $post->title->rendered,
                    'post_content' => $post->content->rendered,
                    'post_status'  => 'publish',
                    'post_type'    => 'post',
                    'post_name'    => $post->slug
                ) );
            } else {
                // Update existing post.
                wp_update_post( array(
                    'ID'           => $existing_post->ID,
                    'post_title'   => $post->title->rendered,
                    'post_content' => $post->content->rendered
                ) );
            }
        }
    }

}

// new LondonUpdate();