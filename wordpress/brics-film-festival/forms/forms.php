<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-abstract-form.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-abstract-contact-form.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-pt-contact-form.php';

$brics_pt_contact_form = new Pt_Contact_Form();
$brics_pt_contact_form->boot();
