
var sketchProc = function(processingInstance) {
    with (processingInstance) {
        size(400,400);
		
		{
			//Variables for Game Play
			angleMode = "radians";
			var MainGameMode = -2; 
			var keyArray = [];
			var dif = 10;
			var images = [];
			var tileSize = 140;

			var count = 0;
			var CountLimit = 0;
			var shootFireworks = 0;
			var offset = -400;

			var centerX = -500;
			var centerY = -400;

			var mapSize = tileSize*18;

			var HEADER;
			var DICE;
			var STARS;
			var PLAYER;
			var COMPUTER;
			var MINIGAMES;
			var TILES;
			var firework;
			var MiniGame;


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

			//FOR MAIN GAME
			var drawPlayerImg = function(){
				drawBlob(0, 200, 150);
				images.push(get(0, 0, width, height));
			};
			var drawComputerImg = function(){
				drawBlob(244, 66, 110);
				images.push(get(0, 0, width, height));
			};
			var drawFinish2 = function(){
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
			var drawTileCircle3 = function(){
				background(0,0,0,0);
				for(var i = 0; i < 380; i++){
					noStroke();
					fill(163-i/2, 201-i/2, 255-i/5);
					ellipse(200, 200, 380-i, 380-i);
				}
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
			var drawStartTile8 = function(){
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
			var drawMiniGameTile9 = function(){
				background(0,0,0, 0);
				noStroke();
				var dr = (255-200)/50;
				var dg =(251-100)/50;
				var db = 0;
				for (var h = 0; h < 100; h++){
					fill(200+dr*h, 100+dg*h, db*h);
					rect(10+h/2, 10+h/2, 380-h,100-h, 30);
				}
				
				images.push(get(0,0,400,120));
			};


			var starObj= function(){
				this.r = floor(random(0, 300));
				this.speed = random(0.001, 2);
				this.x = 200;
				this.y = 200;
				this.angle = random(0, 2*PI);
			};
			starObj.prototype.move = function(){
				this.r += this.speed;
				this.x = 200+this.r*cos(this.angle);
				this.y = 200+this.r*sin(this.angle);
				
				if (this.y > 400 || this.y < 0 || this. x > 400 || this.x < 0 ){
					this.r = 0;
				}
				
			};
			starObj.prototype.draw = function(){
				ellipse(this.x, this.y, 5, 5);
			};

			//--------------FOR PIG MINI GAME--------------
			var MiniGameMode = 0;
			var pigImages = [];
			var pigTileSize = 40;
			var pigGameMap = [ "wwwwwwwwww",
							"wp---w---w",
							"wwww-www-w",
							"w--------w",
							"w-wwww-w-w",
							"w------w-w",
							"www-wwww-w",
							"w---w----w",
							"w-wwwwww-w",
							"w--------w",
							"wwwwwwwwww"];

			var PIG_WALLS = [];
			var PIG;
			var PIG_GLASSES;


			var drawPig0 = function(){
				background(0,0,0,0);
				var pig = [];
				
				fill(250, 181, 255);
				{
					pig = [];
					pig.push(new PVector(200, 90));
					pig.push(new PVector(130, 100));
					pig.push(new PVector(90, 130));
					pig.push(new PVector(70, 180));
					pig.push(new PVector(70, 240));
					pig.push(new PVector(90, 280));
					pig.push(new PVector(130, 310));
					pig.push(new PVector(200, 320));
					pig.push(new PVector(270, 310));
					pig.push(new PVector(310, 280));
					pig.push(new PVector(330, 240));
					pig.push(new PVector(330, 180));
					pig.push(new PVector(310, 130));
					pig.push(new PVector(270, 100));
					pig.push(new PVector(200, 90));
					
					pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x, pig[i].y);   
					}    
					vertex(pig[0].x, pig[0].y);
					endShape();
				}
				
				fill(250, 181, 255);
				{
					pig = [];
					pig.push(new PVector(271, 110));
					pig.push(new PVector(271, 110));
					pig.push(new PVector(288, 75));
					pig.push(new PVector(318, 54));
					pig.push(new PVector(309, 84));
					pig.push(new PVector(297, 132));
					
					pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x, pig[i].y);   
					}    
					vertex(pig[0].x, pig[0].y);
					endShape();
					
					
					
					
					fill(157, 93, 163);
					pig = [];
					pig.push(new PVector(316, 64));
					pig.push(new PVector(309, 135));
					pig.push(new PVector(292, 126));
					
					//pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x, pig[i].y);   
					}    
					vertex(pig[0].x, pig[0].y);
					endShape();
				}
				
				fill(250, 181, 255);
				{
					pig = [];
					pig.push(new PVector(133, 109));
					pig.push(new PVector(133, 109));
					pig.push(new PVector(119, 68));
					pig.push(new PVector(85, 62));
					pig.push(new PVector(85, 62));
					pig.push(new PVector(115, 112));
					pig.push(new PVector(110, 122));
					
					pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x, pig[i].y);   
					}    
					vertex(pig[0].x, pig[0].y);
					endShape();
					
					
					fill(157, 93, 163);
					pig = [];
					pig.push(new PVector(85, 64));
					pig.push(new PVector(104, 128));
					pig.push(new PVector(118, 118));
					pig.push(new PVector(104, 94));
					
					//pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x, pig[i].y);   
					}    
					vertex(pig[0].x, pig[0].y);
					endShape();
				}
				
				fill(188, 104, 196);
				{
					pig = [];
					pig.push(new PVector(200, 210));
					pig.push(new PVector(175, 215));
					pig.push(new PVector(160, 240));
					pig.push(new PVector(175, 265));
					pig.push(new PVector(200, 270));
					pig.push(new PVector(225, 265));
					pig.push(new PVector(240, 240));
					pig.push(new PVector(225, 215));
					
					pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x, pig[i].y);   
					}    
					vertex(pig[0].x, pig[0].y);
					endShape();
				}
				
				fill(250, 181, 255);
				{
					pig = [];
					pig.push(new PVector(180, 230));
					pig.push(new PVector(170, 240));
					pig.push(new PVector(180, 250));
					pig.push(new PVector(190, 240));
					
					pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x, pig[i].y);   
					}    
					vertex(pig[0].x, pig[0].y);
					endShape();
					
					pig = [];
					pig.push(new PVector(180, 230));
					pig.push(new PVector(170, 240));
					pig.push(new PVector(180, 250));
					pig.push(new PVector(190, 240));
					
					pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x+40, pig[i].y);   
					}    
					vertex(pig[0].x+40, pig[0].y);
					endShape();
				}   
				
				fill(255,255,255);
				{
					pig = [];
					pig.push(new PVector(156, 220));
					pig.push(new PVector(128, 197));
					pig.push(new PVector(131, 167));
					pig.push(new PVector(150, 147));
					pig.push(new PVector(167, 166));
					pig.push(new PVector(171, 200));
					
					pig = subdivide(pig);
					pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x, pig[i].y);   
					}    
					vertex(pig[0].x, pig[0].y);
					endShape();
					
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x+100, pig[i].y);   
					}    
					vertex(pig[0].x+100, pig[0].y);
					endShape();
				}
				
				fill(0,0,0);
				{
					pig = [];
					pig.push(new PVector(155, 200));
					pig.push(new PVector(135, 197));
					pig.push(new PVector(140, 167));
					pig.push(new PVector(150, 157));
					pig.push(new PVector(160, 166));
					pig.push(new PVector(160, 190));
					
					pig = subdivide(pig);
					pig = subdivide(pig);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x, pig[i].y);   
					}    
					vertex(pig[0].x, pig[0].y);
					endShape();
					
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < pig.length; i++) {
						vertex(pig[i].x+100, pig[i].y);   
					}    
					vertex(pig[0].x+100, pig[0].y);
					endShape();
				}
				
				noFill();
				strokeWeight(8);
				arc(200, 260, 150, 60, radians(10), radians(170));
				
				
				pigImages.push(get(0,0,400,400));
			};
			var drawSunglasses1 = function(){
				background(0,0,0,0);
				var glasses = [];
				fill(50, 160, 250);
				{   
					glasses = [];
					glasses.push(new PVector(113, 156));
					glasses.push(new PVector(77, 164));
					glasses.push(new PVector(72, 185));
					glasses.push(new PVector(121, 166));
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < glasses.length; i++) {
						vertex(glasses[i].x, glasses[i].y);   
					}    
					vertex(glasses[0].x, glasses[0].y);
					endShape();
					
							
					glasses = [];
					glasses.push(new PVector(200+200-130, 153));
					glasses.push(new PVector(200+200-77, 164));
					glasses.push(new PVector(200+200-72, 185));
					glasses.push(new PVector(200+200-121, 166));
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < glasses.length; i++) {
						vertex(glasses[i].x, glasses[i].y);   
					}    
					vertex(glasses[0].x, glasses[0].y);
					endShape();
					
					glasses = [];
					glasses.push(new PVector(115, 145));
					glasses.push(new PVector(115, 145));
					glasses.push(new PVector(281, 145));
					glasses.push(new PVector(281, 145));
					glasses.push(new PVector(286, 218));
					glasses.push(new PVector(224, 218));
					glasses.push(new PVector(221, 165));
					glasses.push(new PVector(176, 165));
					glasses.push(new PVector(178, 216));
					glasses.push(new PVector(115, 218));
					glasses = subdivide(glasses);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < glasses.length; i++) {
						vertex(glasses[i].x, glasses[i].y);   
					}    
					vertex(glasses[0].x, glasses[0].y);
					endShape();
					
				}

				fill(181, 181, 181);
				{
					glasses = [];
					glasses.push(new PVector(125, 155));
					glasses.push(new PVector(125, 155));
					glasses.push(new PVector(126, 205));
					glasses.push(new PVector(166, 205));
					glasses.push(new PVector(166, 155));
					glasses.push(new PVector(166, 155));
					glasses = subdivide(glasses);
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < glasses.length; i++) {
						vertex(glasses[i].x, glasses[i].y);   
					}    
					vertex(glasses[0].x, glasses[0].y);
					endShape();
					
					stroke(0,0,0);
					strokeWeight(2);
					beginShape();
					for (var i = 0; i < glasses.length; i++) {
						vertex(glasses[i].x+106, glasses[i].y);   
					}    
					vertex(glasses[0].x+106, glasses[0].y);
					endShape();
				}
				
				
				pigImages.push(get(0,0,400,400));
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
				
				pigImages.push(get(0,0,width,height));
				
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
				
				pigImages.push(get(0,0,width,height));
				
			};

			var wallObj = function(x, y){
				this.x = x;
				this.y = y;
				this.size = pigTileSize;
			};
			wallObj.prototype.draw = function(){
				if (this.y % 2 === 0){
					image(pigImages[2], this.x*pigTileSize, this.y*pigTileSize, this.size, this.size);
				}
				else {
					image(pigImages[3], this.x*pigTileSize, this.y*pigTileSize, this.size, this.size);
				}
			};

			var pigObj = function(x, y){
				this.size = pigTileSize+10;
				this.x = x;
				this.y = y;
				this.drawX = this.x*pigTileSize;
				this.drawY = this.y*pigTileSize;
				this.path = [];
				this.speed = 1;
				this.pathLength = 0;
			};
			pigObj.prototype.draw = function(){
				image(pigImages[0], this.drawX-5, this.drawY-5, this.size, this.size);
			};
			pigObj.prototype.move = function(){
				if (this.path.length > 0){
					var IDX = this.path.length-1;
					while(this.path[IDX] === null){
						this.path.splice(IDX, 1);
						IDX = this.path.length-1;
					}
					
					
					var dx = (this.path[IDX].x*pigTileSize > this.drawX) ? this.speed: (this.path[IDX].x*pigTileSize < this.drawX) ? -this.speed: 0;
					
					var dy = (this.path[IDX].y*pigTileSize > this.drawY) ? this.speed: (this.path[IDX].y*pigTileSize < this.drawY) ? -this.speed: 0;
					
					if (abs(dx) > abs(this.path[IDX].x*pigTileSize - this.drawX)){
						dx = abs(this.path[IDX].x*pigTileSize - this.drawX)*this.speed/dx;
					}
					if (abs(dy) > abs(this.path[IDX].y*pigTileSize - this.drawY)){
						dy = abs(this.path[IDX].y*pigTileSize - this.drawY)*this.speed/dy;
					}
					
					
					this.drawX += dx;
					this.drawY += dy;
					
					if (dx === 0 && dy === 0){
						this.x = this.path[IDX].x;
						this.y = this.path[IDX].y;
						this.path.splice(IDX, 1);
					}
					
				}
			};

			var glassesObj = function(){
				this.x = floor(random(0, pigGameMap[0].length));
				this.y = floor(pigGameMap.length*random(0.5, 1));
				this.size = pigTileSize+10;
				while(pigGameMap[this.y].charAt(this.x) === "w"){
					this.x = floor(random(0, pigGameMap[0].length));
					this.y = floor(pigGameMap.length*random(0.5, 1));
				}
			};
			glassesObj.prototype.draw = function() {
				image(pigImages[1], this.x*pigTileSize-5, this.y*pigTileSize-5, this.size, this.size);
			};
			PIG_GLASSES = new glassesObj();

			var PigMapObj = function(){
				var row = 0;
				var col = 0;
				this.lastUp = 0;
				this.time = 0;
				for (row = 0; row < pigGameMap.length; row++){
					for (col = 0; col < pigGameMap[row].length; col++){
						switch(pigGameMap[row].charAt(col)){
							case "w": 
								PIG_WALLS.push(new wallObj(col, row));
							break;
							case "p": 
								PIG = new pigObj(col, row);
							break;
						}
					} 
				}
				PIG_GLASSES = new glassesObj();
			};
			PigMapObj.prototype.draw = function() {
				pushMatrix();
				translate(0, -pigTileSize);
				background(0,0,0);
				for(var w = 0; w < PIG_WALLS.length; w++){
					PIG_WALLS[w].draw(); 
				}
				
				PIG.move();
				PIG.draw();
				PIG_GLASSES.draw();
				popMatrix();
			};
			PigMapObj.prototype.play = function(){
				if(PIG.path.length > 0){
					if (this.lastUp === 1 && keyArray[UP] === 0){
						PIG.speed += 0.2;
					}
				}
				this.lastUp = keyArray[UP];
				if (PIG.x === PIG_GLASSES.x && PIG.y === PIG_GLASSES.y){
					MiniGameMode = 2;  
					this.computerTime = PIG.pathLength*12 + floor(random(90, 130));
				}
				else {
					this.time++;
				}
			};
			var PIG_MAP = new PigMapObj();

			var NodeObj = function(x, y){
				this.x = x;
				this.y = y;
				this.Neighbors = [];
				this.g = 1000000000;
				this.f = 1000000000;
				this.cameFrom = null;
			};
			NodeObj.prototype.findNeighbors = function(){
				this.Neighbors = [];
				if (pigGameMap[this.y].charAt(this.x+1) !== "w" ){
					this.Neighbors.push(new NodeObj(this.x+1, this.y)); 
				}
				if (pigGameMap[this.y].charAt(this.x-1) !== "w" ){
					this.Neighbors.push(new NodeObj(this.x-1, this.y)); 
				}
				if (pigGameMap[this.y+1].charAt(this.x) !== "w" ){
					this.Neighbors.push(new NodeObj(this.x, this.y+1)); 
				}
				if (pigGameMap[this.y-1].charAt(this.x) !== "w" ){
					this.Neighbors.push(new NodeObj(this.x, this.y-1)); 
				}
			};
			var reconstructedPath = function(cameFrom, current){
				var totalPath = [];
				totalPath.push(current);
				while(current !== null){
					current = current.cameFrom;
					totalPath.push(current);
				}
				return totalPath;
			};
			var AStar = function(startX, startY, endX, endY){
				// The set of nodes already evaluated
				var closedSet = [];

				// The set of currently discovered nodes that are not evaluated yet.
				// Initially, only the start node is known.
				var start = new NodeObj(startX, startY);
				start.g = 0;
				start.f = dist(startX, startY, endX, endY);
				start.cameFrom = null;
				var openSet = [start];
				
				// For each node, which node it can most efficiently be reached from.
				// If a node can be reached from many nodes, cameFrom will eventually contain the
				// most efficient previous step.
				var cameFrom = {};
				
				while(openSet.length !== 0){
					var current = openSet[0];
					var currIdx = 0;
					for(var v = 0; v < openSet.length; v++){
						if (openSet[v].f < current.f){
							current = openSet[v];
							currIdx = v;
						}
					}
					
					if (current.x === endX && current.y === endY){
						return reconstructedPath(cameFrom, current);
					}
					
					openSet.splice(currIdx, 1);
					closedSet.push(current);
					
					current.findNeighbors();
					for(var n = 0; n < current.Neighbors.length; n++){
						var neighbor = current.Neighbors[n];
						var inClosedSet = false;
						for(var c = 0; c < closedSet.length; c++){
							if (neighbor.x === closedSet[c].x && neighbor.y === closedSet[c].y){
								inClosedSet = true;
							}
						} 
						var inOpenSet = false;
						for(var c = 0; c < openSet.length; c++){
							if (neighbor.x === openSet[c].x && neighbor.y === openSet[c].y){
								inOpenSet = true;
							}
						} 
						var skip = false;
						if (!inClosedSet){
							var tempG = current.g + dist(current.x, current.y, neighbor.x, neighbor.y);
							if (!inOpenSet){
								openSet.push(neighbor);
							}
							else if(tempG >= neighbor.g ){
								skip = true;
							}
							
							if (!skip){
								current.Neighbors[n].cameFrom = current;
								current.Neighbors[n].g = tempG;
								current.Neighbors[n].f = tempG + dist(neighbor.x, neighbor.y, endX, endY);
							}
						}
					}
				}
			};
			//---------------------------------------------------

			//---------FOR COPS AND ROBBERS GAME--------------
			var copDifficulty = 3;
			var copImages = [];
			var copTileSize = 40;

			var copGameMap=["wwwwwwwwww",
											"w---wr---w",
											"w-www-wwww",
											"wr-----r-w",
											"wwww-wwwww",
											"w-----r--w",
											"wrwww-ww-w",
											"wr-------w",
											"w-wrwww-ww",
											"wRw-----rw",
											"wwwwwwwwww"];
				
			var COP_WALLS = [];
			var COP_REWARDS = [];
			var COP_POWERUPS = [];
			var COP_MAP;

			var drawRobber0 = function(){
				background(22, 138, 36, 0);
				noStroke();
				
				fill(0,0,0);
				ellipse(200,100,80,100);
				rect(185, 140, 30, 40);
				
				rect(160, 160, 80, 120, 30);
				fill(255, 255, 255);
				
				fill(0,0,0);
				stroke(0,0,0);
				strokeWeight(30);
				var x1 = 180;
				var x2 = x1-20;
				var x3 = x2+10;
				var y1 = 260;
				var y2 = y1+50;
				var y3 = y2+50;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);
				line(x3,y3, x3-20, y3+8);
				
				
				x1 = 220;
				x2 = x1+20;
				x3 = x2+40;
				y1 = 260;
				y2 = y1+50;
				y3 = y2-50;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);
				line(x3,y3, x3+20, y3+8);
				
				
				strokeWeight(20);
				noFill();	
				x1 = 220;
				x2 = x1+60;
				x3 = x2-20;
				y1 = 180;
				y2 = y1+10;
				y3 = y2+50;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);
				
				
				//stroke(255, 0, 0);
				strokeWeight(20);
				noFill();	
				x1 = 170;
				x2 = x1-30;
				x3 = x2-30;
				y1 = 180;
				y2 = y1+50;
				y3 = y2-30;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);

				noStroke();
				fill(252, 217, 146);
				rect(170,80,60,25, 10);
				rect(180,115,40,20, 10);
				fill(255, 255, 255);
				stroke(0,0,0);
				strokeWeight(1);
				ellipse(185,92,20,20);
				ellipse(215,92,20,20);
				fill(0,0,0);
				ellipse(185,92,10,10);
				ellipse(215,92,10,10);
				strokeWeight(3);
				line(210,125,190,125);
				
				fill(238, 240, 206);
				triangle(120,180, 80,180,100,210);
				ellipse(100,240,60,70);
				fill(47, 110, 2);
				textSize(60);
				text("$", 83,260);
				
				copImages.push(get(20,20,width-40,height-40));
				
			};
			var drawRobber1 = function(){
				background(22, 138, 36, 0);
				noStroke();
				
				
				fill(0,0,0);
				ellipse(200,100,80,100);
				rect(185, 140, 30, 40);
				
				rect(160, 160, 80, 120, 30);
				fill(255, 255, 255);
				
				fill(0,0,0);
				stroke(0,0,0);
				strokeWeight(30);
				var x1 = 220;
				var x2 = 240;
				var x3 = 230;
				var y1 = 260;
				var y2 = y1+50;
				var y3 = y2+50;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);
				line(x3,y3, x3+20, y3+8);
				
				x1 = 180;
				x2 = x1-20;
				x3 = x2+10;
				y1 = 260;
				y2 = y1+50;
				y3 = y2+50;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);
				line(x3,y3, x3-20, y3+8);
				
				strokeWeight(20);
				noFill();	
				x1 = 170;
				x2 = x1-30;
				x3 = x2-30;
				y1 = 180;
				y2 = y1+50;
				y3 = y2-30;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);

				
				//stroke(255, 0, 0);
				strokeWeight(20);
				noFill();	
				x1 = 230;
				x2 = x1+30;
				x3 = x2+30;
				y1 = 180;
				y2 = y1+50;
				y3 = y2-30;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);

				noStroke();
				fill(252, 217, 146);
				rect(170,80,60,25, 10);
				rect(180,115,40,20, 10);
				fill(255, 255, 255);
				
				
				stroke(0,0,0);
				strokeWeight(1);
				ellipse(185,92,20,20);
				ellipse(215,92,20,20);
				fill(0,0,0);
				ellipse(185,92,10,10);
				ellipse(215,92,10,10);
				strokeWeight(3);
				line(210,125,190,125);
				
				fill(238, 240, 206);
				triangle(120+190,180, 80+190,180,100+190,210);
				ellipse(290,240,60,70);
				fill(47, 110, 2);
				textSize(60);
				text("$", 273,260);

				copImages.push(get(20,20,width-40,height-40));
				
			};
			var drawRobber2 = function(){
				background(22, 138, 36, 0);
				noStroke();
				
				
				fill(0,0,0);
				ellipse(200,100,80,100);
				rect(185, 140, 30, 40);
				
				rect(160, 160, 80, 120, 30);
				fill(255, 255, 255);
				
				
				fill(0,0,0);
				stroke(0,0,0);
				strokeWeight(30);
				var x1 = 220;
				var x2 = 240;
				var x3 = 230;
				var y1 = 260;
				var y2 = y1+50;
				var y3 = y2+50;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);
				line(x3,y3, x3+20, y3+8);
				
				
				x1 = 180;
				x2 = 160;
				x3 = 120;
				y1 = 260;
				y2 = y1+50;
				y3 = y2-50;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);
				line(x3,y3, x3-20, y3+8);
				
				
				strokeWeight(20);
				noFill();	
				x1 = 180;
				x2 = x1-60;
				x3 = x2+20;
				y1 = 180;
				y2 = y1+10;
				y3 = y2+50;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);
				
				
				//stroke(255, 0, 0);
				strokeWeight(20);
				noFill();	
				x1 = 230;
				x2 = x1+30;
				x3 = x2+30;
				y1 = 180;
				y2 = y1+50;
				y3 = y2-30;
				line(x1,y1,x2,y2);
				line(x2,y2,x3,y3);

				noStroke();
				fill(252, 217, 146);
				rect(170,80,60,25, 10);
				rect(180,115,40,20, 10);
				fill(255, 255, 255);
				stroke(0,0,0);
				strokeWeight(1);
				ellipse(185,92,20,20);
				ellipse(215,92,20,20);
				fill(0,0,0);
				ellipse(185,92,10,10);
				ellipse(215,92,10,10);
				strokeWeight(3);
				line(210,125,190,125);
				
				fill(238, 240, 206);
				triangle(120+190,180, 80+190,180,100+190,210);
				ellipse(290,240,60,70);
				fill(47, 110, 2);
				textSize(60);
				text("$", 273,260);
				
				copImages.push(get(20,20,width-40,height-40));
			};
			var drawPolice3 = function(){
				background(0,0,0,0);

				fill(0, 0, 255);
				noStroke();
				rect(10, 10+155*1/2, 300, 155/2, 10);//BODY
				rect(10+300/2/3, 10, 300*2/3, 155/2+10, 10);//BODY
				
				fill(155,155,155);
				rect(10 + 4*300/6, 10+15, 300/6, 155/2-15, 7); // FRONT WINDOW
				rect(10 + 4*300/6+10, 10+15, 300/6-10, 155/2-15); // FRONT WINDOW
				
				rect(10 + 300/3 + 8, 10+15, 300*1/3-15, 155/2-15, 7); // MIDDLE WINDOW
				
				rect(10 + 300/6, 10+15, 300/6, 155/2-15, 7); // BACK WINDOW
				rect(10 + 300/6, 10+15, 300/6-10, 155/2-15); // BACK WINDOW
				
				
				fill(0 ,0, 0);
				ellipse(10 + 300/4, 10 + 155, 300/4, 300/4); // WHEELS
				ellipse(10 + 3*300/4, 10 + 155, 300/4, 300/4); // WHEELS
				ellipse(10 + 300/2.5, 10+155/1.6, 3, 3); // DOORS
				
				fill(130 ,130, 130);
				ellipse(10 + 300/4, 10 + 155, 300/8, 300/8); // INNER WHEELS
				ellipse(10 + 300*3/4, 10 + 155, 300/8, 300/8); // INNER WHEELS
				
				fill(255,255,0);
				rect(10 + 5*300/6+10, 10+155/2+4, 300/9, 155/6, 7); // Headlights
				fill(255,0,0);
				rect(10 + 300/6 -300/9-10, 10+155/2+4, 300/9, 155/6, 7); // Taillights
				
				textSize(40);
				fill(255,255,255);
				text("POLICE", 80,130);
				
				
				copImages.push(get(10,0,width-70,height-170));
			};
			var drawWall4 = function(){
				fill(230, 134, 0);
				background(0,1,12);
				rect(5,8,180,120);
				rect(210,8,180, 120);
				
				rect(0, 136, 90, 125);
				rect(105, 136, 180, 125);
				rect(305, 136, 90, 125);
				
				rect(5,268,180,120);
				rect(210,268,180, 120);
				
				copImages.push(get(0,0,width,height));
				
			};
			var drawWall5 = function(){
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
				
				copImages.push(get(0,0,width,height));
				
			};
			var drawReward6 = function(){

				stroke(0,0,0);
				strokeWeight(15);
				background(165, 240, 250,0);
				fill(165, 240, 250);
				quad(0, 170, 
						400, 170,
						400-67, 60,
						0+67, 60);
				triangle(400, 170,
						0, 170,
						200, 360);
				line(400-67, 60, 400-133, 170);
				line(67, 60, 400-266, 170);
				line(200, 60, 400-266, 170);
				line(200, 60, 400-133, 170);
				line(200, 360, 400-266, 170);
				line(200, 360, 400-133, 170);
				
				copImages.push(get(0,0,width,height));
			};
			var drawSpeedUp7 = function(){
				stroke(0,0,0);
				strokeWeight(15);
				background(165, 240, 250,0);
				fill(242, 230, 0);
				
				triangle(200, 40, 
					200, 230,
					200-100, 200);
				triangle(200, 400-40, 
					200+100, 200,
					200, 170);
				
				
				strokeWeight(18);
				stroke(242, 230, 0);
				line(200, 213, 200, 187);
				
				copImages.push(get(0,0,width,height));
			};


			var drawWall = function(x, y){
				if (y / 25 % 2 === 0){
					image(copImages[4], x, y, copTileSize, copTileSize);
				}
				else {
					image(copImages[5], x, y, copTileSize, copTileSize);
				}
			};

			var RobberObj = function(x, y, d){
				//XY is center of figure
				this.x = (x+0.5)*copTileSize;
				this.y = (y+0.5)*copTileSize;
				this.dir = 1;
				this.state = 1;
				this.size = d;
				this.poweredUp = 0;
				this.speed = 2;
			};
			var CopObj = function(x, y, d){
				this.x = x;
				this.y = y;
				this.state = 1;
				this.dir = 1;//0-up 1-down 2-left 3-right
				this.size = d;
			};
			var COPS = [];
			var ROBBER;

			var WallCheck = function(x, y, v){
				var coordX1 = Math.floor((x-v)/copTileSize);//right X value
				var coordX2 = Math.floor((x+v)/copTileSize);//left X value
				var coordY1 = Math.floor((y-v)/copTileSize) + 1;//top Y value
				var coordY2 = Math.floor((y+v)/copTileSize) + 1;//bottom Y value

				if( copGameMap[coordY1].charAt(coordX1) === "w" ||
				copGameMap[coordY1].charAt(coordX2) === "w" ||
				copGameMap[coordY2].charAt(coordX1) === "w" ||
				copGameMap[coordY2].charAt(coordX2) === "w"){
					return false;
				}

				return true;
			};

			RobberObj.prototype.draw = function() {
				image(copImages[this.dir], this.x-copTileSize/2, this.y-copTileSize/2, copTileSize, copTileSize);
			};
			RobberObj.prototype.move = function() {
				var x = this.x;
				var y = this.y; 

				if (keyArray[LEFT] === 1) {
					this.dir = 0;
					x -= this.speed;
				}
				else{
					if (keyArray[RIGHT] === 1) { 
						this.dir = 2;
						x += this.speed;
					}
					else{
						this.dir = 1;
					}
				}
				if (keyArray[UP] === 1) {
					y -= this.speed;
				}
				if (keyArray[DOWN] === 1) { 
					y += this.speed;
				}
				if ( WallCheck(x, y, (copTileSize-10)/2) ){
					this.x = x;
					this.y = y;
				}

			};

			RobberObj.prototype.checkCollisions = function(){
				var i = 0;
				//CHECK FOR COLLISION WITH COP
				for(i = 0; i < COPS.length; i++){
					if( abs(COPS[i].x - this.x) < 15 && abs(COPS[i].y - this.y) < 15 ){
						COP_MAP.time += 600;
						COPS.splice(i, 1);
						i--;
					}
				}
				
				for(i = 0; i < COP_REWARDS.length; i++){
					if(abs((COP_REWARDS[i].x + 0.5)*copTileSize - this.x) < 15 && abs((COP_REWARDS[i].y + 0.5)*copTileSize - this.y) < 15 ){
						COP_REWARDS.splice(i, 1);
						i--;
					}
				}
				
				for(i = 0; i < COP_POWERUPS.length; i++){
					if(abs((COP_POWERUPS[i].x + 0.5)*copTileSize - this.x) < 15 && abs((COP_POWERUPS[i].y + 0.5)*copTileSize - this.y) < 15 ){
						COP_POWERUPS.splice(i, 1);
						i--;
					}
				}
			};
			CopObj.prototype.draw = function() {
				image(copImages[3], this.x-copTileSize/2, this.y-copTileSize/2, copTileSize, copTileSize);
			};

			var findOptions = function(x, y, d){
				var options = [];
				var X = Math.floor((x)/copTileSize);
				var Y = Math.floor((y+copTileSize)/copTileSize);
				
				if (  ((x % copTileSize) === ( copTileSize/2 )) && ((y % copTileSize) === ( copTileSize/2 ))  ){
					switch(d){
						case 0:
							if(copGameMap[Y].charAt(X-1) !== "w") {options.push(2);}// left
							if(copGameMap[Y].charAt(X+1) !== "w") {options.push(3);}// right
							if(copGameMap[Y-1].charAt(X) !== "w") {options.push(0);}// Keep going up
							if(options.length === 0 && copGameMap[Y+1].charAt(X) !== "w") 
			{options.push(1);}//turn around
							break;
						case 1:
							if(copGameMap[Y].charAt(X-1) !== "w") {options.push(2);}// left
							if(copGameMap[Y].charAt(X+1) !== "w") {options.push(3);}// right
							if(copGameMap[Y+1].charAt(X) !== "w") {options.push(1);}// Keep going down
							if(options.length === 0 && copGameMap[Y-1].charAt(X) !== "w") 
			{options.push(0);}//turn around
							break;
						case 2:
							if(copGameMap[Y-1].charAt(X) !== "w") {options.push(0);}// go up
							if(copGameMap[Y+1].charAt(X) !== "w") {options.push(1);}//go down
							if(copGameMap[Y].charAt(X-1) !== "w") {options.push(2);}//keep going
							if(options.length === 0 && copGameMap[Y].charAt(X+1) !== "w") 
			{options.push(3);}// turn around
							break;
						case 3:
							if(copGameMap[Y-1].charAt(X) !== "w") {options.push(0);}// go up
							if(copGameMap[Y+1].charAt(X) !== "w") {options.push(1);}//go down
							if(copGameMap[Y].charAt(X+1) !== "w") {options.push(3);}//keep going
							if(options.length === 0 && copGameMap[Y].charAt(X-1) !== "w") 
			{options.push(2);}// turn around
							break;
					}
				}


				return options;
				
			};
			CopObj.prototype.move = function() {
				var x = this.x;
				var y = this.y;
				var posDir = findOptions(x, y, this.dir);

				var nextDir = this.dir;
				if (posDir.length !== 0) {
					nextDir = posDir[ Math.floor(random(0,posDir.length)) ];//dir of next turn 
				}

				y = ( nextDir === 0 ) ? y - 1:
					( nextDir === 1 ) ? y + 1 : this.y;

				x = ( nextDir === 2 ) ? x - 1 :
					( nextDir === 3 ) ? x + 1 : this.x;

				this.x = x;
				this.y = y;
				this.dir = nextDir; 

			};


			var copWallObj = function(x, y){
				this.x = x;
				this.y = y;
				this.size = copTileSize;
			};
			copWallObj.prototype.draw = function(){
				if (this.y % 2 === 0){
					image(copImages[4], this.x*this.size, this.y*this.size, this.size, this.size);
				}
				else {
					image(copImages[5], this.x*this.size, this.y*this.size, this.size, this.size);
				}
			};

			var rewardsObj = function(x, y){
				this.x = x;
				this.y = y;
				this.size = copTileSize;
			};
			rewardsObj.prototype.draw = function(){
				image(copImages[6], this.x*this.size, this.y*this.size, this.size, this.size);
			};

			var powerUpObj = function(x, y){
				this.x = x;
				this.y = y;
				this.size = copTileSize;
			};
			powerUpObj.prototype.draw = function(){
				image(copImages[7], this.x*this.size, this.y*this.size, this.size, this.size);
			};

			var copMapObj = function(){
				this.hasReward = true;
				this.map = copGameMap;
				this.time = 0;
				this.computerTime = 0;
				this.youDied = 0;
				this.computerDied = 0;
				for (var row = 0; row < this.map.length; row++){
					for (var col = 0; col < this.map[row].length; col++){
						switch(this.map[row].charAt(col)){
							case "w": 
								COP_WALLS.push( new copWallObj(col, row-1) );
							break;
							case "r": 
								COP_REWARDS.push( new rewardsObj(col, row-1) );
							break;
							case "p": 
								COP_POWERUPS.push( new powerUpObj(col, row-1) );
							break;
							case "R": 
								ROBBER = new RobberObj(col, row-1);
							break;
							
						}
					} 
				}
			};
			copMapObj.prototype.draw = function() {
				background(22, 138, 36);
				this.time++;
				for (var i = 0; i < COP_WALLS.length; i++){    COP_WALLS[i].draw();  }
				for (var i = 0; i < COP_REWARDS.length; i++){  COP_REWARDS[i].draw();  }
				for (var i = 0; i < COP_POWERUPS.length; i++){  COP_POWERUPS[i].draw();  }
				for (var i = 0; i < COPS.length ; i++){	COPS[i].move();	COPS[i].draw();	}
				
				ROBBER.move();
				ROBBER.draw();
				ROBBER.checkCollisions();

				if(COP_REWARDS.length === 0){  
					MiniGameMode = 2;  
					var timeWithOutPenalty = (this.time-600*(3-COPS.length));
					this.computerTime = timeWithOutPenalty*random(0.8, 1+COPS.length);
				}
			};
			copMapObj.prototype.drawStill = function() {
				background(22, 138, 36);
				for (var i = 0; i < COP_WALLS.length; i++){    COP_WALLS[i].draw();  }
				for (var i = 0; i < COP_REWARDS.length; i++){  COP_REWARDS[i].draw();  }
				for (var i = 0; i < COP_POWERUPS.length; i++){  COP_POWERUPS[i].draw();  }
				for(var i = 0; i < COPS.length ; i++){	COPS[i].draw();	}
				ROBBER.draw();
			};
			COP_MAP = new copMapObj();

			var drawBasicBG = function(){
				noStroke();
				background(55, 182, 250);
				fill(22, 138, 36);
				rect(0,250, 400, 150);
				var x = 0;
				var y = 0;
				for (x = 0; x < 400; x+=copTileSize){    drawWall(x, 250); }
				for (y = 250; y < 360; y+=Math.floor(copTileSize*2/3)){ 
					drawWall(0,y);  drawWall(400-copTileSize,y); 
				}
				for (x = 0; x < 400; x+=copTileSize){ drawWall(x,360);  }
			};

			//-----------------------------------------------------------

			//-----------------------PARK IT----------------------------
			var PARK_CARS = [];
			var PARK_MAP;
			var PARK_myH;

			var PARK_myHObj = function(x, y) {
				this.x = x;
				this.y = y;
				this.Speed = 1;
			};
			PARK_myHObj.prototype.draw = function() {
				var Height = 190;
				var Length = 140;
				var Width = 40;

				//Draw H
				fill(100,100,100);
				noStroke();
				
				rect(this.x, this.y+Height/2-Width/2, Length, Width);
				rect(this.x,this.y, Width, Height);
				rect(this.x+Length,this.y, Width, Height);
				
				//ADD YELLOW LINES to the H
				stroke(255,255,0);
				strokeWeight(2);
				var y = 0;
				for (y = this.y; y < this.y+Height; y = y + 15){
					line(this.x+Width/2, y, this.x+Width/2, y+5);
					line(this.x+Length+Width/2, y, this.x+Length+Width/2, y+5);
				}
				var x = 0;
				for (x = this.x+Width; x < this.x+Length; x = x + 15){
					line(x, this.y+Height/2, x+5, this.y+Height/2);
				}
				
				noStroke();
			};
			PARK_myHObj.prototype.move = function() {
				if (keyArray[LEFT] === 1) {
					this.x -= this.Speed;
				}
				if (keyArray[RIGHT] === 1) {
					this.x += this.Speed;
				}
			};
			PARK_myHObj.prototype.drawParking = function(){
				//PARKING
				fill(184, 37, 37);
				rect(this.x-7, 343, 55, 50);
				rect(this.x+132, 343, 55, 50);
				textSize(16);
				fill(255, 255, 0);
				text("PARK\nHERE", this.x-2, 364);
				text("PARK\nHERE", this.x+137, 364);
			};

			var carObj = function(x, y) {
				this.x = x;
				this.y = y;
			};
			carObj.prototype.draw = function() {
				var w = 40;
				var h = 25;
				
				fill(0, 0, 255);
				noStroke();
				rect(this.x, this.y, h/2, w, 5);//BODY
				rect(this.x, this.y+w/5, h, w/1.8, 5);//BODY
			   
				fill(0 ,0, 0);
				rect(this.x+w/3, this.y+h/3+1, w/4, h/2.7, 3); // FRONT WINDOW
				rect(this.x+w/3, this.y+2*h/3+3, w/4, h/2.7, 3); // BACK WINDOW
			   
				fill(0 ,0, 0);
				ellipse(this.x, this.y + h-15, w/4, w/4); // WHEELS
				ellipse(this.x, this.y + h +5, w/4, w/4); // WHEELS
				
				fill(130 ,130, 130);
				ellipse(this.x, this.y + h-15, w/8, w/8); // WHEELS
				ellipse(this.x, this.y + h +5, w/8, w/8); // WHEELS
				
				fill(255,255,0);
				rect(this.x+w/6, this.y+h*4/3, w/9, h/6, 7); // Headlights
			};
			carObj.prototype.move = function(){
				var inParking = (this.x-PARK_myH.x < 20 && this.x-PARK_myH.x > 0 && this.y >= 340) || (this.x-PARK_myH.x-150 < 20 && this.x-PARK_myH.x-130 > 0 && this.y >= 340);
				
				if (inParking){
					PARK_MAP.Score++;
					if(PARK_MAP.Score % 3 === 0 && PARK_MAP.Score !== 0){
						if(PARK_MAP.Speed < 5){
							PARK_MAP.Speed += 1;
						}
						else {
							if (PARK_CARS.length < 3 ) {
								var nextY = PARK_MAP.getHighestCar() - 300;
								if (nextY > -20){
									nextY = -20;
								}
								var temp = new carObj(random(0,100)+250, nextY);
								PARK_CARS.push(temp);
							}
						}
					}
					
					
					
					this.y = PARK_MAP.getHighestCar() - 300;
					this.x = floor(random(0, 100)) + 250;
					if (this.y > -20){
						this.y = -20;
					}
					
				} else if (this.y > 340){
					PARK_MAP.Lives--;
					if (PARK_MAP.Lives === 0){
						MiniGameMode = 2;
					}
					this.y = PARK_MAP.getHighestCar() - 300;
					this.x = floor(random(0, 100)) + 250;
					if (this.y > -20){
						this.y = -20;
					}
				}
				else {
					this.y += PARK_MAP.Speed;
				}
			};

			var parkMapObj = function(){
				this.Score = 0;
				this.Lives = 3;
				this.Speed = 1;
			};
			parkMapObj.prototype.updateInfo = function(){
				fill(0,0,0);
				textSize(16);
				text("Lives:  " + this.Lives, 5, 20);
				text("Score: " + this.Score, 5, 40); 
				text("Level:  " + (this.Speed + PARK_CARS.length - 1), 5, 60);  
			};
			parkMapObj.prototype.draw = function() {
				//Fill Background
				background(123, 228, 235);
				
				//Background of road sign
				rotate(radians(45));
				fill(255, 218, 117);
				rect(100,-100, 200, 200,10);
				rotate(radians(-45));
				
				// DRAW STOP LIGHT
				fill(0,0,0);
				rect(10,180,60,155, 4);
				fill(255,0,0);
				ellipse(40,207,40,40);
				fill(247, 211, 79);
				ellipse(40,257,40,40);
				fill(0,255,0);
				ellipse(40,307,40,40);
				
				//Variables for S Location
				var X = 85;
				var Y = 80;
				var Height = 120;
				var Length = 110;
				var Width = 20;
				
				//Draw S
				noFill();
				strokeWeight(30);
				stroke(13, 12, 13);
				bezier(X+Length, Y+Height/4, X+Length, Y-20, X, Y-20, X, Y+Height/4);
				bezier(X+Length, Y+3*Height/4, X+Length, Y+Height+20, X, Y+Height+20, X, Y+3*Height/4);
				bezier(X+Length/2, Y+Height/2, X, Y+Height/2, X, Y+Height/3, X, Y+Height/4);
				bezier(X+Length/2, Y+Height/2, X+Length, Y+Height/2, X+Length, Y+3*Height/4, X+Length, Y+3*Height/4);
				
				//Sharpen corners of S
				noStroke();
				fill(255, 218, 117);
				rect(X-Width,Y+2/3*Height-9, 2*Width, 20);
				rect(X-Width+Length,Y+2.5/10*Height, 2*Width, 20);
				
				
				//DRAW TRAFFIC CONE
				X = 60;
				Y = 250;
				var H = 120;
				var W = 60;
				fill(0,0,0);
				//Base
				quad(X+W/2, Y+H*7/6, X-W*1/3, Y+H, X+W/2, Y+H*5/6, X+W*4/3, Y+H);
				fill(255,120,0);
				//Cone
				triangle(X+W/2,Y,X,Y+H, X+W, Y+H);
				arc(X+W/2, Y+H, W, H*1/12, 0, 190);
				//Curve at top of cone
				fill(123, 228, 235);
				rect(X+W/2-10, Y, 20,20);
				fill(220,100,0);
				ellipse(X+W/2, Y+21, 10,5);
				
				//WHITE STRIPE
				fill(255,255,255);
				var topY = H*5/10;
				var botY = H*7/10;
				var topX = topY*W/(2*H);
				var botX = botY*W/(2*H);
				quad(X+W/2-topX, Y+topY, X+W/2+topX ,Y+topY, X+W/2+botX, Y+botY, X+W/2-botX, Y+botY);
				arc(X+W/2, Y+botY, 2*botX, H*1/12, 0, 190);
				fill(255,120,0);
				arc(X+W/2, Y+topY, 2*topX, H*1/24, 0, 190);

				this.updateInfo();
			};
			parkMapObj.prototype.drawBasic = function() {
				//Fill Background
				background(123, 228, 235);
				
				// DRAW STOP LIGHT
				fill(0,0,0);
				rect(10,180,60,155, 4);
				fill(255,0,0);
				ellipse(40,207,40,40);
				fill(247, 211, 79);
				ellipse(40,257,40,40);
				fill(0,255,0);
				ellipse(40,307,40,40);
				
				//Variables for S Location
				var X = 85;
				var Y = 80;
				var Height = 120;
				var Length = 110;
				var Width = 20;
				
				noStroke();
				
				//DRAW TRAFFIC CONE
				X = 260;
				Y = 250;
				var H = 120;
				var W = 60;
				fill(0,0,0);
				//Base
				quad(X+W/2, Y+H*7/6, X-W*1/3, Y+H, X+W/2, Y+H*5/6, X+W*4/3, Y+H);
				fill(255,120,0);
				//Cone
				triangle(X+W/2,Y,X,Y+H, X+W, Y+H);
				arc(X+W/2, Y+H, W, H*1/12, 0, 190);
				//Curve at top of cone
				fill(123, 228, 235);
				rect(X+W/2-10, Y, 20,20);
				fill(220,100,0);
				ellipse(X+W/2, Y+21, 10,5);
				
				//WHITE STRIPE
				fill(255,255,255);
				var topY = H*5/10;
				var botY = H*7/10;
				var topX = topY*W/(2*H);
				var botX = botY*W/(2*H);
				quad(X+W/2-topX, Y+topY, X+W/2+topX ,Y+topY, X+W/2+botX, Y+botY, X+W/2-botX, Y+botY);
				arc(X+W/2, Y+botY, 2*botX, H*1/12, 0, 190);
				fill(255,120,0);
				arc(X+W/2, Y+topY, 2*topX, H*1/24, 0, 190);
			};
			parkMapObj.prototype.play = function(){
				PARK_myH.move();
				PARK_myH.draw();
				
				for (var i = 0; i < PARK_CARS.length; i++){
					PARK_CARS[i].move();
					PARK_CARS[i].draw();
				}
				
				PARK_myH.drawParking();
			};
			parkMapObj.prototype.getHighestCar = function(){
				var highest = 400;
				for (var i = 0; i < PARK_CARS.length; i++){
					if(PARK_CARS[i].y < highest){
						highest = PARK_CARS[i].y;
					}
				}
				return highest;
			};

			PARK_MAP = new parkMapObj();
			PARK_CARS = [];
			PARK_CARS.push(new carObj(300,-80));
			PARK_myH = new PARK_myHObj(200, 200);

			//-----------------------------------------------------------

			//----------------------Pyramid game----------------------
			var LevelObj = function(len, level){
				this.length = len;
				this.x = 0;
				this.y = 180;
				this.level = level;
				this.dir = 1*pow(1.5,floor(level/3));
			};
			LevelObj.prototype.draw = function() {
				fill(50,100,255);
				rect(this.x, this.y, this.length, 50, 2);
				fill(255, 255, 255);
				textSize(30);
				text(this.level, 10, this.y+35);
			};
			LevelObj.prototype.move = function() {
				this.x += this.dir;
				if (this.x+this.length > 400 || this.x < 0){
					this.dir *=-1;
				}
			};
			LevelObj.prototype.cut = function(lastBlock) {
				this.dir = 0;
				if (lastBlock !== null){
					//before perfection
					if(lastBlock.x > this.x){
						this.length -= (lastBlock.x-this.x);
						this.x = lastBlock.x;
					}
					//after perfection
					if(this.x > lastBlock.x){
						this.length -= (this.x-lastBlock.x);
					}
					
					if (this.length < 0){
						MiniGameMode = 2;
						this.length = 0;
					}
					
				}
				
			};	   
			LevelObj.prototype.hit = function() {
				this.hp -= 1;
				if (this.hp === 0){
					return true;
				}
				else{
					return false;
				}
			};

			var PyramidObj = function(){
				this.BLOCKS = [];
				this.lastEnter = 0;
				this.maxLength = 200;
				this.BLOCKS.push(new LevelObj(this.maxLength, 0));
			};
			PyramidObj.prototype.draw = function() {
				background(0,0,0);
				for(var b = 0; b < this.BLOCKS.length; b++){
					this.BLOCKS[b].draw();
				}
			};
			PyramidObj.prototype.hit = function() {
				for(var b = 0; b < this.BLOCKS.length; b++){
					this.BLOCKS[b].move();
				}
				
				if (keyArray[ENTER] === 0 && this.lastEnter === 1){
					var lastBlock = (this.BLOCKS.length-2 >= 0) ? this.BLOCKS[this.BLOCKS.length-2] : null;
				   this.BLOCKS[this.BLOCKS.length-1].cut( lastBlock );
				   this.maxLength = this.BLOCKS[this.BLOCKS.length-1].length;

				   if (MiniGameMode === 1){
						for (var b = 0 ; b < this.BLOCKS.length ; b++){
						   this.BLOCKS[b].y+=50;
						}
						this.BLOCKS.push(new LevelObj(this.maxLength, this.BLOCKS.length));
				   }
				   else {
					   this.score = this.BLOCKS.length;
					   this.compScore = floor(random(6, 17));
					   this.BLOCKS.splice(this.BLOCKS.length-1, 1);
				   }
				   
				}
				this.lastEnter = keyArray[ENTER];
			};

			var PYRAMID = new PyramidObj();
			//-----------------------------------------------------------

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

			var headerObj = function(){
				this.y = -100;
			};
			headerObj.prototype.draw = function(){
				fill(0,0,0);
				stroke(255,255,255);
				strokeWeight(2);
				rect(-5,this.y-5,410,70);
				stroke(255,255,255);
				strokeWeight(2);
				ellipse(40,this.y+40,80,80);
				ellipse(360,this.y+40,80,80);
				image(images[0], 0, this.y, 80, 80);
				image(images[1], 320, this.y, 80, 80);
				fill(255,255,255);
				textSize(18);
				text("points: "+ PLAYER.score, 85, this.y+40);
				text("points: "+ COMPUTER.score, 240, this.y+40);
			};
			headerObj.prototype.fadeIn = function(){
				if (this.y < 0){
					this.y++;
					return true;
				}
				else {
					return false;
				}
			};
			headerObj.prototype.fadeOut = function(){
				if (this.y > -100){
					this.y--;
					return true;
				}
				else {
					return false;
				}
			};

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
					image(images[2], this.x+90, this.y, 120, 120);
					image(images[2], this.x-30, this.y, 120, 120);
					image(images[2], this.x-150, this.y, 120, 120);
					image(images[2], this.x-210, this.y, 120, 120);
					image(images[2], this.x+90, this.y+120, 120, 120);
					image(images[2], this.x-30, this.y+120, 120, 120);
					image(images[2], this.x-150, this.y+120, 120, 120);
					image(images[2], this.x-210, this.y+120, 120, 120);
					
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
					image(images[3], this.x-this.size/2, this.y-this.size/2, this.size, this.size);
					
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

			var diceObj = function(){
				this.x = 200;
				this.y = -200;
				this.val = 1;
				this.count = 0;
			};
			diceObj.prototype.roll = function(){
				this.count = (this.count +1)%18;
				this.val = floor(this.count/3)+1;
			};
			diceObj.prototype.draw = function(){
				image(images[4], this.x - 40, this.y , 80, 80);
				textSize(50);
				fill(232, 225, 160);
				text(this.val, this.x-15, this.y+57);
			};
			diceObj.prototype.fadeIn = function(){
				if (this.y < 100){
					this.y+=2;
					return true;
				}
				else {
					return false;
				}
			};
			diceObj.prototype.fadeOut = function(){
				if (this.y > -100){
					this.y-=2;
					return true;
				}
				else {
					return false;
				}
			};


			var PlayerObj = function(p, x, y, d){
				//XY is center of figure
				this.role = p;
				this.x = x;
				this.y = y;
				this.size = d;
				this.tileLoc = 0;
				this.nextTile = 0;
				this.state = -1;
				this.score = 0;
				this.finished = 0;
				
				this.angle = 0;
				
				if(this.role === "computer"){
					this.offset = tileSize/3+10;
				}
				else {
					this.offset = -tileSize/3-10;
				}
			};
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
				DICE.draw();
				HEADER.draw();
				switch(this.state){
					//dice come in
					case -1:{
						if (DICE.fadeIn()){
							HEADER.fadeIn();
							this.state = -1;
						}
						else {
							this.state = 0;
						}
						break;
					}
					//waiting
					case 0:{
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
						}
						break;
					}
					case 1:{//rolling
						var doIt = 0;
						DICE.roll();
						if(this.role === "computer"){
							count++;
							if (count === CountLimit){
								doIt = 1;
							}
						}
						else {
							if (keyArray[ENTER] === 1){
								doIt = 1;
							}
						}
						if (doIt === 1){
							this.state = 2;
							this.nextTile = this.tileLoc+1;
							this.tileLoc += DICE.val;
							if (this.tileLoc > TILES.length-1 ){
								this.tileLoc = TILES.length-1;
							}
							if (this.nextTile === this.tileLoc){
								this.dx = TILES[this.nextTile].x - this.x + this.offset;
								this.dy = TILES[this.nextTile].y - this.y;
							}
							else {
								this.dx = TILES[this.nextTile].x - this.x;
								this.dy = TILES[this.nextTile].y - this.y;
							}
						}
						
						break;
					}
					case 2:{//pause
						if(!DICE.fadeOut()){ 
							count = 0; 
							this.state = 3; 
						}
						break;
					}
					case 3:{//move
						if (keyArray[ENTER] === 1){
								this.nextTile = this.tileLoc;
								this.x = TILES[this.nextTile].x+this.offset;
								this.y = TILES[this.nextTile].y;
								this.state = 4;
								break;
						}
						var dist = 0;
						if (this.nextTile === this.tileLoc){
							dist = Dist(TILES[this.nextTile].x+this.offset, TILES[this.nextTile].y, this.x, this.y);
						}
						else {
							dist = Dist(TILES[this.nextTile].x, TILES[this.nextTile].y, this.x, this.y);
						}
						
						if (dist > 10){
							this.move();
						}
						else{
							if (this.nextTile === this.tileLoc){
								this.state = 4;
							}
							else{
								this.nextTile++;
								if (this.nextTile === this.tileLoc){
									this.dx = TILES[this.nextTile].x - this.x + this.offset;
									this.dy = TILES[this.nextTile].y - this.y;
								}
								else {
									this.dx = TILES[this.nextTile].x - this.x;
									this.dy = TILES[this.nextTile].y - this.y;
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
								MainGameMode = 4;
							}
							else {
								MainGameMode = 3;
							}
							this.state = -1;
						}
						
						if (this.finished === 0 && this.tileLoc === TILES.length-1){//im just finishing
							if ( (COMPUTER.tileLoc !== TILES.length-1 && PLAYER.tileLoc === TILES.length-1) || (COMPUTER.tileLoc === TILES.length-1 && PLAYER.tileLoc !== TILES.length-1) ){
								this.score += 10;
							}
							this.finished = 1;
						}
						
						
						if(COMPUTER.tileLoc === TILES.length-1 && PLAYER.tileLoc === TILES.length-1){
							MainGameMode = 8;
						}
						break;
					}
				}
				

			};

			MapObj.prototype.init = function(){
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
					if (count > 100 && centerX > 900){
						centerX--;
						if (centerX <= 900){
							centerX = 900;
							MainGameMode = 2;
							count = 0;
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
				translate(transX, transY);
				
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
				
				
				for(var x = 0; x< STARS.length; x++){
					STARS[x].move();
					STARS[x].draw();
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

			var mouseClicked = function() {
				switch (MainGameMode){
					//How To Screen
					case -1:{
						MainGameMode = 0;
						break;
					}
					//Main menu
					case 0:{
						//70,310,100,40 start
						if (mouseX > 70 && mouseX < 170 && mouseY > 310 && mouseY < 350 ){
							 PLAYER.x = 900;
							PLAYER.y = 2300;
							PLAYER.size = 140;
							COMPUTER.x = 1100;
							COMPUTER.y = 2300;
							COMPUTER.size = 140;
							MainGameMode = 1; 
						}   
						//220, 310, 150, 60 howto
						if (mouseX > 220 && mouseX < 220+150 && mouseY > 310 && mouseY < 350 ){
							MainGameMode = -1;   
						}
						break;
					}
					//PICKING MiniGame
					case 4:{
						for(var m = 0; m < MINIGAMES.length; m++){
							if (MINIGAMES[m].tileWasClicked(mouseX, mouseY)){
								MiniGame = m;
								MainGameMode = 5;
							}
						}
						break;
					}
					//Playing Minigame
					case 5:{
						switch(MiniGame){
							//MINI GAME 0 : PIG GAME
							case 0:{
								switch(MiniGameMode){
									//Menu
									case 0:{
										MiniGameMode = 1;
										break;
									}
									//Find Path to glasses
									case 1:{
										var path = AStar(PIG.x, PIG.y, floor(mouseX/pigTileSize), floor(mouseY/pigTileSize)+1);
										path.splice(path.length-1,1);
										PIG.path = path;
										PIG.pathLength = path.length;
										break;
									}
									//Finished playing, add to score
									case 2:{
										MiniGameMode = 3;
										break;
									}
								}
								break;
							}
							//MINI GAME 1 : Cops and Robbers
							case 1:{
								switch(MiniGameMode){
									//Menu
									case 0:{
										COPS = [];
										for (var i = 0; i < copDifficulty; i++){
											COPS.push(new CopObj(copTileSize*3/2, copTileSize/2, copTileSize));
										}
										MiniGameMode = 1;
										break;
									}
									//Finished playing, add to score
									case 2:{
										MiniGameMode = 3;
										break;
									}
								}
								break;
							}
							//MINIGAME 2: PARK IT
							case 2:{
								switch(MiniGameMode){
									//Menu
									case 0:{
										MiniGameMode = 1;
										break;
									}
									//GameOver
									case 2:{
										MiniGameMode = 3;
										break;
									}
								}
								break;
							}
							//MINIGAME 3: PYRAMID
							case 3:{
								switch(MiniGameMode){
									//Menu
									case 0:{
										MiniGameMode = 1;
										break;
									}
									//GameOver
									case 2:{
										MiniGameMode = 3;
									}
								}
								break;
							}
							
							
							
						}
						break;
					}
				}
			};
			var keyPressed = function() { keyArray[keyCode] = 1;};
			var keyReleased = function() {keyArray[keyCode] = 0;};


			var miniGameObj = function(n, i){
				this.mode = 0;
				this.name = n;
				this.num = i;
				this.tileY = -100;
			};
			miniGameObj.prototype.drawTile = function(choice){
				this.tileY = 57 + (choice+1)*58;
								
				image(images[9], 60, this.tileY, 280, 50);
				
				fill(0,0,0);
				textSize(20);
				text(this.name, 68, this.tileY+32);
			};
			miniGameObj.prototype.tileWasClicked = function(x, y){
				if (  x < 340 && x > 60 && y > this.tileY && y < this.tileY+50 ){
					return true;
				}
				else {
					return false;
				}
			};


			var playMiniGame = function(){
				switch(MiniGame){
					//MINI GAME 0 : PIG GAME
					case 0:{
						switch(MiniGameMode){
							//MENU
							case 0: {
								background(0,0,0);
								fill(255,255,255);
								textSize(40);
								text("Where's my shades?", 10, 60);
								textSize(14);
								text("Click Anywhere to Begin Playing", 100, 80);
								
								rect(20,100,200,140, 60);
								ellipse(240, 210, 30, 30);
								ellipse(270, 240, 20, 20);
								ellipse(290, 263, 10, 10);
								
								
								image(pigImages[0], 220,230,200,200);
								image(pigImages[1], 115,85, 60,60);
								fill(0,0,0);
								textSize(12);
								text("       I have lost my shades and\n  need your help finding them. Find \nthem in the maze, click on them and\n   I will go there. Click the UP key \n    repeatedly and I will speed up! \n           Help me find them as \n                fast as you can.", 25, 128);
								
								break;
							}
							//FINDING
							case 1: {
								PIG_MAP.draw();
								PIG_MAP.play();
								break;
							}
							//GAME COMPLETE
							case 2: {
								PIG_MAP.draw();
								fill(255, 255, 255);
								rect(20,90, 360, 220, 30);
								fill(100,100,100);
								rect(30,100, 340, 200, 30);
								fill(255, 255, 255);
								textSize(40);
								text("FINISHED", 110, 150);
								textSize(25);
								var myTime = floor((PIG_MAP.time/60)*100)/100;
								var CPUTime = floor((PIG_MAP.computerTime/60)*100)/100;
								text("Your Final Time: "+ myTime +" secs", 50, 200);
								text("CPU's Final Time: "+ CPUTime +" secs", 40, 230);
								textSize(40);
								if (CPUTime > myTime){
									fill(0, 255, 255);
									text("You Win", 120, 280);
								}else if (CPUTime < myTime){
									fill(255, 0, 0);
									text("You Lose", 110, 280);
								}else {
								   fill(255, 255, 0);
									text("IT'S A TIE", 110, 280);
								}
								
								
								fill(0,0,0);
								textSize(12);
								text("click anywhere to continue...", 120, 310);
								break;
							}
							//REWARD POINTS
							case 3: {
								var myTime = floor((PIG_MAP.time/60)*100)/100;
								var CPUTime = floor((PIG_MAP.computerTime/60)*100)/100;
								if (CPUTime > myTime){
									PLAYER.score += 10;
								}else if (CPUTime < myTime){
									COMPUTER.score += 10;
								}else {
									//no points rewarded
								}
								MiniGameMode = 4;
								break;
							}							
							//Done playing
							case 4:{
								MainGameMode = 2;
								MiniGameMode = 0;
								PIG_MAP = new PigMapObj();
								break;
							}
						}
						break;
					}
					//MINI GAME 1 : Damond Diggers
					case 1:{
						switch(MiniGameMode){
							//MENU
							case 0: {
								drawBasicBG();
								fill(255,255,255);
								textSize(50);
								text("Diamond Digger", 20, 50);
								textSize(14);
								text("Click Anywhere to Play...", 130, 80);
								
								image(copImages[1], 240, 230, 120,120);
								image(copImages[6], 51, 3, 20,20);
								image(copImages[6], 265, 3, 20,20);
								
								fill(255, 255, 255);
								rect(10, 98, 250, 140, 30);
								fill(0,0,0);
								text(" Your goal is to help the robber collect \n  all diamonds on the board. Use the \narrow keys to control his movement. If \n  the cops catch the robber, 10 seconds \n will be added to the timer. Collect all \ndiamonds as fast as you can and try to \n           beat the computer's time.  ", 17, 120);

								break;
							}
							//PLAYING
							case 1: {
								COP_MAP.draw();
								break;
							}
							//GAME COMPLETE
							case 2: {
								COP_MAP.drawStill();
						
								fill(255, 255, 255);
								rect(20,90, 360, 220, 30);
								fill(100,100,100);
								rect(30,100, 340, 200, 30);
								fill(255, 255, 255);
								textSize(40);
								text("FINISHED", 110, 150);
								textSize(25);
								var myTime = floor((COP_MAP.time/60)*100)/100;
								var CPUTime = floor((COP_MAP.computerTime/60)*100)/100;
								text("Your Final Time: "+ myTime +" secs", 50, 200);
								text("CPU's Final Time: "+ CPUTime +" secs", 40, 230);
								
								
								textSize(40);
								if (CPUTime > myTime){
									fill(0, 255, 255);
									text("You Win", 120, 280);
								}else if (CPUTime < myTime){
									fill(255, 0, 0);
									text("You Lose", 110, 280);
								}else {
								   fill(255, 255, 0);
									text("IT'S A TIE", 110, 280);
								}
								
								
								fill(0,0,0);
								textSize(12);
								text("click anywhere to continue...", 120, 310);
								break;
							}
							//REWARD POINTS
							case 3: {
								var myTime = floor((COP_MAP.time/60)*100)/100;
								var CPUTime = floor((COP_MAP.computerTime/60)*100)/100;
								if (COP_MAP.youDied === 1){
									myTime = 100000;
								}
								if (COP_MAP.computerDied === 1){
									CPUTime = 100000;
								}
								MiniGameMode = 4;
								
								if (CPUTime > myTime){
									PLAYER.score += 10;
								}else if (CPUTime < myTime){
									COMPUTER.score += 10;
								}else {
									//no points rewarded
								}
								
								MiniGameMode = 4;
								break;
							}							
							//Done playing
							case 4:{
								MainGameMode = 2;
								MiniGameMode = 0;
								COP_MAP = new copMapObj();
								break;
							}
						}
						break;
					}
					//MINI GAME 2 : Park It
					case 2:{
						switch(MiniGameMode){
							//MENU
							//Menu
							case 0:{
								PARK_MAP.drawBasic();
								fill(200,200,200);
								textSize(90);
								text("PARK IT", 24, 96);
								fill(100,100,100);
								text("PARK IT", 27, 93);
								fill(0,0,0);
								text("PARK IT", 30, 90);
								
								textSize(16);
								var top = 140;
								fill(0,0,0);
								text("How to play:", 100, top);
								textSize(14);
								text("Cars will fall from the top of the screen. \nYou must catch them in the parking \ngarage by moving the garage back and \nforth with the arrow keys. Once you miss \n3 cars, the game is over. Try to catch as \nmany as you can. Every time you level \nup, the game will get slightly faster.", 120, top+20);
								
								
								if (mousePressed) {
									MiniGameMode = 1;
								}
								break;
							}
							//PLAYGAME
							case 1: {
								PARK_MAP.draw();
								PARK_MAP.play();
								PARK_MAP.CompScore = floor(random(10, 50));
								break;
							}
							//GAME COMPLETE
							case 2: {
								PARK_MAP.draw();
								fill(255, 255, 255);
								rect(20,90, 360, 220, 30);
								fill(100,100,100);
								rect(30,100, 340, 200, 30);
								fill(255, 255, 255);
								textSize(40);
								text("FINISHED", 110, 150);
								textSize(25);
								var myScore = PARK_MAP.Score;
								var compScore = PARK_MAP.CompScore;
								text("Your Final Score:   "+ PARK_MAP.Score +" points ", 40, 200);
								text("CPU's Final Score: "+ PARK_MAP.CompScore +" points ", 40, 230);
								
								
								textSize(40);
								if (myScore > compScore){
									fill(0, 255, 255);
									text("You Win", 120, 280);
								}else if (myScore < compScore){
									fill(255, 0, 0);
									text("You Lose", 110, 280);
								}else {
								   fill(255, 255, 0);
									text("IT'S A TIE", 110, 280);
								}
								
								
								fill(0,0,0);
								textSize(12);
								text("click anywhere to continue...", 120, 310);
								break;
							}
							//REWARD POINTS
							case 3: {
								var myScore = PARK_MAP.Score;
								var compScore = PARK_MAP.CompScore;								
								
								textSize(40);
								if (myScore > compScore){
									PLAYER.score += 10;
								}else if (myScore < compScore){
									COMPUTER.score += 10;
								}else {
								}
																
								MiniGameMode = 4;
								break;
							}							
							//Done playing
							case 4:{
								MainGameMode = 2;
								MiniGameMode = 0;
								PARK_MAP = new parkMapObj();
								PARK_CARS = [];
								PARK_CARS.push(new carObj(300,-80));
								PARK_myH = new PARK_myHObj(200, 200);
								break;
							}
						}
						break;
					}
					//MINI GAME 3 : Pyramid
					case 3:{
						switch(MiniGameMode){
							//MENU
							case 0:{
								noStroke();
								background(0,0,0);
								var y = 80;
								fill(100, 180, 255);
								rect(145+50, y, 80, 50, 10);
								fill(80, 160, 255);
								rect(145+50, y+50, 124, 50, 10);
								fill(60, 140, 255);
								rect(140+50, y+100, 132, 50, 10);
								fill(40, 120, 255);
								rect(120+50, y+150, 154, 50, 10);
								fill(20, 100, 255);
								rect(120+50, y+200, 190, 50, 10);
								fill(0, 80, 255);
								rect(90+50, y+250, 220, 50, 10);
								
								textSize(57);
								fill(100, 180, 255);
								text("Pyramid", 94, 56);
								fill(60, 140, 255);
								text("Pyramid", 97, 53);
								fill(20, 100, 255);
								text("Pyramid", 100, 50);
								fill(255, 255, 255);
								textSize(14);
								text("Try to stack the blocks as \nhigh as possible. To stop a \nblock, click 'ENTER'. When \nit is stopped, only the parts \nof the block on top of \nprevious block will stay valid. \nBe careful, the blocks will \nspeed up.\n", 10, 100);
								break;
							}
							//PLAYING
							case 1: {
								PYRAMID.draw();
								PYRAMID.hit();
								break;
							}
							//DONE
							case 2: {
								PYRAMID.draw();
								fill(255, 255, 255);
								rect(20,90, 360, 220, 30);
								fill(100,100,100);
								rect(30,100, 340, 200, 30);
								fill(255, 255, 255);
								textSize(40);
								text("FINISHED", 110, 150);
								textSize(25);
								var myScore = PYRAMID.score;
								var compScore = PYRAMID.compScore;
								text("Your Final Score:   "+ myScore +" points ", 40, 200);
								text("CPU's Final Score: "+ compScore +" points ", 40, 230);
								
								
								textSize(40);
								if (myScore > compScore){
									fill(0, 255, 255);
									text("You Win", 120, 280);
								}else if (myScore < compScore){
									fill(255, 0, 0);
									text("You Lose", 110, 280);
								}else {
								   fill(255, 255, 0);
									text("IT'S A TIE", 110, 280);
								}
								
								fill(0,0,0);
								textSize(12);
								text("click anywhere to continue...", 120, 310);
								break;
							}
							//REWARD POINTS
							case 3: {
								var myScore = PYRAMID.score;
								var compScore = PYRAMID.compScore;							
								
								textSize(40);
								if (myScore > compScore){
									PLAYER.score += 10;
								}else if (myScore < compScore){
									COMPUTER.score += 10;
								}else {
								}
																
								MiniGameMode = 4;
								break;
							}							
							//Done playing
							case 4:{
								MainGameMode = 2;
								MiniGameMode = 0;
								PYRAMID = new PyramidObj();
								break;
							}
							
							
						}

						
						break;
					}
				}
				
			};
			var pickMiniGame = function(){
				background(0,0,0);
				
				
				fill(100,100,100);
				rect(50,50, 300, 300, 30);
				for(var m = 0; m < MINIGAMES.length; m++){
					MINIGAMES[m].drawTile(m);
				}
				
				textSize(45);
				fill(200, 100, 0);
				text("MINI GAMES", 65-4, 100+4);
				fill(220, 155, 0);
				text("MINI GAMES", 65-2, 100+2);
				fill(255, 251, 0);
				text("MINI GAMES", 65, 100);
				
			};



			var debugging = function(){
				//text(mouseX+", "+mouseY, 10, 100);
				//console.log(PLAYER.state + ", " + COMPUTER.state);
			};


			firework = [];
			TILES = [];
			PLAYER = new PlayerObj("human",0,0,tileSize);
			COMPUTER = new PlayerObj("computer",0,0,tileSize);
			DICE = new diceObj();
			HEADER = new headerObj();
			STARS = [];
			for(var x = 0; x< 200; x++){
				STARS.push(new starObj());
			}
			MiniGame = -1;
			MINIGAMES = [];
			MINIGAMES.push(new miniGameObj("        Where's my shades?        ", 0));
			MINIGAMES.push(new miniGameObj("           Diamond Digger           ", 1));
			MINIGAMES.push(new miniGameObj("                 Park It                   ", 2));
			MINIGAMES.push(new miniGameObj("                Pyramid                  ", 3));

			var showImages = function(){
				for (var i = 0; i < images.length; i++){
					image(images[i], (i*100)%400, floor((i*100)/400)*100,100, 100);
				}
			};

			var draw = function() {
				switch(MainGameMode){
					//Make characters
					case -2: {
						drawPlayerImg();
						drawComputerImg();
						drawFinish2();
						drawTileCircle3();
						drawBlock4();
						drawLogo5();
						drawStart6();
						drawHT7();
						drawStartTile8();
						drawMiniGameTile9();
						MAP.init();
						
						//For pig imges
						drawPig0();
						drawSunglasses1();
						drawWall2();
						drawWall3();
						
						//For cops and robbers images
						drawRobber0();
						drawRobber1();
						drawRobber2();
						drawPolice3();
						drawWall4();
						drawWall5();
						drawReward6();
						drawSpeedUp7();
						
						MainGameMode = 0;
						break;
					}
					//HowTo
					case -1: {
						background(0,0,0);
						image(images[7], 50, 10, 300, 120);
						fill(255, 255, 255);
						textSize(12);
						text("Click Anywhere For Menu", 120, 100);
						
						
						
						textSize(14);
						image(images[0], 10, 120, 50, 50);
						text(" - Human player : This is your character", 60, 150);
						
						image(images[1], 10, 170, 50, 50);
						text(" - Computer player : This is your opponent", 60, 200);
						
						
						text(" - When it is your turn, click the up arrow to start rolling the dice \n and enter to stop rolling it. You will move that many spaces. \n After you and the computer have taken turns, You will play a \n quick mini game. The winner gets 10 points. The first person to \n get to the finish line recieves 10 points. The player that reaches \n the finish line with the most points wins.", 2, 240);
						text(" - HINT: if you want to skip watching your character move \n between locations, hit 'ENTER'", 5, 370);
						
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
						break;
					}
					//Players Turn
					case 2: {
						background(0,0,0);
						drawBoard();
						PLAYER.makeMove();
						break;
					}
					//COMPUTERS TURN
					case 3: {
						background(0,0,0);
						drawBoard();
						fill(232, 225, 160);
						COMPUTER.makeMove();
						break;
					}
					//Pick MiniGame
					case 4: {
						pickMiniGame();
						break;
					}
					//Play Mini Game
					case 5:{
						playMiniGame();
						break;
					}
					
					//Game Over
					case 8:{
						centerX = (PLAYER.x+COMPUTER.x)/2;
						background(0,0,0);
						drawBoard();
						textSize(50);
						text("Final Score", 80, 60);
						textSize(30);
						fill(0,155,0);
						text("Player: "+ PLAYER.score, 30, 110);
						fill(180, 0, 0);
						text("CPU:   "+ COMPUTER.score, 230, 110);
						
						
						break;
					}
					//Show Winner
					case 9:{
						background(0, 0, 0);
						textSize(70);
						var winner;
						
						if(PLAYER.score > COMPUTER.score){
							fill(150, 255, 150);
							text("You Win", 74, 56+10);
							fill(100, 205, 100);
							text("You Win", 77, 53+10);
							fill(0, 155, 0);
							text("You Win", 80, 50+10);
							
							winner = PLAYER;
							
							winner.x = 200;
							winner.y = 200;
							winner.size = 200;
							
							var centerX = winner.x;
							var centerY = winner.y+60;
							noStroke();
							for(var x = 0; x < 360; x += 2){
								var radiusX = random(80,200);
								var radiusY = random(30,150);
								var point1x = 5*cos(radians(x-90)) + centerX;
								var point1y = 5*sin(radians(x-90)) + centerY;
								var point2x = 5*cos(radians(x+90)) + centerX;
								var point2y = 5*sin(radians(x+90)) + centerY;
								var point3x = radiusX*cos(radians(x)) + centerX;
								var point3y = radiusY*sin(radians(x)) + centerY;
								fill(255-random(0,150), 255, 255-random(0,150));
								triangle(point1x, point1y, point2x, point2y, point3x, point3y);
							}
							
							winner.draw();
						}
						else if(PLAYER.score < COMPUTER.score){
							fill(255, 150, 150);
							text("CPU Wins", 40, 56+10);
							fill(255, 100, 100);
							text("CPU Wins", 43, 53+10);
							fill(255, 0, 0);
							text("CPU Wins", 46, 50+10);
							winner = COMPUTER;
							
							winner.x = 200;
							winner.y = 200;
							winner.size = 200;
							
							var centerX = winner.x;
							var centerY = winner.y+60;
							noStroke();
							for(var x = 0; x < 360; x += 2){
								var radiusX = random(80,200);
								var radiusY = random(30,150);
								var point1x = 5*cos(radians(x-90)) + centerX;
								var point1y = 5*sin(radians(x-90)) + centerY;
								var point2x = 5*cos(radians(x+90)) + centerX;
								var point2y = 5*sin(radians(x+90)) + centerY;
								var point3x = radiusX*cos(radians(x)) + centerX;
								var point3y = radiusY*sin(radians(x)) + centerY;
								fill(255, 255-random(0,150), 255-random(0,150));
								triangle(point1x, point1y, point2x, point2y, point3x, point3y);
							}
							winner.draw();
						}
						else if(PLAYER.score === COMPUTER.score){
							text("TIE", 50, 50);
						}

						break;
					}
				}
				//showImages();
				debugging();
			};    

		}		
	}
}	
var canvas = document.getElementById("finalProject"); 
var processingInstance = new Processing(canvas, sketchProc); 



