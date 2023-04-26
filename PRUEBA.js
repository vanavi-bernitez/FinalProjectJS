
let map;

async function initMap() {

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    const { SearchBox } = await google.maps.importLibrary("places");

    const position = { lat: 4.5350, lng: -75.6757 };
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
                // User entered the name of a Place that was not suggested and
               // pressed the Enter key, or the Place Details request failed.
                window.alert("No details available for input: '" + place.name + "'");
                return;
            }


            let latitude = place.geometry.location.lat();
            let longitude = place.geometry.location.lng();
            let forecastDays = 2;

            console.log(latitude, longitude)


            
        
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
        //   console.log(latitude, longitude);   
        map.fitBounds(bounds);
        
        });








    // searchBox.addListener("places_changed", () => {
    //     startInfoWindow.close();
    //     marker.setVisible(false);
    
    //     const place = searchBox.getPlaces();
    
    //     if (!place.geometry || !place.geometry.location) {
    //       // User entered the name of a Place that was not suggested and
    //       // pressed the Enter key, or the Place Details request failed.
    //       window.alert("No details available for input: '" + place.name + "'");
    //       return;
    //     }
    
    //     // If the place has a geometry, then present it on a map.
    //     if (place.geometry.viewport) {
    //       map.fitBounds(place.geometry.viewport);
    //     } else {
    //       map.setCenter(place.geometry.location);
    //       map.setZoom(13);
    //     }
    
    //     marker.setPosition(place.geometry.location);
    //     marker.setVisible(true);
 
    //   });






    return map

}

initMap();