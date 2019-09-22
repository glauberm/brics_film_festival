<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

class Brics_Pt_Films_Post_Type extends Brics_Abstract_Post_Type {
	protected $id             = 'pt_films';
	protected $label          = 'Filmes';
	protected $custom_columns = array(
		'cb'        => '<input type="checkbox" />',
		'image'     => 'Imagem',
		'title'     => 'Título',
		'screening' => 'Mostra',
		'country'   => 'País',
		'year'      => 'Ano',
	);
	protected $supports       = array(
		'title',
		'page-attributes',
		'revisions',
		'author',
	);
	protected $menu           = 'films';
	protected $menu_icon      = 'dashicons-video-alt2';

	/**
	 * {@inheritDoc}
	 */
	public function get_custom_columns( $column ) {
		global $post;

		switch ( $column ) {
			case 'image':
				$image = get_field( 'image', $post->ID );

				if ( $image ) {
					echo wp_get_attachment_image(
						$image['ID'],
						array( 200, 200 )
					);
				}
				break;
			case 'screening':
				$screening = get_field( 'screening', $post->ID );

				if ( $screening ) {
					echo get_the_title( $screening->ID );
				}
				break;
			case 'country':
				echo $this->transform_country(
					get_field( 'country', $post->ID )
				);
				break;
			case 'year':
				echo get_field( 'year', $post->ID );
				break;
		}
	}

	private function transform_country( $country ) {
		switch ( $country ) {
			case 'brazil':
				return 'Brasil';
			case 'russia':
				return 'Rússia';
			case 'india':
				return 'Índia';
			case 'china':
				return 'China';
			case 'south_africa':
				return 'África do Sul';
			case 'china_brazil':
				return 'China/Brasil';
			default:
				return '';
		}
	}
}
