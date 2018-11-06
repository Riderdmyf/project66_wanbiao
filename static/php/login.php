<?php
header('Access-Control-Allow-Origin: *');


$phone = $_POST["phone"];
$pwd = $_POST["pwd"];



$conn = new mysqli("127.0.0.1", "root", "", "sun") or die("连接失败");
$sql = "select * from users where phone='$phone' and password='$pwd'";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    $arr = array("status"=>1, "msg"=>"登录成功！");
    echo json_encode($arr);
}
else  {
    $arr = array("status"=>0, "msg"=>"用户名或密码错误，请检查!");
    echo json_encode($arr);
}

$conn->close();