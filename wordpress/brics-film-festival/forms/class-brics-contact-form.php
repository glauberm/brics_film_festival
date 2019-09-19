<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Contact_Form extends Brics_Abstract_Form {
	protected $route = 'contact_form';
	protected $email = 'contact-form';

	/**
	 * @inheritDoc
	 */
	protected function get_data() {
		return array(
			'name'    => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'email'   => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_email',
				'validate_callback' => function( $param, $request, $key ) {
					return (
						( ! empty( $param ) )
						&& is_email( $param )
					);
				},
			),
			'subject' => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_text_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
			'message' => array(
				'required'          => true,
				'sanitize_callback' => 'sanitize_textarea_field',
				'validate_callback' => function( $param, $request, $key ) {
					return ( ! empty( $param ) );
				},
			),
		);
	}

	/**
	 * @inheritDoc
	 */
	protected function form_action( $request ) {
		if (
			wp_mail(
				$this->get_mail_to(),
				$request['subject'],
				$this->build_mail_message( $request ),
				array( 'Content-Type: text/html; charset=UTF-8' )
			)
		) {
			return true;
		}

		return new Brics_WP_Error( 'mail-error', 'Error sending mail. Please try again.' );
	}

	/**
	 * Get email recipients.
	 *
	 * @return array
	 */
	protected function get_mail_to() {
		if ( ENV === 'production' ) {
			return array( 'flaviaclemente@id.uff.br', 'glaubernm@gmail.com' );
		}

		return array( 'glaubernm@gmail.com' );
	}
}
