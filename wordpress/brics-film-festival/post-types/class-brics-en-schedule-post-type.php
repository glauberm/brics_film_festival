<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_Schedule_Post_Type extends Brics_Abstract_Post_Type {
	protected $id       = 'en_schedule';
	protected $label    = '[EN] Schedule';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'schedule';
}
