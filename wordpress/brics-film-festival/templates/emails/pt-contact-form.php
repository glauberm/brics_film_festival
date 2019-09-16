<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();
?>

<p><strong>Nome:</strong> <?php echo esc_attr( $data['name'] ); ?></p>
<p><strong>E-mail:</strong> <?php echo esc_attr( $data['email'] ); ?></p>
<p><strong>Assunto:</strong> <?php echo esc_attr( $data['subject'] ); ?></p>
<p><strong>Mensagem:</strong>
	<br/>
	<?php echo esc_textarea( $data['message'] ); ?>
</p>
