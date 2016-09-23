
//Setting up divs style!
var div1 = document.getElementById("onMouseOver1");
div1.innerHTML = "this is div1onMouseOver";
div1.onmouseover = function () {
    mOver(div1);
};
div1.onmouseout = function () {
    mOut(div1);
};
div1.setAttribute("style", "text-align:center; width:150px; height:150px");
div1.style.borderStyle = "solid";
div1.style.borderColor = "red";

var div2 = document.getElementById("onMouseOver2");
div2.innerHTML = "this is div2onMouseOver";
div2.onmouseover = function () {
    mOver(div2);
};
div2.onmouseout = function () {
    mOut(div2);
};
div2.setAttribute("style", "text-align:center; width:150px; height:150px");
div2.style.borderStyle = "solid";
div2.style.borderColor = "yellow";



var div3 = document.getElementById("onMouseOver3");
div3.innerHTML = "this is div3 onMouseOver";
div3.onmouseover = function () {
    mOver(div3);
};
div3.onmouseout = function () {
    mOut(div3);
};
div3.setAttribute("style", "text-align:center; width:150px; height:150px");
div3.style.borderStyle = "solid";
div3.style.borderColor = "green";

function mOver(id) {
    document.getElementById(id.id).innerHTML = "Thanks for trying this feature!";
}

function mOut(id) {
    document.getElementById(id.id).innerHTML = "this is " + id.id;
}