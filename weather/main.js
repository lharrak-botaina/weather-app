var city = "tangier";

var key = '1253309e30b4fb953c136c1426565be0&units=metric';

var weatherManager = new WeatherManager()

    var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    if (city) {
        weatherManager.fetchForecast(url).then(() => {
            display(weatherManager.currentForecast)
        })

    }

async function onSearch() {
    var weatherManager = new WeatherManager()

    city = document.getElementById("cityInput").value
     url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    if (city) {
        weatherManager.fetchForecast(url).then(() => {
            display(weatherManager.currentForecast)
        })

    }

    document.getElementById("cityInput").value = ""
    city = undefined
  


}


function display(currentForecast) {
    
    document.getElementById('city').textContent= currentForecast.city
    document.getElementById('temp').textContent= currentForecast.temp+ ""+ "°C"
    document.getElementById('clouds').textContent = currentForecast.clouds + ""+ "%"
    document.getElementById('icon').src = "http://openweathermap.org/img/w/"+currentForecast.iconCode+".png";
    document.getElementById('wind').textContent = currentForecast.wind + " "+"km/h"
    document.getElementById('desc').textContent= currentForecast.description
    document.getElementById('humidity').textContent= currentForecast.humidity
    document.getElementById('country').textContent= currentForecast.country

}
//date
    let dateToday =document.getElementById("date");
    let today = new Date();
    let day =`${today.getDate() < 10?"0" :""}${today.getDate()}`
    let month =`${(today.getMonth()+1) < 10?"0" :""}${today.getMonth()+1}`
    let year =today.getFullYear();
    dateToday.textContent =`${day}/${month}/${year}    `
//time 
    let timeToday =document.getElementById("time");
    let time = new Date()
    let h = `${time.getHours() < 10?"0" :""}${time.getHours()}`
    let m = `${time.getMinutes() < 10?"0" :""}${time.getMinutes()}`
    timeToday.textContent =`${h}:${m}`
    
    

    

    function changePic(description){
        if (description == "Clear"){
            document.getElementById("img1").style.backgroundImage = "url('img/https://thumbs.gfycat.com/FancyFoolhardyKestrel-size_restricted.gif')";
            document.getElementById("img1").style.backgroundSize = "cover"
            document.getElementById("img1").style.color ='#ffff'
            document.getElementById("img1").style.textDecorationStyle = "solid"
        }else 
        if(description == "Clouds"){

            document.getElementById("img1").style.backgroundImage = "url('img/clouds-sky.gif')";
            document.getElementById("img1").style.backgroundSize = "cover"
            document.getElementById("img1").style.color ='#ffff'
            document.getElementById("img1").style.textDecorationStyle = "solid"
        }else 
        if(description == "Rain"){
         
            document.getElementById("img1").style.backgroundImage = "url('img/rain-raining.gif')";
            document.getElementById("img1").style.backgroundSize = "cover"
            document.getElementById("img1").style.color ='#ffff'
            document.getElementById("img1").style.textDecorationStyle = "solid"
        }
    }


    // function timePic(timeToday) {
    //     if(timeToday >= "18:30" &&   ){
    //         document.getElementById("img1").style.backgroundImage = "url('night-clouds.jpg')";

    //     }
        
    // }