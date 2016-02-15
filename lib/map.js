import { androidObject } from './androidObject';
import { locationFromLatLngCoords, geolocate } from './locationHelpers';

class AIMap {
  constructor(mapConfig) {

    let mapOptions = {
      zoom: mapConfig.initialZoom,
      center: new google.maps.LatLng(mapConfig.centerLat, mapConfig.centerLng),
      disableDoubleClickZoom: true
    };
    this.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    this.userMarkers = [];

    // Listening for the first 'idle' event to tell Android that the map is ready
    google.maps.event.addListenerOnce(this.map, 'idle', function(){
      console.log('Triggering mapIsReady on Android side.');
      androidObject.mapIsReadyToAndroid();
    });
  }

  getMap() {
    return this.map;
  }

  setZoom(zoom) {
    if (zoom >= 0 && zoom <= 19){
      this.map.setZoom(zoom);
    }
    else // Exception handling is also done on Android side
      console.log('Zoom value ' + zoom + ' is not in the valid range 0-19');
  }

  getZoom() { return this.map.zoom; }

  panToLocation(lat, lng) {
    var location;
    try{
      location = locationFromLatLngCoords(lat, lng);
      this.map.panTo(location);
    }
    catch (err){
      console.log(err);
      androidObject.dispatchErrorToAndroid(androidObject.ERROR_ILLEGAL_COORDS_FORMAT);
    }
  }

  geolocateAddress(address, cb){
    geolocate(address, function(err, result){
      if (err) {
        return cb(err);
      }
      return cb(null, result);
    });
  }

  allowMarkers(allow){
    if (allow){
      var self = this;

      function serialise(marker){
        var markerObject = {
          lat: marker.position.lat(),
          lng: marker.position.lng(),
          info: (marker.info && marker.info.content) ? marker.info.content : ''
        };
        return JSON.stringify(markerObject);
      }

      google.maps.event.addListener(this.map, 'click', function(event) {
        var marker = new google.maps.Marker({
          position: event.latLng,
          map: self.map
        });
        //TODO (jos) Double clicks send a single click first; can I catch a double click here somehow?
        // Can I cancel a setInterval or use a Timeout?
        google.maps.event.addListener(marker, 'click', function(){
          console.log('Sending marker to Android: ' + serialise(marker));
          androidObject.sendMarkerToAndroid(serialise(marker));
        });
        google.maps.event.addListener(marker, 'dblclick', function(){
          console.log('Sending double marker to Android: ' + serialise(marker));
          androidObject.sendDoubleMarkerToAndroid(serialise(marker));
        });
        self.userMarkers.push(marker);
        androidObject.sendUserMarkerAddedToAndroid(serialise(marker));
      });
    }
    else{
      google.maps.event.clearListeners(this.map,'click');
    }
  }

  createInfoWindow(marker, content) {
    var infoWindow = new google.maps.InfoWindow({
      content: content
    });
    if (marker)
      marker.info = infoWindow;
  };

  openInfoWindow(marker){
    if (marker && marker.info)
      marker.info.open(this.map, marker);
  };

  closeInfoWindow(marker){
    if (marker && marker.info)
      marker.info.close();
  }

}

export { AIMap };
