<?php

defined( 'BRICS_FILM_FESTIVAL_ABSPATH' ) || die();
?>

<p><strong>Nome:</strong> <?php echo esc_attr( $data['name'] ); ?></p>
<p><strong>Idade:</strong> <?php echo esc_attr( $data['age'] ); ?></p>
<p><strong>E-mail:</strong> <?php echo esc_attr( $data['email'] ); ?></p>
<p><strong>Telefone:</strong> <?php echo esc_attr( $data['telephone'] ); ?></p>
<p><strong>Profissão:</strong> <?php echo esc_attr( $data['profession'] ); ?></p>
<p><strong>Formação:</strong> <?php echo esc_attr( $data['formation'] ); ?></p>
<p><strong>Qual seu interesse pela atividade?</strong>
	<br/>
	<?php echo esc_textarea( $data['activityInterest'] ); ?>
</p>
