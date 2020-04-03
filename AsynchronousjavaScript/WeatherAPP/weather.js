


//let's select the classes that we need to modify using queryselector
const notificationElement = document.querySelector('notifications');    //for notifications

const iconElement = document.querySelector('.weather-icon');            //for weather icons

const tempElement = document.querySelector('.temperature-value p');      //for temperature value either in degree celcius or in fahrenheit

const description = document.querySelector('.temperature-description p');     //temperature description (clear sky or dull)

var location = document.querySelector('.location p');                        //where is the actual location you are residing in

//app data
const weather = {

}
weather.temperature ={
    unit : "celsius"
}


//app constant and var 

const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

//check if your browser supports geolocation or not

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition,showError);
}
else{
notificationElement.style.display = "block";
notificationElement.innerHTML = "<p> Browser doesn't support geoloaction</p>"
}

//describe the setposition function

function setPosition(position){

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

     getWeather(longitude,latitude);

}

function showError(error){

    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}


//crate the function get weather

function getWeather(latitude,longitude){
    
    
        let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&long=${longitude}&appid=${key}`;
    
    




//to send the request we are going to use fetch


fetch(api).then(function(response){
    let data = response.json();
    return data;
})
.then(function(data){
    weather.temperature.value = Math.floor(data.main.temp - KELVIN);
    weather.description = data.weather[0].description;
    weather.iconId = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
})
.then(function(){
    displayWeather();
});

}//It's time to store the temperature data that we actually want to display so why no place it in an object

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    description.innerHTML = weather.description;
    location.innerHTML = `${weather.city}, ${weather.country}`;
}

function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}


