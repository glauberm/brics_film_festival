<?php

return '
	<div>
		<strong>Nome:</strong>
		<p>' . $name . '</p>
	</div>
	<br/>
	<div>
		<strong>Idade:</strong>
		<p>' . $age . '</p>
	</div>
	<br/>
	<div>
		<strong>E-mail:</strong>
		<p>' . $email . '</p>
	</div>
	<br/>
	<div>
		<strong>Telefone:</strong>
		<p>' . $telephone . '</p>
	</div>
	<br/>
	<div>
		<strong>Profissão:</strong>
		<p>' . $profession . '</p>
	</div>
	<br/>
	<div>
		<strong>Escolaridade:</strong>
		<p>' . $formation . '</p>
	</div>
	<br/>
	<div>
		<strong>Qual é o motivo do interesse pela oficina:</strong>
		<p>' . nl2br( $interests ) . '</p>
	</div>
';
