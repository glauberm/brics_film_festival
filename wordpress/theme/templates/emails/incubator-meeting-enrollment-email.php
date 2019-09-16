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
		<strong>Profissão:</strong>
		<p>' . $profession . '</p>
	</div>
	<br/>
	<div>
		<strong>Trabalha em:</strong>
		<p>' . ( $work_field ? $work_field : 'Não informado' ) . '</p>
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
		<strong>Formação Acadêmica:</strong>
		<p>' . $formation . '</p>
	</div>
	<br/>
	<div>
		<strong>Como soube do Encontro:</strong>
		<p>' . $knowledge . '</p>
	</div>
	<br/>
	<div>
		<strong>Endereço:</strong>
		<p>' . $address . '</p>
	</div>
	<br/>
	<div>
		<strong>Breve descrição da atuação ou interesse no Encontro:</strong>
		<p>' . nl2br( $description ) . '</p>
	</div>
	<br/>
	<div>
		<strong>Qual é o motivo do interesse pelo Encontro:</strong>
		<p>' . nl2br( $interests ) . '</p>
	</div>
';
