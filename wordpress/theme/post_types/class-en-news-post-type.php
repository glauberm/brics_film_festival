<?php

require_once get_template_directory() . '/post_types/class-abstract-post-type.php';

class En_News_Post_Type extends Abstract_Post_Type {
	protected $id       = 'en_news';
	protected $label    = '[EN] News';
	protected $supports = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu     = 'news';
}
