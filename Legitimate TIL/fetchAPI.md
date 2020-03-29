# March 29/2020

> For Text file

```  <button id="btn1">GET TEXT</button>```

>

document.getElementById("btn1").addEventListener('click',getText);


>
  
    function getText(){

    fetch('new.txt')
    .then(function(res){
        return (res.text());
    }) 

    .then(function(data){
        console.log(data);

        document.getElementById('output').innerHTML = data;
    })

    .catch(function(err){

        console.log(err);
    });
    
                  //Fetch returns promises

     }



---

> For JSON file

```  <button id="btn2">GET TEXT</button>```

>
document.getElementById("btn2").addEventListener('click',getJson);


> 
    function getJson(){

    fetch('fetch.json')
    .then(function(res){
        return (res.json());
    }) 

    .then(function(data){
        console.log(data);

        let output = ' ';
        data.forEach (function(post){

            output += `<li>${post.title}</li>
            <li>${post.body}</li>
            `;
            document.getElementById('output').innerHTML = output;
        });
            
        })
            

---

> For external API (Fetching data from https://api.github.com/users)

```  <button id="btn3">GET TEXT</button>```

>
document.getElementById("btn3").addEventListener('click',getExternal);

>
    function getExternal(){

    fetch('https://api.github.com/users')
    .then(function(res){
        return (res.json());
    }) 

//Rest of the process is similar to JSON