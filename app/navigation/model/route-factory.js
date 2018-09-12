(function () {
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
    self.createAlternative = createAlternative;
    self.createDefault = createDefault;
    self.fromJson = fromJson;

    function createDefault(origin, destination) {
      if (!origin || !destination) {
        return null;
      }

      var route = new Route(origin, destination, null);
      route.isDefault = true;
      return route;
    }

    function createAlternative(origin, destination, conditions) {
      if (conditions && conditions.length) {
        return new Route(origin, destination, conditions);
      } else {
        return null;
      }
    }

    function fromJson(json) {
      var jsonObj = JSON.parse(json);
      var route = null;
      if (jsonObj.isDefault) {
        route = createDefault(jsonObj.origin, jsonObj.destination);
      } else {
        route = createAlternative(jsonObj.origin, jsonObj.destination, jsonObj.conditions.map(_rebuildConditions));
      }
      route.isDefault = jsonObj.isDefault;
      return route;
    }

    function _rebuildConditions(condition) {
      condition = (condition instanceof Object) ? JSON.stringify(condition) : condition;
      return RouteConditionFactory.fromJson(condition);
    }

    return self;
  }

  function Route(routeOrigin, routeDestination, conditions) {
    var self = this;

    self.extents = 'SurveyTemplateObject';
    self.objectType = 'Route';
    self.origin = routeOrigin;
    self.destination = routeDestination;
    self.name = routeOrigin + '_' + routeDestination;
    self.isDefault = false;
    self.conditions = [];

    /* Public interface */
    self.getDestination = getDestination;
    self.addCondition = addCondition;
    self.instanceOf = instanceOf;
    self.listConditions = listConditions;
    self.removeCondition = removeCondition;
    self.equals = equals;
    self.selfsame = selfsame;
    self.clone = clone;
    self.toJSON = toJSON;

    _init();

    function getDestination() {
      return self.destination;
    }

    function addCondition(condition) {
      if (!self.isDefault && !_conditionExists(condition)) {
        self.conditions.push(condition);
      }
    }

    function instanceOf() {
      return 'Route';
    }

    function listConditions() {
      var clone = [];

      self.conditions.forEach(function (condition) {
        clone.push(condition);
      });

      return clone;
    }

    function removeCondition(condition) {
      if (self.conditions.length > 1) {
        var index = self.conditions.indexOf(condition);
        if (index > -1) {
          self.conditions.splice(index, 1);
        }
      }
    }

    function equals(other) {
      if (other.objectType !== self.objectType) {
        return false;
      }

      if (other.isDefault !== self.isDefault) {
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
          var hasEqualConditions = other.conditions.every(function (otherCondition) {
            return self.conditions.some(function (selfCondition) {
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
      // TODO Imcompatibility
      //return Object.is(self, other);
    }

    function clone() {
      var clone = new self.constructor(self.origin, self.destination, self.conditions);
      clone.isDefault = self.isDefault;
      return clone;
    }

    function toJSON() {
      var json = {};

      json.extents = self.extents;
      json.objectType = self.objectType;
      json.origin = self.origin;
      json.destination = self.destination;
      json.name = self.name;
      json.isDefault = self.isDefault;
      json.conditions = self.conditions.map(function (condition) {
        return condition.toJSON();
      });

      return json;
    }

    function _init() {
      if (conditions) {
        conditions.map(self.addCondition);
      }
    }

    function _conditionExists(newCondition) {
      return self.conditions.some(function (condition) {
        return newCondition.equals(condition);
      });
    }
  }
}());
