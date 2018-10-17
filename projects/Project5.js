
var sketchProc = function(processingInstance) {
    with (processingInstance) {


        size(400,400);

        angleMode = "radians";
        var keyArray = [];
        var gameMode = 0;
        var images = [];
        var lives = 3;
        var timeRemaining = 0;

        //initial drawing images
        var drawAlien = function(){
            background(22, 138, 36, 0);
            var g = color(3, 145, 3);
        	noStroke();
        	
        	
        	fill(g);
        	ellipse(200,100,180,100);
        	rect(185, 140, 30, 40);
        	
        	rect(160, 160, 80, 120, 30);
        	fill(255, 255, 255);
        	
        	fill(g);
        	stroke(g);
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
            fill(255, 255, 255);
            
            stroke(0,0,0);
            strokeWeight(1);
            ellipse(165,92,40,40);
            ellipse(235,92,40,40);
            fill(0,0,0);
            ellipse(165,92,20,20);
            ellipse(235,92,20,20);
            strokeWeight(6);
            noFill();
            arc(200,115,120,40,radians(20),radians(160));
            
            strokeWeight(20);
        	stroke(g);
        	line(160,60,140,20);
        	line(240,60,260,20);

            images.push(get(70,0,width-70,height));
        };
        var drawPlanet = function(){
            background(0, 0, 0, 0);
            noStroke();
            fill(58, 139, 196);
            ellipse(200,200,380,380);
            fill(37, 120, 7);
            var d = ["----------------------------------------", 
                    "----------------------------------------", 
                    "----------------------------------------", 
                    "----------------------------------------", 
                    "----------------------------------------", 
                    "----------------------------------------", 
                    "----------------------------------------", 
                    "------gggggggggg----------gggggggg------", 
                    "-----gggggggggggg--------gggggggggg-----", 
                    "-----gggggggggggg-------gggggggggggg----", 
                    "-----ggggggggggggg------ggggggggggggg---", 
                    "-----ggggggggggggg-----gggggggggggggg---", 
                    "-----gggggggggggggg-----gggggggggggggg--", 
                    "-----gggggggggggggg----ggggggggggggggg--", 
                    "-----gggggggggggggg-----gggggggggggggg--", 
                    "-----gggggggggggggg--------g----ggggggg-", 
                    "-----gggggggggggggg-------gg----ggggggg-", 
                    "-----gggggggggggggg-------------ggggggg-", 
                    "-----gggggggggggggg----gggggggggggggggg-", 
                    "-----g-gggggg--ggg-----gggggggggggggggg-", 
                    "-----g-ggggg----gg-----gggggggggggggggg-", 
                    "-------gggg-----gg-----gggggggggggggggg-", 
                    "----- gggg--------------ggggggggggggggg-", 
                    "-----ggg----------------ggggggggggggggg-", 
                    "-----gggggggggg---------gggggggggggggg--", 
                    "-----ggggggggggg-----------ggggggggggg--", 
                    "-----gggggggggggg------------ggggggggg--", 
                    "-----gggggggggggg-----------ggggggggg---", 
                    "------ggggggggggg------------gggggggg---", 
                    "-------gggggggggg-----------gggggggg----", 
                    "--------ggggggggg------------ggggggg----", 
                    "---------gggggggg------------gggggg-----", 
                    "----------ggggggg------------gggggg-----", 
                    "------------ggggg------------ggggg------", 
                    "-------------gggg-------------gg--------", 
                    "--------------ggg-----------------------"];
            
            var row, col;
            for (row = 0; row < d.length; row++){
        		for (col = 0; col < d[row].length; col++){
        		    var w = 10;
        		    var x = col*w;
        		    var y = row*w;
        			switch(d[row].charAt(col)){
        				case "g": 
        				    fill(37, 120, 7);
        				break;
        				default:
        				    fill(0,0,0,0);
        				break;
        			}
        			rect(x, y, w, w);
        			
        		} 
        	}
            
            images.push(get(0,0,width,height));
        };


        var platformObj = function(){
            this.x = 200;
        };
        platformObj.prototype.draw = function() {
            fill(0,255,255);
        	rect(this.x-25, 380, 50, 20);
        };
        platformObj.prototype.move = function() {
        	if (keyArray[LEFT] === 1) {
        		this.x -= 1;
        	}
        	else  if (keyArray[RIGHT] === 1) { 
                    this.x += 1;
        	}
        };
        var platform = new platformObj();



        //planet Object
        var planetObj = function(x, y){
            this.x = x;
            this.y = y;
            this.size = 40;
            this.mode = 0; //0 - being held       1 - in path
            this.angle = radians( 90 );
            this.centerX = 0;
            this.centerY = 215;
            this.rotAngle = 0;
        };
        planetObj.prototype.draw = function() {
            if(this.mode === 1){
                this.rotAngle = this.rotAngle +  radians(5);
            }
            pushMatrix();
            translate((this.x), (this.y));
            rotate(this.rotAngle);
            image(images[1], -this.size/2, -this.size/2, this.size, this.size);
            popMatrix();
            
        };
        planetObj.prototype.move = function() {
            if (this.mode === 0){
                this.x = platform.x;
                this.y = 363;
                this.centerX = this.x;
            }
            else if (this.mode === 1){
                this.angle += radians(2);
                var xWidth = 80;
                var yWidth = 153;
                var dx = xWidth*cos(this.angle);
                var dy = yWidth*sin(this.angle);
                this.x = this.centerX + dx;
                this.y = this.centerY + dy;
                
                if (this.angle >= radians(360+90)){
                    if (abs(this.x-platform.x) < 20){
                        this.angle = radians(90);
                        this.mode = 0;
                    }
                    else {
                        lives--;
                        if (lives > 0){
                            this.mode = 0;
                            
                        }
                    }    
                }
            }
        };
        var planet = new planetObj( 300, 300);



        //Alien Object
        var alienObj = function(r, c){
            this.x0 = (r % 2 === 0) ? 380 : 20;
            this.x = this.x0;
            this.y = c*60+10;
            this.dir = (this.x > 200) ? -1 : 1;
            this.size = 50;
            this.won = false;
        };
        alienObj.prototype.draw = function() {
            image(images[0], this.x-this.size/2, this.y-this.size/2, this.size, this.size);
        };
        alienObj.prototype.move = function(){
            var dist = sqrt( sq(this.x - planet.x) + sq(this.y - planet.y));
            var distx = planet.x-this.x;
            if(dist < 50){
                this.x -= 10*this.dir;
            }
            if ( ( this.x > 15 && this.dir === -1 ) || 
                ( this.x < 385 && this.dir === 1 )){
                this.x += this.dir;
            }
            else if (!this.won){
                this.won = true;
            }
        };
        alienObj.prototype.collisionCheck = function(){
            var dist = sqrt( sq(this.x - planet.x) + sq(this.y - planet.y));
            if( dist < 40 && !this.won) {
                this.x = this.x0;
            }
        };
        var Aliens = [];
        Aliens.push(new alienObj(1, 1));
        Aliens.push(new alienObj(2, 4));
        Aliens.push(new alienObj(3, 3));
        Aliens.push(new alienObj(4, 2));
        //Aliens.push(new alienObj(5, 5));


        //interaction functions
        var mouseReleased = function(){
            if(gameMode === 1){
                gameMode = 2;
            }else if(gameMode === 3 || gameMode === 4){
                gameMode = 1;
                Aliens = [];
                Aliens.push(new alienObj(1, 1));
                Aliens.push(new alienObj(2, 4));
                Aliens.push(new alienObj(3, 3));
                Aliens.push(new alienObj(4, 2));
                planet = new planetObj( 300, 300);
                platform = new platformObj();
            }else if( gameMode === 2 && planet.mode === 0){
                planet.mode = 1;
            }
        };
        var keyPressed = function() {  
            keyArray[keyCode] = 1;
            if (keyCode === 32 && planet.mode === 0){
                planet.mode = 1;
            }
        };
        var keyReleased = function() {
            keyArray[keyCode] = 0;
            
        };

        var drawBanner = function(){ 
            fill(100,100,100);
            rect(-10,-10,420,50);
            textSize(25);
            fill(255,255,255);
            text("Time Left: " + ceil(timeRemaining/60) + " sec", 20, 28);
            timeRemaining--;
            var l;
            for(l = 0; l < lives; l++){
                image(images[1], 280+l*40, 0, 40, 40);  
            }
            
        };

        var rotAngle  = 0;
        var draw = function() {
            switch( gameMode ){
                case 0:{
                    drawAlien();
                    drawPlanet();
                    gameMode = 1;
                    break;
                }
                case 1:{//Menu
                    background(60,60,60);
                    fill(255,255,255);
                    textSize(35);
                    text("Welcome to Avaiders!", 30, 50);
                    textSize(15);
                    text("click anywhere to play...", 120, 80);
                    
                    
                    
                    image(images[0], 50, 110, 100, 130);
                    image(images[1], 250, 120, 120, 120);
                    
                    
                    timeRemaining = 60*30;
                    text("   Use the keys to control the platform at the bottom of the \nscreen. Using the space bar or the mouse click, throw the \nplanet and try to hit the aliens. If they all make it to the \nother side, your planet gets invaded and you lose. \n   If your platform doesnt catch the planet, it is lost in \nspace. Be careful! You only own three planets! If you keep \nthem away for 30 seconds, they will get bored, leave and \nyou win!", 10, 260);
                    break;
                }
                case 2:{
                    background(60,60,60);
                    drawBanner();
                    planet.move();
                    planet.draw();
                    
                    platform.move();
                    platform.draw();
                    var won = 0;
                    var a = 0;
                    for(a = 0; a < Aliens.length; a++){
                        Aliens[a].move();
                        Aliens[a].collisionCheck();
                        Aliens[a].draw();
                        if (Aliens[a].won){
                            won++;
                        }
                    }
                    if (timeRemaining === 0){
                        gameMode = 4;
                    }
                    if (won === Aliens.length){
                        gameMode = 3;
                    }
                    break;
                }
                case 3:{//You Lose
                    background(60,60,60);
                    textSize(50);
                    text("YOU LOSE...", 50, 200);
                    break;
                }
                case 4:{//You Win
                    background(60,60,60);
                    textSize(50);
                    text("You win!", 100, 200);
                    break;
                }
            }
            
        };
    }
};    


var canvas = document.getElementById("project5Canvas"); 
var processingInstance = new Processing(canvas, sketchProc); 