<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/menus/class-menu-manager.php';

$menu_manager = new Menu_Manager();
$menu_manager->init();
