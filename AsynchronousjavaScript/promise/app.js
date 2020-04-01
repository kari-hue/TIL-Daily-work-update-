const post = [

    {title : 'post one', body : 'This is post one'},
    {title: 'post two', body :'this is post two'}
];


function createPost(p){
    return new Promise(function(resolve,reject){

        setTimeout(function(){
            post.push(p);

            let err = false;
            if(!err)
            {
             resolve();
            }
            else
            {
                reject("Error: something went wrong");
            }
        }, 2000);

    });
    
}

function getPost() {

    setTimeout(function(){
        let output = '';
        post.forEach(function(p){

            output += `<li> ${p.title} </li>`;
        });

        document.body.innerHTML = output;

    },1000);
}

createPost({title: 'post three', body : 'welcome to post 3'}).then(getPost)
.catch(function(err){
    console.log(err);
});

    
