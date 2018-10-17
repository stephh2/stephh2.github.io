
var sketchProc = function(processingInstance) {
    with (processingInstance) {

    	size(400,400);

		//Variables for Game Play
		var Mode = 4; // 0 - Menu 1 - Play 2 - GameOver 3 - You Win 4-image capture
		var keyArray = [];
		var dif = 3;
		var images = [];

		var gameMap = ["wwwwwwwwwwwwwwww",
								"w--pwr----rwp--w",
								"w-www-wwww-www-w",
								"wr-----r------rw",
								"wwww-wwwww-wwwww",
								"w-----r-------rw",
								"wrwww-ww-wwwrwww",
								"w--------r-----w",
								"wwwrwww-wwww-w-w",
								"wr--------rw-w-w",
								"www-wwwwww-w-wrw",
								"wr------rw-w-w-w",
								"w-www-wwww-w-w-w",
								"w-------r--w-r-w",
								"w-wwwww-w-wwww-w",
								"w-wr----wr-----w",
								"wwwwwwwwwwwwwwww"];


		var drawWall = function(x, y){
			noStroke();
			fill(0,0,0);
			rect(x, y, 25, 25);
			if (y / 25 % 2 === 0){
				fill(230, 134, 0);
				rect(x, y+1, 12, 7);
				rect(x+13, y+1, 11, 7);

				rect(x, y+9, 6, 8);
				rect(x+7, y+9, 11, 8);
				rect(x+19, y+9, 6, 8);

				rect(x, y+18, 12, 7);
				rect(x+13, y+18, 11, 7);
			}
			else {
				fill(230, 134, 0);

				rect(x, y+1, 6, 7);
				rect(x+7, y+1, 11, 7);
				rect(x+19, y+1, 6, 7);

				rect(x, y+9, 12, 8);
				rect(x+13, y+9, 11, 8);

				rect(x, y+18, 6, 7);
				rect(x+7, y+18, 11, 7);
				rect(x+19, y+18, 6, 7);
			}
		};
		var drawReward = function(x, y){
			noStroke();
			fill(0, 72, 255);
			quad(x+12, y+2, 
					x+5, y+12,
					x+12, y+22,
					x+19, y+12);
			fill(135, 227, 255);
			quad(x+12, y+6, 
					x+9, y+12,
					x+12, y+18,
					x+15, y+12);

		};
		var drawSpeedUp = function(x, y){
			noStroke();
			fill(238, 255, 0);
			triangle(x+12, y+2, 
			x+6, y+15,
			x+12, y+15);
			triangle(x+12, y+25, 
			x+18, y+12,
			x+12, y+12);
		};

		var RobberObj = function(x, y, d){
			//XY is center of figure
			this.x = x;
			this.y = y;
			this.dir = 1;
			this.state = 1;
			this.size = d;
		};
		var CopObj = function(x, y, d){
			this.x = x;
			this.y = y;
			this.state = 1;
			this.dir = 1;//0-up 1-down 2-left 3-right
			this.size = d;
		};
		var COPS = [];
		var ROBBER = new RobberObj(25 + 12, 400-25-12, 22);

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
			//rect(160, 180, 80, 20);
			//rect(160, 220, 80, 20);
			
			
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
			else if (Mode === 0){
				for (var i = 0; i < dif; i++){
					COPS.push(new CopObj(200, 12, 22));
				}
				Mode = 1;
			}
		};

		var WallCheck = function(x, y, v){
			var coordX1 = Math.floor((x-v)/25);//right X value
			var coordX2 = Math.floor((x+v)/25);//left X value
			var coordY1 = Math.floor((y-v)/25) + 1;//top Y value
			var coordY2 = Math.floor((y+v)/25) + 1;//bottom Y value

			if( gameMap[coordY1].charAt(coordX1) === "w" ||
			gameMap[coordY1].charAt(coordX2) === "w" ||
			gameMap[coordY2].charAt(coordX1) === "w" ||
			gameMap[coordY2].charAt(coordX2) === "w"){
				return false;
			}

		return true;
		};

		RobberObj.prototype.draw = function() {
			image(images[this.dir], this.x-12, this.y-12, 25,25);
		};

		var speed = 2;
		RobberObj.prototype.move = function() {
			var x = this.x;
			var y = this.y; 

			if (keyArray[LEFT] === 1) {
			    this.dir = 0;
				x -= speed;
			}
			else{
			    if (keyArray[RIGHT] === 1) { 
		            this.dir = 2;
		            x += speed;
			    }
			    else{
			        this.dir = 1;
			    }
			}
			if (keyArray[UP] === 1) {
				y -= speed;
			}
			if (keyArray[DOWN] === 1) { 
				y += speed;
			}
			if ( WallCheck(x, y, 8) ){
				this.x = x;
				this.y = y;
			}

		};
		var poweredUp = 0;
		RobberObj.prototype.checkCollisions = function(){

			var i = 0;
			//CHECK FOR COLLISION WITH COP FACE
			for(i = 0; i < COPS.length; i++){
				if( ( abs(COPS[i].x - this.x) < 24 && abs(COPS[i].y - this.y) < 5 )||
				( abs(COPS[i].x - this.x) < 5 && abs(COPS[i].y - this.y) < 24 ) ){
				Mode = 2;
				}
			}

			var r = Math.floor( ( this.y ) / 25 ) + 1;
			var c = Math.floor( ( this.x ) / 25 );

			if(gameMap[r].charAt(c) === "r"){
				gameMap[r] = gameMap[r].substring(0,c)+" "+gameMap[r].substring(c+1);
			}

			if(gameMap[r].charAt(c) === "p"){
				gameMap[r] = gameMap[r].substring(0,c)+" "+gameMap[r].substring(c+1);
				speed = 2*speed;
				poweredUp = 55*8;
			}
			noStroke();
			fill(0,0,0);
			rect( 0,75, 100, 25);
			fill(255, 255, 255);
			text("Power Up : " + Math.ceil(poweredUp/55), 2,92);
			if(poweredUp > 0){
				poweredUp -= 1;
				if (poweredUp === 0){
					speed = 2;
				}
			}
		};

		CopObj.prototype.draw = function() {
			image(images[3], this.x-12, this.y-12, 25,25);
		};

		CopObj.prototype.move = function() {
			var x = this.x;
			var y = this.y;
			var posDir = [];

			if (this.dir === 0) {//UP
				if (WallCheck(x, y-1, 12)){ posDir.push(0); }//can I go left?
				if (WallCheck(x-1, y, 12)){ posDir.push(2); }//can I go left?
				if (WallCheck(x+1, y, 12)){ posDir.push(3); }//can I go right?
				if (posDir.length === 0) { posDir.push(1); } //if no other option turn around
			}
			else if (this.dir === 1) {//DOWN
				if (WallCheck(x, y+1, 12)){ posDir.push(1); }//can I keep going down?
				if (WallCheck(x-1, y, 12)){ posDir.push(2); }//can I go left?
				if (WallCheck(x+1, y, 12)){ posDir.push(3); }//can I go right? 
				if (posDir.length === 0) { posDir.push(0); } //if no other option turn around
			}
			else if (this.dir === 2) {//LEFT
				if (WallCheck(x-1, y, 12)){ posDir.push(2); }//can I keep going left?
				if (WallCheck(x, y-1, 12)){ posDir.push(0); }//can I go up?
				if (WallCheck(x, y+1, 12)){ posDir.push(1); }//can I go down?
				if (posDir.length === 0) { posDir.push(3); } //if no other option turn around
			}
			else if (this.dir === 3) {//RIGHT
				if (WallCheck(x+1, y, 12)){ posDir.push(3); }//can I keep going right?
				if (WallCheck(x, y-1, 12)){ posDir.push(0); }//can I go up?
				if (WallCheck(x, y+1, 12)){ posDir.push(1); }//can I go down?
				if (posDir.length === 0) { posDir.push(2); } //if no other option turn around
			}

			var nextDir = posDir[ Math.floor(random(0,posDir.length)) ];//dir of next turn 

			y = ( nextDir === 0 ) ? y - 1:
				( nextDir === 1 ) ? y + 1 : this.y;

			x = ( nextDir === 2 ) ? x - 1 :
				( nextDir === 3 ) ? x + 1 : this.x;


			if (WallCheck(x, y, nextDir)){
				this.x = x;
				this.y = y;
				this.dir = nextDir; 
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

		var drawMap = function(){
			var row = 0;
			var col = 0;

			var haveReward = false;
			for (row = 1; row < gameMap.length; row++){
				for (col = 0; col < gameMap[row].length; col++){
					switch(gameMap[row].charAt(col)){
						case "w": 
						drawWall(col*25, (row-1)*25);
						break;
						case "r": 
						drawReward(col*25, (row-1)*25);
						haveReward = true;
						break;
						case "p": 
						drawSpeedUp(col*25, (row-1)*25);
						break;
					}
				} 
			}

			if(!haveReward){
			Mode = 3;
			}

		};

		var keyPressed = function() { keyArray[keyCode] = 1;};
		var keyReleased = function() {keyArray[keyCode] = 0;};

		var drawBasicBG = function(){
			noStroke();
			background(55, 182, 250);
			fill(22, 138, 36);
			rect(0,250, 400, 150);
			var x = 0;
			var y = 0;
			for (x = 0; x < 400; x+=25){    drawWall(x, 250);   drawWall(x, 255); }
			for (y = 250; y < 360; y+=4){   drawWall(0,y);      drawWall(375,y);  }
			for (x = 0; x < 400; x+=25){ drawWall(x,360); drawWall(x,365); }
		};


		var ROBBERS = []; 
		var draw = function() {
			switch(Mode){
				case 0: {//MENU
							drawBasicBG();
							fill(255,255,255);
							textSize(70);
							text("MENU", 100, 60);
							textSize(14);
							text("Click Anywhere to Play...", 130, 80);

							
						    image(images[1], 180, 188, 60,60);
						    image(images[3], 270, 200, 60,60);

							fill(255,255,255);
							text("How to Play? - You are the Robber player. Use the arrow\nkeys to move around and collect the blue diamonds. \nLightning Bolts are power ups that double your speed\nfor 8 seconds. If you hit a Cop, you die and the \ngame is over. If you get all the diamonds, you win!", 27, 292);



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
							text("Dificulty is the number of Cop\nmen so chose carefully!", 150, 150);
							textSize(16);
							
							
							
							break;
							}

				case 1: {
					background(22, 138, 36);
					drawMap();
					ROBBER.move();
					ROBBER.draw();
					var i = 0;
					for(i = 0; i < COPS.length ; i++){
						COPS[i].move();
						COPS[i].draw();
					}
					ROBBER.checkCollisions();
					break;
				}
				case 2: {//GAMEOVER
					drawBasicBG();
					var i = 0;
					for(i = 0; i < COPS.length ; i++){
						COPS[i].size = 30;
						if(COPS.length === 1){COPS[i].x = 200;}
						else {COPS[i].x = 50 + i*(270/(COPS.length-1));}

						if( i % 2 === 0){ COPS[i].y = 310; }
						else { COPS[i].y = 280; }
						
						image(images[3], COPS[i].x-12, COPS[i].y-12, 60,60);
					}

					fill(255, 255, 255);
					textSize(60);
					text("Game Over", 40, 100);
					textSize(25);
					break;
				}
				case 3: {//YOU WIN
					drawBasicBG();
					var i = 0;
					if (ROBBERS.length === 0){
						for (i = 0; i < dif; i++){
							var x = 0;
							var y = 0;
							if(dif === 1){x = 200;}
							else {x = 50 + i*(260/(dif-1));}

							if( i % 2 === 0){ y = 300; }
							else { y = 270; }

							ROBBERS.push(new RobberObj(x, y, 30));
						}
					}
					for (i = 0; i < ROBBERS.length; i++){
						
						image(images[1], ROBBERS[i].x-12, ROBBERS[i].y-12, 60,60);
					}

					fill(255, 255, 255);
					textSize(60);
					text("You Win!!", 70, 100);
					textSize(25);
					break;
				}
				case 4: {//Make characters
				
		            drawRobber0();
		            drawRobber1();
		            drawRobber2();
		            drawPolice();
		            
		            Mode = 0;
				}
			}
		};  
	}
};    


var canvas = document.getElementById("project2Canvas"); 
var processingInstance = new Processing(canvas, sketchProc);   
