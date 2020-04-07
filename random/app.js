let button = document.getElementById("btn");

button.addEventListener("click",clickButton);

function clickButton(){

    let word = document.getElementById('input1').value;
    
    

    let convert = word.length;
    if(convert > 2 && convert < 15){

    let giveoutput = document.getElementById("output");

    giveoutput.innerHTML = `<h1>${convert}</h1>`;
    }
    else{

        let giveoutput = document.getElementById("output");

    giveoutput.innerHTML = `<h1>sorry couldn't display the count</h1>`;
    }



}