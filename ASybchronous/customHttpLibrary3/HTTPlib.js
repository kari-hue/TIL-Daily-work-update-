const http = new EasyHttp;

/*

http.get('http://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err=> console.log(err));
*/



//userdata

const data = 
    {
    name: 'karishma kunwar',
    username:'kari',
    email:'kkunwar211@gmail.com'

    }


http.post('http://jsonplaceholder.typicode.com/users',data)
.then(data => console.log(data))
.catch(err=> console.log(err));


/*
http.delete('http://jsonplaceholder.typicode.com/users/1')
.then(data => console.log(data))
.catch(err=> console.log(err));
*/