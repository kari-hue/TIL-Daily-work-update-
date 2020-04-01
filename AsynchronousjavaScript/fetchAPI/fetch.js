document.getElementById("btn1").addEventListener('click',getText);

//adding event listener click
document.getElementById("btn2").addEventListener('click',getJson);
//get local json data

//working with external APIS

document.getElementById("btn3").addEventListener('click',getExternal);

function getExternal(){

    fetch('https://api.github.com/users')
    .then(function(res){
        return (res.json());
    }) 

    .then(function(data){
        console.log(data);

        let output = ' ';
        data.forEach (function(post){

            output += `<li>${post.login}</li>
            <li>${post.id}</li>
            `;
            document.getElementById('output').innerHTML = output;
        });
            
        })

        .catch(function(err){
            console.log(err);
        });
    }


//Getting the json data
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
            
        



    .catch(function(err){

        console.log(err);
    })
    
                  //Fetch returns promises

}

//let's create an event listener 
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