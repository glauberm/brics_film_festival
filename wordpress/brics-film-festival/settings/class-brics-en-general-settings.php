<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_General_Settings extends Brics_Abstract_Settings {
	protected $id          = 'en_general_settings';
	protected $options     = array(
		array(
			'id'                => 'en_site_title',
			'type'              => 'text',
			'title'             => 'Site Title',
			'sanitize_function' => 'required',
		),
		array(
			'id'                => 'en_site_description',
			'type'              => 'textarea',
			'title'             => 'Site Description',
			'sanitize_function' => 'required',
		),
	);
	protected $menu        = 'en_general_settings';
	protected $menu_label  = '[EN] General Settings';
	protected $menu_parent = 'general_settings';
}
