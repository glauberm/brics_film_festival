<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

abstract class Abstract_Post_Type extends Abstract_Menuable {
	protected $id;
	protected $label;
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
}
