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

    function create(monitoringCenter) {
      return new MonitoringCenter(monitoringCenter);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (monitoringCenter) {
          return new MonitoringCenter(monitoringCenter);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function MonitoringCenter(monitoringCenter) {
    var self = this;

    self.toJson = toJson;

    self.objectType = 'MonitoringCenter'
    self.name = monitoringCenter.name || null;
    self.goal = monitoringCenter.goal || null;
    self.backgroundColor = monitoringCenter.backgroundColor || null;
    self.borderColor = monitoringCenter.borderColor || null;


    function toJson() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.goal = self.goal;
      json.backgroundColor = self.backgroundColor;
      json.borderColor = self.borderColor;

      return JSON.stringify(json);
    }


  }
}());
