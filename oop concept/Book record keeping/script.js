function Book(bookname,author,genre) {

    this.bookname = bookname;
    this.author = author;
    this.genre = genre;
}

function userInterface(){

}

userInterface .prototype.addBookTolist = function(book1){

    var list = document.getElementById('book-list');
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

userInterface.prototype.clearfield = function(){

    document.getElementById('nam').value = "";
    document.getElementById('auth').value = "";
    document.getElementById('genre').value = "";

}
//for the alert message

//userInterface.prototype.showalert = function(messege, classname)


userInterface.prototype.deletebook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();

    }

}
//Eventlistner
document.getElementById("bookform").addEventListener('submit',
function(e){

    console.log('It works');

var bookname = document.getElementById('nam').value;
    var author = document.getElementById('auth').value;
   var genre = document.getElementById('genre').value;
        

    //instantiate the book
    
    const book = new Book(bookname,author,genre);
    console.log(book);
  

    const ui = new userInterface();
    
    console.log(ui);

    if(bookname === ' ' || author ===' ' || genre === ' '){

        ui.showalert();
    }
    else {
    ui.addBookTolist(book);
    ui.clearfield();
    }

    //add book to list
    


    e.preventDefault();
    

});


document.getElementById('book-list').addEventListener('click',function(e)

{

   var ui = new userInterface();
   ui.deletebook(e.target);

    e.preventDefault();
    console.log(ui);

});

