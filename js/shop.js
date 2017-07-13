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

/*鼠标经过楼层导航时效果*/
	$(".floor").on("mouseenter","li:not(:first)",function(){
		$(this).css({ "color": "#fff", "background": "plum", "opacity": 0.3 });
	}).on("mouseleave","li:not(:first)",function(){
		$(this).css({ "color": "#444", "background": "#e8e7e7", "opacity": 1 });
	});
	
/*分页效果*/
	function loadproduct(page){
		$.ajax({
			url : "../php/get_products.php",
			dataType : "json",
			data : {page : page},
			success : function(data){
				$("#main").empty();
				data.forEach(function(product){
					$(".body:last").clone(true).show()
						.appendTo("#main")
						.find(".img").attr("src",product.image).end()
						.children(":eq(1)").text(product.name).end()
						.children(":eq(2)").text(product.price).end()
						.children(".id").text(product.id);
				});
			}
		});
	};
	loadproduct(1);
	/*点击翻页*/
	var active = $(".pagination .actives");
		active.each(function(index){
			active.eq(index).click(function(){
				loadproduct(index + 1);
			});
		});

	$(".body .car").click(function(){
		$(this).css("color","orange");
		var that = this;
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
		$("#succeed").show();
		setTimeout(function(){
			$("#succeed").fadeOut();
			$(that).css("color","darkseagreen");
		},1000);

		function exists(id,products){
			for (var i = 0; i < products.length; i++) {
				if(products[i].id === id){
					return i;
				}
			};
			return -1;
		}
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