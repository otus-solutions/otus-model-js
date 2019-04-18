(function () {
  'use strict';

  angular
    .module('otusjs.model.monitoring')
    .factory('otusjs.model.monitoring.HeatMapActivityFactory', Factory);

  Factory.$inject = ['$filter']
  function Factory($filter) {
    var self = this;

    /* Public methods */
    self.create = create;
    self.fromJsonObject = fromJsonObject;

    function create(json) {
      return new HeatMapActivityFactory($filter,json);
    }

    function fromJsonObject(jsonObject) {
      if (Array.isArray(jsonObject)) {
        return jsonObject.map(function (activity) {
          return new HeatMapActivityFactory($filter,activity);
        });
      } else {
        return [];
      }
    }

    return self;
  }

  function HeatMapActivityFactory($filter, json) {
    var self = this;

    const STATUS = {
      CREATED : 'Criado',
      SAVED : 'Salvo',
      FINALIZED : 'Finalizado',
      DOES_NOT_APPLY : 'DOES_NOT_APPLY',
      UNDEFINED : 'UNDEFINED',
      MULTIPLE : 'MULTIPLE',
      AMBIGUITY : 'AMBIGUITY'
    };

    self.toJSON = toJSON;

    self.objectType = "HeatMapActivityFactory";
    self.acronym = json.acronym || null;
    self.name = json.name || null;
    self.date = json.activities.length> 0 ? $filter('date')(json.activities[0].statusHistory.date, 'dd/MM/yyyy') : null;
    self.information = null;
    self.observation = null;
    _buildStatus(json);

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
      json.date = self.date;
      json.information = self.information;
      json.observation = self.observation;

      return json;
    }

  }


  var response = {
    acronym: "DSOC",
    name: "DIÁRIO DO SONO",
    activities: [
      {
        statusHistory:{
          objectType: "ActivityStatus",
          name:"CREATED",
          date: "2018-10-22T14:59:02.227Z",
          user:{
            email: "otus@otus-solutions.com",
            name: "Otus",
            phone: "5151515151",
            surname: "Solutions"
          }
        }
      }
    ],
    doesNotApply: {
      acronym: "DSOC",
      observation: "",
      recruitmentNumber: 9015648
    }
  }
}());
