(function () {
  'use strict';

  angular
    .module('otusjs.model.monitoring')
    .factory('otusjs.model.monitoring.MonitoringFactory', Factory);

  function Factory() {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MonitoringInformation({});
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (center) {
          return new MonitoringInformation(center);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function MonitoringInformation(center) {
    var self = this;

    self.toJson = toJson;

    self.acronym = center.acronym || null;
    self.fieldCenter = center.fieldCenter || null;
    self.month = center.month || null;
    self.sum = center.sum || null;
    self.year = center.year || null;


    function toJson() {
      var json = {};

      json.acronym = self.acronym;
      json.fieldCenter = self.fieldCenter;
      json.month = self.month;
      json.sum = self.sum;
      json.year = self.year;

      return JSON.stringify(json);
    }


  }
}());
