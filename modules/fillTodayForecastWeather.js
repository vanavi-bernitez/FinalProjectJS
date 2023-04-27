const fillTodayForecastWeather = (forecast) => {
    const todayForecastContainer = document.querySelector('#todayForecast');
    const todayForecastConditionIcon = todayForecastContainer.querySelector('#todayForecastConditionIcon');
    todayForecastConditionIcon.src = forecast[0].weather.conditionIcon;
    todayForecastContainer.querySelector('#todayForecastCondition').innerHTML = forecast[0].weather.condition;
    todayForecastContainer.querySelector('#todayForecastTemperature').innerHTML = forecast[0].weather.tempCelsius;
    todayForecastContainer.querySelector('#todayForecastUV').innerHTML = forecast[0].weather.uv;
}

export { fillTodayForecastWeather }