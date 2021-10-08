var apiKey = "e64ea80c4d9d122e51aab4d76a3b4e6f";
var inputValue = document.getElementById("cityInput")
var main = document.getElementById("main")

var day = moment().format("dddd, MMMM Do YYYY");
var day1 = moment().add(1, 'days').format("dddd, MMMM Do");
var day2 = moment().add(2, 'days').format("dddd, MMMM Do");
var day3 = moment().add(3, 'days').format("dddd, MMMM Do");
var day4 = moment().add(4, 'days').format("dddd, MMMM Do");
var day5 = moment().add(5, 'days').format("dddd, MMMM Do");

document.getElementById("date").innerHTML = day
document.getElementById("date1").innerHTML = day1
document.getElementById("date2").innerHTML = day2
document.getElementById("date3").innerHTML = day3
document.getElementById("date4").innerHTML = day4
document.getElementById("date5").innerHTML = day5



function getCity() {
    var cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + inputValue.value + "&limit=5&appid=" + apiKey

    fetch(cityURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                localStorage.setItem("lat", data[0].lat)
                localStorage.setItem("lon", data[0].lon)
                localStorage.setItem("cityState", data[0].name + ", " + data[0].state);
                getWeather()
            })
        }
    });
}

function getWeather() {
    var latitude = localStorage.getItem("lat");
    var longitude = localStorage.getItem("lon");
    var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&exclude=minutely,hourly&appid=e64ea80c4d9d122e51aab4d76a3b4e6f";
    console.log (weatherURL)

    fetch(weatherURL).then(function (response) {
        if (response.ok){
            response.json().then(function(data){
                localStorage.setItem("currentIcon", data.current.weather[0].icon)
                localStorage.setItem("currentTemp", JSON.stringify(data.current.temp))
                localStorage.setItem("currentHumidity", JSON.stringify(data.current.humidity))
                localStorage.setItem("currentWind", JSON.stringify(data.current.wind_speed))
                localStorage.setItem("currentUVI", JSON.stringify(data.current.uvi))

                localStorage.setItem("forcast1Icon", data.daily[0].weather[0].icon)
                localStorage.setItem("forecast1Temp", JSON.stringify(data.daily[0].temp.day))
                localStorage.setItem("forecast1Humidity", JSON.stringify(data.daily[0].humidity))
                localStorage.setItem("forecast1Wind", JSON.stringify(data.daily[0].wind_speed))
                localStorage.setItem("forecast1UVI", JSON.stringify(data.daily[0].uvi))

                localStorage.setItem("forcast2Icon", data.daily[1].weather[0].icon)
                localStorage.setItem("forecast2Temp", JSON.stringify(data.daily[1].temp.day))
                localStorage.setItem("forecast2Humidity", JSON.stringify(data.daily[1].humidity))
                localStorage.setItem("forecast2Wind", JSON.stringify(data.daily[1].wind_speed))
                localStorage.setItem("forecast2UVI", JSON.stringify(data.daily[1].uvi))

                localStorage.setItem("forcast3Icon", data.daily[2].weather[0].icon)
                localStorage.setItem("forecast3Temp", JSON.stringify(data.daily[2].temp.day))
                localStorage.setItem("forecast3Humidity", JSON.stringify(data.daily[2].humidity))
                localStorage.setItem("forecast3Wind", JSON.stringify(data.daily[2].wind_speed))
                localStorage.setItem("forecast3UVI", JSON.stringify(data.daily[2].uvi))

                localStorage.setItem("forcast4Icon", data.daily[3].weather[0].icon)
                localStorage.setItem("forecast4Temp", JSON.stringify(data.daily[3].temp.day))
                localStorage.setItem("forecast4Humidity", JSON.stringify(data.daily[3].humidity))
                localStorage.setItem("forecast4Wind", JSON.stringify(data.daily[3].wind_speed))
                localStorage.setItem("forecast4UVI", JSON.stringify(data.daily[3].uvi))

                localStorage.setItem("forcast5Icon", data.daily[4].weather[0].icon)
                localStorage.setItem("forecast5Temp", JSON.stringify(data.daily[4].temp.day))
                localStorage.setItem("forecast5Humidity", JSON.stringify(data.daily[4].humidity))
                localStorage.setItem("forecast5Wind", JSON.stringify(data.daily[4].wind_speed))
                localStorage.setItem("forecast5UVI", JSON.stringify(data.daily[4].uvi))
                
                document.getElementById("city").innerHTML = localStorage.getItem("cityState")
                document.getElementById("currentWeather").innerHTML = "Temp: " + localStorage.getItem("currentTemp") + "F/ " + "Humidity: " + localStorage.getItem("currentHumidity") + "%/ " + "Wind: " + localStorage.getItem("currentWind") + "mph/ " + "UVI: " + localStorage.getItem("currentUVI")
                document.getElementById("day1").innerHTML = "Temp: " + localStorage.getItem("forecast1Temp") + "F/ " + "Humidity: " + localStorage.getItem("forecast1Humidity") + "%/ " + "Wind: " + localStorage.getItem("forecast1Wind") + "mph/ " + "UVI: " + localStorage.getItem("forecast1UVI")
                document.getElementById("day2").innerHTML = "Temp: " + localStorage.getItem("forecast2Temp") + "F/ " + "Humidity: " + localStorage.getItem("forecast2Humidity") + "%/ " + "Wind: " + localStorage.getItem("forecast2Wind") + "mph/ " + "UVI: " + localStorage.getItem("forecast2UVI")
                document.getElementById("day3").innerHTML = "Temp: " + localStorage.getItem("forecast3Temp") + "F/ " + "Humidity: " + localStorage.getItem("forecast3Humidity") + "%/ " + "Wind: " + localStorage.getItem("forecast3Wind") + "mph/ " + "UVI: " + localStorage.getItem("forecast3UVI")
                document.getElementById("day4").innerHTML = "Temp: " + localStorage.getItem("forecast4Temp") + "F/ " + "Humidity: " + localStorage.getItem("forecast4Humidity") + "%/ " + "Wind: " + localStorage.getItem("forecast4Wind") + "mph/ " + "UVI: " + localStorage.getItem("forecast4UVI")
                document.getElementById("day5").innerHTML = "Temp: " + localStorage.getItem("forecast5Temp") + "F/ " + "Humidity: " + localStorage.getItem("forecast5Humidity") + "%/ " + "Wind: " + localStorage.getItem("forecast5Wind") + "mph/ " + "UVI: " + localStorage.getItem("forecast5UVI")

                console.log(localStorage)
                document.getElementById("currentIcon").src = "http://openweathermap.org/img/wn/" + localStorage.getItem("currentIcon") + "@2x.png"
                document.getElementById("icon1").src = "http://openweathermap.org/img/wn/" + localStorage.getItem("forcast1Icon") + "@2x.png"
                document.getElementById("icon2").src = "http://openweathermap.org/img/wn/" + localStorage.getItem("forcast2Icon") + "@2x.png"
                document.getElementById("icon3").src = "http://openweathermap.org/img/wn/" + localStorage.getItem("forcast3Icon") + "@2x.png"
                document.getElementById("icon4").src = "http://openweathermap.org/img/wn/" + localStorage.getItem("forcast4Icon") + "@2x.png"
                document.getElementById("icon5").src = "http://openweathermap.org/img/wn/" + localStorage.getItem("forcast5Icon") + "@2x.png"
            })
        }
    })
}


$("#searchBtn").on("click", function () {
    var btn = document.createElement("BUTTON");
    btn.textContent = inputValue.value
    btn.className = "cityBtn"
    btn.id = "cityBtn"
    btn.addEventListener('click', searchCityHistory)
    document.body.appendChild(btn);
    getCity()
});



function searchCityHistory() {
    inputValue.value = this.textContent
    getCity()
};