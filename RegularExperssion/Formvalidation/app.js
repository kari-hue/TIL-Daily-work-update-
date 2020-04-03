//adding the blur event


document.getElementById('name').addEventListener('blur',validatename);

document.getElementById('zip').addEventListener('blur',validatezip);
document.getElementById('Email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatephone);


//now describing the function
function validatename(){

    const name = document.getElementById('name');

    const regular = /^[a-zA-Z]{2,}$/;

    if(!regular.test(name.value)){
        name.classList.add('is-invalid');

    }
    else{
        name.classList.remove('is-invalid');
    }

}

function validatezip(){
    const zip = document.getElementById('zip');

    const regular = /^[0-9]{5}$/;

    if(!regular.test(zip.value)){
        zip.classList.add('is-invalid');

    }
    else{
        zip.classList.remove('is-invalid');
    }


}
 

function validateEmail(){
    const email = document.getElementById('Email');

    const regular = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!regular.test(email.value)){
        email.classList.add('is-invalid');

    }
    else{
        email.classList.remove('is-invalid');
    }


}

function validatephone(){

    const phone = document.getElementById('name');

    const regular = /^[0-9]{10}/;

    if(!regular.test(phone.value)){
        phone.classList.add('is-invalid');

    }
    else{
        phone.classList.remove('is-invalid');
    }

}