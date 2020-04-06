//storage controller

//item controller

const itemController = (function(){               //this functions runs immediately

    //Let's create an item constructor
    const item = function(id,name,calories){
        //with any constructor we got to use this
        this.is = id;
        this.name = name;
        this.calories = calories;
    }
//creating about the datastructure
const data = {
    items:[

        {id:0,name:'Boiled vegetables',calories:1200},
        {id:1,name:'Apple',calories:76}
    ],
    currentItem:null,
    totalCalories: 0
}

return{

    //creating a function
    logData : function(){
        return data;

    }
}

})();





//UI controller
const uiController = (function(){

    return{

    }

})();

//App controller

const appController = (function(itemController,uiController){


    //public methods
    return{
        init: function(){         //It will call getItems to get all the items
            console.log("Initializing things");
        }
    }

    

})(itemController,uiController);


appController.init();