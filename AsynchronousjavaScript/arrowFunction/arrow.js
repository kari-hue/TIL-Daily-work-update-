
//normal way of representing a function
/*
function newFunc(p) {

    return (p*p);
}


//calling the function
newFunc(5);




//writing it usinf an arrow function

const val = (p) => {

    console.log(p*p);

}
*/

//const val = (p) => console.log(p*p); // no braces needed

//displaying an object literal



 /*
const users = ['karishma','john','william'];
const nameLengths = users.map((name) => {
    return name.length;
});
*/

//const users = ['karishma','john','william'];
//const nameLengths = users.map((name) => name.length);

//console.log(nameLengths);

/*
const here = (firstname,lastname) => {
    console.log (here.firstname);
}
*/


var elements = ["orange","apple","mango"];

elements.map(function(element){
    return element.length;
});

elements.map = element => console.log( element.length);

    