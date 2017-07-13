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
	//点击下拉菜单跳转的效果
	$(".menu").eq(2).click(function(){
		var index = $(this).index();
		var _top = $(".product").eq(index).offset().top;
		$("html,body").stop().animate({scrollTop : _top - 200},600);
	});

	//淡入淡出轮播效果
	var $imgs = $("#slide li"),
		len = $imgs.length,
		currentIndex = 0,
		nextIndex = 1,
		isRunning = false;

	var timer = setInterval(move, 3000);

	var html = "";
	for (var i = 0; i < len; i++) {
		html += "<div></div>";
	};
	$(html).appendTo("#circle").first().addClass("current");
	$("#circle").delegate("div", "mouseover", function(){
		var _index = $(this).index();
		nextIndex = _index;
		move();
		isRunning = true;
	});

	function move(){
		$imgs.eq(nextIndex).fadeIn(1000);
		$imgs.eq(currentIndex).fadeOut(1000);

		$("#circle div").eq(nextIndex).addClass("current")
					    .siblings().removeClass("current");

		currentIndex = nextIndex;
		nextIndex++;
		if (nextIndex >= len) {
			nextIndex = 0;
		};
	};

	//鼠标经过时导航变色效果
	$("nav").delegate("img", "mouseover", function(){
		$(this).css({ "opacity": 0.5});
	}).delegate("img", "mouseleave" ,function(){
		$(this).css({ "opacity": 1});
	});
	//鼠标点击导航时跳转效果
	$("nav img").click(function(){
		var index = $(this).index();
		var _top = $(".product").eq(index).offset().top;
		$("html,body").stop().animate({scrollTop : _top - 200},800);
	});
	//鼠标经过时logo放大效果
	$(".left img").hover(function(){
		$(this).stop().animate({
			width:110,
			height:110,
			left:10
		},500);
	},function(){
		$(this).stop().animate({
			width:100,
			height:100,
			left:15
		},500);
	});

	//鼠标经过时商品放大效果
	$(".imgs img").hover(function(){
		$(this).stop().animate({
			width:250,
			height:250,
			left:-37
		},500);
	},function(){
		$(this).stop().animate({
			width:176,
			height:176,
			left:0
		},500);
	});

	//楼层导航
	var height = $(".product:first").offset().top,
		winHeight = $(window).height();

	$(window).on("scroll", function(){
		var _scrollTop = $(window).scrollTop();
		if (_scrollTop > height - winHeight / 2) {
			$("#floorNav").stop().fadeIn(800);
		}else{
			$("#floorNav").stop().fadeOut(800);
		}
		$(".product").each(function(index,element){
			var height = $(".product").eq(index).offset().top;
			if (_scrollTop > height - winHeight / 2) {
				$("#floorNav li").eq(index).children("span").addClass("curr").show().end()
					  .siblings("li").children("span").removeClass("curr").hide();
			};
		});
	});
	$("#floorNav").on("mouseenter","li:not(:last)",function(){
		$(this).children("span").show();
	}).on("mouseleave","li:not(:last)",function(){
		$(this).children("span").not(".curr").hide();
	}).on("click","li:not(:last)",function(){
		var index = $(this).index();
		var _top = $(".product").eq(index).offset().top;
		$("html,body").stop().animate({scrollTop : _top - 200},800);
	});
	$("#floorNav li:last").click(function(){
		$("html,body").stop().animate({scrollTop : 0},800);
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
