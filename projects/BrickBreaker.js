
var sketchProc = function(processingInstance) {
    with (processingInstance) {


    	size(400,400);

    	//Code for Game Play
    	var startX = 200;
		var startY = 350;
		var blockBreakerMode = 0;
		var BALLS = [];
		var BLOCKS = [];

		var blocks = ["----------",
		             "-bbbbbbbb-",
		             "-b------b-",
		             "-b------b-",
		             "-b------b-",
		             "-b------b-",
		             "-b------b-",
		             "----------",
		             "-----------",
		             "----------"];

		var blockObj = function(x, y) {
		    this.x = x;
		    this.y = y;
		    this.size = 40;
		    this.val = floor(random(50,200));
		    this.r = floor(random(50,255));
		    this.b = floor(random(50,255));
		    this.g = floor(random(50,255));
		};
		blockObj.prototype.draw = function(){
		    strokeWeight(2);
		    stroke(0,0,0);
		    fill(this.r, this.g, this.b);
		    rect(this.x - this.size/2, this.y - this.size/2, this.size, this.size, this.size/10);
		    fill(0,0,0);
		    text(this.val, this.x-10, this.y+5);
		};



		var ballObj = function() {
		    this.pos = new PVector(startX, startY);
		    this.dir = new PVector(0,0);
		    this.movable = 0;
		    this.size = 15;
		};

		ballObj.prototype.draw = function() {
		    fill(255, 255, 255);
		    ellipse(this.pos.x, this.pos.y, this.size, this.size);
		};

		ballObj.prototype.move = function() {
		    if (this.movable === 1){
		        this.pos.add(this.dir);
		        if (this.pos.x > width || this.pos.x < 0){
		            this.dir.x = -this.dir.x;
		        }
		        if (this.pos.y+20 > height){
		            this.dir.set(0,0);
		            this.movable = 0;
		        }
		        if (this.pos.y < 0){
		            this.dir.y = -this.dir.y;
		        }
		    }
		};


		ballObj.prototype.checkCollisions = function(){
		    var minDist = floor((BLOCKS[0].size + this.size)/2);
		    var xDir = this.dir.x;
		    var yDir = this.dir.y;
		    for(var b = 0; b < BLOCKS.length; b++){
		        var rightWall = BLOCKS[b].x - minDist;
		        var leftWall = BLOCKS[b].x + minDist;
		        var upWall = BLOCKS[b].y - minDist;
		        var downWall = BLOCKS[b].y + minDist;
		        //moving right
		        if (this.dir.x > 0 && (leftWall >= this.pos.x) && (topWall < this.pos.y) && (bottomWall > this.pos.y) ){
		            xDir = -this.dir.x;
		        }
		        //moving left


		        //moving down
		        if (this.dir.y > 0 && (BLOCKS[b].y - this.pos.y) < minDist && abs(this.pos.x - BLOCKS[b].x) < minDist){
		            yDir = -this.dir.y;
		        }
		        
		        this.dir.x = xDir;
		        this.dir.y = yDir;
		        
		    }
		    
		};

		var mouseDragged = function() {
		    stroke(148, 148, 148);
		    line(startX, startY, mouseX, mouseY);
		};

		var mouseReleased = function() {
		    if (abs(mouseX - startX) > 5 || abs(mouseY - startY) > 5){
		        var b;
		        for(b = 0; b < BALLS.length; b++ ){
		            var speed = 4 * (mouseX - startX)/abs(mouseX - startX);
		            BALLS[b].dir.set( speed , speed*(mouseY - startY)/(mouseX - startX));
		        }
		        BALLS[0].movable = 1;
		    }
		};



		var BoardInit = function(){
		    var r,c;
		    for(r = 0 ; r < blocks.length; r++){
		        for(c = 0 ; c < blocks[r].length; c++){
		            if (blocks[r].charAt(c) === 'b'){
		                BLOCKS.push(new blockObj(40*c + 20, 40*r + 20) );
		            }
		        } 
		    }
		};

		var drawBoard = function(){
		    var b;
		    for(b = 0 ; b < BLOCKS.length; b++){
		        BLOCKS[b].draw();
		    }
		};


		var shootBalls = function(){
		    var reset = true;
		    var b;
		    for(b = 0; b < BALLS.length; b++ ){
		        if (b > 0){
		            var dist = sqrt( sq(BALLS[b].pos.x - BALLS[b-1].pos.x) + sq(BALLS[b].pos.y - BALLS[b-1].pos.y) );
		            if (dist > 40){
		                BALLS[b].movable = 1;
		            }
		        }
		        BALLS[b].move();
		        BALLS[b].draw();
		        BALLS[b].checkCollisions();
		        if (BALLS[b].pos.y < startY+19){
		            reset = false;
		        }
		    }
		    
		    if (reset){
		        for(b = 0; b < BALLS.length; b++ ){
		            BALLS[b].pos.set(startX, startY);
		            BALLS[b].dir.set(0,0);
		        } 
		    }
		};

		var draw = function() {
		    switch(blockBreakerMode){
		        case 0:
		            var i;
		            for(i=0; i< 1; i++){
		                BALLS.push( new ballObj() );
		            }
		            blockBreakerMode = 1;
		            BoardInit();
		            break;
		        case 1:
		            background(0, 0, 0);
		            drawBoard();
		            shootBalls();
		            break;
		    }
		    
		};


	}
};    


var canvas = document.getElementById("BrickBreakerCanvas"); 
var processingInstance = new Processing(canvas, sketchProc); 