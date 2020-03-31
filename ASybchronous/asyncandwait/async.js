
async function hi(){

   
    const promise = new promise((resolve,reject) => {
        setTimeout(() => resolve('hey'),1000);
    });

    const error = true;
    if(!error){
        
        const res = await promise;
        return res;   


    }

    else{
        await promise.reject(new Error('something went wrong'));
    }


    
}


hi().then(res => console.log(res))
.catch(err => console.log(err));


/*

const hey = () => console.log("Anything the reandom one");
*/