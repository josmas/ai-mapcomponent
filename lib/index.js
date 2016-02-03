import { AIMap } from './map';
import { androidObject } from './androidObject';

var configMap = {
  centerLat: 10,
  centerLng: 20,
  showCenter: true,
  initialZoom: 9
};

var x = new AIMap(configMap);
console.log(x.getLatLng());

console.log(androidObject.ERROR_ILLEGAL_COORDS_FORMAT);
