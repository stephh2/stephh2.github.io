
var sketchProc = function(processingInstance) {
    with (processingInstance) {


    	size(400,400);

    	//Code for Game Play
    	//Variables for Game Play
		angleMode = "radians";
		var Mode = -1; 
		var keyArray = [];
		var dif = 10;
		var images = [];
		var tileSize = 20;
		var flyer = false;
		var REWARDS = [];

		var gameMap = [ "wwwwwwwwwwww",
		                "w----------w",
		                "w----------w",
		                "w----------w",
		                "w----------w",
		                "w----------w",
		                "w----------w",
		                "w----------w",
		                "w----------w",
		                "w----------w",
		                "w----------w",
		                "wwwwwwwwwwww"];


		var mapSize = tileSize*gameMap.length;
		var locations = [[11, 6]];


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
		    //Body of Elephant
		    var blob = [];
		    
		    blob.push(new PVector(200, 50));
		    blob.push(new PVector(120, 150));
		    blob.push(new PVector(100, 250));
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
		    blob.push(new PVector(300, 250));
		    blob.push(new PVector(280, 150));
		    blob.push(new PVector(200, 50));
		    
		    
		    blob = subdivide(blob);
		    fill(r, g, b);
		    stroke(0,0,0);
		    strokeWeight(2);
		    beginShape();
		    for (var i = 0; i < blob.length; i++) {
		        vertex(blob[i].x, blob[i].y);   
		    }    
		    vertex(blob[0].x, blob[0].y);
		    endShape();
		    
		    
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
		    
		    fill(r, g, b);
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
		    fill(r, g, b);
		    stroke(0,0,0);
		    strokeWeight(2);
		    beginShape();
		    for (var i = 0; i < blob.length; i++) {
		        vertex(blob[i].x, blob[i].y);   
		    }    
		    vertex(blob[0].x, blob[0].y);
		    endShape();
		    
		    
		    //eyes
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

		// Functions to draw characters
		var drawWall = function(x, y){
			if (y / tileSize % 2 === 0){
			    image(images[2], x, y, tileSize, tileSize);
			}
			else {
				image(images[3], x, y, tileSize, tileSize);
			}
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
		var TileObj = function(x, y){
			this.x = x;
			this.y = y;
		};
		var PlayerObj = function(p, x, y, d){
			//XY is center of figure
			this.role = p;
			this.x = mapSize/2-tileSize*0.5;
			this.y = mapSize-tileSize*1.5-1;
			this.dir = 1;
			this.state = 1;
			this.size = d;
			this.speed = 2;
			this.poweredUp = 0;
		};

		var MAP = new MapObj(gameMap);
		var TILES = [];




		var PLAYER = new PlayerObj("human", tileSize*3/2, tileSize*3/2, tileSize);
		//var COMPUTER = new PlayerObj("computer", tileSize*3/2, tileSize*3/2, tileSize);

		var mouseClicked = function() {
		    if (Mode === 0){
				Mode = 1;
			}
		};
		var keyPressed = function() { keyArray[keyCode] = 1;};
		var keyReleased = function() {keyArray[keyCode] = 0;};


		PlayerObj.prototype.draw = function() {
		    if(this.role === "human"){
			    image(images[0], 200-tileSize,200-tileSize,tileSize*2, tileSize*2);
		    }
		    else{
		        image(images[1], 200-tileSize,200-tileSize,tileSize*2, tileSize*2);
		    }
		};
		PlayerObj.prototype.move = function() {
			if (keyArray[LEFT] === 1) {	this.x -= 1;}
		    if (keyArray[RIGHT] === 1) { this.x += 1;}
			if (keyArray[UP] === 1) { this.y -= 1;}
			if (keyArray[DOWN] === 1) { this.y += 1;}
		};
		TileObj.prototype.draw = function() {
		    fill(92, 224, 206);
		    ellipse(this.x*tileSize, this.y*tileSize, tileSize, tileSize);
		};

		var count = 0;
		MapObj.prototype.draw = function(){
		    pushMatrix();
		    
		    var transX = 200-PLAYER.x;
		    var transY = 200-PLAYER.y;
		    
		    translate(transX, transY);
			noFill();
			
			stroke(255,255,255);
			strokeWeight(2);
			
		    var haveReward = false;
			var numRewards = 0;
			
			for (var row = 0; row < this.map.length; row++){
				for (var col = 0; col < this.map[row].length; col++){
					switch(this.map[row].charAt(col)){
						case "w": 
						drawWall(col*tileSize, (row)*tileSize);
						break;
						case "s": 
						fill(0, 133, 2);
						rect((col-0.5)*tileSize, (row)*tileSize, tileSize, tileSize);
						break;
						case "f": 
						fill(255, 0, 0);
						rect((col-0.5)*tileSize, (row)*tileSize, tileSize, tileSize);
						break;
					}
				} 
			}

		    for(var t = 0; t < TILES.length; t++){
		        TILES[t].draw();
		    }
		    
		    popMatrix();
		    
		    PLAYER.move();
		    PLAYER.draw();
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
		};

		var draw = function() {
			switch(Mode){
				case -1: {//Make characters
		            drawPlayerImg();
		            drawComputerImg();
		            drawWall2();
		            drawWall3();
		            
		            
		            for(var an = 0; an < 360; an += 10){
		                var angle = degrees(radians(an));
		                var x = floor(mapSize*cos(angle) + mapSize/2 );
		                var y = floor(mapSize*sin(angle) + mapSize/2 );
		                TILES.push( new TileObj(x,y) );
		            }
		            
		            Mode = 0;
		            break;
				}
				case 0: {//MENU
					drawBasicBG();
					fill(255,255,255);
					textSize(70);
					text("MENU", 100, 60);
					textSize(14);
					text("Click Anywhere to Play...", 130, 80);

					// HOW TO PLAY BOX
					fill(0, 123, 255);
					rect(267, 150, 123, 75);
					fill(255,255,255);
					textSize(25);
					text("HOW TO\n   PLAY", 278, 180);
					break;
				}
				case 1: {
					background(0,0,0);
					MAP.draw();
					break;
				}
			}
			
			fill(255, 255, 255);
			text("Player : " + PLAYER.x + ", " + PLAYER.y, 100,130);
			text("Tiles : " + TILES.length, 100,160);
		};    
	}
};    


var canvas = document.getElementById("project_Canvas"); 
var processingInstance = new Processing(canvas, sketchProc); 