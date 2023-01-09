<?php
include('index.php');
?>


<?php

$to = '12345@mail.ru'; // куда отправить письмо
$email = trim($_GET['user_email']); // с какого адреса пришло письмо


$message = htmlspecialchars($_GET['message']); // если есть сообщение
$message = urldecode($message); // предотвратить ввод url адресов
$message = trim($message); // удаление лишних прбелов

$headers = "From: $from" . "\r\n" .    // от кого это письмо
    "Reply-To: $from" . "\r\n" .   //  кому ответить
    "X-Mailer: PHP/" . phpversion();  // версия php


if (mail($to,   $message, $headers)) {
    echo  "Письмо отправлено";
} else {
    echo "Письмо не отправлено";
}

?>


<?php
mysqli_close($connection);
?>