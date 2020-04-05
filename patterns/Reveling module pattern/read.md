## April 5/2020

Modules and Revealing Module pattern

Modules are very important concept in javascript.

> Module description

```javascript
(function(){
    //declare all the private variables and function and they are not usable outside

    return {
        //declare public variables and functions
    }

})();

```

 point to note
 * The private variables and functions can't be used ouside the scope of the function.
 * The public variables are accesible from outside too.

```javascript
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

```

//reveling module pattern

```javascript
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
```