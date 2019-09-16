<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/env.php';

require_once get_template_directory() . '/menus/index.php';
require_once get_template_directory() . '/post_types/index.php';

require_once get_template_directory() . '/classes/custom-settings/class-portuguese-site-info.php';
require_once get_template_directory() . '/classes/custom-settings/class-english-site-info.php';

require_once get_template_directory() . '/classes/custom-forms/class-portuguese-contact-form.php';
require_once get_template_directory() . '/classes/custom-forms/class-english-contact-form.php';
require_once get_template_directory() . '/classes/custom-forms/class-ppgcine-enrollment-form.php';
require_once get_template_directory() . '/classes/custom-forms/class-preservation-meeting-enrollment-form.php';
require_once get_template_directory() . '/classes/custom-forms/class-enrollment-form.php';
require_once get_template_directory() . '/classes/custom-forms/class-incubator-meeting-enrollment-form.php';
require_once get_template_directory() . '/classes/custom-forms/class-workshop-enrollment-form.php';

add_action( 'init', array( 'Portuguese_Site_Info', 'init' ) );
add_action( 'init', array( 'English_Site_Info', 'init' ) );
add_action( 'init', array( 'Portuguese_Contact_Form', 'init' ) );
add_action( 'init', array( 'English_Contact_Form', 'init' ) );
add_action( 'init', array( 'Ppgcine_Enrollment_Form', 'init' ) );
add_action( 'init', array( 'Preservation_Meeting_Enrollment_Form', 'init' ) );
add_action( 'init', array( 'Enrollment_Form', 'init' ) );
add_action( 'init', array( 'Incubator_Meeting_Enrollment_Form', 'init' ) );
add_action( 'init', array( 'Workshop_Enrollment_Form', 'init' ) );

// Stops conversion of hyphen to dash
remove_filter( 'the_title', 'wptexturize' );

// Check for an empty ACF field and if it’s empty return null.
if ( ! function_exists( 'acf_nullify_empty' ) ) {
	/**
	 * Return `null` if an empty value is returned from ACF.
	 *
	 * @param mixed $value
	 * @param mixed $post_id
	 * @param array $field
	 *
	 * @return mixed
	 */
	function acf_nullify_empty( $value, $post_id, $field ) {
		if ( empty( $value ) ) {
			return null;
		}
		return $value;
	}
}
add_filter( 'acf/format_value', 'acf_nullify_empty', 100, 3 );
