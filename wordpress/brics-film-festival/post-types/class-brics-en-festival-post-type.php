<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_Festival_Post_Type extends Brics_Abstract_Post_Type {
	protected $id       = 'en_festival';
	protected $label    = '[EN] The Festival';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'festival';
}
