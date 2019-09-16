<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

require_once BRICS_FILM_FESTIVAL_ABSPATH . 'settings/class-abstract-settings.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'settings/class-pt-general-settings.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'settings/class-en-general-settings.php';

$brics_pt_general_settings = new Pt_General_Settings();
$brics_pt_general_settings->boot( true );

$brics_en_general_settings = new En_General_Settings();
$brics_en_general_settings->boot( false, true );
