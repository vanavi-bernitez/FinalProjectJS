const fillDateForecast = (forecastTemp) => {
    const drawChart = () => {
        let data = google.visualization.arrayToDataTable([
            ['Hour', 'TempC'],
            ['00:00', forecastTemp[0]],
            ['04:00', forecastTemp[1]],
            ['08:00', forecastTemp[2]],
            ['12:00', forecastTemp[3]],
            ['16:00', forecastTemp[4]],
            ['20:00', forecastTemp[5]]    
        ]);   
        let options = {
            title: 'Day forecast',
            curveType: 'function',
            legend: { position: 'bottom' },
            backgroundColor: 'none'
        };    
        let chart = new google.visualization.LineChart(document.querySelector('#forecastChart'));
        chart.draw(data, options);
    }   
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);
}

export { fillDateForecast }