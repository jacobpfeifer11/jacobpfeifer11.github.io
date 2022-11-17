var painter = document.getElementById("c").getContext("2d");
var button = document.getElementById("b");
var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3")
var x = 190;
var y = 0;
var g = 0.5;
var dy = 10;
var jump = -10;
var dx = 2;

var isLeft = false;
var isRight = false;
var isUp = false;

document.addEventListener('keydown', onKeydown)
document.addEventListener('keyup', onKeyup)
button.addEventListener('click', onClick);
button1.addEventListener('click', onLeftClick);
button2.addEventListener('click', onRightClick);
button3.addEventListener('click', Jump);

drawBackground();
drawSquare(x, y);

function onKeyup (e) {
    if (e.key === 'a') {
        isLeft = false;
    } else if (e.key === 'd') {
        isRight = false;
    } else if (e.key === 'w') {
       isUp = false;
    } else if (e.key === 'Enter') {
        onClick();
    }
    drawBackground();
    drawSquare(x, y);
}


function onKeydown (e) {
    if (e.key === 'a') {
        isLeft = true;
    } else if (e.key === 'd') {
        isRight = true;
    } else if (e.key === 'w') {
       isUp = true;
    } else if (e.key === 'Enter') {
        onClick();
    }
    drawBackground();
    drawSquare(x, y);
}

function onClick() {
    setInterval(drawFrame, 19);
}
function onRightClick () {
    if (x < 400) {
        x = x + 5;
    }
    drawBackground();
    drawSquare(x, y);
}
function onLeftClick() {
   if (x > 0) {
    x = x - 5;
   }
    drawBackground();
    drawSquare(x, y);
}

function onJumpClick() {
    jump;
    drawBackground();
    drawSquare(x, y);
}

function Jump() {

    if (y === 380) {
        dy += jump;
    }
}

function drawFrame() {
    if(isUp) {
        Jump();
    }

    dy = dy + g;
    y = y + dy;

    //update the square
    if(isLeft) {
        x -= dx;
    }

    if(isRight) {
        x += dx;
    }
   

    if(y > 380) {
        y = 380;
        dy = 0;
    }

    if (x <= -20) {
        x = 380;
    }

    if (x >= 400) {
        x = 0;
    }

    drawBackground();
    drawSquare(x, y);
}

function drawSquare(x, y) {
    painter.fillStyle = "#FF0000";
    if (x < 0 && x > -20) {
        painter.fillRect(0, y, 20+x, 20);
        painter.fillRect(400+x, y, -x, 20);
    }

    if (x > 380 && x < 400) {
        painter.fillRect(x, y, 400-x, 20);
        painter.fillRect(0, y, 20+x-400, 20);
    }
    
    painter.fillRect(x, y, 20, 20);
}

function drawBackground() {
    painter.fillStyle = "#AAAAAA";
    painter.fillRect(0, 0, 400, 400);
}

