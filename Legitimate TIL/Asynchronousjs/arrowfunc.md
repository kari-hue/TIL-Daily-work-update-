
# March 30/2020

> Normal way you write any function



```javascript

    function newFunc(p) {

    return (p*p);
}
```

> Using Arrow function

```javascript

    const val = (p) => {

    console.log(p*p);
    
```



> More easier Version

```javascript
  const val = (p) => console.log(p*p); // no braces needed

  ```

>Best  used with arrays

```javascript  
const users = ['karishma','john','william'];
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);


const here = (firstname,lastname) => {
    console.log (here.firstname);
}
```