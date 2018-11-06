$(function(){
	refresh()
	function refresh() {					
		var arr = $.cookie("cart");
		if (arr) {
			arr = JSON.parse(arr);
			$("#list").empty();
			var totalPrice = 0; //总价
			for (var i=0; i<arr.length; i++) {
				var obj = arr[i];
				var li = $("<li></li>").appendTo("#list");  
				
				//是否选中
				if (obj.checked) {
					$('<div><input class="ckbox" type="checkbox" checked="checked" /><img src="'+ obj.bimg1 +'"></div>').appendTo(li);
				}
				else { 
					console.log("asdasd")
					$('<div><input class="ckbox" type="checkbox" /><img src="'+ obj.bimg1 +'"></div>').appendTo(li);
				}



				$('<div><p>'+obj.name +'</p></div>').appendTo(li)
				$('<div><p>￥'+ obj.wbj +'</p></div>').appendTo(li)
				$('<div><input id="jian" type="button" value="-" /><input type="text" value="'+ obj.num +'" /><input id="jia" type="button" value="+" /></div>').appendTo(li)
				$('<div><p>￥'+ obj.wbj*obj.num +'</p></div>').appendTo(li)

				if (obj.checked) { 
					totalPrice += obj.num * obj.wbj; 
				}
			}
			
			//显示总价
			$("#zj").html(totalPrice);
		}
		else {
			$("<li>购物车还没有商品， 请先购买</li>").appendTo("#list")
		}
	}	
	
	$("#list").on("click", "#jia", function(){
		var index = $(this).index("#list #jia");
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num++;
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新节点数据
		refresh();
	})
	$("#list").on("click", "#jian", function(){
		var index = $(this).index("#list #jian");
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr[index].num--;
		if (arr[index].num < 1) {
			arr[index].num = 1;
		}
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新节点数据
		refresh();
	})
	
	
	$("#list").on("click", ".ckbox", function(){
		var index = $(this).index("#list .ckbox");
		
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		arr[index].checked = !arr[index].checked;
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		//判断是否全选了
		isAllSelect();
		
		//刷新节点数据
		refresh();
	})
	isAllSelect();
	function isAllSelect(){
		
		//判断是否为undefined
		var arr = $.cookie("cart");
		if (!arr) {
			return;
		}
		
		var arr = JSON.parse($.cookie("cart"));
		
		var sum = 0;
		for (var i=0; i<arr.length; i++) {
			sum += arr[i].checked;
		}
		
		//全选了
		if (arr.length!=0 && sum==arr.length) {
			$("#allSelect").prop("checked", true);
		}
		//未全选
		else {
			$("#allSelect").prop("checked", false);
		}
	}
	
	$("#allSelect").click(function(){
		//判断是否为undefined
		var arr = $.cookie("cart");
		if (!arr) {
			return;
		}
		
		var arr = JSON.parse($.cookie("cart"));
		for (var i=0; i<arr.length; i++) {
			//全选
			if ($(this).prop("checked")){
				arr[i].checked = true;
			}
			//全不选
			else {
				arr[i].checked = false;
			}
		}
		$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
		
		//刷新
		refresh();
	})
	$("#delSelect").click(function(){
					
		//获取cookie并修改
		var arr = JSON.parse($.cookie("cart"));
		
		//将未选中的商品添加到新数组newArr中，再将newArr保存到cookie
		var newArr = [];
		for (var i=0; i<arr.length; i++) {
			if (!arr[i].checked) {
				newArr.push(arr[i]);
			}
		}
		
		//覆盖原来的cookie
		$.cookie("cart", JSON.stringify(newArr), {expires:30, path:"/"});
		
		isAllSelect();
		
		//刷新节点数据
		refresh();
	})
	

	
	
})
