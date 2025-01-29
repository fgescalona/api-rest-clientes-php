<?php
require_once('../includes/Client.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['id'])) {
    $client_id = $_GET['id'];
    Client::get_client_by_id($client_id);
} else {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(array("message" => "ID no proporcionado"));
}
