var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");
var input4 = document.getElementById("input4");

var btn = document.getElementById("btn1");
btn.addEventListener('click', myFunction);

function myFunction() {
    var String1 = input1.value;
    var Normal_Pay = Number(String1);
    
    var String2 = input2.value;
    var Overtime_Pay = Number(String2);
    
    var String3 = input3.value;
    var Normal_Hours = Number(String3);

    var String4 = input4.value;
    var Overtime_Hours = Number(String4);

    a = Normal_Pay;
    b = Overtime_Pay;
    c = Normal_Hours;
    d = Overtime_Hours;
    var m;
   
    m = a * c + b * d;

    alert(m);
}