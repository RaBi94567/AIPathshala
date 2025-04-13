<?php
include 'db.php';

$id = (isset($_GET['id']) ? $_GET['id'] : 0);

header('Content-Type: application/json');

$notes = getNoteById($id);
echo json_encode($notes);

