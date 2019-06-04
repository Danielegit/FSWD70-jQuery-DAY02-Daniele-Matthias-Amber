$(document).ready(function() {
	var arr = $(".myimgs");
	var name = $("h3");
	var push = $(".btn");
	var shop = $(".shop_b");
	var fig =$("figure");
	var info= $(".info");
	var increase = $(".btn-inc")
	var decrease = $(".btn-dec")
	var remove = $(".delete")
	var amou = $(".amount")


	for (let i = 0; i < arr.length; i++) {				

		$(arr[i]).attr("src", items[i].pic);
		$(name[i]).text(items[i].name).after("<div> € "+items[i].price+"</div>");
		$(".items1 div div").attr("class", "price");
	
	
	}




			let counter = [1,1,1,1,1,1];


			for (let i = 0; i < push.length; i++) {				

				
				$(push[i]).on('click', function() {

					$("#tot").css("visibility", "visible");
					$(".button-container").css("display", "block");
					$(fig[i]).css("display", "block");
		   			$(shop[i]).attr("src", items[i].pic);
		   			$(info[i]).text(items[i].name+"    € "+items[i].price);
		   			$(amou[i]).text(counter[i]=1)

				})




				$(increase[i]).click(function(){
					$(amou[i]).text(++counter[i])
				}


				);

				$(decrease[i]).click(function(){
		    		$(amou[i]).text(--counter[i]);
		    		if (counter[i] < 1) {
		    			$(fig[i]).css("display", "none");	
		    		}
		 		 });

				$(remove[i]).click(function(){
					$(fig[i]).css("display", "none");
					
				});
			
			}











		});

