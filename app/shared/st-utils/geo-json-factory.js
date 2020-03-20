var global = window || global;
global.GeoJSON = (function () {

  'use strict';

  angular.module('utils')
    .factory('GeoJSON', Factory);


  function Factory() {
    var constructor = function () {
      return new GeoJSON();

    };
    return constructor;

    function GeoJSON() {
      var self = this;
      self.objectType = 'GeoJSON';
      self.type = 'point';
      self.coordinates = [0,0];


      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(setPosition, showError);
        } else {
          throw new Error("Geolocation is not supported by this browser.");
        }
      }

      function setPosition(position) {
        self.coordinates[0] =  position.coords.longitude;
        self.coordinates[1] = position.coords.latitude;
        return toJSON();
      }


      function showError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            throw new Error("User denied the request for Geolocation.");
          case error.POSITION_UNAVAILABLE:
            throw new Error("Location information is unavailable.");
          case error.TIMEOUT:
            throw new Error("The request to get user location timed out.");
          case error.UNKNOWN_ERROR:
            throw new Error("An unknown error occurred.");
        }
      }

      function toJSON() {
        var json = {
          type: self.type,
          coordinates: self.coordinates
        }
        return json;
      }

      return getLocation();
    }
  }

  return Factory();
})();


