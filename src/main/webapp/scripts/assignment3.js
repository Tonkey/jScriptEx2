

//Setting up divs style!!!
var div1 = document.getElementById("divClick1");
var div1D = document.createTextNode("this is div1 on click");
div1.appendChild(div1D);
div1.setAttribute("style", "width:100px");
div1.style.backgroundColor="red";

var div2 = document.getElementById("divClick2");
var div2D = document.createTextNode("this is div2 on click");
div2.appendChild(div2D);
div2.setAttribute("style", "width:100px");
div2.style.backgroundColor="yellow";

var div3 = document.getElementById("divClick3");
var div3D = document.createTextNode("this is div3 on click");
div3.appendChild(div3D);
div3.setAttribute("style", "width:100px");
div3.style.backgroundColor="green";


function printName(id){
    console.log(id.id);
}


