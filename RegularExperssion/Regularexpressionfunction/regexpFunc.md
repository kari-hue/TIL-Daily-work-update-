# April 3/2020
> An overview

A regular expression is a sequence of characters that forms a search pattern.

The search pattern can be used for text search and text replace operations.

## Syntax
```javascript
/pattern/modifiers;
```

```javascript
/karishma/i 
```

is a regular expression.

In JavaScript, regular expressions are often used with the two string methods: 
* search()
*  replace().

>Using search function
```javascript
var str = "I like intelligent people";

var p = str.search(/intelligent/i);

console.log(p);
```
Output

![screenshot](reg1.png)

>Replace function

```javascript
//using Replace()

var str = " I think hedonist are ethically correct";

var p = str.replace(/hedonist/i,"Atheist");

console.log(p);

```
Output:

![screenshot](reg2.png)

## Using the RegExp Object

In JavaScript, the RegExp object is a regular expression object with predefined properties and methods.

> Using test()

The test() method is a RegExp expression method.

It searches a string for a pattern, and returns true or false, depending on the result.

```javascript
var patt = /a/;
console.log(patt.test("Intelligence is attractive"));
```

//other functions are
> exec()
> match()


