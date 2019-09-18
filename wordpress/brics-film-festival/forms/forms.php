<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-brics-abstract-form.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-brics-contact-form.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-brics-abstract-enrollment-form.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-brics-course-enrollment-form.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-brics-preservation-meeting-enrollment-form.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-brics-incubator-meeting-enrollment-form.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'forms/class-brics-workshop-enrollment-form.php';

$brics_contact_form = new Brics_Contact_Form();
$brics_contact_form->boot();

$brics_course_enrollment = new Brics_Course_Enrollment_Form();
$brics_course_enrollment->boot();

$brics_preservation_meeting_enrollment = new Brics_Preservation_Meeting_Enrollment_Form();
$brics_preservation_meeting_enrollment->boot();

$brics_incubator_meeting_enrollment = new Brics_Incubator_Meeting_Enrollment_Form();
$brics_incubator_meeting_enrollment->boot();

$brics_workshop_enrollment = new Brics_Workshop_Enrollment_Form();
$brics_workshop_enrollment->boot();
