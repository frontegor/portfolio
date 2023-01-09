<?php

$connection = mysqli_connect('127.0.0.1', 'root', '', 'Design');

if( $connection == false) {
    echo 'Error';
    echo mysqli_connect_error();
    exit();   
} else {
    echo 'Всё норм' . '<br>'; 
};
 
?> 
    
 
<?php 
$name = $_GET['user_name'];
$email = $_GET['user_email'];
$phone = $_GET['user_phone'];
$message = $_GET['user_message'];

echo "Вас зовут " . $name . '<br>';
echo "Ваш Email " . $email . '<br>';
echo "Ваш номер телефона " . $phone . '<br>';
echo "Ваше сообщение " . $message . '<br>';

$result = mysqli_query($connection, "INSERT INTO `Design` (`name`, `email`, `phone`, `message`) VALUES ('$name', '$email', '$phone', '$message')");

if($result == true) {
    echo "Отправилось";
} else {
    echo "Не отправилось";
}
?>


<?php
mysqli_close($connection);
?>