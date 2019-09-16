<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Pt_Screenings_Post_Type extends Abstract_Post_Type {
	protected $id        = 'pt_screenings';
	protected $label     = 'Mostras';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'screenings';
	protected $menu_icon = 'dashicons-visibility';
}
