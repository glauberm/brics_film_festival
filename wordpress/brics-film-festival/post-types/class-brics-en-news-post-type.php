<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_News_Post_Type extends Brics_Abstract_Post_Type {
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
