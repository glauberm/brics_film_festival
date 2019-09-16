<?php

defined( 'ABSPATH' ) || die();

require_once PPGCINE_ENROLLMENT_PLUGIN_ABSPATH . '/classes/class-ppgcine-enrollment-list-table.php';

class Ppgcine_Enrollment {
	public function init() {
		add_action( 'admin_menu', array( $this, 'add_menu' ) );
	}

	public function add_menu() {
		add_menu_page(
			'Inscrições de alunos do PPGCine', // page_title
			'Inscrições PPGCine',  // menu_title
			'edit_posts', // capability
			'ppgcine_enrollment', // menu_slug
			array( $this, 'render' ), // function
			'dashicons-feedback', // icon_url
			40 // position
		);
	}

	public function render() {
		$list_table = new Ppgcine_Enrollment_List_Table();
		$list_table->prepare_items();

		?>
		<div class="wrap">
			<h2>Inscrições de alunos do PPGCine</h2>

			<form id="inscricoes-filter" method="get">
				<input type="hidden" name="page" value="<?php echo $_REQUEST['page'] ?>" />
				<!-- Now we can render the completed list table -->
				<?php $list_table->display(); ?>
			</form>
		</div>
		<?php
	}
}
