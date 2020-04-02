# April 4/2020

### This documentation basically contains how you can incorporate basic bootstrap code in your website. we will be discussing on the use of different bootstrap classes


>To use bootstrap you need to add some jquery link

```html

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">

```
>Then include the js needed to use bootstrap using script tag


//They provide you with pre-written code for better understanding

```html

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
```

> Class are the very important part of bootstrap. These are built in class providing different functionality.

list of class
> .container

```html
<div class= "container">

        <h1>
            Hello there!
        </h1>
    </div>
```

>.text-center //biring the text to center

```html 
        <h1 class= 'text-center'>
            Hello there!
        </h1>
```

> Text-colors

* .text-muted  //No color
*  .text-primary //blue color
*  .text-success //green-color
*  .text-info
*  .text-warning  //yellow-color
*   .text-danger
*    .text-secondary 
*    .text-white
*    .text-dark
*    .text-body

> Background-colors

* .bg-primary   //blue
* .bg-success   //green
* .bg-info      //almostblue
* .bg-warning   //yellow
* .bg-danger    //red
* .bg-secondary //gray
* .bg-dark       //almostblack
* .bg-light     //no color

 .jumbotron //it creates a free space and you can include anything there

> working with badges

/*Badges are used to add additional information to any content. Use the .badge class together with a contextual class (like .badge-secondary) within <span> elements to create rectangular badges.
*/
```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>

```
//Remember badges are not buttons

> Forms using Bootstrap
```html
All textual <input>, <textarea>, and <select> elements with class .form-control have a width of 100%.
```
* you can control the form using class 
 ```html 
 .form-group
  ``` 
  or
  ```html
   .form-inline
```



>.jumbotron //it creates a free space and you can include anything there
```html 

<div class='jumbotron'></div>

```



