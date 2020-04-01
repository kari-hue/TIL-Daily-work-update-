

var add1 = document.getElementById("nname");
var add2 = document.getElementById("add");
var add3 = document.getElementById("btn1");




add1.addEventListener('click',fun1);

//This is function 1
function fun1(e){

console.log(e.type);

}

add3.addEventListener('mouseover',fun2);
add3.addEventListener('mouseout',fun2);
add3.addEventListener('click',fun3);




function fun2(e){         //fun2 for all the event related to add3
    console.log(e.type);
    console.log("sucessful");
}

//on clicking the button
function fun3(){
    alert("Do you want to continue");
}












