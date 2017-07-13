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
	

	/* 页面加载，显示cookie中保存的购物车信息 */
	$.cookie.json = true;
	// 读取cookie中所有的选购商品对象数组结构
	var _products = $.cookie("products") || [];

	// 显示商品信息
	var data = {
		products : _products
	};

	// 简单判断
	if (_products.length == 0) {
		$("#reminder").show();
	}else{
		$("#reminder").hide();
	};

	var html = "";
	data.products.forEach(function(p){
		html += "<div class='body'>" +
					"<div class='id' style='display:none;'>"+ p.id +"</div>"+
					"<div class='product'><input class='choice' type='checkbox'></div>"+
					"<div class='img'><img src="+ p.image +"></div>"+
					"<div class='name'>"+ p.name +
					"<p> </p>"+
					"<p>该商品不支持7天无理由退货</p>"+
					"</div>"+
					"<div class='price'>"+ p.price +"</div>"+
					"<div class='count'><span class='minus'>- </span><input type='text' value="+ p.amount +" class='amount' size='1'><span class='add'> +</span>"+"<p> </p>"+"<p>有货</p>"+"</div>"+
					"<div class='total'>￥"+ (p.price.slice(1)) * p.amount +"</div>"+	
					"<div style='margin-left:14px;'><a class='del' href='javascript:void(0);'>删除</a>"+
					"<p style='cursor:pointer;'>移到我的关注</p>"+
					"<p style='cursor:pointer;'>加到我的关注</p>"+
					"</div>"+
				"</div>";
	});

	$("#main").html(html);

	/*全选按钮功能*/
	$(".all").click(function(){
		var status = this.checked;
		var checkboxes = $(".body .choice");
		for (var i = 0; i < checkboxes.length; i++) {
			checkboxes[i].checked = status;
		};
		calcTotal();
	});	
 	/*点击删除按钮删除商品*/
 	$(".del").on("click", function(){
		if (confirm("真的要删除宝贝吗？")) {
			//查找该产品在cookie中位置
			var id = $(this).parents(".body").find(".id").text(),
			   index = exists(id,_products);

			_products.splice(index, 1);

			$.cookie("products",_products,{expires:7,path:"/"});
			//移除该产品
			$(this).parents(".body").remove();
		};
	});

 	/*点击复选框进行结算*/
 	$(".choice").click(function(){
 			calcTotal();
 	});

 	/*点击加减时实现数量的增删*/
 	$(".minus").click(function(){
		var thisAmount = $(this).siblings(".amount");
		var thisValue = thisAmount.val();
		if(thisValue > 1){
			thisValue--;
			thisAmount.val(thisValue);
			var _total = ($(".price").slice(1)) * thisValue;
			$(".total").val(_total);
		}
		//改变cookie
		var id = $(this).parents(".body").find(".id").text(),
		index = exists(id, _products);
		_products[index].amount = thisValue;
		$.cookie("products", _products, {path:"/", expires:7})
		//刷新合计
		calcTotal();
	});
	$(".add").click(function(){
		var thisAmount = $(this).siblings(".amount");
		var thisValue = thisAmount.val();
		thisValue++ ;
		thisAmount.val(thisValue);
		var _total = ($(".price").slice(1)) * thisValue;
		$(".total").val(_total);
		//改变cookie
		var id = $(this).parents(".body").find(".id").text(),
		index = exists(id, _products);
		_products[index].amount = thisValue;
		$.cookie("products", _products, {path:"/", expires:7})
		//刷新合计
		calcTotal();
	});


	function exists(id,products){
			for (var i = 0; i < products.length; i++) {
				if(products[i].id === id){
					return i;
				}
			};
			return -1;
		};

 	function calcTotal(){
 		var total = 0; 
 		for(var i = 0, len = $(".total").length; i < len; i++){
 			var curr = $(".choice").eq(i);
 			
 			if (curr.prop("checked")) {
 				total += parseInt($(".total").eq(i).text().slice(1));
 			};
		};
		$("#calcTotal").text(total);
 	};

 	/*鼠标经过商品时的效果*/
	$("#products img").hover(function(){
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