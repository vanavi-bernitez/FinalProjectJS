const initMap = () => {

    const startMapOptions = {
        zoom: 13,
        center: {lat: 4.5350, lng: -75.6757}
    } 
    const mapElement = document.querySelector('#map');

    // Map creation
    const map = new google.maps.Map(mapElement, startMapOptions);

    // Marker function
    const addMapMarker = (properties) => {
        const mapMarker = new google.maps.Marker({
            position: properties.coords,
            map,            
        })
        return mapMarker;
    }

    // Start value and message over the start market
    const startMarker = addMapMarker({coords:{lat: 4.5350, lng: -75.6757}});
    const startInfoWindow = new google.maps.InfoWindow({
        content: '<h2 id="infoWindow"> Hi. Welcome to Armenia! </h2>'
    })
    startMarker.addListener('click', () => {
        startInfoWindow.open(map, startMarker)
    })

    // When click on the map. Creates a marker
    google.maps.event.addListener(map, 'click', (event) => {
        addMapMarker({coords: event.latLng});
        const latitude = event.latLng.lat();
        const longitude = event.latLng.lng();
        console.log(event.latLng.lat(), event.latLng.lng());
        // return latitude, longitude;
    })

    // Create search box
    const startSearchBoxOptions = {
        types: ['cities']
    }
    const inputLocationElement = document.querySelector('#searchBox');
    const searchBox = new google.maps.places.SearchBox(inputLocationElement, startSearchBoxOptions); //This makes the magic

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputLocationElement);
    map.addListener('bounds_changed', () => {
        searchBox.setBounds(map.getBounds());
    })






    let markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
  
      if (places.length == 0) {
        return;
      }
  
      // Clear out the old markers.
      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = [];
  
      // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      
  
      places.forEach((place) => {
        if (!place.geometry || !place.geometry.location) {
          console.log("Returned place contains no geometry");
          return;
        }
  
        const icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };

        
        console.log(place.geometry.location.lat(), place.geometry.location.lng());
    
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            title: place.name,
            position: place.geometry.location,
          })
        );
        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
          console.log(bounds.extend(place.geometry.location));
        }
      });
      
      map.fitBounds(bounds);
    });





    return map
}

window.initMap = initMap;
// initMap();


