<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/classes/class-custom-form.php';

class Ppgcine_Enrollment_Form extends Custom_Form {
	protected static $path           = '/pt/inscricao-ppgcine/';
	protected static $sitename       = '4º Festival de Cinema BRICS';
	protected static $email_template = 'ppgcine-enrollment-email';

	/**
	 * Initialize contact form handler.
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'rest_api_init', array( 'Ppgcine_Enrollment_Form', 'api_route' ) );
	}

	/**
	 * Add contact form API route.
	 *
	 * @return void
	 */
	public static function api_route() {
		register_rest_route(
			'brics/v1', // namespace
			'ppgcine_enrollment_form', // route
			array( // args
				'methods'  => 'POST',
				'callback' => array( 'Ppgcine_Enrollment_Form', 'handle_form' ),
			)
		);
	}

	/**
	 * Handle form submission.
	 *
	 * @return void
	 */
	protected static function form_submission() {
		$name            = sanitize_text_field( $_POST['name'] );
		$registration    = sanitize_text_field( $_POST['registration'] );
		$email           = sanitize_email( $_POST['email'] );
		$telephone       = sanitize_text_field( $_POST['telephone'] );
		$academic_degree = static::get_academic_degree( $_POST['academic_degree'] );
		$entry_year      = sanitize_text_field( $_POST['entry_year'] );
		$address         = sanitize_text_field( $_POST['address'] );
		$course          = static::get_course( $_POST['course'] );

		if ( empty( $name ) || empty( $email ) || empty( $telephone ) || empty( $academic_degree ) || empty( $entry_year ) || empty( $address ) || empty( $course ) ) {
			// Field error
			static::error_redirect( 'field_error' );
		} elseif ( ! static::validate_date() ) {
			static::error_redirect( 'date_error' );
		} elseif ( ! static::validate_course( $course ) ) {
			static::error_redirect( 'course_error' );
		} else {
			if ( ! static::insert_row(
				$name,
				$registration,
				$email,
				$telephone,
				$academic_degree,
				$entry_year,
				$address,
				$course
			) ) {
				static::error_redirect( 'insert_error' );
			}

			static::send_mail(
				$name,
				$registration,
				$email,
				$telephone,
				$academic_degree,
				$entry_year,
				$address,
				$course
			);

			static::success_redirect();
		}
	}

	private static function validate_course( $course ) {
		global $wpdb;

		$course_count = $wpdb->get_var(
			$wpdb->prepare(
				"SELECT COUNT(*)
				FROM {$wpdb->prefix}ppgcine_enrollment
				WHERE course = %s",
				$course
			)
		);

		if ( $course_count >= 10 ) {
			return false;
		}

		return true;
	}

	private static function validate_date() {
		$date_now   = new DateTime( current_time( 'Y-m-d' ) );
		$date_limit = new DateTime( '2019-08-29' );

		if ( $date_now > $date_limit ) {
			return false;
		}

		return true;
	}

	private static function get_academic_degree( $academic_degree ) {
		switch ( sanitize_text_field( $academic_degree ) ) {
			case 'masters':
				return 'Mestrado';
			case 'doctorate':
				return 'Doutorado';
		}
	}

	private static function get_course( $course ) {
		switch ( sanitize_text_field( $course ) ) {
			case 'russian_soviet':
				return 'História do cinema russo e soviético';
			case 'south_african':
				return 'História do cinema sul-africano';
			case 'chinese':
				return 'História do cinema chinês';
			case 'indian':
				return 'História do cinema indiano';
		}
	}

	private static function insert_row( $name, $registration, $email, $telephone, $academic_degree, $entry_year, $address, $course ) {
		global $wpdb;

		$table_name = "{$wpdb->prefix}ppgcine_enrollment";

		static::create_table( $table_name, $wpdb->get_charset_collate() );

		return $wpdb->insert(
			$table_name,
			array(
				'name'            => $name,
				'registration'    => $registration,
				'email'           => $email,
				'telephone'       => $telephone,
				'academic_degree' => $academic_degree,
				'entry_year'      => $entry_year,
				'address'         => $address,
				'course'          => $course,
			)
		);
	}

	private static function send_mail( $name, $registration, $email, $telephone, $academic_degree, $entry_year, $address, $course ) {
		$subject = 'Inscrição de aluno do PPGCine: ' . $name;
		wp_mail(
			[ 'rafaeldeluna@hotmail.com', 'alice.castanhom@gmail.com', 'glaubernm@gmail.com' ],
			$subject,
			static::build_message(
				$subject,
				$name,
				$registration,
				$email,
				$telephone,
				$academic_degree,
				$entry_year,
				$address,
				$course
			),
			[ 'Content-Type: text/html; charset=UTF-8' ]
		);
	}

	private static function create_table( $table_name, $charset_collate ) {
		$sql = "CREATE TABLE IF NOT EXISTS $table_name (
			`id` bigint(20) NOT NULL AUTO_INCREMENT,
			`name` varchar(255) DEFAULT '' NOT NULL,
			`registration` varchar(255),
			`email` varchar(255) DEFAULT '' NOT NULL,
			`telephone` varchar(255) DEFAULT '' NOT NULL,
			`academic_degree` varchar(255) DEFAULT '' NOT NULL,
			`entry_year` varchar(255) DEFAULT '' NOT NULL,
			`address` varchar(255) DEFAULT '' NOT NULL,
			`course` varchar(255) DEFAULT '' NOT NULL,
			PRIMARY KEY (`id`)
		  ) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( $sql );
	}

	private static function build_message( $subject, $name, $registration, $email, $telephone, $academic_degree, $entry_year, $address, $course ) {
		$sitename = static::$sitename;
		$body     = require_once get_template_directory()
			. '/templates/emails/' . static::$email_template . '.php';

		return require_once get_template_directory() . '/templates/email.php';
	}
}
