class AIMap {
  constructor(mapConfig) {
    this.centerLat = mapConfig.centerLat;
    this.centerLng = mapConfig.centerLng;
    this.showCenter = mapConfig.showCenter;
    this.initialZoom = mapConfig.initialZoom;
  }

  getLatLng() {
    return { lat: this.centerLat, lng: this.centerLng };
  }
}

export { AIMap };
