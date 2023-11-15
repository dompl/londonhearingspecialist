<?php
/**
 * @param $data
 */
add_action( 'component_confirmation_clickup_message', 'component_confirmation_clickup_message_html' );
function component_confirmation_clickup_message_html( $data ) {
    $name      = $data['name'];
    $firstWord = explode( ' ', trim( $name ) )[0];
    ?>
<div class="message-wrapper">
    <h2>Thanks, <?php echo $firstWord; ?>!</h2>
    <p>Your component request has been received, with reference number:
    <div class="ref-container"><strong class="ref-number"><?php echo $data['task_id'] ?></strong></div>
    </p>
    <p>If you have questions, reach out anytime. We'll update you on the progress. Thanks for choosing us!</p>
    <div class="success-footer">
        <p>Best</p>
        <p>Dom<br>Red Frog Studio</p>
        <p><button type="button" class="admin-button medium close-modal-icon" id="component-sent-close">Close</button></p>
    </div>
</div>
<?php }