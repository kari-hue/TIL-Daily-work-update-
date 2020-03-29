const post = [

    {title : 'post one', body : 'This is post one'},
    {title: 'post two', body :'this is post two'}
];


function createPost(p){
    setTimeout(function(){
        post.push(p);
    },2000);
}

function getPost(){

    setTimeout(function(){
        let output = '';
        post.forEach(function(p){

            output += `<li> ${p.title} </li>`;
        });

        document.body.innerHTML = output;

    },1000);
}

createPost({title: 'post three', body : 'welcome to post 3'});
    
getPost();