<?php

defined( 'ABSPATH' ) || die();

class Menu_Manager {
	public $position = 25;

	/**
	 * Initialize custom menu.
	 *
	 * @return void
	 */
	public function init() {
		add_action( 'admin_menu', array( $this, 'remove' ) );
	}

	/**
	 * Add custom menu pages.
	 *
	 * @return void
	 */
	public function add( $label, $capability, $menu, $icon ) {
		$action = add_menu_page(
			$label, // page_title
			$label,  // menu_title
			$capability, // capability
			$menu, // menu_slug
			'', // function
			$icon, // icon_url
			$this->position // position
		);

		add_action( 'admin_menu', 'action' );

		$this->position++;
	}

	/**
	 * Remove pages from custom menu.
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
