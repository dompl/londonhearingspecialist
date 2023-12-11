<?php
namespace Kickstarter;

class ThemeUpdate {

    public function __construct() {
        add_filter( 'site_transient_update_themes', [$this, 'ThemeUpdateSystem'] );
        add_filter( 'upgrader_package_options', [$this, 'ThemeUpdatePackageOption'], 10, 1 );
    }

    public function ThemeUpdateSystem( $transient ) {
        // let's get the theme directory name
        $theme      = wp_get_theme( get_template() );
        $stylesheet = $theme->get_stylesheet();

        // now let's get the theme version
        $version = $theme->get( 'Version' );

        // First, let's check if a transient with update data exists
        $saved = get_transient( 'ks_theme_update_data' );

        // If the transient exists, use it. If not, fetch the update data.
        if ( $saved ) {
            $remote = $saved;
        } else {
            // connect to a remote server where the update information is stored
            $remote = wp_remote_get(
                'http://theme.onfrog.co.uk/redfrogstudio.json',
                [
                    'timeout'   => 10,
                    'sslverify' => false,
                    'headers'   => ['Accept' => 'application/json']
                ]
            );

            // check for errors
            if (
                is_wp_error( $remote )
                || 200 !== wp_remote_retrieve_response_code( $remote )
                || empty( wp_remote_retrieve_body( $remote ) )
            ) {
                return $transient;
            }

            // Store the data in a transient. Expires in 12 hours.
            set_transient( 'ks_theme_update_data', $remote, 12 * HOUR_IN_SECONDS );
        }

        $remote = json_decode( wp_remote_retrieve_body( $remote ) );

        if (  !  $remote ) {
            return $transient; // who knows, maybe JSON is not valid
        }

        $data = [
            'theme'        => $stylesheet,
            'requires'     => $remote->requires,
            'requires_php' => $remote->requires_php,
            'new_version'  => $remote->version,
            'package'      => $remote->download_url,
            'details_url'  => isset( $remote->details_url ) ? $remote->details_url : null
        ];

        // check all the versions now
        if (
            version_compare( $version, $remote->version, '<' )
            && version_compare( $remote->requires, get_bloginfo( 'version' ), '<' )
            && version_compare( $remote->requires_php, PHP_VERSION, '<' )
        ) {
            if ( is_object( $transient ) ) {
                // Check if the remote version is different from the installed version
                if ( $remote->version !== $version ) {
                    $transient->response[$stylesheet] = $data;
                }
            } else {
                // Check if the remote version is different from the installed version
                if ( $remote->version !== $version ) {
                    $transient = (object) [
                        'response' => [$stylesheet => $data]
                    ];
                }
            }
        } else {
            if ( is_object( $transient ) ) {
                $transient->no_update[$stylesheet] = $data;
            } else {
                $transient = (object) [
                    'no_update' => [$stylesheet => $data]
                ];
            }
        }

        return $transient;
    }

    public function ThemeUpdatePackageOption( $options ) {
        // Check if this is a theme update
        if ( isset( $options['destination'] ) && isset( $options['type'] ) && 'theme' === $options['type'] ) {
            // Get the theme directory name
            $stylesheet = get_template();

            // Get the correct theme directory path
            $theme_dir = get_theme_root() . '/' . $stylesheet;

            // Replace the destination with the current theme directory
            $options['destination'] = $theme_dir;

            // Ensure the correct directory is used for the update
            $options['clear_destination'] = true;
        }
        return $options;
    }

}
new ThemeUpdate();