<?php

defined( 'ABSPATH' ) || die();

return '
	<div>
		<strong>Nome:</strong>
		<p>' . $name . '</p>
	</div>
	<br/>
	<div>
		<strong>E-mail:</strong>
		<p>' . $email . '</p>
	</div>
	<br/>
	<div>
		<strong>Assunto:</strong>
		<p>' . $subject . '</p>
	</div>
	<br/>
	<div>
		<strong>Mensagem:</strong>
		<p>' . nl2br( $message ) . '</p>
	</div>
';
