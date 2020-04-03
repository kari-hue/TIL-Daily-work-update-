//using search()
/*
var str = "I like intelligent people";

var p = str.search(/intelligent/i);

console.log(p);
*/


//using Replace()
/*
var str = " I think hedonist are ethically correct";

var p = str.replace(/hedonist/i,"Atheist");

console.log(p);

*/

//using test

var patt = /a/;
console.log(patt.test("Intelligence is attractive"));



//Let's talk about metacharacter

let re = /hello/i;
re = /^h/i;
re = /u$/i;
re = /^hello$/i;

//Talking about brackets and quantifers
re = /^[hx]ello/i;
re = /he{2,4}lo/i;


const str = "helllo"
console.log(re.exec(str));
