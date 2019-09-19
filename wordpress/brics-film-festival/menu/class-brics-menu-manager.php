<?php

defined( 'ABSPATH' ) || die();

class Brics_Menu_Manager {
	public $position = 25;

	/**
	 * Initialize menu manager.
	 *
	 * @return void
	 */
	public function boot() {
		add_action( 'admin_menu', array( $this, 'remove' ) );
	}

	/**
	 * Add menu pages.
	 *
	 * @return void
	 */
	public function add_menu( $label, $capability, $slug, $icon, $function = '' ) {
		$action = add_menu_page(
			$label, // page_title
			$label,  // menu_title
			$capability, // capability
			$slug, // menu_slug
			$function, // function
			$icon, // icon_url
			$this->position // position
		);

		add_action( 'admin_menu', 'action' );

		$this->position++;
	}

	/**
	 * Add submenu pages.
	 *
	 * @return void
	 */
	public function add_submenu( $parent, $label, $capability, $slug, $function = '' ) {
		$action = add_submenu_page(
			$parent, // parent_slug
			$label, // page_title
			$label,  // menu_title
			$capability, // capability
			$slug, // menu_slug
			$function // function
		);

		add_action( 'admin_menu', 'action' );
	}

	/**
	 * Remove pages from menu.
	 *
	 * @return void
	 */
	public function remove() {
		remove_menu_page( 'edit.php' ); // Posts
		remove_menu_page( 'upload.php' ); // Media
		remove_menu_page( 'edit.php?post_type=page' ); // Pages
		remove_menu_page( 'edit-comments.php' ); // Comments
		remove_menu_page( 'themes.php' ); // Appearance
		// remove_menu_page( 'plugins.php' ); // Plugins
		// remove_menu_page( 'users.php' ); // Users
		// remove_menu_page( 'tools.php' ); // Tools
		// remove_menu_page( 'options-general.php' ); // Settings
	}
}
