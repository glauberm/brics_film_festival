<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

require_once BRICS_FILM_FESTIVAL_ABSPATH . 'menu/class-abstract-menuable.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'menu/class-menu-manager.php';

$brics_menu_manager = new Menu_Manager();
$brics_menu_manager->boot();
