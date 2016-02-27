<?php
class User {
	private $id = '';
	private $solved = '';
	private $solved_list = array();

	function __construct($id, $solved, $solved_list) {
		$this->id = $id;
		$this->solved = $solved;
		$this->solved_list = $solved_list;
	}

	public function get_id() {
		return $this->id;
	}

	public function get_solved() {
		return $this->solved;
	}

	public function get_solved_list() {
		return $this->solved_list;
	}
}

$u_id1 = htmlspecialchars($_POST['user1']);
//$u_id2 = htmlspecialchars($_POST['user2']);
echo $u_id1
?>
