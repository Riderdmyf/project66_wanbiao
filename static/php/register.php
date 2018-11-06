<?php


header('Access-Control-Allow-Origin: *');

$phone = $_POST["phone"];
$pwd = $_POST["pwd"];

$conn = new mysqli("127.0.0.1", "root", "", "sun") or die("连接失败");

$sql = "select * from users where phone='$phone'";
$result = $conn->query($sql);
if ($result && $result->num_rows>0) {
    $arr = array("status"=>0, "msg"=>"用户名已经存在");
    echo  json_encode($arr);
}
else {
    $sql = "insert into users(phone, password) values('$phone', '$pwd')";
    $result = $conn->query($sql);
    if ($result) {
        $arr = array("status"=>1, "msg"=>"注册成功");
        echo  json_encode($arr);
    }
    else {
        $arr = array("status"=>0, "msg"=>"注册失败");
        echo  json_encode($arr);
    }
}
$conn->close();