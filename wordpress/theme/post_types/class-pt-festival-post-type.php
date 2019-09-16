<?php

require_once get_template_directory() . '/post_types/class-abstract-post-type.php';

class Pt_Festival_Post_Type extends Abstract_Post_Type {
	protected $id        = 'pt_festival';
	protected $label     = 'O Festival';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'festival';
	protected $menu_icon = 'dashicons-tickets-alt';
}
