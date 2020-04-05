
//creating set
/*

const set1 = new Set();

set1.add("karishma");
set1.add({title: "The kite runner"});
set1.add(2);

console.log(set1);

const set2 = new Set(["karishma",2,{},()=>{}]);
console.log(set2);
*/

//working with modules


//basic structure
/*
(function(){
    //declare all the private variables and function and they are not usable outside

    return {
        //declare public variables and functions
    }

})();
*/

//this is a standard module pattern
/*

const UICtrl = (function(){
    let text = 'hello world';
    const changeText = function(){
     const element = document.getElementById("header").innerHTML = text

    }

    return{
        callChangeText : function(){
            changeText();
            console.log(text);
        }
    }



})();


UICtrl.callChangeText();




const ItemCtrl = (() => {

    let data = [];

    const add =function(item){
        data.push(item);
        console.log("item added");
    }

    return{
        //adding the content
    content : function(){

            add("orange");
            add("banana");
            console.log(data);

        }
    }

})();
ItemCtrl.content();

*/
//reveling module pattern

const ItemCtrl = (() => {

    let data = [];

    const add =function(item){
        data.push(item);
        console.log("item added");
    }

    const get = (id)=>{
        return data.find(item =>{
            return item.id == id;
        });


    }

    return{

        add : add,
        get :get
    }

})();

ItemCtrl.add({id:1,name:"karishma"});
console.log(ItemCtrl.get(1));




