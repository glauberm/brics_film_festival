<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_Press_Office_Post_Type extends Brics_Abstract_Post_Type {
	protected $id       = 'en_press_office';
	protected $label    = '[EN] Press Office';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'press-office';
}
