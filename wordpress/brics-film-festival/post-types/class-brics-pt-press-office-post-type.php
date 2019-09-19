<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Pt_Press_Office_Post_Type extends Brics_Abstract_Post_Type {
	protected $id        = 'pt_press_office';
	protected $label     = 'Assessoria de Imprensa';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'press-office';
	protected $menu_icon = 'dashicons-paperclip';
}
