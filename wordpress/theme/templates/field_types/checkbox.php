<input
	id='<?php $args['field_name']; ?>'
	name='<?php echo $args['option_name'] . '[' . $args['field_name'] . ']'; ?>'
	type='checkbox'
	value='1'
	<?php
	if ( is_array( $options ) && array_key_exists( $args['field_name'], $options ) ) {
		checked( $options[ $args['field_name'] ], 1 );
	}
	?>
/>
