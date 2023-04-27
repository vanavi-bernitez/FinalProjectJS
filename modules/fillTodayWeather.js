const fillTodayWeather = (forecastEverySixHours) => {
    forecastEverySixHours.forEach((hour) => {
        const todayTemplate = document.querySelector('#todayWeatherTemplate');
        const todayContainer = document.querySelector('#todayWeatherCont')
        const clonedTodayTemplate = todayTemplate.content.cloneNode(true);
        const todayConditionIcon = clonedTodayTemplate.querySelector('#todayConditionIcon');
        todayConditionIcon.src = hour.conditionIcon;
        clonedTodayTemplate.querySelector('#todayCondition').innerHTML = hour.condition;
        clonedTodayTemplate.querySelector('#todayTemperature').innerHTML = hour.tempCelsius;
        clonedTodayTemplate.querySelector('#todayUV').innerHTML = hour.uv;
        todayContainer.appendChild(clonedTodayTemplate);
    });
}

export { fillTodayWeather }