<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

abstract class Brics_Abstract_Enrollment_Form extends Brics_Abstract_Form {
	/**
	 * Sanitize 'work at' field.
	 *
	 * @param string $work_at
	 *
	 * @return string
	 */
	public function sanitize_work_at( $work_at ) {
		switch ( sanitize_text_field( $work_at ) ) {
			case 'cinematheque':
				return 'Cinemateca';
			case 'archive':
				return 'Arquivo';
			case 'library':
				return 'Biblioteca';
			case 'museum':
				return 'Museu';
			case 'university':
				return 'Universidade';
			case 'school':
				return 'Escola';
			case 'movieProducer':
				return 'Produtora de Filmes';
			case 'tvStation':
				return 'Emissora de televisão';
			case 'others':
				return 'Outros';
			default:
				return 'Não informado';
		}
	}

	/**
	 * Sanitize 'formation' field.
	 *
	 * @param string $formation
	 *
	 * @return string
	 */
	public function sanitize_formation( $formation ) {
		switch ( sanitize_text_field( $formation ) ) {
			case 'middleSchool':
				return 'Ensino Fundamental';
			case 'highSchool':
				return 'Ensino Médio';
			case 'bachelorsDegree':
				return 'Ensino Superior';
			case 'mastersDegree':
				return 'Mestrado';
			case 'doctorsDegree':
				return 'Doutorado';
			default:
				return 'Não informado';
		}
	}

	/**
	 * Sanitize 'course' field.
	 *
	 * @param string $course
	 *
	 * @return string
	 */
	public function sanitize_course( $course ) {
		switch ( sanitize_text_field( $course ) ) {
			case 'russianSovietFilmHistory':
				return 'História do cinema russo e soviético';
			case 'southAfricanFilmHistory':
				return 'História do cinema sul-africano';
			case 'chineseFilmHistory':
				return 'História do cinema chinês';
			case 'indianFilmHistory':
				return 'História do cinema indiano';
			default:
				return 'Não informado';
		}
	}

	/**
	 * Sanitize 'registration knowledge' field.
	 *
	 * @param string $registration_knowledge
	 *
	 * @return string
	 */
	public function sanitize_registration_knowledge( $registration_knowledge ) {
		switch ( sanitize_text_field( $registration_knowledge ) ) {
			case 'festivalWebsite':
				return 'Site do Festival';
			case 'email':
				return 'E-mail';
			case 'socialMedia':
				return 'Redes Sociais';
			case 'others':
				return 'Outros';
			default:
				return 'Não informado';
		}
	}

	/**
	 * @inheritDoc
	 */
	protected function form_action( $request ) {
		if (
			$this->insert_row( $request )
		) {
			if (
				wp_mail(
					$this->get_mail_to(),
					$this->get_subject( $request ),
					$this->build_mail_message( $request ),
					array( 'Content-Type: text/html; charset=UTF-8' )
				)
			) {
				return true;
			} else {
				return new WP_Error( 'mail-error', 'Error sending mail. Please try again.' );
			}
		} else {
			return new WP_Error( 'insert-error', 'Error adding information to the system. Please try again.' );
		}
	}
}
