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
/*轮播效果*/
	var $imgs = $(".container li"),

		len = $imgs.length,
		imgWidth = $imgs.outerWidth(),
		currentIndex = 1,
		nextIndex = 2,
		isRunning = false;

	var _first = $imgs.first().clone(true),
		_last = $imgs.last().clone(true);

	$("#banner").append(_first).prepend(_last);
	len += 2;

	$("#banner").css("width",imgWidth * len);
	$("#banner").css({top:0, left:-1 * imgWidth});

	var timer = setInterval(move,3000);

	var html = "";
	for (var i = 0; i < len - 2; i++) {
		html += "<div></div>";
	};
	$(html).appendTo("#circle").first().addClass("current");
	$("#circle").delegate("div", "mouseover", function(){
		var _index = $(this).index();
		nextIndex = _index + 1;
		move();
		isRunning = true;
	});

	$(".container").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(move,3000);
	});

/*轮播动画*/
	function move(){
		if (isRunning) {
			return;
		};
		var _left = -1 * nextIndex * imgWidth;

		var circleIndex = nextIndex - 1;
		if (circleIndex >= len - 2) {
			circleIndex = 0;
		}else if(currentIndex < 0){
			currentIndex = len - 3;
		};
		$("#circle div").eq(circleIndex).addClass("current")
					    .siblings().removeClass("current");

		currentIndex = nextIndex;
		nextIndex++;

		$("#banner").animate({left:_left},1000,function(){
			isRunning = false;
			if (nextIndex >= len) {
				currentIndex = 1;
				nextIndex = 2;
				$("#banner").css("left",-1 * imgWidth);
			}else if(nextIndex == 0){
				currentIndex = len - 2;
				nextIndex = len - 1;
				$("#banner").css("left",-1 * imgWidth * (len - 2));
			};
		});
	};

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
