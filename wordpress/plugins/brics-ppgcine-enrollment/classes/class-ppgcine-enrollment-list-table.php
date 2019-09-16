<?php

defined( 'ABSPATH' ) || die();

if ( ! class_exists( 'WP_List_Table' ) ) {
	require_once ABSPATH . 'wp-admin/includes/class-wp-list-table.php';
}

class Ppgcine_Enrollment_List_Table extends WP_List_Table {
	public function __construct() {
		global $status, $page;

		parent::__construct(
			array(
				'singular' => 'inscrição', // singular name of the listed records
				'plural'   => 'inscrições', // plural name of the listed records
				'ajax'     => false, // does this table support ajax?
			)
		);
	}

	public function column_default( $item, $column_name ) {
		switch ( $column_name ) {
			case 'name':
			case 'registration':
			case 'email':
			case 'telephone':
			case 'academic_degree':
			case 'entry_year':
			case 'address':
			case 'course':
				return $item[ $column_name ];
		}
	}

	public function get_columns() {
		return array(
			'name'            => 'Nome',
			'registration'    => 'Matrícula',
			'email'           => 'E-mail',
			'telephone'       => 'Telefone',
			'academic_degree' => 'Grau acadêmico',
			'entry_year'      => 'Ano de Ingresso',
			'address'         => 'Endereço',
			'course'          => 'Curso',
		);
	}

	public function prepare_items() {
		$per_page = 10;
		$columns  = $this->get_columns();
		$hidden   = array();
		$sortable = array();

		$this->_column_headers = array( $columns, $hidden, $sortable );

		$data = $this->get_data();

		$current_page = $this->get_pagenum();
		$total_items  = count( $data );
		$data         = array_slice(
			$data,
			( ( $current_page - 1 ) * $per_page ),
			$per_page
		);

		$this->items = $data;

		$this->set_pagination_args(
			array(
				'total_items' => $total_items,
				'per_page'    => $per_page,
				'total_pages' => ceil( $total_items / $per_page ),
			)
		);
	}

	private function get_data() {
		global $wpdb;

		return $wpdb->get_results(
			"SELECT `name`, `registration`, `email`, `telephone`, `academic_degree`, `entry_year`, `address`, `course`
			FROM {$wpdb->prefix}ppgcine_enrollment",
			ARRAY_A
		);
	}
}
