<?php

return '
	<div>
		<strong>Nome:</strong>
		<p>' . $name . '</p>
	</div>
	<br/>
	<div>
		<strong>Matrícula:</strong>
		<p>' . ( $registration ? $registration : 'Não informada' ) . '</p>
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
		<strong>Grau Acadêmico:</strong>
		<p>' . $academic_degree . '</p>
	</div>
	<br/>
	<div>
		<strong>Ano de Ingresso:</strong>
		<p>' . $entry_year . '</p>
	</div>
	<br/>
	<div>
		<strong>Endereço:</strong>
		<p>' . $address . '</p>
	</div>
	<br/>
	<div>
		<strong>Curso:</strong>
		<p>' . $course . '</p>
	</div>
';
