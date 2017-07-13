<?php
	$username = $_GET["username"];
	$password = $_GET["password"];
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

	/* 数据查询 */
	$sql = "SELECT * 
			FROM user 
			WHERE username = '{$username}' AND password = '{$password}'
			LIMIT 0 , 30";
	$result = mysql_query($sql, $conn);
	$arr = mysql_fetch_array($result, MYSQL_ASSOC);

	if ($arr) {
		 $arr = json_encode($arr);
		
		echo '{"status":1}';
	}else{
		echo '{"status":0}';
	};

	/* 关闭连接 */
	mysql_close($conn);
?>
