<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/classes/class-custom-form.php';

class Incubator_Meeting_Enrollment_Form extends Custom_Form {
	protected static $path           = '/pt/inscricao-encontro-incubadora';
	protected static $sitename       = '4º Festival de Cinema BRICS';
	protected static $email_template = 'incubator-meeting-enrollment-email';

	/**
	 * Initialize contact form handler.
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'rest_api_init', array( 'Incubator_Meeting_Enrollment_Form', 'api_route' ) );
	}

	/**
	 * Add contact form API route.
	 *
	 * @return void
	 */
	public static function api_route() {
		register_rest_route(
			'brics/v1', // namespace
			'incubator_meeting_enrollment', // route
			array( // args
				'methods'  => 'POST',
				'callback' => array( 'Incubator_Meeting_Enrollment_Form', 'handle_form' ),
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
		$work_field  = static::get_work_field( $_POST['work_field'] );
		$formation   = static::get_formation( $_POST['formation'] );
		$knowledge   = static::get_knowledge( $_POST['knowledge'] );
		$address     = sanitize_text_field( $_POST['address'] );
		$telephone   = sanitize_text_field( $_POST['telephone'] );
		$email       = sanitize_email( $_POST['email'] );
		$description = sanitize_textarea_field( $_POST['description'] );
		$interests   = sanitize_textarea_field( $_POST['interests'] );

		if ( empty( $name ) || empty( $age ) || empty( $profession ) || empty( $formation ) || empty( $knowledge ) || empty( $address ) || empty( $telephone ) || empty( $email ) || empty( $description ) || empty( $interests ) ) {
			// Field error
			static::error_redirect( 'field_error' );
		} else {
			if ( ! static::insert_row(
				$name,
				$age,
				$profession,
				$work_field,
				$formation,
				$knowledge,
				$address,
				$telephone,
				$email,
				$description,
				$interests
			) ) {
				static::error_redirect( 'insert_error' );
			}

			static::send_mail(
				$name,
				$age,
				$profession,
				$work_field,
				$formation,
				$knowledge,
				$address,
				$telephone,
				$email,
				$description,
				$interests
			);

			static::success_redirect();
		}
	}

	private static function get_work_field( $work_field ) {
		switch ( sanitize_text_field( $work_field ) ) {
			case 'cinemateca':
				return 'Cinemateca';
			case 'arquivo':
				return 'Arquivo';
			case 'biblioteca':
				return 'Biblioteca';
			case 'museu':
				return 'Museu';
			case 'universidade':
				return 'Universidade';
			case 'escola':
				return 'Escola';
			case 'produtora':
				return 'Produtora de Filmes';
			case 'emissora':
				return 'Emissora de Televisão';
			case 'outros':
				return 'Outros';
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

	private static function get_knowledge( $knowledge ) {
		switch ( sanitize_text_field( $knowledge ) ) {
			case 'site':
				return 'Site do Festival';
			case 'email':
				return 'E-mail';
			case 'social':
				return 'Redes Sociais';
			case 'others':
				return 'Outros';
		}
	}

	private static function insert_row( $name, $age, $profession, $work_field, $formation, $knowledge, $address, $telephone, $email, $description, $interests ) {
		global $wpdb;

		$table_name = "{$wpdb->prefix}incubator_meeting_enrollment";

		static::create_table( $table_name, $wpdb->get_charset_collate() );

		return $wpdb->insert(
			$table_name,
			array(
				'name'        => $name,
				'age'         => $age,
				'profession'  => $profession,
				'work_field'  => $work_field,
				'formation'   => $formation,
				'knowledge'   => $knowledge,
				'address'     => $address,
				'telephone'   => $telephone,
				'email'       => $email,
				'description' => $description,
				'interests'   => $interests,
			)
		);
	}

	private static function send_mail( $name, $age, $profession, $work_field, $formation, $knowledge, $address, $telephone, $email, $description, $interests ) {
		$subject = 'Inscrição no Encontro da Incubadora: ' . $name;
		wp_mail(
			[ 'indiamartins@gmail.com', 'brunavasribeiro@gmail.com', 'glaubernm@gmail.com' ],
			$subject,
			static::build_message(
				$subject,
				$name,
				$age,
				$profession,
				$work_field,
				$formation,
				$knowledge,
				$address,
				$telephone,
				$email,
				$description,
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
			`work_field` varchar(255),
			`formation` varchar(255) DEFAULT '' NOT NULL,
			`knowledge` varchar(255) DEFAULT '' NOT NULL,
			`address` varchar(255) DEFAULT '' NOT NULL,
			`telephone` varchar(255) DEFAULT '' NOT NULL,
			`email` varchar(255) DEFAULT '' NOT NULL,
			`description` text DEFAULT '' NOT NULL,
			`interests` text DEFAULT '' NOT NULL,
			PRIMARY KEY (`id`)
		  ) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';

		dbDelta( $sql );
	}

	private static function build_message( $subject, $name, $age, $profession, $work_field, $formation, $knowledge, $address, $telephone, $email, $description, $interests ) {
		$sitename = static::$sitename;
		$body     = require_once get_template_directory()
			. '/templates/emails/' . static::$email_template . '.php';

		return require_once get_template_directory() . '/templates/email.php';
	}
}
