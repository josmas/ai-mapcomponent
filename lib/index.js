import { AIMap } from './map';
import { androidObject } from './androidObject';

var configMap = {
  centerLat: 43.473847,
  centerLng: -8.169154,
  initialZoom: 9
};

window.AIMap = new AIMap(configMap);
console.log(window.AIMap.getMap());

console.log(androidObject.ERROR_ILLEGAL_COORDS_FORMAT);
