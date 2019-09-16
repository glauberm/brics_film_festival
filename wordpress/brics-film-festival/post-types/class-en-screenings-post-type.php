<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class En_Screenings_Post_Type extends Abstract_Post_Type {
	protected $id       = 'en_screenings';
	protected $label    = '[EN] Screenings';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'screenings';
}
