function locationFromLatLngCoords(lat, lng){
  var errorParsing = false;

  if (isNaN(lat) || isNaN(lng)) errorParsing = true;
  if (lat < -90 || lat > 90) errorParsing = true;
  if (lng < -180 || lng > 180) errorParsing = true;

  if (errorParsing){
    throw new Error('Cannot parse coordinates; ' + lat + ' : ' + lng);
  }
  else
    return new google.maps.LatLng(lat, lng);
}

export { locationFromLatLngCoords };