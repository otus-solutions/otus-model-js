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

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(setPosition, showError);
        } else {
          throw new Error("Geolocation is not supported by this browser.");
        }
      }

      function setPosition(position) {
        self.type = angular.copy('point');
        self.coordinates = angular.copy([0,0]);
        self.coordinates[0] =  angular.copy(position.coords.latitude);
        self.coordinates[1] = angular.copy(position.coords.longitude);
        self = toJSON();
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
        return null;
      }

      function toJSON() {
        var json = {
          type: self.type,
          coordinates: self.coordinates
        };
        return json;
      }
      getLocation();
      return self;
    }
  }

  return Factory();
})();


