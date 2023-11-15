<?php /**
 * @param $admin_url
 * @param $current_user
 */
add_action( 'component_request_form', 'component_request_form_html', 10, 2 );

function component_request_form_html( $admin_url, $current_user ) {?>
<div id="component-request" style="display:none">
    <div id="component-request-container" data-bs-theme="dark">
        <div class="message-container"></div>
        <form id="component-request-form" class="ks-admin-form">
            <div class="form-inner">
                <div class="item title">
                    <h2>Component request for <?php echo get_bloginfo( 'name' ); ?></h2>
                </div>
                <div class="items-group">
                    <div class="item">
                        <label for="component_request_name">Your name <span class="asterix">*</span></label>
                        <input type="text" value="" id="component_request_name" name="component_request_name" required>
                    </div>
                    <div class="item">
                        <label for="component_request_email">Your email address <span class="asterix">*</span></label>
                        <input type="email" value="<?php echo $current_user->user_email ?? null; ?>" id="component_request_email" name="component_request_email" required>
                    </div>
                </div>
                <div class="item">
                    <label for="component-request_title">Component request title <span class="asterix">*</span></label>
                    <input type="text" value="" id="component-request_title" name="component-request_title" required>
                </div>
                <div class="item">
                    <label for="component-request-description">Component request description <span class="asterix">*</span></label>
                    <textarea value="" id="component-request-description" name="component-request-description" required></textarea>
                    <span class="info bottom">Please elucidate on the functionalities of your component in a comprehensive manner. It is imperative to be as descriptive as possible to ensure a clear understanding of its capabilities. Should your component necessitate any advanced functionalities, kindly delineate them as well.</span>
                </div>
                <div class="item checkbox">
                    <label for="component_request_confirmation">
                        <input type="checkbox" id="component_request_confirmation" name="component_request_confirmation" required></input>
                        <span>I understand that there might be additional costs associated with the development of new components.</span>
                    </label>
                </div>
                <div class="item hidden">
                    <input type="hidden" name="nonce" value="<?php echo wp_create_nonce( 'component_request_nonce' ); ?>">
                </div>
                <div class="item hidden">
                    <input type="hidden" name="admin_email" value="<?php echo $current_user->user_email ?? null; ?>">
                </div>
                <div class="item hidden">
                    <input type="hidden" name="action" value="component_request">
                </div>
                <div class="item hidden">
                    <input type="hidden" name="admin_name" value="<?php echo $current_user->display_name ?? null; ?>">
                </div>
                <?php echo isset( $_GET['post'] ) ? '<div class="item hidden"><input type="hidden" name="post_id" value="' . $_GET['post'] . '"></div>' : false; ?>
                <div class="item hidden">
                    <input type="hidden" name="admin_url" value="<?php echo esc_url( $admin_url ); ?>">
                </div>
                <div class="item footer">
                    <button type="submit" id="component-request-submit" class="admin-button success">Submit Component Request</button>
                    <button type="button" id="component-request-close" class="admin-button close-modal-icon">Close</button>
                </div>
            </div>
        </form>
    </div>
</div>
<?php }?>