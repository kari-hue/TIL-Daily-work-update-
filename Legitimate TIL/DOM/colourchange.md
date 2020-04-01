# March 26/2020

>Quote generator button

```html 

<button type = "button" id = "btn1" >click the button for quotes</button>
```
```javascript 
const quotesbutton =  document.getElementById('btn1');
```

>Quote author

//Quote author will display the quotes

```html 

<h3 id="quoteauthor">Author of code</h3>
```

```javascript 
const quoteauthor = document.getElementById('quoteauthor');
```

>Quotes Displayer
```html  
 <h2 id="quote">Quote</h2>
```

```javascript 
const finalquote = document.getElementById('quote');
```

>Actual function that will display the quotes

```javascript function displayQuotes() {

    let number = Math.floor(Math.random() *quotes.length);

    quoteauthor.innerHTML = quotes[number].name;
    finalquote.innerHTML = quotes[number].quote;

} ```

/*The quotes will be generated randomly for that we use random function that will randomly generate the quotes according to their number*/