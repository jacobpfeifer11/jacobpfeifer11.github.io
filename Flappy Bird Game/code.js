var painter = document.getElementById("c").getContext("2d");
var pipes = [ [200, 200, 50, 100], [400, 150, 50, 100], [600, 30, 50, 100], [800, 100, 50, 100] ];
var pipe_dx = -2;
var birdY = 100;
var birdX = 50;
var g = 0.2;
var birdDy = 0; //delta y, the increasement in an interval
var birdSize = 20;
var jump = -6;
var timer;
var score = 0;
 
drawFrame();

document.addEventListener('keydown', onkeydown);

function init () {
    pipes = [ [200, 200, 50, 100], [400, 150, 50, 100], [600, 30, 50, 100], [800, 100, 50, 100] ];
    birdY = 100;
    birdDy = 0; //delta y, the increasement in an interval
    score = 0;
    timer = setInterval(drawFrame, 20);
}

function onkeydown(e) {
    if ( e.key === 'Enter') {
        init();
    } else if (e.key === ' ') {
        birdDy += jump;
    }
}

function updateBird () {
    birdDy += g;
    birdY += birdDy;
}

function updatePipes () {
    for (var i = 0; i < pipes.length; ++i) {
        pipes[i][0] += pipe_dx;
        //if any pipe is outside the frame replace it to the right
        if (pipes[i][0] < 0-pipes[i][2]) {
            pipes[i][0] = 725 + Math.random()*(50-10)+10;
            score ++;
        }
    }

}
function isOver () {
    for (var i = 0; i < pipes.length; ++i) {
        
        // bird is in upeer rect
         if (isXyInRect(birdX,          birdY, pipes[i][0], 0, pipes[i][2], pipes[i][1]) ||
             isXyInRect(birdX+birdSize, birdY, pipes[i][0], 0, pipes[i][2], pipes[i][1])) {
               return true;
            }
        // bird is in lower rect
        if (isXyInRect(birdX,          birdY+birdSize, pipes[i][0], pipes[i][1]+pipes[i][3], pipes[i][2], pipes[i][1]) ||
            isXyInRect(birdX+birdSize, birdY+birdSize, pipes[i][0], pipes[i][1]+pipes[i][3], pipes[i][2], 400-pipes[i][1]-pipes[i][2])) {
                return true;
            }

        if(birdY <= 0 || birdY >= 400 - birdSize) {
                return true;
        }
        
    }
    return false;
}
function drawFrame () {
    //detect collision
       if (isOver()) {
            drawGameOver();

            clearInterval(timer);
            return;
       }
    //update data
    updatePipes();
    updateBird();
    //draw
    drawSky();
    drawGround();
    drawPipes();
    drawBird();
    drawScore();
}

function drawBird () {
    painter.fillStyle = "#FF0000";
    painter.fillRect(birdX, birdY, 20, 20)
}

function drawPipes() {
    for(var i = 0; i < pipes.length; ++i) {
        painter.fillStyle = "#FF00DD";
        // draw upper rect
            painter.fillRect(pipes[i][0], 0, pipes[i][2], pipes[i][1])
        // draw lower rect
        painter.fillRect(pipes[i][0], pipes[i][1]+pipes[i][3], pipes[i][2], 400-pipes[i][1]-pipes[i][3]);
    }
    
}

function drawSky() {
    painter.fillStyle = "#0088FF";
    painter.fillRect(0, 0, 1265, 500)
}

function drawGround() {
    painter.fillStyle = "#FFAA00";
    painter.fillRect(0, 400, 1265, 115);
}

function isXyInRect (x, y, rx, ry, rw, rh) {
    if (x >= rx && x <= rx+rw && y >= ry && y <= ry + rh) {
     return true;
    } else {
        return false;
    }
}

function drawGameOver () {
    painter.font = "50px Arial";
    painter.fillStyle = "#FF0000";
    painter.fillRect = "top";
    painter.textAllign = "center";
    painter.fillText('YOU DIED', 200, 200);
}

function drawScore () {
    painter.font = "10px Arial";
    painter.fillStyle = "#000000";
    painter.Baseline = "top";
    painter.textAllign = "left";
    painter.fillText('score: ' + score, 10, 10);
}

Math.random()*(200-100)+100