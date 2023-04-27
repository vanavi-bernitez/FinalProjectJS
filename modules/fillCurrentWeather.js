const fillCurrentWeather = (usedData) => {
    const currentContainer = document.querySelector('#currentWeatherCont');
    currentContainer.querySelector('#city').innerHTML = usedData.city;
    currentContainer.querySelector('#country').innerHTML = usedData.country;
    currentContainer.querySelector('#condition').innerHTML = usedData.condition;
    const conditionIcon = currentContainer.querySelector('#conditionIcon');
    conditionIcon.src = usedData.conditionIcon;
    currentContainer.querySelector('#tempContent').innerHTML = usedData.tempCelsius;
    currentContainer.querySelector('#tempFeels').innerHTML = usedData.tempFeels;
    currentContainer.querySelector('#uv').innerHTML = usedData.uv;
}

export {fillCurrentWeather}