<?php
namespace AcfPlugins;
use Extended\ACF\Fields\Field;
use Kickstarter\MyHelpers;

if ( class_exists( 'acf_field' ) ) {

    class UniqueId extends Field {
        /**
         * @var string|null
         */
        protected ?string $type = 'unique_id';

        public function __construct( string $label, string $name = null ) {
            parent::__construct( $label, $name );
        }
    }

    class acf_field_unique_id extends \acf_field {

        /*
         *  __construct
         *
         *  This function will setup the field type data
         *
         *  @type    function
         *  @date    5/03/2014
         *  @since    5.0.0
         *
         *  @param    n/a
         *  @return    n/a
         */

        function __construct() {

            /*
             *  name (string) Single word, no spaces. Underscores allowed
             */

            $this->name = 'unique_id';

            /*
             *  label (string) Multiple words, can include spaces, visible when selecting a field type
             */

            $this->label = __( 'Unique ID', 'acf-unique_id' );

            /*
             *  category (string) basic | content | choice | relational | jquery | layout | CUSTOM GROUP NAME
             */

            $this->category = 'basic';

            /*
             *  l10n (array) Array of strings that are used in JavaScript. This allows JS strings to be translated in PHP and loaded via:
             *  var message = acf._e('unique_id', 'error');
             */

            $this->l10n = array(
            );

            // do not delete!
            parent::__construct();

        }

        /*
         *  render_field()
         *
         *  Create the HTML interface for your field
         *
         *  @param    $field (array) the $field being rendered
         *
         *  @type    action
         *  @since    3.6
         *  @date    23/01/13
         *
         *  @param    $field (array) the $field being edited
         *  @return    n/a
         */
        /**
         * @param $field
         */
        function render_field( $field ) {
            ?>
<input type="text" readonly="readonly" name="<?php echo esc_attr( $field['name'] ) ?>" value="<?php echo esc_attr( $field['value'] ) ?>" />
<?php
}

        /*
         *  update_value()
         *
         *  This filter is applied to the $value before it is saved in the db
         *
         *  @type    filter
         *  @since    3.6
         *  @date    23/01/13
         *
         *  @param    $value (mixed) the value found in the database
         *  @param    $post_id (mixed) the $post_id from which the value was loaded
         *  @param    $field (array) the field array holding all the field options
         *  @return    $value
         */
        /**
         * @param $value
         * @param $post_id
         * @param $field
         * @return mixed
         */
        function update_value( $value, $post_id, $field ) {
            if (  !  $value ) {
                $value = uniqid();
            }
            return $value;
        }

        /*
         *  validate_value()
         *
         *  This filter is used to perform validation on the value prior to saving.
         *  All values are validated regardless of the field's required setting. This allows you to validate and return
         *  messages to the user if the value is not correct
         *
         *  @type    filter
         *  @date    11/02/2014
         *  @since    5.0.0
         *
         *  @param    $valid (boolean) validation status based on the value and the field's required setting
         *  @param    $value (mixed) the $_POST value
         *  @param    $field (array) the field array holding all the field options
         *  @param    $input (string) the corresponding input name for $_POST value
         *  @return    $valid
         */
        /**
         * @param $valid
         * @param $value
         * @param $field
         * @param $input
         */
        function validate_value( $valid, $value, $field, $input ) {
            return true;
        }
    }

    // create field
    new acf_field_unique_id();
}

add_action( 'admin_head', function () {
    $helpers = MyHelpers::getInstance();
    if ( MyHelpers::isDeveloper() ) {
        echo '<style type="text/css"> .acf-field[data-name="id"] { display: none !important; } </style>';
    }
} );