<?php

defined( 'ABSPATH' ) || die();

require_once get_template_directory() . '/post_types/class-pt-festival-post-type.php';
require_once get_template_directory() . '/post_types/class-en-festival-post-type.php';
require_once get_template_directory() . '/post_types/class-pt-screenings-post-type.php';
require_once get_template_directory() . '/post_types/class-en-screenings-post-type.php';
require_once get_template_directory() . '/post_types/class-pt-activities-post-type.php';
require_once get_template_directory() . '/post_types/class-en-activities-post-type.php';
require_once get_template_directory() . '/post_types/class-pt-calls-post-type.php';
require_once get_template_directory() . '/post_types/class-en-calls-post-type.php';
require_once get_template_directory() . '/post_types/class-pt-news-post-type.php';
require_once get_template_directory() . '/post_types/class-en-news-post-type.php';

$pt_festival_post_type = new Pt_Festival_Post_Type();
$pt_festival_post_type->init( true );

$en_festival_post_type = new En_Festival_Post_Type();
$en_festival_post_type->init();

$pt_screenings_post_type = new Pt_Screenings_Post_Type();
$pt_screenings_post_type->init( true );

$en_screenings_post_type = new En_Screenings_Post_Type();
$en_screenings_post_type->init();

$pt_activities_post_type = new Pt_Activities_Post_Type();
$pt_activities_post_type->init( true );

$en_activities_post_type = new En_Activities_Post_Type();
$en_activities_post_type->init();

$pt_calls_post_type = new Pt_Calls_Post_Type();
$pt_calls_post_type->init( true );

$en_calls_post_type = new En_Calls_Post_Type();
$en_calls_post_type->init();

$pt_news_post_type = new Pt_News_Post_Type();
$pt_news_post_type->init( true );

$en_news_post_type = new En_News_Post_Type();
$en_news_post_type->init();
