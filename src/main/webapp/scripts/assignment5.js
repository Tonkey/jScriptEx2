
function fSubmit(){
    var gender1 = document.getElementById('gender1');
    var gender2 = document.getElementById('gender2');
    console.log(document.getElementById('fullNameField').value);
    if(gender1.checked) console.log(gender1.value);
    else console.log(gender2.value);
    console.log(document.getElementById('isMarried').checked);
    
    //WARNING!!! the next line will clear the console.log!!!
//    document.getElementById('persInf').submit();
    
}
