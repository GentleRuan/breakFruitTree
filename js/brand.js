$(function(){

/*鼠标经过收藏本站时的效果*/
	$("#top li:last").hover(function(){
		$(this).children().eq(0).hide().end()
			   .eq(1).show();
	},function(){
		$(this).children().eq(1).hide().end()
		       .eq(0).show();
	});
/*鼠标点击收藏本站时效果*/
	$("#top li:last").click(function(){
		$(this).children().eq(0).hide().end()
				   .eq(1).show();
	});
/*鼠标移入导航栏滑动效果*/
	$(".right_box li").hover(function(){
		$(this).children(".menu").stop().slideDown(1000);
		$(".menu span").on("mouseenter",function(){
			$(this).css({ "color": "#fff", "background": "plum" });
		}).on("mouseleave",function(){
			$(this).css({ "color": "#444", "background": "#e8e7e7" });
		});
	},function(){
		$(this).children(".menu").stop().slideUp(1000);
	});

	/* 页面加载，显示cookie中保存的用户名信息 */
	$.cookie.json = true;
	// 读取cookie中用户名数组结构
	var _username = $.cookie("username") || [];
	
	var html = "";
	// 简单判断
	if (_username.length == 0) {
		html += "<a href='login.html'>您好！请登录</a>";
	}
	_username.forEach(function(p){
		html += "<a href='javascript:void(0)'>欢迎您！"+ p +"</a>";
	});
	
	$("#user").html(html);
});