<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-abstract-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-pt-festival-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-en-festival-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-pt-schedule-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-en-schedule-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-pt-films-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-en-films-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-pt-screenings-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-en-screenings-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-pt-activities-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-en-activities-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-pt-calls-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-en-calls-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-pt-news-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-en-news-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-pt-venues-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-en-venues-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-pt-press-office-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-brics-en-press-office-post-type.php';

$brics_pt_festival_post_type = new Brics_Pt_Festival_Post_Type();
$brics_pt_festival_post_type->boot( true );

$brics_en_festival_post_type = new Brics_En_Festival_Post_Type();
$brics_en_festival_post_type->boot();

$brics_pt_festival_post_type = new Brics_Pt_Schedule_Post_Type();
$brics_pt_festival_post_type->boot( true );

$brics_en_festival_post_type = new Brics_En_Schedule_Post_Type();
$brics_en_festival_post_type->boot();

$brics_pt_festival_post_type = new Brics_Pt_Films_Post_Type();
$brics_pt_festival_post_type->boot( true );

$brics_en_festival_post_type = new Brics_En_Films_Post_Type();
$brics_en_festival_post_type->boot();

$brics_pt_screenings_post_type = new Brics_Pt_Screenings_Post_Type();
$brics_pt_screenings_post_type->boot( true );

$brics_en_screenings_post_type = new Brics_En_Screenings_Post_Type();
$brics_en_screenings_post_type->boot();

$brics_pt_activities_post_type = new Brics_Pt_Activities_Post_Type();
$brics_pt_activities_post_type->boot( true );

$brics_en_activities_post_type = new Brics_En_Activities_Post_Type();
$brics_en_activities_post_type->boot();

$brics_pt_calls_post_type = new Brics_Pt_Calls_Post_Type();
$brics_pt_calls_post_type->boot( true );

$brics_en_calls_post_type = new Brics_En_Calls_Post_Type();
$brics_en_calls_post_type->boot();

$brics_pt_news_post_type = new Brics_Pt_News_Post_Type();
$brics_pt_news_post_type->boot( true );

$brics_en_news_post_type = new Brics_En_News_Post_Type();
$brics_en_news_post_type->boot();

$brics_pt_venues_post_type = new Brics_Pt_Venues_Post_Type();
$brics_pt_venues_post_type->boot( true );

$brics_en_venues_post_type = new Brics_En_Venues_Post_Type();
$brics_en_venues_post_type->boot();

$brics_pt_press_office_post_type = new Brics_Pt_Press_Office_Post_Type();
$brics_pt_press_office_post_type->boot( true );

$brics_en_press_office_post_type = new Brics_En_Press_Office_Post_Type();
$brics_en_press_office_post_type->boot();
