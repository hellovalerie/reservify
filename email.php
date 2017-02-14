<?php
$email=$_POST['email'];
$name=$_POST['name'];

mail('info@zzeng.com', 'OMG someone is interested in ZZENG!!!',"$email $name","From: ZZENG<no-reply@zzeng.com>\r\n");
echo 'ok';
?>