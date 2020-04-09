
/*
import { person } from './mymodule2';
console.log(person.name);
*/

//importing from http.js

import { http } from './http';
import {ui} from './ui';

document.addEventListener('DOMContentLoaded',getPosts);

function getPosts(){

    http.get('http://localhost:3000/posts')
    .then(data => ui.getPosts(data))
    .catch(err =>
        console.log(err));
    
};

