<?php

header('content-type:text/html;charset=utf8');

$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "shop";

//创建连接
$conn = mysqli_connect($servername,$username,$password,$dbname);
if(mysqli_connect_error()){
	die('连接失败');
}

?>