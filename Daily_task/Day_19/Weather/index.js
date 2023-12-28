

let cityname = document.getElementById("cityname")
let details = document.getElementById("details")
details.onclick = function () {

    searchWeather()
}

function searchWeather() {
    let place = cityname.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=9b3abd72af5e8ee4c215adb53b59b0e5`)
        .then((data) => data.json())
        .then((responce) => {

            if (responce.message == "city not found") {

                let error = document.getElementById('error')
              
                error.innerHTML ="city not found"
               
            } else {

                let container = document.getElementById('container')

                let temp = document.getElementById("temp")
                temp.innerHTML = `temp: ${responce.main.temp}`;
                container.appendChild(temp);

                let humidity = document.getElementById("humidity")
                humidity.innerHTML = `humidity: ${responce.main.humidity}`;
                container.appendChild(humidity);

            }
        })
}