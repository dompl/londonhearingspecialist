<?php
/**
 * Class that install the plugin tables
 *
 * @package YITH/Search
 * @author YITH
 * @version 2.0.0
 */

defined( 'ABSPATH' ) || exit;
if ( ! class_exists( 'YITH_WCAS_Install_Premium' ) && class_exists( 'YITH_WCAS_Install' ) ) {
	/**
	 * The class that init the db
	 */
	class YITH_WCAS_Install_Premium extends YITH_WCAS_Install {
		/**
		 * The function that init the configuration
		 *
		 * @author YITH
		 * @since  2.0.0
		 */
		public static function init() {
			self::check_version();
			self::initialize_table_name();
			self::install_tables();
			add_action('init', array( __CLASS__, 'first_indexing' ));
		}


		/**
		 * Define new table name on wpbd
		 *
		 * @author YITH
		 * @since  2.0.0
		 */
		protected static function initialize_table_name() {
			parent::initialize_table_name();

			global $wpdb;
			$wpdb->yith_wcas_index_taxonomy = $wpdb->prefix . 'yith_wcas_index_taxonomy';
			$wpdb->yith_wcas_query_log      = $wpdb->prefix . 'yith_wcas_query_log';
		}


		/**
		 * Create the plugin tables
		 *
		 * @return void
		 * @since  1.0.0
		 * @author YITH
		 */
		protected static function install_tables() {
			$current_db_version = get_option( 'yith_wcas_db_version' );
			$has_free_version   = get_option( 'yith_wcas_free_option_version' );
			if ( $has_free_version === false && version_compare( $current_db_version, self::YITH_WCAS_DB_VERSION, '>=' ) ) {

				return;
			}


			parent::install_tables();

			// assure dbDelta function is defined.
			if ( ! function_exists( 'dbDelta' ) ) {
				require_once ABSPATH . 'wp-admin/includes/upgrade.php';
			}
			global $wpdb;
			// retrieve table charset.
			$charset_collate = $wpdb->get_charset_collate();

			$sql = "CREATE TABLE $wpdb->yith_wcas_index_taxonomy (
				id bigint(20) NOT NULL AUTO_INCREMENT,
				term_id bigint(20) NOT NULL,
				term_name varchar(200) NOT NULL,
				taxonomy varchar(32) NOT NULL,
				url varchar(255) NOT NULL DEFAULT '',
				parent bigint(20) NOT NULL DEFAULT 0,
				count bigint(20) NOT NULL DEFAULT 0,
				lang varchar(10) NOT NULL DEFAULT '',
                PRIMARY KEY (id)
                )ENGINE=InnoDB $charset_collate;";

			dbDelta( $sql );

			$sql = "CREATE TABLE $wpdb->yith_wcas_query_log (
				id bigint(20) NOT NULL AUTO_INCREMENT,
				user_id bigint(20) DEFAULT 0,
				query varchar(200) NOT NULL,
				search_date datetime NOT NULL,
				num_results int(11) DEFAULT 0,
				clicked_product bigint(20) DEFAULT 0,
				lang varchar(10) NOT NULL DEFAULT '',
                PRIMARY KEY (id)
                )ENGINE=InnoDB $charset_collate;";

			dbDelta( $sql );

			$wpdb->query( "CREATE INDEX index_term_id ON $wpdb->yith_wcas_index_taxonomy (term_id)" ); //phpcs:ignore
			$wpdb->query( "CREATE INDEX index_query ON $wpdb->yith_wcas_query_log (query)" ); //phpcs:ignor
			$wpdb->query( "CREATE INDEX index_query_lang_search_date ON $wpdb->yith_wcas_query_log (query,lang,search_date DESC)" ); //phpcs:ignore

			update_option( 'yith_wcas_db_version', self::YITH_WCAS_DB_VERSION );
			delete_option( 'yith_wcas_free_option_version' );
		}

		/**
		 * Check if the plugin is new or is an update.
		 *
		 * @return void
		 */
		protected static function check_version() {
			$ywcas_option_version = get_option( 'yith_wcas_option_version', '2.0.0' );

			if ( version_compare( $ywcas_option_version, '1.6.9', '<' ) ) {
				self::update_to_1_6_9_version();
			}

			if ( version_compare( $ywcas_option_version, '2.0.0', '<' ) ) {
				self::update_to_2_0_0_version();
			}

			update_option( 'yith_wcas_option_version', '2.0.0' );
		}

		/**
		 * Update the options from the oldest version to 1.6.9
		 */
		private static function update_to_1_6_9_version() {
			$sale_badge_bgcolor       = get_option( 'yith_wcas_sale_badge_bgcolor' );
			$outofstock_badge_bgcolor = get_option( 'yith_wcas_outofstock_badge_bgcolor' );
			$featured_badge_bgcolor   = get_option( 'yith_wcas_featured_badge_bgcolor' );

			if ( $sale_badge_bgcolor ) {
				update_option(
					'yith_wcas_sale_badge',
					array(
						'bgcolor' => $sale_badge_bgcolor,
						'color'   => get_option( 'yith_wcas_sale_badge_color' ),
					)
				);
				delete_option( 'yith_wcas_sale_badge_bgcolor' );
				delete_option( 'yith_wcas_sale_badge_color' );
			}

			if ( $outofstock_badge_bgcolor ) {
				update_option(
					'yith_wcas_outofstock',
					array(
						'bgcolor' => $outofstock_badge_bgcolor,
						'color'   => get_option( 'yith_wcas_outofstock_badge_color' ),
					)
				);
				delete_option( 'yith_wcas_outofstock_badge_bgcolor' );
				delete_option( 'yith_wcas_outofstock_badge_color' );
			}

			if ( $featured_badge_bgcolor ) {
				update_option(
					'yith_wcas_featured_badge',
					array(
						'bgcolor' => $featured_badge_bgcolor,
						'color'   => get_option( 'yith_wcas_featured_badge_color' ),
					)
				);
				delete_option( 'yith_wcas_featured_badge_bgcolor' );
				delete_option( 'yith_wcas_featured_badge_color' );
			}
		}

		/**
		 * Update the options from the oldest version to 1.6.9
		 */
		private static function update_to_2_0_0_version() {
			yith_wcas_save_default_shortcode_options_premium();
			yith_wcas_update_200_search_fields();

			update_option( 'ywcas_updated_to_v2', true );
		}



	}
}
