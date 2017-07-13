$(function(){
	/* 检测用户名是否存在 */
	$("#username").blur(function(){
		var _username = $(this).val();
		
		$.ajax({
			url : "../php/username.php",
			dataType : "json",
			data : {username : _username},
			success : function(data){
				if (data.status == 1) {
					$("#warn1").text("您的用户名已存在！");
				}else{
					$("#warn1").text("");
				};
			}
		});
	});
	/*正则验证密码*/
	$("#password").blur(function(){
		var reg = /\w{6,16}/;
		var str = $(this).val();
		var bool = reg.test(str);

		if (bool === false) {
				$("#warn2").text("您的密码格式错误！");
			}else{
				$("#warn2").text("");
			}
	});
	/*检验再次输入密码是否与设置密码一致*/
	$("#affirm").blur(function(){
		var _affirm = $(this).val();
		var _password = $("#password").val();

		if (_affirm !== _password) {
				$("#warn3").text("请核对后重新输入！");
			}else{				
				$("#warn3").text("");
			}
	});
	/*正则验证电话号码*/
	$("#phone").blur(function(){
		var reg = /^1\d{10}$/;
		var str = $(this).val();
		var bool = reg.test(str);

		if (bool === false) {
			$("#warn4").text("请输入正确的号码！");
		}else{
			$("#warn4").text("");
		}
	});
	/*注册*/
	$("#send").click(function(e){
		e.preventDefault();
		$.ajax({
			url : "../php/register.php",
			dataType : "json",
			type : "post",
			data :{
				username : $("#username").val(),
				password : $("#password").val(),
				phone : $("#phone").val()
			},

			success : function(data){
				if (data.status == 1) {//注册成功
					alert("恭喜！注册成功！")
					/*点击加入登录时将用户名存入 cookies 中*/
					var name = $("#username").val();
					// 配置自动转换JSON数据
					$.cookie.json = true;
					var _username = $.cookie("username") || [];
						// 将当前用户名添加到数组结构中保存
						_username.push(name);
					// 将数组存回到 cookie 中
					$.cookie("username",_username,{expires:7,path:"/"});

					window.location = "index.html";
					$("#username").val("");
					$("#password").val("");
					$("#phone").val("");
				}else{
					alert("服务器异常，用户注册失败！")
				}
			}
		});
	});

	/*背景动画*/
	var speedX = 10;
	var speedY = 4;

	function move(){
		
		var offset = $("#animate").offset();
		var left = offset.left + speedX;
		var top = (offset.top - 55) + speedY;

		$("#animate").css({"left" : left,"top" : top});

		if (left >= 1113 || left <= 0) {
			speedX *= -1;
		}
		if (top >= 710 || top <= -55) {
			speedY *= -1;
		}

		setTimeout(move,2000/100);
	}
	
	move();
});