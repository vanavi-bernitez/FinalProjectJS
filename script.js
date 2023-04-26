// import { getWeather } from "./modules/getWeather";

window.addEventListener('load', () => {
  let map;
  const initMap = () => {
    const startMapOptions = {
        zoom: 13,
        center: {lat: 4.5350, lng: -75.6757}
    };
    const mapElement = document.querySelector('#map');
    map = new google.maps.Map(mapElement, startMapOptions);
    const addMapMarker = (properties) => {
        const mapMarker = new google.maps.Marker({
            position: properties.coords,
            map,            
        })
        return mapMarker;
    };
    const startMarker = addMapMarker({coords: startMapOptions.center});
    const startInfoWindow = new google.maps.InfoWindow({
        content: '<h2 id="infoWindow"> Hi. Welcome to Armenia! </h2>'
    })
    startMarker.addListener('click', () => {
        startInfoWindow.open(map, startMarker)
    })
    const startSearchBoxOptions = {
        types: ['cities']
    }
    const inputLocationElement = document.querySelector('#searchBox');
    const searchBox = new google.maps.places.SearchBox(inputLocationElement, startSearchBoxOptions); 
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputLocationElement);
    map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
    })
    let markers = [];
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (places.length == 0) return;
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
      const bounds = new google.maps.LatLngBounds();
      let latitude = place.geometry.location.lat();
      let longitude = place.geometry.location.lng();
      let forecastDays = 2;

      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }

        latitude = place.geometry.location.lat();
        longitude = place.geometry.location.lng();


        
    
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
      });   
      console.log(latitude, longitude);   
      map.fitBounds(bounds);
    });
    return map
  }

  window.initMap = initMap;
});









