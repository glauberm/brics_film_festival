<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/classes/class-custom-settings.php';

class Portuguese_Site_Info extends Custom_Settings {
	protected static $classname       = 'Portuguese_Site_Info';
	protected static $page            = 'pt_site_info';
	protected static $messages        = 'pt_site_info_messages';
	protected static $section         = 'pt_site_info_section';
	protected static $user_capability = 'edit_posts';
	protected static $options         = [
		[
			'id'    => 'pt_site_info_title',
			'title' => 'Título do site',
			'type'  => 'text',
		],
		[
			'id'    => 'pt_site_info_description',
			'title' => 'Descrição do site',
			'type'  => 'textarea',
		],
		[
			'id'    => 'pt_site_info_ppgcine_enrollment_instructions',
			'title' => 'Instrução para inscrição de alunos do PPGCine',
			'type'  => 'textarea',
		],
		// [
		// 	'id'    => 'pt_site_info_ppgcine_enrollment_inactive',
		// 	'title' => 'Inscrição para alunos do PPGCine inativa?',
		// 	'type'  => 'checkbox',
		// ],
		[
			'id'    => 'pt_site_info_ppgcine_enrollment_inactive_message',
			'title' => 'Mensagem de inatividade da inscrição para alunos do PPGCine',
			'type'  => 'textarea',
		],
	];


	/**
	 * Add portuguese settings menu page.
	 *
	 * @return void
	 */
	public static function menu() {
		add_menu_page(
			'Informações Gerais', // page_title
			'Informações Gerais',  // menu_title
			self::$user_capability, // capability
			'site_info', // menu_slug
			array( self::$classname, 'render' ), // function
			'dashicons-info', // icon_url
			26 // position
		);
	}
}
