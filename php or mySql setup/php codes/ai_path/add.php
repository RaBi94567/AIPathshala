<?php
include 'db.php';

global $conn;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST['title'] ?? '';
    $description = $_POST['description'] ?? '';
    $address = $_POST['address'] ?? '';
    $syllabus = $_POST['syllabus'] ?? '';
    $type = $_POST['type'] ?? '';

    // Ensure the type is one of the allowed values
    $allowed_types = ['note', 'research_paper', 'video', 'course'];
    if (!in_array($type, $allowed_types)) {
        die("Invalid type provided.");
    }

    // Handle file upload
    $upload_dir = "uploads/";
    $thumb_dir = "uploads/thumb/";
    $file_path = "";
    $thumb_path = "";

    if (!file_exists($upload_dir)) {
        mkdir($upload_dir, 0777, true);
    }
    if (!file_exists($thumb_dir)) {
        mkdir($thumb_dir, 0777, true);
    }

    if (!empty($_FILES["file"]["name"])) {
        $file_name = basename($_FILES["file"]["name"]);
        $file_path = $upload_dir . time() . "_" . $file_name; // Unique file name
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $file_path)) {
            $file_path = $file_path; // Store path in DB
        } else {
            die("Error uploading file.");
        }
    }

    if (!empty($_FILES["thumbnail"]["name"])) {
        $thumb_name = basename($_FILES["thumbnail"]["name"]);
        $thumb_path = $thumb_dir . time() . "_" . $thumb_name;
        if (move_uploaded_file($_FILES["thumbnail"]["tmp_name"], $thumb_path)) {
            $thumb_path = $thumb_path; // Store thumbnail path in DB
        } else {
            die("Error uploading thumbnail.");
        }
    }

    // Insert data into the database
    $stmt = $conn->prepare("INSERT INTO notes (title, description, address, path, thumb_path, syllabus, type, date_created) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())");
    $stmt->bind_param("sssssss", $title, $description, $address, $file_path, $thumb_path, $syllabus, $type);

    if ($stmt->execute()) {
        echo "Note added successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
