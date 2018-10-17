
var sketchProc = function(processingInstance) {
    with (processingInstance) {


    	size(400,400);

    	//Variables for Game Play
		var Mode = 4; // 0 - Menu   1 - Play    2 - GameOver    3 - You Win     4-image capture
		var keyArray = [];
		var dif = 10;
		var images = [];
		var tileSize = 40;
		var mapSize = 16*tileSize;
		var flyer = false;
		var REWARDS = [];

		var gameMap = ["wwwwwwwwwwwwwwwwwwwwwwwww",
		                "w----w---r---wr---------w",
		                "wwww-w-wwwww-w-wwww-w-w-w",
		                "wr----------------w-w-w-w",
		                "w-wwwwwwwwwwwwwwwww-w-w-w",
		                "w----------------rw-w-w-w",
		                "wwwwwww-wwwww-wwwww-w-w-w",
		                "wr------wr----------w-wrw",
		                "w-wwwww-wwwwwwwwwwwww-www",
		                "w------------pwr-------pw",
		                "wwwwwww-wwwwwwwww-w-w-w-w",
		                "w-------wp--------w-w-w-w",
		                "w-wwwwwwwwwwwwwwwww-w-w-w",
		                "w-r----------------rw-w-w",
		                "w-wwwww-wwwww-wwwwwww-w-w",
		                "w---------w--------rw-wrw",
		                "wwww-wwww-w-wwwwwwwww-www",
		                "wr------w-wr-----------rw",
		                "w-wwwww-w-wwwwwwwwwww-w-w",
		                "w-wr----wr-----B-----rw-w",
		                "w-w-wwwww-wwwwwwwwwwwww-w",
		                "w-w----pw-w---w-p-w--rw-w",
		                "w-wwwwwww-w-w-w-w-w-w-w-w",
		                "w-----------wr--w---w---w",
		                "wwwwwwwwwwwwwwwwwwwwwwwww"];


		var drawWall1 = function(){
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
		var drawWall2 = function(){
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
		var drawPolice = function(){
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
		    
		    
		    images.push(get(10,0,width-70,height-170));
		};
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
		    
		    images.push(get(20,20,width-40,height-40));
		    
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

		    images.push(get(20,20,width-40,height-40));
		    
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
		    
		    images.push(get(20,20,width-40,height-40));
		};
		var drawHappyRobber = function(){
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
		    noFill();
		    arc(200, 122, 27, 15, 0, PI);
		    
		    fill(238, 240, 206);
		    triangle(120+190,180, 80+190,180,100+190,210);
		    ellipse(290,240,60,70);
		    fill(47, 110, 2);
		    textSize(60);
		    text("$", 273,260);

		    images.push(get(20,20,width-40,height-40));
		    
		};
		var drawReward1 = function(){

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
		    
		    images.push(get(0,0,width,height));
		};
		var drawSpeedUp1 = function(){
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
		    
		    images.push(get(0,0,width,height));
		};
		var drawBomb1 = function(){
		    background(0,0,0,0);
		    fill(0,0,0);
		    noStroke();
		    ellipse(200, 250,250,250);
		    fill(77, 77, 77);
		    ellipse(200, 140,80,20);
		    rect(160, 110,80,30);
		    fill(0,0,0);
		    ellipse(200, 110,80,20);
		    
		    noFill();
		    stroke(107, 76, 3);
		    strokeWeight(30);
		    arc(230,100, 60, 60, 180, 270);
		    arc(230,40, 80, 60, 0, 90);
		    
		    stroke(255,180,0);
		    noFill();
		    strokeWeight(10);
		    arc(270,10,30,90,0,180);
		    stroke(255,255,0);
		    arc(280,10,30,80,0,180);
		    stroke(255, 0, 0);
		    arc(260,10,30,90,0,180);
		    
		    fill(0,0,0);
		    noStroke();
		    rect(180, 108,40,10);
		    
		    
		    images.push(get(0,0,width,height));
		};
		var drawCage = function(){
		    background(0,0,0,0);
		    fill(100,100,100);
		    var i = 0;
		    for(i = 0; i< 350; i += 100){
		        rect(35 + i,20,30,360, 5);
		    }
		    
		    rect(10,10,380,40, 5);
		    rect(10,350,380,40, 5);
		    images.push(get(0,0,width,height));

		};


		// Functions to draw characters
		var drawReward = function(x, y){
		    image(images[6], x, y, tileSize, tileSize);
		};
		var drawWall = function(x, y){
			if (y / 25 % 2 === 0){
			    image(images[4], x, y, tileSize, tileSize);
			}
			else {
				image(images[5], x, y, tileSize, tileSize);
			}
		};
		var drawSpeedUp = function(x, y){
			image(images[7], x, y, tileSize, tileSize);
		};
		var drawBombs = function(x, y){
			image(images[8], x, y, tileSize, tileSize);
		};

		//Initialize Objects
		var MapObj = function(map){
			//XY is center of figure
			this.map = map;
			this.x = mapSize/2;
			this.y = mapSize/2;
			this.dir = 1;
			this.state = 1;
			this.size = tileSize;
		};
		var RewardsObj = function(y){
			//XY is center of figure
			this.x = Math.floor(random(0, 360));
			this.y = y;
		};
		var RobberObj = function(x, y, d){
			//XY is center of figure
			this.x = x;
			this.y = y;
			this.dir = 1;
			this.state = 1;
			this.size = d;
			this.speed = 2;
			this.poweredUp = 0;
		};
		var CopObj = function(x, y, d){
			this.x = x;
			this.y = y;
			this.state = 1;
			this.dir = 1;//0-up 1-down 2-left 3-right
			this.size = d;
		};

		var MAP = new MapObj(gameMap);
		var COPS = [];
		var ROBBER = new RobberObj(tileSize*3/2, tileSize*3/2, tileSize);

		var mouseClicked = function() {
			if(mouseX > 95 && mouseX < 95+30 && mouseY > 155 && mouseY < 155+30 ){
				dif ++;
				if (dif > 10){
					dif = 10;
				}
			}
			else if(mouseX > 95 && mouseX < 95+30 && mouseY > 190 && mouseY < 190+30 ){
				dif--;
				if (dif < 1){
					dif = 1;
				}
			}
			else if(mouseX > 267 && mouseX < 267+123 && mouseY > 150 && mouseY < 150+75 ){
		        Mode = 5;
			}
			else if (Mode === 0){
				for (var i = 0; i < dif; i++){
					COPS.push(new CopObj(tileSize*(24-0.5),tileSize*(12-0.5), tileSize));
				}
				Mode = 1;
			}
			else if (Mode === 5){
				Mode = 0;
			} else if(Mode === 2 || Mode ===3){
				Mode = 0;
				keyArray= [];
				dif = 3;
				flyer = false;
				REWARDS = [];
				COPS = [];
				ROBBER = new RobberObj(tileSize*3/2, tileSize*3/2, tileSize);
				gameMap = ["wwwwwwwwwwwwwwwwwwwwwwwww",
			                "w----w---r---wr---------w",
			                "wwww-w-wwwww-w-wwww-w-w-w",
			                "wr----------------w-w-w-w",
			                "w-wwwwwwwwwwwwwwwww-w-w-w",
			                "w----------------rw-w-w-w",
			                "wwwwwww-wwwww-wwwww-w-w-w",
			                "wr------wr----------w-wrw",
			                "w-wwwww-wwwwwwwwwwwww-www",
			                "w------------pwr-------pw",
			                "wwwwwww-wwwwwwwww-w-w-w-w",
			                "w-------wp--------w-w-w-w",
			                "w-wwwwwwwwwwwwwwwww-w-w-w",
			                "w-r----------------rw-w-w",
			                "w-wwwww-wwwww-wwwwwww-w-w",
			                "w---------w--------rw-wrw",
			                "wwww-wwww-w-wwwwwwwww-www",
			                "wr------w-wr-----------rw",
			                "w-wwwww-w-wwwwwwwwwww-w-w",
			                "w-wr----wr-----B-----rw-w",
			                "w-w-wwwww-wwwwwwwwwwwww-w",
			                "w-w----pw-w---w-p-w--rw-w",
			                "w-wwwwwww-w-w-w-w-w-w-w-w",
			                "w-----------wr--w---w---w",
			                "wwwwwwwwwwwwwwwwwwwwwwwww"];
			}
		};
		var keyPressed = function() { keyArray[keyCode] = 1;};
		var keyReleased = function() {keyArray[keyCode] = 0;};

		var WallCheck = function(x, y, v){
		    var coordX1 = Math.floor((x-v)/tileSize);//right X value
			var coordX2 = Math.floor((x+v)/tileSize);//left X value
			var coordY1 = Math.floor((y-v)/tileSize);//top Y value
			var coordY2 = Math.floor((y+v)/tileSize);//bottom Y value

			if( gameMap[coordY1].charAt(coordX1) === "w" ||
			gameMap[coordY1].charAt(coordX2) === "w" ||
			gameMap[coordY2].charAt(coordX1) === "w" ||
			gameMap[coordY2].charAt(coordX2) === "w"){
				return false;
			}
		    return true;
		};


		RewardsObj.prototype.draw = function() {
			image(images[6], this.x,this.y,tileSize, tileSize);
		};
		RewardsObj.prototype.move = function() {
		    this.y += 1;
		    if (this.y > 400){
		        this.y = -50;
			    this.x = Math.floor(random(0, 360));
		    }
		};

		RobberObj.prototype.draw = function() {
			image(images[this.dir], 200-tileSize/2,200-tileSize/2,tileSize, tileSize);
			//image(images[this.dir], (this.x-tileSize/2), (this.y-tileSize/2), tileSize, tileSize); //OLD WAY
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
			if ( WallCheck(x, y, (tileSize*3/10)) ){
				this.x = x;
				this.y = y;
			}

		};
		RobberObj.prototype.checkCollisions = function(){
			var i = 0;
			//CHECK FOR COLLISION WITH COP FACE
			for(i = 0; i < COPS.length; i++){
				if( ( abs(COPS[i].x - this.x) < tileSize/2 && abs(COPS[i].y - this.y) < 5 )||
				( abs(COPS[i].x - this.x) < 5 && abs(COPS[i].y - this.y) < tileSize/2 ) ){
				    Mode = 2;
				}
			}
		    
			var r = Math.floor( ( this.y ) / tileSize );
			var c = Math.floor( ( this.x ) / tileSize );

			if(gameMap[r].charAt(c) === "r"){
				gameMap[r] = gameMap[r].substring(0,c)+" "+gameMap[r].substring(c+1);
			}
			
			if(gameMap[r].charAt(c) === "B"){
				gameMap[r] = gameMap[r].substring(0,c)+" "+gameMap[r].substring(c+1);
				flyer = true;
			}

			if(gameMap[r].charAt(c) === "p"){
				gameMap[r] = gameMap[r].substring(0,c)+" "+gameMap[r].substring(c+1);
				this.speed = 2*this.speed;
				this.poweredUp = 55*8;
			}
			if(this.poweredUp > 0){
				this.poweredUp -= 1;
				if (this.poweredUp === 0){
					this.speed = 2;
				}
			}
		};

		CopObj.prototype.draw = function() {
			image(images[3], this.x-tileSize/2, this.y-tileSize/2, tileSize, tileSize);
		};
		CopObj.prototype.findOptions = function(){
		    var options = [];
		    var X = Math.floor((this.x)/tileSize);
			var Y = Math.floor((this.y)/tileSize);
			
			if (  ((this.x % tileSize) === ( tileSize/2 )) && ((this.y % tileSize) === ( tileSize/2 ))  ){
		        switch(this.dir){
		            case 0:
		                if(gameMap[Y].charAt(X-1) !== "w") {options.push(2);}// left
		                if(gameMap[Y].charAt(X+1) !== "w") {options.push(3);}// right
		                if(gameMap[Y-1].charAt(X) !== "w") {options.push(0);}// Keep going up
		                if(options.length === 0 && gameMap[Y+1].charAt(X) !== "w") {options.push(1);}//turn around
		                break;
		            case 1:
		                if(gameMap[Y].charAt(X-1) !== "w") {options.push(2);}// left
		                if(gameMap[Y].charAt(X+1) !== "w") {options.push(3);}// right
		                if(gameMap[Y+1].charAt(X) !== "w") {options.push(1);}// Keep going down
		                if(options.length === 0 && gameMap[Y-1].charAt(X) !== "w") {options.push(0);}//turn around
		                break;
		            case 2:
		                if(gameMap[Y-1].charAt(X) !== "w") {options.push(0);}// go up
		                if(gameMap[Y+1].charAt(X) !== "w") {options.push(1);}//go down
		                if(gameMap[Y].charAt(X-1) !== "w") {options.push(2);}//keep going
		                if(options.length === 0 && gameMap[Y].charAt(X+1) !== "w") {options.push(3);}// turn around
		                break;
		            case 3:
		                if(gameMap[Y-1].charAt(X) !== "w") {options.push(0);}// go up
		                if(gameMap[Y+1].charAt(X) !== "w") {options.push(1);}//go down
		                if(gameMap[Y].charAt(X+1) !== "w") {options.push(3);}//keep going
		                if(options.length === 0 && gameMap[Y].charAt(X-1) !== "w") {options.push(2);}// turn around
		                break;
		        }
			}


			return options;
			
		};
		CopObj.prototype.move = function() {
		    if (!flyer){
		        var x = this.x;
		        var y = this.y;
		        var posDir = this.findOptions();
		    
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
		    }
		    else {
		        var dx = (ROBBER.x === this.x) ? 0 :(ROBBER.x < this.x) ? -1 : 1;
		        var dy = (ROBBER.y === this.y) ? 0 :(ROBBER.y < this.y) ? -1 : 1;
		        this.x += dx;
		        this.y += dy;
		        
		    }

		};
		var count = 0;
		MapObj.prototype.draw = function(){
		    pushMatrix();
		    
			ROBBER.move();
			
		    var transX = 200-ROBBER.x;
		    var transY = 200-ROBBER.y;
		    
		    translate(transX, transY);
			noFill();
			stroke(255,255,255);
			strokeWeight(2);
			var row = 0;
			var col = 0;

			var haveReward = false;
			var numRewards = 0;
			for (row = 0; row < this.map.length; row++){
				for (col = 0; col < this.map[row].length; col++){
					switch(this.map[row].charAt(col)){
						case "w": 
						drawWall(col*tileSize, (row)*tileSize);
						break;
						case "r": 
						drawReward(col*tileSize, (row)*tileSize);
						haveReward = true;
						numRewards++;
						break;
						case "p": 
						drawSpeedUp(col*tileSize, (row)*tileSize);
						break;
						case "B": 
						drawBombs(col*tileSize, (row)*tileSize);
						break;
					}
				} 
			}

			if(!haveReward){
			    Mode = 3;
			    var i = 0; 
			    for(i = -40; i > -440; i -= 30){
			        REWARDS.push(new RewardsObj(i));
			    }
			}
			
			var i = 0;
			for(i = 0; i < COPS.length ; i++){
				COPS[i].move();
				COPS[i].draw();
			}
			
		    ROBBER.checkCollisions();

		    popMatrix();
		    
			ROBBER.draw();

		    // DRAW BANNER
		    fill(105, 105, 105);
		    rect(-5,-5,410,45);
			fill(255, 255, 255);
		    textSize(14);
			text("Power Up: " + Math.ceil(ROBBER.poweredUp/55),3,25);
		    text("Diamonds left: " + numRewards, 290, 25);
		    textSize(20);
		    
		    count++;
		    if (count < 30){
		        fill(255,0,0);
		    } else if (count < 60){
		        fill(0,0,255);
		    } else if (count < 90){
		        fill(255,255,255);
		    }
		    else {count = 0;}
		    if (flyer){
		        text("COPS ARE COMIN'", 95, 27);
		    }
		};

		var updateDiff = function() {
			if (keyArray[UP] === 1) {
				dif += 1;
			}
			if (keyArray[DOWN] === 1) { 
				dif -= 1;
			}
		};
		var drawBasicBG = function(){
			noStroke();
			background(55, 182, 250);
			fill(22, 138, 36);
			rect(0,250, 400, 150);
			var x = 0;
			var y = 0;
			for (x = 0; x < 400; x+=25){ image(images[5], x, 250, 25,25); }
			for (y = 250; y < 360; y+=Math.floor(25*2/3)){ 
			    image(images[5], 0, y, 25,25);  image(images[5], 400-25, y, 25,25); 
			}
			for (x = 0; x < 400; x+=25){ image(images[5], x, 360, 25,25);  }
		};

		var rot = 0;
		var angle = -1;
		var draw = function() {
			switch(Mode){
				case 0: {//MENU
				
					drawBasicBG();
					fill(255,255,255);
					textSize(70);
					text("MENU", 100, 60);
					textSize(14);
					text("Click Anywhere to Play...", 130, 80);

					
				    image(images[1], 80, 250, 80,80);
				    image(images[3], 230, 265, 80,80);

					//DIFFICULTY BOX
					fill(0, 123, 255);
					rect(7,150, 123, 75);
					textSize(20);
					fill(255, 255, 255);
					text("Difficulty: \n " + dif, 10, 182);
					rect(95,155, 30, 30);
					rect(95,190, 30, 30);
					textSize(40);
					fill(0, 123, 255);
					text("v", 100, 215);
					textSize(50);
					text("^", 98, 195);
					updateDiff();
					textSize(14);
					fill(255, 255, 255);
					text("Dificulty is the number of Cops!", 5, 242);
					textSize(16);
					
					// HOW TO PLAY BOX
					
					fill(0, 123, 255);
					rect(267, 150, 123, 75);
					fill(255,255,255);
					textSize(25);
					text("HOW TO\n   PLAY", 278, 180);
					break;
				}
				case 1: {
					background(22, 138, 36);
					MAP.draw();
					break;
				}
				case 2: {//GAMEOVER
					drawBasicBG();
					var i = 0;

						
					image(images[1], 110, 140, 180,180);
					image(images[10], 70, 100, 260,260);
		            
		            
					fill(255, 255, 255);
					textSize(60);
					text("Game Over", 40, 70);
					textSize(25);
					break;
				}
				case 3: {//YOU WIN
					drawBasicBG();
					
					fill(255, 255, 255);
					textSize(60);
					text("You Win!!", 70, 100);
					textSize(25);
					rot +=1;
					if(rot === 20){
					    rot = 0;
					    switch(angle){
					        case -1:
					            angle = -30;
					            break;
					        case -30:
					            angle = 1;
					            break;
					        case 1:
					            angle = 30;
					            break;
					        case 30:
					            angle = -1;
					            break;
					    }
					}
					
					pushMatrix();
		            translate(200, 225);
		            rotate(angle*PI/180); 
					image(images[9], -130,-125,260, 250);
		            popMatrix();
					
					var i = 0;
				    for(i = 0; i < REWARDS.length; i++){
				        REWARDS[i].move();
				        REWARDS[i].draw();
				    }

					break;
				}
				case 4: {//Make characters
		            drawRobber0();
		            drawRobber1();
		            drawRobber2();
		            drawPolice();
		            drawWall1();
		            drawWall2();
		            drawReward1();
		            drawSpeedUp1();
		            drawBomb1();
		            drawHappyRobber();
		            drawCage();

		            Mode = 0;
		            break;
				}
				case 5: {
				    drawBasicBG();
				    
					fill(255,255,255);
					textSize(55);
					text("HOW TO PLAY", 10, 60);
					textSize(14);
					text("Click Anywhere to Return to Menu...", 100, 80);
				    
				    
				    
				    fill(255,255,255);
				    textSize(14);
					text("You control the Robber using your arrow keys. Your\ngoal is to move aorund and collect all the diamonds.\nOther objects are on the board and can either help,\nor harm you. If the cops catch you, you go to jail and\nthe game is over. ", 10, 150);
		            
		                
					image(images[1], 30, 270, 30,30);
					text(" - You", 60, 290);
					image(images[3], 150, 275, 30,30);
					text(" - Cop", 180, 295);
					image(images[6], 270, 275, 30,30);
					text(" - Diamond", 300, 295);
					image(images[7], 30, 300, 30,30);
					text(" - Power Up : doubles your sped for 8 seconds", 60, 320);
					image(images[8], 30, 330, 30,30);
					text(" - Bomb : Cops can break all walls and find you", 60, 350);
					
				    break;
				
				}
			}
		};    
	}
};    


var canvas = document.getElementById("project3Canvas"); 
var processingInstance = new Processing(canvas, sketchProc);