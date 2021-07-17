<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $phoneNumber = $_POST['phone'];
  $message = $_POST['message'];

  $mailTo = "info@monte.co.ke";
  $headers = "From: " . $mailFrom;
  $txt = "You have received an email from " . $name . ".\n\n" . $phoneNumber  . ".\n" . $message;

  mail($mailTo, $name, $txt, $headers);
  header("Location: index.html?mailsend");
}
