
var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
		{
			//Variables for Game Play
			angleMode = "radians";
			var Mode = -2; 
			var keyArray = [];
			var dif = 10;
			var images = [];
			var tileSize = 140;
			var flyer = false;
			var WALLS = [];
			var TILES = [];

			var dice = 0;
			var count = 0;
			var CountLimit = 0;
			var shootFireworks = 0;

			var centerX = -500;
			var centerY = -400;

			var mapSize = tileSize*18;
			
			var Dist = function(x1, y1, x2, y2) {
				return sqrt(sq(x1-x2)+sq(y1-y2));
			};
			var splitPoints = function(p) {
				var p2 = [];
				p2.splice(0, p2.length);
				for (var i = 0; i < p.length - 1; i++) {
					p2.push(new PVector(p[i].x, p[i].y));
					p2.push(new PVector((p[i].x + p[i+1].x)/2, (p[i].y + p[i+1].y)/2));
				}  
				p2.push(new PVector(p[i].x, p[i].y));
				p2.push(new PVector((p[0].x + p[i].x)/2, (p[0].y + p[i].y)/2));
				return p2;
			};
			var average = function(p2) {
				var p3 = [];
				for (var i = 0; i < p2.length - 1; i++) {
					var x = (p2[i].x + p2[i+1].x)/2;
					var y = (p2[i].y + p2[i+1].y)/2;
					p2[i].set(x, y);
				} 
				var x = (p2[i].x + p2[0].x)/2;
				var y = (p2[i].y + p2[0].y)/2;
				
				p3.splice(0, p3.length);
				for (i = 0; i < p2.length; i++) {
					p3.push(new PVector(p2[i].x, p2[i].y));   
				}    
				
				return p3;
			};   
			var subdivide = function(data) {
				var data2 = splitPoints(data);
				data = average(data2);
				data2 = splitPoints(data);
				data = average(data2);
				return data;
			};
			var drawBlob = function(r, g, b){
				background(0,0,0,0);
				//Body of Blob
				var blob = [];

				//LEGS
				{
					blob = [];
					
					blob.push(new PVector(130, 280));
					
					blob.push(new PVector(160, 290));
					
					blob.push(new PVector(160, 330));
					blob.push(new PVector(130, 330));
					blob.push(new PVector(130, 360));
					blob.push(new PVector(180, 360));
					blob.push(new PVector(180, 295));
					
					blob.push(new PVector(200, 300));
					
					blob.push(new PVector(220, 295));
					blob.push(new PVector(220, 360));
					blob.push(new PVector(270, 360));
					blob.push(new PVector(270, 330));
					blob.push(new PVector(240, 330));
					
					blob.push(new PVector(240, 290));
					
					blob.push(new PVector(270, 280));
					
					
					blob = subdivide(blob);
					fill(r-60, g-60, b-60);
					stroke(0,0,0);
					strokeWeight(2);
					noStroke();
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
				}
				//BODY
				{
					blob = [];
					blob.push(new PVector(200, 50));
					blob.push(new PVector(120, 150));
					blob.push(new PVector(100, 250));
					blob.push(new PVector(130, 280));
					blob.push(new PVector(130, 280));
					
					blob.push(new PVector(160, 290));
					blob.push(new PVector(200, 300));
					blob.push(new PVector(240, 290));
					
					blob.push(new PVector(270, 280));
					blob.push(new PVector(270, 280));
					blob.push(new PVector(300, 250));
					blob.push(new PVector(280, 150));
					blob.push(new PVector(200, 50));
					
					
					blob = subdivide(blob);
					fill(r, g, b);
					stroke(0,0,0);
					strokeWeight(2);
					
					noStroke();
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
					
					
					blob = [];
					blob.push(new PVector(120, 150));
					blob.push(new PVector(100, 250));
					blob.push(new PVector(130, 280));
					blob.push(new PVector(130, 280));
					
					blob.push(new PVector(160, 290));
					blob.push(new PVector(200, 300));
					blob.push(new PVector(240, 290));
					
					blob.push(new PVector(270, 280));
					blob.push(new PVector(270, 280));
					blob.push(new PVector(300, 250));
					blob.push(new PVector(280, 150));
					
					blob = subdivide(blob);
					fill(r-50, g-50, b-50, 90);
					stroke(0,0,0);
					strokeWeight(2);
					
					noStroke();
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
					
					
					blob = [];
					blob.push(new PVector(100, 250));
					blob.push(new PVector(130, 280));
					blob.push(new PVector(130, 280));
					
					blob.push(new PVector(160, 290));
					blob.push(new PVector(200, 300));
					blob.push(new PVector(240, 290));
					
					blob.push(new PVector(270, 280));
					blob.push(new PVector(270, 280));
					blob.push(new PVector(300, 250));
					
					blob = subdivide(blob);
					fill(r-50, g-50, b-50, 90);
					stroke(0,0,0);
					strokeWeight(2);
					
					noStroke();
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
					
				}
				//REFLECTIONS
				{
					blob = [];
					
					blob.push(new PVector(282, 203));
					blob.push(new PVector(284, 252));
					blob.push(new PVector(266, 274));
					blob.push(new PVector(224, 288));
					blob.push(new PVector(224, 265));
					blob.push(new PVector(256, 254));
					blob.push(new PVector(274, 239));
					
					blob = subdivide(blob);
					fill(r-100, g-100, b-100, 150);
					noStroke();
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
					
				}
				//ARMS
				{
					blob = [];
					blob.push(new PVector(274, 197));
					blob.push(new PVector(274, 197));
					blob.push(new PVector(274, 197));
					blob.push(new PVector(325, 240));
					
					blob.push(new PVector(324, 239));
					blob.push(new PVector(342, 236));
					blob.push(new PVector(345, 261));
					blob.push(new PVector(325, 265));
					blob.push(new PVector(319, 251));
					
					blob.push(new PVector(320, 252));
					blob.push(new PVector(272, 208));
					blob.push(new PVector(272, 208));
					blob.push(new PVector(272, 208));
					blob = subdivide(blob);
					blob = subdivide(blob);
					
					fill(r+30, g+30, b+30);
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
					
					for(var i = 0; i < blob.length; i++){
						blob[i].x = 400-blob[i].x;
					}
					
					fill(r+30, g+30, b+30);
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
				}
				//EYES
				{
					blob = [];
					
					blob.push(new PVector(139, 157));
					blob.push(new PVector(167, 180));
					blob.push(new PVector(194, 157));
					blob.push(new PVector(189, 117));
					blob.push(new PVector(155, 116));
					
					blob = subdivide(blob);
					
					fill(255, 255, 255);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
				   
					for(var i = 0; i < blob.length; i++){
						blob[i].x = 400-blob[i].x;
					}
					blob = subdivide(blob);
					
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
					
					//pupil
					blob = [];
					
					blob.push(new PVector(180, 162));
					blob.push(new PVector(186, 149));
					blob.push(new PVector(171, 139));
					blob.push(new PVector(155, 149));
					blob.push(new PVector(156, 165));
					blob.push(new PVector(170, 169));
					
					blob = subdivide(blob);
					
					fill(0,0,0);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
				   
					for(var i = 0; i < blob.length; i++){
						blob[i].x = 400-blob[i].x;
					}
					blob = subdivide(blob);
					
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
					
				}
				//MOUTH
				{   
					blob = [];
					blob.push(new PVector(150, 200));
					blob.push(new PVector(150, 200));
					blob.push(new PVector(150, 200));
					blob.push(new PVector(250, 200));
					blob.push(new PVector(250, 200));
					blob.push(new PVector(250, 200));
					blob.push(new PVector(250, 200));
					blob.push(new PVector(230, 230));
					blob.push(new PVector(200, 250));
					blob.push(new PVector(170, 230));
					blob = subdivide(blob);
					
					beginShape();
					for (var i = 0; i < blob.length; i++) {
						vertex(blob[i].x, blob[i].y);   
					}    
					vertex(blob[0].x, blob[0].y);
					endShape();
					
				}
			};

			var drawPlayerImg = function(){
				drawBlob(0, 200, 150);
				images.push(get(0, 0, width, height));
			};
			var drawComputerImg = function(){
				drawBlob(244, 66, 110);
				images.push(get(0, 0, width, height));
			};
			var drawWall2 = function(){
				fill(230, 134, 0);
				background(0,1,12);
				rect(5,8,180,120);
				rect(210,8,180, 120);
				
				rect(0, 136, 90, 125);
				rect(105, 136, 180, 125);
				rect(305, 136, 90, 125);
				
				rect(5,268,180,120);
				rect(210,268,180, 120);
				
				images.push(get(0,0,400,400));
				
			};
			var drawWall3 = function(){
				fill(230, 134, 0);
				
				background(0,1,12);
				rect(0, 8, 90, 120);
				rect(105, 8, 180, 120);
				rect(305, 8, 90, 120);
				
				rect(5,136,180,125);
				rect(210,136,180, 125);
				
				
				rect(0, 268, 90, 120);
				rect(105, 268, 180, 120);
				rect(305, 268, 90, 120);
				
				images.push(get(0,0,400,400));
				
			};
			var drawBlock4 = function(){
				background(0,0,0,0);
				stroke(0,0,0);
				strokeWeight(13);
				fill(148, 97, 2);
				rect(20,20,360,360,30);
				fill(97, 67, 3);
				rect(20,20,60,360,30);
				rect(95,20,60,360,30);
				rect(170,20,60,360,30);
				rect(245,20,60,360,30);
				rect(320,20,60,360,30);
				rect(20, 20,360,60,30);
				rect(20, 320,360,60,30);
				images.push(get(0,0,400,400));
			};
			var drawLogo5 = function(r, g, b){
				background(0,0,0,0);
				//Body of Elephant
				var logo = [];
				
				//A
				fill(0, 130, 41);
				{
					logo = [];
					logo.push(new PVector(101, 180));
					logo.push(new PVector(108, 62));
					logo.push(new PVector(138, 55));
					logo.push(new PVector(196, 167));
					logo.push(new PVector(164, 174));
					logo.push(new PVector(152, 142));
					logo.push(new PVector(132, 145));
					logo.push(new PVector(132, 179));
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
					logo = [];
					logo.push(new PVector(132, 93));
					logo.push(new PVector(131, 122));
					logo.push(new PVector(144, 119));
					fill(0,0,0);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
				}
				
				//E
				fill(255, 255, 0);
				{
					logo = [];
					logo.push(new PVector(304, 168));
					logo.push(new PVector(290, 300));
					logo.push(new PVector(370, 307));
					logo.push(new PVector(374, 277));
					logo.push(new PVector(322, 272));
					logo.push(new PVector(324, 249));
					logo.push(new PVector(358, 253));
					logo.push(new PVector(362, 227));
					logo.push(new PVector(327, 222));
					logo.push(new PVector(330, 202));
					logo.push(new PVector(376, 207));
					logo.push(new PVector(381, 175));
					//logo = subdivide(logo);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
				}  
				
				//Y
				fill(0,255,0);
				{
					logo = [];
					logo.push(new PVector(292, 47));
					logo.push(new PVector(323, 101));
					logo.push(new PVector(314, 163));
					logo.push(new PVector(343, 168));
					logo.push(new PVector(353, 107));
					logo.push(new PVector(393, 62));
					logo.push(new PVector(361, 45));
					logo.push(new PVector(343, 76));
					logo.push(new PVector(324, 37));
					
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y+20);   
					}    
					vertex(logo[0].x, logo[0].y+20);
					endShape();
				}
				
				//R
				fill(0, 106, 255);
				{
					logo = [];
					logo.push(new PVector(156, 53));
					logo.push(new PVector(156, 53));
					logo.push(new PVector(182, 174));
					logo.push(new PVector(182, 174));
					logo.push(new PVector(212, 169));
					logo.push(new PVector(212, 169));
					logo.push(new PVector(204, 129));
					logo.push(new PVector(204, 129));
					
					logo.push(new PVector(215, 127));
					logo.push(new PVector(215, 127));
					
					logo.push(new PVector(233, 163));
					logo.push(new PVector(233, 163));
					
					logo.push(new PVector(264, 157));
					logo.push(new PVector(264, 157));
					logo.push(new PVector(241, 116));
					logo.push(new PVector(241, 116));
					
					logo.push(new PVector(251, 91));
					logo.push(new PVector(243, 66));
					logo.push(new PVector(217, 43));
				
					logo = subdivide(logo);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y+10);   
					}    
					vertex(logo[0].x, logo[0].y+10);
					endShape();
					
					
					logo = [];
					logo.push(new PVector(192, 76));
					logo.push(new PVector(192, 76));
					logo.push(new PVector(197, 96));
					logo.push(new PVector(197, 96));
					logo.push(new PVector(215, 93));
					logo.push(new PVector(212, 75));
					
					logo = subdivide(logo);
					fill(0,0,0);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y+10);   
					}    
					vertex(logo[0].x, logo[0].y+10);
					endShape();
				}
				
				//G
				fill(255, 0, 0);
				{
					logo = [];
					logo.push(new PVector(144, 210));
					logo.push(new PVector(140, 181));
					logo.push(new PVector(55, 187));
					logo.push(new PVector(58, 297));
					logo.push(new PVector(148, 297));
					logo.push(new PVector(145, 235));
					logo.push(new PVector(96, 235));
					logo.push(new PVector(97, 255));
					logo.push(new PVector(125, 255));
					logo.push(new PVector(126, 270));
					logo.push(new PVector(82, 270));
					logo.push(new PVector(80, 210));
					//logo = subdivide(logo);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
				}
				
				//P
				fill(0,255,255);
				{   
					logo = [];
					logo.push(new PVector(20, 94));
					logo.push(new PVector(20, 94));
					logo.push(new PVector(54, 200));
					logo.push(new PVector(54, 200));
					logo.push(new PVector(87, 186));
					logo.push(new PVector(94, 186));
					logo.push(new PVector(78, 145));
					logo.push(new PVector(80, 145));
					logo.push(new PVector(115, 119));
					logo.push(new PVector(93, 56));
					
					logo = subdivide(logo);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
					
					
					logo = [];
					logo.push(new PVector(68, 119));
					logo.push(new PVector(68, 119));
					logo.push(new PVector(60, 100));
					logo.push(new PVector(60, 100));
					logo.push(new PVector(73,92));
					logo.push(new PVector(81,110));
					
					logo = subdivide(logo);
					fill(0,0,0);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
				}
				
				//T
				fill(184, 84, 255);
				{
					logo = [];
					logo.push(new PVector(225, 46));
					logo.push(new PVector(321, 47));
					logo.push(new PVector(322, 78));
					logo.push(new PVector(286, 78));
					logo.push(new PVector(288, 160));
					logo.push(new PVector(256, 159));
					logo.push(new PVector(256, 77));
					logo.push(new PVector(226, 76));
					
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y+10);   
					}    
					vertex(logo[0].x, logo[0].y+10);
					endShape();
				}
				
				//A
				fill(255, 20, 255);
				{
					logo = [];
					logo.push(new PVector(127, 297));
					logo.push(new PVector(150, 182));
					logo.push(new PVector(186, 180));
					logo.push(new PVector(230, 292));
					logo.push(new PVector(201, 296));
					logo.push(new PVector(187, 264));
					logo.push(new PVector(164, 266));
					logo.push(new PVector(158, 297));
					
					//logo = subdivide(logo);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
					
					logo = [];
					logo.push(new PVector(170, 212));
					logo.push(new PVector(164, 241));
					logo.push(new PVector(181, 239));
					
					
					//logo = subdivide(logo);
					fill(0,0,0);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
				}    
				
				//M
				fill(255,125,0);
				{
					logo = [];
					logo.push(new PVector(200, 293));
					logo.push(new PVector(201, 175));
					logo.push(new PVector(235, 174));
					logo.push(new PVector(250, 221));
					logo.push(new PVector(262, 171));
					logo.push(new PVector(294, 173));
					logo.push(new PVector(297, 292));
					logo.push(new PVector(267, 291));
					logo.push(new PVector(270, 231));
					logo.push(new PVector(253, 259));
					logo.push(new PVector(231, 227));
					logo.push(new PVector(231, 297));
					//logo = subdivide(logo);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
				}  
				
				images.push(get(0,0,400,400));
			};
			var drawStart6 = function(){
				var logo = [];
				background(0,0,0,0);
				strokeWeight(8);
				 //S
				fill(0, 130, 41);
				{
					logo = [];
					logo.push(new PVector(100, 80));
					logo.push(new PVector(20, 80));
					logo.push(new PVector(20, 150));
					logo.push(new PVector(70, 150));
					logo.push(new PVector(70, 180));
					logo.push(new PVector(20, 180));
					logo.push(new PVector(20, 204));
					logo.push(new PVector(100, 205));
					logo.push(new PVector(100, 125));
					logo.push(new PVector(45, 125));
					logo.push(new PVector(45, 103));
					logo.push(new PVector(100, 104));
					//logo = subdivide(logo);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y-20);   
					}    
					vertex(logo[0].x, logo[0].y-20);
					endShape();
				}
				
				//A
				fill(255,255,0);
				{
					logo = [];
					logo.push(new PVector(101, 180));
					logo.push(new PVector(108, 62));
					logo.push(new PVector(138, 55));
					logo.push(new PVector(196, 167));
					logo.push(new PVector(164, 174));
					logo.push(new PVector(152, 142));
					logo.push(new PVector(132, 145));
					logo.push(new PVector(132, 179));
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x+50, logo[i].y);   
					}    
					vertex(logo[0].x+50, logo[0].y);
					endShape();
					logo = [];
					logo.push(new PVector(132, 93));
					logo.push(new PVector(131, 122));
					logo.push(new PVector(144, 119));
					fill(0,0,0);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x+50, logo[i].y);   
					}    
					vertex(logo[0].x+50, logo[0].y);
					endShape();
				}
				
				 //T
				fill(0,255,255);
				{
					logo = [];
					logo.push(new PVector(73, 91));
					logo.push(new PVector(78, 63));
					logo.push(new PVector(168, 69));
					logo.push(new PVector(164, 98));
					logo.push(new PVector(136, 96));
					logo.push(new PVector(129, 181));
					logo.push(new PVector(99, 179));
					logo.push(new PVector(106, 93));
					//logo = subdivide(logo);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
				}
				
				//R
				fill(0, 106, 255);
				{
					logo = [];
					logo.push(new PVector(156, 53));
					logo.push(new PVector(156, 53));
					logo.push(new PVector(182, 174));
					logo.push(new PVector(182, 174));
					logo.push(new PVector(212, 169));
					logo.push(new PVector(212, 169));
					logo.push(new PVector(204, 129));
					logo.push(new PVector(204, 129));
					
					logo.push(new PVector(215, 127));
					logo.push(new PVector(215, 127));
					
					logo.push(new PVector(233, 163));
					logo.push(new PVector(233, 163));
					
					logo.push(new PVector(264, 157));
					logo.push(new PVector(264, 157));
					logo.push(new PVector(241, 116));
					logo.push(new PVector(241, 116));
					
					logo.push(new PVector(251, 91));
					logo.push(new PVector(243, 66));
					logo.push(new PVector(217, 43));
				
					logo = subdivide(logo);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x+50, logo[i].y+10);   
					}    
					vertex(logo[0].x+50, logo[0].y+10);
					endShape();
					
					
					logo = [];
					logo.push(new PVector(192, 76));
					logo.push(new PVector(192, 76));
					logo.push(new PVector(197, 96));
					logo.push(new PVector(197, 96));
					logo.push(new PVector(215, 93));
					logo.push(new PVector(212, 75));
					
					logo = subdivide(logo);
					fill(0,0,0);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x+50, logo[i].y+10);   
					}    
					vertex(logo[0].x+50, logo[0].y+10);
					endShape();
				}
				
				//T
				fill(255,0,0);
				{
					logo = [];
					logo.push(new PVector(290, 55));
					logo.push(new PVector(290, 90));
					logo.push(new PVector(324, 94));
					logo.push(new PVector(323, 175));
					logo.push(new PVector(355, 175));
					logo.push(new PVector(356, 93));
					logo.push(new PVector(386, 94));
					logo.push(new PVector(385, 60));
					
					//logo = subdivide(logo);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x-10, logo[i].y);   
					}    
					vertex(logo[0].x-10, logo[0].y);
					endShape();
				}

				
				images.push(get(0,0,400,200));
			};
			var drawHT7 = function(){
				var logo = [];
				strokeWeight(6);
				background(0,0,0,0);
				pushMatrix();
				scale(0.8,0.8);
				 //H
				fill(0, 130, 41);
				{
					logo = [];
					logo.push(new PVector(8, 63));
					logo.push(new PVector(7, 183));
					logo.push(new PVector(36, 185));
					logo.push(new PVector(36, 133));
					logo.push(new PVector(65, 133));
					logo.push(new PVector(64, 183));
					logo.push(new PVector(94, 185));
					logo.push(new PVector(96, 61));
					logo.push(new PVector(72, 62));
					logo.push(new PVector(70, 108));
					logo.push(new PVector(39, 107));
					logo.push(new PVector(40, 63));
					//logo = subdivide(logo);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y-20);   
					}    
					vertex(logo[0].x, logo[0].y-20);
					endShape();
				}
				
				
				//O
				fill(255,255,0);
				{
					logo = [];
					//logo.push(new PVector(88, 45));
					logo.push(new PVector(85, 147));
					logo.push(new PVector(164, 147));
					logo.push(new PVector(164, 28));
					logo.push(new PVector(87, 25));

					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
					logo = [];
					logo.push(new PVector(116, 59));
					logo.push(new PVector(115, 110));
					logo.push(new PVector(134, 109));
					logo.push(new PVector(136, 55));
					fill(0,0,0);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
				}

				 //w
				fill(0,255,255);
				{
					logo = [];
					logo.push(new PVector(150, 43));
					logo.push(new PVector(171, 159));
					logo.push(new PVector(198, 159));
					logo.push(new PVector(210, 121));
					logo.push(new PVector(220, 159));
					logo.push(new PVector(248, 159));
					logo.push(new PVector(272, 45));
					logo.push(new PVector(240, 45));
					logo.push(new PVector(232, 108));
					logo.push(new PVector(210, 82));
					logo.push(new PVector(188, 108));
					logo.push(new PVector(178, 38));
					//logo = subdivide(logo);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x, logo[i].y);   
					}    
					vertex(logo[0].x, logo[0].y);
					endShape();
				}
				
				
				//T
				fill(255,0,0);
				{
					logo = [];
					logo.push(new PVector(290, 55));
					logo.push(new PVector(290, 90));
					logo.push(new PVector(324, 94));
					logo.push(new PVector(323, 175));
					logo.push(new PVector(355, 175));
					logo.push(new PVector(356, 93));
					logo.push(new PVector(386, 94));
					logo.push(new PVector(385, 60));
					
					//logo = subdivide(logo);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x+10, logo[i].y-15);   
					}    
					vertex(logo[0].x+10, logo[0].y-15);
					endShape();
				}

				//O
				fill(58, 119, 242);
				{
					logo = [];
					//logo.push(new PVector(88, 45));
					logo.push(new PVector(85, 147));
					logo.push(new PVector(164, 147));
					logo.push(new PVector(164, 28));
					logo.push(new PVector(87, 25));

					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x+300, logo[i].y+10);   
					}    
					vertex(logo[0].x+300, logo[0].y+10);
					endShape();
					logo = [];
					logo.push(new PVector(116, 59));
					logo.push(new PVector(115, 110));
					logo.push(new PVector(134, 109));
					logo.push(new PVector(136, 55));
					fill(0,0,0);
					stroke(0,0,0);
					beginShape();
					for (var i = 0; i < logo.length; i++) {
						vertex(logo[i].x+300, logo[i].y+10);   
					}    
					vertex(logo[0].x+300, logo[0].y+10);
					endShape();
				}

				images.push(get(0,0,400,200));
				popMatrix();
			};
			var drawTile8 = function(){
				fill(240, 237, 201);
				stroke(0,0,0);
				strokeWeight(2);
				ellipse(200, 200, 380, 380);
				
				strokeWeight(10);
				stroke(140, 137, 101);
				var cx = 200;
				var cy = 200;
				var h = 100;//100; 
				var l = h/sqrt(0.75);
				var p = [];
				p.push(new PVector(cx-l/2, cy-h));
				p.push(new PVector(cx-l, cy));
				p.push(new PVector(cx-l/2, cy+h));
				
				p.push(new PVector(cx+l/2, cy+h));
				p.push(new PVector(cx+l, cy));
				p.push(new PVector(cx+l/2, cy-h));
				
				beginShape();
				for (var i = 0; i < p.length; i++) {
					vertex(p[i].x, p[i].y);   
				}    
				vertex(p[0].x, p[0].y);
				endShape();    
				beginShape();
				for (var i = 0; i < p.length; i++) {
					vertex(p[i].x, p[i].y-2*h);   
				}    
				vertex(p[0].x, p[0].y-2*h);
				endShape();  
				beginShape();
				for (var i = 0; i < p.length; i++) {
					vertex(p[i].x, p[i].y+2*h);   
				}    
				vertex(p[0].x, p[0].y+2*h);
				endShape();
				beginShape();
				for (var i = 0; i < p.length; i++) {
					vertex(p[i].x-l*3/2, p[i].y+h);   
				}    
				vertex(p[0].x-2*h, p[0].y+h);
				endShape();
				beginShape();
				for (var i = 0; i < p.length; i++) {
					vertex(p[i].x-l*3/2, p[i].y-h);   
				}    
				vertex(p[0].x-2*h, p[0].y-h);
				endShape();
				beginShape();
				for (var i = 0; i < p.length; i++) {
					vertex(p[i].x+l*3/2, p[i].y+h);   
				}    
				vertex(p[0].x+l*3/2, p[0].y+h);
				endShape();
				beginShape();
				for (var i = 0; i < p.length; i++) {
					vertex(p[i].x+l*3/2, p[i].y-h);   
				}    
				vertex(p[0].x+l*3/2, p[0].y-h);
				endShape();
				   
				images.push(get(0,0,400,400));
			};
			var drawFinish9 = function(){
				background(125, 125, 125);
				fill(0,0,0);
				noStroke();
				rect(0,0,100,100);
				rect(100,100,100,100);
				rect(200,0,100,100);
				rect(300,100,100,100);
				rect(0,200,100,100);
				rect(100,300,100,100);
				rect(200,200,100,100);
				rect(300,300,100,100);
				images.push(get(0,0,400,400));
			};
			var drawTileCircle10 = function(){
				background(0,0,0,0);
				for(var i = 0; i < 380; i++){
					noStroke();
					fill(163-i/2, 201-i/2, 255-i/5);
					ellipse(200, 200, 380-i, 380-i);
				}
				images.push(get(0,0,400,400));
			};

			//FIREWORKS STUFF			
			var explosionObj = function(a) {
				this.position = new PVector(0, 0);
				this.direction = new PVector(0, 0);
				this.size = random(1, 3)*2;
				if (a === 0) {
					this.c1 = random(0, 250);
				}
				else {
					this.c1 = random(100, 255);
				}
				if (a === 1) {
					this.c2 = random(0, 250);
				}
				else {
					this.c2 = random(100, 255);
				}
				if (a === 3) {
					this.c3 = random(0, 250);
				}
				else {
					this.c3 = random(100, 255);
				}
				this.timer = 0;
			};    
			var fireworkObj = function(a, x, y) {
				this.position = new PVector(200, 380);
				this.direction = new PVector(0, 0);
				this.target = new PVector(x, y);
				this.step = 0;
				this.explosions = [];
				for (var i = 0; i < 150; i++) {
					this.explosions.push(new explosionObj(a));   
				}    
			};    
			var firework = [];
			fireworkObj.prototype.draw = function() {
				fill(255, 255, 255);
				noStroke();
				ellipse(this.position.x, this.position.y, 2, 2);
				
				this.position.add(this.direction);
				if (Dist(this.position.x, this.position.y, this.target.x, this.target.y) < 4) {
					this.step = 2;
					for (var i = 0; i < this.explosions.length; i++) {
						this.explosions[i].position.set(this.target.x, this.target.y);
						
						this.explosions[i].direction.set(radians(random(0, 360)), random(-1, 3));
						this.explosions[i].timer = 360;
					}
				}    
			};
			explosionObj.prototype.draw = function() {
				fill(this.c1, this.c2, this.c3, this.timer*2);	// 4th value fader
				noStroke();
				ellipse(this.position.x, this.position.y, this.size, this.size);
				this.position.x += this.direction.y*cos(this.direction.x);
				this.position.y += this.direction.y*sin(this.direction.x);
				this.position.y += (90/(this.timer + 100));    //gravity
				this.timer--;
			};


			//Initialize Objects
			var WallObj = function(x, y){
				this.x = x;
				this.y = y;
			};
			WallObj.prototype.draw = function(){
				if ((this.y / tileSize) % 2 === 0){
					image(images[2], this.x, this.y, tileSize, tileSize);
				}
				else {
					image(images[3], this.x, this.y, tileSize, tileSize);
				}
			};

			var LogoObj = function(){
				this.maxSize = 300;
				this.size = 20;
				this.pos = new PVector(-12, 450);
				this.fadeStart = new PVector(0, 400);
				this.fading = 0;
				
			};
			LogoObj.prototype.draw = function() {    
				image(images[5], this.pos.x-this.size/2, this.pos.y-this.size/2, this.size, this.size);

			};
			LogoObj.prototype.fadeIn = function() {
				this.fading = 1;
				if (this.size < this.maxSize){ 
					var inc = 3;
					this.size += inc; 
					this.pos.x += 200*inc/280;
					var x = this.pos.x;
					var a = 1/75;
					var b = -11/3;
					var c = 400;
					this.pos.y = (a*sq(x) + b*x + c);
				}
				else {
					this.fading = 0;
				}
				this.draw();    
			};
			var LOGO = new LogoObj();

			var MapObj = function(){
				//XY is center of figure
				this.map = " ";
				this.x = mapSize/2;
				this.y = mapSize/2;
				this.scale = 0.1;
				this.state = 1;
				this.size = tileSize;
			};
			var MAP = new MapObj();

			var TileObj = function(x, y, n){
				this.x = x;
				this.y = y;
				this.num = n;
				this.size = tileSize;
			};
			TileObj.prototype.draw = function() {
				if (this === TILES[0]){
					this.x = 850;
					this.y = 2200;
					
					image(images[8], this.x-85, this.y, 100, 100);
					image(images[8], this.x,     this.y, 100, 100);
					image(images[8], this.x+85, this.y, 100, 100);
					image(images[8], this.x+170, this.y, 100, 100);
					image(images[8], this.x+255, this.y, 100, 100);
					
					image(images[8], this.x-85, this.y+100, 100, 100);
					image(images[8], this.x,     this.y+100, 100, 100);
					image(images[8], this.x+85, this.y+100, 100, 100);
					image(images[8], this.x+170, this.y+100, 100, 100);
					image(images[8], this.x+255, this.y+100, 100, 100);
					
					noFill();
					stroke(140, 137, 101);
					strokeWeight(10);
					rect(this.x-85, this.y, 440, 200);
					
					fill(74, 72, 55);
					textSize(60);
					text("START", this.x+tileSize/2-30, this.y+50);
				}
				else if (this === TILES[TILES.length-1]){
					this.x = 1450;
					this.y = 2200;
					image(images[9], this.x+90, this.y, 120, 120);
					image(images[9], this.x-30, this.y, 120, 120);
					image(images[9], this.x-150, this.y, 120, 120);
					image(images[9], this.x-210, this.y, 120, 120);
					image(images[9], this.x+90, this.y+120, 120, 120);
					image(images[9], this.x-30, this.y+120, 120, 120);
					image(images[9], this.x-150, this.y+120, 120, 120);
					image(images[9], this.x-210, this.y+120, 120, 120);
					
					fill(0,0,0);
					noStroke();
					rect(this.x-210, this.y+200, 450, 100);
					stroke(255, 255, 255);
					strokeWeight(10);
					noFill();
					rect(this.x-215, this.y, 430, 200);
					
					fill(255,255,255);
					textSize(120);
					text("FINISH", this.x-tileSize/2-130, this.y+140);
				}
				else{
					image(images[10], this.x-this.size/2, this.y-this.size/2, this.size, this.size);
					
					textSize(30);
					fill(0,0,0);
					fill(255, 255, 255);
					if (this.num < 10){
						text(this.num, this.x-tileSize/13, this.y+tileSize/12);
					}
					else{
						text(this.num, this.x-tileSize/8, this.y+tileSize/12);
					}
				}
			};

			var PlayerObj = function(p, x, y, d){
				//XY is center of figure
				this.role = p;
				this.x = x;
				this.y = y;
				this.size = d;
				this.tileLoc = 0;
				this.currLoc = 0;
				this.state = 0;
				this.score = 0;
				
				this.angle = 0;
				
				if(this.role === "computer"){
					this.offset = tileSize/3+10;
				}
				else {
					this.offset = -tileSize/3-10;
				}
			};

			var PLAYER = new PlayerObj("human",0,0,tileSize);
			var COMPUTER = new PlayerObj("computer",0,0,tileSize);


			var mouseClicked = function() {
				if (Mode === 0){
					//70,310,100,40 start
					if (mouseX > 70 && mouseX < 170 && mouseY > 310 && mouseY < 350 ){
						PLAYER.x = 900;
						PLAYER.y = 2300;
						PLAYER.size = 140;
						COMPUTER.x = 1100;
						COMPUTER.y = 2300;
						COMPUTER.size = 140;
						Mode = 1; 
					}   
					//220, 310, 150, 60 howto
					if (mouseX > 220 && mouseX < 220+150 && mouseY > 310 && mouseY < 350 ){
						Mode = -1;   
					}
				}    
				else if (Mode === -1) {
					Mode = 0;
				}
			};
			var keyPressed = function() { keyArray[keyCode] = 1;};
			var keyReleased = function() {keyArray[keyCode] = 0;};

			PlayerObj.prototype.draw = function() {
				if(this.role === "human"){
					image(images[0], this.x-this.size/2, this.y-this.size/2, this.size, this.size);
				}
				else{
					image(images[1], this.x-this.size/2, this.y-this.size/2, this.size, this.size);
				}
			};
			PlayerObj.prototype.move = function() {
				this.x += this.dx/100;
				this.y += this.dy/100;
			};
			PlayerObj.prototype.fadeIn = function() {
				var distFromCenter = 160;
				if (this.size < 150){
					this.size += 150/distFromCenter;
					if(this.x < 200-distFromCenter){
						this.x += 1;
					}
					if(this.x > 200+distFromCenter){
						this.x -= 1;
					}
					
					this.y -= 1.3;
					
					if(this.x < 150){  this.angle += 5;  }
					if(this.x > 250){  this.angle -= 5;  }
			   

				}
				
				pushMatrix();
				translate(this.x, this.y);
				rotate(radians(this.angle));
				if(this.role === "human"){
				  image(images[0], 0 - this.size/2, 0 - this.size/2, this.size, this.size);
				}
				else{
				  image(images[1], 0 - this.size/2, 0 - this.size/2, this.size, this.size);
				}
				popMatrix();
			};
			PlayerObj.prototype.makeMove = function(){
				centerX = this.x;
				centerY = this.y-50;
				switch(this.state){
					case 0:{//waiting
						if(this.tileLoc === TILES.length-1){
							this.state = 4;
						}
						else{
							if (this.role === "computer"){
								count++;
								if (count === 100){
									this.state = 1;
									CountLimit = floor(random(50,120));
									count = 0;
								}
							}
							else {
								if (keyArray[UP] === 1){
									this.state = 1;
								}
							}
							image(images[4], 160, 100, 80, 80);
							textSize(50);
							text(dice, 185, 157);
						}
						break;
					}
					case 1:{//rolling
						dice = (dice + 1) % 6 + 1;
						if(this.role === "computer"){
							count++;
							if (count === CountLimit){
								this.state = 2;
								count = 0;
								this.tileLoc += dice;
								if (this.tileLoc > TILES.length-1 ){
									this.tileLoc = TILES.length-1;
								}
								this.currLoc++;
							}
						}
						else {
							if (keyArray[ENTER] === 1){
								this.state = 2;
								this.tileLoc += dice;
								if (this.tileLoc > TILES.length-1 ){
									this.tileLoc = TILES.length-1;
								}
								this.currLoc++;
							}
						}
						image(images[4], 160, 100, 80, 80);
						textSize(50);
						text(dice, 185, 157);
						break;
					}
					case 2:{//pause
						image(images[4], 160, 100, 80, 80);
						textSize(50);
						text(dice, 185, 157);
						count++;
						if(count > 100){ 
							count = 0; 
							this.state = 3; 
							this.dx = TILES[this.currLoc].x - this.x;
							this.dy = TILES[this.currLoc].y - this.y;
						}
						
						break;
					}
					case 3:{//move
						var dist = 0;
						if (this.currLoc === this.tileLoc){
							dist = Dist(TILES[this.currLoc].x+this.offset, TILES[this.currLoc].y, this.x, this.y);
						}
						else {
							dist = Dist(TILES[this.currLoc].x, TILES[this.currLoc].y, this.x, this.y);
						}
						text(dist, 10, 100);
						if (dist > 10){
							this.move();
						}
						else{
							if (this.currLoc === this.tileLoc){
								this.state = 4;
							}
							else{
								this.currLoc++;
								if (this.currLoc === this.tileLoc){
									this.dx = TILES[this.currLoc].x - this.x + this.offset;
									this.dy = TILES[this.currLoc].y - this.y;
								}
								else {
									this.dx = TILES[this.currLoc].x - this.x;
									this.dy = TILES[this.currLoc].y - this.y;
								}
							}
						}
						break;
					}
					case 4:{//pause
						count++;
						if(count > 100){ 
							count = 0; 
							if (this.role === "computer"){
								Mode = 2;
							}
							else {
								Mode = 3;
							}
							this.state = 0;
							this.state = 0;
						}
						if(this.tileLoc === TILES.length-1 && PLAYER.tileLoc === TILES.length-1){
							Mode = 4;
							PLAYER.score += 10;
							COMPUTER.score += 10;
							this.score -=10;
						}
						break;
					}
				}
				

			};

			MapObj.prototype.init = function(){
				for (var row = 0; row < this.map.length; row++){
					for (var col = 0; col < this.map[row].length; col++){
						if(this.map[row].charAt(col)==="w"){
							WALLS.push(new WallObj(col*tileSize,row*tileSize));
						}
					} 
				}
				var i = 0;
				for(var an = 110; an < 440; an += 13){
					var angle = radians(an);
					var x = (mapSize/2.5*cos(angle) + mapSize/2 );
					var y = (mapSize/2.5*sin(angle) + mapSize/2 );
					TILES.push( new TileObj(x,y, i) );
					i++;
				}
				
				COMPUTER.x = TILES[0].x + 1*tileSize;
				COMPUTER.y = TILES[0].y + 0.5*tileSize;
				PLAYER.x = TILES[0].x;
				PLAYER.y = TILES[0].y + 0.5*tileSize;

			};

			var drawZoomBoard = function(){
				pushMatrix();
				
				var transX = 200-centerX;
				var transY = 200-centerY;
				
				scale(MAP.scale, MAP.scale);
				
				translate(transX, transY);
				
				for(var t = 0; t < TILES.length; t++){
					TILES[t].draw();
				}
				
				if (MAP.scale < 1){
					MAP.scale += 0.01;
					centerX += (1500)*0.01 + 1.55;
					centerY += (2445)*0.01 + 5;
				}
				else {
					count++;
					if (count > 275){
						Mode = 2;
						count = 0;
					}
					else if (count > 100 && centerX > 900){
						centerX--;
						if (centerX < 900){
							centerX = 900;
						}
					}
				}
				
				PLAYER.draw();
				COMPUTER.draw();
				
				popMatrix();
				textSize(30);
				
			};
			var drawBoard = function(){
				pushMatrix();
				var transX = 200-centerX;
				var transY = 200-centerY;
				translate(transX, transY+20);
				
				for(var t = 0; t < TILES.length; t++){
					TILES[t].draw();
				}
				
				PLAYER.draw();
				COMPUTER.draw();
				
				popMatrix();
				textSize(30);
			};
			var drawMenu = function(){
				noStroke();
				background(0, 0, 0);
				
				count++;
				if (count > 60){
					shootFireworks = 1;
					firework.push(new fireworkObj(0, 200, 200));
					//firework.push(new fireworkObj(1, 200, 200));
					count = 0;
				}
				
				if (shootFireworks === 1 && PLAYER.size > 150){
					shootFireworks = 0;
					for (var j = 0; j < firework.length; j++) {
						if (firework[j].step === 0) {
							firework[j].position.set(200, 200);
							firework[j].direction.set(firework[j].target.x - firework[j].position.x, firework[j].target.y - firework[j].position.y);
							var s = 2;//random(1, 2) / 100;
							firework[j].direction.mult(s);
							firework[j].step++;
							shootFireworks = 1;
						} 
						else if (firework[j].step === 1) {
							firework[j].draw();
							shootFireworks = 1;
						} 
						else if (firework[j].step === 2) {
							for (var i = 0; i < firework[j].explosions.length; i++) {
								firework[j].explosions[i].draw();   
							} 
							if (firework[j].explosions[0].timer > 0){
								shootFireworks = 1;
							}
						}
					}
				}
				
				
				LOGO.fadeIn();
				if (LOGO.fading === 1){
					PLAYER.x = 0;
					PLAYER.y = 400;
					PLAYER.size = 10;
					PLAYER.angle = -40;
					COMPUTER.x = 400;
					COMPUTER.y = 400;
					COMPUTER.size = 10;
					COMPUTER.angle = 40;
				}	
				else {
					if (LOGO.fading === 0){
						PLAYER.fadeIn();
						COMPUTER.fadeIn();
						image(images[6], 70, 300, 110, 50);
						image(images[7], 220, 310, 110, 60);
					}
				}
			};
			var drawHeader = function(){
				fill(0,0,0);
				stroke(255,255,255);
				strokeWeight(2);
				rect(-5,-5,410,70);
				
				stroke(255,255,255);
				strokeWeight(2);
				ellipse(40,40,80,80);
				ellipse(360,40,80,80);
				image(images[0], 40-40, 40-40, 80, 80);
				image(images[1], 360-40, 40-40, 80, 80);
				fill(255,255,255);
				textSize(18);
				text("points: "+ PLAYER.score, 85, 40);
				text("points: "+ PLAYER.score, 240, 40);
				
			};

			var draw = function() {
				switch(Mode){
					//Make characters
					case -2: {
						drawPlayerImg();
						drawComputerImg();
						drawWall2();
						drawWall3();
						drawBlock4();
						drawLogo5();
						drawStart6();
						drawHT7();
						drawTile8();
						drawFinish9();
						drawTileCircle10();
						MAP.init();
						
						Mode = 0;
						break;
					}
					//HowTo
					case -1: {
						background(0,0,0);
						image(images[7], 50, 10, 300, 120);
						fill(255, 255, 255);
						textSize(12);
						text("Click Anywhere For Menu", 120, 100);
						
						
						
						textSize(18);
						image(images[0], 10, 120, 50, 50);
						text(" - Human player : This is your character", 60, 150);
						
						image(images[1], 10, 170, 50, 50);
						text(" - Computer player : This is your opponent", 60, 200);
						
						
						text(" - When it is your turn, click the up arrow to start \n rolling the dice and enter to stop rolling it. You \n will move that many spaces. After you and the \n computer have taken turns, You will play a \n quick mini game. The winner gets 10 points. \n The first person to get to the finish line recieves \n 10 points. The player that reaches the finish \n line with the most points wins.", 5, 240);
						
						break;
					}
					//MENU
					case 0: {
						drawMenu();
						fill(255,255,255);
						textSize(14);
						text("By: Stephanie Harvey", 120, 390);
						break;
					}
					//Entrance
					case 1: {
						background(0,0,0);
						drawZoomBoard();
						PLAYER.state = 0;
						break;
					}
					//Players Turn
					case 2: {
						background(0,0,0);
						drawBoard();
						fill(232, 225, 160);
						PLAYER.makeMove();
						
			/* 			switch(PLAYER.state){
							case 0:{//waiting
								if(PLAYER.tileLoc === TILES.length-1){
									PLAYER.state = 4;
								}
								else{
									if (keyArray[UP] === 1){
										PLAYER.state = 1;
									}
									image(images[4], 160, 100, 80, 80);
									textSize(50);
									text(dice, 185, 157);
								}
								break;
							}
							case 1:{//rolling
								dice = (dice + 1) % 6 + 1;
								if (keyArray[ENTER] === 1){
									PLAYER.state = 2;
									PLAYER.tileLoc += dice;
									if (PLAYER.tileLoc > TILES.length-1 ){
										PLAYER.tileLoc = TILES.length-1;
									}
									PLAYER.currLoc++;
								}
								image(images[4], 160, 100, 80, 80);
								textSize(50);
								text(dice, 185, 157);
								break;
							}
							case 2:{//pause
								image(images[4], 160, 100, 80, 80);
								textSize(50);
								text(dice, 185, 157);
								count++;
								if(count > 100){ 
									count = 0; 
									PLAYER.state = 3; 
									PLAYER.dx = TILES[PLAYER.currLoc].x - PLAYER.x;
									PLAYER.dy = TILES[PLAYER.currLoc].y - PLAYER.y;
								}
								
								break;
							}
							case 3:{//move
								var dist = 0;
								if (PLAYER.currLoc === PLAYER.tileLoc){
									dist = sqrt(sq(TILES[PLAYER.currLoc].x-tileSize/3 - PLAYER.x) + sq(TILES[PLAYER.currLoc].y - PLAYER.y));
								}
								else {
									dist = sqrt(sq(TILES[PLAYER.currLoc].x - PLAYER.x) + sq(TILES[PLAYER.currLoc].y - PLAYER.y));
								}
								if (dist > 10){
									PLAYER.move();
								}
								else{
									if (PLAYER.currLoc === PLAYER.tileLoc){
										PLAYER.state = 4;
									}
									else{
										PLAYER.currLoc++;
										if (PLAYER.currLoc === PLAYER.tileLoc){
											PLAYER.dx = TILES[PLAYER.currLoc].x - PLAYER.x - tileSize/3;
											PLAYER.dy = TILES[PLAYER.currLoc].y - PLAYER.y;
										}
										else {
											PLAYER.dx = TILES[PLAYER.currLoc].x - PLAYER.x;
											PLAYER.dy = TILES[PLAYER.currLoc].y - PLAYER.y;
										}
									}
								}
								break;
							}
							case 4:{//pause
								count++;
								if(count > 100){ 
									count = 0; 
									Mode = 3;
									PLAYER.state = 0;
									COMPUTER.state = 0;
								}
								
								if(PLAYER.tileLoc === TILES.length-1 && COMPUTER.tileLoc === TILES.length-1){
									COMPUTER.score += 10;
									Mode = 4;
								}
								
								
								break;
							}
						} */
						break;
					}
					//COMPUTERS TURN
					case 3: {
						background(0,0,0);
						drawBoard();
						fill(232, 225, 160);
						COMPUTER.makeMove();
						/* switch(COMPUTER.state){
							case 0:{//waiting
								if(COMPUTER.tileLoc === TILES.length-1){
									COMPUTER.state = 4;
								}
								else{
									count++;
									if (count === 100){
										COMPUTER.state = 1;
										CountLimit = floor(random(50,120));
										count = 0;
									}
									image(images[4], 160, 100, 80, 80);
									textSize(50);
									text(dice, 185, 157);
								}
								break;
							}
							case 1:{//rolling
								dice = (dice + 1) % 6 + 1;
								count++;
								if (count === CountLimit){
									COMPUTER.state = 2;
									count = 0;
									COMPUTER.tileLoc += dice;
									if (COMPUTER.tileLoc > TILES.length-1 ){
										COMPUTER.tileLoc = TILES.length-1;
									}
									COMPUTER.currLoc++;
								}
								image(images[4], 160, 100, 80, 80);
								textSize(50);
								text(dice, 185, 157);
								break;
							}
							case 2:{//pause
								image(images[4], 160, 100, 80, 80);
								textSize(50);
								text(dice, 185, 157);
								count++;
								if(count > 100){ 
									count = 0; 
									COMPUTER.state = 3; 
									COMPUTER.dx = TILES[COMPUTER.currLoc].x - COMPUTER.x;
									COMPUTER.dy = TILES[COMPUTER.currLoc].y - COMPUTER.y;
								}
								
								break;
							}
							case 3:{//move
								var dist = 0;
								if (COMPUTER.currLoc === COMPUTER.tileLoc){
									dist = sqrt(sq(TILES[COMPUTER.currLoc].x+tileSize/3 - COMPUTER.x) + sq(TILES[COMPUTER.currLoc].y - COMPUTER.y));
								}
								else {
									dist = sqrt(sq(TILES[COMPUTER.currLoc].x - COMPUTER.x) + sq(TILES[COMPUTER.currLoc].y - COMPUTER.y));
								}
								if (dist > 10){
									COMPUTER.move();
								}
								else{
									if (COMPUTER.currLoc === COMPUTER.tileLoc){
										COMPUTER.state = 4;
									}
									else{
										COMPUTER.currLoc++;
										if (COMPUTER.currLoc === COMPUTER.tileLoc){
											COMPUTER.dx = TILES[COMPUTER.currLoc].x - COMPUTER.x +tileSize/3;
											COMPUTER.dy = TILES[COMPUTER.currLoc].y - COMPUTER.y;
										}
										else {
											COMPUTER.dx = TILES[COMPUTER.currLoc].x - COMPUTER.x;
											COMPUTER.dy = TILES[COMPUTER.currLoc].y - COMPUTER.y;
										}
									}
								}
								break;
							}
							case 4:{//pause
								count++;
								if(count > 100){ 
									count = 0; 
									Mode = 2;
									COMPUTER.state = 0;
									COMPUTER.state = 0;
								}
								
								
								if(COMPUTER.tileLoc === TILES.length-1 && PLAYER.tileLoc === TILES.length-1){
									Mode = 4;
									PLAYER.score += 10;
								}
								
								
								break;
							}
						} */
						break;
					}
					//Game Over
					case 4:{
						background(0,0,0);
						drawBoard();
						text("Game Over", 110, 150);
						if(PLAYER.score > COMPUTER.score){
							text("You Win", 170, 200);
						}
						else if(PLAYER.score < COMPUTER.score){
							text("You Lose", 170, 200);
						}
						else if(PLAYER.score === COMPUTER.score){
							text("TIE", 170, 200);
						}
						
						
						break;
					}
					
				}
				
				if (Mode === 2 || Mode === 3){
					drawHeader();
				}
				//debugging();
			};    

			
			
			
		}
		
		
		
    }
};    


var canvas = document.getElementById("finalProject"); 
var processingInstance = new Processing(canvas, sketchProc); 



