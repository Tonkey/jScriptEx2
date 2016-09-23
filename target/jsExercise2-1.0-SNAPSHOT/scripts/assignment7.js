
var buttonList = document.getElementsByClassName("t1");

var display = document.getElementById("display");

function addOnClick(button) {

    document.getElementById(button.id).onclick = function () {
        var div = document.getElementById("display");

        div.innerHTML = div.innerHTML + button.innerHTML;
    };
}

for (var i = 0; i < buttonList.length - 1; i++) {
    addOnClick(buttonList[i]);
}

function calc() {
    var toCalc = document.getElementById("display").innerHTML;
    var res = eval(toCalc);
    document.getElementById("display").innerHTML = eval(document.getElementById("display").innerHTML);
}

document.getElementById("equal").onclick = function () {
    calc();
};

//Just so that you can calculate more than once without having to close/reload the page :)
document.getElementById("display").onclick = function () {
    document.getElementById("display").innerHTML="";
};

