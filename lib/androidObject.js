var androidObject = {

  // CONSTANTS FOR ERRORS, As defined on the Android side.
  ERROR_ILLEGAL_COORDS_FORMAT: 2702,
  ERROR_PARSING_MARKERS_LIST: 2703,
  ERROR_INVALID_MARKER: 2704,
  ERROR_NO_GEOLOCATION_RESULTS: 2706,

  /**
   * Function to dispatch errors to Android through the AppInventorMap interface. If this
   * file is loaded on a browser, AppInventorMap will be undefined and we skip the
   * dispatching.
   * TODO (jos) think about Error handling in JS if I even want to use this file standalone.
   * @param errorNumber number for the message to display as user feedback on the Android
   * side. The messages are defined in ErrorMessages.java
   */
  dispatchErrorToAndroid: function(errorNumber) {
    if (typeof AppInventorMap !== 'undefined')
      AppInventorMap.dispatchError(errorNumber);
  },

  /**
   * Function to call to the Android side after a user has clicked on a marker
   */
  sendMarkerToAndroid: function(jsonMarker) {
    if (typeof AppInventorMap !== 'undefined')
      AppInventorMap.handleMarker(jsonMarker);
  },

  sendDoubleMarkerToAndroid: function(jsonMarker) {
    if (typeof AppInventorMap !== 'undefined')
      AppInventorMap.handleDoubleMarker(jsonMarker);
  },

  /**
   * Function to export all markers to the Android side for storage
   */
  sendListOfMarkersToAndroid: function(markers) {
    if (typeof AppInventorMap !== 'undefined')
      AppInventorMap.storeMarkers(markers);
  },

  /**
   * Notify Component that the Map is ready.
   */
  mapIsReadyToAndroid: function() {
    if (typeof AppInventorMap !== 'undefined')
      AppInventorMap.mapIsReady();
  },

  sendUserMarkerAddedToAndroid: function(markerJson) {
    if (typeof AppInventorMap !== 'undefined')
      AppInventorMap.userMarkerAdded(markerJson);
  },

  sendGeolocationMarkerAddedToAndroid: function(markerJson, formattedAddress) {
    if (typeof AppInventorMap !== 'undefined')
      AppInventorMap.geolocationMarkerAdded(markerJson, formattedAddress);
  }

};

export { androidObject };
