<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/classes/class-custom-form.php';

class Contact_Form extends Custom_Form {
	/**
	 * Handle form submission.
	 *
	 * @return void
	 */
	public static function form_submission() {
		if ( empty( $_POST['name'] ) || empty( $_POST['email'] ) || empty( $_POST['subject']) || empty( $_POST['message']) ) {
			// Field error
			static::error_redirect( 'field_error' );
		} else {
			if ( ! wp_mail(
				[ 'flaviaclemente@id.uff.br', 'glaubernm@gmail.com' ],
				sanitize_text_field( $_POST['subject'] ),
				static::build_message(
					$_POST['subject'],
					$_POST['name'],
					$_POST['email'],
					$_POST['message']
				),
				[ 'Content-Type: text/html; charset=UTF-8' ]
			) ) {
				// Mail error
				static::error_redirect( 'mail_error' );
			} else {
				static::success_redirect();
			}
		}
	}

	public static function build_message( $subject, $name, $email, $message ) {
		$subject  = sanitize_text_field( $subject );
		$name     = sanitize_text_field( $name );
		$email    = sanitize_email( $email );
		$message  = sanitize_textarea_field( $message );
		$sitename = static::$sitename;
		$body     = require_once get_template_directory()
			. '/templates/emails/' . static::$email_template . '.php';

		return require_once get_template_directory() . '/templates/email.php';
	}
}
