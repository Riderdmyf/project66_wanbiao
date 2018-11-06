$(function(){
		var $f1 = $(".main .innerfloor").eq(0);
		$f1.find("li").eq(0).show().siblings().hide();
		var size = $f1.find("li").size();  
		var i = 0;
		var timer1 = setInterval(function(){
			i++;
			move(); 
		}, 1000);
	
		$($f1.find(".cf_1")).hover(function(){
			clearInterval(timer1);
		}, 
		function(){
			timer1 = setInterval(function(){
				i++;
				move();
			}, 1000);
		})
			
		function move(){
			if (i == size) {
				i = 0; 
			}
			if (i < 0) {
					i = size-1;
				}
		$f1.find("li").eq(i).stop().fadeIn().siblings().stop().fadeOut();
		$f1.find(".cf_1board .cf_1page a").eq(i).removeClass("active").addClass("active").siblings().removeClass("active"); 
		}
		$f1.find(".cf_1board .cf_1page a").hover(function(){
				var index = $(this).index();
				i = index;
				move();
		})
		
///////////////////////////////////////		
		
		var $f2 = $(".main .innerfloor").eq(1);
		$f2.find("li").eq(0).show().siblings().hide();
		var size2 = $f2.find("li").size();  
		var j = 0;
		var timer2 = setInterval(function(){
			j++;
			move2(); 
		}, 1000);
	
		$($f2.find(".cf_1")).hover(function(){
			clearInterval(timer2);
		}, 
		function(){
			timer2 = setInterval(function(){
				j++;
				move2();
			}, 1000);
		})
			
		function move2(){
			if (j == size) {
				j = 0; 
			}
			if (j < 0) {
					j = size2-1;
				}
		$f2.find("li").eq(j).stop().fadeIn().siblings().stop().fadeOut();
		$f2.find(".cf_1board .cf_1page a").eq(j).removeClass("active").addClass("active").siblings().removeClass("active"); 
		}
		$f2.find(".cf_1board .cf_1page a").hover(function(){
				var index = $(this).index();
				j = index;
				move2();
		})
		
/////////////////////////////////////////
		var $f3 = $(".main .innerfloor").eq(2);
		$f3.find("li").eq(0).show().siblings().hide();
		var size3 = $f3.find("li").size();  
		var z = 0;
		var timer3 = setInterval(function(){
			z++;
			move3(); 
		}, 1000);
	
		$($f3.find(".cf_1")).hover(function(){
			clearInterval(timer3);
		}, 
		function(){
			timer3 = setInterval(function(){
				z++;
				move3();
			}, 1000);
		})
			
		function move3(){
			if (z == size3) {
				z = 0; 
			}
			if (z < 0) {
					z = size3-1;
				}
		$f3.find("li").eq(z).stop().fadeIn().siblings().stop().fadeOut();
		$f3.find(".cf_1board .cf_1page a").eq(z).removeClass("active").addClass("active").siblings().removeClass("active"); 
		}
		$f3.find(".cf_1board .cf_1page a").hover(function(){
				var index = $(this).index();
				z = index;
				move3();
		})
	 
})