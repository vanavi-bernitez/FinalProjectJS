const fillForecastWeather = (forecast) => {
    const forecastTemplate = document.querySelector('#forecastTemplate');
    const forecastContainer = document.querySelector('#forecast');
    while (forecastContainer.hasChildNodes()) {
        forecastContainer.removeChild(forecastContainer.firstChild)
    }       
        
    for (let index = 1; index < forecast.length; index += 1){
        const clonedForecastTemplate = forecastTemplate.content.cloneNode(true);
        clonedForecastTemplate.querySelector('#forecastDate').innerHTML = forecast[index].date;
        const forecastConditionIcon = clonedForecastTemplate.querySelector('#forecastConditionIcon');
        forecastConditionIcon.src = forecast[index].weather.conditionIcon;
        clonedForecastTemplate.querySelector('#forecastCondition').innerHTML = forecast[index].weather.condition;
        clonedForecastTemplate.querySelector('#forecastTemperature').innerHTML = forecast[index].weather.tempCelsius;
        clonedForecastTemplate.querySelector('#forecastUV').innerHTML = forecast[index].weather.uv;
        forecastContainer.appendChild(clonedForecastTemplate);
    }
}

export { fillForecastWeather }