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

    function create(data) {
      return new MonitoringCenter(data);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (data) {
          return new MonitoringCenter(data);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function MonitoringCenter(data) {
    var self = this;

    self.toJson = toJson;

    self.name = data.name || null;
    self.goal = data.goal || null;
    self.backgroundColor = data.backgroundColor || null;
    self.borderColor = data.borderColor || null;


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
