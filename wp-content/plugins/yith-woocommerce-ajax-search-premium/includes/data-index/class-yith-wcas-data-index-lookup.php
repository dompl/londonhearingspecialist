<?php
/**
 * Class to manage the Data Lookup table
 *
 * @author  YITH
 * @package YITH/Search/DataIndex
 * @version 2.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Recover the data from database
 *
 * @since 2.0.0
 */
class YITH_WCAS_Data_Index_Lookup {

	use YITH_WCAS_Trait_Singleton;

	/**
	 * Construction
	 *
	 * @return void
	 */
	private function __construct() {

	}

	/**
	 * Insert the post on database
	 *
	 * @param array $data Array of value.
	 *
	 * @return mixed
	 * @since 2.0.0
	 */
	public function insert( $data ) {
		global $wpdb;
		$result = $wpdb->insert( $wpdb->yith_wcas_data_index_lookup, $data, $this->get_format() );

		return $result ? $wpdb->insert_id : 0;
	}

	/**
	 * Remove the post from database
	 *
	 * @param int $post_id Post id to remove.
	 *
	 * @return void
	 */
	public function remove_data( $post_id ) {
		global $wpdb;
		$wpdb->delete( $wpdb->yith_wcas_data_index_lookup, array( 'post_id' => $post_id ), array( '%d' ) );
	}


	/**
	 * Get the format of columns
	 *
	 * @return array
	 */
	protected function get_format() {
		return array(
			'%d', // post_id.
			'%s', // name.
			'%s', // description.
			'%s', // summary.
			'%s', // url.
			'%s', // sku.
			'%s', // thumbnail.
			'%f', // min_price.
			'%f', // max_price.
			'%d', // onsale.
			'%d', // instock.
			'%f', // stock_quantity.
			'%d', // is_purchasable.
			'%d', // rating_count.
			'%d', // average_rating.
			'%d', // total_sales.
			'%s', // post_type.
			'%d', // post_parent.
			'%s', // product_type.
			'%s', // parent_category.
			'%s', // tags.
			'%s', // custom_fields.
			'%s', // lang.
			'%d', // featured.
		);
	}

	/**
	 * Clear the table
	 *
	 * @return void
	 */
	public function clear_table() {
		global $wpdb;
		$wpdb->query( "TRUNCATE TABLE $wpdb->yith_wcas_data_index_lookup" );
		$wpdb->query( "ALTER TABLE $wpdb->yith_wcas_data_index_lookup DROP INDEX index_post_id" ); //phpcs:ignore

	}


	/**
	 * Reindex the table
	 *
	 * @return void
	 */
	public function index_table() {
		global $wpdb;
		$wpdb->query( "ALTER TABLE $wpdb->yith_wcas_data_index_lookup ADD INDEX index_post_id (post_id)" ); //phpcs:ignore
	}


	/**
	 * Return the data index.
	 *
	 * @param array $ids List of ids.
	 * @param array $post_type Post type.
	 * @param int   $category Parent category.
	 *
	 * @return array
	 */
	public function get_data_by_id( $ids, $post_type, $category = 0 ) {
		global $wpdb;
		$instock = 'yes' === ywcas()->settings->get_hide_out_of_stock() ? array(1) : array(0,1);
		if ( ! $category ) {
			$results = $wpdb->get_results( "SELECT * FROM $wpdb->yith_wcas_data_index_lookup WHERE post_id IN(" . implode( ',', $ids ) . ") AND post_type IN('" . implode( "','", $post_type ) . "') AND instock IN('" . implode( "','", $instock ) . "') ORDER BY FIELD(post_id, " . implode( ',', $ids ) . " )", ARRAY_A ); //phpcs:ignore
		} else {
			$results = $wpdb->get_results(
				"SELECT * FROM $wpdb->yith_wcas_data_index_lookup WHERE parent_category LIKE '%:" . $category . ";%' AND post_id IN('" . implode( '","', $ids ) . "') AND post_type IN('" . implode( "','", $post_type ) . "') AND instock IN('" . implode( "','", $instock ) . "') ORDER BY FIELD(post_id, " . implode( //phpcs:ignore
					',',
					$ids ) . " )", ARRAY_A ); //phpcs:ignore
		}

		// ORDER BY FIELD returns results following the order of ids.
		return (array) $results;
	}

	/**
	 * Return id of document of lookup by id
	 *
	 * @param int $id Post id to search.
	 *
	 * @return int
	 */
	public function get_id_by_post_id( $id ) {
		global $wpdb;

		return $wpdb->get_var( $wpdb->prepare( "SELECT id FROM $wpdb->yith_wcas_data_index_lookup  WHERE post_id = %d", $id ) );
	}

	/**
	 * Return id of document of lookup by id
	 *
	 * @param int $id Post id to search.
	 *
	 * @return array
	 */
	public function get_element_by_post_id( $id ) {
		global $wpdb;

		return $wpdb->get_row( $wpdb->prepare( "SELECT * FROM $wpdb->yith_wcas_data_index_lookup  WHERE post_id = %d", $id ),ARRAY_A );
	}

}
