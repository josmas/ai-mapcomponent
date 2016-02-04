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

function geolocate(address, cb){
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({address: address}, function geolocationResults(results, status){
    if (status === 'OK') {
      var firstLocationFound = results[0].geometry.location;
      if (firstLocationFound){
        cb(null, results[0].formatted_address);
      }
      else {
        cb(new Error('No location found!'));
      }
    }
    else if (status === 'ZERO_RESULTS'){
      cb(new Error('No results found for that particular address.'));
    }
    else {
      cb(new Error('No results found. Status of Geolocation call: ' + status));
    }
  });
}

export { locationFromLatLngCoords, geolocate };