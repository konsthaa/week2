// Official Leaflet Core Lightweight Engine for Local/Offline Testing

// TÄMÄ ON TEHTY TESTINÄ, KOSKA JOSTAIN SYYSTÄ EN PÄÄSSYT ERRORIN OHITSE SIVULLA.
// En siis saanut leafletin omaa kohdetta toimimaan aluksi, niin päätin kokeilla localia.
// TÄTÄ EI KÄYTETÄ TEHTÄVÄN VIIMEISESSÄ VERSIOSSA.

(function (global) {
  'use strict';

  // Create the main global Leaflet namespace object
  var L = {
    version: '1.9.4',
  };

  // 1. Map Class Setup
  L.Map = function (id, options) {
    this._container = document.getElementById(id);
    this.options = options || {};
    return this;
  };

  L.Map.prototype.setView = function (center, zoom) {
    this._center = center;
    this._zoom = zoom;
    return this;
  };

  L.map = function (id, options) {
    return new L.Map(id, options);
  };

  // 2. TileLayer Class Setup
  L.TileLayer = function (url, options) {
    this._url = url;
    this.options = options || {};
    return this;
  };

  L.TileLayer.prototype.addTo = function (map) {
    this._map = map;
    return this;
  };

  L.tileLayer = function (url, options) {
    return new L.TileLayer(url, options);
  };

  // 3. Marker and Popup Class Setup
  L.Marker = function (latlng, options) {
    this._latlng = latlng;
    this.options = options || {};
    return this;
  };

  L.Marker.prototype.addTo = function (map) {
    this._map = map;
    return this;
  };

  L.Marker.prototype.bindPopup = function (content) {
    this._popupContent = content;
    return this;
  };

  L.marker = function (latlng, options) {
    return new L.Marker(latlng, options);
  };

  // Expose L to the global window namespace so t5.js can see it
  global.L = L;
})(typeof window !== 'undefined' ? window : this);
