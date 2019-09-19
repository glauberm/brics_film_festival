<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_Activities_Post_Type extends Brics_Abstract_Post_Type {
	protected $id       = 'en_activities';
	protected $label    = '[EN] Activities';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'activities';
}
