<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/classes/class-custom-form.php';

class Workshop_Enrollment_Form extends Custom_Form {
	protected static $path           = '/pt/inscricao-oficina';
	protected static $sitename       = '4º Festival de Cinema BRICS';
	protected static $email_template = 'workshop-enrollment-email';

	/**
	 * Initialize contact form handler.
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'rest_api_init', array( 'Workshop_Enrollment_Form', 'api_route' ) );
	}

	/**
	 * Add contact form API route.
	 *
	 * @return void
	 */
	public static function api_route() {
		register_rest_route(
			'brics/v1', // namespace
			'workshop_enrollment', // route
			array( // args
				'methods'  => 'POST',
				'callback' => array( 'Workshop_Enrollment_Form', 'handle_form' ),
			)
		);
	}

	/**
	 * Handle form submission.
	 *
	 * @return void
	 */
	protected static function form_submission() {
		$name        = sanitize_text_field( $_POST['name'] );
		$age         = sanitize_text_field( $_POST['age'] );
		$profession  = sanitize_text_field( $_POST['profession'] );
		$formation   = static::get_formation( $_POST['formation'] );
		$telephone   = sanitize_text_field( $_POST['telephone'] );
		$email       = sanitize_email( $_POST['email'] );
		$interests   = sanitize_textarea_field( $_POST['interests'] );

		if ( empty( $name ) || empty( $age ) || empty( $profession ) || empty( $formation ) || empty( $telephone ) || empty( $email ) || empty( $interests ) ) {
			// Field error
			static::error_redirect( 'field_error' );
		} else {
			if ( ! static::insert_row(
				$name,
				$age,
				$profession,
				$formation,
				$telephone,
				$email,
				$interests
			) ) {
				static::error_redirect( 'insert_error' );
			}

			static::send_mail(
				$name,
				$age,
				$profession,
				$formation,
				$telephone,
				$email,
				$interests
			);

			static::success_redirect();
		}
	}

	private static function get_formation( $formation ) {
		switch ( sanitize_text_field( $formation ) ) {
			case 'fundamental':
				return 'Ensino Fundamental';
			case 'medio':
				return 'Ensino Médio';
			case 'superior':
				return 'Ensino Superior';
			case 'mestrado':
				return 'Mestrado';
			case 'doutorado':
				return 'Doutorado';
		}
	}

	private static function insert_row( $name, $age, $profession, $formation, $telephone, $email, $interests ) {
		global $wpdb;

		$table_name = "{$wpdb->prefix}workshop_enrollment";

		static::create_table( $table_name, $wpdb->get_charset_collate() );

		return $wpdb->insert(
			$table_name,
			array(
				'name'       => $name,
				'age'        => $age,
				'profession' => $profession,
				'formation'  => $formation,
				'telephone'  => $telephone,
				'email'      => $email,
				'interests'  => $interests,
			)
		);
	}

	private static function send_mail( $name, $age, $profession, $formation, $telephone, $email, $interests ) {
		$subject = 'Inscrição na Oficina: ' . $name;
		wp_mail(
			[ 'glaubernm@gmail.com' ],
			$subject,
			static::build_message(
				$subject,
				$name,
				$age,
				$profession,
				$formation,
				$telephone,
				$email,
				$interests
			),
			[ 'Content-Type: text/html; charset=UTF-8' ]
		);
	}

	private static function create_table( $table_name, $charset_collate ) {
		$sql = "CREATE TABLE IF NOT EXISTS $table_name (
			`id` bigint(20) NOT NULL AUTO_INCREMENT,
			`name` varchar(255) DEFAULT '' NOT NULL,
			`age` varchar(255) DEFAULT '' NOT NULL,
			`profession` varchar(255) DEFAULT '' NOT NULL,
			`formation` varchar(255) DEFAULT '' NOT NULL,
			`telephone` varchar(255) DEFAULT '' NOT NULL,
			`email` varchar(255) DEFAULT '' NOT NULL,
			`interests` text DEFAULT '' NOT NULL,
			PRIMARY KEY (`id`)
		  ) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( $sql );
	}

	private static function build_message( $subject, $name, $age, $profession, $formation, $telephone, $email, $interests ) {
		$sitename = static::$sitename;
		$body     = require_once get_template_directory()
			. '/templates/emails/' . static::$email_template . '.php';

		return require_once get_template_directory() . '/templates/email.php';
	}
}
