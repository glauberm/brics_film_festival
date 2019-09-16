<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Pt_News_Post_Type extends Abstract_Post_Type {
	protected $id        = 'pt_news';
	protected $label     = 'Notícias';
	protected $supports  = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu      = 'news';
	protected $menu_icon = 'dashicons-welcome-write-blog';
}
