<?php

defined( 'ABSPATH' ) || die();

return '
	<div>
		<strong>Name:</strong>
		<p>' . $name . '</p>
	</div>
	<br/>
	<div>
		<strong>Email:</strong>
		<p>' . $email . '</p>
	</div>
	<br/>
	<div>
		<strong>Subject:</strong>
		<p>' . $subject . '</p>
	</div>
	<br/>
	<div>
		<strong>Message:</strong>
		<p>' . nl2br( $message ) . '</p>
	</div>
';
