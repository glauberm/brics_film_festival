<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Pt_Schedule_Post_Type extends Brics_Abstract_Post_Type {
	protected $id        = 'pt_schedule';
	protected $label     = 'Programação';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'schedule';
	protected $menu_icon = 'dashicons-schedule';
}
