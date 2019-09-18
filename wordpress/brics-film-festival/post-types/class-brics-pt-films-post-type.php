<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Pt_Films_Post_Type extends Brics_Abstract_Post_Type {
	protected $id        = 'pt_films';
	protected $label     = 'Filmes';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'films';
	protected $menu_icon = 'dashicons-video-alt2';
}
