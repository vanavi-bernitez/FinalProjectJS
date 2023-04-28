const getWeatherHistorical = async(lat, lng, date) => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/history.json?key=3d7ec4b4d6564156ab5152651232504&q=${lat},${lng}&dt=${date}`)
        const data = await response.json();
        

    } catch (error) {
        console.log(error)
    }

}