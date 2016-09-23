var uList = document.getElementById('uList');

createObjects(10);

var nList = document.getElementById('uList').getElementsByTagName("li");

for (var i = 0; i < nList.length; i++) {
    var tempItem = nList[i];
    if (i === 0 || (i + 1) % 2 !== 0)
        tempItem.style.backgroundColor = "red";
    else {
        tempItem.style.backgroundColor = "green";
    }
}

function greeting(name) {
    console.log("Welcome " + name);
}

function addOnclick(itemId) {
    var tempItem = document.getElementById(itemId);
    itemId.addEventListener('click', function () {
        greeting(itemId.id);
    });
}

function createObjects(amount) {
    for (i = 0; i < amount; i++) {
        var lItem = document.createElement("li");
        lItem.id = "name" + (i + 1);
        lItem.value = lItem.id;
        addOnclick(lItem);
        lItem.appendChild(document.createTextNode("Test" + (i + 1)));
        uList.appendChild(lItem);
        addMouseOver(lItem);
    }
}

function addMouseOver (listItem){
    document.getElementById(listItem.id).onmouseover = function () {
        document.getElementById(listItem.id).style.fontSize = "200%";
    };
    document.getElementById(listItem.id).onmouseout = function () {
        document.getElementById(listItem.id).style.fontSize = "initial";
    };
}
