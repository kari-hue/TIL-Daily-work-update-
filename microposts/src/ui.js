class UI{
    constructor(){

        this.post = document.querySelector("#posts");
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelecter('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts){

        let output = ' ';

        posts.forEach(function(post){

            output += `${post.title}<br>
            ${post.body}
            `;

        });

        this.post.innerHTML = output;


    }
}

export const ui = new UI();