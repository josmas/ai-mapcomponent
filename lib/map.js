import { androidObject } from './androidObject';

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
}

export { AIMap };
