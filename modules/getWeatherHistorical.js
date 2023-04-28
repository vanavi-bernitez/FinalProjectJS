import { fillDateForecast } from "./fillDateForecast.js";

const getWeatherHistorical = async(lat, lng, date) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/history.json?key=3d7ec4b4d6564156ab5152651232504&q=${lat},${lng}&dt=${date}`)
        const data = await response.json();
        const forecastSelectedDate = data.forecast.forecastday[0].hour;
        const forecastTemp = [];
        forecastSelectedDate.forEach((hour, index) => {
            if (index % 4 === 0) {
                const temp = hour.temp_c;
                forecastTemp.push(temp); 
            }   
        });

        fillDateForecast(forecastTemp)

        console.log(forecastTemp)
    
    } catch (error) {
        console.log(error)
    }
}

export { getWeatherHistorical }