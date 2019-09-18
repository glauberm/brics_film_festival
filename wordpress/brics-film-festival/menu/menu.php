<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

require_once BRICS_FILM_FESTIVAL_ABSPATH . 'menu/class-brics-abstract-menuable.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'menu/class-brics-menu-manager.php';

$brics_menu_manager = new Brics_Menu_Manager();
$brics_menu_manager->boot();
