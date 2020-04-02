class UI{
    constructor()
    {
        this.profile = document.getElementById("profile");

    }

    //displaying the profile in the screen

    showProfile(user) {
     this.profile.innerHTML = `
     <div class ="card card-body mb-3">
     <div class = "row">
     <div class = "col-md-3">
     <img class = "img-fluid mb-2" src="${user.avatar_url}">

     <a href= "${user.html_url}" target = "_blank" class= "btn btn-primary btn-block">View profile</a>
     </div>

     <dib class = "col-md-9">
     <span class = "badge badge-primary">Public Repos:${user.public_repos}</span>
     <span 
     class = "badge badge-primary">Public Gists:${user.public_gists}</span>
     <span class = "badge badge-primary">Followers:${user.followers}</span>
     <span class = "badge badge-primary">Following:${user.following}</span>
     <br><br>
     <ul class = "list-group">
     <li class = "list-group-item">Company:${user.company}</li>
     <li class = "list-group-item">Website/blog:${user.blog}</li>
     <li class = "list-group-item">Location:${user.location}</li>
     <li class = "list-group-item">Member since:${user.created_at}</li>

     </ul>
     </div>
     </div>
     </div>
     <h3 class = "page-heading">Latest Repos</h3>
     <div id = "repos"></div>


     `;
    }

    //create show repos

    showRepos(repo){

        let output = ' ';

        repo.forEach(function(){

            output += `

            <div class= "card card-body mb-2">
            <div class = "row">
            <div class = "col-md-6">
            <a href = "${repo.html_url}" target = "_blank">${repo.name}</a>
            </div>
            <div class = "col-md-6">
            <span class = "badge badge-primary">Stars:${repo.stargazers_count}</span>
             <span 
             class = "badge badge-primary">Watchers:${repo.watchers_count}</span>
             <span class = "badge badge-primary">Forks:${repo.fork_count}</span>


            </div>
            </div>
            </div>

            `;

        }) ;
            

        //outpot the repository

        document.getElementById('repos').innerHTML = output;
        

    }
    //show alert method

    showAlert(message,className) {

        this.clearAlert();
        const divison  = document.createElement('div');

        divison.className = className;
        //add text
        const hello = document.createTextNode(message);
        divison.appendChild(hello);

        //get parent

        const container = document.querySelector('.searchContainer');

        //get search box
        const search = document.querySelector('.search');

        //insert alert
        container.insertBefore(divison,search);

        //timeout after 3 seconds

        setTimeout(() => {
            
            this.clearAlert();
            
        },3000);

}  


            //here we will be using the bootstrap so brace youself
    
//clearling more than one alert
clearAlert(){

    const currentAlert = document.querySelector('.alert');

    if(currentAlert){

        currentAlert.remove();

    }

}


    clearProfile(){
        this.profile.innerHTML = ' ';
    }

}
