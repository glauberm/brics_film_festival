<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

abstract class Abstract_Settings extends Abstract_Menuable {
	protected $id;
	protected $options;
	private $route_namespace = 'brics/v1';

	/**
	 * Initialize settings.
	 *
	 * @return void
	 */
	public function boot( $has_menu = false, $is_submenu = false, $menu_function = 'render' ) {
		add_action( 'admin_init', array( $this, 'register_fields' ) );
		add_action( 'admin_init', array( $this, 'add_fields' ) );
		add_action( 'rest_api_init', array( $this, 'api_fields' ) );

		parent::boot( $has_menu, $is_submenu, $menu_function );
	}

	/**
	 * Register settings fields.
	 *
	 * @return void
	 */
	public function register_fields() {
		foreach ( $this->options as $option ) {
			register_setting(
				$this->id, // option_group
				$option['id'], // option_name
				array(
					'type'              => $option['type'],
					'sanitize_callback' => function ( $input ) use ( $option ) {
						if ( array_key_exists( 'sanitize_function', $option )
							&& $option['sanitize_function']
						) {
							return call_user_func(
								array( $this, $option['sanitize_function'] ),
								$input,
								$option
							);
						}
					},
				)
			);
		}
	}

	/**
	 * Add settings fields.
	 *
	 * @return void
	 */
	public function add_fields() {
		foreach ( $this->options as $option ) {
			add_settings_field(
				$option['id'], // id
				$option['title'], // title
				function ( $args ) use ( $option ) {
					require_once BRICS_FILM_FESTIVAL_ABSPATH
						. 'templates/field-types/' . $args['type'] . '.php';
				}, // callback
				$this->id, // page
				'', // section
				array( // args
					'id'    => $option['id'],
					'name'  => $option['id'],
					'type'  => $option['type'],
					'value' => get_option( $option['id'] ),
				)
			);
		}
	}

	/**
	 * Register settings on the REST API.
	 *
	 * @return void
	 */
	public function api_fields() {
		register_rest_route(
			$this->route_namespace, // namespace
			$this->id, // route
			array( // args
				'methods'  => 'GET',
				'callback' => function() {
					$fields = array();

					// Otherwise Gatsby doesn't see it.
					$fields['wordpress_id'] = 1;

					foreach ( $this->options as $option ) {
						$fields[ $option['id'] ] = get_option( $option['id'] );
					}

					return $fields;
				},
			)
		);
	}

	/**
	 * Render settings messages and form.
	 *
	 * @return void
	 */
	public function render() {
		$id = $this->id;

		if ( empty( get_settings_errors( $id ) )
			&& isset( $_GET['settings-updated'] )
		) {
			add_settings_error(
				$id, // setting
				'success', // code
				'Configurações salvas com sucesso.', // message
				'updated' // type
			);
		}

		require_once BRICS_FILM_FESTIVAL_ABSPATH . 'templates/settings.php';
	}

	/**
	 * Sanitize required field.
	 *
	 * @return string
	 */
	protected function required( $input, $option ) {
		if ( ! $input ) {
			add_settings_error(
				$this->id, // setting
				'required', // code
				'O campo "' . $option['title'] . '" não pode ficar vazio.', // message
				'error' // type
			);

			return get_option( $option['id'] );
		}

		return $input;
	}
}
