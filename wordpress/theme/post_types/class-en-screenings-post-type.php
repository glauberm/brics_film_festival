<?php

require_once get_template_directory() . '/post_types/class-abstract-post-type.php';

class En_Screenings_Post_Type extends Abstract_Post_Type {
	protected $id       = 'en_screenings';
	protected $label    = '[EN] Screenings';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'screenings';
}
