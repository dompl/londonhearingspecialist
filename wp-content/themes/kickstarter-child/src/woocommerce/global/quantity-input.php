<?php
if (  !  defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

if ( $max_value && $min_value === $max_value ) {
    ?>
<div class="quantity hidden">
    <input type="hidden" id="<?php echo esc_attr( $input_id ); ?>" class="qty" name="<?php echo esc_attr( $input_name ); ?>" value="<?php echo esc_attr( $min_value ); ?>" />
</div>
<?php
} else {
    /* translators: %s: Quantity. */
    $label =  !  empty( $args['product_name'] ) ? sprintf( __( '%s quantity', 'woocommerce' ), wp_strip_all_tags( $args['product_name'] ) ) : __( 'Quantity', 'woocommerce' );
    ?>
<div class="quantity london-quantity">
    <label class="screen-reader-text" for="<?php echo esc_attr( $input_id ); ?>"><?php echo esc_attr( $label ); ?></label>
    <button type="button" class="minus"><span><i class="icon-minus-solid"></i></span></button>
    <input type="number" id="<?php echo esc_attr( $input_id ); ?>" class="input-text qty text" step="<?php echo esc_attr( $step ); ?>" min="<?php echo esc_attr( $min_value ); ?>" max="<?php echo esc_attr( 0 < $max_value ? $max_value : '' ); ?>" name="<?php echo esc_attr( $input_name ); ?>" value="<?php echo esc_attr( $input_value ); ?>" title="<?php echo esc_attr_x( 'Qty', 'Product
     input tooltip', 'woocommerce' ); ?>" size="4" pattern="<?php echo esc_attr( $pattern ); ?>" inputmode="<?php echo esc_attr( $inputmode ); ?>" aria-labelledby="<?php // echo esc_attr( $labelledby ); ?>" />
    <button type="button" class="plus"><span><i class="icon-plus-solid"></i></span></button>
</div>
<?php
}