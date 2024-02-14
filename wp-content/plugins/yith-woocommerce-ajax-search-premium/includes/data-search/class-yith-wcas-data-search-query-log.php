<?php
/**
 * Logger of the user query class
 *
 * @author  YITH
 * @package YITH/Search/DataSearch
 * @version 2.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Recover and save the query data from database
 *
 * @since 2.0.0
 */
class YITH_WCAS_Data_Search_Query_Log {

	/**
	 * Get the format of columns
	 *
	 * @return array
	 */
	protected static function get_format() {
		return array(
			'%d', // user_id.
			'%s', // query string.
			'%s', // search_date.
			'%d', // num of result.
			'%d', // post clicked.
			'%s', // lang.
		);
	}

	/**
	 * Clear the table
	 *
	 * @return void
	 */
	public static function clear_table() {
		global $wpdb;
		$wpdb->query( "TRUNCATE TABLE $wpdb->yith_wcas_query_log" );
	}

	/**
	 * Insert the log on database
	 *
	 * @param   array $data  Array of value.
	 *
	 * @return mixed
	 */
	public static function insert( $data ) {
		global $wpdb;
		$result = $wpdb->insert( $wpdb->yith_wcas_query_log, $data, self::get_format() );

		return $result ? $wpdb->insert_id : 0;
	}

	/**
	 * Return the search history by user
	 *
	 * @param   int    $user_id  User id.
	 * @param   string $lang     Language.
	 * @param   int    $limit    Limit.
	 *
	 * @return array
	 */
	public static function user_history_searches( $user_id, $lang, $limit = 3 ) {
		global $wpdb;
		return $wpdb->get_results( $wpdb->prepare( "SELECT DISTINCT query FROM $wpdb->yith_wcas_query_log WHERE user_id = %d AND lang LIKE %s ORDER BY search_date DESC LIMIT %d", $user_id, $lang, $limit ), ARRAY_A );
	}

	/**
	 * Return all the search history by user
	 *
	 * @param   int $user_id  User id.
	 *
	 * @return array
	 */
	public static function all_user_searches( $user_id ) {
		global $wpdb;
		return $wpdb->get_results( $wpdb->prepare( "SELECT * FROM $wpdb->yith_wcas_query_log WHERE user_id = %d ORDER BY search_date", $user_id ), ARRAY_A );
	}

	/**
	 * Return all the search history by user
	 *
	 * @param   int $user_id  User id.
	 *
	 * @return bool|int|mysqli_result|resource
	 */
	public static function delete_all_user_searches( $user_id ) {
		global $wpdb;
		return $wpdb->query( $wpdb->prepare("DELETE FROM $wpdb->yith_wcas_query_log WHERE user_id =%d" , $user_id ) ); //phpcs:ignore
	}


	/**
	 * Return the popular searches
	 *
	 * @param   string $lang   Language.
	 * @param   int    $limit  Limit.
	 *
	 * @return array
	 */
	public static function popular( $lang, $limit = 10 ) {
		global $wpdb;
		return $wpdb->get_results( $wpdb->prepare( "SELECT query FROM $wpdb->yith_wcas_query_log WHERE lang LIKE %s GROUP BY query ORDER BY COUNT( query ) DESC LIMIT %d", $lang, $limit ), ARRAY_A );
	}
}
