function Paddle(x, y, w, h, up, down, ai) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.up = up;
    this.down = down;
    this.yspeed = 0;
    this.ai = ai;

    this.display = function() {
        noStroke();
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }

    this.move = function() {
        if (this.ai == 0) {
            this.yspeed = 0;
            if (keyIsDown(this.up) && keyIsDown(this.down)) {
                this.yspeed = 0;
            }
            else if (keyIsDown(this.up)) {
                this.yspeed = -15;
            }
            else if (keyIsDown(this.down)) {
                this.yspeed = 15;
            }
            this.y += this.yspeed;

            if (this.y > height - this.h) {
                this.y = height - this.h;
            }
            else if (this.y < 0) {
                this.y = 0;
            }
        }
        else {

        }
    }
}
