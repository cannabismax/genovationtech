<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Validate input
    if (empty($name) || empty($email) || empty($message)) {
        die("Please fill out all fields.");
    }

    // Email configuration
    $to = "info@genovationtech.com";
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Construct email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Message:\n$message";

    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "<p>Thank you for your message. We'll get back to you soon!</p>";
    } else {
        echo "<p>Sorry, there was an error sending your message. Please try again later.</p>";
    }
} else {
    // If it's not a POST request, redirect to the contact form
    header("Location: contact.html");
    exit();
}
?>