<?php
// Include PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/SMTP.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $name = trim($_POST['full_name']);
    $email = trim($_POST['form_email']);
    $phone = trim($_POST['form_phone']);
    $institution = trim($_POST['institution_name']);
    $place = trim($_POST['place']);
    $requirement = trim($_POST['requirement']);

    // Validate the form data
    if (empty($name) || empty($email) || empty($phone) || empty($institution) || empty($place)) {
        die("All fields except the 'Tell Us About' section are required.");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // Create the email content
    $mail_content = "
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Email Template</title>
        <style>
            body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
            }
            .email-container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 30px;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            .logo {
                display: block;
                margin: 0 auto 20px;
                max-height: 80px;
            }
            .header {
                text-align: center;
                margin-bottom: 20px;
                color: #150282;
                font-size: 24px;
                font-weight: bold;
            }
            .content-table {
                width: 100%;
                border-collapse: collapse;
            }
            .content-table th,
            .content-table td {
                padding: 12px;
                text-align: left;
                font-size: 16px;
            }
            .content-table th {
                background-color: #f2f2f2;
                font-weight: bold;
            }
            .content-table td {
                background-color: #fafafa;
            }
            .footer {
                text-align: center;
                font-size: 14px;
                color: #150282;
                margin-top: 20px;
            }
            .footer a {
                color: #150282;
                text-decoration: none;
            }
            .button {
                display: inline-block;
                background-color: #150282;
                color: #fff !important;
                padding: 12px 20px;
                text-decoration: none;
                border-radius: 4px;
                margin-top: 20px;
                text-align: center;
            }
            .button:hover {
                background-color: #0f1b63;
            }
        </style>
    </head>
    <body>
        <div class='email-container'>
            <img src='https://parvamconsultech.com/bahusar_fashion/v1/img/uniform-logo.png' alt='Logo' class='logo'>
            
            <div class='header'>
                New Enquiry from Website
            </div>

            <table class='content-table'>
                <tr>
                    <th>Name</th>
                    <td>" . $name . "</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>" . $email . "</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>" . $phone . "</td>
                </tr>
                <tr>
                    <th>Institution</th>
                    <td>" . $institution . "</td>
                </tr>
                <tr>
                    <th>Place</th>
                    <td>" . $place . "</td>
                </tr>
                <tr>
                    <th>Requirement</th>
                    <td>" . nl2br($requirement) . "</td>
                </tr>
            </table>

            <a href='mailto:" . $email . "' class='button'>Reply to this enquiry</a>

            <div class='footer'>
                <p>This email was sent via the website contact form.</p>
                <p>For more information, visit our <a href='https://www.indiamart.com/bhahusarfashions'>website</a>.</p>
            </div>
        </div>
    </body>
    </html>";

    // Send email
    $to = 'vinithvs2000@gmail.com'; // Recipient email
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'vinithvs2000@gmail.com'; // Your Gmail address
    $mail->Password = 'lymzujlnnsjioofy'; // App password
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->setFrom('vinithvs2000@gmail.com', 'Website Contact'); // Sender email and name
    $mail->addAddress($to); // Recipient
    $mail->Subject = 'New Enquiry from Website';
    $mail->isHTML(true); // Email format
    $mail->Body = $mail_content;

    // Attempt to send the email
    if ($mail->send()) {
        header("Location: homepage.php?form=done"); // Redirect on success
    } else {
        header("Location: contact.php?form=error"); // Redirect on failure
    }
    exit;
}
?>