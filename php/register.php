<?php
	$username = $_POST["username"];
	$password = $_POST["password"];
	$phone = $_POST["phone"];
	/* 连接数据库 */
	$conn = mysql_connect("localhost:3306","root","");
	if (!$conn) {
		die ("error : " . mysql_error());
	}

	/* 指定连接的具体数据库名称 */
	mysql_select_db("gentleruan", $conn);

	/* 设置向数据库读写数据时的编码 */
	mysql_query("set character set 'utf8'");
	mysql_query("set names 'utf8'");

	/* 数据插入 */
	// 构建SQL语句
	$sql = "INSERT INTO user VALUES (
			'{$username}',  '{$password}',  '{$phone}',  '123456789@qq.com',  '成都',  'VIP0',  '0')";
	// 执行SQL语句
 
	$result = mysql_query($sql, $conn);
	if ($result)
			echo '{"status":1}';
		else 
			echo '{"status":0}';
	/* 关闭连接 */
	mysql_close($conn);
?>
