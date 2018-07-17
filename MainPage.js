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



function plusSlides(n) {
  	showSlides(slide += n);
}

function setSlide(n) {
  	showSlides(slide = n);
}

function showSlides(n) {
	var slides = $(".mySlides");

	if (n >= slides.length) {slide = 0;}
	if (n < 0) {slide = slides.length-1}
	
	
	console.log(slide)
	
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slide].style.display = "block";


  	$("ul>li").removeClass("highlight");
  	$("ul>li:nth-of-type("+(slide+1)+")").addClass("highlight");
}




var slide = 0;
showSlides(slide);
PhotoInit();
