<?php

header("Access-Control-Allow-Origin: *"); // Allow all origins
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Database connection settings
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "aipathshala";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}




function getNoteById($id) {
    global $conn;

    // Prepare the SQL query
    $sql = "SELECT * FROM notes WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);  // "i" means the parameter is an integer

    // Execute the query
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Check if we got a result
    if ($result->num_rows > 0) {
        $note = $result->fetch_assoc();
        return $note;
    } else {
        return null;
    }


}


function getAllNotes() {
    global $conn;

    // Prepare the SQL query
    $sql = "SELECT * FROM notes";
    $stmt = $conn->prepare($sql);  // No need for bind_param, no parameters

    // Execute the query
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Check if we got a result
    if ($result->num_rows > 0) {
        // Initialize an array to hold all notes
        $notes = [];

        // Fetch all rows and add them to the notes array
        while ($note = $result->fetch_assoc()) {
            $notes[] = $note;
        }

        // Return the array of notes
        return $notes;
    } else {
        return null;
    }
}






