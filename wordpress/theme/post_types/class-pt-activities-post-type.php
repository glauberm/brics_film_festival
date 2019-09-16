<?php

require_once get_template_directory() . '/post_types/class-abstract-post-type.php';

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
