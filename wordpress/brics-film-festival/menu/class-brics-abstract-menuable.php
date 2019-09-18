<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

abstract class Brics_Abstract_Menuable {
	protected $menu;
	protected $menu_label;
	protected $menu_capability = 'edit_posts';
	protected $menu_icon;
	protected $menu_function;
	protected $menu_parent;

	/**
	 * Initialize menuable items.
	 *
	 * @return void
	 */
	public function boot( $has_menu = false, $is_submenu = false, $menu_function = '' ) {
		if ( $has_menu ) {
			add_action( 'admin_menu', array( $this, 'add_menu' ) );
		}

		if ( $is_submenu ) {
			add_action( 'admin_menu', array( $this, 'add_submenu' ) );
		}

		if ( $menu_function ) {
			$this->menu_function = array( $this, $menu_function );
		}
	}

	/**
	 * Add menu page.
	 *
	 * @return void
	 */
	public function add_menu() {
		global $brics_menu_manager;

		$brics_menu_manager->add_menu(
			$this->menu_label,
			$this->menu_capability,
			$this->menu,
			$this->menu_icon,
			$this->menu_function
		);
	}

	/**
	 * Add submenu page.
	 *
	 * @return void
	 */
	public function add_submenu() {
		global $brics_menu_manager;

		$brics_menu_manager->add_submenu(
			$this->menu_parent,
			$this->menu_label,
			$this->menu_capability,
			$this->menu,
			$this->menu_function
		);
	}
}
