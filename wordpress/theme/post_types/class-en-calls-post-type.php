<?php

require_once get_template_directory() . '/post_types/class-abstract-post-type.php';

class En_Calls_Post_Type extends Abstract_Post_Type {
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
