# March 25/2020

> Box where you will type the work

   
```html 
<input type="text" name = "add" placeholder="add content.." id="addstuff"> 
```

```javascript
var inputText = document.getElementById('addstuff').value;
```
//we use two buttons here one is add button and another is remove all

>For add button(Allows you to add content)

```html
<button id="btn1">Add</button>
```

```javascript
add = document.getElementById('btn1')
```


>For add button(Allows you to add content)

```html
<button id="btn2">RemoveAll</button>
```

```javascript
removeAll= document.getElementById('btn2')
```

/* here we create a list ul that will initially be blank with no elements but later on we will crete list here */

```html 
<ul id="list"></ul>
```
/* Now create a new element li and then place all the input text in that list */
```javascript
var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + " ");

```

/* after this you need to create a done button that you will use to remove the content after everything is done */

```javascript
var removeButton = document.createElement('button');
    document.getElementById('addstuff').value = " ";
```
```javascript
removeButton.className = 'removeMe';
    removeButton.innerHTML = "Done :)";
    removeButton.setAttribute("onclick","removeMe(this);")

```
