<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_Activities_Informations_Post_Type extends Brics_Abstract_Post_Type {
	protected $id       = 'en_activity_aside';
	protected $label    = '[EN] Activities Information';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'activities';
}
