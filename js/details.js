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
	
/*商品放大镜效果*/

	var shoppWidth = $("#shopp").width(),
		shoppHeight = $("#shopp").height();

	var glassWidth = $("#glass").width(),
		glassHeight = $("#glass").height();

	var disLeft = shoppWidth - glassWidth,
		disTop = shoppHeight - glassHeight;

	$("#shopp").hover(function(){
		$("#glass").show();
		$("#goods").show();
	},function(){
		$("#glass").hide();
		$("#goods").hide();
	});

	$("#shopp").mousemove(function(e){

		var left = e.pageX - this.offsetLeft - glassWidth / 2,
			top = e.pageY - this.offsetTop - glassHeight / 2;

		if (left <= 0) {
			left = 0;
		}else if (left >= disLeft) {
			left = disLeft;
		}
		if (top <= 0) {
			top = 0;
		}else if(top >= disTop){
			top = disTop;
		}

		$("#glass").css("left" , left);
		$("#glass").css("top" , top);

		$("#goods img").css("left" , left * -2.666);
		$("#goods img").css("top" , top * -2.666);
	});

	/*切换商品图片效果*/
	$("#tab img").each(function(index){
		$("#tab img").eq(index).click(function(){
			var curr = $("#tab img").eq(index).attr("src");
			$(this).css("border","1px solid darkseagreen")
				   .siblings("img").css("border","none");
			$("#shopp img").attr("src",curr);
			$("#goods img").attr("src",curr);
		});
	});

	/*选中颜色时的变色效果*/
	$("#color span").each(function(index){
		$("#color span").eq(index).click(function(){
			$(this).css({ "color": "#fff", "background": "darkseagreen" })
				   .siblings("span").css({ "color": "#444", "background": "#dcede1" });
		});
	});

	/*选中尺寸时的变色效果*/
	$("#size span").each(function(index){
		$("#size span").eq(index).click(function(){
			$(this).css({ "color": "#fff", "background": "darkseagreen" })
				   .siblings("span").css({ "color": "#444", "background": "#dcede1" });
		});
	});

	/*鼠标经过购物车时的效果*/
	$("#buy #c").hover(function(){
		$(this).css({ "color": "#fff", "background": "darkseagreen" });
	},function(){
		$(this).css({ "color": "#444", "background": "#dcede1" });
	});

	/*鼠标经过立即购买时的效果*/
	$("#buy #b").hover(function(){
		$(this).css({ "color": "#fff", "background": "darkseagreen" });
	},function(){
		$(this).css({ "color": "#444", "background": "#dcede1" });
	});

	/*点击加入购物车时将商品存入 cookies 中*/
	$("#c").click(function(){
		var product = {
			id : $("article .id").text(),
			image : $("#shopp img").attr("src"),
			name : $("aside .name").text(),
			price : $("#price .price").text(),
			amount : 1
		};
		// 先从 cookie 中读取保存的购物车结构[]
		// 配置自动转换JSON数据
		$.cookie.json = true;
		var _products = $.cookie("products") || [];
		// 判断以前是否已选购过当前的商品
		var index = exists(product.id,_products);
		if (index === -1) {// 以前未购买过当前商品					
			// 将当前选购商品添加到数组结构中保存
			_products.push(product);
		}else{
			// 以前已经有购买当前商品
			_products[index].amount++;
		}
		// 将数组存回到 cookie 中
		$.cookie("products",_products,{expires:7,path:"/"});

		//提示添加成功
		$("#succeed").show();
		setTimeout(function(){
			$("#succeed").fadeOut();
		},1000);

		function exists(id,products){
			for (var i = 0; i < products.length; i++) {
				if(products[i].id === id){
					return i;
				}
			};
			return -1;
		}
	})

	/*鼠标经过商品时的效果*/
	$(".body img").hover(function(){
		$(this).stop().animate({
			width:300,
			height:300,
			left:-20
		},500);
	},function(){
		$(this).stop().animate({
			width:260,
			height:260,
			left:0
		},500);
	});


	$(".body .car").click(function(){
		$(this).css("color","orange");
		var row = $(this).parents(".body");
		var product = {
			id : row.children(".id").text(),
			image : row.find(".img").attr("src"),
			name : row.children(".name").text(),
			price : row.children(".price").text(),
			amount : 1
		};

		// 先从 cookie 中读取保存的购物车结构[]
		// 配置自动转换JSON数据
		$.cookie.json = true;
		var _products = $.cookie("products") || [];
		// 判断以前是否已选购过当前的商品
		var index = exists(product.id,_products);
		if (index === -1) {// 以前未购买过当前商品					
			// 将当前选购商品添加到数组结构中保存
			_products.push(product);
		}else{
			// 以前已经有购买当前商品
			_products[index].amount++;
		}
		
		// 将数组存回到 cookie 中
		$.cookie("products",_products,{expires:7,path:"/"});

		//提示添加成功
		alert("添加购物车成功了哦！");

		function exists(id,products){
			for (var i = 0; i < products.length; i++) {
				if(products[i].id === id){
					return i;
				}
			};
			return -1;
		}
	})

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