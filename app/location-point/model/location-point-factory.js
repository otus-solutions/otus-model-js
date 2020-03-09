(function () {
  'use strict';

  angular
    .module('otusjs.model.locationPoint')
    .factory('otusjs.model.locationPoint.LocationPointFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.fromArray = fromArray;

    function create() {
      return new LocationPoint({});
    }

    function fromArray(arrayObject) {
      if (Array.isArray(arrayObject)) {
        return arrayObject.map(function (locationPoint) {
          return new LocationPoint(locationPoint);
        });
      } else {
        return [];
      }
    }

    function fromJsonObject(jsonObject) {
      return new LocationPoint(jsonObject);
    }

    return self;
  }

  function LocationPoint(locationPoint) {
    var self = this;

    self.toJSON = toJSON;

    self._id = locationPoint._id ? locationPoint["_id"].$oid : null;
    self.name = locationPoint.name || null;
    self.users = locationPoint.users || [];

    self.setUser = setUser;
    self.removeUser = removeUser;

    function setUser(email) {
      if (typeof email === "string" && !self.users.includes(email)) {
        self.users.push(email);
      }
    }

    function removeUser(email) {
      var _index = self.users.indexOf(email);
      if (_index > -1) {
        self.users.splice(_index, 1);
      }
    }


    function toJSON() {
      var json = {};

      json._id = self._id;
      json.name = self.name;
      json.users = self.users;

      return json;
    }


  }
}());
