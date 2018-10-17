
var sketchProc = function(processingInstance) {
    with (processingInstance) {

    	size(400,400);

    	//Variables for Game Play
		var bg = color(123, 228, 235);
		var TextColor = color(100,100,100);
		var Score = 0;
		var Lives = 3;
		var Speed = 1;
		var Menu = 1;
		var Play = 0;
		var gameOver = 0;
		var keyArray = [];
		var cars = [];

		var mouseClicked = function() {
		    var xCor= mouseX;
		    var yCor= mouseY;
		    //rect(130, 200, 140, 50)
		    if ((xCor > 130) && (xCor < 270)&& (yCor > 150) && (yCor < 200)){
		        Menu = 0;
		        Play = 1;
		        gameOver = 0;
		    }
		};

		var myHObj = function(x, y) {
		    this.x = x;
		    this.y = y;
		};

		var carObj = function(x, y) {
		    this.x = x;
		    this.y = y;
		};

		var cars = [];
		cars.push(new carObj(300,-80));
		var myH = new myHObj(200, 200);

		var updateInfo = function(){
		    fill(0,0,0);
		    textSize(16);
		    text("Lives:  " + Lives, 5, 20);
		    text("Score: " + Score, 5, 40); 
		    text("Level:  " + (Speed + cars.length - 1), 5, 60);  
		};

		var getCarY = function(){
		    var lowest = 0;
		    for(var i = 0 ; i < cars.length; i++){
		        if(cars[i].y < lowest){
		            lowest = cars[i].y;
		        }
		    }
		    return lowest - 150;
		};

		var levelUp = function(){
		    if(Speed < 5){
		        Speed += 1;
		    }
		    else {
		        if (cars.length < 5 ) {
		            var temp = new carObj(random(0,100)+ 250, getCarY());
		            cars.push(temp);
		        }
		    }
		    playSound(getSound("retro/coin"));
		    
		};

		var OCT = function(V, Color){
		    var left = V;
		    var right = left;
		    var W = width-left-right;
		    var S = W/(1+sqrt(2));
		    var dS = sqrt(2)*S/2;
		    fill(Color);
		    rect(200-W/2,200-S/2,W,S);
		    quad(200-W/2,   200-S/2, 
		         200+W/2,   200-S/2, 
		         200+W/2-dS,200-S/2-dS,
		         200-W/2+dS,200-S/2-dS 
		    );
		    quad(200-W/2,    200-S/2+S-1, 
		         200+W/2,    200-S/2+S-1, 
		         200+W/2-dS, 200-S/2+S+dS,
		         200-W/2+dS, 200-S/2+S+dS 
		    );
		};

		var drawBG = function(){
		    //Fill Background
		    background(bg);
		    
		    //Background of road sign
		    rotate(45);
		    fill(255, 218, 117);
		    rect(100,-100, 200, 200,10);
		    rotate(-45);
		    
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
		    fill(bg);
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

		    updateInfo();
		};

		myHObj.prototype.draw = function(item) {
		    var Height = 190;
		    var Length = 140;
		    var Width = 40;
		    
		    if(item === 1){ // H
		        //Draw H
		        fill(TextColor);
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
		    }
		    else {//PARKING
		        fill(184, 37, 37);
		        rect(this.x-7, 343, 55, 50);
		        rect(this.x+132, 343, 55, 50);
		        textSize(16);
		        fill(255, 255, 0);
		        text("PARK\nHERE", this.x-2, 364);
		        text("PARK\nHERE", this.x+137, 364);
		    }
		};

		var inParking = function(x, y){
		    if (x - myH.x < 20 && x - myH.x > 0 && y >= 340){//LEft Garage
		        return true;    
		    }
		    if (x - myH.x - 150 < 20 && x - myH.x - 130 > 0 && y >= 340){//Right Garage
		        return true;    
		    }
		    return false;
		};

		myHObj.prototype.move = function() {
		    if (keyArray[LEFT] === 1) {
		        this.x -= Speed*3/4;
		    }
		    if (keyArray[RIGHT] === 1) {
		        this.x += Speed*3/4;
		    }
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

		var keyPressed = function() {
		    keyArray[keyCode] = 1;
		};

		var keyReleased = function() {
		    keyArray[keyCode] = 0;
		};

		var draw = function() {
		    if (Menu === 1) {
		        background(109, 131, 242);
		        fill(255,255,255);
		        textSize(70);
		        text("MENU", 100, 100);
		        rect(130, 150, 140, 50);
		        textSize(16);
		        
		        var top = 250;
		        text("How to play:", 20, top);
		        text("Cars will fall from the top of the screen, and \n  you must 'park' them in the parking garage \n  before they hit the ground. \nAfter 3 cars hit the ground, your game is over. \nMove the garage left and right with the arrow keys.\nThe cars will fall faster the higher you score.", 20, top+20);
		        
		        textSize(40);
		        fill(109, 131, 242);
		        text("Play", 160, 190);
		        if (mousePressed) {
		            gameOver = 0;
		            Menu = 0;
		            Play = 1;
		        }
		    }
		    if (Play === 1) {
		        drawBG();
		        myH.move();
		        myH.draw(1);
		        for (var i = 0; i < cars.length; i++) {
		            if(cars[i].y > 340){
		                if(inParking(cars[i].x, cars[i].y)){
		                    Score += 1;
		                    playSound(getSound("rpg/metal-chime"));
		                    cars[i].y = getCarY();
		                    cars[i].x = random(0,100) + 250;
		                    if(Score % 5 === 0 && Score !== 0){
		                        levelUp();
		                    }
		                }
		            }
		            
		            if(cars[i].y > 400){
		                Lives -= 1;
		                playSound(getSound("rpg/metal-clink"));
		                cars[i].y = getCarY();
		                cars[i].x = random(0,100) + 250;
		                if(Lives < 0){
		                    gameOver = 1;
		                    Play = 0;
		                    Menu = 0;
		                }
		            }
		            
		            cars[i].y += Speed;
		            cars[i].draw();
		        }
		        myH.draw(2);
		    }
		    if (gameOver === 1) {
		        background(0,0,0);
		        OCT(80, color(255,0,0));
		        OCT(85, color(255,255,255));
		        OCT(90, color(255,0,0));
		        fill(255, 255, 255);
		        textSize(60);
		        text("GAME\nOVER", 110, 190);
		        textSize(25);
		        text("Score : "+ Score, 150, 370);
		    }
		};
    	
	}
};    


var canvas = document.getElementById("ParkCanvas"); 
var processingInstance = new Processing(canvas, sketchProc); 