<?php

abstract class Abstract_Post_Type {
	protected $id;
	protected $label;
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu;
	protected $menu_capability = 'edit_posts';
	protected $menu_icon;
	protected $menu_position;

	/**
	 * Initialize custom post type.
	 *
	 * @return void
	 */
	public function init( $has_menu = false, $menu_position = 26 ) {
		add_action( 'init', array( $this, 'register' ) );

		if ( $has_menu ) {
			$this->menu_position = $menu_position;
			add_action( 'admin_menu', array( $this, 'add_menu' ) );
		}
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
	 * Add custom menu page.
	 *
	 * @return void
	 */
	public function add_menu() {
		global $menu_manager;

		$menu_manager->add(
			$this->label,
			$this->menu_capability,
			$this->menu,
			$this->menu_icon
		);
	}
}
