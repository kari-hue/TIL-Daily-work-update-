//initialize the github

const github = new Github;


const seacrchUser = document.getElementById('searchUser');


seacrchUser.addEventListener('keyup',(e) => {

    const userText = e.target.value;

    if(userText!==' '){
        //make HTTP call 

       github.getUser(userText) 
       .then(data => {
           if(data.profile.message ==="Not Found"){
               //show show alert
           }else{

           }
       });

    }
    else{
        
    }
})