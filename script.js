const apiKey ="8b82b381c5e927a7d02ad7d92593f4d1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchCity = document.querySelector(".search input")
const searchCitybtn = document.querySelector(".search button")

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " " +"km/h";
}

searchCitybtn.addEventListener("click", ()=>{
    checkWeather(searchCity.value);
})

checkWeather();