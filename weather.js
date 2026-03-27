// my weather api call
require("dotenv").config();
const apiKey = process.env.apiKey;

const getWeather = async (nameOfCity) => {
	const reply = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity},&APPID=${apiKey}&units=metric`,
	);
	const data = await reply.json();

	console.log(`
		City: ${data.name}
		Temperature: ${data.main.temp}
		Condition: ${data.weather[0].description}
		Humidity: ${data.main.humidity}
		Wind: ${data.wind.speed}

		`);
};

getWeather("Uyo");
