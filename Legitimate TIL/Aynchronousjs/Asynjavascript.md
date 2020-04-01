
# March 27/2020

##  Working with get request

> div id="output"


var xhr = new XMLHttpRequest();

xhr.open('GET','data.txt',true);

xhr.onprogress();


xhr.onload = function(){
        console.log('READYSTATE',xhr.readyState);

        if(this.status === 200)

    document.getElementById('output').innerHTML = `
    <h1>${this.responseText}</h1>`;

}

