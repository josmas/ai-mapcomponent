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
  };

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
      console.log('RESULT: ' + result);
      return cb(null, result);
    });
  }

}

export { AIMap };
