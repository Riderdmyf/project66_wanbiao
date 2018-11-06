$(function(){
			function getParams(str, name){
					var arr = str.split("&");
					for (var i=0; i<arr.length; i++) { 
						var str1 = arr[i];
						var arr1 = str1.split("=");
						if (arr1[0] == name) {
							return arr1[1];
						}
					}
					return "";
				}

			var param = location.search.substring(1);
			var pid = getParams(param, "id");  
			var arr = [];
			console.log(pid)
			$.get("../json/biao.json",function(data){ 
				arr = data;
				for (var i=0; i<arr.length; i++) {
					var obj = arr[i];
					if (obj.id == pid) { 
						$("#fdj-img").append("<img src='" + obj.bimg1 + "'></img>")
						$("#fdj-img").append("<img src='" + obj.bimg2 + "'></img>")
						$("#fdj-img").append("<img src='" + obj.bimg3 + "'></img>")
						$("#fdj-img").append("<img src='" + obj.bimg4 + "'></img>")
						$("#fdj-img").append("<img src='" + obj.bimg5 + "'></img>")
						$("#fdj-img").append("<img src='" + obj.bimg6 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg1 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg2 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg3 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg4 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg5 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg6 + "'></img>")
						$("#simg-box ul").append("<li><img src='" + obj.bimg1 + "'></img>")
						$("#simg-box ul").append("<li><img src='" + obj.bimg2 + "'></img>")
						$("#simg-box ul").append("<li><img src='" + obj.bimg3 + "'></img>")
						$("#simg-box ul").append("<li><img src='" + obj.bimg4 + "'></img>")
						$("#simg-box ul").append("<li><img src='" + obj.bimg5 + "'></img>")
						$("#simg-box ul").append("<li><img src='" + obj.bimg6 + "'></img>")
						$("#name").append(obj.name)
						$("#xh").append(obj.xh)
						$("#bh").append(obj.bh)
						$("#pp").append(obj.pp)
						$("#wbj").append(obj.wbj)
						$("#yj").append(obj.yj)
						$("#yq").append(obj.yq)
						$("#fd").append("<img src='" + obj.bimg1 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg2 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg3 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg4 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg5 + "'></img>")
						$("#fd").append("<img src='" + obj.bimg6 + "'></img>")
						//obj.index=obj.id
						$("#ipt2")[0].indox=obj
						$("#ipt2").click(function(){
							var arr2 = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
							var isExist = false;
							console.dir(this.indox.id)
							for (var i=0; i<arr2.length; i++) {
								console.log(arr2[i].id)
								//console.log(obj.id)
								if (arr2[i].id == this.indox.id) {
									arr2[i].num++;  
									isExist = true;
									break;
								}
							}
							if (isExist ==  false) {
							//	console.log("asdasd")
								this.indox.num = 1;
								this.indox.checked = true; 
								arr2.push(this.indox);
								console.log(arr2);
							}
							$.cookie("cart", JSON.stringify(arr2), {expires:30, path:"/"});
							console.log( $.cookie("cart") );
							
						})
					
					
					
					
					
					
					
					
					
					}
					
				}
				var i = 0;
				$("#bx-prev").click(function(){
					console.log("asasas")
					i ++; 
					if(i > $("#simg-box ul li").length-5){
						i = 0
					}
					$("#simg-box ul").stop().animate({left:-80 * i},1000)
				})
				$("#bx-next").click(function(){
					i --;
					if(i < 0){
						i = $("#simg-box ul li").length-5
					}
					$("#simg-box ul").stop().animate({left:-80 * i},1000)
				}) 
				
				
				$("#simg-box li").mouseenter(function(){
					var a = $(this).index()
					$("#fdj-img img").eq(a).show().siblings().hide()
					$("#fd img").eq(a).show().siblings().hide()
				})
				$("#simg-box li").mouseenter(function(){
					var a = $(this).index()
					$("#fdj-img").children("img").eq(a).show().siblings().hide()
				})
				$("#fdj-img img").mouseenter(function(){
					$("#fdj-img img").hide()
					$("#fd").show()
				})
				
				$("#fd").mousemove(function(e){
					var x = e.pageX - $("#fd").offset().left - $("#fd").width()/2;
					var y = e.pageY - $("#fd").offset().top - $("#fd").height()/2;
					if (y < 0){
						y = 0
					}
					else if (y >  $("#fd").height()) {
						y =  $("#fd").height()
					}
					
					if (x < 0){
						x = 0;
					}
					else if (x > $("#fd").width()){
						x = $("#fd").width();
					}

					$("#fd img").css({left:-2.08*x, top:-2.08*y});
					
				})
				$("#fd").mouseleave(function(e){
					$("#fdj-img img").show()
					$("#fd").hide()
				})
			
		
			
			})
			
			
			$("#jia").click(function(){
				var a = $("#jige").val();
				a++
				$("#jige").val(a)
			})
			$("#jian").click(function(){
				var a = $("#jige").val();
				a--;
				if(a<0){
					a = 0;
				}
				$("#jige").val(a)
			})
			

			
			
			
			
			
						 
		})