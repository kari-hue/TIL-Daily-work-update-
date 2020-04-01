
//Listening for submit button 

document.getElementById('loan-form').addEventListener('submit',calculateResults);


function calculateResults(e){
    console.log('Calculating...');

    //grabing all the ids of element that we need to modify

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const  totalPayment= document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    
    const calculatedInterest = parseFloat(interest.value) /100 /12;
    
    const calculatedPayments = parsefloat(years.value)*12;

    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (principal *x* calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatePayments).toFixed(2);
        totalInterest.value = ((monthly * calculatePayments)-principal).toFixed(2);
    } else {
       showError("please check your number");

    }
    
    



    e.preventDefault();       //Prevent any default action

}

//defining the function showError
function showError(error){
    const errorDiv = document.createElement("div");
    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')

    errorDiv.className = 'alert alert-danger';
    erroeDiv.appendChild(document.createTextNode(error));

    //insert error above heading

    card.insertBefore(errorDiv,heading);

    //clearerror after 4s

    setTimeout(clearError,4000);

}


function clearError(){

    document.querySelector('.alert').remove();
}