<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Pt_Activities_Informations_Post_Type extends Brics_Abstract_Post_Type {
	protected $id       = 'pt_activity_aside';
	protected $label    = 'Informações de Atividades';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'activities';
}
