# March 29/2020

## creating a promise
#### Promise is Asynchronous and it promise to do some other task while performing some task

>return new Promise(function(resolve,reject)

---

## Making use of resolve and reject

> let err = false;
            >if(!err)

            {
             resolve();
            }
            else
            {
                reject("Error: something went wrong");
            }


---


## Creating and catching error

    
>
     createPost({title: 'post three', body : 'welcome to post 3'}).then(getPost)

    .catch(function(err){

    console.log(err);
    });