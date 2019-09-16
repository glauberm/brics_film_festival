<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/classes/custom-forms/class-contact-form.php';

class English_Contact_Form extends Contact_Form {
	protected static $path           = '/en/press/';
	protected static $sitename       = '4th BRICS Film Festival';
	protected static $email_template = 'english-contact-email';

	/**
	 * Initialize contact form handler.
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'rest_api_init', array( 'English_Contact_Form', 'api_route' ) );
	}

	/**
	 * Add contact form API route.
	 *
	 * @return void
	 */
	public static function api_route() {
		register_rest_route(
			'brics/v1', // namespace
			'en_contact_form', // route
			array( // args
				'methods'  => 'POST',
				'callback' => array( 'English_Contact_Form', 'handle_form' ),
			)
		);
	}
}
