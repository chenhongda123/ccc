<?php
/* 
    如果要用login.php处理登陆
    传入用户名必须使用username这个键
    传入密码必须使用password这个键
*/


//  第四步

include './base.php';

$uname = $_POST['username'];//获取前端传递的用户名
$upass = $_POST['password'];//获取前端传递的密码

$conn = mysqli_connect('localhost','root','root','user');
$sql = "SELECT * FROM `info` WHERE `username`='$uname' AND `password`='$upass'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
mysqli_close($conn); 

if($row){
    $arr=array('code'=>1,'un'=>$uname);
}else{
    $arr=array('code'=>0,'msg'=>'用户名或密码错误');
}
echo json_encode($arr);
?>