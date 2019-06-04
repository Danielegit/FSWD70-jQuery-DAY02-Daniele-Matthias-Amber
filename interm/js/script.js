$(document).ready(function() {
	var arr = $(".myimgs");
	var name = $("h3");

	for (let i = 0; i < arr.length; i++) {				

		$(arr[i]).attr("src", items[i].pic);
		$(name[i]).text(items[i].name).after("<div> € "+items[i].price+"</div>");
		$(".items1 div div").attr("class", "price");
		$("#basket").append("<p class='myp'>"+items[i].name+" "+items[i].amount+"</p>");
	
	}


		});

