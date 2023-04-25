const initMap = () => {
    const startMapOptions = {
        zoom: 13,
        center: {lat: 4.5350, lng: -75.6757}
    } 

    const mapElement = document.querySelector('#map');

    const map = new google.maps.Map(mapElement, startMapOptions);

    const addMapMarker = (properties) => {
        const mapMarker = new google.maps.Marker({
            position: properties.coords,
            map
        })
        return mapMarker;
    }

    const startMarket = addMapMarker({coords:{lat: 4.5350, lng: -75.6757}});

    google.maps.event.addListener(map, 'click', (event) => {
        addMapMarker({coords: event.latLng});
        const latitude = event.latLng.lat();
        const longitude = event.latLng.lng();
        console.log(event.latLng.lat(), event.latLng.lng());
        // return latitude, longitude;
    })

    const startInfoWindow = new google.maps.InfoWindow({
        content: '<h2 id="infoWindow"> Hi. Welcome to Armenia! </h2>'
    })

    startMarket.addListener('click', () => {
        startInfoWindow.open(map, startMarket)
    })

    return map
}

initMap();


