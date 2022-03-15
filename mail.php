<?php
    $message_sent = false;
    $request_method = strtoupper($_SERVER['REQUEST_METHOD']);
    const FIELD_REQUIRED = "Champs obligatoire";
    const FIELD_INVALID = "Format de mail non valide";

    if ($request_method === 'POST') {
        $fields = ['name', 'email', 'message'];
        $errors = [];
        $values = [];
        $clean_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $clean_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
        $clean_message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

        if (!filter_var($clean_email, FILTER_VALIDATE_EMAIL)) {
            $errors['email'] = FIELD_INVALID;
        }

        foreach ($fields as $field) {
            if (empty($_POST[$field])) {
                $errors[$field] = FIELD_REQUIRED;
            } else {
                $values[$field] = $_POST[$field];
            }
        }

        if (filter_var($clean_email, FILTER_VALIDATE_EMAIL) && count($errors) === 0) {
            $values['email'] = trim($clean_email);
            $values['name'] = trim($clean_name);
            $values['message'] = trim($clean_message);

            $to = "hello@gaellemorin.fr";
            $body = "";
            $body .= "From: " . $values['name'] . "\r\n";
            $body .= "Email: " . $values['email'] . "\r\n";
            $body .= "Message: " . $values['message'] . "\r\n";

            if (mail($to, "Bonjour !", $body)) {
                $message_sent = true;
            } else {
                echo "Mailer Error: " . error_get_last();
            }
        }
    }
?>