<?php
/**
 * Hook a function to the 'component_request_clickup_message' action.
 *
 * @param string $admin_url     The admin URL where the component request was made.
 * @param object $current_user  The current user object.
 */
add_action( 'component_request_clickup_message', 'component_request_clickup_message_html', 10, 2 );

/**
 * Generates HTML for the ClickUp message based on the provided data.
 *
 * This function accepts an array of data and a boolean indicating whether
 * the message should be formatted as HTML. It then constructs an associative
 * array of information to be included in the message, and outputs this
 * information in either a simple or tabular HTML format based on the
 * value of $html_message.
 *
 * @param array $data          An associative array of data containing keys: name, email, title, description, url, and post_id.
 * @param bool  $html_message  A boolean indicating whether the message should be formatted as HTML.
 */
function component_request_clickup_message_html( $data, $is_html ) {
    // Construct an associative array of information to be included in the message
    $infos = [
        'From'        => $data['name'] . "({$data['email']})",
        'Title'       => $data['title'],
        'Description' => $data['description'],
        'Admin URL'   => $data['url'],
        'Post URL'    => get_the_permalink( $data['post_id'] )
    ];
    ?>

<?php if ( $is_html === false ): ?>
<!-- Output information in a simple HTML format -->
<?php echo "\n\n" ?>
<?php foreach ( $infos as $k => $value ): ?>
<?php echo $k ?>: <?php echo $value . "\n\n" ?>
<?php endforeach;?>
<?php else: ?>
<!-- Output information in a tabular HTML format -->
<table style="width:100%">
    <tbody>
        <?php foreach ( $infos as $k => $value ): ?>
        <tr>
            <td style="padding:10px; font-weight:bold"><?php echo $k ?></td>
            <td style="padding:10px"><?php echo $value ?></td>
        </tr>
        <?php endforeach;?>
    </tbody>
</table>
<?php endif;?>
<?php }?>