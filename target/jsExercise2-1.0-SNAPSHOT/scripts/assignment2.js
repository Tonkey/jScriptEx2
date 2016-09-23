
function person(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
}

var person1 = new person("Nicklas","Molving",52506288,"Nicklasmolving@gmail.com");
var person2 = new person("somePerson","someLastName",52506288,"test@test.com");
var person3 = new person("anotherPerson","anotherLastName",52506288,"test2@test.com");
var personArr = [person1,person2,person3];

var body = document.getElementById("body");

//Setting up table and table headers!
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

var hRow = document.createElement("tr");

var th = document.createElement("th");
var thD = document.createTextNode("First Name");
th.appendChild(thD);
hRow.appendChild(th);

var th2 = document.createElement("th");
var th2D = document.createTextNode("Last Name");
th2.appendChild(th2D);
hRow.appendChild(th2);

var th3 = document.createElement("th");
var th3D = document.createTextNode("Phone no.");
th3.appendChild(th3D);
hRow.appendChild(th3);

var th4 = document.createElement("th");
var th4D = document.createTextNode("Email");
th4.appendChild(th4D);
hRow.appendChild(th4);

tblBody.appendChild(hRow);


//Adding data to the table!
personArr.forEach(function(pers){
    var row = document.createElement("tr");
    
    var firstName = document.createElement("td");
    var firstNameD = document.createTextNode(pers.firstName);
    firstName.appendChild(firstNameD);
    row.appendChild(firstName);
    
    var lastName = document.createElement("td");
    var lastNameD = document.createTextNode(pers.lastName);
    lastName.appendChild(lastNameD);
    row.appendChild(lastName);
    
    var phone = document.createElement("td");
    var phoneD = document.createTextNode(pers.phone);
    phone.appendChild(phoneD);
    row.appendChild(phone);
    
    var email = document.createElement("td");
    var emailD = document.createTextNode(pers.email);
    email.appendChild(emailD);
    row.appendChild(email);
    
    tblBody.appendChild(row);
});


//Adding table body to the table
tbl.appendChild(tblBody);
//Adding the table to the body of the html
body.appendChild(tbl);
//Set the tables borders for a pretty table :)
tbl.setAttribute("border", "2");
