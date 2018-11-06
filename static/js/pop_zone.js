$(function(){
	$("#pop-close").click(function(){
		console.log("aaa")
		$("#pop_zone").hide()
	})   
	
	
	$("._hover").mouseenter(function(){
		$("#dropdown").stop().slideDown(500) 
	})
	$("._hover").mouseleave(function(){
		$("#dropdown").stop().slideUp(500) 
	})
	
	$("._hover li").mouseenter(function(){
		a = $(this).index();
		$(this).addClass('tab_in').siblings().removeClass('tab_in')
		$("#dropdown .img_box").eq(a).show().siblings().hide()
	})
	
	$(".nav .m .nav_tit2").first().mouseenter(function(){ 
		$("#dropdown_1").stop().slideDown(200)
		console.log("asas")
	})
	$("#dropdown_1").mouseenter(function(){ 
		$("#dropdown_1").stop().slideDown(200)
		console.log("asas")
	})
	$(".nav .m .nav_tit2").first().mouseleave(function(){
		$("#dropdown_1").stop().slideUp(200) 
	})
	$("#dropdown_1").first().mouseleave(function(){
		$("#dropdown_1").stop().slideUp(200) 
	})
	$(".box").mouseenter(function(){
		$(this).addClass("bg-f")
		$(this).find("a").css("color","#000000")
		$(this).children().children(".b-aside").show()
		$("#mainbg").addClass("main-black")
	})
	$(".box").mouseleave(function(){
		$(this).removeClass("bg-f") 
		$(this).find("a").css("color","#FFFFFF") 
		$(this).children().children("dd").children().css("color","#CCCCCC") 
		$(this).children().children(".b-aside").hide()
		$("#mainbg").removeClass("main-black")
	}) 
	$(".cf").mouseenter(function(){
		$(".cf_prev").stop().animate({marginLeft:-370,opacity:.8},1000)
		$(".cf_next").stop().animate({marginRight:-585,opacity:.8},1000)
	})
	$(".cf").mouseleave(function(){
		$(".cf_prev").stop().animate({marginLeft:-385,opacity:0},600)
		$(".cf_next").stop().animate({marginRight:-600,opacity:0},600)
	})
	//轮播图
	$.get("../json/lunbo.json", function(data){
		var arr = data;
		for (var i=0; i<arr.length; i++) {
			var obj = arr[i]; 
			$("<li><img src="+ obj.img +" ></li>").appendTo(".cf_img ul");
			var a = $("<a>"+ (i+1) +"</a>").appendTo(".cf_boadr_pager");
			a.addClass("cf_boadr_pager_link")
			if (i==0) {
				a.addClass("active");
			}	
		}
		$(".cf_img ul li").eq(0).show().siblings().hide();
		var size = $(".cf_img ul li").size();
		var i = 0;
		var timer = setInterval(function(){
			i++;
			move(); 
		}, 5000);
		function move(){
			if (i == size) {
				i = 0; 
			}
			if (i < 0) {
					i = size-1;
				}
			$(".cf_img ul li").eq(i).stop().fadeIn().siblings().stop().fadeOut();
			$(".cf_boadr_pager a").eq(i).removeClass("active").addClass("active").siblings().removeClass("active"); 
		}
		$(".cf_boadr_pager a").hover(function(){
				var index = $(this).index();
				i = index - 1;
				move();
		})
		$(".cf").hover(function(){
			clearInterval(timer);
		}, 
		function(){
			timer = setInterval(function(){
				i++;
				move();
			}, 2000);
		})
		$(".cf_prev").click(function(){
			i--;
			console.log(i)
			move();
		})
		$(".cf_next").click(function(){
			i++;
			move();
		})
	})
	
	
	//放大
	$(".f2_b ul li").mouseenter(function(){
		$(this).children().stop().animate({width:317,height:160,marginLeft:-10,marginTop:-5},500)  
	})
	$(".f2_b ul li").mouseleave(function(){
		$(this).children().stop().animate({width:297,height:150,marginLeft:0,marginTop:0},500)  
	})

//上移
	$(".innerfloor .list .fr a").mouseenter(function(){
		$(this).find("img").stop().animate({bottom:0},500)
	})
	$(".innerfloor .list .fr a").mouseleave(function(){
		$(this).find("img").stop().animate({bottom:-15},500)
	})
	$(".innerfloor .list .fl a").mouseenter(function(){
		$(this).find("img").stop().animate({width:260,marginLeft:-10,height:260,marginTop:-10},1000)
	})

	$(".innerfloor .list .fl a").mouseleave(function(){
		$(this).find("img").stop().animate({width:240,marginLeft:0,height:240,marginTop:0},1000)
	})
//换标
	$(".brand_logo a").mouseenter(function(){
		$(this).find("img").hide()
		$(this).find("i").show() 
	})
	$(".brand_logo a").mouseleave(function(){
		$(this).find("img").show()
		$(this).find("i").hide() 
	})
//放大
	$(".brand_msg a").mouseenter(function(){
		$(this).find("img").first().stop().animate({width:312,marginLeft:-10,height:280,marginTop:-10},500)
	})
	$(".brand_msg a").mouseleave(function(){
		$(this).find("img").first().stop().animate({width:292,marginLeft:0,height:260,marginTop:0},500)
	})
//opacity
	$(".guess_like .fr a").mouseenter(function(){
		$(this).siblings().css("opacity", "0.64")
	})
	
	$(".guess_like .fr a").mouseleave(function(){
		$(this).siblings().css("opacity", "1")
	})
	//电梯
	$("#i-panel a").click(function(){
		var index = $(this).index() + 2;
		var top = $(".main .floor").eq(index).offset().top;
		
		isMoving = true;
		$("html,body").stop(true).animate({scrollTop: top},1000);
		
	})

	$(window).scroll(function(){
		if($(window).scrollTop() > 560){
			$("#i-panel").fadeIn()
		}
		if($(window).scrollTop() < 560){
			$("#i-panel").fadeOut()
		}
	})


})