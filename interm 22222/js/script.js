$(document).ready(function() {
	var arr = $(".myimgs");
	var name = $("h3");
	var push = $(".btn");
	var shop = $(".shop_b");
	var fig =$("figure");
	var info= $(".info");

	console.log(info);

	for (let i = 0; i < arr.length; i++) {				

		$(arr[i]).attr("src", items[i].pic);
		$(name[i]).text(items[i].name).after("<div> € "+items[i].price+"</div>");
		$(".items1 div div").attr("class", "price");
		/*$("#basket").append("<p class='myp'>"+items[i].name+" "+items[i].amount+"</p>");*/
	
	}

	for (let i = 0; i < push.length; i++) {				

		
		$(push[i]).on('click', function() {

			$(fig[i]).css("display", "block");
   			$(shop[i]).attr("src", items[i].pic);
   			$(info[i]).text(items[i].name+"    € "+items[i].price);
		})
	
	}











		});

