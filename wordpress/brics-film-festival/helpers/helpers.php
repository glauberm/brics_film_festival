<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();

/**
 * Remove wptexturize from post titles.
 */
remove_filter( 'the_title', 'wptexturize' );

/**
 * Return `null` if an empty value is returned from ACF.
 *
 * @param mixed $value
 * @param mixed $post_id
 * @param array $field
 *
 * @return mixed
 */
function brics_acf_nullify_empty( $value, $post_id, $field ) {
	if ( empty( $value ) ) {
		return null;
	}
	return $value;
}
add_filter( 'acf/format_value', 'brics_acf_nullify_empty', 100, 3 );

/**
 * Add Access-Control-Allow-Origin HTTP header.
 *
 * @return void
 */
function brics_add_cors_http_header() {
	header( 'Access-Control-Allow-Origin: *' );
}
add_action( 'init', 'brics_add_cors_http_header' );
