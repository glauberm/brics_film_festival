<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Pt_General_Settings extends Abstract_Settings {
	protected $id         = 'pt_general_settings';
	protected $options    = array(
		array(
			'id'                => 'pt_site_title',
			'type'              => 'text',
			'title'             => 'Título do site',
			'sanitize_function' => 'required',
		),
		array(
			'id'                => 'pt_site_description',
			'type'              => 'textarea',
			'title'             => 'Descrição do site',
			'sanitize_function' => 'required',
		),
	);
	protected $menu       = 'general_settings';
	protected $menu_label = 'Configurações Gerais';
	protected $menu_icon  = 'dashicons-info';
}
