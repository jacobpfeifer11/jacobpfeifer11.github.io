var canvas = document.getElementById("c");
var painter = canvas.getContext("2d");

painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);//x, y, w, h


painter.fillStyle = "#FF0000";
for (var j = 0; j < 13; ++j) {
    for( var i = 0; i < 13; ++i) {
    painter.fillRect(10 + 30*i , 10+ j*30, 20, 20);
}
}