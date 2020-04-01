
const quotes = [
    
    {
        name:'Aberjhani',
        quote : "This fire that we call Loving is too strong for human minds. But just right for human souls."
    },

    {  
        name:"lisa hedon",
        quote: "Read a thousand books, and your words will flow like a river"

    },

    {
        name: "Anton Chekhov",
        quote:"Don’t tell me the moon is shining; show me the glint of light on broken glass."
    },

    {
        name: "Maya Angelou ",
        quote: "There is no greater agony than bearing an untold story inside you."
    },
    {
        name: "Sylvia Plath",
        quote: "And by the way, everything in life is writable about if you have the outgoing guts to do it, and the imagination to improvise. The worst enemy to creativity is self-doubt"
    }
];

const quotesbutton =  document.getElementById('btn1');

const quoteauthor = document.getElementById('quoteauthor');

const finalquote = document.getElementById('quote');


quotesbutton.addEventListener('click',displayQuotes);




function displayQuotes() {

    let number = Math.floor(Math.random() *quotes.length);

    quoteauthor.innerHTML = quotes[number].name;
    finalquote.innerHTML = quotes[number].quote;

}