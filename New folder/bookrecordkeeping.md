 # March 26/2020

## Adding and removing books (using prototype classess)





>Adding content to the book (Creating new element)



   
    var addrow = document.createElement('tr');

    addrow.innerHTML = `
    <td>${book1.bookname}</td>
    <td>${book1.author}</td>
    <td>${book1.genre}</td>
    <td><a href ="#" class ="delete">X</a></td>
    `
    ;
    list.appendChild(addrow);

    
}


> Removing books

userInterface.prototype.deletebook = 
function(target)

{
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }


