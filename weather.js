require("dotenv").config();
const key = process.env.apiKey;

async function getWeather(nameGrab) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${nameGrab},&APPID=${key}&units=metric`,
	);
	const data = await response.json();
	console.log(`
		City: ${data.name}
		Temperature: ${data.main.temp}
		Condition: ${data.weather[0].description}
		Humidity: ${data.main.humidity}
		Wind: ${data.wind.speed}

		`);
}

getWeather("Uyo");
