<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $upload_dir = "test/";

    // Try to create the directory if it doesn't exist
    if (!file_exists($upload_dir)) {
        echo "<h3>Debugging Information (Directory Creation):</h3>";

        // Try to create the directory
        $dir_creation = mkdir($upload_dir, 0777, true);
        
        // Check if directory creation was successful
        if (!$dir_creation) {
            // Print detailed error message
            echo "<p><strong>Error:</strong> Failed to create upload directory. Please check permissions.</p>";
            echo "<p><strong>System Error Message:</strong> " . error_get_last()['message'] . "</p>";

            // Check if the folder is already there but cannot be written
            if (!is_writable($upload_dir)) {
                echo "<p><strong>Note:</strong> The directory exists but is not writable. Please ensure the directory has proper write permissions.</p>";
            }
            die();  // Exit if directory creation fails
        }
    }

    $file_name = basename($_FILES["file"]["name"]);
    $file_path = $upload_dir . time() . "_" . $file_name; // Unique name to prevent overwrite

    // Debugging: Print details about the uploaded file
    echo "<h3>Debugging Information (File Details):</h3>";
    echo "<pre>";
    print_r($_FILES);
    echo "</pre>";

    if ($_FILES["file"]["error"] !== UPLOAD_ERR_OK) {
        echo "<h3>Error uploading file.</h3>";
        echo "<p><strong>Error Code:</strong> " . $_FILES["file"]["error"] . "</p>";
    } elseif (move_uploaded_file($_FILES["file"]["tmp_name"], $file_path)) {
        echo "<h3>File uploaded successfully!</h3>";
        echo "<p><strong>File Name:</strong> " . htmlspecialchars($file_name) . "</p>";
        echo "<p><strong>File Type:</strong> " . $_FILES["file"]["type"] . "</p>";
        echo "<p><strong>File Size:</strong> " . ($_FILES["file"]["size"] / 1024) . " KB</p>";
        echo "<p><strong>File Path:</strong> <a href='$file_path' target='_blank'>$file_path</a></p>";
    } else {
        echo "<h3>Error uploading file.</h3>";
        echo "<p>Possible reasons:</p>";
        echo "<ul>";
        echo "<li>File size exceeds server limits.</li>";
        echo "<li>Incorrect file permissions on the upload directory.</li>";
        echo "<li>Temporary folder is missing or inaccessible.</li>";
        echo "<li>File upload was interrupted.</li>";
        echo "</ul>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Upload</title>
</head>
<body>
    <h2>Upload a File</h2>
    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="file" required>
        <button type="submit">Upload</button>
    </form>
</body>
</html>
