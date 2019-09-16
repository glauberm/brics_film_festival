<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/classes/custom-forms/class-contact-form.php';

class Portuguese_Contact_Form extends Contact_Form {
	protected static $path           = '/pt/imprensa/';
	protected static $sitename       = '4º Festival de Cinema BRICS';
	protected static $email_template = 'portuguese-contact-email';

	/**
	 * Initialize contact form handler.
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'rest_api_init', array( 'Portuguese_Contact_Form', 'api_route' ) );
	}

	/**
	 * Add contact form API route.
	 *
	 * @return void
	 */
	public static function api_route() {
		register_rest_route(
			'brics/v1', // namespace
			'pt_contact_form', // route
			array( // args
				'methods'  => 'POST',
				'callback' => array( 'Portuguese_Contact_Form', 'handle_form' ),
			)
		);
	}
}
