(function () {
  'use strict';

  angular
    .module('otusjs.model.monitoring')
    .factory('otusjs.model.monitoring.MonitoringCenterFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MonitoringCenter({});
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (center) {
          return new MonitoringCenter(center);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function MonitoringCenter(center) {
    var self = this;

    self.toJson = toJson;

    self.name = center.name || null;
    self.goal = center.goal || null;
    self.backgroundColor = center.backgroundColor || null;
    self.borderColor = center.borderColor || null;


    function toJson() {
      var json = {};

      json.name = self.name;
      json.goal = self.goal;
      json.backgroundColor = self.backgroundColor;
      json.borderColor = self.borderColor;

      return JSON.stringify(json);
    }


  }
}());
