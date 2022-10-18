var canvas = document.getElementById("c");
var painter = canvas.getContext("2d");

painter.fillStyle = "#000000";
painter.fillRect(0, 0, 400, 400);//x, y, w, h


painter.fillStyle = "#FF0000";
var j = 0;
while(j < 13) {
    var i = 0;
    while(i < 13) {
        if(j >= i) {
            painter.fillRect(10 + 30*i, 10 + 30*j, 20, 20)
        }
        ++i
    }
    ++j;
}