<?php
/**
 * Template file to set Search fields
 *
 * @package YITH\Search\Views
 */

defined( 'ABSPATH' ) || exit;
$search_fields = ywcas()->settings->get_search_fields();

?>
<div class="ywcas-search-field-wrapper yith-plugin-ui--boxed-wp-list-style">
	<?php wp_nonce_field( 'ywcas_edit_search_field', '_ywcas_nonce' ); ?>
	<?php
	if ( ywcas_has_disabled_options() ) {
		// translators: 'Placeholders are HTML tags'.
		$text = sprintf( _x( 'Some options, like search on product attributes or priority, are available only in the new search form. %1$sUpdate the plugin now, it\'s easy >%2$s', 'Placeholders are HTML tags', 'yith-woocommerce-ajax-search' ), '<a href="#" class="ywcas-show-modal">', '</a>' );
		$html = '<div class="ywcas-disable-field-description">';

		$html .= ' <i class="yith-icon yith-icon-warning-triangle"></i>';
		$html .= '<div class="ywcas-disable-field-text">' . $text . '</div>';
		$html .= '</div>';

		echo wp_kses_post( $html );
	}
	?>
	<table id="search-fields" class="wp-list-table fixed table-view-list">
		<thead>
		<tr>
			<th id="field"
				class="colum-title"><?php echo esc_html_x( 'Field', 'Name of column field', 'yith-woocommerce-ajax-search' ); ?></th>

			<th id="priority-zone"
				class="colum-title <?php echo ywcas_has_disabled_options() ? esc_attr( 'ywcas-hide' ) : ''; ?>"><?php echo esc_html_x( 'Priority', 'priority of the field', 'yith-woocommerce-ajax-search' ); ?></th>
			<th id="actions" class="colum-title"></th>
		</tr>
		</thead>
		<tbody>
		<?php
		if ( $search_fields ) {
			foreach ( $search_fields as $key => $field ) {
				ywcas_get_view(
					'/custom-fields/types/content/search-input.php',
					array(
						'field' => $field,
						'key'   => $key,
					)
				);
			}
		}

		?>
		</tbody>
	</table>
	<div class="ywcas-add-field">
		<?php echo esc_html_x( '+ Add field', 'Add search field button label', 'yith-woocommerce-ajax-search' ); ?>
	</div>
</div>
<script type="text/html" id="tmpl-ywcas-search-fields">
	<?php
	$template_options = array(
		'field'          => array(
			'type'     => 'name',
			'priority' => 1,
		),
		'is_placeholder' => true,
	);
	ywcas_get_view( 'custom-fields/types/content/search-input.php', $template_options );
	?>
</script>
