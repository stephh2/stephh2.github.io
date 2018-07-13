function PhotoInit(){
	var numPhoto = 14;
	var photos = [];
	for (let i = 1; i <= numPhoto; i++){
		if (i == 12)
			photos.push("Photos/Photo"+i+".jpeg");
		else 
			photos.push("Photos/Photo"+i+".jpg");
	}

	var photoNum = 1;
	window.setInterval( function(){ 
		photoNum = (photoNum + 1) % (numPhoto);
		$(".rotating").fadeOut(800, function(){
		 $(".rotating").attr("src", photos[photoNum]);
		 $(".rotating").fadeIn(800, function(){});
		});

	}, 3000);
}


var position = 0;

function transition(pos){
	$("#About").toggleClass("hidden", (pos != 1));
	$("#photos").toggleClass("hidden", (pos != 0));
	$("#EDU").toggleClass("hidden", (pos != 2));

	$("#About").toggleClass("showing", (pos == 1));
	$("#photos").toggleClass("showing", (pos == 0));
	$("#EDU").toggleClass("showing", (pos == 2));

	$("#AboutLink").toggleClass("highlight", (pos == 1));
	$("#photosLink").toggleClass("highlight", (pos == 0));
	$("#EDULink").toggleClass("highlight", (pos == 2));
}

function Change(num){
	position = num
	transition(position)
}


function ActionsInit(){
	var numStages = 3;
	transition(0);

	$(".right").on("click", function(){
		position = (position + 1) % numStages;

		transition(position);
	});

	$(".left").on("click", function(){
		position = (position - 1) % numStages;
		if (position < 0) 
			position = position + numStages;
		transition(position);
	});

}

PhotoInit();
ActionsInit();


