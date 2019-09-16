<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();
?>

<textarea
	id='<?php echo esc_attr( $args['id'] ); ?>'
	name='<?php echo esc_attr( $args['name'] ); ?>'
	class='large-text'
>
<?php echo esc_attr( $args['value'] ); ?>
</textarea>
