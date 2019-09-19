<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();
?>

<div class="wrap">
	<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
	<?php settings_errors( $id ); ?>
	<form action="options.php" method="post">
		<table class="form-table">
			<?php
				settings_fields(
					$id // option_group
				);

				do_settings_fields(
					$id, // page,
					'' // section
				);
				?>
		</table>
		<?php submit_button(); ?>
	</form>
</div>
