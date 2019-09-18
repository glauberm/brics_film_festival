<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Pt_Festival_Post_Type extends Brics_Abstract_Post_Type {
	protected $id        = 'pt_festival';
	protected $label     = 'O Festival';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'festival';
	protected $menu_icon = 'dashicons-tickets-alt';
}
