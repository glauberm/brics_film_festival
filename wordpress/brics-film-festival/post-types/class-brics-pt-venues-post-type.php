<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Pt_Venues_Post_Type extends Brics_Abstract_Post_Type {
	protected $id        = 'pt_venues';
	protected $label     = 'Locais';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'venues';
	protected $menu_icon = 'dashicons-location-alt';
}
