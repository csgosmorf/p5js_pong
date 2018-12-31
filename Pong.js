var balls = [];
var paddles = [];
var score1 = 0;
var score2 = 0;
function setup() {
    createCanvas(1800, 900);
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
    paddles.push(new Paddle(0 + 50, height/2 - 75, 15, 200, 81, 65, 0));
    paddles.push(new Paddle(width - 50, height/2 - 75, 15, 75, 80, 76, 0));
    balls.push(new Ball(width/2, height/2, random(12, 18) * xdir, random(3, 5) * ydir, 0));

}

function draw() {
    background(0);
    textSize(50);
    text(score1, width/2 - 100, 50, 100, 50);
    text("-", width/2, 50, 100, 50);
    text(score2, width/2 + 100, 50, 100, 50);

    for (var i = paddles.length - 1; i >= 0; i--) {
        paddles[i].display();
        paddles[i].move();
    }

    for (var i = balls.length - 1; i >= 0; i--) {
        balls[i].display();
        balls[i].move();
        balls[i].end(i);
    }

}
