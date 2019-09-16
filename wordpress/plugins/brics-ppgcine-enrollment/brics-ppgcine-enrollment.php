<?php
/*
Plugin Name: Inscrições de alunos do PPGCine
Description: Apresenta a tabela com as inscrições de alunos do PPGCine.
Author: Glauber Mota
Version: 1.0
Author URI: https://github.com/glauberm
*/

defined( 'ABSPATH' ) || die();

define( 'PPGCINE_ENROLLMENT_PLUGIN_ABSPATH', plugin_dir_path( __FILE__ ) );

require_once PPGCINE_ENROLLMENT_PLUGIN_ABSPATH . 'classes/class-ppgcine-enrollment.php';

$ppgcine_enrollment = new Ppgcine_Enrollment();

add_action( 'init', array( $ppgcine_enrollment, 'init' ) );

