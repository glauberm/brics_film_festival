<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_Calls_Post_Type extends Brics_Abstract_Post_Type {
	protected $id       = 'en_calls';
	protected $label    = '[EN] Calls';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'calls';
}
