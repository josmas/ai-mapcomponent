import { AIMap } from './map';

var configMap = {
  centerLat: 43.473847,
  centerLng: -8.169154,
  initialZoom: 9
};

window.aIMap = new AIMap(configMap); //Added to window for dev/test purposes
console.log(window.aIMap.getMap());
