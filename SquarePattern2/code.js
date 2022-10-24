var painter1 = document.getElementById("c1").getContext("2d");


painter1.fillStyle = "#000000";
painter1.fillRect(0, 0, 390, 390);


for (var j = 0; j < 39; ++j) {
    for( var i = 0; i < 39; ++i) {
        if ((i + j)%2 == 1) {
            painter1.fillStyle = "#DDDDDD";
            painter1.fillRect(10*i , 10*j, 10, 10);
        } else {
            painter1.fillStyle = "#777777";
            painter1.fillRect(10*i , 10*j, 10, 10);
        }
    }
    
}

for (var x = 0; x < 38; ++x) {
    for (var y = 0; y < 38; ++y) {
        if (x >= 11 && x <= 26 && y >= 11 && y <= 26) {
            if ((x + y)%2 == 0) {
            painter1.fillStyle = "#FFFFFF"
            painter1.fillRect(8.5 + 10*x, 8.5 + 10*y, 3.75, 3.75);
            } else {
                painter1.fillStyle = "#000000"
            painter1.fillRect(8.5 + 10*x, 8.5 + 10*y, 3.75, 3.75);
            }
        
        } else if ((x + y)%2 == 1) {
            painter1.fillStyle = "#FFFFFF"
            painter1.fillRect(8.5 + 10*x, 8.5 + 10*y, 3.75, 3.75);
        } else {
            painter1.fillStyle = "#000000"
            painter1.fillRect(8.5 + 10*x, 8.5 + 10*y, 3.75, 3.75);
        }
    }
}
