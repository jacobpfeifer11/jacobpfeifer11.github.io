var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var input3 = document.getElementById("input3");



var btn = document.getElementById("btn1");
btn.addEventListener('click', myFunction);

function myFunction() {
    var String1 = input1.value;
    var num1 = Number(String1);
    
    var String2 = input2.value;
    var num2 = Number(String2);
    
    var String3 = input3.value;
    var num3 = Number(String3);

    a = num1
    b = num2
    c = num3
    var m;
    
    m = a > b ? a : b;
    m = m > c ? m : c;
    alert(m);
}