function Ball(x, y, xspeed, yspeed, go) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.r = 12;
    this.go = go;
    
    this.display = function() {
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    
    this.move = function() {
        if (this.go == 1) {
            if (this.y + this.r > height) {
                this.yspeed *= -1;
                this.y = height - this.r;
            }
            else if (this.y - this.r < 0) {
                this.yspeed *= -1;
                this.y = 0 + this.r;
            }
    if (this.x > paddles[0].x && this.x < paddles[1].x + paddles[0].w) { 
            
            if (this.x - this.r < paddles[0].x + paddles[0].w / 2 && this.y < paddles[0].y + paddles[0].h + this.r && this.y > paddles[0].y - this.r) {
                this.yspeed = this.yspeed + paddles[0].yspeed * 0.5;
                this.xspeed *= -1;
            }

            if (this.x + this.r > paddles[1].x - paddles[1].w / 2 && this.y < paddles[1].y + paddles[1].h + this.r && this.y > paddles[1].y - this.r) {
                this.yspeed = this.yspeed + paddles[1].yspeed * 0.5;
                this.xspeed *= -1;
            }
    }
    
            if (this.yspeed > 15) {
                this.yspeed = 15;
            }
            else if (this.yspeed < -15) {
                this.yspeed = -15;
            }
            this.x += this.xspeed;
            this.y += this.yspeed;
        }
}
    
    this.end = function(i) {
        if (this.x > width + 50 || this.x < -50) {
            var randomxDirection = random(1);
            var randomyDirection = random(1);
            if (randomxDirection < 0.5) {
                var xdir = -1;
            }
            else {
                var xdir = 1;
            }
            if (randomyDirection < 0.5) {
                var ydir = -1;
            }
            else {
                var ydir = 1;
            }
            if (this.x > width) {
                score1++;
            }
            else {
                score2++;
            }
            
            balls.push(new Ball(width/2, height/2, random(12, 18) * xdir, random(3, 5) * ydir, 1));
            balls.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (keyCode == 32) {
        for (var i = 0; i < balls.length; i++) {
            balls[i].go = 1;
        }
    }
}