(function () {
  'use strict';

  angular
    .module('otusjs.model.chart')
    .factory('otusjs.model.chart.VerticalBarFactory', Factory);

  Factory.$inject = [
    'otusjs.laboratory.configuration.AliquotDescriptorsService'
  ]

  function Factory(AliquotDescriptorsService) {
    var self = this;

    var COLUMN_NAMES = {
      waiting : "Aguardando",
      received : "Recebidos",
      transported: "Transportados",
      orphans: "Orfãos"
    };

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create() {
      return new MonitoringPending();
    }

    function fromJsonObject(jsonObject) {
      var dataset = [];
      var keys = [];
      if (Array.isArray(jsonObject)) {
        keys = Object.keys(jsonObject[0]);
        for (var i = 1; i < keys.length; i++) {
          dataset.push(jsonObject.map(function (data) {
            return new MonitoringPending(
              COLUMN_NAMES[keys[i]],
              AliquotDescriptorsService.getLabel(data.title),
              data[keys[i]]).toJSON()
          }));
        }
        return dataset;
      } else {
        return [[]];
      }
    }

    return self;
  }

  function MonitoringPending(title, column, value) {
    var self = this;

    self.toJSON = toJSON;

    self.char_title = title || "";
    self.column = column || "";
    self.value = value || 0;

    function toJSON() {
      var json = {};
      json.char_title = self.char_title;
      json.column = self.column;
      json.value = self.value;

      return json;
    }


  }
}());
