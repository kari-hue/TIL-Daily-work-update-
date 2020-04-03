
try{

    myfunction();
}
catch(err){
    console.log(err);
    console.log(err.message);
    console.log(err.name);
    console.log(err instanceof TypeError);


} finally{
    console.log("Finally runs dispite of any error");
}

console.log("The program continues after finishing the error");