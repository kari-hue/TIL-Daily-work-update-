//storage controller

//item controller

const itemController = (function(){               //this functions runs immediately

    //Let's create an item constructor
    const Item = function(id,name,calories){
        //with any constructor we got to use this
        this.id = id;
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

    getItems: function(){
        return data.items;
    },
    //creating a function
    logData : function(){
        return data;

    }
}

})();





//UI controller
const uiController = (function(){

    return{


        populateItemList: function(items){

            let html = '';
            items.forEach(function(item){

                html+= `<li class="collection-item" id = "item-${item.id}">
                <strong>${item.name}:</strong><em>${item.calories}:</em>
             <a href="#" class="secondary-content">
                 <i class= "edit-item fa fa.pencil"></i>
             </a>
            </li>`;
            });

            //insert list items

            document.getElementById("item-list").innerHTML = html;
        }

    }

})();

//App controller

const appController = (function(itemController,uiController){


    //public methods
    return{
        init: function(){         //It will call getItems to get all the items
            //Fetching items from the data
            const items = itemController.getItems();
            //populate list with items

            uiController.populateItemList(items);
            
        }
    }

    

})(itemController,uiController);


appController.init();