import { fillCurrentWeather } from "./fillCurrentWeather.js";
import { fillTodayWeather } from "./fillTodayWeather.js"
import { fillTodayForecastWeather } from "./fillTodayForecastWeather.js";
import { fillForecastWeather } from "./fillForecastWeather.js";

const getWeatherForecast = async(lat, lng, days) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3d7ec4b4d6564156ab5152651232504&q=${lat},${lng}&days=${days}&aqi=no&alerts=no`)
        const data = await response.json();

        const forecastCurrentDay = data.forecast.forecastday[0].hour;
        const forecastEverySixHours = [];
        forecastCurrentDay.forEach((hour, index) => {
            if (index % 6 === 0) {
                const propertiesForecastCurrentDay = {
                    'tempCelsius': hour.temp_c,
                    'condition': hour.condition.text,
                    'conditionIcon': hour.condition.icon,
                    'uv': hour.uv
                }
                forecastEverySixHours.push(propertiesForecastCurrentDay); 
            }   
        }); 

        const forecastDays = data.forecast.forecastday;
        const forecastDaysProperties = [];
        forecastDays.forEach((day) => {
            const propertiesForecast = {
                "date": day.date,
                "weather": {
                    'tempCelsius': day.day.maxtemp_c,
                    'condition': day.day.condition.text,
                    'conditionIcon': day.day.condition.icon,
                    'uv': day.day.uv
                }
            }
            forecastDaysProperties.push(propertiesForecast)
        })

        const usedData = {
            'city': data.location.name,
            'country': data.location.country,
            'tempCelsius': data.current.temp_c,
            'condition': data.current.condition.text,
            'conditionIcon': data.current.condition.icon,
            'tempFeels': data.current.feelslike_c,
            'uv': data.current.uv,
            'forecastToday': forecastEverySixHours,
            'forecast': forecastDaysProperties
        }
        fillCurrentWeather(usedData);
        fillTodayWeather(forecastEverySixHours);
        fillTodayForecastWeather(forecastDaysProperties);
        fillForecastWeather(forecastDaysProperties);

    } catch (error) {
        window.alert(`Error fetching data: ${error}`);
    }
}

export { getWeatherForecast }
