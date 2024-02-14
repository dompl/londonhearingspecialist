<?php
/**
 * Search Engine class
 *
 * @author  YITH
 * @package YITH/Search/DataSearch
 * @version 2.0
 */

defined( 'ABSPATH' ) || exit;

if ( ! class_exists( 'YITH_WCAS_Data_Search_Engine' ) ) {
	/**
	 * Recover the data from database
	 *
	 * @since 2.0.0
	 */
	class YITH_WCAS_Data_Search_Engine {

		use YITH_WCAS_Trait_Singleton;

		/**
		 * Type of search
		 *
		 * @var int
		 */
		protected $type_of_search = 'OR';

		/**
		 * Token ids found
		 *
		 * @var array
		 */
		protected $lookup_ids = array();

		/**
		 * Fuzzy prefix length
		 *
		 * @var int
		 */
		protected $fuzzy_prefix_length = 1;

		/**
		 * Fuzzy max token to find
		 *
		 * @var int;
		 */
		protected $fuzzy_max_tokens = 1000;

		/**
		 * Fuzzy max token to find
		 *
		 * @var int;
		 */
		protected $fuzzy_query_tokens = array();

		/**
		 * Search for results
		 *
		 * @param   string  $query_string    Query string.
		 * @param   array   $post_type       Post type.
		 * @param   int     $category        Search in specific category.
		 * @param   string  $lang            Language.
		 * @param   bool    $limited         Limited Search.
		 * @param   int     $num_of_results  Number of results.
		 * @param   bool    $debug           Debug.
		 *
		 * @return array
		 */
		public function search( $query_string, $post_type, $category, $lang, $limited = true, $num_of_results = 0, $debug = false ) {
			$best_token   = false;
			$start_search = hrtime( true ); //phpcs:ignore
			$debug && $this->logger->log( 'Start search for ' . $query_string );

			$query_string = YITH_WCAS_Data_Index_Tokenizer::get_synonymous( $query_string );
			$is_single    = ! preg_match( '/ /', $query_string );

			$default_settings = ywcas()->settings->get_classic_default_settings();

			// list of tokens ordered by string length.
			$query_tokens = $is_single ? array( $query_string ) : $this->get_search_tokens( $query_string );

			$debug && $this->logger->log( 'Execution time 0 ' . ( hrtime( true ) - $start_search ) / 1e+9 );
			$debug && $this->logger->log( 'Tokens ' . print_r( $query_tokens, 1 ) );

			$search_result_data = $this->get_search_results( $query_tokens, $post_type, $category, $lang );

			$debug && $this->logger->log( 'Execution time 1 ' . ( hrtime( true ) - $start_search ) / 1e+9 );
			// If the process for single strings fails, we can try to check if there are more token.
			if ( ! empty( $search_result_data ) && $is_single ) {
				$query_tokens = $this->get_search_tokens( $query_string );
				$debug && $this->logger->log( 'Execution time single ' . ( hrtime( true ) - $start_search ) / 1e+9 );
				if ( count( $query_tokens ) > 1 ) {
					$search_result_data = array_merge( $search_result_data, $this->get_search_results( $query_tokens, $post_type, $category, $lang ) );
				}
			}

			// If the process no return results we can check for fuzzy strings.
			if ( apply_filters( 'yith_wcas_force_fuzzy_search', empty( $search_result_data ) && 'yes' === ywcas()->settings->get_enable_search_fuzzy() ) ) {
				$best_token = $this->get_fuzzy_query_string( $query_tokens, $lang );
				if ( $best_token ) {
					$search_result_data = $this->get_search_results( array( $best_token ), $post_type, $category, $lang );
					$best_token         = empty( $search_result_data ) ? '' : $best_token;
				} else {
					if ( ! $search_result_data && apply_filters( 'ywcas_search_for_sound', false !== strpos( $lang, 'en_' ) ) ) {
						$soundex_result     = $this->get_soundex_search_results( $query_tokens, $post_type, $lang, $category );
						$search_result_data = $soundex_result ? array_merge( $search_result_data, $soundex_result ) : $search_result_data;
					}
				}
			}

			$search_result_data = $this->filter_results( $search_result_data );
			$search_result_data = array_unique( $search_result_data, SORT_REGULAR );
			$total_results      = count( $search_result_data );

			if ( $limited ) {
				$num_of_results = ! $num_of_results ? $default_settings['maxResults'] : $num_of_results;
				if ( $search_result_data > $num_of_results ) {
					$search_result_data = array_slice( $search_result_data, 0, $num_of_results );
				}
			}

			$search_result_data = array_values( $search_result_data );
			$stop_search        = hrtime( true );
			$debug && $this->logger->log( 'Execution time ' . ( $stop_search - $start_search ) / 1e+9 );

			return array(
				'fuzzyToken'   => $best_token,
				'totalResults' => $total_results,
				'results'      => $search_result_data,
			);
		}

		/**
		 * Save the query inside the database and retrieve the id of the logger.
		 *
		 * @param   string  $query_string   Query string.
		 * @param   int     $total_results  Number of result.
		 * @param   int     $item_id        Item ID.
		 * @param   string  $lang           Language.
		 *
		 * @return int
		 */
		public function get_logger_reference( $query_string, $total_results, $item_id, $lang ) {
			if ( empty( $query_string ) ) {
				return 0;
			}

			return YITH_WCAS_Data_Search_Query_Log::insert(
				array(
					'user_id'         => get_current_user_id(),
					'query'           => $query_string,
					'search_date'     => current_time( 'mysql' ),
					'num_results'     => $total_results,
					'clicked_product' => $item_id,
					'lang'            => $lang,
				)
			);
		}


		/**
		 * Get results from tokens
		 *
		 * @param   array   $query_tokens  Tokens.
		 * @param   string  $post_type     Post type.
		 * @param   int     $category      Category.
		 * @param   string  $lang          Current language.
		 *
		 * @return array
		 */
		public function get_search_results( $query_tokens, $post_type, $category, $lang ) {
			if ( ! $query_tokens ) {
				return array();
			}

			$data_index_by_tokens = $this->get_data_index_by_tokens( $query_tokens, $lang );

			if ( ! $data_index_by_tokens ) {
				return array();
			}

			$search_result = $this->cross_results( $data_index_by_tokens );
			if ( ! $search_result ) {
				return array();
			}

			$results = YITH_WCAS_Data_Index_Lookup::get_instance()->get_data_by_id( $search_result, $post_type, $category );

			return $this->filter_results( $results );
		}


		/**
		 * Return the fuzzy query string
		 *
		 * @param $query_tokens
		 *
		 * @return void
		 */
		public function get_fuzzy_query_string( $query_tokens, $lang ) {
			if ( ! $query_tokens ) {
				return array();
			}

			$best_token = array();

			foreach ( $query_tokens as $query_token ) {
				if ( strlen( $query_token ) < $this->fuzzy_prefix_length + 1 ) {
					continue;
				}
				$token_names = array();
				$token       = substr( $query_token, 0, $this->fuzzy_prefix_length );
				$token       = $this->prepare_token( $token );

				$token_results = YITH_WCAS_Data_Index_Token::get_instance()->search_similar_token( $token, $lang, $this->fuzzy_max_tokens );
				$token_results = array_unique( wp_list_pluck( $token_results, 'token' ));

				$tokens_grouped_by_distance_token = array();
				if ( $token_results ) {
					foreach ( $token_results as $token ) {
						$distance = levenshtein( $token, $query_token );
						if ( $distance <= ywcas()->settings->get_fuzzy_distance() ) {
							$tokens_grouped_by_distance_token[ $distance ][] = $token;
						}
					}


					if ( $tokens_grouped_by_distance_token ) {
						asort( $tokens_grouped_by_distance_token );

						foreach ( $tokens_grouped_by_distance_token as $token_name_group ) {
							$token_names = array_merge( $token_names, $token_name_group );
						}
					}

					if ( $token_names ) {
						$best_token = $token_names[0];
					}
				}
			}

			return $best_token;

		}


		/**
		 * Search data index for fuzzy strings
		 *
		 * @param   array   $query_tokens  Tokens.
		 * @param   string  $post_type     Post type.
		 * @param   string  $lang          Current language.
		 * @param   int     $category      Category.
		 *
		 * @return array
		 */
		public function get_fuzzy_search_results( $query_tokens, $post_type, $lang, $category = 0 ) {
			if ( ! $query_tokens ) {
				return array();
			}

			$data_index_by_tokens = false;
			foreach ( $query_tokens as $query_token ) {
				if ( strlen( $query_token ) < $this->fuzzy_prefix_length + 1 ) {
					continue;
				}
				$tokens               = array();
				$token_names          = array();
				$data_index_by_tokens = array();
				$token                = substr( $query_token, 0, $this->fuzzy_prefix_length );
				$token                = $this->prepare_token( $token );

				$token_results                    = YITH_WCAS_Data_Index_Token::get_instance()->search_similar_token( $token, $lang, $this->fuzzy_max_tokens );
				$tokens_grouped_by_distance       = array();
				$tokens_grouped_by_distance_token = array();
				if ( $token_results ) {
					foreach ( $token_results as $token_result ) {
						$distance = levenshtein( $token_result->token, $query_token );
						if ( $distance <= ywcas()->settings->get_fuzzy_distance() ) {
							$tokens_grouped_by_distance[ $distance ][]       = $token_result->token_id;
							$tokens_grouped_by_distance_token[ $distance ][] = $token_result->token;
							//	$tokens[] = $token_result->token_id;
						}
					}
					if ( $tokens_grouped_by_distance ) {
						asort( $tokens_grouped_by_distance );
						asort( $tokens_grouped_by_distance_token );

						foreach ( $tokens_grouped_by_distance as $token_group ) {
							$tokens = array_merge( $tokens, $token_group );
						}
						foreach ( $tokens_grouped_by_distance_token as $token_name_group ) {
							$token_names = array_merge( $token_names, $token_name_group );
						}
					}

					if ( $tokens ) {
						$docs = YITH_WCAS_Data_Index_Relationship::get_instance()->search_post_id( $tokens );
						if ( $docs ) {
							$data_index_by_tokens[ $query_token ] = $docs;
						}
					}
				}
			}

			if ( ! $data_index_by_tokens ) {
				return array();
			}

			$search_result = $this->cross_results( $data_index_by_tokens );
			if ( ! $search_result ) {
				return array();
			}
			$results = YITH_WCAS_Data_Index_Lookup::get_instance()->get_data_by_id( $search_result, $post_type, $category );

			return $this->filter_results( $results );
		}

		/**
		 * Search data index for soundex strings
		 *
		 * @param   array   $query_tokens  Tokens.
		 * @param   string  $post_type     Post Type.
		 * @param   string  $lang          Current languages.
		 * @param   int     $category      Category.
		 *
		 * @return array
		 */
		public function get_soundex_search_results( $query_tokens, $post_type, $lang, $category = 0 ) {
			$results = array();

			if ( ! $query_tokens ) {
				return $results;
			}
			$data_index_by_tokens = array();
			foreach ( $query_tokens as $query_token ) {
				$token_results = YITH_WCAS_Data_Index_Token::get_instance()->search_soundex_token( $query_token, $lang );
				if ( $token_results ) {
					$docs             = YITH_WCAS_Data_Index_Relationship::get_instance()->search_post_id( $token_results );
					$this->lookup_ids = array_merge( $this->lookup_ids, $docs );
					if ( $docs ) {
						$data_index_by_tokens[ $query_token ] = $docs;
					}
				}
			}

			if ( ! $data_index_by_tokens ) {
				return $results;
			}

			$search_result = $this->cross_results( $data_index_by_tokens );
			if ( ! $search_result ) {
				return $results;
			}

			$results = YITH_WCAS_Data_Index_Lookup::get_instance()->get_data_by_id( $search_result, $post_type, $category );

			return $this->filter_results( $results );
		}

		/**
		 * Prepare the token for the query
		 *
		 * @param   string  $token  String to prepare.
		 *
		 * @return string
		 */
		public function prepare_token( $token ) {
			return '%' . $token . '%';
		}

		/**
		 * Return the search tokens as array ordered from word length
		 *
		 * @param   string  $query_string  Query string.
		 *
		 * @return array
		 */
		public function get_search_tokens( $query_string ) {
			$tokens = YITH_WCAS_Data_Index_Tokenizer::tokenize( $query_string, 'search' );
			usort(
				$tokens,
				function ( $a, $b ) {
					return strlen( $b ) - strlen( $a );
				}
			);

			return $tokens;
		}

		/**
		 * Search data index for each token.
		 *
		 * @param   array   $query_tokens  List of tokens.
		 * @param   string  $lang          Current languages.
		 *
		 * @return array
		 */
		public function get_data_index_by_tokens( $query_tokens, $lang ) {
			$documents = array();


			foreach ( $query_tokens as $query_token ) {
				// searching the exact token.
				$token_result_raw = YITH_WCAS_Data_Index_Token::get_instance()->search( $query_token, $lang );


				$query_token = $this->prepare_token( $query_token );
				// searching the generic token.
				$token_result = YITH_WCAS_Data_Index_Token::get_instance()->search( $query_token, $lang );

				$token_result = array_unique( array_merge( $token_result_raw, $token_result ) );

				if ( $token_result ) {
					$docs = YITH_WCAS_Data_Index_Relationship::get_instance()->search_post_id( $token_result );
					if ( $docs ) {
						$documents[ $query_token ] = array_unique( $docs );
					}
				}
			}

			return $documents;
		}

		/**
		 * Cross the data index to find the better result
		 *
		 * @param   array  $data_index_by_tokens  Data index bu Token.
		 *
		 * @return array
		 */
		public function cross_results( $data_index_by_tokens ) {
			$search_result = array();

			if ( $data_index_by_tokens ) {
				if ( count( $data_index_by_tokens ) > 1 ) {
					$search_result = call_user_func_array( 'array_intersect', array_values( $data_index_by_tokens ) );
					if ( empty( $search_result ) && 'OR' === $this->type_of_search ) {
						$data_index_by_tokens = call_user_func_array( 'array_merge', array_values( $data_index_by_tokens ) );
						$counts               = array_count_values( $data_index_by_tokens );
						arsort( $counts );
						$search_result = array_keys( $counts );
					}
				} else {
					$search_result = current( $data_index_by_tokens );
				}
			}

			return $search_result;
		}

		/**
		 * Return the max number of results.
		 *
		 * @param   array  $search_result  Result to filter.
		 *
		 * @return array
		 */
		public function filter_results( $search_result ) {
			$main_results       = array();
			$include_variations = 'yes' === ywcas()->settings->get_include_variations();
			if ( $search_result ) {
				foreach ( $search_result as $result ) {
					if ( isset( $result['url'] ) ) {
						$result['url'] = apply_filters( 'wpml_permalink', $result['url'], substr( $result['lang'], 0, 2 ) );
					}
					if ( isset( $result['parent_category'] ) ) {
						$result['parent_category'] = maybe_unserialize( $result['parent_category'] );
					}
					if ( ! $include_variations && isset( $result['product_type'] ) && 'variation' === $result['product_type'] ) {
						if ( ! in_array( $result['post_parent'], $main_results ) ) {
							$parent                                 = YITH_WCAS_Data_Index_Lookup::get_instance()->get_element_by_post_id( $result['post_parent'] );
							$main_results[ $result['post_parent'] ] = $parent;
						}
					} else {
						$main_results[ $result['post_id'] ] = $result;
					}
				}
			}

			return $main_results;
		}

		/**
		 * Get category info
		 *
		 * @param   array  $results  Results.
		 *
		 * @return array
		 */
		public function add_categories( $results ) {
			$categories = array();
			if ( ! class_exists( 'YITH_WCAS_Data_Index_Taxonomy' ) ) {
				return $categories;
			}

			foreach ( $results as $result ) {
				$parent_categories = (array) maybe_unserialize( $result['parent_category'] );
				$categories        = array_merge( $categories, $parent_categories );
			}
			if ( ! $categories ) {
				return array();
			}

			return YITH_WCAS_Data_Index_Taxonomy::get_instance()->get_taxnomies( $categories );
		}
	}

}