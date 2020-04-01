//Binding html elments with few of the variables

var add = document.getElementById('btn1'),
removeAll= document.getElementById('btn2'),
ul = document.getElementById('list');


add.onclick = function () {

  addlist(ul);   //this function will take the unordered list

}

function addlist(ultarget) {

    var inputText = document.getElementById('addstuff').value;
    //creating a list 
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + " ");
    var removeButton = document.createElement('button');
    document.getElementById('addstuff').value = " ";

    if(inputText.length === 0) {

        alert('Please enter some input value');
        return false;
    }
       //remove button removes the content that we add
       //we give a classname and include text in the button

    removeButton.className = 'removeMe';
    removeButton.innerHTML = "Done :)";
    removeButton.setAttribute("onclick","removeMe(this);");

    li.appendChild(textNode);
    li.appendChild(removeButton);

    ultarget.appendChild(li);

}


function removeMe(item) {

    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}

//onclicking the remove all button everything will swipe out

removeAll.onclick = function() {

    ul.innerHTML = "";
}