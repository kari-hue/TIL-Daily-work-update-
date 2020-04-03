


//let's select the classes that we need to modify using queryselector
const notificationElement = document.querySelector(".notifications");    //for notifications

const iconElement = document.querySelector('.weather-icon');            //for weather icons

const tempElement = document.querySelector('.temperature-value p');      //for temperature value either in degree celcius or in fahrenheit

const description = document.querySelector('.temperature-description p');     //temperature description (clear sky or dull)

const location = document.querySelector('.location p');                        //where is the actual location you are residing in



//app constant and var 

const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

function getWeather(longitude,latitude){
    
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&long=${longitude}&appid=${key}`;
}

//to send the request we are going to use fetch


fetch(api).then(function(response){
    let data = response.json();
    return data;
})

//It's time to store the temperature data that we actually want to display so why no place it in an object
/*
const weather = {

    temperature :{
        value: 18,
        unit: "celcius"
    },

    description :"few clouds",
    iconId : "01d",
    city :"london",
    country:"GB"
};

//to display the weather we just need to change the innerHTML of each element
iconElement 
tempElement
description
location
*/