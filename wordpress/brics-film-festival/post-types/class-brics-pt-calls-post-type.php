<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Pt_Calls_Post_Type extends Brics_Abstract_Post_Type {
	protected $id        = 'pt_calls';
	protected $label     = 'Chamadas';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'calls';
	protected $menu_icon = 'dashicons-megaphone';
}
