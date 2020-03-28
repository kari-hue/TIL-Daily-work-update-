# March 25/2020

## Todo list application allows you to add and delete contents

>adding contents to list

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

>Removing content

unction removeMe(item) {

    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
}