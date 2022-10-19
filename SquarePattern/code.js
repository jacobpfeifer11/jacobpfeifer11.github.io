var painter = document.getElementById("c").getContext("2d");
var painter1 = document.getElementById("c1").getContext("2d");

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



painter1.fillStyle = "#000000";
painter1.fillRect(0, 0, 400, 400);

painter1.fillStyle = "#FF0000";

for (var j = 0; j < 13; ++j) {
    for( var i = 0; i < 13; ++i) {
    painter1.fillRect(10 + 30*i , 10+ j*30, 20, 20);
}
}