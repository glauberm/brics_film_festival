<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

abstract class Brics_Abstract_Post_Type extends Brics_Abstract_Menuable {
	protected $id;
	protected $label;
	protected $custom_columns;
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);

	/**
	 * Initialize post type.
	 *
	 * @return void
	 */
	public function boot( $has_menu = false, $is_submenu = false, $menu_function = '' ) {
		add_action( 'init', array( $this, 'register' ) );

		if ( $this->custom_columns ) {
			add_action(
				'manage_' . $this->id . '_posts_custom_column',
				array( $this, 'get_custom_columns' )
			);
			add_filter(
				'manage_' . $this->id . '_posts_columns',
				array( $this, 'custom_columns' )
			);
		}

		$this->menu_label = $this->label;
		parent::boot( $has_menu, $is_submenu, $menu_function );
	}

	/**
	 * Register post types.
	 *
	 * @return void
	 */
	public function register() {
		register_post_type(
			$this->id, // post_type
			array( // args
				'label'        => $this->label,
				'public'       => true,
				'show_in_rest' => true,
				'show_in_menu' => $this->menu,
				'supports'     => $this->supports,
			)
		);
	}

	/**
	 * Customize post type's table columns.
	 *
	 * @return void
	 */
	public function custom_columns() {
		return $this->custom_columns;
	}

	/**
	 * Get custom columns.
	 *
	 * @return void
	 */
	public function get_custom_columns( $column ) {
		return null;
	}
}
