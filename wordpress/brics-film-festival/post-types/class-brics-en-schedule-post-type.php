<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_En_Schedule_Post_Type extends Brics_Abstract_Post_Type {
	protected $id             = 'en_schedule';
	protected $label          = '[EN] Schedule';
	protected $custom_columns = array(
		'cb'       => '<input type="checkbox" />',
		'title'    => 'Título',
		'subtitle' => 'Subtítulo',
		'days'     => 'Dia(s)',
		'time'     => 'Hora',
	);
	protected $supports       = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu           = 'schedule';

	/**
	 * {@inheritDoc}
	 */
	public function get_custom_columns( $column ) {
		global $post;

		switch ( $column ) {
			case 'subtitle':
				echo get_field( 'subtitle', $post->ID );
				break;
			case 'days':
				echo $this->transform_day( get_field( 'days', $post->ID ) );
				break;
			case 'time':
				echo get_field( 'time', $post->ID );
				break;
			case 'subtitle':
				echo get_field( 'subtitle', $post->ID );
				break;
		}
	}

	private function transform_day( $day ) {
		switch ( $day ) {
			case '2019-09-23-27':
				return '23 a 27 de setembro';
			case '2019-09-27':
				return '27 de setembro';
			case '2019-09-28':
				return '28 de setembro';
			case '2019-09-29':
				return '29 de setembro';
			case '2019-09-30':
				return '30 de setembro';
			case '2019-10-01':
				return '1º de outubro';
			case '2019-10-02':
				return '2 de outubro';
			case '2019-10-03':
				return '3 de outubro';
			case '2019-10-04':
				return '4 de outubro';
			case '2019-10-05':
				return '5 de outubro';
			case '2019-10-06':
				return '6 de outubro';
			case '2019-10-07':
				return '7 de outubro';
			case '2019-10-08':
				return '8 de outubro';
			case '2019-10-09':
				return '9 de outubro';
		}
	}
}
