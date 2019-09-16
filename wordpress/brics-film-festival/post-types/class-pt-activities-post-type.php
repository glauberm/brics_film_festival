<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Pt_Activities_Post_Type extends Abstract_Post_Type {
	protected $id        = 'pt_activities';
	protected $label     = 'Atividades';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'activities';
	protected $menu_icon = 'dashicons-groups';
}
