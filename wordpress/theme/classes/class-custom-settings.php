<?php

abstract class Custom_Settings {
	protected static $classname;
	protected static $page;
	protected static $messages;
	protected static $section;
	protected static $user_capability;
	protected static $options;

	/**
	 * Initialize function.
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'admin_init', array( static::$classname, 'register_fields' ) );
		add_action( 'admin_init', array( static::$classname, 'add_fields' ) );
		add_action( 'rest_api_init', array( static::$classname, 'api_fields' ) );
		add_action( 'admin_menu', array( static::$classname, 'menu' ) );
	}

	/**
	 * Register custom settings fields.
	 *
	 * @return void
	 */
	public static function register_fields() {
		foreach ( static::$options as $option ) {
			register_setting(
				static::$page, // option_group
				$option['id'], // option_name
				array(
					'sanitize_callback' => [],
				)
			);
		}
	}

	/**
	 * Add custom settings fields.
	 *
	 * @return void
	 */
	public static function add_fields() {
		foreach ( static::$options as $option ) {
			add_settings_field(
				$option['id'], // id
				$option['title'], // title
				function ( $args ) use ( $option ) {
					$options = get_option( $args['option_name'] );
					require get_template_directory()
						. '/templates/field_types/' . $option['type'] . '.php';
				}, // callback
				static::$page, // page
				static::$section, // section
				array( // args
					'field_name'  => $option['id'],
					'option_name' => $option['id'],
				)
			);
		}
	}

	/**
	 * Add custom settings API fields.
	 *
	 * @return void
	 */
	public static function api_fields() {
		register_rest_route(
			'brics/v1', // namespace
			static::$page, // route
			array( // args
				'methods'  => 'GET',
				'callback' => function() {
					$return = [];

					foreach ( static::$options as $option ) {
						$return = array_merge(
							$return,
							get_option( $option['id'] )
						);
					}

					// Otherwise Gatsby doesn't see it.
					$return['wordpress_id'] = 1;

					return $return;
				},
			)
		);
	}

	/**
	 * Render custom settings messages and form.
	 *
	 * @return void
	 */
	public static function render() {
		if ( ! current_user_can( static::$user_capability ) ) {
			return;
		}

		if ( empty( get_settings_errors( static::$messages ) ) ) {
			if ( isset( $_GET['settings-updated'] ) ) {
				add_settings_error(
					static::$messages, // setting
					'success', // code
					'Configurações salvas.', // message
					'updated' // type
				);
			}
		}

		settings_errors( static::$messages );

		?>
			<div class="wrap">
				<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
				<form action="options.php" method="post">
					<table class="form-table">
						<?php
							settings_fields(
								static::$page // option_group
							);

							do_settings_fields(
								static::$page, // page,
								static::$section // section
							);
						?>
					</table>
					<?php submit_button(); ?>
				</form>
			</div>
		<?php
	}
}
