 
var sketchProc = function(processingInstance) {
    with (processingInstance) {


        size(400,400);

        angleMode = "radians";

        var gameMode = 0;
        var images = [];
        var score = 6;

        //initial drawing images
        var drawBall0 = function(){
            background(0,0,0,0);
            stroke(0,0,0);
            strokeWeight(15);
            fill(255,0,0);
            var w = 386;
            arc(200, 200, w,w, radians(0), radians(45));
            fill(255, 127, 0);
            arc(200, 200, w, w, radians(45), radians(90));
            fill(255, 255, 0);
            arc(200, 200, w, w, radians(90), radians(135));
            fill(0, 166, 8);
            arc(200,200, w, w, radians(135), radians(180));
            fill(0,200,255);
            arc(200,200, w, w, radians(180), radians(225));
            fill(0,0,255);
            arc(200,200, w, w, radians(225), radians(270));
            fill(127,0,255);
            arc(200,200, w, w, radians(270), radians(315));
            fill(255,0,255);
            arc(200,200, w, w, radians(315), radians(360));
            images.push(get(0,0,width,height));
        };
        var drawLedge1 = function(){
            background(0,0,0,0);
            strokeWeight(2);
            fill(99, 46, 0);
            pushMatrix();
            rotate( radians(-40) );
            rect(-180, 120, 240, 40, 10);
            popMatrix();
            
            rect(-10, 50, 380, 40, 10);
            
            images.push(get(0,0,width,height));
        };
        var drawArrow2 = function(){
            background(0,0,0,0);
            fill(0,0,0);
            triangle(200, 0, 100,130, 300,130);
            rect(150, 100, 100, 140, 10);
            
            ellipse(200,290, 200, 200);
            fill(246, 247, 163);
            ellipse(200,290, 200, 200);
            var w = 80;
            image(images[0], 160-w/2, 250-w/2, 2*w, 2*w);
            
            images.push(get(0,0,width,height));
            

        };
        var drawArrow3 = function(){
            background(0,0,0,0);
            pushMatrix();
            translate(220, -170);
            rotate(radians(45));
            image(images[2], 0, 0, 500, 500);
            popMatrix();
            
            images.push(get(0,0,width,height));
            
        };
        var drawArrow4 = function(){
            background(0,0,0,0);
            pushMatrix();
            translate(400, 0);
            rotate( radians(90) );
            image(images[2], 0, 0, 400, 400);
            popMatrix();
            
            images.push(get(0,0,width,height));
            
        };
        var drawLedge = function(x, y){
            image(images[1], x, y, 100, 100);
        };
        var drawArrow = function(n, x, y){
            image(images[n], x-30, y, 60, 60);
        };


        //Hole Object
        var holeObj = function(x, y, size, r, g, b, p){
            this.pos = new PVector(x, y);
            this.size = size;
            this.r = r;
            this.g = g;
            this.b = b;
            this.point = p;
        };
        holeObj.prototype.draw = function() {
            fill(94, 58, 0);
            noStroke();
            quad( this.pos.x-this.size/2, this.pos.y, 
                this.pos.x+this.size/2, this.pos.y,
                this.pos.x+this.size*9/20, this.pos.y + 30,
                this.pos.x-this.size*9/20, this.pos.y + 30);
                
            arc(this.pos.x, this.pos.y+30, this.size*18/20, 30, 0, 180);    
                
            fill(this.r, this.g, this.b);
            ellipse(this.pos.x, this.pos.y, this.size, 30);
            fill(this.r, this.g, this.b);
            textSize(18);
            text(this.point + " pts", this.pos.x-25, this.pos.y+32);
        };
        var holes = [];
        holes.push( new holeObj( 370, 50, 60, 255, 0, 0, 10) );
        holes.push( new holeObj( 340, 140, 100, 255, 255, 0, 8) );
        holes.push( new holeObj( 300, 230, 140, 0, 192, 100, 6) );
        holes.push( new holeObj( 240, 320, 180, 0, 190, 255, 4) );



        //Ball Object
        var ballObj = function(){
            this.StartX = 40;
            this.StartY = 295;
            
            this.pos = new PVector(this.StartX, this.StartY);
            this.vel = new PVector(0, 0);
            this.accel = new PVector(-0.5, 0.2);
            this.wind = new PVector(0, 0);
            this.count = 0;
            
            this.imagePos = 0;
            this.size = 40;
            this.rotAngle = 0;
            
            this.mode = 0; //0 = waiting ---  1 = grabbed --- 2 = inAir 3 = wait for click to retry
        };
        ballObj.prototype.draw = function() {
            if(this.mode === 2){
                this.rotAngle = this.rotAngle +  radians(5);
            }
            pushMatrix();
            translate((this.pos.x), (this.pos.y));
            rotate(this.rotAngle);
            image(images[0], -this.size/2, -this.size/2, this.size, this.size);
            popMatrix();
        };
        ballObj.prototype.move = function(){
            if (this.mode === 0 && mouseX < 100 && mouseY > 100){
                this.mode = 1;
            }
            if (this.mode === 0){
                this.pos.x = this.StartX;
                this.pos.y = this.StartY;
            }
            else if (this.mode === 1){
                this.pos.x = mouseX;
                this.pos.y = mouseY;
                if(this.pos.x > 100){
                    this.mode = 0;
                }
            }
            else if (this.mode === 2){//in the air
                
                this.vel.add(this.accel);
                this.vel.add(this.wind);
                this.pos.add(this.vel);

                if (this.pos.y > 400 - this.size/2) {
                    this.vel.set(0,0);
                    this.accel.set(0,0);
                    this.pos.y = 400 - (this.size/2);
                    this.mode = 3;
                }
                
                //check if it is in a bucket
                var i;
                for (i = 0; i < holes.length; i++){
                    if ( this.pos.y < holes[i].pos.y &&  this.pos.y > holes[i].pos.y-20 && 
                        this.pos.x > holes[i].pos.x-holes[i].size/2+this.size/2 &&  
                        this.pos.x < holes[i].pos.x+holes[i].size/2-this.size/2 &&
                        this.mode === 2){
                        score = score + holes[i].point;
                        this.pos.y = holes[i].pos.y-10;
                        this.vel.set(0,0);
                        this.accel.set(0,0);
                        this.mode = 3;
                    }    
                }
            }
            if(this.mode === 2 || this.mode === 3){
                //Off screen
                if ( this.pos.y < 0 && this.pos.x < 400+this.size/2) {//y range
                    drawArrow(2, this.pos.x, 5);
                }
                else if ( this.pos.y < 0-this.size/2 && this.pos.x > 400+this.size/2) {//both ways
                    drawArrow(3, 365, 5);
                }
                else if ( this.pos.y > 0-this.size/2 && this.pos.x > 400+this.size/2) {//x range
                    drawArrow(4, 365, this.pos.y-this.size/2);
                }
                
            }
        };
        ballObj.prototype.adjustWind = function(){
            if(this.count === 60){
                this.wind.set(random(0, 0.05), random(-0.05, 0.05));
                this.count = 0;
                
            }
            this.count++; 
              
            var centerx = 360;
            var centery = 380;
            var len = 60;
            var angle = atan(this.wind.y / this.wind.x);
            fill(0,0,0);
            stroke(0,0,0);
            
            pushMatrix();
            translate(centerx, centery);
            rotate(angle);
            strokeWeight(2);
            line(0-len/2, 0,0+len/2, 0);
            triangle(0+len/2, 0, 0+20, 0-10, 0+20, 0+10);
            popMatrix();
            
            
        };
        var ball = new ballObj();


        //interaction functions
        var mouseReleased = function(){
            if(gameMode === 1){
                gameMode = 2;
            }
            else if (gameMode === 3 || gameMode === 4){
                gameMode = 1;
                score = 6;
                ball.mode = 0;
            }
            else if(ball.mode === 1){
                //ball.vel.set((mouseX-ball.pos.x)/30,(mouseY-ball.pos.y)/30);
                ball.vel.set((mouseX-pmouseX),(mouseY-pmouseY));
                ball.accel.set( 0 , 0.15  );
                ball.mode = 2;
            }else if (ball.mode === 3){
                if (mouseX > 20 && mouseX < 150 && mouseY > 20 && mouseY < 70){
                    ball.pos.set(ball.StartX, ball.StartY);
                    score = score - 1;
                    ball.mode = 0;
                }
            }
            
        };
        var mouseDragged = function() {
            if(mouseX < 100 && mouseY > 200){
                if (ball.mode === 0){
                    ball.mode = 1;
                }
            }
        };
        var mouseClicked = function(){
            if (ball.mode === 0){
                if (mouseX < 100 && mouseY > 200){
                    ball.pos.set(mouseX, mouseY);
                    ball.mode = 1;
                }
            } 
        };

        var rotAngle  = 0;
        var draw = function() {
            switch( gameMode ){
                case 0:{
                    drawBall0();
                    drawLedge1();
                    drawArrow2();
                    drawArrow3();
                    drawArrow4();
                    gameMode = 1;
                    break;
                }
                case 1:{//Menu
                    background(0,255,255,80);
                    var x = 200;
                    var y = 220;
                    var size = 220;
                    rotAngle = rotAngle +  radians(1);
                    pushMatrix();
                    translate((x), (y));
                    rotate(this.rotAngle);
                    image(images[0], -size/2, -size/2, size, size);
                    popMatrix();
                    stroke(0,0,0);
                    strokeWeight(2);
                    fill(255, 255, 255);
                    ellipse(160,190, 40, 70);
                    ellipse(240,190, 40, 70);
                    fill(0,0,0);
                    ellipse(160,200, 20, 30);
                    ellipse(240,200, 20, 30);
                    noFill();
                    strokeWeight(8);
                    arc(200,240, 120, 90,  radians(0),  radians(180));
                    
                    fill(255, 255, 255);
                    strokeWeight(2);
                    ellipse(310,160, 20, 20);
                    ellipse(330,140, 25, 25);
                    ellipse(320,110, 30, 30);
                    rect(80, 5, 240, 100, 40);
                    textSize(20);
                    fill(0,0,0);
                    text("Welcome to Basket Toss!", 90, 50);
                    textSize(15);
                    text("click anywhere to play...", 120, 80);
                    
                    
                    text("Use the mouse to throw the ball into the baskets. \nEach ball costs 1 point except your first one. \nGet to 20 points and you win.", 10, 350);
                    break;
                }
                case 2:{
                    background(0,255,255,80);
                    noStroke();
                    fill(135, 135, 135);
                    rect(10, 10, 150,70);
                    fill(220, 220, 220);
                    rect(20, 20, 130,50);
                    noFill();
                    //stroke(220, 220, 220);
                    //rect(0, 200, 100,200);
                    fill(33, 48, 255);
                    
                    textSize(22);
                    text("Shoot Again", 25, 52);
                    
                    //drawSpots();
                    fill(0,0,0);
                    drawLedge(0,300);
                    var i = 0;
                    for(i = 0; i < holes.length; i++ ){
                        holes[i].draw();
                    }
                    
                    ball.adjustWind();
                    ball.draw();
                    ball.move();
                    
                    fill(33, 48, 255);
                    textSize(30);
                    text("Score: " + score, 190, 395);
                    if(score === 0){
                        gameMode = 3;
                    } else  if(score >= 20){
                        gameMode = 4;
                    }
                    break;
            }
                case 3:{//You Lose
                    background(0,255,255,80);
                    textSize(50);
                    
                    var s = 50;
                    var inc = 35;
                    fill(0,0,0);
                    text("YOU LOSE...", s, 50);
                    
                    var x = 200;
                    var y = 220;
                    var size = 220;
                    rotAngle = rotAngle +  radians(1);
                    pushMatrix();
                    translate((x), (y));
                    rotate(this.rotAngle);
                    image(images[0], -size/2, -size/2, size, size);
                    popMatrix();
                    stroke(0,0,0);
                    strokeWeight(2);
                    fill(255, 255, 255);
                    ellipse(160,190, 40, 70);
                    ellipse(240,190, 40, 70);
                    fill(0,0,0);
                    ellipse(160,200, 20, 30);
                    ellipse(240,200, 20, 30);
                    noFill();
                    strokeWeight(8);
                    arc(200,280, 120, 70,  radians(180),  radians(360));
                    break;
            }
                case 4:{//You Win
                    background(0,255,255,80);
                    textSize(50);
                    
                    var s = 70;
                    var inc = 35;
                    fill(255,0,0);
                    text("Y", s, 50);
                    text(" I", s+5*inc+2, 50);
                    fill(0,155,0);
                    text("O", s+inc, 50);
                    text("N", s+6*inc, 50);
                    fill(0,105,255);
                    text("U ", s+2*inc+5, 50);
                    text("!", s+7*inc, 50);
                    fill(255,105,255);
                    text("W", s+4*inc, 50);
                    
                    var x = 200;
                    var y = 220;
                    var size = 220;
                    rotAngle = rotAngle +  radians(1);
                    pushMatrix();
                    translate((x), (y));
                    rotate(this.rotAngle);
                    image(images[0], -size/2, -size/2, size, size);
                    popMatrix();
                    stroke(0,0,0);
                    strokeWeight(2);
                    fill(255, 255, 255);
                    ellipse(160,190, 40, 70);
                    ellipse(240,190, 40, 70);
                    fill(0,0,0);
                    ellipse(160,200, 20, 30);
                    ellipse(240,200, 20, 30);
                    noFill();
                    strokeWeight(8);
                    arc(200,240, 120, 90,  radians(0),  radians(180));
                    break;
                }
            }
            
        };
    }
};    


var canvas = document.getElementById("project4Canvas"); 
var processingInstance = new Processing(canvas, sketchProc); 