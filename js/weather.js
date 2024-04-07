const API_KEY = "b02d7d4b219a30eccd886f74d0f48e69";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const LANGUAGE = "kr"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=${LANGUAGE}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} ${data.weather[0].description} / ${data.main.temp}`;
            city.innerText = data.name;
        });
}
function onGeoError(){
    alert("Can't fond you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



