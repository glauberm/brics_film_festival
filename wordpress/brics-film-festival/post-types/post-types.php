<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-abstract-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-pt-festival-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-en-festival-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-pt-screenings-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-en-screenings-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-pt-activities-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-en-activities-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-pt-calls-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-en-calls-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-pt-news-post-type.php';
require_once BRICS_FILM_FESTIVAL_ABSPATH . 'post-types/class-en-news-post-type.php';

$brics_pt_festival_post_type = new Pt_Festival_Post_Type();
$brics_pt_festival_post_type->boot( true );

$brics_en_festival_post_type = new En_Festival_Post_Type();
$brics_en_festival_post_type->boot();

$brics_pt_screenings_post_type = new Pt_Screenings_Post_Type();
$brics_pt_screenings_post_type->boot( true );

$brics_en_screenings_post_type = new En_Screenings_Post_Type();
$brics_en_screenings_post_type->boot();

$brics_pt_activities_post_type = new Pt_Activities_Post_Type();
$brics_pt_activities_post_type->boot( true );

$brics_en_activities_post_type = new En_Activities_Post_Type();
$brics_en_activities_post_type->boot();

$brics_pt_calls_post_type = new Pt_Calls_Post_Type();
$brics_pt_calls_post_type->boot( true );

$brics_en_calls_post_type = new En_Calls_Post_Type();
$brics_en_calls_post_type->boot();

$brics_pt_news_post_type = new Pt_News_Post_Type();
$brics_pt_news_post_type->boot( true );

$brics_en_news_post_type = new En_News_Post_Type();
$brics_en_news_post_type->boot();
