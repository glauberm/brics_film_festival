<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/classes/class-custom-settings.php';

class English_Site_Info extends Custom_Settings {
	protected static $classname       = 'English_Site_Info';
	protected static $page            = 'en_site_info';
	protected static $messages        = 'en_site_info_messages';
	protected static $section         = 'en_site_info_section';
	protected static $user_capability = 'edit_posts';
	protected static $options         = [
		[
			'id'    => 'en_site_info_title',
			'title' => 'Site Title',
			'type'  => 'text',
		],
		[
			'id'    => 'en_site_info_description',
			'title' => 'Site Description',
			'type'  => 'textarea',
		],
	];


	/**
	 * Add portuguese settings menu page.
	 *
	 * @return void
	 */
	public static function menu() {
		add_submenu_page(
			'site_info', // parent_slug
			'General Information', // page_title
			'[EN] General Information', // menu_title
			self::$user_capability, // capability
			'en_site_info', // menu_slug
			array( self::$classname, 'render' ) // function
		);
	}
}
