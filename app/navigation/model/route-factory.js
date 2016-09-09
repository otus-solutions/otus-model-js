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
      var route = create(jsonObj.origin, jsonObj.destination);
      route.conditions = jsonObj.conditions.map(_mapConditions);
      route.isDefault = jsonObj.isDefault;
      return route;
    }

    function _mapConditions(condition) {
      condition = (condition instanceof Object) ? JSON.stringify(condition) : condition;
      return RouteConditionFactory.fromJson(condition);
    }

    return self;
  }

  function Route(routeOrigin, routeDestination) {
    var self = this;

    self.extents = 'SurveyTemplateObject';
    self.objectType = 'Route';
    self.origin = routeOrigin;
    self.destination = routeDestination;
    self.name = routeOrigin + '_' + routeDestination;
    self.isDefault = false;
    self.conditions = [];

    /* Public interface */
    self.listConditions = listConditions;
    self.addCondition = addCondition;
    self.removeCondition = removeCondition;
    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJson = toJson;

    function listConditions() {
      var clone = [];

      self.conditions.forEach(function(condition) {
        clone.push(condition);
      });

      return clone;
    }

    function addCondition(condition) {
      if (!_conditionExists(condition)) {
        self.conditions.push(condition);
      }
    }

    function removeCondition(condition) {
      var index = self.conditions.indexOf(condition);
      if (index > -1) {
        self.conditions.splice(index, 1);
      }
    }

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.origin !== self.origin) {
        return false;
      }

      if (other.destination !== self.destination) {
        return false;
      }

      if (other.name !== self.name) {
        return false;
      }

      if (other.conditions.length === self.conditions.length) {
        if (self.conditions.length > 0) {
          var hasEqualConditions = other.conditions.some(function(otherCondition) {
            return self.conditions.some(function(selfCondition) {
              return selfCondition.equals(otherCondition);
            });
          });

          if (!hasEqualConditions) {
            return false;
          }
        } else {
          return true;
        }
      } else {
        return false;
      }

      return true;
    }

    function selfsame(other) {
      return Object.is(self, other);
    }

    function clone() {
      return Object.assign(new Route(), self);
    }

    function toJson() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.destination = self.destination;
      json.name = self.name;
      json.isDefault = self.isDefault;
      json.conditions = self.conditions.map(function(condition) {
        return condition.toJson();
      });

      return JSON.stringify(json).replace(/"{/g, '{').replace(/\}"/g, '}').replace(/\\/g, '');
    }

    function _conditionExists(newCondition) {
      return self.conditions.some(function(condition) {
        return newCondition.equals(condition);
      });
    }
  }
}());
