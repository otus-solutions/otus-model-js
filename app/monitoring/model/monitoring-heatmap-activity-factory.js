(function () {
  'use strict';

  angular
    .module('otusjs.model.monitoring')
    .factory('otusjs.model.monitoring.HeatMapActivityFactory', Factory);

  Factory.$inject = ['$filter']
  function Factory($filter) {
    var self = this;

    self.STATUS = {}

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;
    self.getStatus = getStatus;
    self.setStatus = setStatus;

    function create(json) {
      return new HeatMapActivityFactory($filter, self.getStatus(), json);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (activity) {
          return new HeatMapActivityFactory($filter, self.getStatus(), activity).toJSON();
        });
      } else {
        return [];
      }
    }

    function setStatus(status) {
      if(status && !Array.isArray(status)){
        self.STATUS[status] = status;
      } else if (status && Array.isArray(status)){
        status.forEach(function (statusName) {
          self.STATUS[statusName] = statusName;
        })
      }
    }

    function getStatus() {
      return self.STATUS;
    }

    return self;
  }

  function HeatMapActivityFactory($filter, STATUS, jsonData) {
    var self = this;

    self.toJSON = toJSON;

    self.objectType = "HeatMapActivityFactory";
    self.acronym = jsonData.acronym || null;
    self.name = jsonData.name || null;
    self.date = jsonData.activities.length> 0 ? $filter('date')(jsonData.activities[0].statusHistory.date, 'dd/MM/yyyy') : null;
    self.information = null;
    self.observation = null;
    if(jsonData.status){
      self.status = jsonData.status;
    }else {
      _buildStatus(jsonData);
    }

    function _buildStatus(data) {
      if (data.doesNotApply) {
        if (data.activities.length == 0) {
          self.status = STATUS.DOES_NOT_APPLY;
          self.observation = data.doesNotApply ? data.doesNotApply.observation : undefined;
        } else {
          self.status = STATUS.AMBIGUITY;
          self.observation = data.doesNotApply ? data.doesNotApply.observation : undefined;
        }
      } else if (data.activities.length == 0) {
        self.status = STATUS.UNDEFINED
      } else if (data.activities.length > 1) {
        var information = [];
        data.activities.filter(function (activity) {
          information.push({
            'status': STATUS[activity.statusHistory.name],
            'date': $filter('date')(activity.statusHistory.date, 'dd/MM/yyyy')
          });
        });
        self.status = STATUS.MULTIPLE;
        self.information = information;

      } else if (data.activities.length == 1) {
        self.status = STATUS[data.activities[0].statusHistory.name];
      }
    }

    function toJSON() {
      var json = {};

      json.objectType = self.objectType;
      json.acronym = self.acronym;
      json.name = self.name;
      json.status = self.status;
      json.date = self.date;
      json.information = self.information;
      json.observation = self.observation;

      return json;
    }

  }

}());
