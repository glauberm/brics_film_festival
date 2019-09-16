<?php

defined( 'ABSPATH' ) || die();

abstract class Custom_Form {
	/**
	 * Handle reCAPTCHA validation and calls form submission.
	 *
	 * @return void
	 */
	public static function handle_form() {
		if ( ENV !== 'development' ) {
			if ( empty( $_POST['g-recaptcha-response']) ) {
				// Empty reCAPTCHA
				static::error_redirect( 'empty_recaptcha' );
			} else {
				$recaptcha_response = wp_remote_post(
					'https://www.google.com/recaptcha/api/siteverify',
					array(
						'body' => array(
							'secret'   => RECAPTCHA_SECRET_KEY,
							'response' => $_POST['g-recaptcha-response'],
						),
					)
				);

				$recaptcha = json_decode( $recaptcha_response['body'], true );

				if ( ! $recaptcha['success'] ) {
					static::error_redirect( 'recaptcha_error' );
				}

				static::form_submission();
			}
		}

		static::form_submission();
	}

	/**
	 * Handle error redirects.
	 *
	 * @param string $error_code
	 * @return void
	 */
	protected static function error_redirect( string $error_code ) {
		wp_redirect(
			BASE_SITE_URL . static::$path . '?error='
			. rawurlencode( $error_code )
		);
		exit();
	}

	/**
	 * Handle success redirects.
	 *
	 * @return void
	 */
	protected static function success_redirect() {
		wp_redirect(
			BASE_SITE_URL . static::$path . '?success=true'
		);
		exit();
	}
}
