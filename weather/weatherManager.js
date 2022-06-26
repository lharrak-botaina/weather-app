class WeatherManager {
    #_currentForecast;
    

    set currentForecast(value) {
        this.#_currentForecast = value
    }

    get currentForecast() {
        return this.#_currentForecast
    }

  

    async fetchForecast(url) {

        var response = await fetch(url)
        var json = await response.json()
        // handle the response

        var weather = new Weather()
        weather.city = json.name
        weather.description = json.weather[0].main
        weather.iconCode = json.weather[0].icon
        weather.temp = json.main.temp
        weather.country = json.sys.country
        weather.humidity = json.main.humidity
        weather.wind = json.wind.speed
        weather.clouds = json.clouds.all
        
        this.#_currentForecast = weather
        changePic(weather.description)
        // timePic(timeToday)
    }
}