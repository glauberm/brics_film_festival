<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_Films_Post_Type extends Brics_Abstract_Post_Type {
	protected $id       = 'en_films';
	protected $label    = '[EN] Films';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'films';
}
