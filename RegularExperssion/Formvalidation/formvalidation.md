# April 3/2020

## we here implement some of the important regular expression making a simple form validation

Our form has four field


 ![screenshot]{f1.png}



> checking for Name validation

Here the letter of name must be more than 2 and It can go anywhere form there.
```html

<input type="text" class="form-control" id="name" palceholder="Input your Name">
```

```javascipt
//validatename is the function that handles the name validation
function validatename(){

    const name = document.getElementById('name');

    const regular = /^[a-zA-Z]{2,}$/;

    if(!regular.test(name.value)){
        name.classList.add('is-invalid');

    }
    else{
        name.classList.remove('is-invalid');
    }

}
```

//If the name is not valid then 

>checking for zip-code validation

The regular expression to check the validation is
```javascript
 const regular = /^[0-9]{5}$/;
```
//The zip code only contains number and it should be exactly of length 5.

>checking for Email-validation

The regular expression to check the validation of the email is:

```javascript

const regular = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
```

we have divided the validation into 3 part

* 1st username - It can be alphabet,number,"_","-","."

* 2nd part(gmail,yahoo,hotmail) - It can be alphabet,number,"_","-","."
* 3rd part (.com,.media,.org) - It should be only alphabet and should be more than length of 2 and less than 5
  
>checking for phone number validation

```javascript
const regular = /^[0-9]{10}/;
```
// The number should be exactly of length 10