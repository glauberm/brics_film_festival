<?php
/**
 * Plugin Name:       4th BRICS Film Festival
 * Plugin URI:        https://github.com/glauberm/brics_film_festival/tree/master/wordpress
 * Description:       This is the WordPress plugin of the 4th BRICS Film Festival.
 * Version:           1.0.0
 * Author:            Glauber Mota
 * Author URI:        https://github.com/glauberm
 * License:           GPLv3
 * License URI:       https://github.com/glauberm/brics_film_festival/blob/master/LICENSE
 * Text Domain:       brics-film-festival
 */

defined( 'ABSPATH' ) || die();

define( 'BRICS_FILM_FESTIVAL_VERSION', '1.0.0' );
define( 'BRICS_FILM_FESTIVAL_ABSPATH', plugin_dir_path( __FILE__ ) );

require_once BRICS_FILM_FESTIVAL_ABSPATH . 'env.php';

require_once BRICS_FILM_FESTIVAL_ABSPATH . 'menu/menu.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'settings/settings.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/post-types.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/forms.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'helpers/helpers.php';
