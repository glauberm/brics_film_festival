<?php

defined( 'ABSPATH' ) || die();

return "
<div style='background-color: #1d1d1b; text-align: center; line-height: 1.35; font-size: 14px; padding: 3em 1em 4em; '>
	<h3 style='margin: 0 auto; width: 375px; display: block; font-size: 1.25em; font-family:-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;'>
		<a style='color: #f9b234; text-decoration: none;' href='" . BASE_SITE_URL . "' target='_blank'><img style='max-width: 100%; max-height: 100%; width: 80px; height: 95px;' src='" . get_template_directory_uri() . "/images/email-logo.png' alt='" . $sitename . "' /></a>
	</h3>

	<br/>

	<div style='width: 95%; margin: 0 auto; height: 4px; background-color: #e7332a; background: -webkit-gradient(linear, left top, right top, from(#009641), color-stop(20%, #009641), color-stop(20%, #284693), color-stop(40%, #284693), color-stop(40%, #f9b234),color-stop(60%, #f9b234), color-stop(60%, #e7332a), color-stop(80%, #e7332a), color-stop(80%, #ffde00), to(#ffde00));background: -webkit-linear-gradient(left, #009641 0%, #009641 20%, #284693 20%, #284693 40%, #f9b234 40%,#f9b234 60%, #e7332a 60%, #e7332a 80%, #ffde00 80%, #ffde00 100%);background: -o-linear-gradient(left, #009641 0%, #009641 20%, #284693 20%, #284693 40%, #f9b234 40%,#f9b234 60%, #e7332a 60%, #e7332a 80%, #ffde00 80%, #ffde00 100%);background: linear-gradient(to right, #009641 0%, #009641 20%, #284693 20%, #284693 40%, #f9b234 40%,#f9b234 60%, #e7332a 60%, #e7332a 80%, #ffde00 80%, #ffde00 100%); border-radius: 1em 1em 0 0;'></div>

	<div style='width: 95%; margin: 0 auto;'>
		<div style='background-color: #FFF; padding: 1em 3em 2em; color: #1d1d1b; border-radius: 0 0 1em 1em;'>
			<h1 style='color: #009641; font-family:-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;'>" . $subject . "</h1>
			<div style='text-align: left; font-size: 1em; color: #333; font-family:-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;'>" . $body . '</div>
		</div>
	</div>

	<br/>
</div>
';
