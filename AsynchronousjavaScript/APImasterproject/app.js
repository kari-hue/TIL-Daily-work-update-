//initialize the github

const github = new Github;

//Initialize the ui

const ui = new UI;


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

            //showing the profile of the user
            ui.showProfile(data.profile);

           }
       });

    }
    else{

    }
})