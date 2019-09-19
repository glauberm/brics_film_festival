<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Preservation_Meeting_Enrollment_Form extends Brics_Abstract_Enrollment_Form {
	protected $route   = 'preservation_meeting_enrollment_form';
	protected $email   = 'preservation-meeting-enrollment-form';
	protected $subject = 'Inscrição no Encontro de Preservação';


	/**
	 * @inheritDoc
	 */
	protected function get_data() {
		return array(
			'name'                     => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'age'                      => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'email'                    => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_email',
				'validate_callback' => function( $param, $request, $key ) {
					return (
						( ! empty( $param ) )
						&& is_email( $param )
					);
				},
			),
			'telephone'                => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'profession'               => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'workAt'                   => array(
				'required'          => false,
				'sanitize_callback' => array( $this, 'sanitize_work_at' ),
			),
			'formation'                => array(
				'required'          => true,
				'sanitize_callback' => array( $this, 'sanitize_formation' ),
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'registrationKnowledge'    => array(
				'required'          => true,
				'sanitize_callback' => array( $this, 'sanitize_registration_knowledge' ),
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'address'                  => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'activityBriefDescription' => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_textarea_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'activityInterest'         => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_textarea_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
		);
	}

	/**
	 * Insert row on database.
	 *
	 * @param array $data
	 *
	 * @return void
	 */
	protected function insert_row( $data ) {
		global $wpdb;

		$table_name = "{$wpdb->prefix}workshop_enrollment";

		$this->create_table( $table_name, $wpdb->get_charset_collate() );

		return $wpdb->insert(
			$table_name,
			array(
				'name'        => $data['name'],
				'age'         => $data['age'],
				'email'       => $data['email'],
				'telephone'   => $data['telephone'],
				'profession'  => $data['profession'],
				'work_field'  => $data['workAt'],
				'formation'   => $data['formation'],
				'knowledge'   => $data['registrationKnowledge'],
				'address'     => $data['address'],
				'description' => $data['activityBriefDescription'],
				'interests'   => $data['activityInterest'],
			)
		);
	}

	/**
	 * Get email recipients.
	 *
	 * @return array
	 */
	protected function get_mail_to() {
		if ( ENV === 'production' ) {
			return array(
				'rafaeldeluna@hotmail.com',
				'alice.castanhom@gmail.com',
				'glaubernm@gmail.com',
			);
		}

		return array( 'glaubernm@gmail.com' );
	}

	/**
	 * Create table if not exists.
	 *
	 * @param string $table_name
	 * @param string $charset_collate
	 *
	 * @return void
	 */
	private function create_table( $table_name, $charset_collate ) {
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
}
