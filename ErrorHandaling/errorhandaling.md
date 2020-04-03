# April 3/2020

## Topic: ErrorHandaling
>The try statement lets you test a block of code for errors.

>The catch statement lets you handle the error.

>The throw statement lets you create custom errors.

>The finally statement lets you execute code, after try and catch, regardless of the result.


## Normally when we write wrong code then we get the nasty error in our console

for e.g

```javascript
myfunction(); 

    console.log("hello how have you been");

```

Then in console we get the error as:

![my screenshot](error.png)

so we need to use try and catch block to handle this error elegently as 

```javascript

try{

    myfunction();
}
catch(err){
    console.log(err);


}

console.log("The program continues after finishing the error");

```
The execution of the program goes like this:

![screenshot](sc2.png)

>In catch block the err can be use in many different ways

```javascript
    console.log(err.message);
    console.log(err.name);
    console.log(err instanceof TypeError);
    
```