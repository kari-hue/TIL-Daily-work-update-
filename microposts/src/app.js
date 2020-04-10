
/*
import { person } from './mymodule2';
console.log(person.name);
*/

//importing from http.js

import { http } from './http';
import {ui} from './ui';

document.addEventListener('DOMContentLoaded',getPosts);
//listen for add post
document.querySelector('.post-submit').addEventListener('click',addPost);

//listen for delete
 document.querySelector('#posts').addEventListener('click',deletePost);

//getting post

function getPosts(){

    http.get('http://localhost:3000/posts')
    .then(data => ui.getPosts(data))
    .catch(err =>
        console.log(err));
    
};

//add post

function addPost(){

    const title = document.querySelecter('#title').value;
    const body = document.querySelector('#body').value;

const data ={
    title,
    body
}


http.post('http://localhost:3000/posts',data)
.then(data => {
getPosts(); //get the new post along with the added post
})
.catch(err => console.log(err));

}

//delete post
function deletePost(e){
    e.preventDefault();
    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id;
        if(confirm('ARe you sure')){
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                getPosts();
            })
            .catch(err => console.log(err));

        }
    }

}