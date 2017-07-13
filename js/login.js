$(function(){
	$("#login").click(function(e){
		e.preventDefault();
		var _username = $("#username").val(),
			_password = $("#password").val();
			console.log(_username,_password)
		$.ajax({
			url : "../php/login.php",
			dataType : "json",
			data : {username : _username,
					password : _password
					},
			success : function(data){
				if (data.status == 1) {
					alert("恭喜！登录成功！")
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
				}else{
					$("#username").val("");
					$("#password").val("");
					alert("亲，您还没注册哦，快去注册吧！");
				};
			}
		});
	});

	/*背景动画*/
	var speedX = 12;
	var speedY = 4;

	function move(){
		
		var offset = $("#animate").offset();
		var left = offset.left + speedX;
		var top = (offset.top - 110) + speedY;

		$("#animate").css({"left": left,"top" : top});

		if (left >= 1113 || left <= 0) {
			speedX *= -1;
		}
		if (top >= 600 || top <= -110) {
			speedY *= -1;
		}

		setTimeout(move,2000/100);
	}
	
	move();
	
});