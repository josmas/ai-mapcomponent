import { AIMap } from './map';

var configMap = {
  centerLat: 10,
  centerLng: 20,
  showCenter: true,
  initialZoom: 9
};

var x = new AIMap(configMap);
console.log(x.getLatLng());
console.log(x.getLatLng());
console.log(x.getLatLng());
