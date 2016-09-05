(function() {
  'use strict';

  angular
    .module('otusjs.model.navigation')
    .factory('otusjs.model.navigation.RouteFactory', factory);

  factory.$inject = [
    'otusjs.model.navigation.RouteConditionFactory'
  ];

  function factory(RouteConditionFactory) {
    var self = this;

    /* Public interface */
    self.create = create;
    self.fromJson = fromJson;

    function create(origin, destination) {
      return new Route(origin, destination);
    }

    function fromJson(json) {
      var jsonObj = JSON.parse(json);
      var route = new Route(jsonObj.origin, jsonObj.destination);

      jsonObj.conditionSet.forEach(function(condition) {
        condition = (condition instanceof Object) ? JSON.stringify(condition) : condition;
        var newCondition = RouteConditionFactory.fromJson(condition);
        route.addCondition(newCondition);
      });

      return route;
    }

    return self;
  }

  function Route(routeOrigin, routeDestination) {
    var self = this;

    self.extents = 'StudioObject';
    self.objectType = 'Route';
    self.name = routeOrigin + '_' + routeDestination;
    self.origin = routeOrigin;
    self.destination = routeDestination;
    self.conditionSet = [];
    self.isDefault = false;

    /* Public interface */
    self.getConditionSet = getConditionSet;
    self.addCondition = addCondition;
    self.removeCondition = removeCondition;
    self.getConditionSetSize = getConditionSetSize;
    self.toJson = toJson;

    function getConditionSet() {
      var clone = [];

      self.conditionSet.forEach(function(condition) {
        clone.push(condition);
      });

      return clone;
    }

    function getConditionSetSize() {
      return self.conditionSet.length;
    }

    function addCondition(condition) {
      condition.name += getConditionSetSize() + 1;
      self.conditionSet.push(condition);
    }

    function removeCondition(name) {
      var conditionToRemove = self.conditionSet.filter(function(condition) {
        return condition.name === name;
      });

      var indexToRemove = self.conditionSet.indexOf(conditionToRemove[0]);
      if (indexToRemove > -1) {
        self.conditionSet.splice(indexToRemove, 1);
      }

      return conditionToRemove[0];
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.name = self.name;
      json.origin = self.origin;
      json.destination = self.destination;
      json.index = self.index;
      json.conditionSet = [];
      json.isDefault = self.isDefault;

      if (self.conditionSet) {
        for (var conditionName in self.conditionSet) {
          json.conditionSet[conditionName] = self.conditionSet[conditionName].toJson();
        }
      }

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }
  }
}());
