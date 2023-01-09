<?php
$connection = mysqli_connect('127.0.0.1', 'root', '', 'Form');

if ($connection == false) {
    echo 'Error';
    echo mysqli_connect_error();
    exit();
} else {
    echo 'connected.' . '<br>';
    echo '<br>';
};
