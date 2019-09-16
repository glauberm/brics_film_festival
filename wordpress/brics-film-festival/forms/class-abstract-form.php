<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

abstract class Abstract_Form {
	protected $route;
	protected $email;
	private $route_namespace = 'brics/v1';

	/**
	 * Get form data.
	 *
	 * @return array
	 */
	abstract protected function get_data();

	/**
	 * Handle form action.
	 *
	 * @param WP_REST_Request $data
	 * @return void
	 */
	abstract protected function form_action( $request );

	/**
	 * Initialize form.
	 *
	 * @return void
	 */
	public function boot() {
		add_action( 'rest_api_init', array( $this, 'api_route' ) );
	}

	/**
	 * Register form on the REST API.
	 *
	 * @return void
	 */
	public function api_route() {
		register_rest_route(
			$this->route_namespace, // namespace
			$this->route, // route
			array( // args
				'methods'  => 'POST',
				'callback' => array( $this, 'handle_form' ),
				'args'     => $this->get_args(),
			)
		);
	}

	/**
	 * Handle form submission.
	 *
	 * @return mixed
	 */
	public function handle_form( $request ) {
		$this->form_action( $request );

		return new WP_REST_Response( array( 'code' => 'success' ) );
	}

	/**
	 * Get arguments for the REST API endpoint.
	 *
	 * @return void
	 */
	protected function get_args() {
		if ( ENV === 'production' ) {
			return array_merge(
				array(
					'g-recaptcha-response' => array(
						'required'          => true,
						'validate_callback' => function( $param, $request, $key ) {
							$recaptcha_response = wp_remote_post(
								'https://www.google.com/recaptcha/api/siteverify',
								array(
									'body' => array(
										'secret'   => RECAPTCHA_SECRET_KEY,
										'response' => $param,
									),
								)
							);

							$recaptcha = json_decode(
								$recaptcha_response['body'],
								true
							);

							return $recaptcha['success'];
						},
					),
				),
				$this->get_data()
			);
		}

		return $this->get_data();
	}

	/**
	 * Build email message.
	 *
	 * @return string
	 */
	protected function build_mail_message( $data ) {
		ob_start();
		require_once BRICS_FILM_FESTIVAL_ABSPATH
			. 'templates/emails/' . $this->email . '.php';

		$body = ob_get_clean();
		ob_end_flush();

		ob_start();
		require_once BRICS_FILM_FESTIVAL_ABSPATH . 'templates/email.php';

		return ob_get_clean();
	}
}
