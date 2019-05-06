(function () {
  'use strict';

  angular
    .module('otusjs.model.monitoring')
    .factory('otusjs.model.monitoring.HeatMapExamFactory', Factory);

  function Factory() {
    var self = this;

    self.STATUS = {
      'DOES_NOT_HAVE': 'DOES_NOT_HAVE',
      'HAVE': 'HAVE',
      'DOES_NOT_APPLY': 'DOES_NOT_APPLY',
      'AMBIGUITY': 'AMBIGUITY'
    };

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.getStatus = getStatus;


    function create(json) {
      return new HeatMapExamFactory(self.getStatus(), json);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (activity) {
          return new HeatMapExamFactory(self.getStatus(), activity).toJSON();
        });
      } else {
        return [];
      }
    }

    function getStatus() {
      return self.STATUS;
    }

    return self;
  }

  function HeatMapExamFactory(STATUS, jsonData = {}) {
    var self = this;

    self.toJSON = toJSON;

    self.objectType = "HeatMapExam";
    self.name = jsonData.name || null;
    self.quantity = jsonData.quantity || 0;
    self.observation = jsonData.observation || null;

    if(jsonData.status){
      self.status = jsonData.status;
    }else {
      _buildStatus(jsonData);
    }

    function _buildStatus(data) {
      if (data.doesNotApply) {
        if (data.quantity == 0) {
          self.status = STATUS.DOES_NOT_APPLY;
          self.observation = data.doesNotApply.observation;
        } else {
          self.status = STATUS.AMBIGUITY;
          self.observation = data.doesNotApply.observation;
        }
      } else {
        if (data.quantity == 0) {
          self.status = STATUS.DOES_NOT_HAVE;
        } else if(data.quantity > 0){
          self.status = STATUS.HAVE;
        } else {
          self.status = 'UNDEFINED';
        }
      }
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.name = self.name;
      json.quantity = self.quantity;
      json.status = self.status;
      json.observation = self.observation;

      return json;
    }

  }


}());
