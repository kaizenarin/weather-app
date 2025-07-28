const apikey = '9113cd5eacea0bb1fdb47bec25019023';
const apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=japan&appid=9113cd5eacea0bb1fdb47bec25019023&units=metric';
let User = document.getElementById('cityInput');
let srhBtn = document.getElementById('searchBtn');
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

srhBtn.addEventListener('click', async () => {
    const city = User.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === "404") {
            alert("City not found!");
            return;
        }
        const temp = Math.round(data.main.temp);
        const feels = Math.round(data.main.feels_like);
        const humidity = data.main.humidity;
        const desc = data.weather[0].description;
        const icon = data.weather[0].icon;
        const wind = (data.wind.speed * 3.6).toFixed(1);
        const gust = (data.wind.gust * 3.6).toFixed(1);
        const name = data.name;

        document.getElementById('temp').innerText = `${temp}°C`;
        document.getElementById('description').innerText = `${desc}`;
        document.getElementById('Feels').innerText = `${feels}°C`;
        document.getElementById('Humidity').innerText = `${humidity}%`;
        document.getElementById('Wind').innerText = `${wind}km/h`;
        document.getElementById('Gust').innerText = `${gust}km/h`;
        document.getElementById('city').innerText = `${name}`;
        document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;


    } catch (error) {
        console.log("Error fetching data:", error);
    }
});
