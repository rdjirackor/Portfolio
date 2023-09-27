<?php
$file = 'C:\Users\user\Downloads\Portfolio\assets\Richard_Resume.pdf'; // Replace with the actual path to your file
$filename = 'resume.pdf'; // Replace with the desired name for the downloaded file

// Check if the file exists
if (file_exists($file)) {
    // Set appropriate headers
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));

    // Read the file and output it to the browser
    readfile($file);
    exit;
} else {
    // File not found
    echo 'File not found.';
}
?>
