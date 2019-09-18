<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_Venues_Post_Type extends Brics_Abstract_Post_Type {
	protected $id       = 'en_venues';
	protected $label    = '[EN] Venues';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'venues';
}
