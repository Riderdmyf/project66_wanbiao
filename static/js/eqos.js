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
	
	})
	$("#dropdown_1").mouseenter(function(){ 
		$("#dropdown_1").stop().slideDown(200)
		
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
	$(".nav_tit,.menu").mouseenter(function(){
		$(".menu").stop().slideDown()
	})

	$(".nav_tit,.menu").mouseleave(function(){
		$(".menu").stop().slideUp()
	})
	
})