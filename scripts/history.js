import { getWeatherHistorical } from "../modules/getWeatherHistorical.js";
let map;
let latitude = 4.5350;
let longitude = -75.6757;
let dateValue;
let date = document.querySelector('#dateInput');

const initMap = async () => {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    const { SearchBox } = await google.maps.importLibrary("places");
    const position = { lat: latitude, lng: longitude };
    map = new Map(document.querySelector("#map"), {
        zoom: 13,
        center: position,
        mapId: "DEMO_MAP_ID",
    });
    const marker = new AdvancedMarkerView({
        map: map,
        position: position,
    });
    const startInfoWindow = new google.maps.InfoWindow({
        content: '<h2 id="infoWindow"> Hi. Welcome to Armenia! </h2>'
    });
    marker.addListener('gmp-click', () => {
        startInfoWindow.open(map, marker)
    });
    const startSearchBoxOptions = {
        types: ['cities']
    }
    const searchElement = document.querySelector('#searchBox');
    const searchBox = new SearchBox(searchElement, startSearchBoxOptions);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(searchElement);
    let markers = [];
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length == 0) return;
        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {           
            if (!place.geometry || !place.geometry.location) {
                window.alert(`No details available for input: ${place.name}`);
                return;
            }
            markers.push(
                new google.maps.Marker({
                    map,
                    title: place.name,
                    position: place.geometry.location,
                })
            );
            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
            latitude = place.geometry.location.lat();
            longitude = place.geometry.location.lng();
            date.addEventListener('input', () => {
                dateValue = date.value;
                getWeatherHistorical(latitude,longitude, dateValue)
            });
        });
        map.fitBounds(bounds);           
        });
        date.addEventListener('input', () => {
            dateValue = date.value;
            getWeatherHistorical(latitude,longitude, dateValue)
        });       
}

initMap();





